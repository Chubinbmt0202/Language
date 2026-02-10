/* eslint-disable no-unused-vars */
import { auth } from "../firebase/firebase";

export const TASK_PROGRESS_STORAGE_KEY = "taskProgress";

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${TASK_PROGRESS_STORAGE_KEY}_${user.uid}` : null;
};

const normalizeEntry = (entry) => {
  if (entry && typeof entry === "object") {
    return {
      progress: Number(entry.progress ?? 0),
      tier: Number(entry.tier ?? 0),
    };
  }
  return { progress: Number(entry ?? 0), tier: 0 };
};

export const loadTaskProgress = () => {
  if (typeof window === "undefined") {
    return {};
  }
  
  const key = getUserKey();
  if (!key) return {}; // Reset về 0/rỗng nếu chưa login

  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? JSON.parse(stored) : {};
    const normalized = {};
    Object.entries(parsed || {}).forEach(([taskId, value]) => {
      normalized[taskId] = normalizeEntry(value);
    });
    return normalized;
  } catch (error) {
    return {};
  }
};

export const saveTaskProgress = (progressMap) => {
  if (typeof window === "undefined") return;

  const key = getUserKey();
  if (!key) return; // Không lưu nếu chưa login

  window.localStorage.setItem(
    key,
    JSON.stringify(progressMap),
  );
};

export const incrementTaskProgress = (taskId, maxLevel = 10) => {
  // Logic giữ nguyên, chỉ thay đổi load/save đã xử lý key ở trên
  const progressMap = loadTaskProgress();
  // Nếu chưa login, progressMap là {}, nên bắt đầu từ 0
  
  const currentState = normalizeEntry(progressMap[taskId]);
  const nextProgress = currentState.progress + 1;

  let updatedState = { ...currentState };
  if (nextProgress >= maxLevel) {
    updatedState = { progress: 0, tier: currentState.tier + 1 };
  } else {
    updatedState = { progress: nextProgress, tier: currentState.tier };
  }

  const updated = { ...progressMap, [taskId]: updatedState };
  saveTaskProgress(updated);
  return updated;
};

export const getTaskState = (taskId) => {
  const progressMap = loadTaskProgress();
  return normalizeEntry(progressMap[taskId]);
};