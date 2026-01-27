import React from 'react';
import { Card, Typography, Select, Button } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const SetupCard = ({ config, setConfig, onStart, isLoading }) => {
  return (
    <Card style={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
      <Title level={3}>Luyện đọc Hiragana</Title>
      <div style={{ marginTop: 20, textAlign: 'left' }}>
        <Text strong>Chủ đề:</Text>
        <Select 
          value={config.topic} 
          style={{ width: '100%', marginBottom: 20 }} 
          onChange={v => setConfig({...config, topic: v})}
        >
          <Option value="Self Introduction">Giới thiệu bản thân</Option>
          <Option value="Daily Routine">Thói quen hàng ngày</Option>
          <Option value="Travel in Japan">Du lịch Nhật Bản</Option>
          <Option value="Food and Drink">Ẩm thực</Option>
        </Select>
        <Button type="primary" size="large" block onClick={onStart} loading={isLoading}>
          Bắt đầu luyện tập
        </Button>
      </div>
    </Card>
  );
};

export default SetupCard;