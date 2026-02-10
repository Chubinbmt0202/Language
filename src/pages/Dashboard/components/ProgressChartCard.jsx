import React from "react";
import { Card, Select, Space, Typography } from "antd";
import { ThunderboltFilled } from "@ant-design/icons";
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
import ChartTooltip from "./ChartTooltip";

const { Text } = Typography;
const { Option } = Select;

const ProgressChartCard = ({
  filterType,
  onFilterChange,
  displayData,
  roadmapWeeks,
}) => {
  return (
    <Card
      style={{
        borderRadius: 16,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
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
            <ThunderboltFilled style={{ color: "#f97316", fontSize: 18 }} />
          </div>
          <div>
            <Text strong style={{ fontSize: 16, display: "block" }}>
              Tiến độ học tập
            </Text>
            <Text type="secondary" style={{ fontSize: 12, fontWeight: 400 }}>
              Theo dõi hiệu suất hàng tuần
            </Text>
          </div>
        </Space>
      }
      extra={
        <Select
          defaultValue="all"
          style={{ width: 170 }}
          onChange={onFilterChange}
          value={filterType}
          bordered={false}
          className="custom-select"
          dropdownStyle={{ borderRadius: 12, padding: 8 }}
        >
          <Option value="all">📊 Toàn bộ lộ trình</Option>
          {roadmapWeeks.map((week) => (
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
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
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
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <Tooltip
              content={<ChartTooltip />}
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

            <Line
              type="monotone"
              dataKey="target"
              name="Mục tiêu"
              stroke="#f59e0b"
              strokeDasharray="6 6"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#f59e0b",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <Area
              type="monotone"
              dataKey="current"
              name="Điểm đạt được"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#colorCurrent)"
              fillOpacity={1}
              filter="url(#shadow)"
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

      <div
        style={{
          textAlign: "center",
          marginTop: 8,
          padding: "8px 0",
          borderTop: "1px dashed #f1f5f9",
        }}
      >
        <Text type="secondary" style={{ fontSize: 12, color: "#94a3b8" }}>
          {filterType === "all"
            ? "📈 Biểu đồ thể hiện lộ trình tăng trưởng dài hạn."
            : `⚡ Chi tiết hiệu suất học tập trong Tuần ${filterType}.`}
        </Text>
      </div>
    </Card>
  );
};

export default ProgressChartCard;

