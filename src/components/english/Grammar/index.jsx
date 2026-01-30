import React, { useState } from "react"; // 1. Thêm useState
import { Card, Col, Row, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Để làm nút quay lại
import WordForm from "./WordForm"; // Import component bài tập

const Grammar = () => {
  // 2. Tạo state để quản lý xem đang ở menu chính hay đang làm bài tập
  // activeTab = null nghĩa là đang ở menu chính
  const [activeTab, setActiveTab] = useState(null);

  const handleCardClick = (key) => {
    setActiveTab(key); // Cập nhật state khi click
  };

  const content = [
    { title: "Bài tập từ loại (Word Form)", key: "part-of-speech" },
    { title: "Ngữ pháp (Grammar)", key: "grammar" },
    { title: "Đại từ & Tính từ sở hữu (Pronouns)", key: "verb-tenses" },
    { title: "Giới từ & Liên từ (Prepositions & Conjunctions)", key: "prepositions" },
    { title: "Câu điều kiện (Conditionals)", key: "conditionals" },
    { title: "Câu bị động (Passive Voice)", key: "passive-voice" },
    { title: "Từ vựng (Vocabulary/Meaning)", key: "vocabulary" },
  ];

  // 3. Logic hiển thị nội dung dựa trên state
  const renderContent = () => {
    if (activeTab === "part-of-speech") {
      return (
        <div>
          <WordForm onBack={() => setActiveTab(null)}/>
        </div>
      );
    }

    // Nếu các bài tập khác chưa làm, hiện thông báo tạm thời
    if (activeTab !== null) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Chức năng {activeTab} đang được phát triển</h2>
          <Button onClick={() => setActiveTab(null)}>Quay lại</Button>
        </div>
      );
    }

    // Mặc định hiển thị danh sách các Card
    return (
      <Row gutter={16}>
        {content.map((item) => (
          <Col xs={24} sm={12} md={8} lg={8} key={item.key} style={{ marginBottom: 16 }}>
            <Card
              hoverable
              onClick={() => handleCardClick(item.key)}
              style={{ borderRadius: '8px', textAlign: 'center' }}
            >
              <Card.Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      {renderContent()}
    </div>
  );
};

export default Grammar;