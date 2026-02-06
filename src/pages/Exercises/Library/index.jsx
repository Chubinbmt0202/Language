/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { 
  Card, 
  Row, 
  Col, 
  Typography, 
  Tag, 
  Button, 
  Segmented 
} from "antd";
import { 
  UserOutlined, 
  FileTextOutlined, 
  RightOutlined, 
  ReadOutlined,
  CustomerServiceOutlined,
  EditOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

// 1. Danh sách các Gradient đẹp được tuyển chọn
const gradientPalette = [
"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)", // Xanh trời nhạt
    "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", // Xanh bạc hà
    "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)", // Hồng cam nhẹ
    "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", // Xanh ngọc bích
    "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)", // Vàng tím pastel
    "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)", // Tím xanh nhạt
    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", // Màu đào
    "linear-gradient(120deg, #f6d365 0%, #fda085 100%)", // Vàng cam xoài
];

const exercisesData = [
  // --- TIẾNG ANH ---
  {
    id: 1,
    title: "Luyện ngữ pháp (Grammar)",
    description: "Tổng hợp 12 thì, câu điều kiện, bị động và các dạng từ loại.",
    participants: 1205,
    questionCount: 500,
    category: "english",
    level: "TOEIC",
    path: "/english/grammar",
    icon: <EditOutlined />,
  },
  {
    id: 2,
    title: "Luyện dịch (Translation)",
    description: "Thực hành dịch câu Việt - Anh để cải thiện tư duy ngôn ngữ.",
    participants: 850,
    questionCount: 120,
    category: "english",
    level: "Basic",
    path: "/english/translation-practice",
    icon: <ReadOutlined />,
  },
];

const Exercises = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filteredData = exercisesData.filter(item => {
    if (filter === "All") return true;
    return item.category.toLowerCase() === filter.toLowerCase();
  });

  // Hàm chọn màu ngẫu nhiên nhưng CỐ ĐỊNH theo ID của bài tập
  // (Để khi filter không bị đổi màu loạn xạ)
  const getGradient = (id) => {
      // Dùng ID để lấy dư, đảm bảo item ID=1 luôn có màu giống nhau mỗi lần load
      return gradientPalette[id % gradientPalette.length]; 
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <Title level={2} style={{ margin: 0 }}>Kho bài tập</Title>
          <Text type="secondary">Chọn chủ đề bạn muốn luyện tập hôm nay</Text>
        </div>
        
      
      </div>

      {/* --- GRID DANH SÁCH BÀI TẬP --- */}
      <Row gutter={[24, 24]}>
        {filteredData.map((item) => (
          <Col key={item.id} xs={24} sm={12} lg={8} xl={6}>
            <Card
              hoverable
              style={{ 
                height: '100%', 
                borderRadius: 16, // Bo tròn nhiều hơn chút cho mềm mại
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: 'none', // Bỏ viền để gradient đẹp hơn
                background: getGradient(item.id), // ÁP DỤNG GRADIENT Ở ĐÂY
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate(item.path)}
            >
                {/* Header Card: Icon & Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ 
                        background: 'rgba(255,255,255,0.2)', 
                        backdropFilter: 'blur(10px)',
                        borderRadius: 12, 
                        width: 50, 
                        height: 50, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: 24,
                        color: '#fff'
                    }}>
                        {item.icon}
                    </div>
                    
                    <Tag 
                        style={{ 
                            background: 'rgba(255,255,255,0.9)', 
                            border: 'none', 
                            color: '#333', 
                            fontWeight: '600',
                            borderRadius: 20,
                            padding: '0 12px'
                        }}
                    >
                        {item.level}
                    </Tag>
                </div>

                {/* Nội dung chính: Title & Description */}
                <Title level={4} style={{ color: '#fff', marginBottom: 8, marginTop: 0 }}>
                  {item.title}
                </Title>
                <Paragraph 
                    ellipsis={{ rows: 3 }} 
                    style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 'auto', flex: 1 }}
                >
                  {item.description}
                </Paragraph>

                {/* Footer: Thống kê & Nút */}
                <div style={{ marginTop: 24 }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: 16,
                        color: 'rgba(255,255,255,0.8)'
                    }}>
                        <div className="flex items-center gap-2">
                            <UserOutlined />
                            <span>{item.participants}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileTextOutlined />
                            <span>{item.questionCount} bài</span>
                        </div>
                    </div>
                </div>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exercises;