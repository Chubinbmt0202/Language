import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row } from "antd";

// Component chứa các Card bài tập con
export const PassiveVoiceMenu = () => {
  const navigate = useNavigate();
  
  const content = [
    { title: "Chuyển từ chủ động sang bị động", path: "active-to-passive" },
    { title: "Chia động từ trong ngoặc (Dạng bị động)", path: "verb-conjugation" },
    { title: "Câu bị động đặc biệt", path: "special-passive-sentences" },
    { title: "Cấu trúc nhờ vả", path: "request-structure" },

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

// Component chính PassiveVoice đóng vai trò Layout
const PassiveVoice = () => {
  return (
    <div>
      {/* Hiển thị PassiveVoiceMenu hoặc các bài tập FillInBlank, SuffixExercise... */}
      <Outlet />
    </div>
  );
};

export default PassiveVoice;