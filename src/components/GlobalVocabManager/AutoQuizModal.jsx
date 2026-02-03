/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import { Modal, Input, Button, Progress, Typography, Result, Alert } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, TrophyOutlined, SoundOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const AutoQuizModal = ({ isOpen, onClose, allWords, lang }) => {
  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [results, setResults] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && allWords.length > 0) {
      // Reset toàn bộ state khi mở lại
      const shuffled = [...allWords].sort(() => 0.5 - Math.random());
      setQuizList(shuffled.slice(0, 10));
      setCurrentIndex(0);
      setResults([]);
      setUserAnswer("");
      setIsFinished(false);
      setIsChecked(false);
      setFeedback(null);
      
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, allWords]); // key={activeLang} ở cha sẽ force render lại component này nên useEffect sẽ chạy chuẩn

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/[()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const splitMeanings = (value) =>
    normalize(value)
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

  const isMeaningCorrect = (input, target) => {
    const inputNormalized = normalize(input);
    if (!inputNormalized) return false;
    const targets = splitMeanings(target);
    if (targets.length === 0) return false;
    return targets.some((t) => t === inputNormalized);
  };

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    const currentWord = quizList[currentIndex];
    const isCorrect = isMeaningCorrect(userAnswer, currentWord.meaning);

    setResults((prev) => [...prev, { word: currentWord, userAnswer, isCorrect }]);
    setFeedback({
      ok: isCorrect,
      word: currentWord,
      userAnswer,
    });
    setIsChecked(true);
  };

  const handleNext = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setIsChecked(false);
      setFeedback(null);
      inputRef.current?.focus();
    } else {
      setIsFinished(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;
    if (isChecked) handleNext();
    else handleSubmit();
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "en" ? "en-US" : "ja-JP";
    window.speechSynthesis.speak(utterance);
  };

  if (allWords.length === 0) return null;

  const currentWord = quizList[currentIndex];
  // Logic hiển thị an toàn: Nếu là tiếng Nhật mà không có hiragana (do lỗi data), hiển thị romaji hoặc word
  const displayWord = lang === "en" ? currentWord?.word : (currentWord?.hiragana || currentWord?.romaji || currentWord?.word);
  const displayHint = lang === "en" ? currentWord?.ipa : currentWord?.romaji;

  return (
    <Modal
      open={isOpen}
      onCancel={isFinished ? onClose : undefined}
      footer={null}
      closable={isFinished}
      maskClosable={false}
      centered
      title={isFinished ? "Kết quả kiểm tra" : `Kiểm tra nhanh (${currentIndex + 1}/${quizList.length})`}
    >
      {!isFinished && currentWord ? (
        <div style={{ textAlign: "center" }}>
          <Progress percent={Math.round((currentIndex / quizList.length) * 100)} showInfo={false} status="active" />
          
          <div style={{ margin: "30px 0" }}>
            <Text type="secondary" style={{ fontSize: 16 }}>Hãy nhập nghĩa của từ:</Text>
            <Title level={2} style={{ color: "#1890ff", margin: "10px 0" }}>
              {displayWord}
            </Title>
            <Text type="secondary">{displayHint}</Text>
            
            <Button 
                type="text" 
                icon={<SoundOutlined />} 
                onClick={() => speak(lang === "en" ? currentWord.word : currentWord.hiragana)}
            />
          </div>

          <Input
            ref={inputRef}
            placeholder="Nhập nghĩa tiếng Việt..."
            size="large"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{ marginBottom: 20 }}
            autoFocus
            disabled={isChecked}
          />
          {!isChecked ? (
            <Button type="primary" size="large" block onClick={handleSubmit}>Kiểm tra</Button>
          ) : (
            <Button type="primary" size="large" block onClick={handleNext}>
              {currentIndex === quizList.length - 1 ? "Hoàn tất" : "Tiếp theo"}
            </Button>
          )}
          {feedback && (
            <Alert
              showIcon
              type={feedback.ok ? "success" : "error"}
              message={feedback.ok ? "Đúng rồi!" : "Chưa đúng"}
              description={`Bạn nhập: "${feedback.userAnswer}"`}
              style={{ marginTop: 12 }}
            />
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Result
            icon={<TrophyOutlined />}
            status="success"
            title={`Hoàn thành! Đúng ${results.filter(r => r.isCorrect).length}/${quizList.length}`}
          />
          <div style={{ maxHeight: 300, overflowY: "auto", textAlign: "left", background: "#f5f5f5", padding: 10, borderRadius: 8 }}>
            {results.map((item, idx) => (
              <div key={idx} style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                {item.isCorrect ? <CheckCircleOutlined style={{ color: "green" }} /> : <CloseCircleOutlined style={{ color: "red" }} />}
                <span style={{ marginLeft: 8, fontWeight: "bold" }}>
                   {lang === "en" ? item.word.word : item.word.hiragana}
                </span>
                <span> = {item.word.meaning}</span>
                <div style={{ fontSize: 12, color: "#666", marginLeft: 24 }}>
                  Bạn nhập: "{item.userAnswer}"
                </div>
              </div>
            ))}
          </div>
          <Button type="primary" block style={{ marginTop: 20 }} onClick={onClose}>Đóng</Button>
        </div>
      )}
    </Modal>
  );
};

export default AutoQuizModal;
