/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Typography, Drawer } from "antd";
import { useLocation } from "react-router-dom";
import { detailedRoadmap, chartData } from "./Dashboard/RoadmapData";
import DaySection from "./Dashboard/DaySection";
import { loadTaskProgress } from "../util/taskProgress";
import ProgressChartCard from "./Dashboard/components/ProgressChartCard";
import QuickStatsCard from "./Dashboard/components/QuickStatsCard";
import TodaysLearningCard from "./Dashboard/components/TodaysLearningCard";
import { calculateDailyChartData } from "./Dashboard/utils/calculateDailyChartData";

const { Content } = Layout;
const { Title, Text } = Typography;

const LanguageDashboard = () => {
  const weekRefs = useRef([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [taskProgress, setTaskProgress] = useState(() => loadTaskProgress());
  const location = useLocation();

  const [displayData, setDisplayData] = useState(chartData);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    setTaskProgress(loadTaskProgress());
  }, [location.pathname]);

  useEffect(() => {
    if (filterType === "all") {
      setDisplayData(chartData);
      return;
    }

    const dailyData = calculateDailyChartData(
      filterType,
      detailedRoadmap,
      taskProgress,
      chartData,
    );
    setDisplayData(dailyData);
  }, [filterType, taskProgress]);

  const handleFilterChange = (value) => {
    setFilterType(value);
  };

  const handleToggleTask = (dayId, taskIndex) => {
    const key = `${dayId}-${taskIndex}`;
    setCheckedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
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
            <ProgressChartCard
              filterType={filterType}
              onFilterChange={handleFilterChange}
              displayData={displayData}
              roadmapWeeks={detailedRoadmap}
            />

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
                <Title level={3}>{week.name}</Title>
                <Text type="secondary">{week.description}</Text>

                {week.days.map((day) => (
                  <DaySection
                    key={day.id}
                    day={day}
                    checkedTasks={checkedTasks}
                    taskProgress={taskProgress}
                    onToggleTask={handleToggleTask}
                  />
                ))}
              </div>
            ))}
          </Col>

          <Col xs={24} lg={8}>
            <QuickStatsCard />
            <TodaysLearningCard />
          </Col>
        </Row>
      </Content>

      <Drawer
        title={selectedDay?.title}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width={400}
      >
        {/* Render Task List here (giống như code cũ của bạn) */}
      </Drawer>
    </Layout>
  );
};

export default LanguageDashboard;

