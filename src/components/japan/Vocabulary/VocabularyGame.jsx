import React, { useState, useEffect } from "react";
import { Button, Progress, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const VocabularyGame = ({ data, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = data[currentIndex];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedWords([]);
    setIsCorrect(false);
  }, [currentIndex, data]);

  const handleSelectWord = (word) => {
    if (!isCorrect && selectedWords.length < currentQuestion.parts.length) {
      setSelectedWords([...selectedWords, word]);
    }
  };
  const handleRemoveWord = (idx) => {
    if (!isCorrect) setSelectedWords(selectedWords.filter((_, i) => i !== idx));
  };

  const handleCheck = () => {
    const userString = selectedWords.join("");
    const correctString = currentQuestion.parts.join("");
    if (userString === correctString) {
      setIsCorrect(true);
      // playAudio(currentQuestion.fullWord); // Tùy chọn
    } else {
      alert("Sai rồi!");
      setSelectedWords([]);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Hoàn thành bài tập!");
      onExit(); // Quay về màn hình setup
    }
  };

  // Tính phần trăm tiến độ
  const percent = Math.round((currentIndex / data.length) * 100);

return (
    <div className="vocabulary-container" style={{ padding: "10px", maxWidth: "800px", margin: "0 auto" }}>
      {/* HEADER: Phần này đã được sửa để responsive */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "10px", 
        marginBottom: "20px",
        flexWrap: "wrap" // Cho phép xuống dòng nếu màn hình quá nhỏ
      }}>
        <Button 
          type="text" 
          icon={<CloseOutlined />} 
          onClick={onExit}
          style={{ padding: "4px 8px" }}
        >
          Thoát
        </Button>

        <div style={{ flex: 1, minWidth: "150px" }}>
          <Progress 
            percent={percent} 
            showInfo={false} 
            strokeColor="#45cf41" 
            status="active"
            strokeWidth={12} // Tăng độ dày một chút cho dễ nhìn trên mobile
          />
        </div>

        <span style={{ fontSize: "14px", fontWeight: "bold", whiteSpace: "nowrap" }}>
          {currentIndex + 1} / {data.length}
        </span>
      </div>

      {/* PHẦN NỘI DUNG CHÍNH (Giữ nguyên logic cũ của bạn) */}
      <div className="vocabulary-card" style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={currentQuestion.imageUrl}
          alt="Vocabulary"
          style={{ 
            maxWidth: "100%", 
            height: "auto", 
            maxHeight: "300px", 
            borderRadius: "12px",
            objectFit: "cover" 
          }}
        />
      </div>

      <div style={{ textAlign: "center", fontSize: "18px", marginBottom: "20px", fontWeight: "500" }}>
        {currentQuestion.meaning}
      </div>

      <div className="answer-area" style={{ marginBottom: "30px" }}>
        <div className="answer-slots-wrapper" style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
          {currentQuestion.parts.map((_, index) => (
            <div
              key={index}
              className={`slot-container ${isCorrect ? "slot-success" : ""}`}
              onClick={() => handleRemoveWord(index)}
              style={{
                width: "45px",
                height: "50px",
                borderBottom: "3px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              {selectedWords[index] ? (
                <span className="filled-text" style={{ color: isCorrect ? "#45cf41" : "#333" }}>
                  {selectedWords[index]}
                </span>
              ) : (
                <span className="placeholder-underscore" style={{ color: "#eee" }}>_</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* OPTIONS & BUTTONS */}
      {!isCorrect ? (
        <div className="options-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {currentQuestion.options.map((word, index) => (
            <Button
              key={index}
              size="large"
              onClick={() => handleSelectWord(word)}
              disabled={selectedWords.length >= currentQuestion.parts.length}
              style={{ borderRadius: "8px", minWidth: "60px" }}
            >
              {word}
            </Button>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
           <h2 style={{ color: "#45cf41" }}>Chính xác!</h2>
        </div>
      )}

      <div style={{ marginTop: 30, textAlign: "center" }}>
        {!isCorrect ? (
          <Button
            onClick={handleCheck}
            type="primary"
            size="large"
            disabled={selectedWords.length !== currentQuestion.parts.length}
            style={{ padding: "0 40px", height: "50px", borderRadius: "25px" }}
          >
            Kiểm tra
          </Button>
        ) : (
          <Button
            type="primary"
            size="large"
            onClick={handleNext}
            style={{ padding: "0 40px", height: "50px", borderRadius: "25px", background: "#45cf41" }}
          >
            Tiếp tục (Next)
          </Button>
        )}
      </div>
    </div>
  );
};

export default VocabularyGame;
