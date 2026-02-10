// src/hooks/useHiraganaGame.js
import { useState, useRef } from "react";
import { message } from "antd";
import { generateQuizFill } from "../services/geminiService.js";

export const useHiraganaGame = () => {
  const [value, setValue] = useState('hiragana'); 

  const [gameState, setGameState] = useState({
    isLoading: false,
    isStarted: false,
    isCompleted: false,
    charData: [],
    meaning: "",
    userInputs: {},
    hintUsedIndices: {},
    focusedIndex: null,
  });

  const inputRefs = useRef([]);
  const updateState = (updates) => setGameState((prev) => ({ ...prev, ...updates }));

  // --- 1. ACTION: BẮT ĐẦU (Đổi câu) ---
  const startExercise = async () => {
    updateState({
      isLoading: true,
      isCompleted: false,
      userInputs: {},
      hintUsedIndices: {},
      charData: [],
      meaning: "",
      isStarted: false,
    });

    try {
      const data = await generateQuizFill(value);
      
      if (data.questions && data.questions.length > 0) {
        updateState({
          charData: data.questions[0].chars,
          meaning: data.questions[0].meaning,
          isStarted: true,
        });
      }

    } catch (error) {
      message.error("Lỗi khi tạo bài tập: " + error.message);
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

  // --- 2. ACTION: KIỂM TRA / DỊCH (Định nghĩa trước handleKeyDown) ---
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
      // Nếu bạn muốn bấm Ctrl là hiện nghĩa luôn (kể cả làm sai) thì mở comment dòng dưới:
      // updateState({ isCompleted: true }); 
    }
  };

  // --- 3. XỬ LÝ PHÍM TẮT ---
  const handleKeyDown = (e, index) => {
    const { charData, userInputs } = gameState;
    
    // TRƯỜNG HỢP 1: Nhấn Enter hoặc Space -> Nhảy ô tiếp theo
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < charData.length && charData[nextIndex].type === 'punctuation') {
        nextIndex++;
      }
      inputRefs.current[nextIndex]?.focus();
    } 
    // TRƯỜNG HỢP 2: Backspace -> Xóa lùi
    else if (e.key === 'Backspace' && !userInputs[index]) {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && charData[prevIndex].type === 'punctuation') {
        prevIndex--;
      }
      inputRefs.current[prevIndex]?.focus();
    }
    // TRƯỜNG HỢP 3: Ctrl (Control) -> DỊCH / CHECK
    else if (e.key === 'Control' || e.key === 'Meta') {
      console.log('Ctrl pressed -> Checking...');
      e.preventDefault();
      checkAll(); // <--- Gọi hàm checkAll thay vì startExercise
      return;
    }
    // (Gợi ý) TRƯỜNG HỢP 4: Tab -> ĐỔI CÂU KHÁC (Để đỡ phải dùng chuột)
    else if (e.key === 'Tab') {
       e.preventDefault();
       startExercise();
    }
  };

  const resetGame = () => {
    updateState({
      isStarted: false,
      isCompleted: false,
      charData: [],
      meaning: "",
      userInputs: {},
      hintUsedIndices: {},
      focusedIndex: null,
    });
  }

  return {
    value,
    setValue,
    gameState,
    updateState,
    inputRefs,
    actions: {
      startExercise,
      handleInputChange,
      handleHint,
      handleKeyDown,
      resetGame,
      checkAll,
      setFocusedIndex: (idx) => updateState({ focusedIndex: idx })
    }
  };
};