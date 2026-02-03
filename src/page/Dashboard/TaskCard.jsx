import React from "react";
import { Typography, Progress } from "antd";
import { CheckSquareTwoTone } from "@ant-design/icons";
import { dashboardStyles as styles } from "./DashboardStyles";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const MAX_LEVEL = 10;

const TaskCard = ({ task }) => {
  const percent = (task.progress / MAX_LEVEL) * 100;
  const isDone = task.progress === MAX_LEVEL;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/exercise/${task.id}`)}
      style={{
        ...styles.cardItem,
        width: 260,
        flexShrink: 0,
        backgroundColor: isDone ? "#fff7e6" : "#e6f4ff",
        border: `1px solid ${isDone ? "#faad14" : "#85b8ff"}`,
        transition: "all 0.3s ease",
      }}
      className="roadmap-card-hover"
    >
      {/* ICON */}
      <div style={styles.iconBox}>
        <CheckSquareTwoTone
          twoToneColor={isDone ? "#faad14" : "#85b8ff"}
        />
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Text
          strong
          style={{
            display: "block",
            textDecoration: isDone ? "line-through" : "none",
            opacity: isDone ? 0.7 : 1,
          }}
          ellipsis
        >
          {task.text}
        </Text>

        {/* LEVEL TEXT */}
        <Text type="secondary" style={{ fontSize: 12 }}>
          Level {task.progress}/{MAX_LEVEL}
        </Text>

        {/* PROGRESS BAR */}
        <Progress
          percent={percent}
          showInfo={false}
          size="small"
          strokeColor={isDone ? "#faad14" : "#85b8ff"}
          trailColor="#f0f0f0"
          style={{ marginTop: 6 }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
