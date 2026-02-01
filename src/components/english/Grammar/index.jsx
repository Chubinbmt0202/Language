import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// 1. Component chứa danh sách các Card bài tập
export const GrammarMenu = () => {
  const navigate = useNavigate();

  const content = [
    { title: "Bài tập từ loại (Word Form)", path: "word-form" }, // path tương ứng với route trong App.js
    { title: "Thì (Tense)", path: "tense" },
    { title: "Đại từ & Tính từ sở hữu (Pronouns)", path: "pronouns" },
    { title: "Giới từ & Liên từ (Prepositions)", path: "prepositions" },
    { title: "Câu điều kiện (Conditionals)", path: "conditionals" },
    { title: "Câu bị động (Passive Voice)", path: "passive-voice" },
  ];

  return (
    <Row gutter={16}>
      {content.map((item) => (
        <Col xs={24} sm={12} md={8} lg={8} key={item.path} style={{ marginBottom: 16 }}>
          <Card
            hoverable
            onClick={() => navigate(item.path)} // Điều hướng bằng navigate
            style={{ borderRadius: '8px', textAlign: 'center' }}
          >
            <Card.Meta title={item.title} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

// 2. Component chính Grammar đóng vai trò Layout cho phần English Grammar
const Grammar = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Outlet này sẽ hiển thị GrammarMenu HOẶC WordForm tùy theo URL */}
      <Outlet />
    </div>
  );
};

export default Grammar;