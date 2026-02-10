import React, { useEffect, useMemo, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import {
  LeftOutlined,
  ExperimentOutlined,
  BulbOutlined,
  EditOutlined,
  BuildOutlined,
  PlayCircleOutlined,
  UserOutlined,
  SwapOutlined,
  TeamOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import QuizSection from "./QuizSection"; // <--- MỚI: Import Component QuizSection
import LearningTasks from "./LearningTasks";
import QuickNotes from "./QuickNotes"; // <--- MỚI: Import Component QuickNotes
import { getTheoryLesson } from "./TheoryTaskData";
import { detailedRoadmap } from "../../Dashboard/RoadmapData";
import { findRoadmapLocationByTaskId, getDayGate } from "../../../util/roadmapAccess";
import { getLessonMissionsDoneMap, markLessonMissionDone } from "../../../util/lessonMissions";
import {
  COMMENTS,
  VideoPlayer,
  classificationData,
  compareColumns,
  compareData,
  positionData,
  suffixesThing,
  suffixesPerson,
  pronounColumns,
  pronounData,
} from "./theoryLessonData";
const { Title, Text, Paragraph } = Typography;

// --- COMPONENT CHÍNH ---
const Theory = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const lesson = useMemo(() => getTheoryLesson(taskId), [taskId]);
  const roadmapLocation = useMemo(
    () => findRoadmapLocationByTaskId(detailedRoadmap, taskId),
    [taskId],
  );
  const dayGate = useMemo(() => {
    if (!roadmapLocation) return { unlocked: true };
    return getDayGate(
      detailedRoadmap,
      roadmapLocation.weekIndex,
      roadmapLocation.dayIndex,
    );
  }, [roadmapLocation]);

  if (!dayGate.unlocked) {
    return (
      <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 15px" }}>
        <Alert
          type="warning"
          showIcon
          message="Bài học đang bị khóa"
          description="Bạn cần đủ điểm của ngày/tuần trước hoặc làm bài test mở khóa trong Dashboard."
          action={
            <Button type="primary" onClick={() => navigate("/dashboard")}>
              Về Dashboard
            </Button>
          }
        />
      </div>
    );
  }
  const [viewMode, setViewMode] = useState("Noun"); // State chuyển đổi giữa Danh từ & Đại từ
  const [activeLessonTab, setActiveLessonTab] = useState("1");

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!taskId) return undefined;
    if (activeLessonTab !== "1") return undefined;

    const doneMap = getLessonMissionsDoneMap(taskId);
    const timers = [];

    if (!doneMap.read) {
      timers.push(
        window.setTimeout(() => {
          markLessonMissionDone(taskId, "read");
        }, 15000),
      );
    }

    if (lesson?.videoSrc && !doneMap.video) {
      timers.push(
        window.setTimeout(() => {
          markLessonMissionDone(taskId, "video");
        }, 5 * 60 * 1000),
      );
    }

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [taskId, activeLessonTab, lesson?.videoSrc]);

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
          {lesson.title}
        </Title>
      </div>

      <Row gutter={60}>
        {/* --- LEFT COLUMN: MAIN CONTENT --- */}
        <Col span={16}>
          {lesson?.videoSrc ? <VideoPlayer src={lesson.videoSrc} /> : null}
          <Tabs
            defaultActiveKey="1"
            size="large"
            onChange={setActiveLessonTab}
            items={[
              {
                label: "Bài học",
                key: "1",
                children: (
                  <div>
                    {lesson.layout === "noun_pronoun" ? (
                      <>
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
                      </>
                    ) : (
                      <Card
                        title={lesson.title}
                        style={{
                          minHeight: 400,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        }}
                      >
                        <Tabs
                          type="card"
                          items={(lesson.sections ?? []).map((section, idx) => ({
                            key: String(idx + 1),
                            label: section.heading,
                            children: (
                              <div style={{ paddingTop: 8 }}>
                                <Title level={5} style={{ marginTop: 0 }}>
                                  {section.heading}
                                </Title>
                                <Paragraph style={{ marginBottom: 0 }}>
                                  {section.content}
                                </Paragraph>
                              </div>
                            ),
                          }))}
                        />
                      </Card>
                    )}

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
                    {lesson.showQuiz ? (
                      <QuizSection taskId={taskId} />
                    ) : (
                      <Alert
                        message="Quiz đang cập nhật"
                        description="Bài quiz cho nội dung lý thuyết này chưa được thêm."
                        type="info"
                        showIcon
                      />
                    )}
                  </div>
                ),
              },
            ]}
            tabBarStyle={{ fontWeight: "bold", color: "#5e5ce6" }}
          />
        </Col>

        {/* --- RIGHT COLUMN: SIDEBAR (GIỮ NGUYÊN) --- */}
        <Col span={8}>
          <LearningTasks taskId={taskId} lesson={lesson} />
          <Divider />
          <QuickNotes taskId={taskId} seedNotes={lesson.seedNotes} />
        </Col>
      </Row>
    </div>
  );
};

export default Theory;
