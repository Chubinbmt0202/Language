/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Typography,
  Space,
  Radio,
  Divider,
  Progress,
  Modal,
  Tag,
  Alert,
  Statistic,
  Empty,
} from "antd";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  TrophyOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined,
  HistoryOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { detailedRoadmap } from "../Dashboard/RoadmapData";
import { addPoints, addRoadmapPoints } from "../../util/points";
import {
  findRoadmapLocationByTaskId,
  getDayGate,
} from "../../util/roadmapAccess";
import {
  DEFAULT_HARD_QUESTIONS,
  DEFAULT_QUESTIONS,
  EXERCISE_DATA,
  QUIZ_TASKS,
} from "./ExerciseQuestionData";
import { incrementTaskProgress, getTaskState } from "../../util/taskProgress";
import { Collapse } from "antd";

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
  const [showHint, setShowHint] = useState(false);

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
      title: "Xác nhận thoát bài tập?",
      icon: <ExclamationCircleOutlined style={{ color: "#faad14" }} />,
      content:
        "Tiến trình bài này sẽ không được tính nếu bạn thoát ngay bây giờ.",
      okText: "Thoát",
      okType: "danger",
      cancelText: "Làm tiếp",
      onOk() {
        navigate("/Distance");
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

    // LẤY DỮ LIỆU BÀI TẬP:
    // Hỗ trợ lookup mới theo taskId (QUIZ_TASKS) trước, nếu không có thì fallback về cũ, nếu không có nữa thì fallback về default
    let taskExercise = QUIZ_TASKS?.[taskId];

    if (!taskExercise) {
      const taskKey = task.exerciseKey;
      taskExercise = dayData?.tasks?.[taskKey] || (dayData?.tasks ? Object.values(dayData.tasks)[0] : null);
    }

    if (!taskExercise) {
      taskExercise = {
        total: 10,
        questions: { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS }
      };
    }

    // Lấy pool câu hỏi dựa trên Tier (Easy/Hard)
    const pool =
      tier > 0 ? taskExercise.questions.hard : taskExercise.questions.easy;
    const totalNeeded = taskExercise.total || 10;

    // Lọc câu đã làm (completedIds)
    const available = pool.filter((q) => !completedIds.includes(q.id));

    if (available.length === 0) return [];

    return shuffleArray(available).slice(0, totalNeeded);
  }, [taskId, tier, taskInfo, completedIds]);

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    const currentQ = shuffledQuestionSet[currentIndex];

    let isCorrectAnswer = false;
    if (currentQ.correct_answer) {
      // Định dạng mới (JSON object có correct_answer)
      isCorrectAnswer = selectedOption === currentQ.correct_answer;
    } else {
      // Định dạng cũ (string answer)
      isCorrectAnswer = selectedOption === currentQ.answer;
    }

    setIsChecked(true);
    setIsCorrect(isCorrectAnswer);

    if (correct) {
      setSessionScore((prev) => prev + 1);
      // Lưu tạm ID câu đúng
      setSessionCorrectIds((prev) => [...prev, currentQ.id]);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
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
        const newCompletedList = [
          ...new Set([...completedIds, ...sessionCorrectIds]),
        ];
        setCompletedIds(newCompletedList); // Cập nhật state để UI phản hồi ngay nếu cần
        localStorage.setItem(
          `${STORAGE_PREFIX}${uid}:${taskId}`,
          JSON.stringify(newCompletedList),
        );
      }

      incrementTaskProgress(taskId);
      addPoints(sessionScore);
      const { day, week } = taskInfo;
      addRoadmapPoints({
        weekNumber: week.week,
        dayId: day.id,
        points: sessionScore,
      });

      Modal.success({
        title: "Chúc mừng! Bạn đã hoàn thành nhiệm vụ",
        icon: <TrophyOutlined style={{ color: "#faad14" }} />,
        content: (
          <div>
            <p>
              Bạn đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions} câu
              đúng).
            </p>
            <p>
              Các câu trả lời đúng đã được lưu lại và sẽ không xuất hiện trong
              lần tới.
            </p>
          </div>
        ),
        okText: "Về Dashboard",
        onOk: () => navigate("/Distance"),
      });
    } else {
      // --- KHÔNG ĐẠT ---
      Modal.confirm({
        title: "Chưa đạt yêu cầu",
        icon: <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />,
        content: (
          <div>
            <p>
              Bạn chỉ đạt <b>{percentage}%</b> ({sessionScore}/{totalQuestions}{" "}
              câu đúng).
            </p>
            <p>
              Hãy làm lại để nắm vững kiến thức nhé (Tiến trình chưa được lưu).
            </p>
          </div>
        ),
        okText: "Làm lại ngay",
        cancelText: "Để sau",
        onOk: handleRestart,
        onCancel: () => navigate("/Home"),
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestionSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption("");
      setIsChecked(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      handleFinish();
    }
  };

  // Hàm Reset lịch sử cho bài này
  const handleResetHistory = () => {
    confirm({
      title: "Học lại từ đầu?",
      content:
        "Lịch sử làm bài của nhiệm vụ này sẽ bị xóa. Bạn sẽ làm lại tất cả câu hỏi.",
      okType: "danger",
      onOk() {
        if (uid) {
          localStorage.removeItem(`${STORAGE_PREFIX}${uid}:${taskId}`);
          setCompletedIds([]); // Clear state để kích hoạt lại useMemo
          handleRestart();
        }
      },
    });
  };

  if (!taskInfo) return <Text>Không tìm thấy bài tập</Text>;

  // Style chung cho container để đảm bảo full màn hình
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 700,
    margin: "0 auto",
    padding: "16px",
    overflow: "hidden", // Không cho body scroll
  };

  if (!dayGate.unlocked) {
    return (
      <div style={containerStyle}>
        <div style={{ marginTop: 40 }}>
          <Alert
            type="warning"
            showIcon
            message="Bài học đang bị khóa"
            description="Bạn cần đủ điểm của ngày/tuần trước hoặc làm bài test mở khóa trong Dashboard."
            action={
              <Button type="primary" onClick={() => navigate("/Home")}>
                Về Trang Chủ
              </Button>
            }
          />
        </div>
      </div>
    );
  }

  // 4. Màn hình khi đã làm hết câu hỏi
  if (shuffledQuestionSet.length === 0) {
    return (
      <div style={containerStyle}>
        {/* Header giả để giữ layout không bị nhảy */}
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/Home")}
            type="text"
          >
            Thoát
          </Button>
        </div>

        <Card
          bordered={false}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
          bodyStyle={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            description={
              <span>
                <Title level={4} style={{ color: "#52c41a" }}>
                  Tuyệt vời!
                </Title>
                <Text>
                  Bạn đã trả lời đúng hết tất cả câu hỏi trong ngân hàng đề của
                  bài này.
                </Text>
              </span>
            }
          >
            <Space
              direction="vertical"
              style={{ width: "100%", marginTop: 20 }}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/Home")}
              >
                Quay về Trang Chủ
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
  const progressPercent = Math.round(
    (currentIndex / shuffledQuestionSet.length) * 100,
  );

  return (
    <div style={containerStyle}>
      {/* Header - Fixed Top */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBackWithConfirm}
          type="text"
        >
          Thoát
        </Button>
        <Space>
          <Statistic
            value={sessionScore}
            prefix={<TrophyOutlined />}
            valueStyle={{ color: "#cf1322", fontSize: "20px" }}
          />
        </Space>
      </div>

      {/* Card Wrapper - Flex Grow */}
      <Card
        bordered={false}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden", // Quan trọng: chặn scroll ở level Card wrapper
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
        bodyStyle={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          overflow: "hidden", // Quan trọng
        }}
      >
        {/* Phần 1: Tiêu đề & Progress - Fixed */}
        <div style={{ flexShrink: 0 }}>
          <Tag color="cyan">{week.name}</Tag>
          <Title level={4} style={{ marginTop: 8, marginBottom: 12 }}>
            {task.text}
          </Title>
          <Progress
            percent={progressPercent}
            status="active"
            strokeColor="#1890ff"
          />
          <Divider plain style={{ margin: "12px 0" }}>
            <Text type="secondary">
              Câu hỏi {currentIndex + 1} / {shuffledQuestionSet.length}
            </Text>
          </Divider>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            maxHeight: "calc(100vh - 50px)", // Giới hạn chiều cao để tránh
            paddingRight: 4,
            flexDirection: "column",
          }}
        >
          <Title level={5} style={{ marginBottom: 16, lineHeight: 1.5 }}>
            {currentQuestion.sentence || currentQuestion.question_text}
          </Title>

          <Radio.Group
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
            disabled={isChecked}
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                width: "100%",
              }}
            >
              {(currentQuestion.options || []).map((option, idx) => {
                const isAdvanced = typeof option === "object";
                const optValue = isAdvanced ? option.key : option;
                const optText = isAdvanced ? `${option.key}. ${option.text}` : option;

                return (
                  <Radio
                    key={idx}
                    value={optValue}
                    className="custom-radio-option"
                  >
                    {optText}
                  </Radio>
                );
              })}
            </div>
          </Radio.Group>

          {currentQuestion.hint && !isChecked && (
            <div style={{ marginTop: 16 }}>
              <Button
                type="dashed"
                icon={<BulbOutlined />}
                onClick={() => setShowHint(!showHint)}
                style={{ borderRadius: 8, color: '#faad14', borderColor: '#ffe58f' }}
              >
                {showHint ? "Ẩn gợi ý" : "Xem gợi ý"}
              </Button>
              {showHint && (
                <Alert
                  message="Gợi ý"
                  description={currentQuestion.hint}
                  type="info"
                  showIcon
                  style={{ marginTop: 12, borderRadius: 12 }}
                />
              )}
            </div>
          )}

          {isChecked && (
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <Alert
                message={isCorrect ? "Chính xác!" : "Rất tiếc!"}
                description={
                  <div>
                    <p style={{ margin: 0, marginBottom: 8 }}>{currentQuestion.explanation}</p>
                    {currentQuestion.translation && (
                      <div style={{ background: 'rgba(0,0,0,0.02)', padding: '8px 12px', borderRadius: 8, marginTop: 12, borderLeft: '3px solid #1890ff' }}>
                        <Text strong style={{ color: '#1890ff' }}>Dịch: </Text>
                        <Text>{currentQuestion.translation}</Text>
                      </div>
                    )}
                  </div>
                }
                type={isCorrect ? "success" : "error"}
                showIcon
                style={{ borderRadius: 12 }}
              />
            </div>
          )}
        </div>

        {/* Phần 3: Nút Action - Fixed Bottom */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          {!isChecked ? (
            <Button
              type="primary"
              size="large"
              onClick={handleCheckAnswer}
              disabled={!selectedOption}
              shape="round"
              style={{ width: 140, marginTop: 16 }}
            >
              Kiểm tra
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={handleNextQuestion}
              shape="round"
              icon={
                currentIndex === shuffledQuestionSet.length - 1 ? (
                  <CheckCircleOutlined />
                ) : (
                  <RightOutlined />
                )
              }
              style={{
                width: 160,
                backgroundColor: isCorrect ? "#52c41a" : "#1890ff",
              }}
            >
              {currentIndex === shuffledQuestionSet.length - 1
                ? "Hoàn thành"
                : "Tiếp theo"}
            </Button>
          )}
        </div>
      </Card>

      <style>{`
        .custom-radio-option {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          margin-bottom: 8px;
          transition: all 0.3s;
          white-space: normal; /* Cho phép xuống dòng nếu đáp án dài */
          height: auto;
        }
        .custom-radio-option:hover {
          background: #f0f7ff;
          border-color: #adc6ff;
        }
        .ant-radio-wrapper-checked {
          background: #e6f7ff;
          border-color: #1890ff;
        }
        /* Custom scrollbar cho đẹp hơn trên Chrome/Safari */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Exercise;
