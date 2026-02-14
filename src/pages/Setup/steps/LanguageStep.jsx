/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const languages = [
  {
    key: "english",
    flag: "\u{1F1EC}\u{1F1E7}",
    name: "Tiếng Anh",
    description: "TOEIC, giao tiếp hằng ngày, ngữ pháp cơ bản",
  },
];

const LanguageStep = ({ value, onChange }) => {
  return (
    <div>
      <Row gutter={[24, 24]} justify="center">
        {languages.map((lang) => {
          const isSelected = value === lang.key;
          return (
            <Col xs={24} sm={12} key={lang.key} style={{marginBottom: 32}}>
              <motion.div
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
