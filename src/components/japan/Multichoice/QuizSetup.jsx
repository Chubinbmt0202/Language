import React from "react";
import {
  Card,
  Select,
  Typography,
  Row,
  Col,
  Slider,
  Button
} from "antd";
import { ArrowRightOutlined, SyncOutlined } from "@ant-design/icons";

const { Text, Option } = Typography;

const QuizSetup = ({
  config,
  setConfig,
  onStartAPI,
  isLoading
}) => {
  return (
    <Card
      style={{
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "12px",
      }}
    >
      <div style={{ textAlign: "left", padding: "0 20px" }}>
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={24}>
            <Text strong>Trình độ:</Text>
            <Select
              value={config.level}
              style={{ width: "100%", marginTop: 8 }}
              onChange={(v) => setConfig({ ...config, level: v })}
            >
              <Select.Option value="N5">N5</Select.Option>
              <Select.Option value="N4">N4</Select.Option>
              <Select.Option value="N3">N3</Select.Option>
            </Select>
          </Col>
          
        </Row>

        <div style={{ marginBottom: 30 }}>
          <Text strong>Số lượng câu ({config.count}):</Text>
          <Slider
            min={1}
            max={15}
            value={config.count}
            onChange={(v) => setConfig({ ...config, count: v })}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Button
          type="primary"
          size="large"
          onClick={onStartAPI}
          loading={isLoading}
          icon={!isLoading && <ArrowRightOutlined />}
          style={{ height: 45 }}
        >
          {isLoading ? "Đang tạo câu hỏi mới..." : "Bắt đầu làm bài"}
        </Button>
      </div>
    </Card>
  );
};

export default QuizSetup;