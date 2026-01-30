import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// Component chứa các Card bài tập con
export const WordFormMenu = () => {
  const navigate = useNavigate();
  
  const content = [
    { title: "Điền từ vào chỗ trống", path: "fill-in-the-blank" },
    { title: "Bài tập hậu tố", path: "suffix-exercise" },
    { title: "Tìm lỗi sai", path: "find-errors" },
  ];

  return (
    <Row gutter={16}>
      {content.map((item) => (
        <Col key={item.path} xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigate(item.path)} // Điều hướng bằng URL
            style={{ textAlign: "center", borderRadius: "8px" }}
          >
            <Card.Meta title={item.title} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

// Component chính WordForm đóng vai trò Layout
const WordForm = () => {
  return (
    <div>
      {/* Hiển thị WordFormMenu hoặc các bài tập FillInBlank, SuffixExercise... */}
      <Outlet />
    </div>
  );
};

export default WordForm;