import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Card, Col, Row, Typography, Button, Tag, Skeleton } from "antd";
import { 
  RightOutlined, 
  FontSizeOutlined, 
  ClockCircleOutlined, 
  TeamOutlined, 
  LinkOutlined, 
  QuestionCircleOutlined, 
  RetweetOutlined,
  UserOutlined,
  FileTextOutlined,
  HeartOutlined,
  HeartFilled
} from "@ant-design/icons";
import {lightGradientPalette} from "../../../constants/color"

const { Title, Paragraph, Text } = Typography;



export const GrammarMenu = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Thêm State Loading

  // 2. Giả lập hiệu ứng Loading khi vừa vào trang
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 500); // Load trong 1 giây
    return () => clearTimeout(timer);
  }, []);

  const content = [
    { 
      id: "g1", title: "Từ loại (Word Form)", path: "word-form", icon: <FontSizeOutlined />,
      desc: "Nắm vững vị trí, chức năng của Danh - Động - Tính - Trạng từ.", level: "Basic", participants: 1540, questionCount: 200
    }, 
    { 
      id: "g2", title: "Thì (Tense)", path: "tense", icon: <ClockCircleOutlined />,
      desc: "Thành thạo công thức và dấu hiệu nhận biết của 12 thì cơ bản.", level: "Elementary", participants: 2100, questionCount: 500
    },
    { 
      id: "g3", title: "Đại từ (Pronouns)", path: "pronouns", icon: <TeamOutlined />,
      desc: "Cách dùng đại từ nhân xưng, sở hữu và phản thân chính xác.", level: "Basic", participants: 980, questionCount: 150
    },
    { 
      id: "g4", title: "Giới từ & Liên từ", path: "prepositions", icon: <LinkOutlined />,
      desc: "Các cụm giới từ thông dụng và từ nối trong câu phức.", level: "Intermediate", participants: 850, questionCount: 120
    },
    { 
      id: "g5", title: "Câu điều kiện", path: "conditionals", icon: <QuestionCircleOutlined />,
      desc: "Cấu trúc câu điều kiện loại 0, 1, 2, 3 và dạng hỗn hợp.", level: "Intermediate", participants: 1120, questionCount: 80
    },
    { 
      id: "g6", title: "Câu bị động", path: "passive-voice", icon: <RetweetOutlined />,
      desc: "Chuyển đổi câu chủ động sang bị động trong các tình huống.", level: "Advanced", participants: 760, questionCount: 100
    },
    // Thêm data giả để test layout 4 cột nếu cần
    { 
        id: "g7", title: "Mệnh đề quan hệ", path: "relative-clauses", icon: <LinkOutlined />,
        desc: "Cách sử dụng Who, Whom, Which, That và mệnh đề rút gọn.", level: "Advanced", participants: 600, questionCount: 90
    },
    { 
        id: "g8", title: "Câu gián tiếp", path: "reported-speech", icon: <RetweetOutlined />,
        desc: "Tường thuật lại lời nói của người khác một cách chính xác.", level: "Intermediate", participants: 550, questionCount: 110
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

  // Component hiển thị khung xương khi đang Loading
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
      <div style={{ marginBottom: 32 }}>
        <Title level={2} style={{ margin: 0 }}>Luyện tập Ngữ pháp</Title>
        <Text type="secondary">Chọn chủ đề ngữ pháp bạn muốn ôn luyện hôm nay</Text>
      </div>

      <Row gutter={[24, 24]}>
        {/* 3. Render logic: Loading vs Real Content */}
        {loading 
          ? Array.from({ length: 8 }).map((_, index) => (
              // Loading State: Render 8 cái khung xương
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={`skeleton-${index}`}>
                 <LoadingSkeleton />
              </Col>
            ))
          : content.map((item, index) => {
              const isFavorite = favorites.includes(item.id);
              return (
                // Real Content: Render thẻ thật
                // 4. CHIA CỘT: lg={6} xl={6} tương ứng với 4 cột (24/6 = 4)
                <Col xs={24} sm={12} md={8} lg={6} xl={6} key={item.path}>
                  <Card
                    hoverable
                    onClick={() => navigate(item.path)}
                    style={{ 
                      height: '100%', 
                      borderRadius: 16, 
                      border: 'none',
                      background: lightGradientPalette[index % lightGradientPalette.length],
                      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    bodyStyle={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Header */}
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

                    {/* Body */}
                    <Title level={4} style={{ marginBottom: 8, marginTop: 0, color: 'rgba(0,0,0,0.85)' }}>
                      {item.title}
                    </Title>
                    <Paragraph ellipsis={{ rows: 3 }} style={{ color: 'rgba(0,0,0,0.55)', flex: 1, marginBottom: 'auto' }}>
                      {item.desc}
                    </Paragraph>

                    {/* Footer */}
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

const Grammar = () => {
  return (
    <div style={{ padding: '24px 0' }}>
      <Outlet />
    </div>
  );
};

export default Grammar;