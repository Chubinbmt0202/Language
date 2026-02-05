import React, { useMemo } from "react";
import { Button, Space, Tag, Typography } from "antd";
import TaskCard from "./TaskCard";
import { getDayGate, getWeekGate, getDayPointsTarget, getWeekPointsTarget } from "../../util/roadmapAccess";

const { Title, Text } = Typography;
const TASKS_PER_ROW = 2;

const chunkTasks = (tasks, size) => {
  const result = [];
  for (let i = 0; i < tasks.length; i += size) {
    result.push(tasks.slice(i, i + size));
  }
  return result;
};

const DaySection = ({
  day,
  dayIndex,
  week,
  weekIndex,
  roadmapWeeks,
  checkedTasks,
  taskProgress,
  onRequestUnlockTest,
}) => {
  const rows = chunkTasks(day.tasks, TASKS_PER_ROW);
  const weekGate = getWeekGate(roadmapWeeks, weekIndex);
  const dayGate = getDayGate(roadmapWeeks, weekIndex, dayIndex);

  const isLocked = !dayGate.unlocked;
  const isLockedByWeek = isLocked && dayGate.reason === "week_locked";

  const disabledReason = useMemo(() => {
    if (!isLocked) return "";

    if (isLockedByWeek) {
      const prevWeekName = weekGate.prevWeek?.name ?? `Tuần ${weekGate.prevWeek?.week ?? ""}`;
      const required = weekGate.required ?? getWeekPointsTarget(weekGate.prevWeek);
      const current = weekGate.current ?? 0;
      return `Chưa mở khóa tuần. Cần ${required} điểm của ${prevWeekName} (hiện tại ${current}).`;
    }

    const prevDayTitle = dayGate.prevDay?.title ?? "ngày trước";
    const required = dayGate.required ?? getDayPointsTarget(week, dayGate.prevDay);
    const current = dayGate.current ?? 0;
    return `Chưa mở khóa ngày. Cần ${required} điểm của ${prevDayTitle} (hiện tại ${current}).`;
  }, [isLocked, isLockedByWeek, dayGate, weekGate, week]);

  return (
    <div style={{ marginTop: 24 }}>
      {/* HEADER NGAY */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <Title level={5} style={{ marginBottom: 0 }}>
            {day.title}{" "}
            {isLocked && (
              <Tag color="red" style={{ marginLeft: 8 }}>
                Locked
              </Tag>
            )}
          </Title>
          <Text type="secondary">{day.focus}</Text>
          {isLocked && (
            <div style={{ marginTop: 6 }}>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {disabledReason}
              </Text>
            </div>
          )}
        </div>

        {isLocked && (
          <Space>
            <Button
              size="small"
              type="primary"
              onClick={() =>
                onRequestUnlockTest?.({
                  scope: isLockedByWeek ? "week" : "day",
                  weekIndex,
                  dayIndex,
                })
              }
            >
              Làm test mở khóa
            </Button>
          </Space>
        )}
      </div>

      {/* TASK ROADMAP */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          paddingBottom: 8,
        }}
      >
        {rows.map((row, rowIdx) => {
          const isReverse = rowIdx % 2 === 1;
          const displayRow = isReverse ? [...row].reverse() : row;

          return (
            <div
              key={rowIdx}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
              }}
            >
              {displayRow.map((task, idx) => (
                <React.Fragment key={task.id}>
                  <TaskCard
                    task={task}
                    progress={taskProgress?.[task.id]?.progress ?? 0}
                    tier={taskProgress?.[task.id]?.tier ?? 0}
                    disabled={isLocked}
                    disabledReason={disabledReason}
                    checked={
                      checkedTasks?.[
                        `${day.id}-${rowIdx * TASKS_PER_ROW + idx}`
                      ]
                    }
                  />
                </React.Fragment>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DaySection;
