import { useState, useRef } from 'react';
import { message } from 'antd';
import { generateQuestions } from '../components/geminiService'; // Đảm bảo import đúng service

export const useHiraganaGame = () => {
  const [config, setConfig] = useState({ 
    type: 'hiragana-text', count: 1, level: 'N5', topic: 'General' 
  });
  
  const [gameState, setGameState] = useState({
    isLoading: false,
    isStarted: false,
    isCompleted: false,
    charData: [],
    meaning: "", // <--- STATE MỚI ĐỂ LƯU NGHĨA TIẾNG VIỆT
    userInputs: {},
    hintUsedIndices: {},
    focusedIndex: null,
  });

  const inputRefs = useRef([]);

  // Hàm update state tiện lợi
  const updateState = (updates) => setGameState(prev => ({ ...prev, ...updates }));

  const startExercise = async () => {
    // Reset toàn bộ state khi bắt đầu bài mới
    updateState({ 
      isLoading: true, 
      isCompleted: false, 
      userInputs: {}, 
      hintUsedIndices: {}, 
      charData: [], 
      meaning: "", 
      isStarted: false 
    });
    
    try {
      // Gọi API
      const data = await generateQuestions(config);
      
      // 🔥 LOG DỮ LIỆU FRONTEND NHẬN ĐƯỢC (để bạn debug)
      console.log("🔥 Dữ liệu từ API:", data);

      // Kiểm tra cấu trúc dữ liệu trả về
      if (data.chars && Array.isArray(data.chars)) {
        // Trường hợp chuẩn: Có mảng chars và meaning
        updateState({ 
          charData: data.chars, 
          meaning: data.meaning || "Không có dịch nghĩa.", // Fallback nếu rỗng
          isStarted: true 
        });
      } else if (Array.isArray(data)) {
        // Trường hợp cũ (fallback): API trả về mảng trực tiếp
        updateState({ 
          charData: data, 
          meaning: "", 
          isStarted: true 
        });
      } else {
        throw new Error("Dữ liệu API không đúng định dạng mong đợi");
      }

    } catch (error) {
      console.error("Lỗi:", error);
      message.error('Lỗi khi tạo bài tập: ' + error.message);
    } finally {
      updateState({ isLoading: false });
    }
  };

  const handleInputChange = (index, value) => {
    setGameState(prev => ({
      ...prev,
      userInputs: { ...prev.userInputs, [index]: value.toLowerCase() }
    }));
  };

  const handleHint = () => {
    const { focusedIndex, charData, userInputs } = gameState;
    let targetIndex = focusedIndex;

    if (targetIndex === null || charData[targetIndex]?.type === 'punctuation') {
      targetIndex = charData.findIndex((item, idx) => item.type === 'input' && !userInputs[idx]);
    }

    if (targetIndex === -1 || targetIndex === undefined) {
      message.info("Bạn đã điền hết các ô rồi!");
      return;
    }

    const correctAnswer = charData[targetIndex].romaji;
    
    setGameState(prev => ({
      ...prev,
      userInputs: { ...prev.userInputs, [targetIndex]: correctAnswer },
      hintUsedIndices: { ...prev.hintUsedIndices, [targetIndex]: true }
    }));

    const nextIndex = targetIndex + 1;
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    const { charData, userInputs } = gameState;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < charData.length && charData[nextIndex].type === 'punctuation') {
        nextIndex++;
      }
      inputRefs.current[nextIndex]?.focus();
    } else if (e.key === 'Backspace' && !userInputs[index]) {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && charData[prevIndex].type === 'punctuation') {
        prevIndex--;
      }
      inputRefs.current[prevIndex]?.focus();
    }
  };

  const checkAll = () => {
    const { charData, userInputs } = gameState;
    const totalInputItems = charData.filter(i => i.type === 'input').length;
    let correctCount = 0;
    
    charData.forEach((item, index) => {
      if (item.type === 'input' && userInputs[index] === item.romaji) correctCount++;
    });

    if (correctCount === totalInputItems) {
      updateState({ isCompleted: true });
      message.success("Tuyệt vời! Hoàn thành xuất sắc.");
    } else {
      message.warning(`Bạn đúng ${correctCount}/${totalInputItems} ký tự.`);
    }
  };

  return {
    config, setConfig,
    gameState, updateState,
    inputRefs,
    actions: {
      startExercise,
      handleInputChange,
      handleHint,
      handleKeyDown,
      checkAll,
      setFocusedIndex: (idx) => updateState({ focusedIndex: idx })
    }
  };
};