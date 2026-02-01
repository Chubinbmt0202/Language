import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// Component chứa các Card bài tập con
export const PronounsMenu = () => {
  const navigate = useNavigate();
  
  const content = [
    { title: "Chọn đại từ phù hợp", path: "choose-pronouns" },
    { title: "Trắc nghiệm chọn đáp án", path: "multiple-choice" },
    { title: "Tìm và sửa lỗi sai", path: "find-errors" },
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

// Component chính Pronouns đóng vai trò Layout
const Pronouns = () => {
  return (
    <div>
      {/* Hiển thị PronounsMenu hoặc các bài tập FillInBlank, SuffixExercise... */}
      <Outlet />
    </div>
  );
};

export default Pronouns;