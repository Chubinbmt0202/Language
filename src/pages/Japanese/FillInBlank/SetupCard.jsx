// src/components/SetupCard.jsx
import React from 'react';
import { Card, Typography, Select, Button } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const SetupCard = ({ onStart, isLoading, value, setValue }) => {
  return (
    <Card style={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
      <Title level={3}>Cấu hình bài luyện tập</Title>
      
      <div style={{ marginTop: 20, textAlign: 'left' }}>
        <Text strong>Chọn loại ký tự muốn ôn:</Text>
        
        <Select 
          // Bỏ defaultValue, chỉ dùng value được truyền từ props
          value={value} 
          style={{ width: '100%', marginBottom: 20, marginTop: 8 }} 
          onChange={(val) => setValue(val)}
        >
          <Option value="hiragana-text">Hiragana (ひらがな)</Option>
          <Option value="katakana-text">Katakana (カタカナ)</Option>
          <Option value="kanji-text">Kanji (漢字)</Option>
          <Option value="mixed-text">Xáo trộn (Tất cả)</Option>
        </Select>

        <Button 
          type="primary" 
          size="large" 
          block 
          onClick={onStart} 
          loading={isLoading}
        >
          Bắt đầu luyện tập
        </Button>
      </div>
    </Card>
  );
};

export default SetupCard;