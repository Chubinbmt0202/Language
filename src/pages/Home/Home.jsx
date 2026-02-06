/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // Import thêm useEffect
import { Row, Col, Card, Typography, List, Select, Space } from "antd";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import {
  NotificationOutlined, WarningOutlined, CheckCircleOutlined, ScheduleFilled, InfoCircleOutlined,
} from "@ant-design/icons";

// Import các component con của bạn
import QuickStatsCard from "../Dashboard/components/QuickStatsCard.jsx";
import ProgressChartCard from "../Dashboard/components/ProgressChartCard.jsx";
import { detailedRoadmap, chartData } from "../Dashboard/RoadmapData.jsx";

// --- IMPORT MỚI ---
import { getWeeklyLearningData, getTodayLearningSeconds } from "../../util/timeTracking.js";
import { useAuth } from "../../util/AuthContext.jsx"; // Để check trạng thái login
// ------------------

const { Title, Text } = Typography;

// ... (Giữ nguyên notificationData và getIcon)

const Home = () => {
  const { user } = useAuth(); // Lấy thông tin user
  const [displayData, setDisplayData] = useState(chartData);
  const [filterType, setFilterType] = useState("all");
  
  // --- STATE MỚI CHO BIỂU ĐỒ THỜI GIAN ---
  const [timeChartData, setTimeChartData] = useState([]); 
  const [todayMinutes, setTodayMinutes] = useState(0); // Để hiển thị số phút banner

  // Hàm load dữ liệu
  const loadTimeData = () => {
     const data = getWeeklyLearningData();
     setTimeChartData(data);
     
     // Cập nhật số phút hôm nay cho Banner
     const seconds = getTodayLearningSeconds();
     setTodayMinutes(Math.round(seconds / 60));
  };

  useEffect(() => {
    // 1. Load dữ liệu khi vào trang
    loadTimeData();

    // 2. Lắng nghe sự kiện cập nhật thời gian (từ TimeTracker chạy ngầm)
    // Để biểu đồ tự nhảy lên khi đang xem trang này
    const handleTimeUpdate = () => {
        loadTimeData();
    };
    window.addEventListener("time:updated", handleTimeUpdate);

    return () => {
        window.removeEventListener("time:updated", handleTimeUpdate);
    };
  }, [user]); // Chạy lại khi user thay đổi (login/logout)
  // ----------------------------------------

  const handleFilterChange = (value) => {
    setFilterType(value);
  };

  const renderTooltip = (value) => {
    return [`${value} phút`, "Thời gian học"];
  };

  return (
    <div>
      <Row gutter={[24, 24]}>
        {/* --- PHẦN BÊN TRÁI --- */}
        <Col xs={24} lg={16}>
          <div className="flex flex-col gap-6">
            {/* 1. Banner */}
            <Card
              style={{
                height: 140,
                background: "linear-gradient(135deg, #1890ff 0%, #096dd9 100%)",
                borderRadius: 12,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(24, 144, 255, 0.2)",
              }}
              bodyStyle={{ width: "100%" }}
            >
              <div className="flex justify-between items-center w-full">
                <div>
                  <Title level={2} style={{ color: "#fff", margin: 0 }}>
                    {user ? `Chào mừng trở lại, ${user.displayName}!` : "Chào mừng trở lại!"}
                  </Title>
                  <Text
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: 16 }}
                  >
                    Hôm nay bạn đã học được{" "}
                    <span style={{ fontWeight: "bold", color: "#fff" }}>
                       {todayMinutes} phút {/* HIỂN THỊ DỮ LIỆU THẬT */}
                    </span>
                    . Cố lên!
                  </Text>
                </div>
              </div>
            </Card>

            <Row gutter={[24, 24]}>
              {/* Cột 1: Biểu đồ Thời gian học tập */}
              <Col xs={24} md={10}>
                <Card
                  title={
                    <Space>
                      <div style={{ padding: 8, background: "#fff7ed", borderRadius: 8, display: "flex" }}>
                        <ScheduleFilled style={{ color: "#f97316", fontSize: 18 }} />
                      </div>
                      <div>
                        <Text strong style={{ fontSize: 16, display: "block" }}>
                          Thời gian học tập
                        </Text>
                      </div>
                    </Space>
                  }
                  style={{ borderRadius: 12, height: "100%" }}
                  bodyStyle={{ padding: "24px 12px" }}
                >
                  <div style={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer>
                      {/* THAY data={chartDataMinus} BẰNG data={timeChartData} */}
                      <AreaChart data={timeChartData}> 
                        <defs>
                          <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#52c41a" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#52c41a" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="name" // Map với key 'name' (T2, T3...) trong hàm getWeeklyLearningData
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          width={40}
                        />
                        <Tooltip
                          contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                          formatter={renderTooltip}
                        />
                        <Area
                          type="monotone"
                          dataKey="minutes" // Map với key 'minutes'
                          stroke="#52c41a"
                          fillOpacity={1}
                          fill="url(#colorMinutes)"
                          strokeWidth={3}
                          activeDot={{ r: 6 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ textAlign: "center", marginTop: 8, padding: "8px 0", borderTop: "1px dashed #f1f5f9" }}>
                    <Text type="secondary" style={{ fontSize: 12, color: "#94a3b8" }}>
                      📈 Biểu đồ thể hiện thời gian học tập 7 ngày qua.
                    </Text>
                  </div>
                </Card>
              </Col>

              {/* ... (Phần ProgressChartCard bên phải giữ nguyên) */}
              <Col xs={24} md={14}>
                <ProgressChartCard
                  filterType={filterType}
                  onFilterChange={handleFilterChange}
                  displayData={displayData}
                  roadmapWeeks={detailedRoadmap}
                />
              </Col>
            </Row>
          </div>
        </Col>

        {/* ... (Phần Sidebar bên phải giữ nguyên) */}
        <Col xs={24} lg={8}>
            <QuickStatsCard />
            {/* ... List Notification ... */}
        </Col>
      </Row>
    </div>
  );
};

export default Home;