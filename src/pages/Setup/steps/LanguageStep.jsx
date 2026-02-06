import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const languages = [
  {
    key: "english",
    flag: "\u{1F1EC}\u{1F1E7}",
    name: "Ti\u1ebfng Anh",
    description: "TOEIC, IELTS, giao ti\u1ebfp h\u00e0ng ng\u00e0y, ng\u1eef ph\u00e1p & t\u1eeb v\u1ef1ng",
  },
  {
    key: "japanese",
    flag: "\u{1F1EF}\u{1F1F5}",
    name: "Ti\u1ebfng Nh\u1eadt",
    description: "JLPT, Hiragana, Katakana, t\u1eeb v\u1ef1ng & h\u1ed9i tho\u1ea1i",
  },
];

const LanguageStep = ({ value, onChange }) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          B\u1ea1n mu\u1ed1n h\u1ecdc ng\u00f4n ng\u1eef n\u00e0o?
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Ch\u1ecdn ng\u00f4n ng\u1eef b\u1ea1n mu\u1ed1n t\u1eadp trung h\u1ecdc
        </Text>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {languages.map((lang) => {
          const isSelected = value === lang.key;
          return (
            <Col xs={24} sm={12} key={lang.key}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  hoverable
                  onClick={() => onChange(lang.key)}
                  style={{
                    borderRadius: 16,
                    border: isSelected
                      ? "2px solid #1890ff"
                      : "2px solid transparent",
                    background: isSelected ? "#e6f7ff" : "#fff",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    minHeight: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                  }}
                >
                  <div style={{ fontSize: 64, marginBottom: 16 }}>
                    {lang.flag}
                  </div>
                  <Title level={3} style={{ marginBottom: 8 }}>
                    {lang.name}
                  </Title>
                  <Text type="secondary" style={{ fontSize: 14 }}>
                    {lang.description}
                  </Text>
                </Card>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LanguageStep;
