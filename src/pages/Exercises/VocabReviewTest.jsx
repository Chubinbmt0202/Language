import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Typography, Card, Button, Space, Progress, Tag, Modal, Radio, Input } from "antd";
import { InfoCircleFilled, FlagFilled, FlagOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { VOCAB_TASKS } from "./VocabTaskData";
import { addPoints } from "@/shared/utils/storage/points";
import { incrementTaskProgress } from "@/shared/utils/storage/taskProgress";

const { Title, Text } = Typography;

const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

// Returns an array of questions based on a word pool
const generateVocabQuestions = (vocabPool, count = 40) => {
    const selectedVocab = shuffleArray(vocabPool).slice(0, count);
    const questions = [];

    selectedVocab.forEach((wordObj, i) => {
        const typeRand = Math.random();

        // Ensure matching question gets groups of 3 meaning pairs
        // For simplicity to fit one word per question slot, we group 3 words together for a "Matching block" 
        // But the question mapping mechanism expects 1 question object per Question Number.
        // We'll treat a "Matching" type as 1 Question Number that tests 3 words.
        // We need to manage how many "slots" this takes or just let 1 question = 1 group of 3.

        if (typeRand < 0.33) {
            // Type 1: Multiple Choice (Chọn từ đồng nghĩa thích hợp nhất / Chọn nghĩa)
            const otherOptions = shuffleArray(vocabPool)
                .filter(w => w.word !== wordObj.word)
                .slice(0, 3)
                .map(w => w.meaning);

            const options = shuffleArray([wordObj.meaning, ...otherOptions]);
            questions.push({
                id: `q_mc_${i}`,
                type: "mcq",
                word: wordObj.word,
                instruction: "Chọn nghĩa Tiếng Việt thích hợp nhất",
                example: wordObj.example,
                options: options.map((opt, idx) => ({ key: String.fromCharCode(65 + idx), text: opt })),
                correctAnswer: String.fromCharCode(65 + options.indexOf(wordObj.meaning))
            });
        } else if (typeRand < 0.66) {
            // Type 2: Word Form (Điền từ)
            questions.push({
                id: `q_fill_${i}`,
                type: "fill",
                word: wordObj.word,
                instruction: "Điền từ thích hợp vào chỗ trống (Word Form)",
                hint: `${wordObj.word.substring(0, 2)}... (${wordObj.type})`,
                example: wordObj.example ? wordObj.example.replace(new RegExp(wordObj.word, "ig"), "__________") : "__________",
                correctAnswer: wordObj.word
            });
        } else {
            // Type 3: Matching
            // To make a matching question, we need 2 more words.
            const extraWords = shuffleArray(vocabPool)
                .filter(w => w.word !== wordObj.word)
                .slice(0, 2);
            const matchGroup = [wordObj, ...extraWords];
            const leftTokens = shuffleArray([...matchGroup]).map(w => w.word);
            const rightTokens = shuffleArray([...matchGroup]).map(w => w.meaning);

            // Map correct links: leftIndex -> rightIndex
            const correctLinks = {};
            leftTokens.forEach((lw, lIdx) => {
                const targetMeaning = matchGroup.find(w => w.word === lw).meaning;
                const rIdx = rightTokens.indexOf(targetMeaning);
                correctLinks[lIdx] = rIdx;
            });

            questions.push({
                id: `q_match_${i}`,
                type: "match",
                instruction: "Nối từ vựng tiếng Anh với nghĩa tiếng Việt tương ứng",
                leftTokens,
                rightTokens,
                correctLinks,
                // Total pairs to match
                pairCount: 3
            });
        }
    });

    return questions;
};

// MatchQuestion Component handles the SVG drawing
const MatchQuestion = ({ question, answeredLinks, onLinkChange }) => {
    const containerRef = useRef(null);
    const leftRefs = useRef([]);
    const rightRefs = useRef([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [lines, setLines] = useState([]);

    const computeLines = useCallback(() => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newLines = [];

        Object.entries(answeredLinks || {}).forEach(([lIdx, rIdx]) => {
            const lEl = leftRefs.current[lIdx];
            const rEl = rightRefs.current[rIdx];
            if (lEl && rEl) {
                const lRect = lEl.getBoundingClientRect();
                const rRect = rEl.getBoundingClientRect();

                const startX = lRect.right - containerRect.left;
                const startY = lRect.top + lRect.height / 2 - containerRect.top;
                const endX = rRect.left - containerRect.left;
                const endY = rRect.top + rRect.height / 2 - containerRect.top;
                newLines.push({ startX, startY, endX, endY });
            }
        });
        setLines(newLines);
    }, [answeredLinks]);

    useEffect(() => {
        computeLines();
        window.addEventListener('resize', computeLines);
        return () => window.removeEventListener('resize', computeLines);
    }, [computeLines]);

    const handleLeftClick = (idx) => {
        setSelectedLeft(idx);
    };

    const handleRightClick = (idx) => {
        if (selectedLeft !== null) {
            const newLinks = { ...answeredLinks, [selectedLeft]: idx };

            // Cleanup: if another left was pointing to this right, remove it
            Object.keys(newLinks).forEach(key => {
                if (key !== String(selectedLeft) && newLinks[key] === idx) {
                    delete newLinks[key];
                }
            });

            onLinkChange(question.id, newLinks);
            setSelectedLeft(null);
        }
    };

    return (
        <div ref={containerRef} style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 24, marginTop: 16 }}>
            {/* SVG Overlay */}
            <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
                {lines.map((l, i) => (
                    <path
                        key={i}
                        d={`M ${l.startX} ${l.startY} C ${l.startX + 50} ${l.startY}, ${l.endX - 50} ${l.endY}, ${l.endX} ${l.endY}`}
                        stroke="#1890ff"
                        strokeWidth="2"
                        fill="transparent"
                    />
                ))}
            </svg>

            {/* Left Column */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {question.leftTokens.map((token, idx) => {
                    const isMatched = (answeredLinks || {})[idx] !== undefined;
                    const isSelected = selectedLeft === idx;
                    return (
                        <div
                            key={`L-${idx}`}
                            onClick={() => handleLeftClick(idx)}
                            style={{
                                padding: "12px 16px",
                                background: isSelected ? "#e6f4ff" : "#f5f7fa",
                                border: `1px solid ${isSelected ? '#1890ff' : '#f0f0f0'}`,
                                borderRadius: 8,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                                userSelect: "none"
                            }}
                        >
                            <Text strong>{idx + 1}. {token}</Text>
                            <div
                                ref={el => leftRefs.current[idx] = el}
                                style={{
                                    width: 12, height: 12, borderRadius: "50%",
                                    background: isSelected || isMatched ? "#1890ff" : "#d9d9d9"
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Right Column */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {question.rightTokens.map((token, idx) => {
                    const isMatchedRight = Object.values(answeredLinks || {}).includes(idx);
                    return (
                        <div
                            key={`R-${idx}`}
                            onClick={() => handleRightClick(idx)}
                            style={{
                                padding: "12px 16px",
                                background: isMatchedRight ? "#f6ffed" : "#f5f7fa",
                                border: `1px solid ${isMatchedRight ? '#b7eb8f' : '#f0f0f0'}`,
                                borderRadius: 8,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: selectedLeft !== null ? "pointer" : "default",
                                userSelect: "none"
                            }}
                        >
                            <div
                                ref={el => rightRefs.current[idx] = el}
                                style={{
                                    width: 12, height: 12, borderRadius: "50%",
                                    background: isMatchedRight ? "#52c41a" : "#d9d9d9"
                                }}
                            />
                            <Text strong>{String.fromCharCode(65 + idx)}. {token}</Text>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const VocabReviewTest = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();

    // 1. Gather all tasks for week 1 vocab (t1) except specific review tasks if you want to avoid recursion.
    // For w1 review, pool is from all w1-d[1-6]-t1
    const vocabPool = useMemo(() => {
        let pool = [];
        Object.keys(VOCAB_TASKS).forEach(key => {
            if (key.startsWith("w1-") && key.endsWith("-t1") && key !== "w1-d7-t1") {
                pool = pool.concat(VOCAB_TASKS[key]);
            }
        });

        // Remove duplicates
        const unique = [];
        const seen = new Set();
        pool.forEach(w => {
            if (!seen.has(w.word)) {
                seen.add(w.word);
                unique.push(w);
            }
        });
        return unique.length > 0 ? unique : VOCAB_TASKS["w1-d1-t1"]; // fallback
    }, []);

    // 2. Generate exactly 40 mixed questions
    const questions = useMemo(() => {
        return generateVocabQuestions(vocabPool, 40);
    }, [vocabPool]);

    const totalQuestions = questions.length;

    // State
    const [answers, setAnswers] = useState({});
    const [flags, setFlags] = useState({});
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes = 900 seconds
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (isSubmitted || timeLeft <= 0) return;
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
    }, [isSubmitted, timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return {
            h: h.toString().padStart(2, '0'),
            m: m.toString().padStart(2, '0'),
            s: s.toString().padStart(2, '0')
        };
    };

    const handleOptionSelect = (qId, optionKey) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: optionKey }));
    };

    const handleTextInput = (qId, val) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: val }));
    }

    const handleMatchLinks = (qId, links) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: links }));
    }

    const toggleFlag = (qId) => {
        setFlags(prev => ({ ...prev, [qId]: !prev[qId] }));
    };

    const scrollToQuestion = (idx) => {
        const el = document.getElementById(`question-${idx}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // Calculate how many questions are "answered"
    // For Match type, it's considered answered if all pairs are linked.
    let answeredCount = 0;
    questions.forEach(q => {
        const ans = answers[q.id];
        if (q.type === "match") {
            if (ans && Object.keys(ans).length === q.pairCount) {
                answeredCount++;
            }
        } else if (q.type === "fill") {
            if (ans && String(ans).trim() !== "") {
                answeredCount++;
            }
        } else if (q.type === "mcq") {
            if (ans) answeredCount++;
        }
    });

    const handleSubmit = (autoSubmit = false) => {
        if (isSubmitted) return;

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
            const ans = answers[q.id];
            if (!ans) return;

            if (q.type === "mcq") {
                if (ans === q.correctAnswer) correctCount++;
            } else if (q.type === "fill") {
                if (String(ans).trim().toLowerCase() === String(q.correctAnswer).toLowerCase()) correctCount++;
            } else if (q.type === "match") {
                let allCorrect = true;
                if (Object.keys(ans).length < q.pairCount) allCorrect = false;
                else {
                    Object.keys(ans).forEach(lIdx => {
                        if (ans[lIdx] !== q.correctLinks[lIdx]) allCorrect = false;
                    });
                }
                if (allCorrect) correctCount++;
            }
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

    const timeObj = formatTime(timeLeft);

    return (
        <div style={{ maxWidth: 1200, margin: "auto", padding: "20px", background: "#f5f7fa", minHeight: "100vh" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", flexWrap: "wrap", gap: 16 }}>
                <div>
                    <Title level={2} style={{ margin: 0, color: "#001529" }}>Kiểm tra từ vựng: Tuần 1 - Chủ đề Hàng hóa</Title>
                    <Text type="secondary" style={{ fontSize: 14 }}>Phần thi tổng hợp: Đồng nghĩa, Nối từ, Điền từ, Nghe hiểu</Text>
                </div>

                {/* Timer Box */}
                <div style={{ background: "#f0f5ff", padding: "8px 24px", borderRadius: 8, display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#1890ff", lineHeight: 1 }}>{timeObj.h}</div>
                        <div style={{ fontSize: 10, color: "#8c8c8c", textTransform: "uppercase", marginTop: 4 }}>Giờ</div>
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#1890ff", paddingBottom: 16 }}>:</div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#1890ff", lineHeight: 1 }}>{timeObj.m}</div>
                        <div style={{ fontSize: 10, color: "#8c8c8c", textTransform: "uppercase", marginTop: 4 }}>Phút</div>
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#1890ff", paddingBottom: 16 }}>:</div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#1890ff", lineHeight: 1 }}>{timeObj.s}</div>
                        <div style={{ fontSize: 10, color: "#8c8c8c", textTransform: "uppercase", marginTop: 4 }}>Giây</div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                {/* Main Content Area (Scrollable Questions) */}
                <div style={{ flex: "1 1 700px", display: "flex", flexDirection: "column", gap: 16 }}>
                    {questions.map((q, idx) => {
                        const isFlagged = flags[q.id];
                        return (
                            <Card
                                key={q.id}
                                id={`question-${idx}`}
                                bordered={false}
                                style={{
                                    borderRadius: 12,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                                    border: isFlagged ? "1px solid #faad14" : "1px solid transparent"
                                }}
                                bodyStyle={{ padding: "24px" }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                                    <Tag color="blue" style={{ borderRadius: 12, padding: "4px 12px", fontSize: 13, border: "none", background: "#e6f4ff", color: "#1890ff", fontWeight: 600 }}>Câu {idx + 1}</Tag>
                                    <Button
                                        type="text"
                                        icon={isFlagged ? <FlagFilled style={{ color: "#faad14", fontSize: 18 }} /> : <FlagOutlined style={{ color: "#bfbfbf", fontSize: 18 }} />}
                                        onClick={() => toggleFlag(q.id)}
                                    />
                                </div>

                                <Title level={5} style={{ marginTop: 0, marginBottom: 16 }}>
                                    {q.instruction}
                                </Title>

                                {q.type === "mcq" && (
                                    <>
                                        {q.example && (
                                            <div style={{ marginBottom: 16, fontSize: 16 }}>
                                                {q.example.split(new RegExp(`(${q.word})`, 'i')).map((part, i) =>
                                                    part.toLowerCase() === q.word.toLowerCase()
                                                        ? <span key={i} style={{ color: "#1890ff", fontWeight: "bold", textDecoration: "underline" }}>{part}</span>
                                                        : part
                                                )}
                                            </div>
                                        )}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                            {q.options.map(opt => {
                                                const isSelected = answers[q.id] === opt.key;
                                                return (
                                                    <div
                                                        key={opt.key}
                                                        onClick={() => handleOptionSelect(q.id, opt.key)}
                                                        style={{
                                                            padding: "12px 16px",
                                                            border: `1px solid ${isSelected ? '#1890ff' : '#d9d9d9'}`,
                                                            borderRadius: 8,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 12,
                                                            cursor: isSubmitted ? "default" : "pointer",
                                                            background: isSelected ? "#e6f4ff" : "#fff",
                                                            transition: "all 0.2s"
                                                        }}
                                                    >
                                                        <Radio checked={isSelected} disabled={isSubmitted} style={{ margin: 0 }} />
                                                        <Text style={{ fontWeight: isSelected ? 600 : 400, color: isSelected ? "#1890ff" : "inherit" }}>
                                                            ({opt.key}) {opt.text}
                                                        </Text>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                )}

                                {q.type === "fill" && (
                                    <>
                                        <div style={{ marginBottom: 16, fontStyle: "italic", color: "#8c8c8c" }}>
                                            Gợi ý: {q.hint}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16 }}>
                                            {q.example.split("__________").map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    <span>{part}</span>
                                                    {i < arr.length - 1 && (
                                                        <Input
                                                            placeholder="Type here..."
                                                            value={answers[q.id] || ""}
                                                            onChange={e => handleTextInput(q.id, e.target.value)}
                                                            disabled={isSubmitted}
                                                            style={{
                                                                width: 150,
                                                                textAlign: "center",
                                                                borderTop: "none",
                                                                borderLeft: "none",
                                                                borderRight: "none",
                                                                borderRadius: 0,
                                                                boxShadow: "none",
                                                                fontWeight: 600,
                                                                color: "#1890ff",
                                                                padding: "0 8px"
                                                            }}
                                                        />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {q.type === "match" && (
                                    <MatchQuestion
                                        question={q}
                                        answeredLinks={answers[q.id]}
                                        onLinkChange={handleMatchLinks}
                                    />
                                )}

                            </Card>
                        )
                    })}
                </div>

                {/* Right Sidebar */}
                <div style={{ flex: "1 1 300px", maxWidth: 350 }}>
                    <Card bordered={false} style={{ borderRadius: 16, position: "sticky", top: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                            <Title level={5} style={{ margin: 0 }}>Bản đồ câu hỏi</Title>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                            <Text type="secondary">{totalQuestions} câu hỏi</Text>
                            <Tag color="cyan" style={{ border: "none", background: "#e6f7ff", color: "#1890ff", fontWeight: 600 }}>{Math.round((answeredCount / totalQuestions) * 100)}% Hoàn thành</Tag>
                        </div>

                        <Progress percent={Math.round((answeredCount / totalQuestions) * 100)} showInfo={false} strokeColor="#1890ff" trailColor="#f0f0f0" style={{ marginBottom: 24 }} />

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, maxHeight: "300px", overflowY: "auto", paddingRight: 4, paddingBottom: 16 }}>
                            {questions.map((q, idx) => {
                                const ans = answers[q.id];
                                let isAnswered = false;
                                let isPartial = false; // For match questions not fully answered

                                if (q.type === "match") {
                                    if (ans) {
                                        const keysLen = Object.keys(ans).length;
                                        if (keysLen === q.pairCount) isAnswered = true;
                                        else if (keysLen > 0) isPartial = true;
                                    }
                                } else if (q.type === "fill") {
                                    if (ans && String(ans).trim() !== "") isAnswered = true;
                                    else if (ans) isPartial = true;
                                } else if (q.type === "mcq") {
                                    if (ans) isAnswered = true;
                                }

                                const isFlagged = flags[q.id];

                                let bg = "#fff";
                                let color = "#595959";
                                let border = "1px solid #d9d9d9";

                                if (isAnswered) {
                                    bg = "#e6ffec"; // Light green background
                                    color = "#52c41a";
                                    border = "1px solid #b7eb8f";
                                } else if (isPartial) {
                                    bg = "#fff7e6";
                                    color = "#fa8c16";
                                    border = "1px solid #ffd591";
                                }

                                if (isFlagged) {
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
                                        {!isFlagged && isPartial && (
                                            <div style={{
                                                position: "absolute", top: -4, right: -4, width: 8, height: 8,
                                                background: "#fa8c16", borderRadius: "50%"
                                            }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: 24, padding: "16px 0", borderTop: "1px solid #f0f0f0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#595959" }}>
                                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#e6ffec", border: "1px solid #b7eb8f" }} /> Đã trả lời
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#595959" }}>
                                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#fff7e6", border: "1px solid #ffd591", position: "relative" }}>
                                    <div style={{ position: "absolute", top: -2, right: -2, width: 4, height: 4, background: "#fa8c16", borderRadius: "50%" }} />
                                </div> Đang làm
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#595959" }}>
                                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#1890ff", border: "1px solid #1890ff" }} /> Xem lại
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#595959" }}>
                                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#fff", border: "1px solid #d9d9d9" }} /> Chưa trả lời
                            </div>
                        </div>

                        <Button
                            type="primary"
                            size="large"
                            block
                            onClick={() => handleSubmit(false)}
                            disabled={isSubmitted}
                            style={{ height: 48, borderRadius: 8, fontWeight: 600, fontSize: 16, marginTop: 16 }}
                        >
                            Nộp bài
                        </Button>

                        <div style={{ marginTop: 24, padding: 16, background: "#f0f5ff", borderRadius: 12, border: "1px solid #adc6ff" }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                <InfoCircleFilled style={{ color: "#1890ff", marginTop: 4 }} />
                                <div>
                                    <Text strong style={{ color: "#001529", display: "block", marginBottom: 4 }}>Lưu ý</Text>
                                    <Text style={{ color: "#595959", fontSize: 13 }}>Bài kiểm tra sẽ tự động nộp khi hết giờ. Hãy đảm bảo bạn đã xem lại các câu hỏi được đánh dấu.</Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default VocabReviewTest;
