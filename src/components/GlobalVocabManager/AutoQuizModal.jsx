/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import { Modal, Input, Button, Progress, Typography, Result } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, TrophyOutlined, SoundOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const AutoQuizModal = ({ isOpen, onClose, allWords, lang }) => {
  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [results, setResults] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
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
      
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, allWords]); // key={activeLang} ở cha sẽ force render lại component này nên useEffect sẽ chạy chuẩn

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    const currentWord = quizList[currentIndex];
    const isCorrect = userAnswer.trim().toLowerCase() === currentWord.meaning.trim().toLowerCase();

    setResults([...results, { word: currentWord, userAnswer, isCorrect }]);

    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      inputRef.current?.focus();
    } else {
      setIsFinished(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
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
          />
          <Button type="primary" size="large" block onClick={handleSubmit}>Tiếp tục</Button>
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