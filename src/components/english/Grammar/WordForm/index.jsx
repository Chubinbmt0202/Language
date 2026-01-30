import { Card, Col, Row, Button } from "antd";
import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import FillInBlank from "./FillInBlank/index";
import SuffixExercise from "./Suffixes/index";
import ErrorCorrectionQuiz from "./FindError/index";
const content = [
  { title: "Điền từ vào chỗ trống", key: "fill-in-the-blank" },
  { title: "Bài tập hậu tố", key: "suffix-exercise" },
  { title: "Tìm lỗi sai", key: "find-errors" },
];

const WordForm = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState(null);

  const renderContent = () => {
    if (activeTab === "fill-in-the-blank") {
      return (
        <div>
          <FillInBlank onBack={() => setActiveTab(null)} />
        </div>
      );
    }

    if (activeTab === "suffix-exercise") {
      return (
        <div>
          <SuffixExercise onBack={() => setActiveTab(null)} />
        </div>
      )
    }

    if (activeTab === "find-errors") {
      return (
        <div>
          <ErrorCorrectionQuiz onBack={() => setActiveTab(null)} />
        </div>
      );
    }

    return (
      <>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
          style={{ marginBottom: 16 }}
        >
          Quay lại trang menu ngữ pháp
        </Button>

        <Row gutter={16}>
          {content.map((item) => (
            <Col key={item.key} xs={24} sm={12} md={8}>
              <Card
                hoverable
                onClick={() => setActiveTab(item.key)}
                style={{ textAlign: "center" }}
              >
                <Card.Meta title={item.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return <div>{renderContent()}</div>;
};

export default WordForm;
