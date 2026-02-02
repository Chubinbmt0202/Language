import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Button,
  Input,
  Progress,
  Drawer,
  Typography,
  List,
  Result,
  Tag,
  Space,
  Divider,
  message,
  Slider,
  Row,
  Col,
  Tabs,
  Alert,
  Spin,
} from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  BulbOutlined,
  SendOutlined,
  PlayCircleOutlined,
  InfoCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { THEORY_LIBRARY } from "../../../../../data/theoryData";

// IMPORTS: Import hàm API từ file bạn vừa tạo
// Đảm bảo đường dẫn import đúng với cấu trúc thư mục của bạn
import { generateQuizTense } from "../../../API/TenseApi";

const { Title, Text, Paragraph } = Typography;

const VerbConjugationAdvanced = () => {
  // --- STATE QUẢN LÝ ---
  const [appState, setAppState] = useState("setup"); // setup | playing | result
  const [loading, setLoading] = useState(false); // State loading khi gọi API

  // Cấu hình
  const [totalQuestionsToPlay, setTotalQuestionsToPlay] = useState(5);
  const [playData, setPlayData] = useState([]);

  // Khi đang chơi
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const inputRef = useRef(null);

  // --- HÀM GỌI API & BẮT ĐẦU GAME ---
  const handleStartGame = async () => {
    setLoading(true);
    try {
      // 1. Gọi API lấy danh sách câu hỏi thô (chứa $ref)
      const rawQuestions = await generateQuizTense({
        type: "conjugation",
        numQuestions: totalQuestionsToPlay,
      });

      if (rawQuestions && rawQuestions.length > 0) {
        const enrichedQuestions = rawQuestions.map((question) => {
          if (question.theory && question.theory.$ref) {
            const theoryId = question.theory.$ref;
            const fullTheory = THEORY_LIBRARY[theoryId] || null;

            return {
              ...question,
              theory: fullTheory, // Ghi đè ref bằng object thật
            };
          }
          // Nếu backend gửi thẳng object (không dùng ref) hoặc không có theory thì giữ nguyên
          return question;
        });

        // 3. Lưu vào State
        setPlayData(enrichedQuestions);
        setUserAnswers({});
        setScore(0);
        setCurrentQuestionIndex(0);
        setAppState("playing");
      } else {
        message.warning("Không tải được câu hỏi nào.");
      }
    } catch (error) {
      message.error("Lỗi: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToSetup = () => setAppState("setup");

  // Auto focus input
  useEffect(() => {
    if (appState === "playing" && inputRef.current) inputRef.current.focus();
  }, [currentQuestionIndex, appState]);

  const currentQuestion = playData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === (playData.length || 0) - 1;

  // Xử lý Input
  const handleInputChange = (e) => {
    setUserAnswers({ ...userAnswers, [currentQuestion.id]: e.target.value });
  };

  // Điều hướng
  const handleNext = () => {
    if (currentQuestionIndex < playData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setDrawerVisible(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setDrawerVisible(false);
    }
  };

  // Nộp bài
  const handleSubmit = () => {
    let newScore = 0;
    playData.forEach((q) => {
      const userAnswer = userAnswers[q.id]?.trim().toLowerCase() || "";
      const correctAnswer = q.answer.toLowerCase();
      // Logic so sánh (có thể mở rộng nếu API trả về mảng đáp án thay thế)
      if (userAnswer === correctAnswer) newScore++;
    });
    setScore(newScore);
    setAppState("result");
    setDrawerVisible(false);
  };

  // --- RENDER DRAWER LÝ THUYẾT (Xử lý an toàn dữ liệu) ---
  const renderTheoryContent = (theory) => {
    if (!theory)
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          Đang cập nhật dữ liệu lý thuyết...
        </div>
      );

    // Mapping dữ liệu an toàn (đề phòng API trả về thiếu trường)
    const forms = theory.forms || [];
    const usage = theory.usage || [];
    const signs = theory.signs || [];
    const notes = theory.notes || [];

    const items = [
      {
        key: "1",
        label: "Công thức",
        children: (
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {forms.length > 0 ? (
              forms.map((form, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#f9f9f9",
                    padding: 12,
                    borderRadius: 8,
                    borderLeft: "4px solid #ccc",
                    borderColor:
                      form.type === "+"
                        ? "#52c41a"
                        : form.type === "-"
                          ? "#ff4d4f"
                          : "#1890ff",
                  }}
                >
                  <Space style={{ marginBottom: 4 }}>
                    {form.type === "+" && (
                      <PlusSquareOutlined style={{ color: "#52c41a" }} />
                    )}
                    {form.type === "-" && (
                      <MinusSquareOutlined style={{ color: "#ff4d4f" }} />
                    )}
                    {form.type === "?" && (
                      <QuestionCircleOutlined style={{ color: "#1890ff" }} />
                    )}
                    <Text strong>{form.label}:</Text>
                  </Space>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1f1f1f",
                      fontWeight: 500,
                      margin: "4px 0",
                    }}
                  >
                    {form.formula}
                  </div>
                  {form.example && (
                    <Text type="secondary" italic>
                      VD: {form.example}
                    </Text>
                  )}
                </div>
              ))
            ) : (
              <Text type="secondary">Chưa có thông tin công thức.</Text>
            )}
          </div>
        ),
      },
      {
        key: "2",
        label: "Cách dùng",
        children: (
          <div>
            <Title level={5} style={{ marginTop: 0 }}>
              Khi nào dùng?
            </Title>
            <ul style={{ paddingLeft: 20 }}>
              {usage.map((u, i) => (
                <li key={i} style={{ marginBottom: 6 }}>
                  {u}
                </li>
              ))}
            </ul>
            <Divider style={{ margin: "12px 0" }} />
            <Title level={5}>Dấu hiệu nhận biết:</Title>
            <div>
              {signs.length > 0 ? (
                signs.map((sign, i) => (
                  <Tag color="geekblue" key={i} style={{ marginBottom: 8 }}>
                    {sign}
                  </Tag>
                ))
              ) : (
                <Text>Không có dấu hiệu cụ thể.</Text>
              )}
            </div>
          </div>
        ),
      },
      {
        key: "3",
        label: "Lưu ý",
        children: (
          <Space direction="vertical" style={{ width: "100%" }}>
            {notes.length > 0 ? (
              notes.map((note, i) => (
                <Alert
                  key={i}
                  message={note}
                  type="warning"
                  showIcon
                  style={{ border: "1px solid #ffe58f", background: "#fffbe6" }}
                />
              ))
            ) : (
              <Text>Không có lưu ý đặc biệt.</Text>
            )}
          </Space>
        ),
      },
    ];

    return <Tabs defaultActiveKey="1" items={items} />;
  };

  // ----------------------------------------------------------------------
  // VIEW 1: SETUP
  // ----------------------------------------------------------------------
  if (appState === "setup") {
    return (
      <div style={{ maxWidth: 500, margin: "60px auto", padding: 20 }}>
        <Card className="shadow-lg text-center">
          <Title level={2} style={{ color: "#1890ff" }}>
            Bài tập chia động từ

          </Title>
          <Divider />

          <div style={{ textAlign: "left", marginBottom: 30 }}>
            <Text strong>Chọn số lượng câu hỏi:</Text>
            <Slider
              min={1}
              max={20}
              value={totalQuestionsToPlay}
              onChange={setTotalQuestionsToPlay}
            />
            <div style={{ textAlign: "center" }}>
              <Tag color="blue">{totalQuestionsToPlay} câu</Tag>
            </div>
          </div>

          <Button
            type="primary"
            size="large"
            icon={loading ? <Spin /> : <PlayCircleOutlined />}
            onClick={handleStartGame}
            loading={loading} // Hiệu ứng loading trên nút
            block
            style={{ height: 50, borderRadius: 8 }}
          >
            {loading ? "Đang tạo đề..." : "Bắt đầu làm bài"}
          </Button>
        </Card>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // VIEW 2: KẾT QUẢ
  // ----------------------------------------------------------------------
  if (appState === "result") {
    return (
      <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
        <Card
          bordered={false}
          className="shadow-lg"
          style={{ textAlign: "center", marginBottom: 24 }}
        >
          <Result
            status={score === playData.length ? "success" : "info"}
            title={`Kết quả: ${score}/${playData.length}`}
            extra={[
              <Button key="back" onClick={handleBackToSetup}>
                Về trang chủ
              </Button>,
              <Button
                key="retry"
                type="primary"
                loading={loading}
                onClick={handleStartGame}
              >
                Làm đề mới
              </Button>,
            ]}
          />
        </Card>

        {/* Danh sách kết quả chi tiết */}
        {playData.map((item, index) => {
          const uAnswer = userAnswers[item.id] || "";
          const isCorrect =
            uAnswer.trim().toLowerCase() === item.answer.toLowerCase();
          return (
            <Card
              key={item.id}
              style={{
                marginBottom: 16,
                borderLeft: `5px solid ${isCorrect ? "#52c41a" : "#ff4d4f"}`,
              }}
            >
              <Text strong>
                Câu {index + 1}: {item.before} ({item.verb}) {item.after}
              </Text>
              <div style={{ marginTop: 10 }}>
                <Space>
                  <Text>
                    Bạn chọn:{" "}
                    <Text type={isCorrect ? "success" : "danger"} strong>
                      {uAnswer || "(Trống)"}
                    </Text>
                  </Text>
                  {!isCorrect && (
                    <Text>
                      | Đáp án: <Text strong>{item.answer}</Text>
                    </Text>
                  )}
                </Space>
              </div>
              {item.explanation && (
                <div
                  style={{
                    marginTop: 10,
                    background: "#f0f2f5",
                    padding: 8,
                    borderRadius: 4,
                  }}
                >
                  <InfoCircleOutlined
                    style={{ marginRight: 5, color: "#1890ff" }}
                  />{" "}
                  {item.explanation}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // VIEW 3: PLAYING
  // ----------------------------------------------------------------------
  if (!currentQuestion)
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Spin tip="Đang tải câu hỏi..." />
      </div>
    );

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "hard":
        return "red";
      case "medium":
        return "gold";
      case "easy":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 20px" }}>
      <Card
        title={
          <Space>
            <span>
              Câu {currentQuestionIndex + 1}/{playData.length}
            </span>

            {/* Hiển thị Tag nếu có dữ liệu level */}
            {currentQuestion.level && (
              <Tag color={getLevelColor(currentQuestion.level)}>
                {currentQuestion.level.toUpperCase()}
              </Tag>
            )}
          </Space>
        }
        // thêm tag mức độ khó nếu có

        extra={
          <Button
            type="dashed"
            icon={<BulbOutlined />}
            onClick={() => setDrawerVisible(true)}
            disabled={!currentQuestion.theory} // Disable nếu API không trả về lý thuyết
            style={{ color: "#faad14", borderColor: "#faad14" }}
          >
            Lý thuyết
          </Button>
        }
        className="shadow-md"
      >
        <Progress
          percent={Math.round(
            ((currentQuestionIndex + 1) / playData.length) * 100,
          )}
          showInfo={false}
          strokeColor="#1890ff"
        />

        <div style={{ textAlign: "center", padding: "40px 0", fontSize: 18 }}>
          {currentQuestion.before}{" "}
          <Space
            orientation="vertical"
            size={2}
            style={{ display: "inline-flex", verticalAlign: "middle" }}
          >
            <Input
              ref={inputRef}
              autoFocus // Tự động focus input
              value={userAnswers[currentQuestion.id] || ""}
              onChange={handleInputChange}
              onPressEnter={isLastQuestion ? handleSubmit : handleNext}
              style={{
                width: 150,
                textAlign: "center",
                fontWeight: "bold",
                color: "#1890ff",
                borderBottom: "2px solid #1890ff",
                borderRadius: 0,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                background: "#f5f5f5",
              }}
              placeholder="..."
            />
            <Tag color="geekblue">{currentQuestion.verb}</Tag>
          </Space>{" "}
          {currentQuestion.after}
        </div>

        <Divider />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            icon={<ArrowLeftOutlined />}
          >
            Lùi
          </Button>
          <Button
            type="primary"
            onClick={isLastQuestion ? handleSubmit : handleNext}
            icon={isLastQuestion ? <SendOutlined /> : <ArrowRightOutlined />}
          >
            {isLastQuestion ? "Nộp bài" : "Tiếp theo"}
          </Button>
        </div>
      </Card>

      {/* --- DRAWER LÝ THUYẾT --- */}
      <Drawer
        title={
          <Space>
            <BulbOutlined style={{ color: "#faad14" }} />{" "}
            <Text strong>
              {currentQuestion.theory?.title || "Kiến thức ngữ pháp"}
            </Text>
          </Space>
        }
        size={400}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        {renderTheoryContent(currentQuestion.theory)}
      </Drawer>
    </div>
  );
};

export default VerbConjugationAdvanced;
