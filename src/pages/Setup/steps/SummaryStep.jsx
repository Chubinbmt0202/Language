import React from "react";
import { Typography, Card, Descriptions, Tag } from "antd";
import {
  GlobalOutlined,
  BarChartOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const languageLabels = {
  english: "Ti\u1ebfng Anh",
  japanese: "Ti\u1ebfng Nh\u1eadt",
};

const levelLabels = {
  beginner: "M\u1ea5t g\u1ed1c / M\u1edbi b\u1eaft \u0111\u1ea7u",
  elementary: "C\u01a1 b\u1ea3n",
  intermediate: "Trung b\u00ecnh",
  upper_intermediate: "Kh\u00e1",
  advanced: "N\u00e2ng cao",
};

const goalLabels = {
  toeic_600: "TOEIC 600+",
  toeic_700: "TOEIC 700+",
  toeic_800: "TOEIC 800+",
  conversation: "Giao ti\u1ebfp c\u01a1 b\u1ea3n",
  jlpt_n5: "JLPT N5",
  jlpt_n4: "JLPT N4",
  jlpt_n3: "JLPT N3",
  conversation_jp: "Giao ti\u1ebfp c\u01a1 b\u1ea3n",
};

const SummaryStep = ({ formData }) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          Xem l\u1ea1i l\u1ef1a ch\u1ecdn c\u1ee7a b\u1ea1n
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Ki\u1ec3m tra l\u1ea1i th\u00f4ng tin v\u00e0 b\u1eaft \u0111\u1ea7u h\u1ecdc ngay!
        </Text>
      </div>

      <Card
        style={{
          borderRadius: 16,
          maxWidth: 600,
          margin: "0 auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
        bodyStyle={{ padding: 32 }}
      >
        <Descriptions
          column={1}
          labelStyle={{ fontWeight: 600, fontSize: 15, padding: "12px 0" }}
          contentStyle={{ fontSize: 15, padding: "12px 0" }}
        >
          <Descriptions.Item
            label={
              <span>
                <GlobalOutlined style={{ marginRight: 8, color: "#1890ff" }} />
                Ng\u00f4n ng\u1eef
              </span>
            }
          >
            <Tag color="blue" style={{ fontSize: 14, padding: "4px 16px" }}>
              {languageLabels[formData.targetLanguage] || formData.targetLanguage}
            </Tag>
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <span>
                <BarChartOutlined style={{ marginRight: 8, color: "#52c41a" }} />
                Tr\u00ecnh \u0111\u1ed9
              </span>
            }
          >
            <Tag color="green" style={{ fontSize: 14, padding: "4px 16px" }}>
              {levelLabels[formData.currentLevel] || formData.currentLevel}
            </Tag>
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <span>
                <TrophyOutlined style={{ marginRight: 8, color: "#faad14" }} />
                M\u1ee5c ti\u00eau
              </span>
            }
          >
            <Tag color="gold" style={{ fontSize: 14, padding: "4px 16px" }}>
              {goalLabels[formData.goal] || formData.goal}
            </Tag>
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <span>
                <ClockCircleOutlined
                  style={{ marginRight: 8, color: "#722ed1" }}
                />
                Th\u1eddi gian h\u1ecdc
              </span>
            }
          >
            <Tag color="purple" style={{ fontSize: 14, padding: "4px 16px" }}>
              {formData.dailyStudyMinutes} ph\u00fat/ng\u00e0y
            </Tag>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default SummaryStep;
