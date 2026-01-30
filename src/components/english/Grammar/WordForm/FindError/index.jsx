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
const errorCorrectionData = [
  {
    id: 1,
    segments: [
      { text: "The ", type: "text" },
      { text: "manager", type: "option", key: "A" },
      { text: " was ", type: "text" },
      { text: "extreme", type: "option", key: "B" }, // Lỗi sai (Tính từ thay vì Trạng từ)
      { text: " pleased ", type: "text" },
      { text: "with", type: "option", key: "C" },
      { text: " the ", type: "text" },
      { text: "outcome", type: "option", key: "D" },
      { text: ".", type: "text" },
    ],
    correctKey: "B",
    correction: "extremely",
    hint: "Trước tính từ 'pleased' cần một Trạng từ chỉ mức độ.",
    translate: "Người quản lý cực kỳ hài lòng với kết quả.",
  },
  {
    id: 2,
    segments: [
      { text: "She ", type: "text" },
      { text: "dances", type: "option", key: "A" },
      { text: " so ", type: "text" },
      { text: "beautiful", type: "option", key: "B" }, // Lỗi sai (Tính từ sau động từ thường)
      { text: " that ", type: "text" },
      { text: "everyone", type: "option", key: "C" },
      { text: " admires ", type: "text" },
      { text: "her", type: "option", key: "D" },
      { text: ".", type: "text" },
    ],
    correctKey: "B",
    correction: "beautifully",
    hint: "Sau động từ thường 'dances' cần một Trạng từ.",
    translate: "Cô ấy nhảy đẹp đến nỗi mọi người đều ngưỡng mộ.",
  },
  {
    id: 3,
    segments: [
      { text: "The ", type: "text" },
      { text: "destroy", type: "option", key: "A" }, // Lỗi sai (Động từ thay vì Danh từ)
      { text: " of the ", type: "text" },
      { text: "rainforest", type: "option", key: "B" },
      { text: " is a ", type: "text" },
      { text: "serious", type: "option", key: "C" },
      { text: " ", type: "text" },
      { text: "problem", type: "option", key: "D" },
      { text: ".", type: "text" },
    ],
    correctKey: "A",
    correction: "destruction",
    hint: "Sau mạo từ 'The' và trước 'of' cần một Danh từ.",
    translate: "Sự phá hủy rừng nhiệt đới là một vấn đề nghiêm trọng.",
  },
  {
    id: 4,
    segments: [
      { text: "He is ", type: "text" },
      { text: "famous", type: "option", key: "A" },
      { text: " for his ", type: "text" },
      { text: "create", type: "option", key: "B" }, // Lỗi sai (Động từ thay vì Danh từ)
      { text: " and ", type: "text" },
      { text: "innovative", type: "option", key: "C" },
      { text: " ", type: "text" },
      { text: "ideas", type: "option", key: "D" },
      { text: ".", type: "text" },
    ],
    correctKey: "B",
    correction: "creativity",
    hint: "Cấu trúc song hành: cần Danh từ đi cùng với 'innovative ideas' (hoặc tính từ 'creative').",
    translate: "Anh ấy nổi tiếng vì sự sáng tạo và những ý tưởng đổi mới.",
  },
  {
    id: 5,
    segments: [
      { text: "Please ", type: "text" },
      { text: "read", type: "option", key: "A" },
      { text: " the ", type: "text" },
      { text: "instructors", type: "option", key: "B" }, // Lỗi sai (Sai nghĩa từ loại)
      { text: " carefully ", type: "text" },
      { text: "before", type: "option", key: "C" },
      { text: " using the ", type: "text" },
      { text: "machine", type: "option", key: "D" },
      { text: ".", type: "text" },
    ],
    correctKey: "B",
    correction: "instructions",
    hint: "Dùng sai danh từ: 'instructor' là người hướng dẫn, cần dùng 'instruction' (lời hướng dẫn).",
    translate: "Làm ơn đọc kỹ hướng dẫn trước khi dùng máy.",
  },
];

