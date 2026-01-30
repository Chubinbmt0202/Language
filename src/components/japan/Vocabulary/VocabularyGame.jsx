import React, { useState, useEffect } from "react";
import { Button, Flex, Progress } from "antd";
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
    <div className="vocabulary-container">
      <div style={{ height: "100px"}}>
        <Button style={{marginRight: "10px"}} type="text" icon={<CloseOutlined />} onClick={onExit}>
          Thoát
        </Button>

        <Progress percent={percent} style={{width: "100vh", marginRight: "10px"}} showInfo={false} strokeColor="#45cf41" />
        <span >Câu hỏi {currentIndex + 1} / {data.length}</span>
      </div>

      {/* Phần hiển thị ảnh và ô chữ (Giữ nguyên code UI cũ) */}
      <div className="vocabulary-card">
        <img
          src={currentQuestion.imageUrl}
          alt="Vocabulary"
          className="vocabulary-image"
        />
      </div>

      <span>{currentQuestion.meaning}</span>

      <div className="answer-area">
        <div className="answer-slots-wrapper">
          {currentQuestion.parts.map((_, index) => (
            <div
              key={index}
              className={`slot-container ${isCorrect ? "slot-success" : ""}`}
              onClick={() => handleRemoveWord(index)}
            >
              {selectedWords[index] ? (
                <span className="filled-text">{selectedWords[index]}</span>
              ) : (
                <span className="placeholder-underscore">__</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {isCorrect && (
        <div className="result-container">
          <span className="result-word">{currentQuestion.fullWord}</span>
          <span className="result-meaning">{currentQuestion.meaning}</span>
        </div>
      )}

      {!isCorrect && (
        <div className="options-container">
          {currentQuestion.options.map((word, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleSelectWord(word)}
              disabled={selectedWords.length >= currentQuestion.parts.length}
            >
              {word}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        {!isCorrect ? (
          <Button
            onClick={handleCheck}
            type="primary"
            className="check-button"
            disabled={selectedWords.length !== currentQuestion.parts.length}
          >
            Kiểm tra
          </Button>
        ) : (
          <Button
            type="primary"
            className="continue-button"
            onClick={handleNext}
          >
            Tiếp (Next)
          </Button>
        )}
      </div>
    </div>
  );
};

export default VocabularyGame;
