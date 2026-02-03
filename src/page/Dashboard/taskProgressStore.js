const STORAGE_KEY = "task-progress";

export const getProgressMap = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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
  const map = getProgressMap();
  const next = Math.max(0, Math.floor(progress));
  map[taskId] = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  return next;
};
