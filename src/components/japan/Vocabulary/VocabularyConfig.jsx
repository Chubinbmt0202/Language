import React from "react";
import { Form, Input, Button, Card, List, Select, Radio } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

// Helper: Sinh ký tự nhiễu dựa trên loại bảng chữ cái
const getRandomChar = (type) => {
  let min, max;
  if (type === 'Katakana') {
    min = 0x30A0; max = 0x30FF;
  } else {
    // Mặc định Hiragana
    min = 0x3041; max = 0x3093;
  }
  const hex = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCharCode(hex);
};

const VocabularyConfig = ({ currentData, onSave, onDelete }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { fullWord, meaning, imageUrl, level, type } = values;
    
    const parts = fullWord.split(""); 
    
    // Tạo options nhiễu dựa trên Type người dùng chọn
    let options = [...parts];
    while (options.length < 10) {
      options.push(getRandomChar(type));
    }
    options = options.sort(() => Math.random() - 0.5);

    const newQuestion = {
      fullWord, meaning, imageUrl, parts, options, level, type
    };

    onSave(newQuestion);
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 20 }}>
        
        <Card title="Thêm từ vựng mới" className="config-card">
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ level: 'N5', type: 'Hiragana' }}>
            
            <div style={{ display: 'flex', gap: 10 }}>
              <Form.Item name="level" label="Trình độ" style={{ flex: 1 }}>
                <Select>
                  <Option value="N5">N5</Option>
                  <Option value="N4">N4</Option>
                  <Option value="N3">N3</Option>
                </Select>
              </Form.Item>
              <Form.Item name="type" label="Loại" style={{ flex: 1 }}>
                <Select>
                  <Option value="Hiragana">Hiragana</Option>
                  <Option value="Katakana">Katakana</Option>
                  <Option value="Kanji">Kanji</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item name="fullWord" label="Từ vựng" rules={[{ required: true }]}>
              <Input placeholder="Ví dụ: ねこ" />
            </Form.Item>

            <Form.Item name="meaning" label="Nghĩa" rules={[{ required: true }]}>
              <Input placeholder="Ví dụ: Con mèo" />
            </Form.Item>

            <Form.Item name="imageUrl" label="Link Ảnh" rules={[{ required: true }]}>
              <Input placeholder="URL hình ảnh..." />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>Lưu</Button>
          </Form>
        </Card>

        <Card title="Danh sách từ vựng hiện có" className="config-card">
          <List
            itemLayout="horizontal"
            dataSource={currentData}
            pagination={{ pageSize: 4 }}
            renderItem={(item) => (
              <List.Item actions={[<Button danger icon={<DeleteOutlined />} onClick={() => onDelete(item.id)} />]}>
                <List.Item.Meta
                  avatar={<img src={item.imageUrl} alt="img" style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }} />}
                  title={<span>{item.fullWord} <small style={{color: '#888'}}>({item.level} - {item.type})</small></span>}
                  description={item.meaning}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default VocabularyConfig;