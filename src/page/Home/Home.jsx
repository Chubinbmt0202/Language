/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Card, Typography, List, Select, Space } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  NotificationOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  ScheduleFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";

import QuickStatsCard from "../Dashboard/components/QuickStatsCard.jsx";
import ProgressChartCard from "../Dashboard/components/ProgressChartCard.jsx";
import { detailedRoadmap, chartData } from "../Dashboard/RoadmapData.jsx";

const { Title, Text } = Typography;

// Dữ liệu mẫu: Thống kê số phút học trong tuần
const chartDataMinus = [
  { name: "T2", minutes: 45 },
  { name: "T3", minutes: 90 },
  { name: "T4", minutes: 30 },
  { name: "T5", minutes: 120 },
  { name: "T6", minutes: 60 },
  { name: "T7", minutes: 150 },
  { name: "CN", minutes: 100 },
];

const notificationData = [
  {
    title: "Bảo trì hệ thống",
    description: "Hệ thống sẽ tạm ngưng để nâng cấp từ 00:00 - 02:00 ngày mai.",
    type: "warning",
    time: "2 giờ trước",
  },
  {
    title: "Cập nhật bài học mới",
    description: 'Đã thêm 20 từ vựng chủ đề "Du lịch" vào kho Tiếng Nhật.',
    type: "success",
    time: "5 giờ trước",
  },
  {
    title: "Nhắc nhở học tập",
    description: "Bạn chưa hoàn thành mục tiêu ngày hôm nay. Cố lên nhé!",
    type: "info",
    time: "1 ngày trước",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "warning":
      return <WarningOutlined style={{ fontSize: "24px", color: "#faad14" }} />;
    case "success":
      return (
        <CheckCircleOutlined style={{ fontSize: "24px", color: "#52c41a" }} />
      );
    case "info":
    default:
      return (
        <InfoCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
      );
  }
};

const Home = () => {
  const [displayData, setDisplayData] = useState(chartData);
  const [filterType, setFilterType] = useState("all");

  const handleFilterChange = (value) => {
    setFilterType(value);
  };

  const renderTooltip = (value) => {
    return [`${value} phút`, "Thời gian học"];
  };

  return (
    <div>
      <Row gutter={[24, 24]}>
        {/* --- PHẦN BÊN TRÁI (Chiếm 2/3 màn hình) --- */}
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
                    Chào mừng trở lại!
                  </Title>
                  <Text
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: 16 }}
                  >
                    Hôm nay bạn đã học được{" "}
                    <span style={{ fontWeight: "bold", color: "#fff" }}>
                      45 phút
                    </span>
                    . Cố lên!
                  </Text>
                </div>
              </div>
            </Card>

            {/* 2. Khu vực 2 biểu đồ nằm ngang hàng */}
            {/* Thay thế thẻ div flex cũ bằng Row của Ant Design */}
            <Row gutter={[24, 24]}>
              {/* Cột 1: Biểu đồ Thời gian học tập */}
              <Col xs={24} md={10}>
                <Card
                  // extra={
                  //   <Select
                  //     defaultValue="Hằng tuần"
                  //     style={{ width: 110 }} // Giảm width một chút cho vừa vặn
                  //     options={[
                  //       { value: "Hàng Ngày", label: "Ngày" },
                  //       { value: "Hàng tuần", label: "Tuần" },
                  //       { value: "Hàng tháng", label: "Tháng" },
                  //     ]}
                  //   />
                  // }
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
                        <ScheduleFilled
                          style={{ color: "#f97316", fontSize: 18 }}
                        />
                      </div>
                      <div>
                        <Text strong style={{ fontSize: 16, display: "block" }}>
                          Thời gian học tập
                        </Text>
                      </div>
                    </Space>
                  }
                  style={{ borderRadius: 12, height: "100%" }} // Thêm height 100% để 2 card bằng nhau
                  bodyStyle={{ padding: "24px 12px" }}
                >
                  <div style={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer>
                      <AreaChart data={chartDataMinus}>
                        <defs>
                          <linearGradient
                            id="colorMinutes"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#52c41a"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#52c41a"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          width={40} // Giới hạn chiều rộng trục Y để không bị lẹm
                        />
                        <Tooltip
                          contentStyle={{
                            borderRadius: 8,
                            border: "none",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          }}
                          formatter={renderTooltip}
                        />
                        <Area
                          type="monotone"
                          dataKey="minutes"
                          stroke="#52c41a"
                          fillOpacity={1}
                          fill="url(#colorMinutes)"
                          strokeWidth={3}
                          activeDot={{ r: 6 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
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
                      📈 Biểu đồ thể hiện thời gian học tập.
                    </Text>
                  </div>
                </Card>
              </Col>

              {/* Cột 2: ProgressChartCard */}
              <Col xs={24} md={14}>
                {/* Đảm bảo ProgressChartCard bên trong cũng có style height: 100% hoặc tương tự */}
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

        {/* --- PHẦN BÊN PHẢI (Chiếm 1/3 màn hình) --- */}
        <Col xs={24} lg={8}>
          <QuickStatsCard />
          <Card
            style={{
              marginTop: "24px",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            title={
              <span>
                <NotificationOutlined
                  style={{ marginRight: 8, color: "#1890ff" }}
                />
                Thông báo quan trọng
              </span>
            }
            bordered={false}
          >
            <List
              itemLayout="horizontal"
              dataSource={notificationData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={getIcon(item.type)}
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text strong>{item.title}</Text>
                        <Text
                          type="secondary"
                          style={{ fontSize: "12px", fontWeight: "normal" }}
                        >
                          {item.time}
                        </Text>
                      </div>
                    }
                    description={
                      <Text style={{ color: "#666", fontSize: "13px" }}>
                        {item.description}
                      </Text>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
