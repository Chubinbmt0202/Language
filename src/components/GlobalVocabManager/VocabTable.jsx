/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Space,
  Tag,
  Typography,
  Popconfirm,
  Form,
  Input,
  Select,
  message,
  Empty,
} from "antd";
import {
  SoundOutlined,
  DeleteOutlined,
  FireOutlined,
  EditOutlined,
} from "@ant-design/icons";
import * as wanakana from "wanakana";

const { Text } = Typography;

const VocabTable = ({
  activeTopic,
  topics,
  setTopics,
  activeLang,
  onPractice,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingWord, setEditingWord] = useState(null);
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = activeLang === "en" ? "en-US" : "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleEditClick = (record) => {
    setEditingWord({ ...record });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    try {
      const updatedTopics = topics.map(t => {
        if (t.id === activeTopic.id) {
          return {
            ...t,
            words: t.words.map(w => w.key === editingWord.key ? editingWord : w)
          };
        }
        return t;
      });
      setTopics(updatedTopics);
      setIsEditModalOpen(false);
      
      // Thông báo thành công
      message.success("Đã cập nhật từ vựng thành công!");
    } catch (error) {
      message.error("Có lỗi xảy ra khi cập nhật!");
    }
  };

  const deleteWord = (wordKey) => {
    const updated = topics.map((t) =>
      t.id === activeTopic.id
        ? { ...t, words: t.words.filter((w) => w.key !== wordKey) }
        : t,
    );
    setTopics(updated);
  };

  const columns =
    activeLang === "en"
      ? [
          {
            title: "Từ vựng",
            render: (_, r) => (
              <Space orientation="vertical" size={0}>
                <Text strong style={{ color: "#1890ff" }}>
                  {r.word}
                </Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {r.ipa}
                </Text>
              </Space>
            ),
          },
          {
            title: "Loại",
            dataIndex: "type",
            render: (type) => <Tag color="orange">{type?.toUpperCase()}</Tag>,
          },
          {
            title: "Nghĩa",
            dataIndex: "meaning",
            render: (text) => <Text strong>{text}</Text>,
          },
          {
            title: "Hành động",
            align: "right",
            render: (_, record) => (
              <Space>
                <Button
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => handleEditClick(record)}
                />
                <Popconfirm
                  title="Xóa từ này?"
                  onConfirm={() => {
                    const updated = topics.map((t) =>
                      t.id === activeTopic.id
                        ? {
                            ...t,
                            words: t.words.filter((w) => w.key !== record.key),
                          }
                        : t,
                    );
                    setTopics(updated);
                  }}
                >
                  <Button size="small" danger icon={<DeleteOutlined />} />
                </Popconfirm>
              </Space>
            ),
          },
        ]
      : [
          {
            title: "Phát âm",
            width: 80,
            align: "center",
            render: (_, record) => (
              <Button
                shape="circle"
                icon={<SoundOutlined />}
                onClick={() => speak(record.hiragana)}
              />
            ),
          },
          {
            title: "Từ vựng (Kana)",
            render: (_, record) => (
              <Space direction="vertical" size={0}>
                <Text strong style={{ color: "#1890ff", fontSize: 16 }}>
                  {record.hiragana}
                </Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {record.katakana}
                </Text>
              </Space>
            ),
          },
          {
            title: "Nghĩa",
            dataIndex: "meaning",
            render: (text) => <Text strong>{text}</Text>,
          },
          {
            title: "Hành động",
            align: "right",
            render: (_, record) => (
              <Space>
                <Button
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => handleEditClick(record)}
                />
                <Popconfirm
                  title="Xóa từ này?"
                  onConfirm={() => {
                    const updated = topics.map((t) =>
                      t.id === activeTopic.id
                        ? {
                            ...t,
                            words: t.words.filter((w) => w.key !== record.key),
                          }
                        : t,
                    );
                    setTopics(updated);
                  }}
                >
                  <Button size="small" danger icon={<DeleteOutlined />} />
                </Popconfirm>
              </Space>
            ),
          },
        ];

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text type="secondary">
          Tổng số: {activeTopic?.words.length || 0} từ
        </Text>
        {activeTopic?.words.length > 0 && (
          <Button
            type="primary"
            danger
            icon={<FireOutlined />}
            onClick={onPractice}
          >
            Luyện tập ngay
          </Button>
        )}
      </div>
      <Table
        dataSource={activeTopic?.words}
        columns={columns}
        rowKey="key"
        pagination={{ pageSize: 6 }}
        locale={{
          emptyText: <Empty description="Chủ đề này chưa có từ nào" />,
        }}
      />
      {/* MODAL SỬA TỪ VỰNG */}
      <Modal
        title="Chỉnh sửa từ vựng"
        open={isEditModalOpen}
        onOk={handleSaveEdit}
        onCancel={() => setIsEditModalOpen(false)}
        destroyOnHidden
      >
        {editingWord && (
          <Form layout="vertical">
            {activeLang === "en" ? (
              <>
                <Form.Item label="Từ vựng (English)">
                  <Input
                    value={editingWord.word}
                    onChange={(e) =>
                      setEditingWord({ ...editingWord, word: e.target.value })
                    }
                  />
                </Form.Item>
                                <Form.Item label="Nghĩa tiếng Việt">
                  <Input
                    value={editingWord.meaning}
                    onChange={(e) =>
                        setEditingWord({
                            ...editingWord,
                            meaning: e.target.value,
                        })
                    }
                  />
                </Form.Item>
                <Form.Item label="Phiên âm (IPA)">
                  <Input
                    value={editingWord.ipa}
                    onChange={(e) =>
                      setEditingWord({ ...editingWord, ipa: e.target.value })
                    }
                  />
                </Form.Item>
                

              </>
            ) : (
              <>
                <Form.Item label="Nghĩa tiếng Việt">
                  <Input
                    value={editingWord.meaning}
                    onChange={(e) =>
                      setEditingWord({
                        ...editingWord,
                        meaning: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item label="Romaji (Gõ để tự chuyển Hiragana)">
                  <Input
                    value={editingWord.romaji}
                    onChange={(e) =>
                      setEditingWord({
                        ...editingWord,
                        romaji: e.target.value,
                        hiragana: wanakana.toHiragana(e.target.value),
                        katakana: wanakana.toKatakana(e.target.value),
                      })
                    }
                  />
                </Form.Item>
                <Form.Item label="Hiragana">
                  <Input
                    value={editingWord.hiragana}
                    readOnly
                    className="bg-gray-100"
                  />
                </Form.Item>
              </>
            )}
            <Form.Item label="Loại từ">
              <Select
                value={editingWord.type}
                onChange={(val) =>
                  setEditingWord({ ...editingWord, type: val })
                }
              >
                <Select.Option value="n">Danh từ (Noun)</Select.Option>
                <Select.Option value="v">Động từ (Verb)</Select.Option>
                <Select.Option value="adj">Tính từ (Adj)</Select.Option>
                <Select.Option value="adv">Trạng từ (Adv)</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default VocabTable;
