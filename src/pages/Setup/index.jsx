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
  { title: "Ng\u00f4n ng\u1eef" },
  { title: "Tr\u00ecnh \u0111\u1ed9" },
  { title: "M\u1ee5c ti\u00eau" },
  { title: "Th\u1eddi gian" },
  { title: "X\u00e1c nh\u1eadn" },
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
      message.warning("Vui l\u00f2ng ch\u1ecdn m\u1ed9t t\u00f9y ch\u1ecdn tr\u01b0\u1edbc khi ti\u1ebfp t\u1ee5c");
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

    message.success("Thi\u1ebft l\u1eadp th\u00e0nh c\u00f4ng! B\u1eaft \u0111\u1ea7u h\u1ecdc th\u00f4i!");

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
        padding: "24px 0",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <Title level={3} style={{ color: "#1890ff", margin: 0 }}>
          Thi\u1ebft l\u1eadp l\u1ed9 tr\u00ecnh h\u1ecdc t\u1eadp
        </Title>
      </div>

      {/* Steps indicator */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          marginBottom: 40,
          padding: "0 16px",
        }}
      >
        <Steps
          current={currentStep}
          items={stepsMeta.map((s) => ({ title: s.title }))}
          size="small"
          responsive={false}
        />
      </div>

      {/* Step content */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          minHeight: 400,
          position: "relative",
          overflow: "hidden",
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
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 700,
          marginTop: 40,
          padding: "0 16px",
        }}
      >
        <Button
          size="large"
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          disabled={currentStep === 0}
          style={{ borderRadius: 8 }}
        >
          Quay l\u1ea1i
        </Button>

        {currentStep < stepsMeta.length - 1 ? (
          <Button
            type="primary"
            size="large"
            onClick={handleNext}
            disabled={!canGoNext()}
            style={{ borderRadius: 8 }}
          >
            Ti\u1ebfp t\u1ee5c <ArrowRightOutlined />
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
            B\u1eaft \u0111\u1ea7u h\u1ecdc!
          </Button>
        )}
      </div>
    </div>
  );
};

export default SetupWizard;
