import { auth } from "@/shared/api/firebase/firebase";

const TOTAL_SCORE_STORAGE_KEY = "exerciseScore";
const DAILY_SCORES_STORAGE_KEY = "exerciseDailyScores";
const DAILY_TARGET_STORAGE_KEY = "dailyPointsTarget";
const ROADMAP_DAY_POINTS_STORAGE_KEY = "roadmapDayPoints";
const ROADMAP_WEEK_POINTS_STORAGE_KEY = "roadmapWeekPoints";
const ROADMAP_DAY_UNLOCK_OVERRIDE_STORAGE_KEY = "roadmapDayUnlockOverrides";
const ROADMAP_WEEK_UNLOCK_OVERRIDE_STORAGE_KEY = "roadmapWeekUnlockOverrides";

export const TOTAL_POINTS_TARGET = 10000;
export const DEFAULT_DAILY_POINTS_TARGET = 100;
export const UNLOCK_TEST_PASS_PERCENT = 3;

const getUserKey = (baseKey) => {
  const user = auth.currentUser;
  return user ? `${baseKey}_${user.uid}` : `${baseKey}_guest`;
};

const clampNonNegativeInt = (value) => {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) return 0;
  return Math.max(0, Math.trunc(numberValue));
};

const safeParseJson = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const loadRecord = (baseKey) => {
  if (typeof window === "undefined") return {};
  const key = getUserKey(baseKey);

  const stored = window.localStorage.getItem(key);
  const parsed = safeParseJson(stored, {});
  if (!parsed || typeof parsed !== "object") return {};
  return parsed;
};

const saveRecord = (baseKey, value) => {
  if (typeof window === "undefined") return;
  const key = getUserKey(baseKey);

  window.localStorage.setItem(key, JSON.stringify(value));
};

const formatLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const loadDailyScores = () => {
  return loadRecord(DAILY_SCORES_STORAGE_KEY);
};

const saveDailyScores = (scores) => {
  saveRecord(DAILY_SCORES_STORAGE_KEY, scores);
};

export const getTotalPoints = () => {
  if (typeof window === "undefined") return 0;
  const key = getUserKey(TOTAL_SCORE_STORAGE_KEY);

  const stored = window.localStorage.getItem(key);
  return clampNonNegativeInt(stored);
};

export const getDailyTargetPoints = () => {
  if (typeof window === "undefined") return DEFAULT_DAILY_POINTS_TARGET;
  const key = getUserKey(DAILY_TARGET_STORAGE_KEY);

  const stored = window.localStorage.getItem(key);
  const parsed = clampNonNegativeInt(stored);
  return parsed > 0 ? parsed : DEFAULT_DAILY_POINTS_TARGET;
};

export const setDailyTargetPoints = (targetPoints) => {
  if (typeof window === "undefined") return;
  const key = getUserKey(DAILY_TARGET_STORAGE_KEY);
  if (!key) return;

  const next = clampNonNegativeInt(targetPoints);
  window.localStorage.setItem(key, String(next));
  window.dispatchEvent(new Event("points:updated"));
};

export const getPointsForDate = (date = new Date()) => {
  const dailyScores = loadDailyScores();
  const key = formatLocalDateKey(date);
  return clampNonNegativeInt(dailyScores[key]);
};

export const getTodayPoints = () => getPointsForDate(new Date());

export const addPoints = (points, date = new Date()) => {
  if (typeof window === "undefined") {
    return { totalPoints: 0, todayPoints: 0 };
  }

  const totalKey = getUserKey(TOTAL_SCORE_STORAGE_KEY);

  const pointsToAdd = clampNonNegativeInt(points);
  if (pointsToAdd <= 0) {
    return { totalPoints: getTotalPoints(), todayPoints: getPointsForDate(date) };
  }

  const currentTotal = getTotalPoints();
  const nextTotal = currentTotal + pointsToAdd;
  window.localStorage.setItem(totalKey, String(nextTotal));

  const dailyScores = loadDailyScores();
  const key = formatLocalDateKey(date);
  const currentDaily = clampNonNegativeInt(dailyScores[key]);
  const nextDaily = currentDaily + pointsToAdd;
  saveDailyScores({ ...dailyScores, [key]: nextDaily });

  window.dispatchEvent(new Event("points:updated"));

  return { totalPoints: nextTotal, todayPoints: nextDaily };
};

