import { auth } from "../../firebase/firebase"; // Chú ý: ../../

const BASE_KEY = "task-progress";

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${BASE_KEY}_${user.uid}` : null;
};

export const getProgressMap = () => {
  try {
    const key = getUserKey();
    if (!key) return {}; // Reset 0

    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const getTaskProgress = (taskId) => {
  const map = getProgressMap();
  const value = map[taskId];
  return Number.isFinite(value) ? value : 0;
};

export const setTaskProgress = (taskId, progress) => {
  const key = getUserKey();
  if (!key) return 0; // Không lưu

  const map = getProgressMap();
  const next = Math.max(0, Math.floor(progress));
  map[taskId] = next;
  localStorage.setItem(key, JSON.stringify(map));
  return next;
};