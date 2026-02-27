/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Button, Card, Modal, Progress, Radio, Result, Space, Typography } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { EXERCISE_DATA, DEFAULT_QUESTIONS } from "../../Exercises/ExerciseQuestionData";
import {
  UNLOCK_TEST_PASS_PERCENT,
  setRoadmapDayOverrideUnlocked,
  setRoadmapWeekOverrideUnlocked,
} from "@/shared/utils/storage/points";

const { Title, Text } = Typography;

const shuffle = (list) => {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const collectQuestionsForDayIds = (dayIds) => {
  // Dùng Map để đảm bảo mỗi ID câu hỏi chỉ xuất hiện 1 lần
  const uniqueQuestionsMap = new Map();

  dayIds.forEach((dayId) => {
    const dayData = EXERCISE_DATA?.[dayId];
    const tasks = dayData?.tasks ?? {};
    
    Object.values(tasks).forEach((task) => {
      const easy = task?.questions?.easy || [];
      const hard = task?.questions?.hard || [];
      
      // Gộp cả easy và hard lại để duyệt
      [...easy, ...hard].forEach((question) => {
        // Chỉ thêm vào nếu có id và chưa tồn tại trong Map
        if (question && question.id && !uniqueQuestionsMap.has(question.id)) {
          uniqueQuestionsMap.set(question.id, question);
        }
      });
    });
  });

  const pool = Array.from(uniqueQuestionsMap.values());
  return pool.length > 0 ? pool : DEFAULT_QUESTIONS;
};

const getCoveredDayIds = ({ roadmapWeeks, weekIndex, dayIndex, scope }) => {
  const dayIds = [];

  for (let w = 0; w < weekIndex; w += 1) {
    const week = roadmapWeeks[w];
    (week?.days ?? []).forEach((d) => dayIds.push(d.id));
  }

  const currentWeek = roadmapWeeks?.[weekIndex];
  if (!currentWeek) return dayIds;

  if (scope === "week") {
    return dayIds;
  }

  for (let d = 0; d < dayIndex; d += 1) {
    const day = currentWeek.days?.[d];
    if (day?.id) dayIds.push(day.id);
  }

  return dayIds;
};

const UnlockTestModal = ({
  open,
  onClose,
  roadmapWeeks,
  weekIndex,
  dayIndex,
  scope, // "day" | "week"
}) => {
  const [key, setKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitOutcome, setSubmitOutcome] = useState(null); // "pass" | "fail" | null

  useEffect(() => {
    if (!open) return;
    setKey((prev) => prev + 1);
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted(false);
    setSubmitOutcome(null);
  }, [open]);

  const title = useMemo(() => {
    if (!Array.isArray(roadmapWeeks)) return "Bài test mở khóa";
    const week = roadmapWeeks?.[weekIndex];
    const day = week?.days?.[dayIndex];
    if (scope === "week") return `Bài test mở khóa: ${week?.name ?? `Tuần ${week?.week ?? ""}`}`;
    return `Bài test mở khóa: ${day?.title ?? "Ngày"}`;
  }, [roadmapWeeks, weekIndex, dayIndex, scope]);

  const coveredDayIds = useMemo(
    () =>
      getCoveredDayIds({
        roadmapWeeks,
        weekIndex,
        dayIndex,
        scope,
      }),
    [roadmapWeeks, weekIndex, dayIndex, scope, key],
  );

  const questions = useMemo(() => {
    const pool = collectQuestionsForDayIds(coveredDayIds);
    const picked = shuffle(pool).slice(0, 10);
    return picked.map((q, idx) => ({ ...q, __idx: idx + 1 }));
  }, [coveredDayIds, key]);

  const currentQuestion = questions[currentIndex];

  const correctCount = useMemo(() => {
    return questions.reduce((acc, q) => {
      const chosen = answers[q.id];
      if (chosen && chosen === q.answer) return acc + 1;
      return acc;
    }, 0);
  }, [questions, answers]);

  const percent = useMemo(() => {
    if (!questions.length) return 0;
    return Math.round((correctCount / questions.length) * 100);
  }, [correctCount, questions.length]);

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((p) => p - 1);
  };

  const handleSubmit = () => {
    const passed = percent >= UNLOCK_TEST_PASS_PERCENT;
    setSubmitted(true);
    setSubmitOutcome(passed ? "pass" : "fail");

    if (!passed) return;

    const week = roadmapWeeks?.[weekIndex];
    const day = week?.days?.[dayIndex];

    if (scope === "week" && week?.week != null) {
      setRoadmapWeekOverrideUnlocked(week.week, true);
    }

    if (scope === "day" && day?.id) {
      setRoadmapDayOverrideUnlocked(day.id, true);
    }
  };

  useEffect(() => {
    if (!open) return;
    if (!submitted) return;
    if (!submitOutcome) return;

    const timer = window.setTimeout(() => {
      window.location.reload();
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [open, submitted, submitOutcome]);

  const reset = () => {
    setKey((prev) => prev + 1);
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted(false);
    setSubmitOutcome(null);
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
      width={720}
      destroyOnHidden
    >
      {submitted ? (
        <Result
          status={submitOutcome === "pass" ? "success" : "error"}
          title={
            submitOutcome === "pass" ? "Bạn đã đủ điều kiện mở khóa" : "Bạn chưa đủ điều kiện"
          }
          subTitle={`Tự động cập nhật sau 2 giây • Bạn đạt ${percent}% (${correctCount}/${questions.length}) • Yêu cầu: ${UNLOCK_TEST_PASS_PERCENT}%.`}
          extra={[
            <Button key="close" type="primary" onClick={onClose}>
              Đóng
            </Button>,
            <Button key="retry" icon={<ReloadOutlined />} onClick={reset}>
              Làm lại
            </Button>,
          ]}
        />
      ) : (
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <Alert
            type="info"
            showIcon
            title="Làm bài test để mở khóa"
            description={`Bài test lấy câu hỏi từ các ngày trước đó. Đạt ≥ ${UNLOCK_TEST_PASS_PERCENT}% để mở khóa.`}
          />

          <Progress
            percent={Math.round(((currentIndex + 1) / Math.max(1, questions.length)) * 100)}
            showInfo={false}
          />

          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Câu {currentIndex + 1} / {questions.length}
            </Title>
            <Text strong style={{ display: "block", marginBottom: 12 }}>
              {currentQuestion?.sentence}
            </Text>
            <Radio.Group
              onChange={(e) => handleSelect(e.target.value)}
              value={answers[currentQuestion?.id]}
              style={{ width: "100%" }}
            >
              <Space direction="vertical">
                {(currentQuestion?.options ?? []).map((opt) => (
                  <Radio key={opt} value={opt}>
                    {opt}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Card>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handlePrev} disabled={currentIndex === 0}>
              Trước
            </Button>

            {currentIndex === questions.length - 1 ? (
              <Button
                type="primary"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < questions.length}
              >
                Nộp bài
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={handleNext}
                disabled={!answers[currentQuestion?.id]}
              >
                Tiếp theo
              </Button>
            )}
          </div>
        </Space>
      )}
    </Modal>
  );
};

export default UnlockTestModal;
