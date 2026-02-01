import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// Component chứa các Card bài tập con
export const ConditionalsMenu = () => {
  const navigate = useNavigate();
  
  const content = [
    { title: "Chia động từ", path: "verb-conjugation" },
    { title: "Viết lại câu", path: "sentence-rewrite" },
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

// Component chính Conditionals đóng vai trò Layout
const Conditionals = () => {
  return (
    <div>
      {/* Hiển thị ConditionalsMenu  hoặc các bài tập FillInBlank, SuffixExercise... */}
      <Outlet />
    </div>
  );
};

export default Conditionals;