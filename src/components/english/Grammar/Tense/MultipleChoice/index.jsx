import React, { useState } from "react";
import {
  Card, Button, Progress, Typography, Space, Tag, Result, Divider, Slider, List, Drawer, Spin,
} from "antd";
import {
  CheckCircleOutlined, CloseCircleOutlined, ReloadOutlined, ArrowRightOutlined,
  BulbOutlined, PlayCircleOutlined, SettingOutlined, EyeOutlined, BookOutlined,
} from "@ant-design/icons";
import { generateQuizTenseMulti } from "../../../API/TenseApi";

const { Title, Text, Paragraph } = Typography;

// Library map hỗ trợ cả snake_case (từ API) và kebab-case
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

const MultipleChoice = () => {
  const [step, setStep] = useState("setup");
  const [questionCount, setQuestionCount] = useState(3);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [theoryData, setTheoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    try {
      const response = await generateQuizTenseMulti({
        type: "TenseMulti",
        numQuestions: questionCount,
      });

      if (response && response.length > 0) {
        setCurrentQuiz(response);
        setStep("quiz");
        setCurrentIndex(0);
        setScore(0);
        setIsChecked(false);
        setSelectedOption(null);
        setUserAnswers([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý lấy lý thuyết từ object theory của API
  const handleOpenTheory = (theoryObj) => {
    if (!theoryObj) return;
    const key = theoryObj.$ref || theoryObj; // Xử lý nếu API trả về object {$ref: "..."}
    setTheoryData(THEORY_LIBRARY[key]);
    setDrawerVisible(true);
  };

  const handleCheck = () => {
    setIsChecked(true);
    const isCorrect = selectedOption === currentQuiz[currentIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);
    
    setUserAnswers([
      ...userAnswers,
      { ...currentQuiz[currentIndex], userSelected: selectedOption, isCorrect },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < currentQuiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      setStep("result");
    }
  };

  const getLevelColor = (level) => {
    const colors = { hard: "red", medium: "gold", easy: "green" };
    return colors[level?.toLowerCase()] || "blue";
  };

  // --- RENDERING ---
  if (step === "setup") {
    return (
      <div style={{ maxWidth: 500, margin: "60px auto", padding: "0 20px" }}>
        <Card className="shadow-lg" style={{ borderRadius: 16, textAlign: "center" }}>
          <SettingOutlined style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }} />
          <Title level={2}>Cấu hình bài tập</Title>
          <div style={{ padding: "20px 0", textAlign: "left" }}>
            <Text strong>Số lượng câu hỏi: {questionCount}</Text>
            <Slider min={1} max={10} value={questionCount} onChange={setQuestionCount} />
          </div>
          <Button
            type="primary" size="large" block
            loading={loading}
            icon={<PlayCircleOutlined />}
            onClick={startQuiz}
            style={{ height: 50, borderRadius: 8 }}
          >
            Bắt đầu làm bài
          </Button>
        </Card>
      </div>
    );
  }

  if (step === "result") {
    return (
      <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 20px" }}>
        <Card className="shadow-lg" style={{ borderRadius: 16 }}>
          <Result
            status={score >= currentQuiz.length / 2 ? "success" : "warning"}
            title={`Kết quả: ${score} / ${currentQuiz.length}`}
            extra={[
              <Space key="actions" direction="vertical" style={{ width: "100%" }}>
                <Button type="primary" size="large" block onClick={() => setStep("review")} icon={<EyeOutlined />}>
                  Xem lại bài làm
                </Button>
                <Button size="large" block onClick={() => setStep("setup")} icon={<ReloadOutlined />}>
                  Làm bài mới
                </Button>
              </Space>,
            ]}
          />
        </Card>
      </div>
    );
  }

  if (step === "review") {
    return (
      <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
        <Title level={3} style={{ textAlign: "center" }}>Chi tiết bài làm</Title>
        <List
          dataSource={userAnswers}
          renderItem={(item, index) => (
            <Card
              key={index}
              style={{
                marginBottom: 16, borderRadius: 12,
                borderLeft: `6px solid ${item.isCorrect ? "#52c41a" : "#ff4d4f"}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Tag color={item.isCorrect ? "success" : "error"}>{item.isCorrect ? "Đúng" : "Sai"}</Tag>
                <Button type="link" icon={<BookOutlined />} onClick={() => handleOpenTheory(item.theory)}>
                  Lý thuyết
                </Button>
              </div>
              <Paragraph strong style={{ marginTop: 10 }}>Câu {index + 1}: {item.question}</Paragraph>
              <Text>Đáp án của bạn: <Text type={item.isCorrect ? "success" : "danger"}>{item.userSelected}</Text></Text>
              {!item.isCorrect && (
                <div><Text>Đáp án đúng: <Text type="success">{item.correctAnswer}</Text></Text></div>
              )}
            </Card>
          )}
        />
        <Button block size="large" onClick={() => setStep("setup")} style={{ marginTop: 20 }}>Quay lại</Button>
        <TheoryDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} data={theoryData} />
      </div>
    );
  }

  const currentQuestion = currentQuiz[currentIndex];
  if (!currentQuestion) return <Spin size="large" style={{ display: 'block', margin: '100px auto' }} />;

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
      <Card
        bordered={false}
        className="shadow-md"
        style={{ borderRadius: 16 }}
        title={
          <Space>
            <span>Câu {currentIndex + 1}/{currentQuiz.length}</span>
            {currentQuestion.level && (
              <Tag color={getLevelColor(currentQuestion.level)}>{currentQuestion.level.toUpperCase()}</Tag>
            )}
          </Space>
        }
        extra={
          <Button
            type="dashed" icon={<BulbOutlined />}
            onClick={() => handleOpenTheory(currentQuestion.theory)}
            style={{ color: "#faad14", borderColor: "#faad14" }}
          >
            Lý thuyết
          </Button>
        }
      >
        <Progress percent={Math.round((currentIndex / currentQuiz.length) * 100)} showInfo={false} style={{ marginBottom: 20 }} />

        <Title level={4}>{currentQuestion.question}</Title>

        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          {currentQuestion.options.map((option, index) => {
            const isSelected = option === selectedOption;
            const isCorrect = option === currentQuestion.correctAnswer;
            
            let cardStyle = {
              padding: "14px", borderRadius: "10px", border: "1px solid #d9d9d9",
              cursor: isChecked ? "default" : "pointer", transition: "0.3s",
            };

            if (isChecked) {
              if (isCorrect) cardStyle = { ...cardStyle, border: "2px solid #52c41a", backgroundColor: "#f6ffed" };
              else if (isSelected) cardStyle = { ...cardStyle, border: "2px solid #ff4d4f", backgroundColor: "#fff1f0" };
            } else if (isSelected) {
              cardStyle = { ...cardStyle, border: "2px solid #1890ff", backgroundColor: "#e6f7ff" };
            }

            return (
              <div key={index} style={cardStyle} onClick={() => !isChecked && setSelectedOption(option)}>
                <Text strong>{String.fromCharCode(65 + index)}.</Text> {option}
              </div>
            );
          })}
        </Space>

        {isChecked && (
          <div style={{ marginTop: 20, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
            <Text type={selectedOption === currentQuestion.correctAnswer ? "success" : "danger"} strong>
              {selectedOption === currentQuestion.correctAnswer ? <CheckCircleOutlined /> : <CloseCircleOutlined />} 
              {selectedOption === currentQuestion.correctAnswer ? " Chính xác!" : " Chưa đúng!"}
            </Text>
            <div style={{ marginTop: 8 }}>
                <Text strong>Giải thích: </Text>
                <Text>{currentQuestion.explanation}</Text>
            </div>
          </div>
        )}

        <Divider />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {!isChecked ? (
            <Button type="primary" size="large" onClick={handleCheck} disabled={!selectedOption}>Kiểm tra</Button>
          ) : (
            <Button type="primary" size="large" onClick={handleNext} icon={<ArrowRightOutlined />}>
              {currentIndex === currentQuiz.length - 1 ? "Xem kết quả" : "Tiếp theo"}
            </Button>
          )}
        </div>
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

export default MultipleChoice;