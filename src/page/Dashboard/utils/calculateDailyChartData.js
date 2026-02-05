export const calculateDailyChartData = (
  weekNumber,
  roadmap,
  progress,
  globalChartData,
) => {
  const weekIndex = roadmap.findIndex((w) => w.week === weekNumber);
  if (weekIndex === -1) return [];

  const weekData = roadmap[weekIndex];

  const prevTarget = globalChartData[weekNumber - 1]?.target || 200;
  const weekTarget = globalChartData[weekNumber]?.target || prevTarget + 50;
  const range = weekTarget - prevTarget;

  let currentScoreAccumulator = prevTarget;

  return weekData.days.map((day, idx) => {
    const dailyStep = range / 7;
    const targetVal = Math.round(prevTarget + dailyStep * (idx + 1));

    const totalTasks = day.tasks.length;
    const completedTasks = day.tasks.filter(
      (t) => progress[day.id]?.[t.id]?.completed,
    ).length;

    const earnedPoints =
      totalTasks > 0 ? (completedTasks / totalTasks) * dailyStep : 0;
    currentScoreAccumulator += earnedPoints;

    return {
      name: `Ngày ${idx + 1}`,
      fullDate: day.title,
      target: targetVal,
      current: Math.round(currentScoreAccumulator),
      description: day.focus,
    };
  });
};

