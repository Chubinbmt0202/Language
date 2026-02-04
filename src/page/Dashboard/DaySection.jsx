import React from "react";
import { Typography } from "antd";
import TaskCard from "./TaskCard";

const { Title, Text } = Typography;
const TASKS_PER_ROW = 2;

const chunkTasks = (tasks, size) => {
  const result = [];
  for (let i = 0; i < tasks.length; i += size) {
    result.push(tasks.slice(i, i + size));
  }
  return result;
};

const DaySection = ({ day, checkedTasks, taskProgress }) => {
  const rows = chunkTasks(day.tasks, TASKS_PER_ROW);

  return (
    <div style={{ marginTop: 24 }}>
      {/* HEADER NGAY */}
      <Title level={5} style={{ marginBottom: 0 }}>
        {day.title}
      </Title>
      <Text type="secondary">{day.focus}</Text>

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
