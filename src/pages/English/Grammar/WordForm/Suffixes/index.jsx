import React, { useState } from "react";
import {
  Button,
  Card,
  Alert,
  Progress,
  Slider,
  Space,
  Divider,
  Tag,
  Typography,
  Spin,
} from "antd";
import {
  ArrowLeftOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  ReloadOutlined,
  EyeOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { generateQuizSuffixes } from "@/shared/api/GenerateQuiz";

const { Text } = Typography;

const SuffixQuiz = () => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [targetCount, setTargetCount] = useState(5); // Mặc định 5 câu
  const [activeQuizSet, setActiveQuizSet] = useState([]);

  // States làm bài
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | correct | wrong
  const [results, setResults] = useState([]);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    try {
      // Gọi API với số lượng câu hỏi đã chọn từ Slider
      const response = await generateQuizSuffixes({ 
        type: 'suffixes', 
        numQuestions: targetCount 
      });

      // Kiểm tra nếu data trả về là mảng (theo cấu trúc bạn gửi)
      const data = Array.isArray(response) ? response : response.data;

      if (data && data.length > 0) {
        setActiveQuizSet(data);
        setIsStarted(true);
        setCurrentIndex(0);
        setStatus("idle");
        setSelectedOption(null);
        setResults([]);
        setIsReviewMode(false);
        setIsFinished(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải câu hỏi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheck = () => {
    if (!selectedOption) return;

    const currentQ = activeQuizSet[currentIndex];
    const correct = selectedOption === currentQ.answer;

    setStatus(correct ? "correct" : "wrong");

    setResults((prev) => [
      ...prev,
      {
        ...currentQ,
        userAnswer: selectedOption,
        correct,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < activeQuizSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setStatus("idle");
    } else {
      setIsFinished(true);
    }
  };

  const getOptionStyle = (optionKey, isReview = false, qData = null) => {
    if (!isReview && status !== "idle") {
      const currentQ = activeQuizSet[currentIndex];
      if (optionKey === currentQ.answer)
        return { backgroundColor: "#f6ffed", borderColor: "#b7eb8f", color: "green" };
      if (optionKey === selectedOption && status === "wrong")
        return { backgroundColor: "#fff1f0", borderColor: "#ffa39e", color: "red" };
    }
    
    if (isReview && qData) {
       if (optionKey === qData.answer) 
         return { backgroundColor: "#f6ffed", borderColor: "#b7eb8f", fontWeight: 'bold' };
       if (optionKey === qData.userAnswer && !qData.correct) 
         return { backgroundColor: "#fff1f0", borderColor: "#ffa39e", textDecoration: 'line-through' };
    }

    if (!isReview && status === "idle" && selectedOption === optionKey) {
      return { borderColor: "#1677ff", backgroundColor: "#e6f7ff" };
    }
    return {};
  };

  // 1. SETUP SCREEN
  if (!isStarted) {
    return (
      <div style={{ maxWidth: 500, margin: "50px auto" }}>
        <Card
          title={<span><RocketOutlined /> Luyện tập Hậu tố (Suffixes)</span>}
          style={{ textAlign: "center" }}
        >
          <p>Chọn số lượng câu hỏi muốn tải:</p>
          <Slider
            min={1}
            max={50} // Giới hạn tối đa tùy chỉnh
            value={targetCount}
            onChange={setTargetCount}
            marks={{ 1: "1", 10: "10", 20: "20" }}
          />
          <Divider />
          <Button
            type="primary"
            size="large"
            block
            icon={isLoading ? <Spin /> : <PlayCircleOutlined />}
            onClick={handleStartQuiz}
            disabled={isLoading}
          >
            {isLoading ? "Đang tải dữ liệu..." : "Bắt đầu làm bài"}
          </Button>
        </Card>
      </div>
    );
  }

  // 2. RESULTS SCREEN (Giữ nguyên logic của bạn)
  if (isFinished && !isReviewMode) {
    const correctCount = results.filter((r) => r.correct).length;
    const percent = Math.round((correctCount / results.length) * 100);

    return (
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <Card title="🎉 Hoàn thành bài tập" style={{ textAlign: "center" }}>
          <Progress type="circle" percent={percent} />
          <div style={{ marginTop: 20 }}>
            <Tag color="green">Đúng: {correctCount}</Tag>
            <Tag color="red">Sai: {results.length - correctCount}</Tag>
          </div>
          <Space style={{ marginTop: 24 }}>
            <Button icon={<ReloadOutlined />} onClick={() => setIsStarted(false)}>Làm đề khác</Button>
            <Button type="primary" icon={<EyeOutlined />} onClick={() => setIsReviewMode(true)}>Xem lại</Button>
          </Space>
        </Card>
      </div>
    );
  }

  // 3. REVIEW MODE (Giữ nguyên logic của bạn)
  if (isReviewMode) {
    return (
      <div style={{ maxWidth: 800, margin: "auto", paddingBottom: 40 }}>
        <Card title="Review Bài Làm" extra={<Button onClick={() => setIsReviewMode(false)} icon={<ArrowLeftOutlined />}>Quay lại</Button>}>
          {results.map((q, idx) => (
            <Card type="inner" key={idx} style={{ marginBottom: 16 }} styles={{ body: { backgroundColor: q.correct ? "#f6ffed" : "#fff1f0" } }}>
              <p><b>Câu {idx + 1}:</b> {q.sentence}</p>
              {q.options.map(opt => (
                <div key={opt.key} style={{ padding: '8px', marginBottom: 4, borderRadius: 6, border: '1px solid #d9d9d9', display: 'flex', justifyContent: 'space-between', ...getOptionStyle(opt.key, true, q) }}>
                  <span><b>{opt.key}.</b> {opt.text} <small>({opt.type})</small></span>
                  {opt.key === q.answer && <CheckCircleOutlined style={{color: 'green'}} />}
                  {opt.key === q.userAnswer && !q.correct && <CloseCircleOutlined style={{color: 'red'}} />}
                </div>
              ))}
              <Divider style={{ margin: "12px 0" }} />
              <p><Text type="danger">Giải thích:</Text> {q.hint}</p>
              <p><Text type="secondary">Dịch: {q.translate}</Text></p>
            </Card>
          ))}
        </Card>
      </div>
    );
  }

  // 4. QUIZ SCREEN
  const currentQuiz = activeQuizSet[currentIndex];
  if (!currentQuiz) return <Spin />; // Bảo vệ nếu data chưa kịp load

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", padding: "0 20px" }}>
      <Progress percent={Math.round((currentIndex / activeQuizSet.length) * 100)} showInfo={false} style={{ marginBottom: 12 }} />
      <Card title={`Câu ${currentIndex + 1} / ${activeQuizSet.length}`}>
        <div style={{ fontSize: 20, marginBottom: 24 }}>
          {currentQuiz.sentence.split("_______").map((part, index, arr) => (
            <span key={index}>
              {part}
              {index < arr.length - 1 && <span style={{ borderBottom: '2px solid #1677ff', padding: '0 10px' }}>?</span>}
            </span>
          ))}
        </div>

        <Space direction="vertical" style={{ width: "100%", marginBottom: 24 }}>
          {currentQuiz.options.map((option) => (
            <Button
              key={option.key}
              block
              size="large"
              style={{ textAlign: "left", display: "flex", height: "auto", padding: "12px", ...getOptionStyle(option.key) }}
              onClick={() => status === "idle" && setSelectedOption(option.key)}
              disabled={status !== "idle"}
            >
              <b>{option.key}.</b> {option.text}
              <Tag style={{ marginLeft: "auto" }}>{option.type}</Tag>
            </Button>
          ))}
        </Space>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {status === "idle" ? (
            <Button type="primary" size="large" onClick={handleCheck} disabled={!selectedOption}>Kiểm tra</Button>
          ) : (
            <Button type="primary" size="large" onClick={handleNext}>
              {currentIndex === activeQuizSet.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
            </Button>
          )}
        </div>

        {status !== "idle" && (
          <Alert
            style={{ marginTop: 24 }}
            type={status === "correct" ? "success" : "error"}
            message={status === "correct" ? "Chính xác!" : "Chưa chính xác"}
            description={
              <div>
                {status === "wrong" && <p>Đáp án đúng: <b>{currentQuiz.answer}</b></p>}
                <p>{currentQuiz.hint}</p>
                <p><i>{currentQuiz.translate}</i></p>
              </div>
            }
            showIcon
          />
        )}
      </Card>
    </div>
  );
};

export default SuffixQuiz;