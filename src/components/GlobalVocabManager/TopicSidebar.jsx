import React, { useState } from "react";
import { Layout, Menu, Button, Input, Modal, Popconfirm, Typography, message, Space } from "antd";
import { 
  PlusOutlined, 
  BookOutlined, 
  CloseOutlined, 
  FolderAddOutlined 
} from "@ant-design/icons";

const { Sider } = Layout;
const { Text } = Typography;

const TopicSidebar = ({ topics, setTopics, activeTopicId, setActiveTopicId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState("");

  const addTopic = () => {
    if (!newTopicName.trim()) return;
    const newId = Date.now().toString();
    const newTopic = { id: newId, name: newTopicName, words: [] };
    setTopics([...topics, newTopic]);
    setNewTopicName("");
    setIsModalOpen(false);
    setActiveTopicId(newId);
    message.success("Đã tạo chủ đề mới");
  };

  const deleteTopic = (e, topicId) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click vào Menu Item
    if (topics.length === 1) {
      message.error("Bạn phải giữ lại ít nhất 1 chủ đề!");
      return;
    }
    const newTopics = topics.filter((t) => t.id !== topicId);
    setTopics(newTopics);
    if (topicId === activeTopicId) setActiveTopicId(newTopics[0].id);
    message.success("Đã xóa chủ đề");
  };

  return (
    <>
      <Sider
        theme="light"
        width={250}
        style={{ borderRight: "1px solid #f0f0f0" }}
      >
        <div style={{
          padding: "16px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text strong><BookOutlined /> CHỦ ĐỀ</Text>
          <Button
            type="primary"
            ghost
            size="small"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <Menu
          mode="inline"
          selectedKeys={[activeTopicId]}
          style={{ border: "none" }}
          items={topics.map((t) => ({
            key: t.id,
            onClick: () => setActiveTopicId(t.id),
            label: (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  overflow: "hidden", 
                  textOverflow: "ellipsis", 
                  whiteSpace: "nowrap", 
                  maxWidth: "130px" 
                }}>
                  {t.name}
                </span>
                {topics.length > 1 && (
                  <Popconfirm
                    title="Xóa chủ đề này?"
                    onConfirm={(e) => deleteTopic(e, t.id)}
                    okText="Xóa"
                    cancelText="Hủy"
                  >
                    <Button
                      type="text"
                      size="small"
                      icon={<CloseOutlined style={{ fontSize: 10, color: "#999" }} />}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </Popconfirm>
                )}
              </div>
            ),
          }))}
        />
      </Sider>

      {/* Modal tạo chủ đề mới */}
      <Modal
        title="Tạo chủ đề mới"
        open={isModalOpen}
        onOk={addTopic}
        onCancel={() => setIsModalOpen(false)}
        okText="Tạo ngay"
      >
        <Input
          autoFocus
          prefix={<FolderAddOutlined />}
          placeholder="Ví dụ: Động vật, N3 Vocabulary..."
          value={newTopicName}
          onChange={(e) => setNewTopicName(e.target.value)}
          onPressEnter={addTopic}
        />
      </Modal>
    </>
  );
};

export default TopicSidebar;