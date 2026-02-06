const STORAGE_PREFIX = "theory_lesson_missions:";

const safeParseJson = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const buildStorageKey = (taskId) => (taskId ? `${STORAGE_PREFIX}${taskId}` : null);

export const getLessonMissionsDoneMap = (taskId) => {
  if (typeof window === "undefined") return {};
  const storageKey = buildStorageKey(taskId);
  if (!storageKey) return {};
  const stored = safeParseJson(window.localStorage.getItem(storageKey), {});
  if (!stored || typeof stored !== "object") return {};
  return stored;
};

export const setLessonMissionDone = (taskId, missionKey, done = true) => {
  if (typeof window === "undefined") return;
  const storageKey = buildStorageKey(taskId);
  if (!storageKey) return;
  if (!missionKey) return;

  const current = getLessonMissionsDoneMap(taskId);
  const next = { ...current, [missionKey]: Boolean(done) };
  window.localStorage.setItem(storageKey, JSON.stringify(next));
  window.dispatchEvent(
    new CustomEvent("lessonMissions:updated", {
      detail: { taskId, missionKey, done: Boolean(done) },
    }),
  );
};

export const markLessonMissionDone = (taskId, missionKey) => {
  const current = getLessonMissionsDoneMap(taskId);
  if (current?.[missionKey]) return;
  setLessonMissionDone(taskId, missionKey, true);
};

