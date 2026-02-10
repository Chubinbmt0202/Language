import React, { useEffect, useMemo, useState } from "react";
import { Card, Progress, Space, Tag, Typography } from "antd";
import { FireFilled } from "@ant-design/icons";
import {
  getDailyTargetPoints,
  getStreakDays,
  getTodayPoints,
  getTotalPoints,
  TOTAL_POINTS_TARGET,
} from "../../../util/points";

const { Text } = Typography;

const QuickStatsCard = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [todayPoints, setTodayPoints] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [dailyTarget, setDailyTarget] = useState(getDailyTargetPoints());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const refresh = () => {
      setTotalPoints(getTotalPoints());
      setTodayPoints(getTodayPoints());
      setStreakDays(getStreakDays());
      setDailyTarget(getDailyTargetPoints());
    };

    refresh();

    const onPointsUpdated = () => refresh();
    const onStorage = (event) => {
      if (
        event.key === "exerciseScore" ||
        event.key === "exerciseDailyScores" ||
        event.key === "dailyPointsTarget"
      ) {
        refresh();
      }
    };

    window.addEventListener("points:updated", onPointsUpdated);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("points:updated", onPointsUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const totalPercent = useMemo(() => {
    if (TOTAL_POINTS_TARGET <= 0) return 0;
    return Math.min(
      100,
      Math.round((totalPoints / TOTAL_POINTS_TARGET) * 100),
    );
  }, [totalPoints]);

  const todayPercent = useMemo(() => {
    if (dailyTarget <= 0) return 0;
    return Math.min(100, Math.round((todayPoints / dailyTarget) * 100));
  }, [todayPoints, dailyTarget]);

  return (
    <Card
      title="Thống kê nhanh"
      style={{
        borderRadius: 12,
        background: "linear-gradient(135deg, #f0f5ff, #ffffff)",
      }}
    >
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Progress
            type="dashboard"
            percent={totalPercent}
            strokeColor="#1677ff"
            format={() => (
              <div>
                <Text strong style={{ fontSize: 22 }}>
                  {totalPoints}
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Điểm / {TOTAL_POINTS_TARGET}
                </Text>
              </div>
            )}
          />
        </div>

        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text strong>Hôm nay</Text>
            <Text type="secondary">
              {todayPoints} / {dailyTarget} điểm
            </Text>
          </div>
          <Progress
            percent={todayPercent}
            size="small"
            strokeColor="#52c41a"
            trailColor="#f0f0f0"
            showInfo={false}
            style={{ marginTop: 6 }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space>
            <FireFilled style={{ color: "#fa541c" }} />
            <Text strong>Chuỗi học tập</Text>
          </Space>

          <Tag color="volcano" style={{ fontSize: 14 }}>
            🔥 {streakDays} ngày
          </Tag>
        </div>
      </Space>
    </Card>
  );
};

export default QuickStatsCard;

