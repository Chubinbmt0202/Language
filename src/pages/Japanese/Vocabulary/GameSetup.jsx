import React, { useState, useEffect } from "react";
import { Form, Select, Button, Card, Radio, Typography, Slider, Row, Col } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
// 1. Import Hook
import { useVocabGame } from "../../../hooks/useVocabGame"; // Nhớ sửa đường dẫn đúng

const { Title, Text } = Typography;
const { Option } = Select;

const GameSetup = ({ onStart }) => { // onStart lúc này sẽ nhận Data thay vì Settings
  const [form] = Form.useForm();
  
  // 2. Sử dụng Hook
  const { gameState, acction } = useVocabGame();
  
  const [inputValue, setInputValue] = useState(5);

  // 3. Xử lý khi bấm nút Bắt đầu
  const onFinish = (values) => {
    console.log("Cài đặt bài tập đã chọn:", values);
    // Gọi hàm từ Hook, truyền các lựa chọn từ form vào
    acction.startExercise(values);
  };

  useEffect(() => {
    if (gameState.isStarted && gameState.questionData) {
      onStart(gameState.questionData);
    }
  }, [gameState.isStarted, gameState.questionData, onStart]);

  const onChange = (newValue) => {
    setInputValue(newValue);
    form.setFieldsValue({ numQuestions: newValue });
  };

  return (
    <div className="setup-container">
      <Card className="setup-card">
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Title level={2}>Chào mừng!</Title>
          <Text type="secondary">Hãy thiết lập bài luyện tập của bạn</Text>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            level: "N5",
            type: "Hiragana",
            numQuestions: 5
          }}
          // Vô hiệu hóa form khi đang loading
          disabled={gameState.isLoading}
        >
          {/* ... Các phần Form Item giữ nguyên ... */}
          <Form.Item label="Chọn trình độ (JLPT)" name="level">
            <Radio.Group buttonStyle="solid" style={{ width: '100%' }}>
              <Radio.Button value="N5" style={{ width: '25%', textAlign: 'center' }}>N5</Radio.Button>
              <Radio.Button value="N4" style={{ width: '25%', textAlign: 'center' }}>N4</Radio.Button>
              <Radio.Button value="N3" style={{ width: '25%', textAlign: 'center' }}>N3</Radio.Button>
              <Radio.Button value="N2" style={{ width: '25%', textAlign: 'center' }}>N2</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Loại ký tự muốn ôn" name="type">
            <Select>
              <Option value="Hiragana">Hiragana (Bảng chữ mềm)</Option>
              <Option value="Katakana">Katakana (Bảng chữ cứng)</Option>
              <Option value="Kanji">Kanji (Hán tự)</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Số lượng câu hỏi" name="numQuestions">
            <Row>
              <Col span={24}>
                <Slider
                  min={1}
                  max={50}
                  onChange={onChange}
                  value={typeof inputValue === 'number' ? inputValue : 0}
                  step={1} 
                  marks={{ 5: '5', 10: '10', 20: '20', 30: '30', 50: '50' }}
                />
              </Col>
            </Row>
          </Form.Item>
          
          <div style={{ textAlign: 'center', marginTop: -10, marginBottom: 20, color: '#1890ff' }}>
             Đang chọn: <strong>{inputValue}</strong> câu
          </div>

          {/* 5. Cập nhật nút Submit với trạng thái Loading */}
          <Button 
            type="primary" 
            htmlType="submit" 
            block 
            size="large"
            icon={<PlayCircleOutlined />}
            loading={gameState.isLoading} // Hiển thị vòng xoay khi đang gọi API
            style={{ marginTop: 10, height: 50, fontSize: 18 }}
          >
            {gameState.isLoading ? "Đang tạo bài tập..." : "Bắt đầu làm bài"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default GameSetup;