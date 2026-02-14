/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Card, Space, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const scheduleOptions = [
  {
    key: 30,
    label: "30 phút/ngày",
    description: "Cân bằng giữa học và cuộc sống",
    tag: "Khuyến nghị",
    color: "#1890ff",
  },
  {
    key: 60,
    label: "60 phút/ngày",
    description: "Dành thời gian nghiêm túc cho việc học",
    tag: "Chuyên sâu",
    color: "#fa8c16",
  },
  {
    key: 90,
    label: "90 phút/ngày",
    description: "Tiến bộ vượt bậc, phù hợp khi có nhiều thời gian",
    tag: "Tối đa",
    color: "#f5222d",
  },
];

const ScheduleStep = ({ value, onChange }) => {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%", marginBottom: 32 }} size={12}>
        {scheduleOptions.map((option) => {
          const isSelected = value === option.key;
          return (
            <motion.div
              key={option.key}
              whileTap={{ scale: 0.99 }}
            >
              <Card
                hoverable
                onClick={() => onChange(option.key)}
                style={{
                  borderRadius: 12,
                  border: isSelected
                    ? "2px solid #1890ff"
                    : "2px solid transparent",
                  background: isSelected ? "#e6f7ff" : "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                bodyStyle={{ padding: "16px 24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <ClockCircleOutlined
                      style={{
                        fontSize: 24,
                        color: isSelected ? "#1890ff" : "#8c8c8c",
                      }}
                    />
                    <div>
                      <Text strong style={{ fontSize: 16 }}>
                        {option.label}
                      </Text>
                      <br />
                      <Text type="secondary">{option.description}</Text>
                    </div>
                  </div>
                  <Tag
                    color={option.color}
                    style={{ fontSize: 13, padding: "4px 12px" }}
                  >
                    {option.tag}
                  </Tag>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </Space>
    </div>
  );
};

export default ScheduleStep;
