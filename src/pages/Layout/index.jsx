import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useLocation,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import {
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  KeyOutlined,
  BellOutlined,
  HomeOutlined,
  AuditOutlined,
  BookOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Drawer,
  Avatar,
  Dropdown,
  Space,
  Badge,
} from "antd";
import GlobalVocabManager from "../../components/GlobalVocabManager/index.jsx";
import { useAuth } from "../../util/AuthContext.jsx";


const { Content, Sider, Header } = Layout;
const sidebarItems = [
  {
    key: "Home",
    icon: <HomeOutlined />,
    label: "Trang chủ",
  },
  {
    key: "Distance",
    icon: <KeyOutlined />,
    label: "Lộ trình học tập",
  },
  {
    key: "ExercisesLibrary",
    icon: <BookOutlined />,
    label: "Kho bài tập",
    // children: [
    //   { key: "english/grammar", label: "Ngữ pháp" },
    //   { key: "english/translation-practice", label: "Luyện dịch câu" },
    // ],
  },
  {
    key: "vocabulary",
    icon: <AuditOutlined />,
    label: "Kho từ vựng",
  },
  {
    key: "japanese",
    icon: <NotificationOutlined />,
    label: "Tiếng Nhật",
    children: [
      { key: "japanese/multiple-choice", label: "Trắc nghiệm" },
      { key: "japanese/vocabulary", label: "Bài tập từ vựng" },
      { key: "japanese/fill-passage", label: "Điền vào đoạn văn" },
      { key: "japanese/listen-and-fill", label: "Nghe và điền" },
    ],
  },
  {
    key: "Setting",
    icon: <UserOutlined />,
    label: "Cài đặt",
  },
];

const HomeLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();

  // Kiểm tra kích thước màn hình để xác định chế độ mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setCollapsed(true); // Tự động đóng sidebar nếu là mobile
    };

    handleResize(); // Chạy lần đầu khi load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setDrawerVisible(!drawerVisible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const handleMenuClick = (key) => {
    navigate(`/${key}`);
    if (isMobile) setDrawerVisible(false); // Đóng drawer sau khi chọn menu trên mobile
  };


const userMenu = [
    {
      key: 'profile',
      label: 'Hồ sơ cá nhân',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Đăng xuất',
      danger: true,
      onClick: () => {
        logout();
        navigate('/login');
      }
    }
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR CHO DESKTOP */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={250}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 99,
            background: colorBgContainer,
            borderRight: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(0, 0, 0, 0.05)",
              borderRadius: 6,
            }}
          />
          <Menu
            mode="inline"
            selectedKeys={[location.pathname.substring(1)]}
            defaultOpenKeys={["english", "japanese"]}
            items={sidebarItems}
            onClick={({ key }) => handleMenuClick(key)}
          />
        </Sider>
      )}

      {/* DRAWER CHO MOBILE */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
        size={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.substring(1)]}
          items={sidebarItems}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </Drawer>

      <Layout
        style={{
          // Nếu mobile thì không cần marginLeft, nếu desktop thì lùi theo trạng thái collapsed
          marginLeft: isMobile ? 0 : collapsed ? 80 : 250,
          transition: "all 0.2s",
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 99,
            width: isMobile ? "100%" : `calc(100% - ${collapsed ? 80 : 250}px)`,
            transition: "all 0.2s",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          {/* LEFT: Toggle Sidebar */}
          <Button
            type="text"
            icon={
              collapsed && !isMobile ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )
            }
            onClick={toggleSidebar}
            style={{ fontSize: "16px", width: 48, height: 48 }}
          />

          {/* RIGHT: Notification + Avatar */}
          <div>
            {user ? (
              <Dropdown menu={{ items: userMenu }} placement="bottomRight">
                <Space style={{ cursor: 'pointer' }}>
                  <span style={{ marginRight: 8, fontWeight: 500, display: isMobile ? 'none' : 'block' }}>
                    {user.displayName}
                  </span>
                  <Avatar src={user.photoURL} icon={<UserOutlined />} />
                </Space>
              </Dropdown>
            ) : (
              <Button type="primary" onClick={() => navigate('/login')}>
                Đăng nhập
              </Button>
            )}
          </div>
        </Header>

        <Content
          style={{
            margin: "80px 16px 16px",
            padding: isMobile ? 12 : 24, // Giảm padding trên mobile để tăng diện tích hiển thị
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "calc(100vh - 112px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <GlobalVocabManager />
    </Layout>
  );
};
export default HomeLayout;
