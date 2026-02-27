import { auth } from "@/shared/api/firebase/firebase";

const BASE_KEY = 'quiz_history';

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${BASE_KEY}_${user.uid}` : null;
};

export const saveQuizToHistory = (questions, config) => {
  try {
    const key = getUserKey();
    if (!key) return false; // Không lưu nếu chưa login

    // 1. Lấy dữ liệu cũ
    const existingHistory = JSON.parse(localStorage.getItem(key) || '[]');

    // 2. Tạo bản ghi mới
    const newRecord = {
      id: Date.now(), 
      date: new Date().toLocaleString('vi-VN'),
      config: config, 
      questions: questions, 
      score: null 
    };

    // 3. Thêm vào đầu danh sách
    const updatedHistory = [newRecord, ...existingHistory];

    // 4. Lưu lại
    localStorage.setItem(key, JSON.stringify(updatedHistory.slice(0, 50)));
    
    return true;
  } catch (error) {
    console.error("Lỗi lưu lịch sử:", error);
    return false;
  }
};

export const getHistory = () => {
  const key = getUserKey();
  if (!key) return []; // Reset 0
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const clearHistory = () => {
  const key = getUserKey();
  if (key) localStorage.removeItem(key);
};