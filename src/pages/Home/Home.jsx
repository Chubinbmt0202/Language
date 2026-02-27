import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Progress, Button, Space, Tag } from "antd";
import {
  FireFilled,
  RightOutlined,
  ClockCircleFilled,
  CheckCircleFilled,
  BookFilled,
  SoundFilled,
  HighlightFilled,
  StarFilled,
  PlayCircleFilled,
  AudioFilled,
  ReadFilled,
} from "@ant-design/icons";

// Import utilities
import { useAuth } from "@/app/providers/AuthContext";
import { getTodayLearningSeconds } from "@/shared/utils/storage/timeTracking";

const { Title, Text } = Typography;

const Home = () => {
  const { user } = useAuth();
  const [todayMinutes, setTodayMinutes] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const seconds = getTodayLearningSeconds();
      setTodayMinutes(Math.round(seconds / 60));
    };

    handleTimeUpdate(); // initial load
    window.addEventListener("time:updated", handleTimeUpdate);

    return () => {
      window.removeEventListener("time:updated", handleTimeUpdate);
    };
  }, [user]);

  return (
    <div style={{ paddingBottom: 24, maxWidth: 1440, margin: "0 auto" }}>
      {/* 1. TOP BANNER */}
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
          borderRadius: 20,
          padding: "32px 40px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <Title level={1} style={{ color: "#fff", margin: "0 0 8px 0", fontWeight: 800 }}>
            Welcome back, {user ? user.displayName?.split(" ")[0] || "Minh" : "Minh"}!
          </Title>
          <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: 16 }}>
            Keep pushing! You are on track for your target.
          </Text>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "16px 24px",
            borderRadius: 16,
            minWidth: 300,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
            <span>Target: IELTS 7.5</span>
            <span>45% Complete</span>
          </div>
          <Progress percent={45} showInfo={false} strokeColor="#ffffff" trailColor="rgba(255,255,255,0.3)" size={["100%", 8]} style={{ margin: 0 }} />
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {/* LEFT COLUMN */}
        <Col xs={24} lg={16}>
          {/* TODAY'S LESSON */}
          <Card
            bodyStyle={{ padding: 0 }}
            style={{ borderRadius: 20, overflow: "hidden", marginBottom: 24, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
          >
            <Row>
              <Col xs={24} md={10} style={{ background: "#e8dcd0", padding: 24, display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ background: "white", padding: "4px 12px", borderRadius: 20, color: "#2563eb", fontWeight: "bold", fontSize: 13, display: "inline-flex", alignItems: "center", alignSelf: "flex-start", zIndex: 1 }}>
                  <SoundFilled style={{ marginRight: 6 }} /> Listening
                </div>
                {/* Illustration Placeholder */}
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 180 }}>
                  <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 120, color: "rgba(0,0,0,0.05)" }}>
                    <BookFilled />
                  </div>
                </div>
              </Col>
              <Col xs={24} md={14} style={{ padding: "32px" }}>
                <Space style={{ color: "#64748b", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
                  <span><ClockCircleFilled style={{ marginRight: 4 }} /> 15 mins</span>
                  <span>•</span>
                  <span>Map Labeling</span>
                </Space>
                <Title level={2} style={{ margin: "0 0 16px 0", fontWeight: 800, color: "#0f172a" }}>
                  Today's Lesson: Map Labeling Strategy
                </Title>
                <Text style={{ color: "#475569", fontSize: 16, display: "block", marginBottom: 32, lineHeight: 1.6 }}>
                  Master the art of following directions and labeling maps in IELTS Listening Part 2.
                </Text>
                <Space size={16}>
                  <Button type="primary" size="large" style={{ borderRadius: 12, fontWeight: 700, padding: "0 24px", background: "#2563eb", height: 44 }}>
                    Start Lesson <RightOutlined style={{ fontSize: 12 }} />
                  </Button>
                  <Button size="large" style={{ borderRadius: 12, fontWeight: 600, padding: "0 24px", height: 44, color: "#0f172a", borderColor: "#cbd5e1" }}>
                    Details
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>

          {/* YOUR DAILY PROGRESS */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
                Your Daily Progress
              </div>
              <div style={{ fontSize: 16, color: "#64748b" }}>
                Keep it up! You're almost at your daily target.
              </div>
            </div>

            <Row gutter={[20, 20]}>
              {/* Study Time Card */}
              <Col xs={24} md={8}>
                <Card style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }} bodyStyle={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "14px", background: "#eff6ff", display: "flex", justifyContent: "center", alignItems: "center", color: "#2563eb", fontSize: 22 }}>
                      <ClockCircleFilled />
                    </div>
                    <div style={{ background: "#dcfce7", color: "#16a34a", padding: "4px 10px", borderRadius: 20, fontWeight: 800, fontSize: 13 }}>
                      +5%
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Study Time
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 20, lineHeight: 1, display: "flex", alignItems: "baseline", gap: "8px" }}>
                    {todayMinutes} <span style={{ fontSize: 16, fontWeight: 500, color: "#64748b" }}>/ 60 mins</span>
                  </div>
                  <Progress percent={Math.min((todayMinutes / 60) * 100, 100)} showInfo={false} strokeColor="#2563eb" trailColor="#f1f5f9" size={["100%", 8]} style={{ margin: 0 }} />
                </Card>
              </Col>

              {/* Exercises Card */}
              <Col xs={24} md={8}>
                <Card style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }} bodyStyle={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "14px", background: "#f0fdf4", display: "flex", justifyContent: "center", alignItems: "center", color: "#16a34a", fontSize: 22 }}>
                      <CheckCircleFilled />
                    </div>
                    <div style={{ background: "#dcfce7", color: "#16a34a", padding: "4px 10px", borderRadius: 20, fontWeight: 800, fontSize: 13 }}>
                      +2%
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Exercises
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 20, lineHeight: 1, display: "flex", alignItems: "baseline", gap: "8px" }}>
                    3 <span style={{ fontSize: 16, fontWeight: 500, color: "#64748b" }}>/ 5 tasks</span>
                  </div>
                  <Progress percent={60} showInfo={false} strokeColor="#10b981" trailColor="#f1f5f9" size={["100%", 8]} style={{ margin: 0 }} />
                </Card>
              </Col>

              {/* Vocabulary Card */}
              <Col xs={24} md={8}>
                <Card style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }} bodyStyle={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "14px", background: "#faf5ff", display: "flex", justifyContent: "center", alignItems: "center", color: "#a855f7", fontSize: 22 }}>
                      <ReadFilled />
                    </div>
                    <div style={{ background: "#f3e8ff", color: "#9333ea", padding: "4px 10px", borderRadius: 20, fontWeight: 800, fontSize: 13 }}>
                      +8%
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontWeight: 700, fontSize: 13, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Vocabulary
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 20, lineHeight: 1, display: "flex", alignItems: "baseline", gap: "8px" }}>
                    12 <span style={{ fontSize: 16, fontWeight: 500, color: "#64748b" }}>/ 20 words</span>
                  </div>
                  <Progress percent={60} showInfo={false} strokeColor="#a855f7" trailColor="#f1f5f9" size={["100%", 8]} style={{ margin: 0 }} />
                </Card>
              </Col>
            </Row>
          </div>

          {/* RECOMMENDED FOR YOU */}
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8, paddingBottom: 8 }}>
                <StarFilled style={{ color: "#2563eb", fontSize: 20 }} />
                <span style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}>Recommended for You</span>
              </div>
            }
            style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
            headStyle={{ borderBottom: "none", padding: "16px 24px 0" }}
            bodyStyle={{ padding: "16px 24px 24px" }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Card bodyStyle={{ padding: 0 }} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #f1f5f9" }}>
                  <div style={{ height: 140, background: "#064e3b" }}></div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4, color: "#0f172a" }}>Advanced Grammar</div>
                    <div style={{ color: "#64748b", fontSize: 14, fontWeight: 500 }}>Conditional Sentences</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bodyStyle={{ padding: 0 }} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #f1f5f9" }}>
                  <div style={{ height: 140, background: "#fee2e2", display: "flex", justifyContent: "center", alignItems: "center", color: "#ef4444", fontSize: 48 }}><PlayCircleFilled /></div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4, color: "#0f172a" }}>Speaking Mock Test</div>
                    <div style={{ color: "#64748b", fontSize: 14, fontWeight: 500 }}>Part 1: Hometown</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bodyStyle={{ padding: 0 }} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #f1f5f9" }}>
                  <div style={{ height: 140, background: "#1e293b", display: "flex", padding: 20, color: "white" }}>
                    <div style={{ fontFamily: "monospace", opacity: 0.5 }}>{"< code >"}</div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4, color: "#0f172a" }}>Writing Task 1</div>
                    <div style={{ color: "#64748b", fontSize: 14, fontWeight: 500 }}>Describing Trends</div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* RIGHT COLUMN */}
        <Col xs={24} lg={8}>
          {/* CURRENT STREAK CARD */}
          <div
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
              borderRadius: 20,
              padding: "24px",
              color: "white",
              position: "relative",
              marginBottom: 24,
              boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.3)",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.9, marginBottom: 4, textTransform: "none", letterSpacing: "0.5px" }}>
                Current Streak
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
                12 Days
              </div>
              <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5, maxWidth: "80%" }}>
                You're on fire! Keep learning to maintain your streak.
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 32,
                zIndex: 1
              }}
            >
              <FireFilled style={{ color: "white" }} />
            </div>
          </div>

          {/* RECENT ACTIVITY CARD */}
          <Card
            title={<span style={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}>Recent Activity</span>}
            style={{ borderRadius: 20, border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}
            headStyle={{ borderBottom: "none", padding: "24px 24px 0" }}
            bodyStyle={{ padding: "24px" }}
          >
            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div style={{ position: "absolute", left: 19, top: 40, bottom: 40, width: 2, background: "#f1f5f9", zIndex: 1 }}></div>

              {/* Item 1 */}
              <div style={{ display: "flex", marginBottom: 32, position: "relative", zIndex: 2 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f3e8ff", display: "flex", justifyContent: "center", alignItems: "center", color: "#9333ea", fontSize: 18, zIndex: 2, marginRight: 16, flexShrink: 0 }}>
                  <BookFilled />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15, lineHeight: 1.4 }}>
                      Reading: <br />True/False/NG
                    </div>
                    <div style={{ background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: 6, fontWeight: 700, fontSize: 12 }}>
                      8.0
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontSize: 13, fontWeight: 500 }}>
                    Practice Test • 2 hours ago
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: "flex", marginBottom: 32, position: "relative", zIndex: 2 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e0f2fe", display: "flex", justifyContent: "center", alignItems: "center", color: "#0284c7", fontSize: 18, zIndex: 2, marginRight: 16, flexShrink: 0 }}>
                  <SoundFilled />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15, lineHeight: 1.4 }}>
                      Listening: Part 1
                    </div>
                    <div style={{ background: "#ffedd5", color: "#c2410c", padding: "2px 8px", borderRadius: 6, fontWeight: 700, fontSize: 12 }}>
                      6.5
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontSize: 13, fontWeight: 500 }}>
                    Mock Test • Yesterday
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: "flex", marginBottom: 32, position: "relative", zIndex: 2 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ccfbf1", display: "flex", justifyContent: "center", alignItems: "center", color: "#0d9488", fontSize: 18, zIndex: 2, marginRight: 16, flexShrink: 0 }}>
                  <ReadFilled />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15, lineHeight: 1.4 }}>
                      Vocab:<br />Environment
                    </div>
                    <div style={{ background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: 6, fontWeight: 700, fontSize: 12 }}>
                      100%
                    </div>
                  </div>
                  <div style={{ color: "#64748b", fontSize: 13, fontWeight: 500 }}>
                    Flashcards • Yesterday
                  </div>
                </div>
              </div>
            </div>

            <Button block size="large" style={{ borderRadius: 12, fontWeight: 600, height: 44, color: "#475569", borderColor: "#cbd5e1" }}>
              View All Activity
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;