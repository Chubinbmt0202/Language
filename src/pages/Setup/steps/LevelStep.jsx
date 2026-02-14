/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Card, Space, Tag } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const englishLevels = [
  {
    key: "beginner",
    label: "Mới bắt đầu",
    description: "Chưa biết gì hoặc đã quên hết kiến thức cũ",
    tag: "A0",
    color: "#ff4d4f",
  },
  {
    key: "elementary",
    label: "Cơ bản",
    description: "Biết một số từ vựng và cấu trúc đơn giản",
    tag: "A1-A2",
    color: "#fa8c16",
  },
  {
    key: "intermediate",
    label: "Trung bình",
    description: "Giao tiếp được các tình huống thường ngày, hiểu được nội dung chính",
    tag: "B1",
    color: "#faad14",
  }
];

const LevelStep = ({ value, onChange, targetLanguage }) => {
  const levels = targetLanguage === "english" ? englishLevels : [];

  return (
    <div>

      <Space direction="vertical" style={{ width: "100%", marginBottom: 32 }} size={12}>
        {levels.map((level) => {
          const isSelected = value === level.key;
          return (
            <motion.div
              key={level.key}
              whileTap={{ scale: 0.99 }}
            >
              <Card
                hoverable
                onClick={() => onChange(level.key)}
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
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      {level.label}
                    </Text>
                    <br />
                    <Text type="secondary">{level.description}</Text>
                  </div>
                  <Tag color={level.color} style={{ fontSize: 14, padding: "4px 12px" }}>
                    {level.tag}
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

export default LevelStep;