export const getStreakDays = (today = new Date()) => {
  const dailyScores = loadDailyScores();
  let streak = 0;

  const cursor = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  while (true) {
    const key = formatLocalDateKey(cursor);
    const points = clampNonNegativeInt(dailyScores[key]);
    if (points <= 0) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
};

export const getRoadmapDayPoints = (dayId) => {
  const map = loadRecord(ROADMAP_DAY_POINTS_STORAGE_KEY);
  return clampNonNegativeInt(map?.[dayId]);
};

export const getRoadmapWeekPoints = (weekNumber) => {
  const map = loadRecord(ROADMAP_WEEK_POINTS_STORAGE_KEY);
  return clampNonNegativeInt(map?.[String(weekNumber)]);
};

export const addRoadmapPoints = ({ weekNumber, dayId, points }) => {
  if (typeof window === "undefined") {
    return { weekPoints: 0, dayPoints: 0 };
  }

  const pointsToAdd = clampNonNegativeInt(points);
  if (pointsToAdd <= 0) {
    return {
      weekPoints: getRoadmapWeekPoints(weekNumber),
      dayPoints: getRoadmapDayPoints(dayId),
    };
  }

  const weekKey = String(weekNumber);
  const weekMap = loadRecord(ROADMAP_WEEK_POINTS_STORAGE_KEY);
  const nextWeekPoints =
    clampNonNegativeInt(weekMap?.[weekKey]) + pointsToAdd;
  saveRecord(ROADMAP_WEEK_POINTS_STORAGE_KEY, {
    ...weekMap,
    [weekKey]: nextWeekPoints,
  });

  const dayMap = loadRecord(ROADMAP_DAY_POINTS_STORAGE_KEY);
  const nextDayPoints = clampNonNegativeInt(dayMap?.[dayId]) + pointsToAdd;
  saveRecord(ROADMAP_DAY_POINTS_STORAGE_KEY, { ...dayMap, [dayId]: nextDayPoints });

  window.dispatchEvent(new Event("roadmap:updated"));

  return { weekPoints: nextWeekPoints, dayPoints: nextDayPoints };
};

export const isRoadmapDayOverrideUnlocked = (dayId) => {
  const map = loadRecord(ROADMAP_DAY_UNLOCK_OVERRIDE_STORAGE_KEY);
  return Boolean(map?.[dayId]);
};

export const setRoadmapDayOverrideUnlocked = (dayId, unlocked = true) => {
  if (typeof window === "undefined") return;
  const map = loadRecord(ROADMAP_DAY_UNLOCK_OVERRIDE_STORAGE_KEY);
  const next = { ...map, [dayId]: Boolean(unlocked) };
  saveRecord(ROADMAP_DAY_UNLOCK_OVERRIDE_STORAGE_KEY, next);
  window.dispatchEvent(new Event("roadmap:updated"));
};

export const isRoadmapWeekOverrideUnlocked = (weekNumber) => {
  const map = loadRecord(ROADMAP_WEEK_UNLOCK_OVERRIDE_STORAGE_KEY);
  return Boolean(map?.[String(weekNumber)]);
};

export const setRoadmapWeekOverrideUnlocked = (weekNumber, unlocked = true) => {
  if (typeof window === "undefined") return;
  const map = loadRecord(ROADMAP_WEEK_UNLOCK_OVERRIDE_STORAGE_KEY);
  const key = String(weekNumber);
  const next = { ...map, [key]: Boolean(unlocked) };
  saveRecord(ROADMAP_WEEK_UNLOCK_OVERRIDE_STORAGE_KEY, next);
  window.dispatchEvent(new Event("roadmap:updated"));
};