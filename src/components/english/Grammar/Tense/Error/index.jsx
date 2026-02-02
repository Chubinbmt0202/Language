import React, { useState } from "react";
import {
  Button,
  Card,
  Alert,
  Progress,
  Slider,
  Space,
  Drawer,
  Result,
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
  BookOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  BulbOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { generateQuizTenseError } from "../../../API/TenseApi";

const { Text, Title, Paragraph } = Typography;

const THEORY_LIBRARY = {
  "present_simple": {
    title: "Thì Hiện tại đơn (Present Simple)",
    content: "Dùng để diễn tả một sự thật hiển nhiên, một chân lý hoặc thói quen hàng ngày.",
    formula: "S + V(s/es) + O",
    examples: ["The sun rises in the East.", "Water boils at 100°C."],
  },
  "present_continuous": {
    title: "Thì Hiện tại tiếp diễn",
    content: "Diễn tả hành động đang xảy ra tại thời điểm nói.",
    formula: "S + am/is/are + V-ing",
    examples: ["Listen! Someone is knocking."],
  },
  "present_perfect": {
    title: "Thì Hiện tại hoàn thành",
    content: "Diễn tả hành động bắt đầu ở quá khứ và kéo dài đến hiện tại.",
    formula: "S + have/has + V3/ed",
    examples: ["I have lived here since 2010."],
  },
  "past_continuous": {
    title: "Thì Quá khứ tiếp diễn",
    content: "Diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ.",
    formula: "S + was/were + V-ing",
  },
  "future_perfect": {
    title: "Thì Tương lai hoàn thành",
    content: "Diễn tả hành động sẽ hoàn tất trước một thời điểm ở tương lai.",
    formula: "S + will have + V3/ed",
  },
};

const ErrorTense = () => {
  // States cấu hình
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [targetCount, setTargetCount] = useState(3);
  const [activeQuizSet, setActiveQuizSet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [theoryData, setTheoryData] = useState(null);

  // States làm bài
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null); // Lưu key (A, B, C, D) user chọn
  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState([]);
  // Thay thế hàm handleStartQuiz cũ
  const handleStartQuiz = async () => {
    setIsLoading(true);
    // Giả lập delay mạng 1 giây
    try {
      const response = await generateQuizTenseError({
        type: "FindError",
        numQuestions: targetCount,
      });
      const data = Array.isArray(response) ? response : response.data;
      if (data && data.length > 0) {
        setActiveQuizSet(data);
        setIsStarted(true);
        setCurrentIndex(0);
        setStatus("idle");
        setSelectedKey(null);
        setResults([]);
        setIsReviewMode(false);
        setIsFinished(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
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
  const renderInteractiveSentence = (
    question,
    isResultView = false,
    resultData = null,
  ) => {
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
                icon = (
                  <CheckCircleOutlined
                    style={{ fontSize: 12, marginLeft: 4 }}
                  />
                );
              }
              // Nếu user chọn sai ô này
              if (seg.key === selectedKey && status === "wrong") {
                style.borderBottom = "2px solid #ff4d4f";
                style.backgroundColor = "#fff1f0";
                style.color = "#ff4d4f";
                icon = (
                  <CloseCircleOutlined
                    style={{ fontSize: 12, marginLeft: 4 }}
                  />
                );
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
            value={targetCount}
            onChange={setTargetCount}
            marks={{
              1: "1",
              [targetCount]: `${targetCount}`,
            }}
          />
          <Divider />
          <Button
            type="primary"
            size="large"
            block
            icon={isLoading ? <Progress /> : <PlayCircleOutlined />}
            onClick={handleStartQuiz}
            disabled={isLoading}
          >
            {isLoading ? "Đang tải dữ liệu..." : "Bắt đầu làm bài"}
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
              styles={{
                body: { backgroundColor: q.correct ? "#f6ffed" : "#fff1f0" },
              }}
            >
              <p style={{ marginBottom: 8, fontWeight: 500 }}>Câu {idx + 1}:</p>

              {/* Render câu văn với highlight màu sắc */}
              {renderInteractiveSentence(q, true, q)}

              <Divider style={{ margin: "12px 0" }} />

              {/* Hiển thị chi tiết sửa lỗi */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Lỗi sai ở: </span>
                  <Tag color={q.correct ? "green" : "red"}>{q.correctKey}</Tag>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Sửa thành: </span>
                  <Tag color="blue">{q.correction}</Tag>
                </p>
              </div>

              <p style={{ color: "#888", fontStyle: "italic", marginTop: 10 }}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Giải thích:{" "}
                </span>
                {q.hint}
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

  const getLevelColor = (level) => {
    const colors = { hard: "red", medium: "gold", easy: "green" };
    return colors[level?.toLowerCase()] || "blue";
  };

    // Hàm xử lý lấy lý thuyết từ object theory của API
  const handleOpenTheory = (theoryObj) => {
    if (!theoryObj) return;
    const key = theoryObj.$ref || theoryObj; // Xử lý nếu API trả về object {$ref: "..."}
    setTheoryData(THEORY_LIBRARY[key]);
    setDrawerVisible(true);
  };
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

      <Card
        title={
          <Space>
            <Text>
              Tìm Lỗi Sai - Câu {currentIndex + 1} / {activeQuizSet.length}
            </Text>
            {currentQuiz.level && (
              <Tag color={getLevelColor(currentQuiz.level)}>
                {currentQuiz.level.toUpperCase()}
              </Tag>
            )}
          </Space>
        }
        extra={
          <Button
            type="dashed" icon={<BulbOutlined />}
            onClick={() => handleOpenTheory(currentQuiz.theory)}
            style={{ color: "#faad14", borderColor: "#faad14" }}
          >
            Lý thuyết
          </Button>
        }
      >
        <Alert
          message="Hãy click vào phần gạch chân bị sai trong câu dưới đây:"
          type="info"
          showIcon
          style={{ marginBottom: 20 }}
        />

        {/* Hiển thị câu hỏi tương tác */}
        <div
          style={{
            marginBottom: 30,
            padding: 10,
            border: "1px solid #f0f0f0",
            borderRadius: 8,
            backgroundColor: "#fafafa",
          }}
        >
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
                <p>
                  Sửa lỗi: <b>{currentQuiz.correction}</b>
                </p>
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
                  Đáp án đúng là: <b>{currentQuiz.correctKey}</b>
                </p>
                <p>
                  Phải sửa thành: <b>{currentQuiz.correction}</b>
                </p>
                <p style={{ marginTop: 4 }}>
                  <i>{currentQuiz.hint}</i>
                </p>
              </div>
            }
          />
        )}
      </Card>

      <TheoryDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} data={theoryData} />
    </div>
  );
};

const TheoryDrawer = ({ visible, onClose, data }) => (
  <Drawer
    title={<span><BookOutlined /> {data?.title || "Lý thuyết"}</span>}
    placement="right" onClose={onClose} open={visible} width={400}
  >
    {data ? (
      <Space direction="vertical" size="large">
        <section>
          <Title level={5}>Khái niệm</Title>
          <Paragraph>{data.content}</Paragraph>
        </section>
        <section>
          <Title level={5}>Cấu trúc</Title>
          <div style={{ padding: "10px", background: "#f0f2f5", borderRadius: 8, fontFamily: "monospace" }}>
            {data.formula}
          </div>
        </section>
        {data.examples && (
          <section>
            <Title level={5}>Ví dụ minh họa</Title>
            <ul style={{ paddingLeft: 20 }}>
              {data.examples.map((ex, i) => (
                <li key={i}><Text italic>"{ex}"</Text></li>
              ))}
            </ul>
          </section>
        )}
      </Space>
    ) : (
      <Result status="404" title="Không tìm thấy lý thuyết tương ứng." />
    )}
  </Drawer>
);

export default ErrorTense;
