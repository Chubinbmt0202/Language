import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// Component chứa các Card bài tập con
export const PrepositionsMenu = () => {
  const navigate = useNavigate();
  
  const content = [
    { title: "Chọn cặp đúng", path: "matching" },
    { title: "Biến đổi câu", path: "sentence-rewrite" },
    { title: "Trắc nghiệm ngữ cảnh", path: "context-quiz" },
  ];

  return (
    <Row gutter={16}>
      {content.map((item) => (
        <Col key={item.path} xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigate(item.path)} // Điều hướng bằng URL
            style={{ textAlign: "center", borderRadius: "8px", marginBottom: '16px' }}
          >
            <Card.Meta title={item.title} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

// Component chính Prepositions đóng vai trò Layout
const Prepositions = () => {
  return (
    <div>
      {/* Hiển thị PrepositionsMenu hoặc các bài tập FillInBlank, SuffixExercise... */}
      <Outlet />
    </div>
  );
};

export default Prepositions;