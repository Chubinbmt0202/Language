/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Tag, Typography } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";

const { Text } = Typography;

export const COMMENTS = [
  {
    author: "Minh Hạnh",
    avatar: "https://i.pravatar.cc/150?u=hanh",
    content:
      "Thầy ơi, làm sao để phân biệt khi nào dùng 'Me' và khi nào dùng 'I' trong câu phức ạ?",
    time: "2 giờ trước",
    type: "text",
  },
  {
    author: "Tuấn Anh",
    avatar: "https://i.pravatar.cc/150?u=tuan",
    content: "Audio phát âm Đại từ",
    time: "0:45",
    type: "audio",
  },
  {
    author: "Linh Đan",
    avatar: "https://i.pravatar.cc/150?u=linh",
    content:
      "Mọi người nhớ tải file PDF bài tập về Đại từ sở hữu ở tab Resources nhé, hay lắm.",
    time: "5 phút trước",
    type: "text",
  },
];

export const VideoPlayer = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      height: 0,
      borderRadius: "20px",
      overflow: "hidden",
      marginBottom: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      background: "#000",
    }}
  >
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      src="https://www.youtube.com/embed/I1M7pF-gwd0"
      title="Video Bài Giảng"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export const classificationData = [
  {
    key: "1",
    type: (
      <div>
        <Text strong>Danh từ chung</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Common)</div>
      </div>
    ),
    desc: "Chỉ sự vật chung chung",
    example: (
      <>
        <Tag>cat</Tag>
        <Tag>city</Tag>
      </>
    ),
  },
  {
    key: "2",
    type: (
      <div>
        <Text strong>Danh từ riêng</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Proper)</div>
      </div>
    ),
    desc: "Tên riêng người/địa danh",
    example: (
      <>
        <Tag color="geekblue">Hanoi</Tag>
        <Tag color="geekblue">Minh</Tag>
      </>
    ),
  },
  {
    key: "3",
    type: (
      <div>
        <Text strong>Danh từ đếm được</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Countable)</div>
      </div>
    ),
    desc: (
      <span>
        Có thể đếm được <Text type="success">(1, 2, 3...)</Text>
      </span>
    ),
    example: (
      <>
        <Tag color="green">apple</Tag>
        <Tag color="green">book</Tag>
      </>
    ),
  },
  {
    key: "4",
    type: (
      <div>
        <Text strong>Danh từ không đếm được</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Uncountable)</div>
      </div>
    ),
    desc: (
      <span>
        Không thể đếm <Text type="warning" style={{ fontSize: 12 }}>*Luôn số ít</Text>
      </span>
    ),
    example: (
      <>
        <Tag color="orange">water</Tag>
        <Tag color="orange">money</Tag>
      </>
    ),
  },
];

export const compareColumns = [
  {
    title: "Tiêu chí",
    dataIndex: "criteria",
    key: "criteria",
    width: "20%",
    render: (text) => <Text strong>{text}</Text>,
  },
  {
    title: <Tag color="success">Đếm được</Tag>,
    dataIndex: "countable",
    key: "countable",
    width: "40%",
  },
  {
    title: <Tag color="warning">Không đếm được</Tag>,
    dataIndex: "uncountable",
    key: "uncountable",
    width: "40%",
  },
];

export const compareData = [
  {
    key: "1",
    criteria: "Khả năng đếm",
    countable: (
      <span>
        <CheckCircleTwoTone twoToneColor="#52c41a" /> Dùng với số (1, 2...)
      </span>
    ),
    uncountable: (
      <span>
        <CloseCircleTwoTone twoToneColor="#faad14" /> KHÔNG dùng với số
      </span>
    ),
  },
  {
    key: "2",
    criteria: "Dạng số nhiều",
    countable: (
      <span>
        Có thêm <b>s / es</b>
      </span>
    ),
    uncountable: (
      <span>
        Chỉ có <b>một dạng</b>
      </span>
    ),
  },
  {
    key: "3",
    criteria: "Dùng A / An",
    countable: (
      <span>
        <CheckCircleTwoTone twoToneColor="#52c41a" /> Có thể dùng
      </span>
    ),
    uncountable: (
      <span>
        <CloseCircleTwoTone twoToneColor="#ff4d4f" /> KHÔNG bao giờ dùng
      </span>
    ),
  },
];

