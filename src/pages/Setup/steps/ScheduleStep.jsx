import React from "react";
import { Typography, Card, Space, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const scheduleOptions = [
  {
    key: 15,
    label: "15 ph\u00fat/ng\u00e0y",
    description: "Ph\u00f9 h\u1ee3p khi b\u1eadn r\u1ed9n, h\u1ecdc t\u1eebng ch\u00fat m\u1ed9t",
    tag: "Nh\u1eb9 nh\u00e0ng",
    color: "#87d068",
  },
  {
    key: 30,
    label: "30 ph\u00fat/ng\u00e0y",
    description: "C\u00e2n b\u1eb1ng gi\u1eefa h\u1ecdc v\u00e0 cu\u1ed9c s\u1ed1ng",
    tag: "Khuy\u1ebfn ngh\u1ecb",
    color: "#1890ff",
  },
  {
    key: 45,
    label: "45 ph\u00fat/ng\u00e0y",
    description: "Ti\u1ebfn b\u1ed9 nhanh h\u01a1n \u0111\u00e1ng k\u1ec3",
    tag: "T\u00edch c\u1ef1c",
    color: "#722ed1",
  },
  {
    key: 60,
    label: "60 ph\u00fat/ng\u00e0y",
    description: "D\u00e0nh th\u1eddi gian nghi\u00eam t\u00fac cho vi\u1ec7c h\u1ecdc",
    tag: "Chuy\u00ean s\u00e2u",
    color: "#fa8c16",
  },
  {
    key: 90,
    label: "90 ph\u00fat/ng\u00e0y",
    description: "Ti\u1ebfn b\u1ed9 v\u01b0\u1ee3t b\u1eadc, ph\u00f9 h\u1ee3p khi c\u00f3 nhi\u1ec1u th\u1eddi gian",
    tag: "T\u1ed1i \u0111a",
    color: "#f5222d",
  },
];

const ScheduleStep = ({ value, onChange }) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 8 }}>
          B\u1ea1n c\u00f3 th\u1ec3 h\u1ecdc bao l\u00e2u m\u1ed7i ng\u00e0y?
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          B\u1ea1n c\u00f3 th\u1ec3 thay \u0111\u1ed5i sau trong ph\u1ea7n c\u00e0i \u0111\u1eb7t
        </Text>
      </div>

      <Space direction="vertical" style={{ width: "100%" }} size={12}>
        {scheduleOptions.map((option) => {
          const isSelected = value === option.key;
          return (
            <motion.div
              key={option.key}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Card
                hoverable
                onClick={() => onChange(option.key)}
                style={{
                  borderRadius: 12,
                  border: isSelected
                    ? "2px solid #1890ff"
                    : "2px solid transparent",
                  background: isSelected ? "#e6f7ff" : "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                bodyStyle={{ padding: "16px 24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <ClockCircleOutlined
                      style={{
                        fontSize: 24,
                        color: isSelected ? "#1890ff" : "#8c8c8c",
                      }}
                    />
                    <div>
                      <Text strong style={{ fontSize: 16 }}>
                        {option.label}
                      </Text>
                      <br />
                      <Text type="secondary">{option.description}</Text>
                    </div>
                  </div>
                  <Tag
                    color={option.color}
                    style={{ fontSize: 13, padding: "4px 12px" }}
                  >
                    {option.tag}
                  </Tag>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </Space>
    </div>
  );
};

export default ScheduleStep;
