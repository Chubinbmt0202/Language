// src/components/TimeTracker.jsx
import { useEffect } from "react";
import { addLearningSeconds } from "@/shared/utils/storage/timeTracking";
import { useAuth } from "@/app/providers/AuthContext";

const TimeTracker = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return; // Không tính giờ nếu chưa đăng nhập

    let intervalId;

    const startTimer = () => {
      // Xóa timer cũ nếu có để tránh trùng lặp
      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        // Chỉ cộng giờ khi tab đang hiển thị (người dùng đang nhìn màn hình)
        if (document.visibilityState === "visible") {
          addLearningSeconds(1);
        }
      }, 1000);
    };

    const stopTimer = () => {
      if (intervalId) clearInterval(intervalId);
    };

    // Bắt đầu đếm ngay khi component mount
    startTimer();

    // Lắng nghe sự kiện ẩn/hiện tab để tối ưu hiệu năng và độ chính xác
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startTimer();
      } else {
        stopTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [user]); // Chạy lại khi trạng thái user thay đổi

  return null; // Component này không render gì cả (Headless)
};

export default TimeTracker;