export const positionData = [
  {
    role: "Chủ ngữ (Subject)",
    desc: "Đứng đầu câu",
    example: (
      <span>
        <Text code>The cat</Text> is sleeping.
      </span>
    ),
    icon: "S",
  },
  {
    role: "Tân ngữ (Object)",
    desc: "Đứng sau động từ",
    example: (
      <span>
        I love <Text code>music</Text>.
      </span>
    ),
    icon: "O",
  },
  {
    role: "Sau Giới từ",
    desc: "in, on, at, of...",
    example: (
      <span>
        Good at <Text code>Math</Text>.
      </span>
    ),
    icon: "P",
  },
  {
    role: "Sau Tính từ sở hữu",
    desc: "my, your, our...",
    example: (
      <span>
        My <Text code>house</Text>.
      </span>
    ),
    icon: "A",
  },
];

export const suffixesThing = [
  { suffix: "-tion", word: "station" },
  { suffix: "-ment", word: "development" },
  { suffix: "-ness", word: "happiness" },
  { suffix: "-ity", word: "beauty" },
];

export const suffixesPerson = [
  { suffix: "-er", word: "teacher" },
  { suffix: "-ist", word: "artist" },
  { suffix: "-ee", word: "trainee" },
  { suffix: "-ian", word: "musician" },
];

export const pronounColumns = [
  {
    title: "Ngôi",
    dataIndex: "person",
    key: "person",
    fixed: "left",
    width: 80,
  },
  { title: <Tag color="blue">S</Tag>, dataIndex: "subject", key: "subject" },
  { title: <Tag color="cyan">O</Tag>, dataIndex: "object", key: "object" },
  {
    title: <Tag color="green">Adj</Tag>,
    dataIndex: "poss_adj",
    key: "poss_adj",
  },
  {
    title: <Tag color="orange">Pro</Tag>,
    dataIndex: "poss_pro",
    key: "poss_pro",
  },
  {
    title: <Tag color="purple">Self</Tag>,
    dataIndex: "reflexive",
    key: "reflexive",
  },
];

export const pronounData = [
  {
    key: 1,
    person: "Tôi",
    subject: "I",
    object: "Me",
    poss_adj: "My",
    poss_pro: "Mine",
    reflexive: "Myself",
  },
  {
    key: 2,
    person: "Bạn",
    subject: "You",
    object: "You",
    poss_adj: "Your",
    poss_pro: "Yours",
    reflexive: "Yourself / Yourselves",
  },
  {
    key: 3,
    person: "Anh ấy",
    subject: "He",
    object: "Him",
    poss_adj: "His",
    poss_pro: "His",
    reflexive: "Himself",
  },
  {
    key: 4,
    person: "Cô ấy",
    subject: "She",
    object: "Her",
    poss_adj: "Her",
    poss_pro: "Hers",
    reflexive: "Herself",
  },
  {
    key: 5,
    person: "Nó",
    subject: "It",
    object: "It",
    poss_adj: "Its",
    poss_pro: "(none)",
    reflexive: "Itself",
  },
  {
    key: 6,
    person: "Chúng tôi",
    subject: "We",
    object: "Us",
    poss_adj: "Our",
    poss_pro: "Ours",
    reflexive: "Ourselves",
  },
  {
    key: 7,
    person: "Họ",
    subject: "They",
    object: "Them",
    poss_adj: "Their",
    poss_pro: "Theirs",
    reflexive: "Themselves",
  },
];
