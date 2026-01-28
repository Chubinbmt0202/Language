import React, { useState } from "react";
import { Button } from "antd";
import "./index.css";

const VocabularyJapan = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false); // Trạng thái: Đã làm đúng hay chưa

  const words = ["と", "ね", "ご", "こ", "で", "ゃ", "は", "に", "ち", "う"]; // Các từ để chọn
  
  // Cấu trúc dữ liệu đáp án đầy đủ
  const answerData = {
    parts: ["ね", "こ"], // Các phần để so sánh
    fullWord: "ねこ",      // Từ hoàn chỉnh để hiển thị
    meaning: "Con mèo",    // Nghĩa tiếng Việt
    reading: "Neko"         // Phiên âm (nếu cần)
  };

  // Hàm phát âm thanh (Sử dụng trình duyệt)
  const playAudio = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP'; // Thiết lập giọng đọc tiếng Nhật
      utterance.rate = 1;     // Đọc chậm lại một chút cho dễ nghe
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Trình duyệt của bạn không hỗ trợ đọc âm thanh.");
    }
  };

  const handleSelectWord = (word) => {
    // Nếu đã đúng rồi thì không cho chọn lại để tránh lỗi
    if (isCorrect) return;

    if (selectedWords.length < answerData.parts.length) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleRemoveWord = (indexToRemove) => {
    if (isCorrect) return; // Đã đúng thì không cho xóa
    const newSelected = selectedWords.filter((_, index) => index !== indexToRemove);
    setSelectedWords(newSelected);
  };

  const handleCheck = () => {
    const userString = selectedWords.join("");
    const correctString = answerData.parts.join("");

    if (userString === correctString) {
      setIsCorrect(true); // Đánh dấu là đã đúng
      playAudio(answerData.fullWord); // Tự động đọc ngay khi đúng
    } else {
      alert("Sai rồi! Hãy thử lại nhé.");
      // Có thể thêm logic reset lại các ô chọn ở đây nếu muốn
      setSelectedWords([]);
    }
  };

  return (
    <div className="vocabulary-container">
      {/* 1. Phần Thẻ Hình Ảnh */}
      <div className="vocabulary-card">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="Vocabulary"
          className="vocabulary-image"
        />
      </div>

      {/* 2. Khu vực hiển thị đáp án */}
      <div className="answer-area">
        <div className="answer-slots-wrapper">
            {answerData.parts.map((_, index) => {
              const wordAtSlot = selectedWords[index];
              return (
                <div 
                  key={index} 
                  className={`slot-container ${isCorrect ? 'slot-success' : ''}`} // Thêm class xanh lá khi đúng
                  onClick={() => wordAtSlot && handleRemoveWord(index)}
                >
                  {wordAtSlot ? (
                    <span className="filled-text">{wordAtSlot}</span>
                  ) : (
                    <span className="placeholder-underscore">____</span>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* 3. Hiển thị Kết quả (Chỉ hiện khi Đúng) */}
      {isCorrect && (
        <div className="result-container">
          <div className="result-info">
            <span className="result-word">{answerData.fullWord}</span>
            <span className="result-meaning">{answerData.meaning}</span>
          </div>
          <button 
            className="audio-button"
            onClick={() => playAudio(answerData.fullWord)}
            title="Nghe lại"
          >
            {/* Icon Loa (SVG) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
        </div>
      )}

      {/* 4. Danh sách các từ để chọn (Ẩn đi khi đã làm đúng để giao diện gọn hơn, hoặc giữ lại tùy ý) */}
      {!isCorrect && (
        <div className="options-container">
          {words.map((word, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleSelectWord(word)}
              disabled={selectedWords.length >= answerData.parts.length}
              style={{ opacity: selectedWords.length >= answerData.parts.length ? 0.5 : 1 }}
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {/* 5. Nút kiểm tra */}
      {!isCorrect && (
        <div>
          <Button
            onClick={handleCheck}
            type="primary"
            className="check-button"
            disabled={selectedWords.length !== answerData.parts.length}
          >
            Kiểm tra
          </Button>
        </div>
      )}
      
      {/* Nút Tiếp tục (Hiện khi đã đúng) */}
      {isCorrect && (
         <Button 
            type="primary" 
            className="continue-button"
            onClick={() => {
                alert("Chuyển sang bài tiếp theo...");
                // Reset logic here
                setIsCorrect(false);
                setSelectedWords([]);
            }}
         >
            Tiếp tục
         </Button>
      )}

    </div>
  );
};

export default VocabularyJapan;