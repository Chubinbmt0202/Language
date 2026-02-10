import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "12px 16px",
        border: "none",
        borderRadius: "12px",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
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
        {payload[0]?.payload?.fullDate || label}
      </p>

      <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#f59e0b",
            marginRight: 8,
          }}
        />
        <span style={{ fontSize: "13px", color: "#334155" }}>Mục tiêu:</span>
        <span
          style={{ marginLeft: "auto", fontWeight: "bold", color: "#f59e0b" }}
        >
          {payload[0]?.value}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            marginRight: 8,
          }}
        />
        <span style={{ fontSize: "13px", color: "#334155" }}>Đạt được:</span>
        <span
          style={{ marginLeft: "auto", fontWeight: "bold", color: "#3b82f6" }}
        >
          {payload[1]?.value}
        </span>
      </div>

      {payload[0]?.payload?.description && (
        <div
          style={{
            marginTop: 8,
            paddingTop: 8,
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <Text type="secondary" style={{ fontSize: 11, fontStyle: "italic" }}>
            Focus: {payload[0].payload.description}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ChartTooltip;

