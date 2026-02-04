/* eslint-disable no-unused-vars */
export const TASK_PROGRESS_STORAGE_KEY = "taskProgress";

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

  try {
    const stored = window.localStorage.getItem(TASK_PROGRESS_STORAGE_KEY);
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
