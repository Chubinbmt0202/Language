import React from "react";
import { Typography, Card, Space, Tag } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const englishLevels = [
  {
    key: "beginner",
    label: "M\u1ea5t g\u1ed1c / M\u1edbi b\u1eaft \u0111\u1ea7u",
    description: "Ch\u01b0a bi\u1ebft g\u00ec ho\u1eb7c \u0111\u00e3 qu\u00ean h\u1ebft ki\u1ebfn th\u1ee9c c\u0169",
    tag: "A0",
    color: "#ff4d4f",
  },
  {
    key: "elementary",
    label: "C\u01a1 b\u1ea3n",
    description: "Bi\u1ebft m\u1ed9t s\u1ed1 t\u1eeb v\u1ef1ng v\u00e0 c\u1ea5u tr\u00fac \u0111\u01a1n gi\u1ea3n",
    tag: "A1-A2",
    color: "#fa8c16",
  },
  {
    key: "intermediate",
    label: "Trung b\u00ecnh",
    description: "Giao ti\u1ebfp \u0111\u01b0\u1ee3c c\u00e1c t\u00ecnh hu\u1ed1ng th\u01b0\u1eddng ng\u00e0y",
    tag: "B1",
    color: "#faad14",
  },
  {
    key: "upper_intermediate",
    label: "Kh\u00e1",
    description: "\u0110\u1ecdc hi\u1ec3u t\u1ed1t, giao ti\u1ebfp t\u01b0\u01a1ng \u0111\u1ed1i l\u01b0u lo\u00e1t",
    tag: "B2",
    color: "#52c41a",
  },
  {
    key: "advanced",
    label: "N\u00e2ng cao",
    description: "S\u1eed d\u1ee5ng th\u00e0nh th\u1ea1o, c\u1ea7n tr\u1eabu chu\u1ed1t th\u00eam",
    tag: "C1",
    color: "#1890ff",
  },
];

const japaneseLevels = [
  {
    key: "beginner",
    label: "M\u1edbi b\u1eaft \u0111\u1ea7u",
    description: "Ch\u01b0a bi\u1ebft Hiragana/Katakana",
    tag: "N5",
    color: "#ff4d4f",
  },
  {
    key: "elementary",
    label: "C\u01a1 b\u1ea3n",
    description: "\u0110\u00e3 bi\u1ebft Hiragana/Katakana, \u0111ang h\u1ecdc Kanji c\u01a1 b\u1ea3n",
    tag: "N5-N4",
    color: "#fa8c16",
  },
  {
    key: "intermediate",
    label: "Trung b\u00ecnh",
    description: "Bi\u1ebft kho\u1ea3ng 300 Kanji, giao ti\u1ebfp c\u01a1 b\u1ea3n \u0111\u01b0\u1ee3c",
    tag: "N4-N3",
    color: "#faad14",
  },
  {
    key: "upper_intermediate",
    label: "Kh\u00e1",
    description: "\u0110\u1ecdc hi\u1ec3u v\u0103n b\u1ea3n trung b\u00ecnh, giao ti\u1ebfp kh\u00e1 t\u1ed1t",
    tag: "N3-N2",
    color: "#52c41a",
  },
  {
    key: "advanced",
    label: "N\u00e2ng cao",
    description: "\u0110\u1ecdc hi\u1ec3u b\u00e1o ch\u00ed, giao ti\u1ebfp l\u01b0u lo\u00e1t",
    tag: "N2-N1",
    color: "#1890ff",
  },
];

const LevelStep = ({ value, onChange, targetLanguage }) => {
  const levels = targetLanguage === "japanese" ? japaneseLevels : englishLevels;

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          Tr\u00ecnh \u0111\u1ed9 hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n?
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Ch\u1ecdn m\u1ee9c \u0111\u1ed9 ph\u00f9 h\u1ee3p nh\u1ea5t v\u1edbi b\u1ea1n
        </Text>
      </div>

      <Space direction="vertical" style={{ width: "100%" }} size={12}>
        {levels.map((level) => {
          const isSelected = value === level.key;
          return (
            <motion.div
              key={level.key}
              whileHover={{ scale: 1.01 }}
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
