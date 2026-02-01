import React from "react";
import { Menu, Button, Typography } from "antd";
import { BookOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const MenuContent = () => (
  <>
    <div style={{ padding: "16px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Text strong><BookOutlined /> CHỦ ĐỀ</Text>
      <Button type="primary" ghost size="small" icon={<PlusOutlined />} />
    </div>
    <Menu
      mode="inline"
      items={[
        { key: "all", label: "Tất cả từ vựng" },
        { key: "topic1", label: "Chủ đề 1" },
        { key: "topic2", label: "Chủ đề 2" },
      ]}
      style={{ border: "none" }}
    />
  </>
);

export default MenuContent;