const ErrorCorrectionQuiz = () => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [targetCount, setTargetCount] = useState(3);
  const [activeQuizSet, setActiveQuizSet] = useState([]);

  // States làm bài
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null); // Lưu key (A, B, C, D) user chọn
  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState([]);

  const handleStartQuiz = () => {
    const shuffled = [...errorCorrectionData].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, targetCount);
    setActiveQuizSet(selectedQuestions);
    setIsStarted(true);
    setCurrentIndex(0);
    setStatus("idle");
    setSelectedKey(null);
    setResults([]);
    setIsReviewMode(false);
    setIsFinished(false);
  };

  const handleCheck = () => {
    if (!selectedKey) return;

    const currentQ = activeQuizSet[currentIndex];
    const correct = selectedKey === currentQ.correctKey;

    setStatus(correct ? "correct" : "wrong");

    setResults((prev) => [
      ...prev,
      {
        ...currentQ,
        userAnswer: selectedKey,
        correct,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < activeQuizSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedKey(null);
      setStatus("idle");
    } else {
      setIsFinished(true);
    }
  };

  // Helper: Render câu văn tương tác (Clickable Sentence)
  const renderInteractiveSentence = (question, isResultView = false, resultData = null) => {
    return (
      <div style={{ lineHeight: "2.5", fontSize: 18 }}>
        {question.segments.map((seg, idx) => {
          if (seg.type === "text") {
            return <span key={idx}>{seg.text}</span>;
          }

          // Xử lý style cho các phần option (A, B, C, D)
          let style = {
            cursor: "pointer",
            padding: "2px 8px",
            margin: "0 4px",
            borderBottom: "2px solid #d9d9d9",
            fontWeight: "bold",
            borderRadius: 4,
            transition: "all 0.3s",
          };
          
          let icon = null;

          // TRẠNG THÁI REVIEW (Xem kết quả)
          if (isResultView && resultData) {
            style.cursor = "default";
            // Nếu đây là đáp án đúng (Lỗi sai cần tìm)
            if (seg.key === question.correctKey) {
               style.borderBottom = "2px solid #52c41a"; // Xanh lá
               style.color = "#52c41a";
               style.backgroundColor = "#f6ffed";
            }
            // Nếu đây là đáp án user chọn sai
            if (seg.key === resultData.userAnswer && !resultData.correct) {
               style.borderBottom = "2px solid #ff4d4f"; // Đỏ
               style.color = "#ff4d4f";
               style.backgroundColor = "#fff1f0";
               style.textDecoration = "line-through";
            }
          } 
          // TRẠNG THÁI LÀM BÀI
          else {
             // Đã chọn nhưng chưa check
             if (status === "idle") {
                if (selectedKey === seg.key) {
                   style.borderBottom = "2px solid #1677ff";
                   style.backgroundColor = "#e6f7ff";
                   style.color = "#1677ff";
                }
             } 
             // Đã check
             else {
                style.cursor = "default";
                // Nếu đây là đáp án đúng
                if (seg.key === question.correctKey) {
                    style.borderBottom = "2px solid #52c41a";
                    style.backgroundColor = "#f6ffed";
                    style.color = "#52c41a";
                    icon = <CheckCircleOutlined style={{fontSize: 12, marginLeft: 4}}/>
                }
                // Nếu user chọn sai ô này
                if (seg.key === selectedKey && status === "wrong") {
                    style.borderBottom = "2px solid #ff4d4f";
                    style.backgroundColor = "#fff1f0";
                    style.color = "#ff4d4f";
                    icon = <CloseCircleOutlined style={{fontSize: 12, marginLeft: 4}}/>
                }
             }
          }

          return (
            <span
              key={idx}
              onClick={() => {
                if (!isResultView && status === "idle") setSelectedKey(seg.key);
              }}
              style={style}
            >
              {seg.text}
              {/* Hiển thị label nhỏ (A) bên dưới nếu cần, ở đây tôi hiển thị tooltip hoặc icon */}
              {icon}
            </span>
          );
        })}
      </div>
    );
  };

  // 1. SETUP SCREEN
  if (!isStarted) {
    return (
      <div style={{ maxWidth: 500, margin: "50px auto" }}>
        <Card
          title={<span><RocketOutlined /> Tìm Lỗi Sai (Error Identification)</span>}
          style={{ textAlign: "center" }}
        >
          <p>Chọn số lượng câu hỏi:</p>
          <Slider
            min={1}
            max={errorCorrectionData.length}
            value={targetCount}
            onChange={setTargetCount}
            marks={{ 1: "1", [errorCorrectionData.length]: `${errorCorrectionData.length}` }}
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
          <Progress type="circle" percent={percent} status={percent >= 80 ? "success" : "normal"} />
          <div style={{ marginTop: 20, fontSize: 16 }}>
            <p>
              <Tag color="green">Đúng: {correctCount}</Tag> <Tag color="red">Sai: {wrongCount}</Tag>
            </p>
          </div>
          <Space style={{ marginTop: 24 }}>
            <Button icon={<ReloadOutlined />} onClick={() => setIsStarted(false)}>
              Làm đề khác
            </Button>
            <Button type="primary" icon={<EyeOutlined />} onClick={() => setIsReviewMode(true)}>
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
          extra={<Button onClick={() => setIsReviewMode(false)} icon={<ArrowLeftOutlined />}>Quay lại kết quả</Button>}
        >
          {results.map((q, idx) => (
            <Card
              type="inner"
              key={idx}
              style={{ marginBottom: 16 }}
              bodyStyle={{ backgroundColor: q.correct ? "#f6ffed" : "#fff1f0" }}
            >
              <p style={{marginBottom: 8, fontWeight: 500}}>Câu {idx + 1}:</p>
              
              {/* Render câu văn với highlight màu sắc */}
              {renderInteractiveSentence(q, true, q)}

              <Divider style={{ margin: "12px 0" }} />
              
              {/* Hiển thị chi tiết sửa lỗi */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                 <p>
                    <span style={{fontWeight: 'bold'}}>Lỗi sai ở: </span> 
                    <Tag color={q.correct ? "green" : "red"}>{q.correctKey}</Tag>
                 </p>
                 <p>
                    <span style={{fontWeight: 'bold'}}>Sửa thành: </span> 
                    <Tag color="blue">{q.correction}</Tag>
                 </p>
              </div>

              <p style={{ color: "#888", fontStyle: "italic", marginTop: 10 }}>
                <span style={{ color: "red", fontWeight: "bold" }}>Giải thích: </span>{q.hint}
              </p>
              <p style={{ color: "#888", fontStyle: "italic" }}>Dịch: {q.translate}</p>
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
      <Button icon={<ArrowLeftOutlined />} onClick={() => setIsStarted(false)} style={{ marginBottom: 16 }}>
        Thoát
      </Button>

      <Progress
        percent={Math.round((currentIndex / activeQuizSet.length) * 100)}
        showInfo={false}
        size="small"
        style={{ marginBottom: 12 }}
      />

      <Card title={`Câu ${currentIndex + 1} / ${activeQuizSet.length}`}>
        <Alert 
           message="Hãy click vào phần gạch chân bị sai trong câu dưới đây:"
           type="info"
           showIcon
           style={{marginBottom: 20}}
        />

        {/* Hiển thị câu hỏi tương tác */}
        <div style={{ marginBottom: 30, padding: 10, border: '1px solid #f0f0f0', borderRadius: 8, backgroundColor: '#fafafa' }}>
            {renderInteractiveSentence(currentQuiz)}
        </div>

        {/* Khu vực nút bấm điều hướng */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {status === "idle" ? (
            <Button
              type="primary"
              size="large"
              icon={<CheckOutlined />}
              onClick={handleCheck}
              disabled={!selectedKey}
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
                <p>Sửa lỗi: <b>{currentQuiz.correction}</b></p>
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
                <p>Đáp án đúng là: <b>{currentQuiz.correctKey}</b></p>
                <p>Phải sửa thành: <b>{currentQuiz.correction}</b></p>
                <p style={{marginTop: 4}}><i>{currentQuiz.hint}</i></p>
              </div>
            }
          />
        )}
      </Card>
    </div>
  );
};

export default ErrorCorrectionQuiz;