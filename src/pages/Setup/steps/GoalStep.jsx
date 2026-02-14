/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Row, Col, Card, Tag } from "antd";
import { motion } from "framer-motion";
import { TrophyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const englishGoals = [
  {
    key: "toeic_600",
    label: "TOEIC 600+",
    description: "Đủ cho thị trường lao động",
    weeks: 7,
    icon: "\u{1F3AF}",
  },
  {
    key: "conversation",
    label: "Giao tiếp cơ bản",
    description: "Tự tin nói chuyện hàng ngày ",
    weeks: 6,
    icon: "\u{1F4AC}",
  },
];

const GoalStep = ({ value, onChange, targetLanguage }) => {
  const goals = targetLanguage === "english" ? englishGoals : [];

  return (
    <div>

      <Row gutter={[16, 16]} justify="center">
        {goals.map((goal) => {
          const isSelected = value === goal.key;
          return (
            <Col xs={24} sm={12} key={goal.key} style={{marginBottom: "10px", marginTop: "10px"}}>
              <motion.div
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  hoverable
                  onClick={() => onChange(goal.key)}
                  style={{
                    borderRadius: 16,
                    border: isSelected
                      ? "2px solid #1890ff"
                      : "2px solid transparent",
                    background: isSelected ? "#e6f7ff" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: 24, textAlign: "center" }}
                >
                  <div style={{ fontSize: 40, marginBottom: 12 }}>
                    {goal.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {goal.label}
                  </Title>
                  <Text
                    type="secondary"
                    style={{ display: "block", marginBottom: 12 }}
                  >
                    {goal.description}
                  </Text>
                  <Tag icon={<TrophyOutlined />} color="blue">
                    ~{goal.weeks} tuần
                  </Tag>
                </Card>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GoalStep;
