import React, { useState } from "react";
// import { Tabs } from "antd"; // Nếu không dùng Tabs thì có thể bỏ
import QuizSetup from "./QuizSetup";
import QuizGame from "./QuizGame";

// --- DỮ LIỆU MẪU (Bỏ vào đây hoặc import từ file khác) ---
const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: "Từ nào sau đây có nghĩa là 'Con mèo'?",
    options: [
      { id: "A", text: "いぬ (Inu)", isCorrect: false },
      { id: "B", text: "ねこ (Neko)", isCorrect: true },
      { id: "C", text: "とり (Tori)", isCorrect: false },
      { id: "D", text: "さかな (Sakana)", isCorrect: false },
    ],
    explanation: "Trong tiếng Nhật: Inu là Chó, Neko là Mèo, Tori là Chim, Sakana là Cá.",
  },
  {
    id: 2,
    question: "Điền trợ từ thích hợp: わたし __ Gakusei desu (Tôi là học sinh).",
    options: [
      { id: "A", text: "は (wa)", isCorrect: true },
      { id: "B", text: "が (ga)", isCorrect: false },
      { id: "C", text: "を (wo)", isCorrect: false },
      { id: "D", text: "に (ni)", isCorrect: false },
    ],
    explanation: "Trợ từ 'wa' (viết là ha) dùng để đánh dấu chủ ngữ trong câu khẳng định đơn giản.",
  },
  {
    id: 3,
    question: "Chữ Kanji '日' có nghĩa là gì?",
    options: [
      { id: "A", text: "Mặt trăng", isCorrect: false },
      { id: "B", text: "Lửa", isCorrect: false },
      { id: "C", text: "Nước", isCorrect: false },
      { id: "D", text: "Mặt trời / Ngày", isCorrect: true },
    ],
    explanation: "'日' (Nhật) tượng trưng cho mặt trời hoặc ngày.",
  },
  {
    id: 4,
    question: "'Arigatou gozaimasu' dùng để làm gì?",
    options: [
      { id: "A", text: "Xin lỗi", isCorrect: false },
      { id: "B", text: "Cảm ơn", isCorrect: true },
      { id: "C", text: "Chào buổi sáng", isCorrect: false },
      { id: "D", text: "Chúc ngủ ngon", isCorrect: false },
    ],
    explanation: "Arigatou gozaimasu nghĩa là Cảm ơn rất nhiều. Xin lỗi là Sumimasen/Gomen.",
  },
  {
    id: 5,
    question: "Số 7 trong tiếng Nhật đọc là gì?",
    options: [
      { id: "A", text: "Ichi", isCorrect: false },
      { id: "B", text: "San", isCorrect: false },
      { id: "C", text: "Nana / Shichi", isCorrect: true },
      { id: "D", text: "Roku", isCorrect: false },
    ],
    explanation: "Ichi (1), San (3), Roku (6), Nana/Shichi (7).",
  },
];

const JapaneseQuiz = () => {
  // --- STATE ---
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({ count: 5, level: "N5", topic: "General" });
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Hàm tiện ích: Trộn mảng (Để mỗi lần chơi thứ tự câu hỏi khác nhau)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // --- LOGIC: BẮT ĐẦU TỪ API (Giả lập) ---
  const handleStartAPI = async () => {
    setIsLoading(true);

    // Giả lập gọi API mất 1 giây
    setTimeout(() => {
      // 1. Lấy dữ liệu mẫu
      // 2. Trộn câu hỏi (nếu muốn)
      const shuffledQuestions = shuffleArray(SAMPLE_QUESTIONS);
      
      // 3. Cắt số lượng câu hỏi theo config (ví dụ config.count là 3 thì chỉ lấy 3 câu)
      // Lưu ý: Đảm bảo config.count là số
      const selectedQuestions = shuffledQuestions.slice(0, Number(config.count) || 5);

      setQuizQuestions(selectedQuestions);
      setIsQuizStarted(true);
      setIsLoading(false);
    }, 1000);
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

  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
          <QuizSetup 
            config={config} 
            setConfig={setConfig} 
            onStartAPI={handleStartAPI}
            isLoading={isLoading}
          />
    </div>
  );
};

export default JapaneseQuiz;