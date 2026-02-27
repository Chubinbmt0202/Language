// src/util/timeTracking.js
import { auth } from "@/shared/api/firebase/firebase";

const TIME_STORAGE_KEY = "learning_time";
const TIME_TARGET_KEY = "learning_time_target"; // Mục tiêu hàng ngày (giây)

export const DEFAULT_DAILY_TARGET_SECONDS = 3600; // Mặc định 60 phút

// / Helper: Format ngày thành YYYY-MM-DD để tạo Key
const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Helper: Lấy tên thứ tiếng Việt (T2, T3... CN)
const getDayName = (date) => {
  const day = date.getDay();
  const map = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  return map[day];
};

// --- HÀM MỚI: Lấy dữ liệu biểu đồ 7 ngày gần nhất ---
export const getWeeklyLearningData = () => {
  const user = auth.currentUser;
  if (!user) {
    // Nếu chưa đăng nhập, trả về mảng rỗng hoặc 0
    const emptyData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        emptyData.push({ name: getDayName(d), minutes: 0, fullDate: formatDateKey(d) });
    }
    return emptyData;
  }

  const data = [];
  // Lặp từ 6 ngày trước đến hôm nay
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i); // Lùi ngày
    
    const dateKey = formatDateKey(d);
    const storageKey = `${TIME_STORAGE_KEY}_${user.uid}_${dateKey}`;
    
    const rawSeconds = localStorage.getItem(storageKey);
    const seconds = rawSeconds ? parseInt(rawSeconds, 10) : 0;
    
    // Đổi ra phút (làm tròn)
    const minutes = Math.round(seconds / 60);

    data.push({
      name: getDayName(d), // Hiển thị trục X: T2, T3...
      minutes: minutes,    // Hiển thị trục Y
      fullDate: dateKey    // Dùng để debug nếu cần
    });
  }
  return data;
};


const getUserKey = (baseKey) => {
  const user = auth.currentUser;
  if (!user) return null;
  const dateStr = new Date().toISOString().split('T')[0]; // Key theo ngày: YYYY-MM-DD
  return `${baseKey}_${user.uid}_${dateStr}`;
};

// Lấy thời gian đã học hôm nay (tính bằng giây)
export const getTodayLearningSeconds = () => {
  const key = getUserKey(TIME_STORAGE_KEY);
  if (!key) return 0; // Chưa đăng nhập trả về 0

  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : 0;
};

// Cộng thêm thời gian (gọi mỗi giây khi active)
export const addLearningSeconds = (seconds = 1) => {
  const key = getUserKey(TIME_STORAGE_KEY);
  if (!key) return 0;

  const current = getTodayLearningSeconds();
  const next = current + seconds;
  localStorage.setItem(key, next.toString());
  
  // Bắn event để các component khác tự cập nhật UI
  window.dispatchEvent(new Event("time:updated"));
  
  return next;
};

// Lấy mục tiêu (seconds)
export const getDailyTargetSeconds = () => {
    const user = auth.currentUser;
    if (!user) return DEFAULT_DAILY_TARGET_SECONDS;
    
    // Key mục tiêu không cần theo ngày, chỉ cần theo user
    const key = `${TIME_TARGET_KEY}_${user.uid}`; 
    const stored = localStorage.getItem(key);
    return stored ? parseInt(stored, 10) : DEFAULT_DAILY_TARGET_SECONDS;
};