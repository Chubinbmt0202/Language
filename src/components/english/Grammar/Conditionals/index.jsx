import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row, Typography, Button, Tag, Skeleton } from "antd";
import { 
  RightOutlined, 
  FormOutlined,       // Icon cho Chia động từ
  RetweetOutlined,    // Icon cho Viết lại câu
  UserOutlined,
  FileTextOutlined,
  HeartOutlined,
  HeartFilled
} from "@ant-design/icons";
import {lightGradientPalette} from "../../../../constants/color"


const { Title, Paragraph, Text } = Typography;

// 1. Component Menu chính
export const ConditionalsMenu = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hiệu ứng giả lập loading 1 giây
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Dữ liệu nội dung (Content) đã được nâng cấp
  const content = [
    { 
      id: "cd1", 
      title: "Chia động từ (Verb Conjugation)", 
      path: "verb-conjugation", 
      icon: <FormOutlined />,
      desc: "Chia động từ trong mệnh đề If và mệnh đề chính theo loại 0, 1, 2, 3.",
      level: "Intermediate",
      participants: 1350,
      questionCount: 200
    },
    { 
      id: "cd2", 
      title: "Viết lại câu (Sentence Rewrite)", 
      path: "sentence-rewrite", 
      icon: <RetweetOutlined />,
      desc: "Viết lại câu sử dụng 'Unless', đảo ngữ hoặc chuyển đổi câu điều kiện.",
      level: "Advanced",
      participants: 980,
      questionCount: 150
    },
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
        setFavorites(favorites.filter(favId => favId !== id));
    } else {
        setFavorites([...favorites, id]);
    }
  };

  // Hàm lấy màu nền an toàn (fallback nếu import lỗi)
  const getBackground = (index) => {
      if (lightGradientPalette && lightGradientPalette.length > 0) {
          return lightGradientPalette[index % lightGradientPalette.length];
      }
      return "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
  };

  // Component Khung xương (Skeleton)
  const LoadingSkeleton = () => (
    <Card
        style={{ height: '100%', borderRadius: 16, border: 'none', boxShadow: 'none' }}
        bodyStyle={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Skeleton.Avatar active shape="square" size={48} />
            <Skeleton.Button active size="small" style={{ width: 60, borderRadius: 20 }} />
        </div>
        <Skeleton active paragraph={{ rows: 2 }} title={{ width: '70%' }} />
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <Skeleton.Button active size="small" style={{ width: 50 }} />
                <Skeleton.Button active size="small" style={{ width: 50 }} />
             </div>
             <Skeleton.Button active block style={{ height: 40, borderRadius: 12 }} />
        </div>
    </Card>
  );

  return (
    <div style={{ padding: "0 24px" }}>
      {/* Header giới thiệu */}
      <div style={{ marginBottom: 32 }}>
        <Title level={2} style={{ margin: 0 }}>Câu Điều Kiện (Conditionals)</Title>
        <Text type="secondary">Thành thạo If loại 1, 2, 3, đảo ngữ và biến thể</Text>
      </div>

      <Row gutter={[24, 24]}>
        {loading 
          ? Array.from({ length: 4 }).map((_, index) => (
              // Loading: Hiển thị Skeleton (Chia 4 cột)
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`skeleton-${index}`}>
                 <LoadingSkeleton />
              </Col>
            ))
          : content.map((item, index) => {
              const isFavorite = favorites.includes(item.id);
              return (
                // Content thật: Hiển thị Card (Chia 4 cột)
                <Col xs={24} sm={12} md={8} lg={6} xl={6} key={item.path}>
                  <Card
                    hoverable
                    onClick={() => navigate(item.path)}
                    style={{ 
                      height: '100%', 
                      borderRadius: 16, 
                      border: 'none',
                      background: getBackground(index),
                      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    bodyStyle={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    {/* --- HEADER --- */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                        <div style={{ 
                            background: 'rgba(255,255,255,0.6)', 
                            backdropFilter: 'blur(10px)',
                            borderRadius: 12, 
                            width: 48, 
                            height: 48, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            fontSize: 24,
                            color: 'rgba(0,0,0,0.7)'
                        }}>
                            {item.icon}
                        </div>
                        <Tag style={{ background: '#fff', border: 'none', color: 'rgba(0,0,0,0.85)', fontWeight: '600', borderRadius: 20, padding: '0 12px', height: 24, lineHeight: '24px' }}>
                            {item.level}
                        </Tag>
                    </div>

                    {/* --- BODY --- */}
                    <Title level={4} style={{ marginBottom: 8, marginTop: 0, color: 'rgba(0,0,0,0.85)' }}>
                      {item.title}
                    </Title>
                    <Paragraph ellipsis={{ rows: 3 }} style={{ color: 'rgba(0,0,0,0.55)', flex: 1, marginBottom: 'auto' }}>
                      {item.desc}
                    </Paragraph>

                    {/* --- FOOTER --- */}
                    <div style={{ marginTop: 24 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, color: 'rgba(0,0,0,0.55)', fontSize: 13 }}>
                            <div className="flex items-center gap-2"><UserOutlined /><span>{item.participants}</span></div>
                            <div className="flex items-center gap-2"><FileTextOutlined /><span>{item.questionCount} câu</span></div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <Button block style={{ flex: 1, background: '#fff', border: 'none', color: '#333', fontWeight: 600, borderRadius: 12, height: 40, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }} icon={<RightOutlined />} iconPosition="end">
                                Làm bài
                            </Button>
                            <Button style={{ width: 40, background: '#fff', border: 'none', borderRadius: 12, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', color: isFavorite ? '#ff4d4f' : 'rgba(0,0,0,0.4)' }} onClick={(e) => toggleFavorite(item.id, e)}>
                                {isFavorite ? <HeartFilled /> : <HeartOutlined />}
                            </Button>
                        </div>
                    </div>
                  </Card>
                </Col>
              );
            })
        }
      </Row>
    </div>
  );
};

// 2. Component Layout
const Conditionals = () => {
  return (
    <div style={{ padding: '24px 0' }}>
      <Outlet />
    </div>
  );
};

export default Conditionals;