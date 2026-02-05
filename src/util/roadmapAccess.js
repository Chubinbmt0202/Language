import {
  getRoadmapDayPoints,
  getRoadmapWeekPoints,
  isRoadmapDayOverrideUnlocked,
  isRoadmapWeekOverrideUnlocked,
} from "./points";

const DEFAULT_DAILY_UNLOCK_POINTS_TARGET = 20;

const clampNonNegativeInt = (value) => {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) return 0;
  return Math.max(0, Math.trunc(numberValue));
};

export const getWeekPointsTarget = (week) => {
  const explicit = clampNonNegativeInt(week?.pointsTarget ?? week?.weekPointsTarget);
  if (explicit > 0) return explicit;
  const daysCount = Array.isArray(week?.days) ? week.days.length : 0;
  return Math.max(1, daysCount) * DEFAULT_DAILY_UNLOCK_POINTS_TARGET;
};

export const getDayPointsTarget = (week, day) => {
  const explicit = clampNonNegativeInt(day?.pointsTarget ?? day?.dayPointsTarget);
  if (explicit > 0) return explicit;
  const weekTarget = getWeekPointsTarget(week);
  const daysCount = Array.isArray(week?.days) ? week.days.length : 0;
  return Math.max(1, Math.round(weekTarget / Math.max(1, daysCount)));
};

export const getWeekGate = (roadmapWeeks, weekIndex) => {
  if (!Array.isArray(roadmapWeeks) || weekIndex < 0) {
    return { unlocked: true };
  }

  if (weekIndex === 0) return { unlocked: true };

  const week = roadmapWeeks[weekIndex];
  if (!week) return { unlocked: true };

  if (isRoadmapWeekOverrideUnlocked(week.week)) {
    return { unlocked: true, override: true };
  }

  const prevWeek = roadmapWeeks[weekIndex - 1];
  if (!prevWeek) return { unlocked: true };

  const required = getWeekPointsTarget(prevWeek);
  const current = getRoadmapWeekPoints(prevWeek.week);
  return {
    unlocked: current >= required,
    required,
    current,
    prevWeek,
  };
};

export const getDayGate = (roadmapWeeks, weekIndex, dayIndex) => {
  const weekGate = getWeekGate(roadmapWeeks, weekIndex);
  if (!weekGate.unlocked) {
    return {
      unlocked: false,
      reason: "week_locked",
      weekGate,
    };
  }

  const week = roadmapWeeks?.[weekIndex];
  const day = week?.days?.[dayIndex];
  if (!week || !day) return { unlocked: true };

  if (dayIndex === 0) return { unlocked: true };

  if (isRoadmapDayOverrideUnlocked(day.id)) {
    return { unlocked: true, override: true };
  }

  const prevDay = week.days?.[dayIndex - 1];
  if (!prevDay) return { unlocked: true };

  const required = getDayPointsTarget(week, prevDay);
  const current = getRoadmapDayPoints(prevDay.id);
  return {
    unlocked: current >= required,
    required,
    current,
    prevDay,
  };
};

export const findRoadmapLocationByTaskId = (roadmapWeeks, taskId) => {
  if (!Array.isArray(roadmapWeeks) || !taskId) return null;

  for (let weekIndex = 0; weekIndex < roadmapWeeks.length; weekIndex += 1) {
    const week = roadmapWeeks[weekIndex];
    for (let dayIndex = 0; dayIndex < (week?.days?.length ?? 0); dayIndex += 1) {
      const day = week.days[dayIndex];
      const task = day?.tasks?.find((t) => t.id === taskId);
      if (task) return { weekIndex, dayIndex, week, day, task };
    }
  }
  return null;
};
