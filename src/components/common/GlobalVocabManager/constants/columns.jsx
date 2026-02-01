import { Button, Space, Tag, Typography } from "antd";
import { SoundOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const columnsJapan = [
  {
    title: "Loa",
    width: 60,
    align: "center",
    render: () => <Button shape="circle" size="small" type="text" icon={<SoundOutlined />} />,
  },
  {
    title: "Kana",
    key: "kana",
    width: 120,
    render: (_, record) => (
      <Space direction="vertical" size={0}>
        <Text strong style={{ fontSize: 16, color: "#1890ff" }}>{record.hiragana}</Text>
        <Text type="secondary" style={{ fontSize: 12 }}>{record.katakana}</Text>
      </Space>
    ),
  },
  {
    title: "Romaji",
    dataIndex: "romaji",
    key: "romaji",
    width: 100,
    render: (text) => <Tag>{text}</Tag>,
  },
  {
    title: "Nghĩa",
    dataIndex: "meaning",
    key: "meaning",
    render: (text) => <Text strong>{text}</Text>,
  },
];

export const columnsEnglish = [
  {
    title: "Loa",
    width: 60,
    align: "center",
    render: () => <Button shape="circle" size="small" type="text" icon={<SoundOutlined />} />,
  },
  { title: "Từ mới", dataIndex: "word", key: "word", render: (text) => <Text strong>{text}</Text> },
  { title: "Nghĩa", dataIndex: "meaning", key: "meaning", render: (text) => <Text strong>{text}</Text> },
];