export const WORDS_PER_LEVEL = 5;
export const MAX_LEVEL = 5;

export const findTaskById = (roadmap, taskId) => {
  for (const week of roadmap) {
    for (const day of week.days) {
      const task = day.tasks.find((item) => item.id === taskId);
      if (task) return { task, day, week };
    }
  }
  return null;
};

export const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const splitMeanings = (value) =>
  normalize(value)
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

export const isMeaningCorrect = (input, target) => {
  const inputNormalized = normalize(input);
  if (!inputNormalized) return false;
  const targets = splitMeanings(target);
  if (targets.length === 0) return false;
  return targets.some((t) => t === inputNormalized);
};

