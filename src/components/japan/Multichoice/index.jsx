import React, { useState, useEffect } from "react";
import { Tabs, message } from "antd";
import { PlayCircleOutlined, HistoryOutlined } from "@ant-design/icons";

// Import các component con
import QuizSetup from "./QuizSetup";
import QuizHistory from "./QuizHistory";
import QuizGame from "./QuizGame";

// Import logic phụ trợ
import { generateQuestions } from "../../geminiService";
import { saveQuizToHistory, getHistory } from "../../../util/historyStorage";

const { TabPane } = Tabs;

const JapaneseQuiz = () => {
  // --- STATE ---
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({ count: 5, level: "N5", topic: "General" });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  // Load lịch sử lúc khởi chạy
  useEffect(() => {
    setHistoryList(getHistory());
  }, []);

  // Hàm tiện ích: Trộn mảng
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // --- LOGIC: BẮT ĐẦU TỪ API ---
  const handleStartAPI = async () => {
    setIsLoading(true);
    try {
      const questions = await generateQuestions(config);
      
      // Lưu vào lịch sử
      saveQuizToHistory(questions, config);
      setHistoryList(getHistory());

      // Setup data để chơi
      setQuizQuestions(questions);
      setIsQuizStarted(true);
    } catch (error) {
      message.error("Lỗi tạo đề thi: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- LOGIC: BẮT ĐẦU TỪ LOCAL (ÔN TẬP NGẪU NHIÊN) ---
  const handleStartLocal = () => {
    const allQuestions = historyList.flatMap((item) => item.questions);
    if (allQuestions.length === 0) {
      message.warning("Chưa có dữ liệu ôn tập!");
      return;
    }

    // Lọc trùng theo ID (giả sử ID là unique) và trộn
    const uniqueQuestions = Array.from(new Map(allQuestions.map(q => [q.id, q])).values());
    const shuffled = shuffleArray(uniqueQuestions);
    const reviewSet = shuffled.slice(0, config.count > shuffled.length ? shuffled.length : config.count);

    setQuizQuestions(reviewSet);
    setIsQuizStarted(true);
    message.success(`Đang ôn tập ${reviewSet.length} câu ngẫu nhiên!`);
  };

  // --- LOGIC: LÀM LẠI 1 ĐỀ CŨ ---
  const handleRetryHistory = (savedRecord) => {
    const shuffled = shuffleArray(savedRecord.questions);
    setQuizQuestions(shuffled);
    setConfig(savedRecord.config); // Set lại config hiển thị cho đúng
    setIsQuizStarted(true);
    message.success("Đã tải lại đề thi cũ!");
  };

  // --- LOGIC: XÓA LỊCH SỬ ---
  const handleClearHistory = () => {
    localStorage.removeItem("quiz_history");
    setHistoryList([]);
    message.info("Đã xóa toàn bộ lịch sử.");
  };

  // --- LOGIC: THOÁT GAME ---
  const handleExitGame = () => {
    setIsQuizStarted(false);
    setQuizQuestions([]);
  };

  // --- RENDER ---
  
  // 1. Màn hình Game (nếu đang chơi)
  if (isQuizStarted) {
    return <QuizGame questions={quizQuestions} onExit={handleExitGame} />;
  }

  // 2. Màn hình Setup (Tab)
  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <Tabs defaultActiveKey="1" type="card" centered>
        <TabPane
          tab={<span><PlayCircleOutlined /> Luyện thi</span>}
          key="1"
        >
          <QuizSetup 
            config={config} 
            setConfig={setConfig} 
            onStartAPI={handleStartAPI}
            onStartLocal={handleStartLocal}
            isLoading={isLoading}
            historyCount={historyList.reduce((acc, curr) => acc + curr.questions.length, 0)}
          />
        </TabPane>
        
        <TabPane
          tab={<span><HistoryOutlined /> Kho đề cũ</span>}
          key="2"
        >
          <QuizHistory 
            historyList={historyList} 
            onRetry={handleRetryHistory} 
            onClear={handleClearHistory} 
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default JapaneseQuiz;