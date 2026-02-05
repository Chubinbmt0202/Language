/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Typography,
  Tag,
  Progress,
  Drawer,
  Space,
  Select,
} from "antd";
import {
  ThunderboltFilled,
  ClockCircleOutlined,
  ArrowLeftOutlined,
  PlayCircleFilled,
  FireFilled,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { detailedRoadmap, chartData } from "../page/Dashboard/RoadmapData";
import DaySection from "./Dashboard/DaySection";
import { loadTaskProgress } from "../util/taskProgress";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const calculateDailyChartData = (
  weekNumber,
  roadmap,
  progress,
  globalChartData,
) => {
  // Tìm dữ liệu của tuần được chọn
  const weekIndex = roadmap.findIndex((w) => w.week === weekNumber);
  if (weekIndex === -1) return [];

  const weekData = roadmap[weekIndex];

  // Xác định điểm bắt đầu và kết thúc của tuần dựa trên chartData tổng
  // chartData thường có cấu trúc: index 0 = Start, index 1 = Tuần 1...
  const prevTarget = globalChartData[weekNumber - 1]?.target || 200; // Điểm đầu tuần
  const weekTarget = globalChartData[weekNumber]?.target || prevTarget + 50; // Điểm cuối tuần
  const range = weekTarget - prevTarget; // Tổng điểm cần đạt trong tuần (Gap)

  let currentScoreAccumulator = prevTarget; // Biến tích lũy điểm thực tế

  // Map qua từng ngày trong tuần để tạo dữ liệu vẽ biểu đồ
  return weekData.days.map((day, idx) => {
    // A. Tính đường Target (Tăng đều theo ngày)
    const dailyStep = range / 7;
    const targetVal = Math.round(prevTarget + dailyStep * (idx + 1));

    // B. Tính đường Current (Dựa trên task đã làm)
    const totalTasks = day.tasks.length;
    // Đếm số task đã hoàn thành trong ngày dựa vào ID và progress load từ localStorage
    const completedTasks = day.tasks.filter(
      (t) => progress[day.id]?.[t.id]?.completed,
    ).length;

    // Nếu ngày đó có task, tính điểm dựa trên % hoàn thành.
    // Nếu chưa làm gì thì cộng 0.
    const earnedPoints =
      totalTasks > 0 ? (completedTasks / totalTasks) * dailyStep : 0;
    currentScoreAccumulator += earnedPoints;

    return {
      name: `Ngày ${idx + 1}`, // Trục X
      fullDate: day.title, // Dùng cho Tooltip
      target: targetVal, // Trục Y (Đường đứt đoạn)
      current: Math.round(currentScoreAccumulator), // Trục Y (Vùng màu xanh)
      description: day.focus,
    };
  });
};

const LanguageDashboard = () => {
  const navigate = useNavigate();
  const weekRefs = useRef([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [taskProgress, setTaskProgress] = useState(() => loadTaskProgress());
  const location = useLocation();

  // --- State quản lý Biểu đồ (MỚI) ---
  const [chartView, setChartView] = useState("overview"); // Chế độ: 'overview' (Tuần) hoặc 'detail' (Ngày)
  const [displayData, setDisplayData] = useState(chartData); // Dữ liệu đang hiển thị trên biểu đồ
  const [activeWeekInfo, setActiveWeekInfo] = useState(null); // Thông tin tuần đang xem chi tiết
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    setTaskProgress(loadTaskProgress());
  }, [location.pathname]);

  // --- EFFECT QUAN TRỌNG: CẬP NHẬT BIỂU ĐỒ KHI FILTER HOẶC TIẾN ĐỘ THAY ĐỔI ---
  useEffect(() => {
    if (filterType === "all") {
      // Nếu chọn tất cả -> Hiện dữ liệu gốc
      setDisplayData(chartData);
    } else {
      // Nếu chọn tuần cụ thể -> Tính toán dữ liệu ngày
      const dailyData = calculateDailyChartData(
        filterType,
        detailedRoadmap,
        taskProgress,
        chartData,
      );
      setDisplayData(dailyData);
    }
  }, [filterType, taskProgress]); // Chạy lại khi đổi filter hoặc tick xong 1 task

  // --- XỬ LÝ KHI CHỌN DROPDOWN ---
  const handleFilterChange = (value) => {
    setFilterType(value);
  };

  const handleToggleTask = (dayId, taskIndex) => {
    // Logic placeholder (bạn cần đảm bảo cập nhật vào localStorage và gọi setTaskProgress)
    const key = `${dayId}-${taskIndex}`;
    setCheckedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
    // Lưu ý: Trong code thực tế của bạn, hàm này cần trigger việc cập nhật `taskProgress`
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Content>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card
              bordered={false}
              style={{
                borderRadius: 16,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              }} // Thêm bóng cho Card
              title={
                <Space>
                  <div
                    style={{
                      padding: 8,
                      background: "#fff7ed",
                      borderRadius: 8,
                      display: "flex",
                    }}
                  >
                    <ThunderboltFilled
                      style={{ color: "#f97316", fontSize: 18 }}
                    />
                  </div>
                  <div>
                    <Text strong style={{ fontSize: 16, display: "block" }}>
                      Tiến độ học tập
                    </Text>
                    <Text
                      type="secondary"
                      style={{ fontSize: 12, fontWeight: 400 }}
                    >
                      Theo dõi hiệu suất hàng tuần
                    </Text>
                  </div>
                </Space>
              }
              extra={
                <Select
                  defaultValue="all"
                  style={{ width: 220 }}
                  onChange={handleFilterChange}
                  value={filterType}
                  bordered={false} // Bỏ viền input cho sạch
                  className="custom-select" // Có thể style thêm CSS nếu muốn
                  dropdownStyle={{ borderRadius: 12, padding: 8 }}
                >
                  <Option value="all">📊 Toàn bộ lộ trình</Option>
                  {detailedRoadmap.map((week) => (
                    <Option key={week.week} value={week.week}>
                      📅 {week.name.split(":")[0]}
                    </Option>
                  ))}
                </Select>
              }
            >
              <div style={{ width: "100%", height: 320, marginTop: 10 }}>
                <ResponsiveContainer>
                  <ComposedChart
                    data={displayData}
                    margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
                  >
                    {/* Khai báo Gradient và Shadow */}
                    <defs>
                      {/* Gradient cho vùng "Đã đạt được" (Xanh dương hiện đại) */}
                      <linearGradient
                        id="colorCurrent"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3b82f6"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3b82f6"
                          stopOpacity={0}
                        />
                      </linearGradient>

                      {/* Shadow cho đường line để nó nổi lên */}
                      <filter id="shadow" height="200%">
                        <feDropShadow
                          dx="0"
                          dy="3"
                          stdDeviation="3"
                          floodColor="#3b82f6"
                          floodOpacity="0.5"
                        />
                      </filter>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9" // Màu lưới rất nhạt
                    />

                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                      dy={10} // Đẩy chữ xuống xíu
                    />

                    <YAxis
                      domain={["auto", "auto"]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                    />

                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{
                        stroke: "#cbd5e1",
                        strokeWidth: 1,
                        strokeDasharray: "4 4",
                      }}
                    />

                    <Legend
                      verticalAlign="top"
                      height={36}
                      iconType="circle"
                      wrapperStyle={{ paddingBottom: 20 }}
                    />

                    {/* 1. Đường Mục Tiêu (Target) - Màu Cam Vàng, nét đứt */}
                    <Line
                      type="monotone"
                      dataKey="target"
                      name="Mục tiêu"
                      stroke="#f59e0b" // Màu cam vàng
                      strokeDasharray="6 6"
                      strokeWidth={2}
                      dot={false} // Ẩn dot mặc định cho đỡ rối
                      activeDot={{
                        r: 6,
                        fill: "#f59e0b",
                        stroke: "#fff",
                        strokeWidth: 2,
                      }} // Chỉ hiện khi hover
                    />

                    {/* 2. Đường Thực Tế (Current) - Màu Xanh Dương, có vùng phủ */}
                    <Area
                      type="monotone"
                      dataKey="current"
                      name="Điểm đạt được"
                      stroke="#3b82f6" // Màu viền xanh dương
                      strokeWidth={3}
                      fill="url(#colorCurrent)" // Dùng gradient đã định nghĩa ở trên
                      fillOpacity={1}
                      filter="url(#shadow)" // Thêm đổ bóng cho đường viền
                      dot={
                        filterType !== "all"
                          ? {
                              r: 4,
                              fill: "#fff",
                              stroke: "#3b82f6",
                              strokeWidth: 2,
                            }
                          : false
                      }
                      activeDot={{
                        r: 7,
                        fill: "#3b82f6",
                        stroke: "#fff",
                        strokeWidth: 3,
                      }}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Chú thích bottom */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  padding: "8px 0",
                  borderTop: "1px dashed #f1f5f9",
                }}
              >
                <Text
                  type="secondary"
                  style={{ fontSize: 12, color: "#94a3b8" }}
                >
                  {filterType === "all"
                    ? "📈 Biểu đồ thể hiện lộ trình tăng trưởng dài hạn."
                    : `⚡ Chi tiết hiệu suất học tập trong Tuần ${filterType}.`}
                </Text>
              </div>
            </Card>

            {detailedRoadmap.map((week, wIdx) => (
              <div
                key={week.week}
                ref={(el) => (weekRefs.current[wIdx] = el)}
                style={{
                  marginTop: 32,
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                {/* TÊN TUẦN */}
                <Title level={3}>{week.name}</Title>
                <Text type="secondary">{week.description}</Text>

                {/* DANH SÁCH NGÀY */}
                {week.days.map((day) => (
                  <DaySection
                    key={day.id}
                    day={day}
                    taskProgress={taskProgress}
                    onToggleTask={handleToggleTask}
                  />
                ))}
              </div>
            ))}
          </Col>

          {/* cột phải */}
          <Col xs={24} lg={8}>
            <Card
              title="Thống kê nhanh"
              style={{
                borderRadius: 12,
                background: "linear-gradient(135deg, #f0f5ff, #ffffff)",
              }}
            >
              <Space direction="vertical" size={16} style={{ width: "100%" }}>
                {/* SCORE */}
                <div style={{ textAlign: "center" }}>
                  <Progress
                    type="dashboard"
                    percent={70}
                    strokeColor="#1677ff"
                    format={() => (
                      <div>
                        <Text strong style={{ fontSize: 22 }}>
                          350
                        </Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          điểm
                        </Text>
                      </div>
                    )}
                  />
                </div>

                {/* STREAK */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Space>
                    <FireFilled style={{ color: "#fa541c" }} />
                    <Text strong>Chuỗi học</Text>
                  </Space>

                  <Tag color="volcano" style={{ fontSize: 14 }}>
                    🔥 5 ngày
                  </Tag>
                </div>
              </Space>
            </Card>
            <Card
              bordered={false}
              style={{
                borderRadius: 12,
                marginTop: 24,
                marginBottom: 24,
                background: "linear-gradient(135deg, #f0f5ff, #ffffff)",
              }}
            >
              <Space direction="vertical" size={12} style={{ width: "100%" }}>
                {/* HEADER */}
                <div>
                  <Title level={4} style={{ marginBottom: 4 }}>
                    🎯 Hôm nay học gì?
                  </Title>
                  <Text type="secondary">Tiếp tục từ nơi bạn đang dở</Text>
                </div>

                {/* CONTENT */}
                <div>
                  <Text strong style={{ fontSize: 16 }}>
                    Ngày 2 – Từ vựng cơ bản
                  </Text>
                  <div style={{ marginTop: 4 }}>
                    <Tag color="blue">2 / 4 tasks</Tag>
                    <Tag icon={<ClockCircleOutlined />} color="default">
                      ~15 phút
                    </Tag>
                  </div>
                </div>

                {/* PROGRESS */}
                <Progress percent={50} strokeColor="#1677ff" />

                {/* CTA */}
                <Button
                  type="primary"
                  icon={<PlayCircleFilled />}
                  size="large"
                  block
                >
                  Tiếp tục học
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </Content>

      <Drawer
        title={selectedDay?.title}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width={400}
      >
        {/* Render Task List here (Giống như code cũ của bạn) */}
      </Drawer>
    </Layout>
  );
};

export default LanguageDashboard;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "12px 16px",
          border: "none",
          borderRadius: "12px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", // Bóng đổ mềm
          minWidth: "180px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "12px",
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {payload[0].payload.fullDate || label}
        </p>

        {/* Dòng Target */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#f59e0b",
              marginRight: 8,
            }}
          ></div>
          <span style={{ fontSize: "13px", color: "#334155" }}>Mục tiêu:</span>
          <span
            style={{ marginLeft: "auto", fontWeight: "bold", color: "#f59e0b" }}
          >
            {payload[0].value}
          </span>
        </div>

        {/* Dòng Current */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
              marginRight: 8,
            }}
          ></div>
          <span style={{ fontSize: "13px", color: "#334155" }}>Đạt được:</span>
          <span
            style={{ marginLeft: "auto", fontWeight: "bold", color: "#3b82f6" }}
          >
            {payload[1]?.value}
          </span>
        </div>

        {/* Focus task description (nếu có) */}
        {payload[0].payload.description && (
          <div
            style={{
              marginTop: 8,
              paddingTop: 8,
              borderTop: "1px solid #f1f5f9",
            }}
          >
            <Text
              type="secondary"
              style={{ fontSize: 11, fontStyle: "italic" }}
            >
              Focus: {payload[0].payload.description}
            </Text>
          </div>
        )}
      </div>
    );
  }
  return null;
};
