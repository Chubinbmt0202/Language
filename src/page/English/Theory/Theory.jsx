import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Tabs,
  Tag,
  Table,
  Alert,
  Avatar,
  Card,
  List,
  Slider,
  Divider,
  Segmented, // <--- MỚI: Import thêm component này
} from "antd";
import {
  LeftOutlined,
  ExperimentOutlined,
  BulbOutlined,
  EditOutlined,
  CheckCircleTwoTone,
  BuildOutlined,
  CloseCircleTwoTone,
  PlayCircleOutlined,
  UserOutlined,
  SwapOutlined,
  TeamOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import QuizSection from "./QuizSection"; // <--- MỚI: Import Component QuizSection
import LearningTasks from "./LearningTasks";
import QuickNotes from "./QuickNotes"; // <--- MỚI: Import Component QuickNotes
const { Title, Text, Paragraph } = Typography;

// --- 1. DỮ LIỆU CŨ (GIỮ NGUYÊN) ---
const COMMENTS = [
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

const VideoPlayer = () => (
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

// --- 2. DỮ LIỆU DANH TỪ (GIỮ NGUYÊN) ---
const classificationData = [
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
    desc: "Tên riêng (Luôn viết hoa)",
    example: (
      <>
        <Tag color="purple">London</Tag>
        <Tag color="purple">Peter</Tag>
      </>
    ),
  },
  {
    key: "3",
    type: (
      <div>
        <Text strong>Trừu tượng</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Abstract)</div>
      </div>
    ),
    desc: "Khái niệm, cảm xúc",
    example: (
      <>
        <Tag color="magenta">love</Tag>
        <Tag color="magenta">idea</Tag>
      </>
    ),
  },
  {
    key: "5",
    type: (
      <div>
        <Text strong>Đếm được</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Countable)</div>
      </div>
    ),
    desc: (
      <span>
        Đếm được bằng số.
        <br />
        <Text type="success" style={{ fontSize: 12 }}>
          *Có số ít & số nhiều
        </Text>
      </span>
    ),
    example: (
      <>
        <Tag color="green">apple</Tag>
        <Tag color="green">books</Tag>
      </>
    ),
  },
  {
    key: "6",
    type: (
      <div>
        <Text strong>KHÔNG đếm được</Text>
        <div style={{ fontSize: 12, color: "#8c8c8c" }}>(Uncountable)</div>
      </div>
    ),
    desc: (
      <span>
        Chất lỏng, khái niệm.
        <br />
        <Text type="warning" style={{ fontSize: 12 }}>
          *Luôn số ít
        </Text>
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

const compareColumns = [
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

const compareData = [
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

const positionData = [
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

const suffixesThing = [
  { suffix: "-tion", word: "station" },
  { suffix: "-ment", word: "development" },
  { suffix: "-ness", word: "happiness" },
  { suffix: "-ity", word: "beauty" },
];
const suffixesPerson = [
  { suffix: "-er", word: "teacher" },
  { suffix: "-ist", word: "artist" },
  { suffix: "-ee", word: "trainee" },
  { suffix: "-ian", word: "musician" },
];

// --- 3. DỮ LIỆU ĐẠI TỪ (MỚI) ---
const pronounColumns = [
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
const pronounData = [
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
    reflexive: "Yourself",
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
    poss_pro: "Its",
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

// --- COMPONENT CHÍNH ---
const Theory = () => {
  const [viewMode, setViewMode] = useState("Noun"); // State chuyển đổi giữa Danh từ & Đại từ

  // A. NỘI DUNG TAB DANH TỪ (Đã được rút gọn bằng Tabs con)
  const nounItems = [
    {
      key: "n1",
      label: (
        <span>
          <BulbOutlined /> Phân loại
        </span>
      ),
      children: (
        <Table
          dataSource={classificationData}
          columns={[
            { title: "Loại Danh từ", dataIndex: "type", width: "30%" },
            { title: "Giải thích", dataIndex: "desc" },
            { title: "Ví dụ", dataIndex: "example" },
          ]}
          pagination={false}
          bordered
          size="middle"
          scroll={{ x: 600 }}
        />
      ),
    },
    {
      key: "n2",
      label: (
        <span>
          <ExperimentOutlined /> Đếm được?
        </span>
      ),
      children: (
        <div>
          <Table
            columns={compareColumns}
            dataSource={compareData}
            pagination={false}
            bordered
            size="middle"
          />
          <Alert
            message="Mẹo:"
            description={
              <span>
                Muốn đếm cái không đếm được, dùng: <b>a piece of</b> advice,{" "}
                <b>two bottles of</b> water.
              </span>
            }
            type="info"
            style={{ marginTop: 15 }}
            showIcon
          />
        </div>
      ),
    },
    {
      key: "n3",
      label: (
        <span>
          <EditOutlined /> Vị trí
        </span>
      ),
      children: (
        <List
          grid={{ gutter: 16, column: 2, xs: 1 }}
          dataSource={positionData}
          renderItem={(item) => (
            <List.Item>
              <Card size="small">
                <div style={{ display: "flex", gap: 10 }}>
                  <Avatar style={{ backgroundColor: "#1890ff" }}>
                    {item.icon}
                  </Avatar>
                  <div>
                    <Text strong>{item.role}</Text>
                    <div>{item.desc}</div>
                    <div
                      style={{
                        marginTop: 5,
                        background: "#f5f5f5",
                        padding: "2px 5px",
                      }}
                    >
                      👉 {item.example}
                    </div>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      ),
    },
    {
      key: "n4",
      label: (
        <span>
          <BuildOutlined /> Đuôi từ
        </span>
      ),
      children: (
        <Tabs
          type="card"
          items={[
            {
              label: "Chỉ Vật",
              key: "t1",
              children: (
                <List
                  grid={{ gutter: 10, column: 4, xs: 2 }}
                  dataSource={suffixesThing}
                  renderItem={(i) => (
                    <List.Item>
                      <Card size="small" style={{ textAlign: "center" }}>
                        <Text strong style={{ color: "#1890ff" }}>
                          {i.suffix}
                        </Text>
                        <br />
                        {i.word}
                      </Card>
                    </List.Item>
                  )}
                />
              ),
            },
            {
              label: "Chỉ Người",
              key: "t2",
              children: (
                <List
                  grid={{ gutter: 10, column: 4, xs: 2 }}
                  dataSource={suffixesPerson}
                  renderItem={(i) => (
                    <List.Item>
                      <Card size="small" style={{ textAlign: "center" }}>
                        <Text strong style={{ color: "#eb2f96" }}>
                          {i.suffix}
                        </Text>
                        <br />
                        {i.word}
                      </Card>
                    </List.Item>
                  )}
                />
              ),
            },
          ]}
        />
      ),
    },
  ];

  // B. NỘI DUNG TAB ĐẠI TỪ (Đã được rút gọn bằng Tabs con)
  const pronounItems = [
    {
      key: "p1",
      label: (
        <span>
          <UserOutlined /> Bảng Quy Đổi
        </span>
      ),
      children: (
        <div>
          <Alert
            message="Hãy học thuộc bảng này trước!"
            type="warning"
            showIcon
            style={{ marginBottom: 10 }}
          />
          <Table
            columns={pronounColumns}
            dataSource={pronounData}
            pagination={false}
            size="small"
            bordered
            scroll={{ x: 600 }}
          />
        </div>
      ),
    },
    {
      key: "p2",
      label: (
        <span>
          <SwapOutlined /> S vs O
        </span>
      ),
      children: (
        <Row gutter={16}>
          <Col span={12}>
            <Card
              size="small"
              title="Chủ ngữ (S)"
              headStyle={{ color: "#1890ff" }}
            >
              Đứng ĐẦU câu.
              <br />
              👉 <b>I</b> love you.
            </Card>
          </Col>
          <Col span={12}>
            <Card
              size="small"
              title="Tân ngữ (O)"
              headStyle={{ color: "#13c2c2" }}
            >
              Đứng SAU động từ.
              <br />
              👉 You love <b>me</b>.
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: "p3",
      label: (
        <span>
          <TeamOutlined /> Sở hữu
        </span>
      ),
      children: (
        <Row gutter={16}>
          <Col span={12}>
            <Card
              size="small"
              title="Tính từ (My)"
              headStyle={{ color: "#389e0d" }}
            >
              Cần DANH TỪ theo sau.
              <br />
              👉 <b>My</b> car.
            </Card>
          </Col>
          <Col span={12}>
            <Card
              size="small"
              title="Đại từ (Mine)"
              headStyle={{ color: "#d46b08" }}
            >
              Đứng MỘT MÌNH.
              <br />
              👉 It is <b>mine</b>.
            </Card>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div
      style={{ background: "#fff", minHeight: "100vh", padding: "40px 60px" }}
    >
      {/* --- HEADER (GIỮ NGUYÊN) --- */}
      <div style={{ marginBottom: 20 }}>
        <Title level={1} style={{ margin: "0 0 8px 0", fontSize: 32 }}>
          Lý thuyết: Danh từ & Đại từ
        </Title>
      </div>

      <Row gutter={60}>
        {/* --- LEFT COLUMN: MAIN CONTENT --- */}
        <Col span={16}>
          <VideoPlayer /> {/* Giữ nguyên Video */}
          <Tabs
            defaultActiveKey="1"
            size="large"
            items={[
              {
                label: "Bài học",
                key: "1",
                children: (
                  <div>
                    {/* 1. THANH CHUYỂN ĐỔI (SEGMENTED) - GIÚP RÚT GỌN TRANG */}
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <Segmented
                        size="large"
                        block
                        options={[
                          {
                            label: "Phần 1: Danh từ (Nouns)",
                            value: "Noun",
                            icon: <BulbOutlined />,
                          },
                          {
                            label: "Phần 2: Đại từ (Pronouns)",
                            value: "Pronoun",
                            icon: <UserOutlined />,
                          },
                        ]}
                        value={viewMode}
                        onChange={setViewMode}
                      />
                    </div>

                    {/* 2. HIỂN THỊ NỘI DUNG TƯƠNG ỨNG */}
                    <Card
                      title={
                        viewMode === "Noun"
                          ? "Kiến thức: Danh từ"
                          : "Kiến thức: Đại từ"
                      }
                      style={{
                        minHeight: 400,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Tabs
                        defaultActiveKey={viewMode === "Noun" ? "n1" : "p1"}
                        items={viewMode === "Noun" ? nounItems : pronounItems}
                        type="card"
                      />
                    </Card>

                    <Paragraph
                      style={{
                        textAlign: "center",
                        marginTop: 30,
                        color: "#8c8c8c",
                      }}
                    >
                      * Chúc bạn học tốt! Hãy luyện tập đặt câu với các từ mới
                      nhé.
                    </Paragraph>
                  </div>
                ),
              },
              {
                label: "Bài tập (Quiz)",
                key: "3",
                children: (
                  <div
                    style={{
                      padding: "20px 0",
                      background: "#f5f5f5",
                      borderRadius: 8,
                    }}
                  >
                    {/* Gọi Component QuizSection ở đây */}
                    <QuizSection />
                  </div>
                ),
              },
            ]}
            tabBarStyle={{ fontWeight: "bold", color: "#5e5ce6" }}
          />
        </Col>

        {/* --- RIGHT COLUMN: SIDEBAR (GIỮ NGUYÊN) --- */}
        <Col span={8}>
          <LearningTasks />
          <Divider />
          <QuickNotes />
        </Col>
      </Row>
    </div>
  );
};

export default Theory;
