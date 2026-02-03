/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Button, Card, Typography, Space, Radio, 
  Divider, Progress, Modal, Tag, Alert, Statistic 
} from "antd";
import { 
  ArrowLeftOutlined, 
  CheckCircleOutlined, 
  RightOutlined,
  TrophyOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined
} from "@ant-design/icons";
import { detailedRoadmap } from "./Dashboard/RoadmapData";

// 👇 IMPORT HÀM TĂNG PROGRESS TỪ FILE STORAGE CỦA BẠN
// Hãy chắc chắn đường dẫn này đúng với nơi bạn lưu đoạn code thứ 3
import { incrementTaskProgress } from "../util/taskProgress"; 

const { Title, Text } = Typography;
const { confirm } = Modal;

const SCORE_STORAGE_KEY = "exerciseScore";

// --- Dữ liệu câu hỏi (Giữ nguyên) ---
const QUESTIONS = [
  {
    id: 1,
    sentence: "She ____ to work by bus every day.",
    options: ["go", "goes", "is going", "has gone"],
    answer: "goes",
    explanation:
      "Hiện tại đơn diễn tả thói quen hằng ngày. Chủ ngữ số ít (She) dùng động từ thêm -s/-es.",
  },
  {
    id: 2,
    sentence: "They ____ dinner right now.",
    options: ["cook", "are cooking", "have cooked", "cooked"],
    answer: "are cooking",
    explanation:
      "Hiện tại tiếp diễn dùng để nói hành động đang diễn ra tại thời điểm nói (right now).",
  },
  {
    id: 3,
    sentence: "I ____ this book before.",
    options: ["read", "am reading", "have read", "reads"],
    answer: "have read",
    explanation:
      "Hiện tại hoàn thành diễn tả kinh nghiệm đã xảy ra trong quá khứ, không nêu thời gian cụ thể.",
  },
  {
    id: 4,
    sentence: "The sun ____ in the east.",
    options: ["rise", "rises", "is rising", "has risen"],
    answer: "rises",
    explanation:
      "Hiện tại đơn diễn tả sự thật hiển nhiên. Chủ ngữ số ít (The sun) dùng rises.",
  },
  {
    id: 5,
    sentence: "We ____ for the train at the moment.",
    options: ["wait", "are waiting", "have waited", "waited"],
    answer: "are waiting",
    explanation:
      "At the moment là dấu hiệu của hiện tại tiếp diễn.",
  },
  {
    id: 6,
    sentence: "He ____ in this city since 2020.",
    options: ["lives", "is living", "has lived", "lived"],
    answer: "has lived",
    explanation:
      "Since + mốc thời gian dùng với hiện tại hoàn thành để nói hành động kéo dài đến hiện tại.",
  },
  {
    id: 7,
    sentence: "My brother usually ____ coffee in the morning.",
    options: ["drink", "drinks", "is drinking", "has drunk"],
    answer: "drinks",
    explanation:
      "Usually là trạng từ chỉ tần suất -> hiện tại đơn. Chủ ngữ số ít dùng drinks.",
  },
  {
    id: 8,
    sentence: "Look! The kids ____ in the yard.",
    options: ["play", "are playing", "have played", "played"],
    answer: "are playing",
    explanation:
      "Look! là dấu hiệu cho hành động đang diễn ra -> hiện tại tiếp diễn.",
  },
  {
    id: 9,
    sentence: "She ____ already ____ her homework.",
    options: ["has / finished", "is / finishing", "finishes", "finished"],
    answer: "has / finished",
    explanation:
      "Already thường đi với hiện tại hoàn thành để nói hành động vừa/đã hoàn tất.",
  },
  {
    id: 10,
    sentence: "I ____ English every weekend.",
    options: ["study", "studies", "am studying", "have studied"],
    answer: "study",
    explanation:
      "Every weekend là dấu hiệu của hiện tại đơn. Chủ ngữ I dùng study.",
  },
];

// --- Helper Functions ---
const loadPersistentScore = () => {
  if (typeof window === "undefined") return 0;
  const stored = window.localStorage.getItem(SCORE_STORAGE_KEY);
  return stored ? Number(stored) : 0;
};

const savePersistentScore = (newScore) => {
  const currentTotal = loadPersistentScore();
  window.localStorage.setItem(SCORE_STORAGE_KEY, String(currentTotal + newScore));
};

const findTaskById = (taskId) => {
  for (const week of detailedRoadmap) {
    for (const day of week.days) {
      const task = day.tasks.find((item) => item.id === taskId);
      if (task) {
        return { task, day, week };
      }
    }
  }
  return null;
};

