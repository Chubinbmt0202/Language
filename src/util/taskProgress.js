/* eslint-disable no-unused-vars */
export const TASK_PROGRESS_STORAGE_KEY = "taskProgress";

export const loadTaskProgress = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = window.localStorage.getItem(TASK_PROGRESS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return {};
  }
};

export const saveTaskProgress = (progressMap) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    TASK_PROGRESS_STORAGE_KEY,
    JSON.stringify(progressMap),
  );
};

export const incrementTaskProgress = (taskId, maxLevel = 10) => {
  const progressMap = loadTaskProgress();
  const current = Number(progressMap[taskId] ?? 0);
  const next = Math.min(current + 1, maxLevel);
  const updated = { ...progressMap, [taskId]: next };
  saveTaskProgress(updated);
  return updated;
};
