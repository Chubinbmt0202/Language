/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Typography, Space, Progress, Tag, Input, Alert, Modal, Tooltip } from "antd";
import { ArrowLeftOutlined, CheckCircleOutlined, ReloadOutlined, FireOutlined, RocketOutlined, SoundOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { detailedRoadmap } from "./Dashboard/RoadmapData";
import { VOCAB_TASKS } from "./VocabTaskData";
import { addWordsToGlobalVocab } from "../util/globalVocabStore";
import { getTaskState, incrementTaskProgress } from "../util/taskProgress";

const { Title, Text, Paragraph } = Typography;

const WORDS_PER_LEVEL = 5;
const MAX_LEVEL = 5;

const findTaskById = (taskId) => {
  for (const week of detailedRoadmap) {
    for (const day of week.days) {
      const task = day.tasks.find((item) => item.id === taskId);
      if (task) return { task, day, week };
    }
  }
  return null;
};

const normalize = (value) =>
  String(value || "").toLowerCase().replace(/\s+/g, " ").trim();

const VocabTaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const taskInfo = useMemo(() => findTaskById(taskId), [taskId]);
  const vocabWords = VOCAB_TASKS[taskId] || [];

  const [stateKey, setStateKey] = useState(0);
  const taskState = useMemo(() => getTaskState(taskId), [taskId, stateKey]);
  const currentLevel = Math.min(taskState.progress + 1, MAX_LEVEL);

  const [stage, setStage] = useState("learn");
  const [learnIndex, setLearnIndex] = useState(0);
  const [wordStatus, setWordStatus] = useState({});
  const [testIndex, setTestIndex] = useState(0);
  const [testInput, setTestInput] = useState("");
  const [testWrong, setTestWrong] = useState(new Set());
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewInput, setReviewInput] = useState("");
  const [reviewCorrect, setReviewCorrect] = useState(0);

  const levelStart = (currentLevel - 1) * WORDS_PER_LEVEL;
  const levelWords = vocabWords.slice(levelStart, levelStart + WORDS_PER_LEVEL);
  const prevLevelWords = vocabWords.slice(levelStart - WORDS_PER_LEVEL, levelStart);

  useEffect(() => {
    setStage(taskState.progress > 0 ? "review" : "learn");
    setLearnIndex(0);
    setTestIndex(0);
    setReviewIndex(0);
  }, [taskId, taskState.progress]);

  if (!taskInfo) return <div style={{ textAlign: 'center', marginTop: 50 }}><Text>Không tìm thấy bài học.</Text></div>;

  const { task, week } = taskInfo;
  const progressPercent = Math.round((taskState.progress / MAX_LEVEL) * 100);

  const speakWord = (text) => {
    if (!text || typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const FadeWrapper = ({ children, keyStr }) => (
    <motion.div
      key={keyStr}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  const handleLearnAnswer = (known) => {
    const word = levelWords[learnIndex];
    const nextStatus = { ...wordStatus, [word.word]: known };
    setWordStatus(nextStatus);
    
    if (learnIndex + 1 < levelWords.length) {
      setLearnIndex(learnIndex + 1);
    } else {
      const allKnown = levelWords.every((w) => nextStatus[w.word]);
      if (allKnown) setStage("test");
      else setLearnIndex(levelWords.findIndex((w) => !nextStatus[w.word]));
    }
  };

  // --- PHẦN ĐÃ ĐIỀU CHỈNH ---
  const handleTestSubmit = () => {
    const word = levelWords[testIndex];
    const isCorrect = normalize(testInput) === normalize(word.meaning);
    
    const nextWrong = new Set(testWrong);
    if (!isCorrect) {
      nextWrong.add(word.word);
      setTestWrong(nextWrong);
      setWordStatus((prev) => ({ ...prev, [word.word]: false }));
    }

    const nextIndex = testIndex + 1;
    if (nextIndex < levelWords.length) {
      setTestIndex(nextIndex);
      setTestInput("");
      return;
    }

    // Nếu có câu sai
    if (nextWrong.size > 0 || !isCorrect) {
       Modal.error({
        title: "Chưa hoàn hảo!",
        content: "Bạn cần đúng tuyệt đối 5 từ. Hãy thử lại nhé!",
        okText: "Làm lại ngay",
        onOk: () => {
            setTestIndex(0);
            setTestInput("");
            setTestWrong(new Set());
        }
      });
      return;
    }

    // --- THÀNH CÔNG: LƯU VÀ CHUYỂN HƯỚNG VỀ DASHBOARD ---
    addWordsToGlobalVocab(levelWords, "en");
    incrementTaskProgress(taskId, MAX_LEVEL);
    
    Modal.success({
      title: "Xuất sắc!",
      content: "Bạn đã hoàn thành bài học này. Đang quay về Dashboard...",
      icon: <RocketOutlined style={{ color: '#52c41a' }} />,
      okText: "Hoàn thành",
      onOk: () => {
        navigate("/dashboard"); // <--- Điều hướng về Dashboard tại đây
      }
    });
  };

  const handleReviewSubmit = () => {
    const word = prevLevelWords[reviewIndex];
    const isCorrect = normalize(reviewInput) === normalize(word.meaning);
    const nextCorrect = reviewCorrect + (isCorrect ? 1 : 0);

    const nextIndex = reviewIndex + 1;
    if (nextIndex < prevLevelWords.length) {
      setReviewIndex(nextIndex);
      setReviewInput("");
      setReviewCorrect(nextCorrect);
      return;
    }

    if (nextCorrect >= 4) {
      setStage("learn");
      setReviewIndex(0);
      setReviewInput("");
      setReviewCorrect(0);
    } else {
        Modal.error({
            title: "Cần ôn lại!",
            content: `Bạn chỉ đúng ${nextCorrect}/${prevLevelWords.length}. Cần đúng ít nhất 4 câu.`,
            okText: "Ôn lại ngay",
            onOk: () => {
              setReviewIndex(0);
              setReviewInput("");
              setReviewCorrect(0);
            },
        });
    }
  };

  const renderLearn = () => {
    const word = levelWords[learnIndex];
    return (
      <FadeWrapper keyStr={`learn-${learnIndex}-${word.word}`}>
        <Card 
          className="vocab-card"
          bordered={false} 
          style={{ borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #36CFC9 0%, #1890ff 100%)', padding: '30px 20px', margin: '-24px -24px 24px -24px', textAlign: 'center' }}>
             <Tag color="rgba(0,0,0,0.2)" style={{ border: 'none', color: '#fff', marginBottom: 10, background: "transparent" }}>
                Level {currentLevel} • Từ {learnIndex + 1}/{WORDS_PER_LEVEL}
             </Tag>
             <div style={{ display: 'inline-flex',  alignItems: 'center', gap: 10 }}>
                <Title level={1} style={{ color: '#fff', margin: '0', fontSize: '3rem', fontWeight: 800 }}>
                  {word.word}
                </Title>
                <Text style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '1.2rem' }}>
                [{word.type}]
             </Text>
                <Tooltip title="Nghe phát âm">
                  <Button
                    size="small"
                    shape="circle"
                    icon={<SoundOutlined />}
                    onClick={() => speakWord(word.word)}
                    style={{ border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                  />
                </Tooltip>
             </div>
             
          </div>

          <Space direction="vertical" size={20} style={{ width: "100%" }}>
            <div style={{ background: '#f7f9fc', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <Text strong style={{ color: '#8c8c8c', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Nghĩa tiếng việt</Text>
              <div style={{ fontSize: '24px', color: '#262626', marginTop: 8, fontWeight: 500 }}>
                {word.meaning}
              </div>
            </div>

            <div style={{ padding: '0 10px', textAlign: 'center' }}>
              <Text strong style={{ color: '#8c8c8c', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Ví dụ</Text>
               <Paragraph italic style={{ fontSize: '18px', color: '#595959', marginTop: 8 }}>
                "{word.example}"
               </Paragraph>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: 10 }}>
              <Button 
                block 
                size="large" 
                shape="round"
                onClick={() => handleLearnAnswer(false)}
                style={{ height: 55, fontSize: 16 }}
              >
                Chưa thuộc
              </Button>
              <Button 
                block 
                type="primary" 
                size="large" 
                shape="round"
                icon={<CheckCircleOutlined />}
                onClick={() => handleLearnAnswer(true)}
                style={{ height: 55, fontSize: 16, boxShadow: '0 4px 14px rgba(24,144,255,0.4)' }}
              >
                Đã thuộc
              </Button>
            </div>
          </Space>
        </Card>
      </FadeWrapper>
    );
  };

  const renderTest = () => {
    const word = levelWords[testIndex];
    return (
      <FadeWrapper keyStr={`test-${testIndex}`}>
        <Card bordered={false} style={{ borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <Space direction="vertical" size={24} style={{ width: "100%", textAlign: 'center' }}>
            <Tag color="gold" icon={<FireOutlined />} style={{ padding: '4px 10px', fontSize: '14px' }}>
                THỬ THÁCH TRÍ NHỚ
            </Tag>
            
            <div style={{ margin: '20px 0' }}>
                <Space align="center" size={10} style={{ justifyContent: 'center' }}>
                  <Title level={2} style={{ fontSize: '2.5rem', margin: 0 }}>{word.word}</Title>
                  <Tooltip title="Nghe phat am">
                    <Button
                      size="small"
                      shape="circle"
                      icon={<SoundOutlined />}
                      onClick={() => speakWord(word.word)}
                    />
                  </Tooltip>
                </Space>
                <Text type="secondary">Nhập nghĩa tiếng Việt của từ trên</Text>
            </div>

            <Input
              size="large"
              placeholder="Ví dụ: xin chào..."
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              onPressEnter={handleTestSubmit}
              style={{ 
                  borderRadius: '12px', 
                  height: 60, 
                  textAlign: 'center', 
                  fontSize: '20px', 
                  border: '2px solid #e6f7ff',
                  background: '#f0f5ff'
              }}
              autoFocus
            />
            
            <Button 
              type="primary" 
              size="large" 
              shape="round" 
              block 
              onClick={handleTestSubmit}
              disabled={!testInput}
              style={{ height: 55, fontSize: 18, marginTop: 10 }}
            >
              Xác nhận
            </Button>
            
            <Progress 
                percent={Math.round(((testIndex) / WORDS_PER_LEVEL) * 100)} 
                steps={5} 
                strokeColor="#fadb14" 
                trailColor="#f0f0f0"
                showInfo={false} 
                style={{ marginTop: 10 }}
            />
          </Space>
        </Card>
      </FadeWrapper>
    );
  };

  const renderReview = () => {
    const word = prevLevelWords[reviewIndex];
    return (
      <FadeWrapper keyStr={`review-${reviewIndex}`}>
         <Card bordered={false} style={{ borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderTop: '4px solid #ff4d4f' }}>
            <Space direction="vertical" size={24} style={{ width: "100%", textAlign: 'center' }}>
                <Tag color="volcano" style={{ padding: '4px 10px' }}>ÔN TẬP LEVEL {currentLevel - 1}</Tag>
                <Space align="center" size={10} style={{ justifyContent: 'center' }}>
                  <Title level={3} style={{ margin: 0 }}>"{word.word}" nghia la gi?</Title>
                  <Tooltip title="Nghe phat am">
                    <Button
                      size="small"
                      shape="circle"
                      icon={<SoundOutlined />}
                      onClick={() => speakWord(word.word)}
                    />
                  </Tooltip>
                </Space>
                <Input
                    size="large"
                    placeholder="Nhập nghĩa..."
                    value={reviewInput}
                    onChange={(e) => setReviewInput(e.target.value)}
                    onPressEnter={handleReviewSubmit}
                    style={{ borderRadius: '12px', height: 50, textAlign: 'center' }}
                    autoFocus
                />
                <Button type="primary" danger size="large" shape="round" block onClick={handleReviewSubmit} disabled={!reviewInput}>
                    Kiểm tra
                </Button>
                <Text type="secondary">Câu {reviewIndex + 1} / {prevLevelWords.length}</Text>
            </Space>
         </Card>
      </FadeWrapper>
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 20px", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
      
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/dashboard")} type="text" style={{ color: '#8c8c8c' }}>
          Thoát
        </Button>
        <Space>
          <Tag color="cyan" style={{ borderRadius: 10, padding: '0 10px' }}>{week?.name}</Tag>
          <Tooltip title="Reset bài học">
            <Button icon={<ReloadOutlined />} onClick={() => setStateKey(k => k + 1)} shape="circle" />
          </Tooltip>
        </Space>
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
            <Title level={4} style={{ margin: 0, color: '#262626' }}>{task.text}</Title>
            <Text strong style={{ color: '#1890ff' }}>{progressPercent}% Hoàn thành</Text>
        </div>
        <Progress 
            percent={progressPercent} 
            strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} 
            trailColor="#e6f7ff"
            strokeWidth={12}
            showInfo={false} 
            style={{ borderRadius: 10 }}
        />
      </div>

      <div style={{ minHeight: 450 }}>
        <AnimatePresence mode="wait">
          {stage === "review" && renderReview()}
          {stage === "learn" && renderLearn()}
          {stage === "test" && renderTest()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VocabTaskPage;
