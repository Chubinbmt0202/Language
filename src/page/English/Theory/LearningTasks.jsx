import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Card, List, Progress, Tag, Typography } from "antd";
import {
  CheckCircleFilled,
  EditOutlined,
  FormOutlined,
  PlayCircleOutlined,
  ReadOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const STORAGE_PREFIX = "theory_lesson_missions:";

const safeParseJson = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const buildDefaultMissions = ({ showQuiz, hasVideo }) => {
  const missions = [];

  if (hasVideo) {
    missions.push({
      key: "video",
      title: "Xem video bài giảng",
      desc: "Mục tiêu: xem hết video (hoặc tối thiểu 5 phút).",
      icon: <PlayCircleOutlined />,
      points: "+10 điểm",
    });
  }

  missions.push({
    key: "read",
    title: "Đọc nội dung lý thuyết",
    desc: "Tóm tắt 3 ý chính vào ghi chú.",
    icon: <ReadOutlined />,
    points: "+20 điểm",
  });

  if (showQuiz) {
    missions.push({
      key: "quiz",
      title: "Hoàn thành Quiz",
      desc: "Làm quiz và xem lại giải thích.",
      icon: <FormOutlined />,
      points: "+50 điểm",
    });
  }

  missions.push({
    key: "notes",
    title: "Ghi chú & ví dụ",
    desc: "Tự đặt 2 câu ví dụ và ghi lại lỗi hay gặp.",
    icon: <EditOutlined />,
    points: "+5 điểm",
  });

  return missions;
};

const LearningTasks = ({ taskId, lesson }) => {
  const showQuiz = Boolean(lesson?.showQuiz);
  const hasVideo = Boolean(lesson?.videoSrc);

  const missions = useMemo(() => {
    if (Array.isArray(lesson?.missions) && lesson.missions.length > 0) {
      return lesson.missions;
    }
    return buildDefaultMissions({ showQuiz, hasVideo });
  }, [lesson?.missions, showQuiz, hasVideo]);

  const storageKey = taskId ? `${STORAGE_PREFIX}${taskId}` : null;
  const [doneMap, setDoneMap] = useState({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!storageKey) return;
    const stored = safeParseJson(window.localStorage.getItem(storageKey), {});
    setDoneMap(stored);
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!storageKey) return;
    window.localStorage.setItem(storageKey, JSON.stringify(doneMap));
  }, [doneMap, storageKey]);

  const doneCount = missions.filter((m) => Boolean(doneMap[m.key])).length;
  const total = missions.length || 1;
  const percent = Math.round((doneCount / total) * 100);
  const firstUndoneKey = missions.find((m) => !doneMap[m.key])?.key ?? null;

  const toggleDone = (key) => {
    setDoneMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card
      title={<span>🚀 Nhiệm vụ bài học</span>}
      bordered={false}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: 20 }}
    >
      <div style={{ marginBottom: 12 }}>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Tiến độ: {doneCount}/{missions.length}
        </Text>
        <Progress
          percent={percent}
          size="small"
          showInfo={false}
          strokeColor="#1890ff"
          trailColor="#f0f0f0"
          style={{ marginTop: 6 }}
        />
      </div>

      <List
        itemLayout="horizontal"
        dataSource={missions}
        renderItem={(item) => {
          const isDone = Boolean(doneMap[item.key]);
          const isActive = !isDone && item.key === firstUndoneKey;

          return (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="square"
                    size="large"
                    icon={item.icon}
                    style={{
                      backgroundColor: isDone
                        ? "#f6ffed"
                        : isActive
                          ? "#e6f7ff"
                          : "#f5f5f5",
                      color: isDone
                        ? "#52c41a"
                        : isActive
                          ? "#1890ff"
                          : "#d9d9d9",
                      border: "1px solid",
                      borderColor: isDone
                        ? "#b7eb8f"
                        : isActive
                          ? "#91d5ff"
                          : "#f0f0f0",
                    }}
                  />
                }
                title={
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Text
                      strong
                      style={{ color: !isDone && !isActive ? "#bfbfbf" : "inherit" }}
                    >
                      {item.title}
                    </Text>
                  </div>
                }
                description={
                  <div>
                    <div style={{ fontSize: 12, color: "#8c8c8c", marginBottom: 4 }}>
                      {item.desc}
                    </div>

                    {isDone ? (
                      <>
                        <Tag color="success" icon={<CheckCircleFilled />}>
                          Hoàn thành
                        </Tag>
                        <Button size="small" type="text" onClick={() => toggleDone(item.key)}>
                          Hoàn tác
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          type={isActive ? "primary" : "default"}
                          size="small"
                          shape="round"
                          onClick={() => toggleDone(item.key)}
                        >
                          Đánh dấu xong <RightOutlined />
                        </Button>
                        <Tag style={{ marginLeft: 8 }}>{item.points}</Tag>
                      </>
                    )}
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
    </Card>
  );
};

export default LearningTasks;

