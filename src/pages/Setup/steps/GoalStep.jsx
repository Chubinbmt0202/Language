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
    description: "\u0110\u1ee7 \u0111\u1ec3 l\u00e0m vi\u1ec7c trong m\u00f4i tr\u01b0\u1eddng qu\u1ed1c t\u1ebf",
    weeks: 7,
    icon: "\u{1F3AF}",
  },
  {
    key: "toeic_700",
    label: "TOEIC 700+",
    description: "Giao ti\u1ebfp t\u1ed1t trong c\u00f4ng vi\u1ec7c v\u0103n ph\u00f2ng",
    weeks: 9,
    icon: "\u{1F4BC}",
  },
  {
    key: "toeic_800",
    label: "TOEIC 800+",
    description: "Th\u00e0nh th\u1ea1o ti\u1ebfng Anh doanh nghi\u1ec7p",
    weeks: 12,
    icon: "\u{1F31F}",
  },
  {
    key: "conversation",
    label: "Giao ti\u1ebfp c\u01a1 b\u1ea3n",
    description: "T\u1ef1 tin n\u00f3i chuy\u1ec7n h\u00e0ng ng\u00e0y b\u1eb1ng ti\u1ebfng Anh",
    weeks: 6,
    icon: "\u{1F4AC}",
  },
];

const japaneseGoals = [
  {
    key: "jlpt_n5",
    label: "JLPT N5",
    description: "Hi\u1ec3u ti\u1ebfng Nh\u1eadt c\u01a1 b\u1ea3n, ~100 Kanji",
    weeks: 8,
    icon: "\u{1F3AF}",
  },
  {
    key: "jlpt_n4",
    label: "JLPT N4",
    description: "Giao ti\u1ebfp c\u01a1 b\u1ea3n h\u00e0ng ng\u00e0y, ~300 Kanji",
    weeks: 12,
    icon: "\u{1F4DA}",
  },
  {
    key: "jlpt_n3",
    label: "JLPT N3",
    description: "Hi\u1ec3u ti\u1ebfng Nh\u1eadt trong nhi\u1ec1u t\u00ecnh hu\u1ed1ng, ~600 Kanji",
    weeks: 16,
    icon: "\u{1F31F}",
  },
  {
    key: "conversation_jp",
    label: "Giao ti\u1ebfp c\u01a1 b\u1ea3n",
    description: "T\u1ef1 tin n\u00f3i chuy\u1ec7n h\u00e0ng ng\u00e0y b\u1eb1ng ti\u1ebfng Nh\u1eadt",
    weeks: 6,
    icon: "\u{1F4AC}",
  },
];

const GoalStep = ({ value, onChange, targetLanguage }) => {
  const goals = targetLanguage === "japanese" ? japaneseGoals : englishGoals;

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          M\u1ee5c ti\u00eau c\u1ee7a b\u1ea1n l\u00e0 g\u00ec?
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Ch\u1ecdn m\u1ee5c ti\u00eau \u0111\u1ec3 ch\u00fang t\u00f4i t\u1ea1o l\u1ed9 tr\u00ecnh ph\u00f9 h\u1ee3p
        </Text>
      </div>

      <Row gutter={[16, 16]} justify="center">
        {goals.map((goal) => {
          const isSelected = value === goal.key;
          return (
            <Col xs={24} sm={12} key={goal.key}>
              <motion.div
                whileHover={{ scale: 1.03 }}
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
                    ~{goal.weeks} tu\u1ea7n
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
