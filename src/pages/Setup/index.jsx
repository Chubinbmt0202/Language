/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Steps, Button, Typography, message } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../util/AuthContext.jsx";
import { saveOnboardingData } from "../../util/onboardingStorage.js";

import LanguageStep from "./steps/LanguageStep.jsx";
import LevelStep from "./steps/LevelStep.jsx";
import GoalStep from "./steps/GoalStep.jsx";
import ScheduleStep from "./steps/ScheduleStep.jsx";
import SummaryStep from "./steps/SummaryStep.jsx";

const { Title } = Typography;

const stepsMeta = [
  { title: "Ngôn ngữ" },
  { title: "Trình độ" },
  { title: "Mục tiêu" },
  { title: "Thời gian" },
  { title: "Xác nhận" },
];

const SetupWizard = ({ onComplete }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    targetLanguage: null,
    currentLevel: null,
    goal: null,
    dailyStudyMinutes: 30,
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canGoNext = () => {
    switch (currentStep) {
      case 0:
        return !!formData.targetLanguage;
      case 1:
        return !!formData.currentLevel;
      case 2:
        return !!formData.goal;
      case 3:
        return !!formData.dailyStudyMinutes;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!canGoNext()) {
      message.warning("Vui lòng chọn một tùy chọn trước khi tiếp tục");
      return;
    }
    if (currentStep === 0) {
      setFormData((prev) => ({ ...prev, goal: null }));
    }
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, stepsMeta.length - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleComplete = () => {
    const roadmapId = `${formData.goal}_${formData.currentLevel}`;
    const data = {
      ...formData,
      roadmapId,
    };
    saveOnboardingData(data);

    if (user) {
      const targetKey = `learning_time_target_${user.uid}`;
      localStorage.setItem(targetKey, String(formData.dailyStudyMinutes * 60));
    }

    message.success("Thiết lập thành công! Bắt đầu học thôi!");

    if (onComplete) {
      onComplete(data);
    } else {
      navigate("/Home", { replace: true });
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <LanguageStep
            value={formData.targetLanguage}
            onChange={(v) => updateField("targetLanguage", v)}
          />
        );
      case 1:
        return (
          <LevelStep
            value={formData.currentLevel}
            onChange={(v) => updateField("currentLevel", v)}
            targetLanguage={formData.targetLanguage}
          />
        );
      case 2:
        return (
          <GoalStep
            value={formData.goal}
            onChange={(v) => updateField("goal", v)}
            targetLanguage={formData.targetLanguage}
          />
        );
      case 3:
        return (
          <ScheduleStep
            value={formData.dailyStudyMinutes}
            onChange={(v) => updateField("dailyStudyMinutes", v)}
          />
        );
      case 4:
        return <SummaryStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "24px 0", // Bỏ padding top/bottom ở container chính để tránh thanh cuộn kép
        paddingTop: 24,
        overflow: "hidden" // Ẩn thanh cuộn của body
      }}
    >
      {/* Header (Cố định) */}
      <div style={{ textAlign: "center", marginBottom: 32, flexShrink: 0 }}>
        <Title level={3} style={{ color: "#1890ff", margin: 0 }}>
          Thiết lập lộ trình học tập
        </Title>
      </div>

      {/* Steps indicator (Cố định) */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          marginBottom: 40,
          padding: "0 16px",
          flexShrink: 0, // Không cho phép co lại
        }}
      >
        <Steps
          current={currentStep}
          items={stepsMeta.map((s) => ({ title: s.title }))}
          size="small"
          responsive={false}
        />
      </div>

      {/* Step content (SẼ SCROLL Ở ĐÂY) */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          // THAY ĐỔI 2: Flex grow để chiếm khoảng trống còn lại và cho phép scroll
          flex: 1, 
          overflowY: "auto", // Cho phép scroll dọc
          overflowX: "hidden", // Ẩn scroll ngang
          padding: "0 16px", // Padding cho nội dung bên trong
          position: "relative",
          // Bỏ minHeight cứng, để flex tự xử lý
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // Thêm style này để đảm bảo motion div không phá layout
            style={{ width: "100%" }} 
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons (Cố định ở đáy) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 700,
          // THAY ĐỔI 3: Style cho footer cố định
          padding: "24px 16px", // Thêm padding để tách khỏi mép dưới
          background: "#fff", // Thêm màu nền nếu nội dung scroll xuống dưới
          flexShrink: 0, // Đảm bảo nút không bị bóp méo
          zIndex: 10, // Đảm bảo nổi lên trên nếu cần
          borderTop: "1px solid #f0f0f0" // (Tùy chọn) Thêm đường kẻ mờ ngăn cách
        }}
      >
        <Button
          size="large"
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          disabled={currentStep === 0}
          style={{ borderRadius: 8 }}
        >
          Quay lại
        </Button>

        {currentStep < stepsMeta.length - 1 ? (
          <Button
            type="primary"
            size="large"
            onClick={handleNext}
            disabled={!canGoNext()}
            style={{ borderRadius: 8 }}
          >
            Tiếp tục <ArrowRightOutlined />
          </Button>
        ) : (
          <Button
            type="primary"
            size="large"
            icon={<CheckOutlined />}
            onClick={handleComplete}
            style={{
              borderRadius: 8,
              background: "#52c41a",
              borderColor: "#52c41a",
            }}
          >
            Bắt đầu học!
          </Button>
        )}
      </div>
    </div>
  );
};

export default SetupWizard;