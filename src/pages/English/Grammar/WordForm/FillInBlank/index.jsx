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
  Popover, // Thêm Popover để làm tính năng Hover
} from "antd";
import {
  ArrowLeftOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  ReloadOutlined,
  EyeOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { generateQuizWordForm } from "../../../../../services/GenerateQuiz";

// Component con để hiển thị từng từ khi hover
const TokenWord = ({ token, isTarget }) => {
  const content = (
    <div style={{ maxWidth: 250 }}>
      <p><b>Từ loại:</b> <Tag color="blue">{token.pos}</Tag></p>
      <p><b>Vai trò:</b> {token.role}</p>
      {token.target && <p><b>Bổ nghĩa cho:</b> <Tag color="orange">{token.target}</Tag></p>}
      <Divider style={{ margin: "8px 0" }} />
      <p style={{ fontSize: "12px", color: "#666" }}>{token.note}</p>
    </div>
  );

  return (
    <Popover content={content} title="Phân tích ngữ pháp" trigger="hover">
      <span
        style={{
          cursor: "help",
          padding: "2px 4px",
          borderRadius: "4px",
          backgroundColor: isTarget ? "#e6f7ff" : "transparent",
          borderBottom: isTarget ? "2px dashed #1890ff" : "1px dotted #ccc",
          marginRight: "4px",
          transition: "all 0.3s"
        }}
      >
        {token.text}
      </span>
    </Popover>
  );
};

const FillInBlank = () => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleStartQuiz = async () => {
    setIsLoading(true);
    try {
      const response = await generateQuizWordForm({
        type: "wordForm",
        numQuestions: targetCount,
      });

      const questionsFromApi = response;

      if (questionsFromApi && questionsFromApi.length > 0) {
        setActiveQuizSet(questionsFromApi);
        setIsStarted(true);
        setCurrentIndex(0);
        setStatus("idle");
        setUserInput("");
        setResults([]);
        setIsReviewMode(false);
        setIsFinished(false);
      } else {
        alert("Không tìm thấy câu hỏi phù hợp từ hệ thống.");
      }
    } catch (error) {
      console.error("Error starting quiz:", error);
    } finally {
      setIsLoading(false);
    }
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
            max={100}
            value={targetCount}
            onChange={setTargetCount}
            marks={{
              1: "1",
              100: "100",
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
            {isLoading ? "Đang tải câu hỏi..." : "Bắt đầu làm bài"}
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
  // 3. REVIEW SCREEN
  if (isReviewMode) {
    return (
      <div style={{ maxWidth: 800, margin: "auto", paddingBottom: 40 }}>
        <Card title="Review Bài Làm" extra={<Button onClick={() => setIsReviewMode(false)} icon={<ArrowLeftOutlined />}>Quay lại</Button>}>
          {results.map((q, idx) => (
            <Card type="inner" key={idx} style={{ marginBottom: 16 }} styles={{ body: { backgroundColor: q.correct ? "#f6ffed" : "#fff1f0" } }}>
              <div style={{ fontSize: 16, marginBottom: 12 }}>
                {q.tokens ? q.tokens.map((t, i) => (
                   <TokenWord key={i} token={t} isTarget={t.text.includes("_______")} />
                )) : q.sentence}
                <Tag color="blue" style={{ marginLeft: 8 }}>{q.baseWord}</Tag>
              </div>
              <Space orientation="vertical">
                <Space>Bạn trả lời: <Tag color={q.correct ? "success" : "error"}>{q.userAnswer}</Tag></Space>
                {!q.correct && <Space>Đáp án đúng: <Tag color="blue">{q.answer}</Tag></Space>}
              </Space>
              <Divider style={{ margin: "12px 0" }} />
              <p><b>Dịch:</b> {q.translate}</p>
              <p><b>Giải thích:</b> {q.hint}</p>
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
      <Progress percent={Math.round((currentIndex / activeQuizSet.length) * 100)} showInfo={false} size="small" style={{ marginBottom: 12 }} />
      
      <Card 
        title={`Câu ${currentIndex + 1} / ${activeQuizSet.length}`}
        extra={<Tag icon={<InfoCircleOutlined />} color="processing">Rê chuột vào từ để xem gợi ý</Tag>}
      >
        <div style={{ fontSize: 20, marginBottom: 24, lineHeight: 1.8 }}>
          {/* RENDER TOKENS Ở ĐÂY */}
          {currentQuiz?.tokens ? (
            currentQuiz.tokens.map((token, index) => (
              <TokenWord 
                key={index} 
                token={token} 
                isTarget={token.text.includes("_______")} 
              />
            ))
          ) : (
            <span>{currentQuiz?.sentence}</span>
          )}
          
          <span style={{ color: "#1890ff", fontWeight: "bold", marginLeft: 10 }}>
            ({currentQuiz?.baseWord})
          </span>
        </div>

        <Input
          ref={inputRef}
          size="large"
          placeholder="Nhập từ còn thiếu..."
          value={userInput}
          disabled={status !== "idle"}
          onChange={(e) => setUserInput(e.target.value)}
          onPressEnter={status === "idle" ? handleCheck : handleNext}
          status={status === "correct" ? "success" : status === "wrong" ? "error" : ""}
          style={{ marginBottom: 16 }}
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {status === "idle" ? (
            <Button type="primary" size="large" icon={<CheckOutlined />} onClick={handleCheck} disabled={!userInput.trim()}>
              Kiểm tra
            </Button>
          ) : (
            <Button type="primary" size="large" onClick={handleNext} icon={<ArrowRightOutlined />}>
              {isLast ? "Xem kết quả" : "Câu tiếp theo"}
            </Button>
          )}
        </div>

        {status !== "idle" && (
          <Alert
            style={{ marginTop: 24 }}
            type={status === "correct" ? "success" : "error"}
            showIcon
            title={status === "correct" ? "Chính xác!" : "Chưa chính xác"}
            description={
              <div>
                {status === "wrong" && <p>Đáp án đúng: <b>{currentQuiz.answer}</b></p>}
                <p>{currentQuiz.hint}</p>
                <p><i>{currentQuiz.translate}</i></p>
              </div>
            }
          />
        )}
      </Card>
    </div>
  );
};

export default FillInBlank;
