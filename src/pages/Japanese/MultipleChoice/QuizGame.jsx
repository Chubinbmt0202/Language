import React, { useState } from "react";
import { Button, Typography, Progress, Tag } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const QuizGame = ({ questions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option.isCorrect) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Kết thúc bài
      alert(`Hoàn thành! Bạn đúng ${score.correct}/${questions.length} câu.`);
      onExit();
    }
  };

  // Render từng option
  const renderOption = (option) => {
    let styles = {
      width: "100%",
      textAlign: "left",
      padding: "12px 20px",
      fontSize: "16px",
      background: "#f5f5f5",
      border: "1px solid #d9d9d9",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s",
    };
    let icon = null;

    if (isAnswered) {
      if (option.isCorrect) {
        styles.background = "#d9f7be";
        styles.borderColor = "#b7eb8f";
        icon = (
          <CheckCircleFilled style={{ color: "#52c41a", marginLeft: 10 }} />
        );
      } else if (selectedOption && selectedOption.id === option.id) {
        styles.background = "#ffccc7";
        styles.borderColor = "#ffa39e";
        icon = (
          <CloseCircleFilled style={{ color: "#ff4d4f", marginLeft: 10 }} />
        );
      } else {
        styles.opacity = 0.6;
      }
    }

    return (
      <div
        key={`${currentQuestion.id}-${option.id}`}
        onClick={() => handleOptionClick(option)}
        style={styles}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ fontWeight: "bold", marginRight: 10, color: "#8c8c8c" }}
          >
            {option.id}.
          </span>
          <span style={{ flex: 1 }}>{option.text}</span>
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          gap: 10,
        }}
      >
        <Button icon={<ArrowLeftOutlined />} onClick={onExit} size="small">
          Thoát
        </Button>
        <Progress
          percent={progressPercent}
          showInfo={false}
          strokeColor="#1677ff"
          style={{ flex: 1 }}
        />
        <Text strong>
          {currentIndex + 1} / {questions.length}
        </Text>
        <Tag color="error">✕ {score.wrong}</Tag>
        <Tag color="success">✔ {score.correct}</Tag>
      </div>

      {/* Question */}
      <Title level={4} style={{ marginBottom: 24 }}>
        {currentQuestion.id}. {currentQuestion.question}
      </Title>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {currentQuestion.options.map((opt) => renderOption(opt))}
      </div>

      {/* Explanation */}
      {isAnswered && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            background: "#f6ffed",
            border: "1px solid #b7eb8f",
            borderRadius: 8,
          }}
        >
          <Text strong style={{ color: "#389e0d" }}>
            Giải thích:{" "}
          </Text>
          <Text>{currentQuestion.explanation}</Text>
        </div>
      )}

      {/* Footer */}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 30 }}
      >
        {isAnswered ? (
          <Button
            type="primary"
            size="large"
            onClick={handleNext}
            style={
              currentIndex === questions.length - 1
                ? { background: "#52c41a" }
                : {}
            }
          >
            {currentIndex === questions.length - 1
              ? "Hoàn thành"
              : "Câu tiếp theo"}
            {currentIndex === questions.length - 1 ? (
              <CheckCircleFilled />
            ) : (
              <ArrowRightOutlined />
            )}
          </Button>
        ) : (
          <Button size="large" disabled>
            Chọn đáp án
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
