import React from "react";
import { Typography, Progress, Tooltip } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { dashboardStyles as styles } from "./DashboardStyles";
import { useNavigate } from "react-router-dom";

const { Text, Paragraph } = Typography;

const DEFAULT_MAX_LEVEL = 10;

const TaskCard = ({ task, progress = 0, tier = 0 }) => {
  const maxLevel = task.maxProgress ?? DEFAULT_MAX_LEVEL;
  const safeProgress = Math.min(progress, maxLevel);
  const percent = (safeProgress / maxLevel) * 100;
  const isDone = safeProgress >= maxLevel;
  const isPrestige = tier > 0;
  const isNotStarted = safeProgress === 0;

  const cardTheme = isDone || isPrestige
    ? { bg: "#fff7e6", border: "#faad14", icon: "#faad14" }
    : isNotStarted
      ? { bg: "#f5f5f5", border: "#ebebeb", icon: "#bfbfbf" }
      : { bg: "#e6f4ff", border: "#85b8ff", icon: "#85b8ff" };
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(task.type === "vocab" ? `/vocab/${task.id}` : `/exercise/${task.id}`)
      }
      style={{
        ...styles.cardItem,
        width: 340,
        flexShrink: 0,
        backgroundColor: cardTheme.bg,
        border: `1px solid ${cardTheme.border}`,
        transition: "all 0.3s ease",
      }}
      className="roadmap-card-hover"
    >
      {/* ICON */}
      <div style={styles.iconBox}>
        <CheckSquareTwoTone
          twoToneColor={cardTheme.icon}
        />
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Paragraph
          strong
          style={{
            marginBottom: 2,
            wordBreak: "break-word",
            textDecoration: isDone ? "line-through" : "none",
            opacity: isDone ? 0.7 : 1,
          }}
          ellipsis={{ rows: 2, tooltip: task.text }}
        >
          {task.text}
        </Paragraph>

        {/* LEVEL TEXT */}
        <Text type="secondary" style={{ fontSize: 12 }}>
          Level {safeProgress}/{maxLevel}
        </Text>

        {/* PROGRESS BAR */}
        <Progress
          percent={percent}
          showInfo={false}
          size="small"
          strokeColor={cardTheme.icon}
          trailColor="#e0e0e0"
          style={{ marginTop: 2 }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
