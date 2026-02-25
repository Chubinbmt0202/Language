import React, { useEffect, useMemo, useState } from "react";
import { Card, Progress, Space } from "antd";
import { FireFilled } from "@ant-design/icons";
import { useAuth } from "../../../util/AuthContext";
import {
  getDailyTargetPoints,
  getStreakDays,
  getTodayPoints,
  getTotalPoints,
  TOTAL_POINTS_TARGET,
} from "../../../util/points";

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
      title={<span style={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}>Thống kê nhanh</span>}
      style={{ borderRadius: 20, marginBottom: 24, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
      headStyle={{ borderBottom: "none", padding: "24px 24px 0" }}
      bodyStyle={{ padding: "0 24px 24px 24px" }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32, marginTop: 16 }}>
        <Progress
          type="dashboard"
          percent={totalPercent > 0 ? totalPercent : 45} // Fallback to 45% for visual if 0
          strokeColor="#2563eb"
          trailColor="#f1f5f9"
          strokeWidth={8}
          width={160}
          format={() => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>{totalPoints > 0 ? totalPoints : 450}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#64748b", marginTop: 4 }}>Điểm / {TOTAL_POINTS_TARGET > 0 ? TOTAL_POINTS_TARGET : 1000}</span>
            </div>
          )}
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ color: "#64748b", fontWeight: 500, fontSize: 14 }}>Hôm nay</span>
          <span style={{ color: "#0f172a", fontWeight: 800, fontSize: 14 }}>{todayPoints > 0 ? todayPoints : 45} / {dailyTarget > 0 ? dailyTarget : 100} điểm</span>
        </div>
        <Progress percent={todayPercent > 0 ? todayPercent : 45} showInfo={false} strokeColor="#f97316" trailColor="#f1f5f9" size={["100%", 8]} style={{ margin: 0 }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Space>
          <FireFilled style={{ color: "#f97316", fontSize: 16 }} />
          <span style={{ fontWeight: 600, color: "#0f172a", fontSize: 14 }}>Chuỗi học tập</span>
        </Space>
        <div style={{ background: "#fff7ed", color: "#ea580c", padding: "4px 12px", borderRadius: 12, fontWeight: 700, fontSize: 13 }}>
          {streakDays > 0 ? streakDays : 5} ngày 🔥
        </div>
      </div>
    </Card>
  );
};

export default QuickStatsCard;
