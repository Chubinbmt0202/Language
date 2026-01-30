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

const { Text } = Typography;

// Dữ liệu mẫu cho bài tập Hậu tố (Suffixes)
const suffixQuizData = [
  {
    id: 1,
    sentence: "The internet has changed the way we _______ with each other.",
    options: [
      { key: "A", text: "communication", type: "Noun" },
      { key: "B", text: "communicate", type: "Verb" },
      { key: "C", text: "communicative", type: "Adj" },
      { key: "D", text: "communicator", type: "Noun (Person)" },
    ],
    answer: "B",
    hint: "Sau chủ ngữ 'we' cần một Động từ.",
    translate: "Internet đã thay đổi cách chúng ta giao tiếp với nhau.",
  },
  {
    id: 2,
    sentence: "To become a professional _______, you need a lot of practice.",
    options: [
      { key: "A", text: "music", type: "Noun" },
      { key: "B", text: "musical", type: "Adj" },
      { key: "C", text: "musician", type: "Noun (Person)" },
      { key: "D", text: "musically", type: "Adv" },
    ],
    answer: "C",
    hint: "Cần danh từ chỉ người (người chơi nhạc).",
    translate: "Để trở thành một nhạc sĩ chuyên nghiệp, bạn cần luyện tập rất nhiều.",
  },
  {
    id: 3,
    sentence: "We need to find a _______ solution to this issue.",
    options: [
      { key: "A", text: "practice", type: "Noun/Verb" },
      { key: "B", text: "practical", type: "Adj" },
      { key: "C", text: "practically", type: "Adv" },
      { key: "D", text: "practicality", type: "Noun" },
    ],
    answer: "B",
    hint: "Trước danh từ 'solution' cần một Tính từ.",
    translate: "Chúng ta cần tìm một giải pháp thực tế cho vấn đề này.",
  },
  {
    id: 4,
    sentence: "Please drive _______; the road is wet.",
    options: [
      { key: "A", text: "care", type: "Noun/Verb" },
      { key: "B", text: "careful", type: "Adj" },
      { key: "C", text: "carefully", type: "Adv" },
      { key: "D", text: "careless", type: "Adj" },
    ],
    answer: "C",
    hint: "Bổ nghĩa cho động từ 'drive' cần một Trạng từ.",
    translate: "Làm ơn lái xe cẩn thận; đường đang ướt.",
  },
  {
    id: 5,
    sentence: "The project was a complete _______.",
    options: [
      { key: "A", text: "succeed", type: "Verb" },
      { key: "B", text: "success", type: "Noun" },
      { key: "C", text: "successful", type: "Adj" },
      { key: "D", text: "successfully", type: "Adv" },
    ],
    answer: "B",
    hint: "Sau mạo từ 'a' và tính từ 'complete' cần một Danh từ.",
    translate: "Dự án là một sự thành công trọn vẹn.",
  },
];