const Exercise = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const taskInfo = useMemo(() => findTaskById(taskId), [taskId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Điểm phiên hiện tại
  const [sessionScore, setSessionScore] = useState(0);

  // Modal thoát
  const handleBackWithConfirm = () => {
    confirm({
      title: 'Xác nhận thoát bài tập?',
      icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />,
      content: 'Tiến trình bài này sẽ không được tính nếu bạn thoát ngay bây giờ.',
      okText: 'Thoát',
      okType: 'danger',
      cancelText: 'Làm tiếp',
      onOk() {
        navigate("/dashboard");
      },
    });
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    const correct = selectedOption === QUESTIONS[currentIndex].answer;
    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setSessionScore(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setIsChecked(false);
    setIsCorrect(false);
    setSessionScore(0);
  };

  const handleFinish = () => {
    const totalQuestions = QUESTIONS.length;
    // Tính % điểm (Lưu ý: sessionScore lúc này đã bao gồm câu cuối nếu đúng)
    const percentage = Math.round((sessionScore / totalQuestions) * 100);
    const PASS_THRESHOLD = 70; // Ngưỡng 70%

    if (percentage > PASS_THRESHOLD) {
      // --- TRƯỜNG HỢP ĐẠT YÊU CẦU ---
      
      // 1. Tăng Task Progress lên 1 level
      incrementTaskProgress(taskId);
      
      // 2. Cộng điểm tích lũy (Gamification)
      savePersistentScore(sessionScore);

      // 3. Hiển thị thông báo thành công
      Modal.success({
        title: 'Chúc mừng! Bạn đã hoàn thành nhiệm vụ',
        icon: <TrophyOutlined style={{ color: '#faad14' }} />,
        content: (
          <div>
            <p>Bạn đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions} câu đúng).</p>
            <p>Thanh tiến độ bài học đã được cập nhật!</p>
          </div>
        ),
        okText: 'Về Dashboard',
        onOk: () => navigate("/dashboard")
      });
    } else {
      // --- TRƯỜNG HỢP KHÔNG ĐẠT ---
      Modal.confirm({
        title: 'Chưa đạt yêu cầu',
        icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
        content: (
          <div>
            <p>Bạn chỉ đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions} câu đúng).</p>
            <p>Bạn cần đạt trên <b>{PASS_THRESHOLD}%</b> để hoàn thành nhiệm vụ này.</p>
          </div>
        ),
        okText: 'Làm lại ngay',
        cancelText: 'Để sau',
        onOk: handleRestart,
        onCancel: () => navigate("/dashboard"),
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption("");
      setIsChecked(false);
      setIsCorrect(false);
    } else {
      // Nếu là câu cuối cùng thì xử lý kết quả
      handleFinish();
    }
  };

  if (!taskInfo) return <Text>Không tìm thấy bài tập</Text>;

  const { task, day, week } = taskInfo;
  const currentQuestion = QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex) / QUESTIONS.length) * 100);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 15px" }}>
      {/* Header */}
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={handleBackWithConfirm}
          type="text"
        >
          Thoát
        </Button>
        <Statistic 
          title="Điểm hiện tại" 
          value={sessionScore} 
          prefix={<TrophyOutlined />} 
          valueStyle={{ color: '#cf1322', fontSize: '20px' }}
        />
      </div>

      <Card 
        bordered={false} 
        style={{ borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
      >
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
          <div>
            <Tag color="cyan">{week.name}</Tag>
            <Title level={4} style={{ marginTop: 12 }}>{task.text}</Title>
            <Progress percent={progressPercent} status="active" strokeColor="#1890ff" />
          </div>

          <Divider plain><Text type="secondary">Câu hỏi {currentIndex + 1} / {QUESTIONS.length}</Text></Divider>

          <div style={{ minHeight: 120 }}>
            <Title level={5}>{currentQuestion.sentence}</Title>
            <Radio.Group
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              disabled={isChecked}
              style={{ width: '100%', marginTop: 16 }}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                {currentQuestion.options.map((option) => (
                  <Radio key={option} value={option} className="custom-radio-option">
                    {option}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>

          {isChecked && (
            <Alert
              message={isCorrect ? "Chính xác!" : "Rất tiếc!"}
              description={currentQuestion.explanation}
              type={isCorrect ? "success" : "error"}
              showIcon
              style={{ borderRadius: 12 }}
            />
          )}

          <div style={{ textAlign: 'right', marginTop: 12 }}>
            {!isChecked ? (
              <Button
                type="primary"
                size="large"
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                shape="round"
                style={{ width: 140 }}
              >
                Kiểm tra
              </Button>
            ) : (
              <Button
                type="primary"
                size="large"
                onClick={handleNextQuestion}
                shape="round"
                // Đổi icon và text ở câu cuối cùng
                icon={currentIndex === QUESTIONS.length - 1 ? <CheckCircleOutlined /> : <RightOutlined />}
                style={{ width: 160, backgroundColor: isCorrect ? '#52c41a' : '#1890ff' }}
              >
                {currentIndex === QUESTIONS.length - 1 ? "Hoàn thành" : "Tiếp theo"}
              </Button>
            )}
          </div>
        </Space>
      </Card>

      <style>{`
        .custom-radio-option {
          display: block;
          padding: 12px 16px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          margin-bottom: 8px;
          transition: all 0.3s;
        }
        .custom-radio-option:hover {
          background: #f0f7ff;
          border-color: #adc6ff;
        }
        .ant-radio-wrapper-checked {
          background: #e6f7ff;
          border-color: #1890ff;
        }
      `}</style>
    </div>
  );
};

export default Exercise;