import React, { useState } from "react";
import { 
  Card, Button, Radio, Slider, Drawer, Tag, 
  Typography, Space, List, Divider, Progress, Alert 
} from "antd";
import { 
  BookOutlined, CheckCircleOutlined, CloseCircleOutlined, 
  RightOutlined, ReloadOutlined 
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
import { generateQuizPronounsMulti } from "@/shared/api/PronounApi";


const PronounsMutil = () => {
  // --- States ---
  const [appState, setAppState] = useState("setup"); // 'setup' | 'quiz' | 'review'
  
  // Setup
  const [totalQuestions, setTotalQuestions] = useState(3);
  const [quizList, setQuizList] = useState([]);

  // Quiz Execution
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  
  // Result Storage
  const [userAnswers, setUserAnswers] = useState([]); // [{ question, userAnswer, isCorrect }]

  // 1. Bắt đầu bài thi
  const handleStart = async () => {

    try {
        const response = await generateQuizPronounsMulti({
          type: "pronouns-multi",
          numQuestions: totalQuestions,
        });
        const data = response
        console.log("Dữ liệu câu hỏi từ API trong component:", data);
        if (data && data.length > 0) {
          setQuizList(data);
          setAppState("quiz");
          setCurrentIndex(0);
          setUserAnswers([]);
          resetQuestionState();
          return;
        }

    } catch (error) {
        
        console.error("Lỗi khi gọi API generateQuizPronounsMulti:", error);
    }
    // Random và cắt lấy số lượng câu hỏi
    const shuffled = [...quizList].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, totalQuestions);
    
    setQuizList(selectedQuestions);
    setAppState("quiz");
    setCurrentIndex(0);
    setUserAnswers([]);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsChecked(false);
    setDrawerVisible(false);
  };

  // 2. Xử lý kiểm tra đáp án
  const handleCheck = () => {
    if (!selectedOption) return;

    const currentQ = quizList[currentIndex];
    const isCorrect = selectedOption === currentQ.correct;

    setIsChecked(true);
    
    // Lưu kết quả
    setUserAnswers(prev => [...prev, {
      ...currentQ,
      userAnswer: selectedOption,
      isCorrect: isCorrect
    }]);
  };

  // 3. Chuyển câu tiếp theo
  const handleNext = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      setAppState("review");
    }
  };

  // 4. Làm lại
  const handleRestart = () => {
    setAppState("setup");
    resetQuestionState();
  };

  // Helper: Màu cho độ khó
  const getDifficultyColor = (level) => {
    switch(level) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'blue';
    }
  };

  // --- Render Components ---

  // Màn hình 1: Chọn số lượng
  if (appState === "setup") {
    return (
      <div style={{ maxWidth: 600, margin: " auto", padding: 20 }}>
        <Card title={<Title level={3}>Cấu hình bài tập</Title>} bordered={false} className="shadow-lg">
          <Paragraph>Chọn số lượng câu hỏi bạn muốn làm:</Paragraph>
          <div style={{ marginBottom: 40 }}>
            <Slider
              min={1}
              max={20}
              onChange={setTotalQuestions}
              value={totalQuestions}
              marks={{ 1: '1 câu', 20: '20 câu' }}
            />
          </div>
          <Button type="primary" size="large" block onClick={handleStart}>
            Bắt đầu làm bài
          </Button>
        </Card>
      </div>
    );
  }

  // Màn hình 2: Làm bài (Quiz)
  if (appState === "quiz") {
    const question = quizList[currentIndex];
    console.log("Câu hỏi hiện tại:", question);
    
    return (
      <div style={{ maxWidth: 700, margin: "20px auto", padding: 10 }}>
        {/* Progress bar */}
        <Progress 
          percent={Math.round(((currentIndex) / totalQuestions) * 100)} 
          status="active" 
          showInfo={false} 
          style={{ marginBottom: 20 }}
        />

        <Card 
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Space>
                <Text strong>Câu {currentIndex + 1}/{totalQuestions}</Text>
                <Tag color={getDifficultyColor(question.level)}>{question.level}</Tag>
              </Space>
              <Button 
                type="link" 
                icon={<BookOutlined />} 
                onClick={() => setDrawerVisible(true)}
              >
                Lý thuyết
              </Button>
            </div>
          }
          className="shadow-md"
        >
          <Title level={4} style={{ marginBottom: 24 }}>{question.question}</Title>
          
          <Radio.Group 
            onChange={(e) => !isChecked && setSelectedOption(e.target.value)} 
            value={selectedOption}
            style={{ width: '100%' }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              {question.options.map(opt => {
                // Logic hiển thị màu sắc sau khi check
                let style = { 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid #d9d9d9'
                };
                let icon = null;

                if (isChecked) {
                  if (opt === question.correct) {
                    style = { ...style, background: '#f6ffed', borderColor: '#b7eb8f' }; // Màu xanh
                    icon = <CheckCircleOutlined style={{ color: '#52c41a', marginLeft: 10 }} />;
                  } else if (opt === selectedOption && opt !== question.correct) {
                    style = { ...style, background: '#fff1f0', borderColor: '#ffa39e' }; // Màu đỏ
                    icon = <CloseCircleOutlined style={{ color: '#ff4d4f', marginLeft: 10 }} />;
                  }
                }

                return (
                  <Radio.Button 
                    key={opt} 
                    value={opt} 
                    style={{ ...style, height: 'auto', display: 'flex', alignItems: 'center' }}
                    disabled={isChecked}
                  >
                    <span style={{ flex: 1 }}>{opt}</span>
                    {icon}
                  </Radio.Button>
                );
              })}
            </Space>
          </Radio.Group>

          {/* Feedback Area */}
          {isChecked && (
            <Alert
              message={selectedOption === question.correct ? "Chính xác!" : "Sai rồi!"}
              description={`Đáp án đúng là: ${question.correct}`}
              type={selectedOption === question.correct ? "success" : "error"}
              showIcon
              style={{ marginTop: 20 }}
            />
          )}

          <Divider />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!isChecked ? (
              <Button 
                type="primary" 
                onClick={handleCheck} 
                disabled={!selectedOption}
                size="large"
              >
                Kiểm tra
              </Button>
            ) : (
              <Button 
                type="primary" 
                onClick={handleNext} 
                size="large"
                icon={<RightOutlined />}
              >
                {currentIndex === totalQuestions - 1 ? "Xem kết quả" : "Câu tiếp theo"}
              </Button>
            )}
          </div>
        </Card>

        {/* Drawer Lý thuyết */}
        <Drawer
          title="Góc kiến thức"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <Paragraph strong>Câu hỏi:</Paragraph>
          <Paragraph>{question.question}</Paragraph>
          <Divider />
          <Paragraph strong>Giải thích:</Paragraph>
          <Paragraph>{question.theory}</Paragraph>
        </Drawer>
      </div>
    );
  }

  // Màn hình 3: Kết quả (Review)
  if (appState === "review") {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;

    return (
      <div style={{ maxWidth: 800, margin: "20px auto", padding: 20 }}>
        <Card className="shadow-lg">
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <Title level={2}>Kết quả bài làm</Title>
            <Title level={4} type={correctCount === totalQuestions ? 'success' : 'secondary'}>
              Bạn trả lời đúng {correctCount} / {totalQuestions} câu
            </Title>
            <Button type="primary" icon={<ReloadOutlined />} onClick={handleRestart}>
              Làm lại bài tập
            </Button>
          </div>

          <Divider orientation="left">Chi tiết bài làm</Divider>

          <List
            itemLayout="vertical"
            dataSource={userAnswers}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Card 
                  size="small"
                  title={
                    <Space>
                      <Text strong>Câu {index + 1}</Text>
                      {item.isCorrect ? (
                        <Tag color="success" icon={<CheckCircleOutlined />}>Đúng</Tag>
                      ) : (
                        <Tag color="error" icon={<CloseCircleOutlined />}>Sai</Tag>
                      )}
                    </Space>
                  }
                >
                   <Paragraph strong>{item.question}</Paragraph>
                   <Space direction="vertical">
                      <Text>
                        Lựa chọn của bạn: <Text strong type={item.isCorrect ? "success" : "danger"}>{item.userAnswer}</Text>
                      </Text>
                      {!item.isCorrect && (
                        <Text>
                          Đáp án đúng: <Text strong type="success">{item.correct}</Text>
                        </Text>
                      )}
                      <div style={{ marginTop: 8, padding: 8, background: '#f5f5f5', borderRadius: 4 }}>
                        <Text type="secondary" style={{ fontSize: 12 }}>Explain: {item.theory}</Text>
                      </div>
                   </Space>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default PronounsMutil;