const SuffixQuiz = () => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const [targetCount, setTargetCount] = useState(3);
  const [activeQuizSet, setActiveQuizSet] = useState([]);

  // States làm bài
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Thay cho userInput
  const [status, setStatus] = useState("idle"); // idle | correct | wrong
  const [results, setResults] = useState([]);

  const handleStartQuiz = () => {
    // Logic lấy ngẫu nhiên (Shuffle)
    const shuffled = [...suffixQuizData].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, targetCount);

    setActiveQuizSet(selectedQuestions);
    setIsStarted(true);
    setCurrentIndex(0);
    setStatus("idle");
    setSelectedOption(null);
    setResults([]);
    setIsReviewMode(false);
    setIsFinished(false);
  };

  const handleCheck = () => {
    if (!selectedOption) return;

    const currentQ = activeQuizSet[currentIndex];
    const correct = selectedOption === currentQ.answer;

    setStatus(correct ? "correct" : "wrong");

    // Lưu kết quả
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

  // Helper render màu sắc cho đáp án khi review/check
  const getOptionStyle = (optionKey, isReview = false, qData = null) => {
    // Logic hiển thị màu khi đang làm bài (sau khi bấm check)
    if (!isReview && status !== "idle") {
      const currentQ = activeQuizSet[currentIndex];
      // Nếu là đáp án đúng
      if (optionKey === currentQ.answer)
        return { backgroundColor: "#f6ffed", borderColor: "#b7eb8f", color: "green" };
      // Nếu là đáp án sai người dùng chọn
      if (optionKey === selectedOption && status === "wrong")
        return { backgroundColor: "#fff1f0", borderColor: "#ffa39e", color: "red" };
    }
    
    // Logic hiển thị khi Review
    if (isReview && qData) {
       if (optionKey === qData.answer) 
         return { backgroundColor: "#f6ffed", borderColor: "#b7eb8f", fontWeight: 'bold' };
       if (optionKey === qData.userAnswer && !qData.correct) 
         return { backgroundColor: "#fff1f0", borderColor: "#ffa39e", textDecoration: 'line-through' };
    }

    // Mặc định khi chọn
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
          title={
            <span>
              <RocketOutlined /> Luyện tập Hậu tố (Suffixes)
            </span>
          }
          style={{ textAlign: "center" }}
        >
          <p>Chọn số lượng câu hỏi trắc nghiệm:</p>
          <Slider
            min={1}
            max={suffixQuizData.length}
            value={targetCount}
            onChange={setTargetCount}
            marks={{
              1: "1",
              [suffixQuizData.length]: `${suffixQuizData.length}`,
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
                Câu {idx + 1}: {q.sentence}
              </p>

              {/* Hiển thị danh sách đáp án dạng tĩnh để review */}
              <div style={{ marginTop: 12 }}>
                 {q.options.map(opt => (
                     <div key={opt.key} style={{ 
                         padding: '8px 12px', 
                         marginBottom: 4, 
                         borderRadius: 6,
                         border: '1px solid #d9d9d9',
                         display: 'flex',
                         justifyContent: 'space-between',
                         ...getOptionStyle(opt.key, true, q)
                     }}>
                         <span><b>{opt.key}.</b> {opt.text} <span style={{color: '#999', fontSize: 12}}>({opt.type})</span></span>
                         {opt.key === q.answer && <CheckCircleOutlined style={{color: 'green'}} />}
                         {opt.key === q.userAnswer && !q.correct && <CloseCircleOutlined style={{color: 'red'}} />}
                     </div>
                 ))}
              </div>

              <Divider style={{ margin: "12px 0" }} />
              <p style={{ color: "#888", fontStyle: "italic", fontWeight: "bold" }}>
                <span style={{ color: "red" }}>Giải thích</span>: {q.hint}
              </p>
              <p style={{ color: "#888", fontStyle: "italic" }}>
                Dịch: {q.translate}
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
          {currentQuiz.sentence.split("_______").map((part, index, arr) => (
              <span key={index}>
                  {part}
                  {index < arr.length - 1 && <span style={{borderBottom: '2px solid #1677ff', padding: '0 10px', display:'inline-block'}}>?</span>}
              </span>
          ))}
        </div>

        {/* Khu vực Chọn Đáp Án (Thay thế Input) */}
        <Space direction="vertical" style={{ width: "100%", marginBottom: 24 }}>
          {currentQuiz.options.map((option) => (
            <Button
              key={option.key}
              size="large"
              block
              style={{
                height: "auto",
                padding: "12px 20px",
                textAlign: "left",
                justifyContent: "flex-start",
                display: "flex",
                fontSize: 16,
                ...getOptionStyle(option.key)
              }}
              onClick={() => status === "idle" && setSelectedOption(option.key)}
              disabled={status !== "idle"} // Khoá chọn khi đã check
            >
              <span style={{ fontWeight: "bold", marginRight: 8 }}>{option.key}.</span>
              {option.text}
              {/* <Tag style={{ marginLeft: "auto" }}>{option.type}</Tag> */}
            </Button>
          ))}
        </Space>

        {/* Khu vực nút bấm điều hướng */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {status === "idle" ? (
            <Button
              type="primary"
              size="large"
              icon={<CheckOutlined />}
              onClick={handleCheck}
              disabled={!selectedOption}
            >
              Kiểm tra
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={handleNext}
              icon={<ArrowRightOutlined />}
              style={{ backgroundColor: isLast ? "#52c41a" : undefined }}
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
                <p><i>{currentQuiz.translate}</i></p>
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
                <p>Đáp án đúng là: <b>{currentQuiz.options.find(o => o.key === currentQuiz.answer)?.text} ({currentQuiz.answer})</b></p>
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

export default SuffixQuiz;