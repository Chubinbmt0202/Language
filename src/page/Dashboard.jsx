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
} from "antd";
import {
  ThunderboltFilled,
  ClockCircleOutlined,
  PlayCircleFilled,
  FireFilled,
} from "@ant-design/icons";
import { useNavigate, useLocation  } from "react-router-dom";
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

const LanguageDashboard = () => {
  const navigate = useNavigate();
  const weekRefs = useRef([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});
    const [taskProgress, setTaskProgress] = useState(() => loadTaskProgress());
  const location = useLocation();

  const handleChartClick = (state) => {
    if (state && state.activeLabel) {
      const index = detailedRoadmap.findIndex(
        (w) => `Tuần ${w.week}` === state.activeLabel,
      );
      if (index !== -1 && weekRefs.current[index]) {
        weekRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleToggleTask = (dayId, taskIndex) => {
    const key = `${dayId}-${taskIndex}`;
    setCheckedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

    useEffect(() => {
    setTaskProgress(loadTaskProgress());
  }, [location.pathname]);



  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Content>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card bordered={false} style={{ borderRadius: 12 }}>
              <Title level={4}>
                <ThunderboltFilled style={{ color: "#faad14" }} /> Lộ trình
              </Title>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <ComposedChart
                    data={chartData}
                    onClick={handleChartClick}
                    style={{ cursor: "pointer" }}
                  >
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                      domain={[200, 900]}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line
                      type="monotone"
                      dataKey="target"
                      name="Lộ trình"
                      stroke="#8884d8"
                      strokeDasharray="5 5"
                    />
                    <Area
                      type="monotone"
                      dataKey="current"
                      name="Tiến độ"
                      stroke="#00C49F"
                      fill="#00C49F"
                      fillOpacity={0.1}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
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
            <Card title="Thống kê nhanh" style={{ borderRadius: 12, background: "linear-gradient(135deg, #f0f5ff, #ffffff)" }} >
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
