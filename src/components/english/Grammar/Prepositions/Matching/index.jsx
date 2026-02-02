import React, { useState } from "react";
import "./index.css"; // Import file CSS vừa tạo
import { Card, Button, Slider, Divider } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import { generrateQuizPrepositionsMatching } from "../../../API/Preposition";
// --- DỮ LIỆU CÂU HỎI ---

const InteractiveQuiz = () => {
  const [phase, setPhase] = useState("setup"); // 'setup', 'playing', 'finished'
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizSet, setQuizSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [history, setHistory] = useState([]);

  // Bắt đầu game
  const startGame = async () => {
    try {
      const response = await generrateQuizPrepositionsMatching({
        type: "Prepositions",
        numQuestions: numQuestions,
      });
      const data = Array.isArray(response) ? response : response.data;
      if (data && data.length > 0) {
        setQuizSet(data);
        const shuffled = [...quizSet].sort(() => 0.5 - Math.random());
        setQuizSet(shuffled.slice(0, numQuestions));
        setPhase("playing");
        setCurrentIndex(0);
        resetQuestionState();
        setHistory([]);
        return;
      }
    } catch (error) {
      console.error("Error starting game:", error);
    }
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsChecked(false);
  };

  // Kiểm tra đáp án
  const handleCheck = () => {
    if (!selectedOption) return;
    setIsChecked(true);

    const currentQ = quizSet[currentIndex];
    const isRight = selectedOption === currentQ.correctAnswer;

    setHistory((prev) => [
      ...prev,
      {
        ...currentQ,
        userSelected: selectedOption,
        isRight: isRight,
      },
    ]);
  };

  // Câu tiếp theo
  const handleNext = () => {
    if (currentIndex < quizSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setPhase("finished");
    }
  };

  // --- RENDER ---

  // MÀN HÌNH 1: SETUP
  if (phase === "setup") {
    return (
      <div style={{ maxWidth: 500, margin: "50px auto" }}>
        <Card
          title={
            <span>
              <RocketOutlined /> Tìm Lỗi Sai (Error Identification)
            </span>
          }
          style={{ textAlign: "center" }}
        >
          <p>Chọn số lượng câu hỏi:</p>
          <Slider
            min={1}
            max={50}
            value={numQuestions}
            onChange={setNumQuestions}
            marks={{
              1: "1",
              [numQuestions]: `${numQuestions}`,
            }}
          />
          <Divider />
          <Button
            type="primary"
            size="large"
            block
            // icon={isLoading ? <Progress /> : <PlayCircleOutlined />}
            onClick={startGame}
            // disabled={isLoading}
          >
            Bắt đầu bài tập
          </Button>
        </Card>
      </div>
    );
  }

  // MÀN HÌNH 2: PLAYING
  if (phase === "playing") {
    const question = quizSet[currentIndex];

    return (
      <div className="quiz-container">
        <div className="progress-text">
          Câu hỏi {currentIndex + 1} / {quizSet.length}
        </div>

        <div className="quiz-card">
          {/* Metadata Tags */}
          <div className="tag-container">
            <span className="tag type">{question.type}</span>
            <span className="tag level">Level: {question.level}</span>
          </div>

          {/* Question */}
          <div className="question-text">{question.question}</div>

          {/* Options */}
          <div className="options-list">
            {question.options.map((opt, idx) => {
              // Logic xác định class CSS cho từng nút
              let btnClass = "option-btn";

              if (isChecked) {
                if (opt === question.correctAnswer) btnClass += " correct";
                else if (selectedOption === opt) btnClass += " wrong";
              } else {
                if (selectedOption === opt) btnClass += " selected";
              }

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => !isChecked && setSelectedOption(opt)}
                  disabled={isChecked}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isChecked && (
            <div className="explanation-box">
              <strong>💡 Giải thích:</strong> {question.explanation}
            </div>
          )}

          {/* Buttons */}
          {!isChecked ? (
            <button
              className="action-btn check"
              onClick={handleCheck}
              disabled={!selectedOption}
            >
              Kiểm tra
            </button>
          ) : (
            <button className="action-btn next" onClick={handleNext}>
              {currentIndex === quizSet.length - 1
                ? "Xem kết quả"
                : "Câu tiếp theo"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // MÀN HÌNH 3: KẾT QUẢ
  if (phase === "finished") {
    const score = history.filter((h) => h.isRight).length;
    return (
      <div className="quiz-container">
        <div className="quiz-card result-box">
          <h2 style={{ color: "#2e7d32", margin: 0 }}>Hoàn thành!</h2>
          <div className="score-display">
            {score} / {numQuestions}
          </div>
          <p>Dưới đây là danh sách các câu bạn đã làm:</p>
        </div>

        <div className="quiz-card review-list">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`review-item ${item.isRight ? "is-correct" : "is-wrong"}`}
            >
              <div
                className={`review-status ${item.isRight ? "correct" : "wrong"}`}
              >
                {idx + 1}. {item.isRight ? "ĐÚNG ✅" : "SAI ❌"}
              </div>
              <div style={{ marginBottom: "5px" }}>{item.question}</div>

              <div className="review-correct-ans">
                Đáp án đúng: <strong>{item.correctAnswer}</strong>
              </div>

              {!item.isRight && (
                <div className="review-user-ans">
                  Bạn chọn: {item.userSelected}
                </div>
              )}

              <div className="review-explanation">💡 {item.explanation}</div>
            </div>
          ))}
        </div>

        <button
          className="action-btn restart"
          onClick={() => setPhase("setup")}
        >
          Làm bài tập mới
        </button>
      </div>
    );
  }

  return null;
};

export default InteractiveQuiz;
