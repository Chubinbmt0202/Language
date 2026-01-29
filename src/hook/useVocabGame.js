import React from "react";
import { message } from "antd";
import { generateVocab } from "../components/japan/API/geminiService.js";

export const useVocabGame = () => {
  const [gameState, setGameState] = React.useState({
    isLoading: false,
    isStarted: false,
    isCompleted: false,
    questionData: null,
    userAnswer: "",
  });

  const updateState = (updates) =>
    setGameState((prev) => ({ ...prev, ...updates }));

  // CẬP NHẬT: Thêm tham số settings (level, type, numQuestions)
  const startExercise = async (settings) => {
    updateState({
      isLoading: true,
      isCompleted: false,
      questionData: null,
      userAnswer: "",
      isStarted: false,
    });

    try {
      // Truyền settings vào hàm API
      const data = await generateVocab(settings); 
      console.log("Dữ liệu câu hỏi nhận được:", data);
      
      if (data && data.questions && data.questions.length > 0) {
        updateState({
          questionData: data.questions, // Lưu toàn bộ danh sách câu hỏi
          isStarted: true,
        });
      } else {
         message.warning("Không tìm thấy dữ liệu phù hợp.");
      }
    } catch (error) {
      message.error("Lỗi khi tạo bài tập: " + error.message);
    } finally {
      updateState({ isLoading: false });
    }
  };

  const handleAnswerChange = (value) => {
    updateState({ userAnswer: value });
  };

  return {
    gameState,
    handleAnswerChange,
    acction: { // Giữ nguyên tên acction như code cũ của bạn
      startExercise
    }
  };
};