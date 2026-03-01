import React, { useState, useEffect, useMemo } from "react";
import { Typography, Card, Button, Space, Progress, Tag, Modal, Radio } from "antd";
import { ClockCircleOutlined, FlagFilled, FlagOutlined, RocketOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { QUIZ_TASKS, DEFAULT_QUESTIONS, DEFAULT_HARD_QUESTIONS } from "./ExerciseQuestionData";
import { addPoints } from "@/shared/utils/storage/points";
import { incrementTaskProgress } from "@/shared/utils/storage/taskProgress";

const { Title, Text } = Typography;

const shuffleArray = (items) => {
    const next = [...items];
    for (let i = next.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
    }
    return next;
};

const MiniTest = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();

    // Load questions
    const questions = useMemo(() => {
        if (taskId === "w1-d7-t2") {
            const w1TaskIds = ["w1-d1-t3", "w1-d2-t3", "w1-d3-t3", "w1-d4-t3", "w1-d5-t1", "w1-d6-t1"];
            let allW1 = [];
            w1TaskIds.forEach(id => {
                const tData = QUIZ_TASKS[id];
                if (tData && tData.questions) {
                    if (tData.questions.easy) allW1 = allW1.concat(tData.questions.easy);
                    if (tData.questions.medium) allW1 = allW1.concat(tData.questions.medium);
                    if (tData.questions.hard) allW1 = allW1.concat(tData.questions.hard);
                }
            });
            const uniqueW1 = Array.from(new Map(allW1.map(q => [q.id, q])).values());
            return shuffleArray(uniqueW1).slice(0, 46);
        }

        // If specific task data doesn't exist, generate a combined mock test
        let taskData = QUIZ_TASKS[taskId];
        if (taskData && taskData.questions && taskData.questions.easy) {
            // Just take the configured questions or combine easy, medium, hard
            let all = [];
            if (taskData.questions.easy) all = all.concat(taskData.questions.easy);
            if (taskData.questions.medium) all = all.concat(taskData.questions.medium);
            if (taskData.questions.hard) all = all.concat(taskData.questions.hard);
            return all;
        }
        // Fallback if not configured: Combine default questions multiple times to simulate a 30-40 question quiz
        const sample = [...DEFAULT_QUESTIONS, ...DEFAULT_HARD_QUESTIONS];
        let extended = [];
        while (extended.length < 30) {
            extended = extended.concat(sample.map((q, i) => ({ ...q, id: q.id + "-" + extended.length + i })));
        }
        return extended.slice(0, 30);
    }, [taskId]);

    const totalQuestions = questions.length;

    const [answers, setAnswers] = useState({});
    const [flags, setFlags] = useState({});
    const isUntimed = taskId === "w1-d7-t2";
    const [timeLeft, setTimeLeft] = useState(isUntimed ? null : 20 * 60); // null or 20 minutes
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (isSubmitted || isUntimed || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    clearInterval(timer);
                    handleSubmit(true);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isSubmitted, isUntimed, timeLeft]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (qId, optionKey) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: optionKey }));
    };

    const toggleFlag = (qId) => {
        setFlags(prev => ({ ...prev, [qId]: !prev[qId] }));
    };

    const scrollToQuestion = (idx) => {
        const el = document.getElementById(`question-${idx}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleSubmit = (autoSubmit = false) => {
        if (isSubmitted) return;

        const answeredCount = Object.keys(answers).length;
        if (!autoSubmit && answeredCount < totalQuestions) {
            Modal.confirm({
                title: "Chưa hoàn thành trọn vẹn",
                content: `Bạn mới trả lời ${answeredCount}/${totalQuestions} câu. Bạn có chắc chắn muốn nộp bài?`,
                okText: "Nộp bài",
                cancelText: "Tiếp tục làm",
                onOk: () => processSubmit()
            });
        } else {
            processSubmit();
        }
    };

    const processSubmit = () => {
        setIsSubmitted(true);
        let correctCount = 0;
        questions.forEach(q => {
            let isCorrect = false;
            if (q.correct_answer) {
                if (answers[q.id] === q.correct_answer) isCorrect = true;
            } else if (q.answer) {
                if (answers[q.id] === q.answer) isCorrect = true;
            }
            if (isCorrect) correctCount++;
        });
        setScore(correctCount);

        addPoints(correctCount * 10);
        incrementTaskProgress(taskId, 100);

        Modal.success({
            title: "Đã nộp bài!",
            content: (
                <div>
                    <Title level={4}>Kết quả: {correctCount} / {totalQuestions}</Title>
                    <Text>Cảm ơn bạn đã nỗ lực làm bài. Điểm số của bạn đã được cập nhật.</Text>
                </div>
            ),
            okText: "Về Dashboard",
            onOk: () => navigate("/Distance")
        });
    };

    const answeredCount = Object.keys(answers).length;

    return (
        <div style={{ maxWidth: 1200, margin: "auto", padding: "20px", background: "#f5f7fa", minHeight: "100vh" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div>
                    <Title level={2} style={{ margin: 0 }}>Mini-test Part 5</Title>
                    <Text type="secondary">Grammar & Vocabulary • {totalQuestions} Questions</Text>
                </div>
                <Space size="large">
                    {!isUntimed && (
                        <div style={{ background: "#f0f5ff", padding: "8px 16px", borderRadius: 8, display: "flex", alignItems: "center", gap: 8, color: "#1890ff", fontWeight: 600, fontSize: 18 }}>
                            <ClockCircleOutlined /> {formatTime(timeLeft)}
                        </div>
                    )}
                    {isUntimed && (
                        <div style={{ background: "#f6ffed", padding: "8px 16px", borderRadius: 8, display: "flex", alignItems: "center", gap: 8, color: "#52c41a", fontWeight: 600, fontSize: 18 }}>
                            <ClockCircleOutlined /> Không bấm giờ
                        </div>
                    )}
                    <Button type="primary" size="large" onClick={() => handleSubmit(false)} disabled={isSubmitted} style={{ borderRadius: 8, padding: "0 24px", fontWeight: 600 }}>
                        Submit Test
                    </Button>
                </Space>
            </div>

            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

                {/* Left Column: Questions List */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, height: "calc(100vh - 140px)", overflowY: "auto", paddingRight: 8 }}>
                    {questions.map((q, idx) => {
                        const isAnswered = !!answers[q.id];
                        const isFlagged = flags[q.id];
                        return (
                            <Card
                                key={q.id}
                                id={`question-${idx}`}
                                bordered={false}
                                style={{ borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.02)", outline: isFlagged ? "2px solid #ffd666" : "none" }}
                                bodyStyle={{ padding: "24px" }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                    <div style={{ display: "flex", gap: 12 }}>
                                        <div style={{ width: 32, height: 32, background: "#1890ff", color: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, flexShrink: 0 }}>
                                            Q{idx + 1}
                                        </div>
                                        <Title level={5} style={{ margin: 0, lineHeight: 1.5 }}>
                                            {q.question_text || q.sentence}
                                        </Title>
                                    </div>
                                    <Button
                                        type="text"
                                        icon={isFlagged ? <FlagFilled style={{ color: "#faad14" }} /> : <FlagOutlined style={{ color: "#bfbfbf" }} />}
                                        onClick={() => toggleFlag(q.id)}
                                    />
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginLeft: 44 }}>
                                    {(q.options || []).map((opt) => {
                                        const isAdvanced = typeof opt === "object";
                                        const optValue = isAdvanced ? opt.key : opt;
                                        const optText = isAdvanced ? `${opt.key}. ${opt.text}` : opt;
                                        const isSelected = answers[q.id] === optValue;

                                        return (
                                            <div
                                                key={optValue}
                                                onClick={() => handleOptionSelect(q.id, optValue)}
                                                style={{
                                                    padding: "12px 16px",
                                                    border: `1px solid ${isSelected ? '#1890ff' : '#f0f0f0'}`,
                                                    borderRadius: 8,
                                                    background: isSelected ? "#e6f4ff" : "#fff",
                                                    cursor: isSubmitted ? "default" : "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    transition: "all 0.2s"
                                                }}
                                            >
                                                <div style={{
                                                    width: 16, height: 16, borderRadius: "50%",
                                                    border: `2px solid ${isSelected ? '#1890ff' : '#d9d9d9'}`,
                                                    display: "flex", alignItems: "center", justifyContent: "center"
                                                }}>
                                                    {isSelected && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1890ff" }} />}
                                                </div>
                                                <Text style={{ color: isSelected ? "#1890ff" : "#262626", fontWeight: isSelected ? 600 : 400 }}>
                                                    {optText}
                                                </Text>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Right Column: Question Palette */}
                <div style={{ width: 340, flexShrink: 0 }}>
                    <Card bordered={false} style={{ borderRadius: 16, position: "sticky", top: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                        <Title level={4} style={{ margin: "0 0 8px 0" }}>Question Palette</Title>
                        <Text type="secondary" style={{ display: "block", marginBottom: 16 }}>Click a number to navigate.</Text>

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                            <Text strong style={{ fontSize: 13 }}>Progress</Text>
                            <Text type="secondary" style={{ fontSize: 13 }}>{answeredCount}/{totalQuestions} Answered</Text>
                        </div>
                        <Progress percent={Math.round((answeredCount / totalQuestions) * 100)} showInfo={false} strokeColor="#1890ff" trailColor="#f0f0f0" style={{ marginBottom: 24 }} />

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, paddingRight: 8, maxHeight: "300px", overflowY: "auto" }}>
                            {questions.map((q, idx) => {
                                const isAnswered = !!answers[q.id];
                                const isFlagged = flags[q.id];

                                let bg = "#fff";
                                let color = "#595959";
                                let border = "1px solid #d9d9d9";

                                if (isAnswered) {
                                    bg = "#1890ff";
                                    color = "#fff";
                                    border = "1px solid #1890ff";
                                }

                                return (
                                    <div key={idx} style={{ position: "relative" }}>
                                        <Button
                                            onClick={() => scrollToQuestion(idx)}
                                            style={{
                                                width: "100%",
                                                height: 40,
                                                padding: 0,
                                                background: bg,
                                                color: color,
                                                border: border,
                                                borderRadius: 6,
                                                fontWeight: 600
                                            }}
                                        >
                                            {idx + 1}
                                        </Button>
                                        {isFlagged && (
                                            <div style={{
                                                position: "absolute", top: -4, right: -4, width: 12, height: 12,
                                                background: "#faad14", borderRadius: "50%", border: "2px solid #fff"
                                            }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, borderTop: "1px solid #f0f0f0", paddingTop: 16 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#595959" }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#1890ff" }} /> Answered
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#595959" }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#faad14" }} /> Flagged
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#595959" }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: "1px solid #d9d9d9" }} /> Unanswered
                            </div>
                        </div>

                    </Card>
                </div>
            </div >
        </div >
    );
};

export default MiniTest;
