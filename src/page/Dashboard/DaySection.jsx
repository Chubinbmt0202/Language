/* eslint-disable react-hooks/refs */
import React, { useRef } from "react";
import { Typography } from "antd";
import TaskCard from "./TaskCard";
import { dashboardStyles as styles } from "./DashboardStyles";

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
  const scrollRef = useRef(null);

  // drag state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const rows = chunkTasks(day.tasks, TASKS_PER_ROW);

  /* ===== WHEEL SCROLL ===== */
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  /* ===== DRAG SCROLL ===== */
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // tốc độ kéo
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div style={{ marginTop: 24 }}>
      {/* HEADER NGÀY */}
      <Title level={5} style={{ marginBottom: 0 }}>
        {day.title}
      </Title>
      <Text type="secondary">{day.focus}</Text>

      {/* TASK ROADMAP */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          marginTop: 16,
          display: "flex",
          gap: 40,
          overflowX: "auto",
          paddingBottom: 8,
          cursor: isDown.current ? "grabbing" : "grab",
          userSelect: "none",
          scrollBehavior: "smooth",

          /* hide scrollbar */
          scrollbarWidth: "none",
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {rows.map((row, rowIdx) => {
          const isReverse = rowIdx % 2 === 1;
          const displayRow = isReverse ? [...row].reverse() : row;

          return (
            <div
              key={rowIdx}
              style={{
                display: "flex",
                alignItems: "center",
                minWidth: "fit-content",
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
                  {idx < displayRow.length - 1 && (
                    <div style={styles.taskConnector} />
                  )}
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
