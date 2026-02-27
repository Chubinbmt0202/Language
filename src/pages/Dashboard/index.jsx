/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Typography, Drawer } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { detailedRoadmap, chartData } from "./RoadmapData";
import DaySection from "./DaySection";
import { loadTaskProgress } from "@/shared/utils/storage/taskProgress";
import ProgressChartCard from "./components/ProgressChartCard";
import QuickStatsCard from "./components/QuickStatsCard";
import LeaderboardCard from "./components/LeaderboardCard";
import { calculateDailyChartData } from "./utils/calculateDailyChartData";
import UnlockTestModal from "./components/UnlockTestModal";
import { hasCompletedOnboarding } from "@/shared/utils/storage/onboardingStorage";
import SetupWizard from "../Setup/index.jsx";

const { Content } = Layout;
const { Title, Text } = Typography;

const LanguageDashboard = () => {
  const weekRefs = useRef([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [taskProgress, setTaskProgress] = useState(() => loadTaskProgress());
  const location = useLocation();
  const navigate = useNavigate();
  const [roadmapVersion, setRoadmapVersion] = useState(0);
  const [setupCompleted, setSetupCompleted] = useState(() => hasCompletedOnboarding());
  const [unlockTestState, setUnlockTestState] = useState({
    open: false,
    scope: "day",
    weekIndex: 0,
    dayIndex: 0,
  });

  const [displayData, setDisplayData] = useState(chartData);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    setTaskProgress(loadTaskProgress());
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onRoadmapUpdated = () => setRoadmapVersion((k) => k + 1);
    window.addEventListener("roadmap:updated", onRoadmapUpdated);
    return () => window.removeEventListener("roadmap:updated", onRoadmapUpdated);
  }, []);

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

  const handleRequestUnlockTest = ({ scope, weekIndex, dayIndex }) => {
    setUnlockTestState({ open: true, scope, weekIndex, dayIndex });
  };

  const handleSetupComplete = () => {
    setSetupCompleted(true);
    navigate("/Home", { replace: true });
  };

  if (!setupCompleted) {
    return <SetupWizard onComplete={handleSetupComplete} />;
  }

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

            {detailedRoadmap.map((week, wIdx) => (
              <div
                key={week.week}
                ref={(el) => (weekRefs.current[wIdx] = el)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <Title level={3}>{week.name}</Title>
                <Text type="secondary">{week.description}</Text>

                {week.days.map((day, dayIdx) => (
                  <DaySection
                    key={day.id}
                    day={day}
                    dayIndex={dayIdx}
                    week={week}
                    weekIndex={wIdx}
                    roadmapWeeks={detailedRoadmap}
                    checkedTasks={checkedTasks}
                    taskProgress={taskProgress}
                    onToggleTask={handleToggleTask}
                    onRequestUnlockTest={handleRequestUnlockTest}
                  />
                ))}
              </div>
            ))}
          </Col>

          <Col xs={24} lg={8}>
            {/* Thêm thẻ div bao bọc với style sticky */}
            <div>
              <QuickStatsCard />
              <LeaderboardCard />
            </div>
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

      <UnlockTestModal
        open={unlockTestState.open}
        onClose={() => setUnlockTestState((s) => ({ ...s, open: false }))}
        roadmapWeeks={detailedRoadmap}
        weekIndex={unlockTestState.weekIndex}
        dayIndex={unlockTestState.dayIndex}
        scope={unlockTestState.scope}
      />
    </Layout>
  );
};

export default LanguageDashboard;
