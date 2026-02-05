import React from "react";
import { Card, Progress, Space, Tag, Typography } from "antd";
import { FireFilled } from "@ant-design/icons";

const { Text } = Typography;

const QuickStatsCard = () => {
  return (
    <Card
      title="Thống kê nhanh"
      style={{
        borderRadius: 12,
        background: "linear-gradient(135deg, #f0f5ff, #ffffff)",
      }}
    >
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Progress
            type="dashboard"
            percent={70}
            strokeColor="#1677ff"
            format={() => (
              <div>
                <Text strong style={{ fontSize: 22 }}>
                  350
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  điểm
                </Text>
              </div>
            )}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space>
            <FireFilled style={{ color: "#fa541c" }} />
            <Text strong>Chuỗi học</Text>
          </Space>

          <Tag color="volcano" style={{ fontSize: 14 }}>
            🔥 5 ngày
          </Tag>
        </div>
      </Space>
    </Card>
  );
};

export default QuickStatsCard;

