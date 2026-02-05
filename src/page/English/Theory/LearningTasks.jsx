import React from "react";
import { Card, List, Typography, Progress, Button, Tag, Avatar } from "antd";
import {
  CheckCircleFilled,
  PlayCircleOutlined,
  ReadOutlined,
  FormOutlined,
  ClockCircleOutlined,
  RightOutlined,
  LockOutlined
} from "@ant-design/icons";

const { Text, Title } = Typography;

const TASKS = [
  {
    id: 1,
    title: "Xem video bài giảng",
    desc: "Đã xem 12:05 / 15:00",
    icon: <PlayCircleOutlined />,
    status: "done", // done, active, todo
    points: "+10 điểm",
  },
  {
    id: 2,
    title: "Đọc tài liệu lý thuyết",
    desc: "Yêu cầu: > 5 phút",
    icon: <ReadOutlined />,
    status: "active", // Đang thực hiện
    points: "+20 điểm",
  },
  {
    id: 3,
    title: "Hoàn thành Quiz",
    desc: "0/10 câu hỏi",
    icon: <FormOutlined />,
    status: "todo", // Chưa mở
    points: "+50 điểm",
  },
  {
    id: 4,
    title: "Thảo luận bài học",
    desc: "Viết ít nhất 1 câu hỏi",
    icon: <ClockCircleOutlined />,
    status: "todo",
    points: "+5 điểm",
  },
];

const LearningTasks = () => {

  return (
    <Card 
      title={<span>🚀 Nhiệm vụ bài học</span>} 
      bordered={false}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: 20 }}
    >

      {/* DANH SÁCH TASK */}
      <List
        itemLayout="horizontal"
        dataSource={TASKS}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar 
                    shape="square" 
                    size="large" 
                    icon={item.icon} 
                    style={{
                        backgroundColor: item.status === 'done' ? '#f6ffed' : (item.status === 'active' ? '#e6f7ff' : '#f5f5f5'),
                        color: item.status === 'done' ? '#52c41a' : (item.status === 'active' ? '#1890ff' : '#d9d9d9'),
                        border: '1px solid',
                        borderColor: item.status === 'done' ? '#b7eb8f' : (item.status === 'active' ? '#91d5ff' : '#f0f0f0')
                    }}
                />
              }
              title={
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                      <Text strong style={{ color: item.status === 'todo' ? '#bfbfbf' : 'inherit' }}>
                          {item.title}
                      </Text>
                  </div>
              }
              description={
                  <div>
                      <div style={{fontSize: 12, color: '#8c8c8c', marginBottom: 4}}>{item.desc}</div>
                      {item.status === 'done' && <Tag color="success" icon={<CheckCircleFilled />}>Hoàn thành</Tag>}
                      {item.status === 'active' && <Button type="primary" size="small" shape="round">Tiếp tục <RightOutlined /></Button>}
                      {item.status === 'todo' && <Tag icon={<LockOutlined />}>{item.points}</Tag>}
                  </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default LearningTasks;