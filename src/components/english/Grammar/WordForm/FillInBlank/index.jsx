import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Input,
  Card,
  Alert,
  Progress,
  Slider,
  Space,
  Divider,
  Tag,
} from "antd";
import {
  ArrowLeftOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  ReloadOutlined,
  EyeOutlined,
  CheckOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

// Dữ liệu mẫu
const fullQuizData = [
  {
    id: 1,
    sentence: "The manager was very _______ with the results.",
    baseWord: "satisfy",
    answer: "satisfied",
    hint: "Cần tính từ miêu tả cảm xúc.",
    translate: "Người quản lý rất hài lòng với kết quả.",
  },
  {
    id: 2,
    sentence: "She completed the report _______.",
    baseWord: "success",
    answer: "successfully",
    hint: "Trạng từ bổ nghĩa cho động từ.",
    translate: "Cô ấy hoàn thành báo cáo một cách thành công.",
  },
  {
    id: 3,
    sentence: "The _______ of the project depends on teamwork.",
    baseWord: "succeed",
    answer: "success",
    hint: "Cần một danh từ làm chủ ngữ.",
    translate: "Sự thành công của dự án phụ thuộc vào làm việc nhóm.",
  },
  {
    id: 4,
    sentence: "They are _______ looking for a new house.",
    baseWord: "active",
    answer: "actively",
    hint: "Trạng từ đứng trước động từ V-ing.",
    translate: "Họ đang tích cực tìm kiếm một ngôi nhà mới.",
  },
  {
    id: 5,
    sentence: "Education is very _______ for future careers.",
    baseWord: "importance",
    answer: "important",
    hint: "Sau tobe là tính từ.",
    translate: "Giáo dục rất quan trọng cho sự nghiệp tương lai.",
  },
  {
    id: 6,
    sentence: "He is a very _______ driver.",
    baseWord: "care",
    answer: "careful",
    hint: "Tính từ bổ nghĩa cho danh từ driver.",
    translate: "Anh ấy là một tài xế rất cẩn thận.",
  },
];

const FillInBlank = ({ onBack }) => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const [targetCount, setTargetCount] = useState(3);
  const [activeQuizSet, setActiveQuizSet] = useState([]);

  // States làm bài
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | correct | wrong
  const [results, setResults] = useState([]);

  // Ref để focus vào input khi đổi câu
  const inputRef = useRef(null);

  // Focus input mỗi khi chuyển câu hỏi
  useEffect(() => {
    if (isStarted && !isFinished && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, isStarted, isFinished]);

  const handleStartQuiz = () => {
    // Logic lấy ngẫu nhiên (Shuffle) thay vì chỉ cắt 3 câu đầu
    const shuffled = [...fullQuizData].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, targetCount);

    setActiveQuizSet(selectedQuestions);
    setIsStarted(true);
    setCurrentIndex(0);
    setStatus("idle");
    setUserInput("");
    setResults([]);
    setIsReviewMode(false);
    setIsFinished(false);
  };

  const handleCheck = () => {
    if (!userInput.trim()) return;

    const currentQ = activeQuizSet[currentIndex];
    const correct =
      userInput.trim().toLowerCase() === currentQ.answer.toLowerCase();

    setStatus(correct ? "correct" : "wrong");

    // Lưu kết quả ngay lập tức
    setResults((prev) => [
      ...prev,
      {
        ...currentQ,
        userAnswer: userInput,
        correct,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < activeQuizSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserInput("");
      setStatus("idle");
    } else {
      setIsFinished(true);
    }
  };

  // 1. SETUP SCREEN
  if (!isStarted) {
    return (
      <div style={{ maxWidth: 500, margin: "50px auto" }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
          style={{ marginBottom: 16 }}
        >
          Quay lại 
        </Button>
        <Card
          title={
            <span>
              <RocketOutlined /> Thiết lập bài tập
            </span>
          }
          style={{ textAlign: "center" }}
        >
          <p>Chọn số lượng câu hỏi:</p>
          <Slider
            min={1}
            max={fullQuizData.length}
            value={targetCount}
            onChange={setTargetCount}
            marks={{
              1: "1",
              [fullQuizData.length]: `${fullQuizData.length}`,
            }}
          />
          <Divider />
          <Button
            type="primary"
            size="large"
            block
            icon={<PlayCircleOutlined />}
            onClick={handleStartQuiz}
          >
            Bắt đầu làm bài
          </Button>
        </Card>
      </div>
    );
  }

  // 2. RESULTS SCREEN
  if (isFinished && !isReviewMode) {
    const correctCount = results.filter((r) => r.correct).length;
    const wrongCount = results.length - correctCount;
    const percent = Math.round((correctCount / results.length) * 100);

    return (
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <Card title="🎉 Hoàn thành bài tập" style={{ textAlign: "center" }}>
          <Progress
            type="circle"
            percent={percent}
            status={percent >= 80 ? "success" : "normal"}
          />
          <div style={{ marginTop: 20, fontSize: 16 }}>
            <p>
              <Tag color="green">Đúng: {correctCount}</Tag>{" "}
              <Tag color="red">Sai: {wrongCount}</Tag>
            </p>
          </div>

          <Space style={{ marginTop: 24 }}>
            <Button
              icon={<ReloadOutlined />}
              onClick={() => setIsStarted(false)}
            >
              Làm đề khác
            </Button>
            <Button
              type="primary"
              icon={<EyeOutlined />}
              onClick={() => setIsReviewMode(true)}
            >
              Xem lại đáp án
            </Button>
          </Space>
        </Card>
      </div>
    );
  }

  // 3. REVIEW MODE
  if (isReviewMode) {
    return (
      <div style={{ maxWidth: 800, margin: "auto", paddingBottom: 40 }}>
        <Card
          title="Review Bài Làm"
          extra={
            <Button
              onClick={() => setIsReviewMode(false)}
              icon={<ArrowLeftOutlined />}
            >
              Quay lại kết quả
            </Button>
          }
        >
          {results.map((q, idx) => (
            <Card
              type="inner"
              key={idx}
              style={{ marginBottom: 16 }}
              bodyStyle={{ backgroundColor: q.correct ? "#f6ffed" : "#fff1f0" }}
            >
              <p style={{ fontSize: 16, fontWeight: 500 }}>
                Câu {idx + 1}: {q.sentence}{" "}
                <span style={{ color: "#1677ff" }}>({q.baseWord})</span>
              </p>

              <div style={{ marginTop: 10 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Space>
                    <span>Bạn trả lời:</span>
                    <Tag color={q.correct ? "success" : "error"}>
                      {q.userAnswer}
                    </Tag>
                  </Space>
                  {!q.correct && (
                    <Space>
                      <span>Đáp án đúng:</span>
                      <Tag color="blue">{q.answer}</Tag>
                    </Space>
                  )}
                </Space>
              </div>
              <Divider style={{ margin: "12px 0" }} />
              <p
                style={{
                  color: "#888",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "red" }}>Giải thích</span>: {q.hint}
              </p>
              <Divider style={{ margin: "12px 0" }} />
              <p style={{ color: "#888", fontStyle: "italic" }}>
                Translate: {q.translate}
              </p>
            </Card>
          ))}
        </Card>
      </div>
    );
  }

  // 4. QUIZ SCREEN
  const currentQuiz = activeQuizSet[currentIndex];
  const isLast = currentIndex === activeQuizSet.length - 1;

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", padding: "0 20px" }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => setIsStarted(false)}
        style={{ marginBottom: 16 }}
      >
        Thoát
      </Button>

      <Progress
        percent={Math.round((currentIndex / activeQuizSet.length) * 100)}
        showInfo={false}
        size="small"
        style={{ marginBottom: 12 }}
      />

      <Card title={`Câu ${currentIndex + 1} / ${activeQuizSet.length}`}>
        <div style={{ fontSize: 20, marginBottom: 24, lineHeight: 1.6 }}>
          {/* Hiển thị câu hỏi, thay thế chỗ trống bằng input nếu cần, hoặc để nguyên */}
          {currentQuiz?.sentence}{" "}
          {
            <span style={{ color: "blue", fontWeight: "bold" }}>
              ({currentQuiz?.baseWord})
            </span>
          }
        </div>

        <Input
          ref={inputRef}
          size="large"
          placeholder="Nhập từ còn thiếu..."
          value={userInput}
          disabled={status !== "idle"} // Khoá input khi đã check
          onChange={(e) => setUserInput(e.target.value)}
          onPressEnter={status === "idle" ? handleCheck : handleNext}
          status={
            status === "correct" ? "success" : status === "wrong" ? "error" : ""
          }
          style={{ marginBottom: 16 }}
          suffix={
            status === "correct" ? (
              <CheckOutlined style={{ color: "green" }} />
            ) : null
          }
        />

        {/* Khu vực nút bấm điều hướng */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {status === "idle" ? (
            <Button
              type="primary"
              size="large"
              icon={<CheckOutlined />}
              onClick={handleCheck}
              disabled={!userInput.trim()}
            >
              Kiểm tra
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={handleNext}
              icon={<ArrowRightOutlined />}
              style={{ backgroundColor: isLast ? "#52c41a" : undefined }} // Đổi màu nếu là nút Hoàn thành
            >
              {isLast ? "Xem kết quả" : "Câu tiếp theo"}
            </Button>
          )}
        </div>

        {/* Khu vực hiển thị thông báo kết quả */}
        {status === "correct" && (
          <Alert
            style={{ marginTop: 24 }}
            type="success"
            showIcon
            message="Chính xác!"
            description={
              <div>
                <p>{currentQuiz.hint}</p>
                <p>
                  <i>{currentQuiz.translate}</i>
                </p>
              </div>
            }
          />
        )}

        {status === "wrong" && (
          <Alert
            style={{ marginTop: 24 }}
            type="error"
            showIcon
            message="Chưa chính xác"
            description={
              <div>
                <p>
                  Đáp án đúng là: <b>{currentQuiz.answer}</b>
                </p>
                <p>
                  <i>{currentQuiz.translate}</i>
                </p>
              </div>
            }
          />
        )}
      </Card>
    </div>
  );
};

export default FillInBlank;
