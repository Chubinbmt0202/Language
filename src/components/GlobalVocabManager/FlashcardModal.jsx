import React, { useState } from "react";
import { Modal, Progress, Button, Space, Typography, Tag } from "antd";
import { SwapOutlined, SoundOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const FlashcardModal = ({ isOpen, onClose, words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!words || words.length === 0) return null;

  const currentWord = words[currentIndex];
  const progress = Math.round(((currentIndex + 1) / words.length) * 100);

  const resetAndClose = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    onClose();
  };

  const speak = (e) => {
    e.stopPropagation(); // Ngăn việc lật thẻ khi bấm loa
    const textToSpeak = currentWord.lang === "en" ? currentWord.word : currentWord.hiragana;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = currentWord.lang === "en" ? "en-US" : "ja-JP";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Modal
      title={
        <Space>
          <SwapOutlined />
          <span>Luyện tập Flashcard</span>
          <Tag color="blue">{currentWord.lang?.toUpperCase()}</Tag>
        </Space>
      }
      open={isOpen}
      onCancel={resetAndClose}
      footer={null}
      centered
      width={400}
      styles={{ body: { textAlign: "center" } }}
    >
      <Progress percent={progress} size="small" status="active" />

      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          height: 280,
          margin: "20px 0",
          borderRadius: 20,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: isFlipped ? "#f6ffed" : "#e6f7ff",
          border: `2px dashed ${isFlipped ? "#b7eb8f" : "#91d5ff"}`,
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "relative"
        }}
      >
        {/* Nút loa để nghe phát âm ngay trên thẻ */}
        <Button 
          icon={<SoundOutlined />} 
          shape="circle" 
          style={{ position: "absolute", top: 15, right: 15 }} 
          onClick={speak}
        />

        {!isFlipped ? (
          // MẶT TRƯỚC: Hiện từ mới
          <>
            <Title level={2} style={{ color: "#1890ff", margin: 0, padding: "0 20px" }}>
              {currentWord.lang === "en" ? currentWord.word : currentWord.hiragana}
            </Title>
            {currentWord.ipa && (
              <Text type="secondary" style={{ fontSize: 16, marginTop: 10 }}>
                {currentWord.ipa}
              </Text>
            )}
            <Text type="secondary" style={{ position: "absolute", bottom: 20, fontSize: 12 }}>
              Chạm để lật mặt sau
            </Text>
          </>
        ) : (
          // MẶT SAU: Hiện nghĩa và loại từ
          <>
            <Tag color="green" style={{ marginBottom: 10 }}>
              {currentWord.type?.toUpperCase() || "N/A"}
            </Tag>
            <Title level={3} style={{ color: "#52c41a", margin: 0, padding: "0 20px" }}>
              {currentWord.meaning}
            </Title>
            {currentWord.lang === "jp" && (
              <Text strong style={{ marginTop: 10, color: "#8c8c8c" }}>
                {currentWord.romaji}
              </Text>
            )}
          </>
        )}
      </div>

      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Button
          shape="round"
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex((i) => i - 1);
            setIsFlipped(false);
          }}
        >
          Trước đó
        </Button>
        <Text type="secondary">
          {currentIndex + 1} / {words.length}
        </Text>
        <Button
          type="primary"
          shape="round"
          disabled={currentIndex === words.length - 1}
          onClick={() => {
            setCurrentIndex((i) => i + 1);
            setIsFlipped(false);
          }}
        >
          Tiếp theo
        </Button>
      </Space>
    </Modal>
  );
};

export default FlashcardModal;