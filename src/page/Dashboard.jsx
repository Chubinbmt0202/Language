import React from 'react';
import { Layout, Row, Col, Card, Progress, Tabs, Timeline, Tag, Typography, Statistic, Badge } from 'antd';
import { FireTwoTone, BookOutlined, RiseOutlined, TranslationOutlined } from '@ant-design/icons';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const { Content } = Layout;
const { Title, Text } = Typography;

// Dữ liệu giả lập kỹ năng cho biểu đồ Radar
const skillData = [
  { subject: 'Ngữ pháp', A: 80, B: 40, fullMark: 150 },
  { subject: 'Từ vựng', A: 70, B: 60, fullMark: 150 },
  { subject: 'Nghe', A: 90, B: 30, fullMark: 150 },
  { subject: 'Đọc', A: 65, B: 50, fullMark: 150 },
  { subject: 'Kanji/Writing', A: 20, B: 70, fullMark: 150 },
];

const LanguageDashboard = () => {
  return (
    <Layout style={{ padding: '24px', background: '#f0f2f5' }}>
      <Content>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>Bảng điều khiển học tập</Title>
          <Text type="secondary">Chào Trung Anh, hôm nay bạn muốn chinh phục mục tiêu nào?</Text>
        </div>

        {/* Row 1: Thống kê tổng quát */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card hoverable>
              <Statistic 
                title="Chuỗi học tập (Streak)" 
                value={12} 
                prefix={<FireTwoTone twoToneColor="#eb2f96" />} 
                suffix="Ngày" 
              />
              <Progress percent={80} showInfo={false} strokeColor="#eb2f96" />
              <Text size="small">Tuyệt vời! Đừng để ngọn lửa vụt tắt.</Text>
            </Card>
          </Col>
          <Col xs={24} md={16}>
            <Card title="Tiến độ lộ trình">
              <Row>
                <Col span={12}>
                  <Text strong><TranslationOutlined /> Tiếng Anh (TOEIC)</Text>
                  <Progress percent={65} status="active" />
                </Col>
                <Col span={12} style={{ paddingLeft: 20 }}>
                  <Text strong><BookOutlined /> Tiếng Nhật (JLPT N3)</Text>
                  <Progress percent={35} strokeColor="#52c41a" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Row 2: Phân tích sâu kỹ năng */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} lg={12}>
            <Card title="So sánh năng lực (Radar)">
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <RadarChart data={skillData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="Tiếng Anh" dataKey="A" stroke="#1890ff" fill="#1890ff" fillOpacity={0.5} />
                    <Radar name="Tiếng Nhật" dataKey="B" stroke="#52c41a" fill="#52c41a" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Badge color="#1890ff" text="Tiếng Anh" /> <Badge color="#52c41a" text="Tiếng Nhật" style={{ marginLeft: 10 }} />
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card title="Lịch sử làm bài & Gợi ý">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Gần đây" key="1">
                  <Timeline mode="left">
                    <Timeline.Item label="10:30" color="green">Hoàn thành Part 5 TOEIC (9/10 câu)</Timeline.Item>
                    <Timeline.Item label="Hôm qua" color="blue">Học 20 từ vựng Kanji N3</Timeline.Item>
                    <Timeline.Item label="2 ngày trước" color="red">Làm sai nhiều ở phần Trợ từ (Tiếng Nhật)</Timeline.Item>
                  </Timeline>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Việc cần làm" key="2">
                  <div style={{ padding: '10px' }}>
                    <Card size="small" style={{ marginBottom: 10 }}>
                      <Tag color="orange">Gợi ý AI</Tag>
                      <Text>Bạn hay sai phần **Phó từ** trong tiếng Anh. Ôn ngay?</Text>
                    </Card>
                    <Card size="small">
                      <Tag color="red">N3 Task</Tag>
                      <Text>Luyện nghe hiểu hội thoại ngắn (Choukai).</Text>
                    </Card>
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Content>

    </Layout>
  );
};

export default LanguageDashboard;