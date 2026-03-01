import React, { useState, useEffect, useMemo } from "react";
import { Typography, Card, Button, Space, message, Modal } from "antd";
import { ReloadOutlined, BookOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { VOCAB_TASKS } from "./VocabTaskData";
import { addPoints } from "@/shared/utils/storage/points";
import { incrementTaskProgress } from "@/shared/utils/storage/taskProgress";

const { Title, Text } = Typography;

// Shuffle function
const shuffle = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const BATCH_SIZE = 4;
const COLORS = ["#52c41a", "#722ed1", "#1890ff", "#fa8c16"];

const VocabularyMatch = () => {
    const navigate = useNavigate();
    const { taskId } = useParams();

    // Load words: For w1-d7-t1 (review week 1), we should combine d1 to d6.
    // If we can't find specific ones, combine all we have.
    const allVocab = useMemo(() => {
        let combined = [];
        if (taskId?.includes("-d7-t1")) {
            // It's a review task, gather all vocab from previous days
            Object.keys(VOCAB_TASKS).forEach(key => {
                if (key.includes("t1") && !key.includes("-d7-")) {
                    combined = combined.concat(VOCAB_TASKS[key]);
                }
            });
            // Remove duplicates
            const unique = [];
            const seen = new Set();
            combined.forEach(w => {
                if (!seen.has(w.word)) {
                    seen.add(w.word);
                    unique.push(w);
                }
            });
            return unique;
        }
        return VOCAB_TASKS[taskId] || Object.values(VOCAB_TASKS)[0] || [];
    }, [taskId]);

    const [pool, setPool] = useState([]);
    const [currentBatch, setCurrentBatch] = useState(0);

    const [words, setWords] = useState([]);
    const [meanings, setMeanings] = useState([]);
    const [matched, setMatched] = useState([]); // array of matched word strings

    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [draggedWord, setDraggedWord] = useState(null);

    useEffect(() => {
        if (allVocab.length > 0) {
            setPool(shuffle([...allVocab]));
            setCurrentBatch(0);
        }
    }, [allVocab]);

    useEffect(() => {
        loadBatch(currentBatch);
    }, [currentBatch, pool]);

    const loadBatch = (batchIndex) => {
        const start = batchIndex * BATCH_SIZE;
        if (start >= pool.length && pool.length > 0) {
            handleFinish();
            return;
        }
        const nextWords = pool.slice(start, start + BATCH_SIZE);
        setWords(shuffle([...nextWords]));
        setMeanings(shuffle([...nextWords]));
        setMatched([]);
    };

    const handleFinish = () => {
        addPoints(score);
        incrementTaskProgress(taskId, 10);
        Modal.success({
            title: "Chúc mừng!",
            content: `Thử thách ghép từ hoàn thành! Điểm của bạn: ${score}`,
            okText: "Về Dashboard",
            onOk: () => navigate("/Distance")
        });
    };

    const handleDragStart = (e, wordObj) => {
        setDraggedWord(wordObj);
        // Optional: set drag image or effect
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e, meaningObj) => {
        e.preventDefault();
        if (!draggedWord) return;

        if (draggedWord.word === meaningObj.word) {
            // Correct match
            const newMatched = [...matched, draggedWord.word];
            setMatched(newMatched);

            const newCombo = combo + 1;
            setCombo(newCombo);
            setScore(s => s + 100 * newCombo);
            message.success("Chính xác!");

            if (newMatched.length === words.length) {
                setTimeout(() => {
                    setCurrentBatch(b => b + 1);
                }, 800);
            }
        } else {
            // Wrong match
            setCombo(0);
            message.error("Sai rồi!");
        }
        setDraggedWord(null);
    };

    const handleResetBoard = () => {
        loadBatch(currentBatch);
        setCombo(0);
    };

    return (
        <div style={{ maxWidth: 900, margin: "auto", padding: "20px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 30 }}>
                <div>
                    <Title level={1} style={{ margin: 0, fontSize: "3rem", fontWeight: 800 }}>Vocabulary Match</Title>
                    <Text type="secondary" style={{ fontSize: "1.1rem" }}>Drag the word to its correct meaning to score points!</Text>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                    <Card bordered size="small" style={{ borderRadius: 16, textAlign: "center", minWidth: 120, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                        <Text type="secondary" style={{ fontSize: 12, fontWeight: 600 }}><span style={{ marginRight: 4 }}>📈</span>LIVE SCORE</Text>
                        <Title level={3} style={{ margin: 0 }}>{score.toLocaleString()}</Title>
                    </Card>
                    <Card bordered size="small" style={{ borderRadius: 16, textAlign: "center", minWidth: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                        <Text type="secondary" style={{ fontSize: 12, fontWeight: 600, color: "#fa541c" }}><span style={{ marginRight: 4 }}>🔥</span>COMBO</Text>
                        <Title level={3} style={{ margin: 0, color: "#fa541c" }}>{combo}×</Title>
                    </Card>
                </div>
            </div>

            {/* Main Board */}
            <Card style={{ borderRadius: 24, background: "#fcfdfe", borderColor: "#f0f0f0", boxShadow: "0 8px 24px rgba(0,0,0,0.02)" }} bodyStyle={{ padding: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, padding: "0 20px" }}>
                    <Text type="secondary" strong style={{ letterSpacing: 1 }}>WORDS</Text>
                    <Text type="secondary" strong style={{ letterSpacing: 1 }}>MEANINGS</Text>
                </div>

                <div style={{ display: "flex", gap: 60 }}>
                    {/* Left Column: Words */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                        {words.map((item, idx) => {
                            const isMatched = matched.includes(item.word);
                            const color = COLORS[idx % COLORS.length];

                            return (
                                <div
                                    key={"word-" + item.word}
                                    draggable={!isMatched}
                                    onDragStart={(e) => handleDragStart(e, item)}
                                    style={{
                                        padding: "16px 24px",
                                        background: "#fff",
                                        border: `1px solid ${isMatched ? '#e6f7ff' : '#f0f0f0'}`,
                                        borderLeft: `5px solid ${isMatched ? '#d9d9d9' : color}`,
                                        borderRadius: 100, // pill shape
                                        fontSize: "1.2rem",
                                        fontWeight: 600,
                                        color: isMatched ? "#bfbfbf" : "#262626",
                                        cursor: isMatched ? "default" : "grab",
                                        boxShadow: isMatched ? "none" : "0 4px 12px rgba(0,0,0,0.04)",
                                        opacity: isMatched ? 0.3 : 1,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        transform: isMatched ? "scale(0.98)" : "scale(1)",
                                        transition: "all 0.2s ease"
                                    }}
                                >
                                    {item.word}
                                    {!isMatched && (
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, opacity: 0.3 }}>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                            <div style={{ width: 4, height: 4, background: "#000", borderRadius: "50%" }}></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Meanings */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                        {meanings.map((item) => {
                            const isMatched = matched.includes(item.word);

                            return (
                                <div
                                    key={"meaning-" + item.word}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, item)}
                                    style={{
                                        padding: "16px 24px",
                                        background: isMatched ? "#e6f4ff" : "transparent",
                                        border: `2px dashed ${isMatched ? '#91caff' : '#d9d9d9'}`,
                                        borderRadius: 100, // pill shape
                                        fontSize: "1.1rem",
                                        color: isMatched ? "#0958d9" : "#595959",
                                        textAlign: "center",
                                        minHeight: 62,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.3s ease",
                                        opacity: isMatched ? 0.8 : 1
                                    }}
                                >
                                    {isMatched ? <><CheckCircleOutlined style={{ marginRight: 8 }} /> {item.meaning}</> : item.meaning}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Card>

            {/* Footer Controls */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, padding: "0 10px" }}>
                <Button
                    type="text"
                    icon={<ReloadOutlined />}
                    onClick={handleResetBoard}
                    style={{ color: "#8c8c8c", fontSize: 16, height: 40 }}
                >
                    Reset Board
                </Button>
                <Button
                    type="primary"
                    icon={<BookOutlined />}
                    size="large"
                    shape="round"
                    onClick={() => navigate("/vocabulary")}
                    style={{ background: "#001529", height: 48, padding: "0 30px", fontSize: 16, fontWeight: 600 }}
                >
                    Vocabulary Bank
                </Button>
            </div>
        </div>
    );
};

export default VocabularyMatch;
