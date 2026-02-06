import React from "react";
import { Button, Card, Progress, Space, Tag, Typography } from "antd";
import { ClockCircleOutlined, PlayCircleFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

const TodaysLearningCard = () => {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: 12,
        marginTop: 24,
        marginBottom: 24,
        background: "linear-gradient(135deg, #f0f5ff, #ffffff)",
      }}
    >
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
        <div>
          <Title level={4} style={{ marginBottom: 4 }}>
            🎯 Hôm nay học gì?
          </Title>
          <Text type="secondary">Tiếp tục từ nơi bạn đang dở</Text>
        </div>

        <div>
          <Text strong style={{ fontSize: 16 }}>
            Ngày 2 – Từ vựng cơ bản
          </Text>
          <div style={{ marginTop: 4 }}>
            <Tag color="blue">2 / 4 tasks</Tag>
            <Tag icon={<ClockCircleOutlined />} color="default">
              ~15 phút
            </Tag>
          </div>
        </div>

        <Progress percent={50} strokeColor="#1677ff" />

        <Button type="primary" icon={<PlayCircleFilled />} size="large" block>
          Tiếp tục học
        </Button>
      </Space>
    </Card>
  );
};

export default TodaysLearningCard;

