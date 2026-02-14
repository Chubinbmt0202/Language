/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Button, Card, Typography, Space, Radio, 
  Divider, Progress, Modal, Tag, Alert, Statistic, Empty 
} from "antd";
import { 
  ArrowLeftOutlined, 
  CheckCircleOutlined, 
  RightOutlined,
  TrophyOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import { auth } from "../../firebase/firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { detailedRoadmap } from "../Dashboard/RoadmapData";
import { addPoints, addRoadmapPoints } from "../../util/points";
import { findRoadmapLocationByTaskId, getDayGate } from "../../util/roadmapAccess";
import {
  DEFAULT_HARD_QUESTIONS,
  DEFAULT_QUESTIONS,
  EXERCISE_DATA,
} from "./ExerciseQuestionData";
import { incrementTaskProgress, getTaskState } from "../../util/taskProgress";

const { Title, Text } = Typography;
const { confirm } = Modal;

// Key tiền tố để lưu lịch sử làm bài vào LocalStorage
const STORAGE_PREFIX = "completed_questions:";

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

const shuffleArray = (items) => {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

const Exercise = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  
  // State quản lý User ID và danh sách câu đã làm
  const [uid, setUid] = useState(() => auth.currentUser?.uid || null);
  const [completedIds, setCompletedIds] = useState([]);

  // Lấy thông tin bài tập
  const taskInfo = useMemo(() => findTaskById(taskId), [taskId]);
  
  // Logic kiểm tra khóa bài học (Gate)
  const roadmapLocation = useMemo(
    () => findRoadmapLocationByTaskId(detailedRoadmap, taskId),
    [taskId],
  );
  const dayGate = useMemo(() => {
    if (!roadmapLocation) return { unlocked: true };
    return getDayGate(
      detailedRoadmap,
      roadmapLocation.weekIndex,
      roadmapLocation.dayIndex,
    );
  }, [roadmapLocation]);

  // State quản lý bài làm hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  
  // Mảng tạm chứa các ID câu làm đúng trong phiên này
  const [sessionCorrectIds, setSessionCorrectIds] = useState([]);

  // 1. Theo dõi Auth và load lịch sử từ Storage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!uid || !taskId) return;
    const key = `${STORAGE_PREFIX}${uid}:${taskId}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        setCompletedIds(JSON.parse(saved));
      } catch (e) {
        setCompletedIds([]);
      }
    }
  }, [uid, taskId]);

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

  const { tier } = useMemo(() => getTaskState(taskId), [taskId]);

  // 2. Tính toán bộ câu hỏi (Đã lọc câu cũ)
const shuffledQuestionSet = useMemo(() => {
  if (!taskInfo) return [];
  
  const { day, task } = taskInfo; // task này lấy từ Roadmap
  const dayData = EXERCISE_DATA?.[day.id];
  
  if (!dayData) return [];

  // LẤY KEY TỪ ROADMAP:
  const taskKey = task.exerciseKey; 
  const taskExercise = dayData.tasks?.[taskKey];

  if (!taskExercise) {
    console.error("Không tìm thấy dữ liệu cho taskKey:", taskKey);
    return [];
  }

  // Lấy pool câu hỏi dựa trên Tier (Easy/Hard)
  const pool = tier > 0 ? taskExercise.questions.hard : taskExercise.questions.easy;
  const totalNeeded = taskExercise.total || 10;

  // Lọc câu đã làm (completedIds)
  const available = pool.filter(q => !completedIds.includes(q.id));

  if (available.length === 0) return [];

  return shuffleArray(available).slice(0, totalNeeded);
}, [taskId, tier, taskInfo, completedIds]);

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    const currentQ = shuffledQuestionSet[currentIndex];
    const correct = selectedOption === currentQ.answer;
    
    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setSessionScore(prev => prev + 1);
      // Lưu tạm ID câu đúng
      setSessionCorrectIds(prev => [...prev, currentQ.id]);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setIsChecked(false);
    setIsCorrect(false);
    setSessionScore(0);
    setSessionCorrectIds([]);
  };

  const handleFinish = () => {
    const totalQuestions = shuffledQuestionSet.length;
    const percentage = Math.round((sessionScore / totalQuestions) * 100);
    const PASS_THRESHOLD = 70;

    if (percentage > PASS_THRESHOLD) {
      // --- ĐẠT YÊU CẦU ---
      
      // 3. Cập nhật Storage: Merge câu cũ + câu mới làm đúng
      if (uid) {
        const newCompletedList = [...new Set([...completedIds, ...sessionCorrectIds])];
        setCompletedIds(newCompletedList); // Cập nhật state để UI phản hồi ngay nếu cần
        localStorage.setItem(`${STORAGE_PREFIX}${uid}:${taskId}`, JSON.stringify(newCompletedList));
      }

      incrementTaskProgress(taskId);
      addPoints(sessionScore);
      const { day, week } = taskInfo;
      addRoadmapPoints({ weekNumber: week.week, dayId: day.id, points: sessionScore });

      Modal.success({
        title: 'Chúc mừng! Bạn đã hoàn thành nhiệm vụ',
        icon: <TrophyOutlined style={{ color: '#faad14' }} />,
        content: (
          <div>
            <p>Bạn đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions} câu đúng).</p>
            <p>Các câu trả lời đúng đã được lưu lại và sẽ không xuất hiện trong lần tới.</p>
          </div>
        ),
        okText: 'Về Dashboard',
        onOk: () => navigate("/Distance"),
      });
    } else {
      // --- KHÔNG ĐẠT ---
      Modal.confirm({
        title: 'Chưa đạt yêu cầu',
        icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
        content: (
          <div>
            <p>Bạn chỉ đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions} câu đúng).</p>
            <p>Hãy làm lại để nắm vững kiến thức nhé (Tiến trình chưa được lưu).</p>
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
    if (currentIndex < shuffledQuestionSet.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption("");
      setIsChecked(false);
      setIsCorrect(false);
    } else {
      handleFinish();
    }
  };

  // Hàm Reset lịch sử cho bài này
  const handleResetHistory = () => {
    confirm({
      title: 'Học lại từ đầu?',
      content: 'Lịch sử làm bài của nhiệm vụ này sẽ bị xóa. Bạn sẽ làm lại tất cả câu hỏi.',
      okType: 'danger',
      onOk() {
        if (uid) {
          localStorage.removeItem(`${STORAGE_PREFIX}${uid}:${taskId}`);
          setCompletedIds([]); // Clear state để kích hoạt lại useMemo
          handleRestart();
        }
      }
    });
  };

  if (!taskInfo) return <Text>Không tìm thấy bài tập</Text>;

  if (!dayGate.unlocked) {
    return (
      <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 15px" }}>
        <Alert
          type="warning"
          showIcon
          message="Bài học đang bị khóa"
          description="Bạn cần đủ điểm của ngày/tuần trước hoặc làm bài test mở khóa trong Dashboard."
          action={
            <Button type="primary" onClick={() => navigate("/dashboard")}>
              Về Dashboard
            </Button>
          }
        />
      </div>
    );
  }

  // 4. Màn hình khi đã làm hết câu hỏi
  if (shuffledQuestionSet.length === 0) {
    return (
        <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 15px", textAlign: "center" }}>
            <Card bordered={false} style={{ borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{ height: 100 }}
                    description={
                        <span>
                            <Title level={4} style={{color: "#52c41a"}}>Tuyệt vời!</Title>
                            <Text>Bạn đã trả lời đúng hết tất cả câu hỏi trong ngân hàng đề của bài này.</Text>
                        </span>
                    }
                >
                    <Space direction="vertical" style={{ width: '100%', marginTop: 20 }}>
                        <Button type="primary" size="large" onClick={() => navigate("/dashboard")}>
                            Quay về Dashboard
                        </Button>
                        <Button icon={<ReloadOutlined />} onClick={handleResetHistory}>
                            Xóa lịch sử & Làm lại từ đầu
                        </Button>
                    </Space>
                </Empty>
            </Card>
        </div>
    );
  }

  const { task, week } = taskInfo;
  const currentQuestion = shuffledQuestionSet[currentIndex];
  const progressPercent = Math.round(((currentIndex) / shuffledQuestionSet.length) * 100);

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
        <Space>
           {/* Hiển thị số câu đã ẩn đi */}
           {/* <Tag icon={<HistoryOutlined />}>Đã xong: {completedIds.length}</Tag> */}
           <Statistic 
            value={sessionScore} 
            prefix={<TrophyOutlined />} 
            valueStyle={{ color: '#cf1322', fontSize: '20px' }}
           />
        </Space>
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

          <Divider plain>
            <Text type="secondary">
                Câu hỏi {currentIndex + 1} / {shuffledQuestionSet.length}
            </Text>
          </Divider>

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
                icon={currentIndex === shuffledQuestionSet.length - 1 ? <CheckCircleOutlined /> : <RightOutlined />}
                style={{ width: 160, backgroundColor: isCorrect ? '#52c41a' : '#1890ff' }}
              >
                {currentIndex === shuffledQuestionSet.length - 1 ? "Hoàn thành" : "Tiếp theo"}
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