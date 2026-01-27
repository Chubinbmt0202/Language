// utils/historyStorage.js

const STORAGE_KEY = 'quiz_history';

export const saveQuizToHistory = (questions, config) => {
  try {
    // 1. Lấy dữ liệu cũ
    const existingHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    // 2. Tạo bản ghi mới
    const newRecord = {
      id: Date.now(), // Dùng timestamp làm ID duy nhất
      date: new Date().toLocaleString('vi-VN'),
      config: config, // Lưu lại cấu hình (Level N5, Topic...)
      questions: questions, // Lưu bộ câu hỏi
      score: null // Chưa làm nên chưa có điểm
    };

    // 3. Thêm vào đầu danh sách (Mới nhất lên trên)
    const updatedHistory = [newRecord, ...existingHistory];

    // 4. Lưu lại (Giới hạn lưu 50 đề gần nhất để tránh đầy bộ nhớ)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory.slice(0, 50)));
    
    return true;
  } catch (error) {
    console.error("Lỗi lưu lịch sử:", error);
    return false;
  }
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};