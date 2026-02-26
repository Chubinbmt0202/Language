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
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  ShareAltOutlined,
  ContainerOutlined,
  BookOutlined,
  TranslationOutlined,
  SettingFilled,
  ReadOutlined,
  LeftOutlined,
  RightOutlined,
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
    icon: <HomeFilled />,
    label: "Trang chủ",
  },
  {
    key: "Distance",
    icon: <ShareAltOutlined />,
    label: "Lộ trình học tập",
  },
  {
    key: "ExercisesLibrary",
    icon: <ContainerOutlined />,
    label: "Kho bài tập",
  },
  {
    key: "vocabulary",
    icon: <BookOutlined />,
    label: "Kho từ vựng",
  },
  {
    type: "divider",
  },
  {
    key: "other_courses",
    type: "group",
    label: "KHÓA HỌC KHÁC",
    children: [
      {
        key: "japanese",
        icon: <TranslationOutlined />,
        label: "Tiếng Nhật",
        children: [
          { key: "japanese/multiple-choice", label: "Trắc nghiệm" },
          { key: "japanese/vocabulary", label: "Bài tập từ vựng" },
          { key: "japanese/fill-passage", label: "Điền vào đoạn văn" },
          { key: "japanese/listen-and-fill", label: "Nghe và điền" },
        ],
      },
    ],
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
    <Layout style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* SIDEBAR CHO DESKTOP */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={250}
          style={{
            overflow: "visible",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 99,
            background: "#ffffff",
            borderRight: "1px solid #f1f5f9",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Logo */}
          <div
            style={{
              padding: "24px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                  color: "white",
                  borderRadius: "10px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                <ReadOutlined />
              </div>
              {!collapsed && (
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#0f172a",
                    whiteSpace: "nowrap",
                  }}
                >
                  PrepMaster
                </span>
              )}
            </div>
            {/* Desktop Toggle Button */}
            {!isMobile && (
              <div
                onClick={toggleSidebar}
                style={{
                  position: "absolute",
                  right: "-14px",
                  top: "28px",
                  width: "28px",
                  height: "28px",
                  background: "#d2d2d2ff",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(99, 102, 241, 0.4)",
                  zIndex: 100,
                  fontSize: "10px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {collapsed ? <RightOutlined /> : <LeftOutlined />}
              </div>
            )}
          </div>

          {/* Menu */}
          <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
            <Menu
              className="custom-sidebar-menu"
              mode="inline"
              selectedKeys={[location.pathname.substring(1)]}
              defaultOpenKeys={["english", "japanese"]}
              items={sidebarItems}
              onClick={({ key }) => handleMenuClick(key)}
            />
          </div>

          {/* Bottom Area: Settings & User Profile */}
          {!collapsed && (
            <div style={{ marginTop: "auto", width: "100%" }}>
              <div style={{ padding: "0 16px 16px 16px" }}>
                <div
                  onClick={() => handleMenuClick("Setting")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: location.pathname === "/Setting" ? "#3b82f6" : "#64748b",
                    fontWeight: location.pathname === "/Setting" ? "700" : "500",
                    background: location.pathname === "/Setting" ? "#e0e7ff" : "transparent",
                    transition: "all 0.2s",
                    marginBottom: "12px"
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== "/Setting") {
                      e.currentTarget.style.background = "#f1f5f9";
                      e.currentTarget.style.color = "#1e293b";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== "/Setting") {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748b";
                    }
                  }}
                >
                  <SettingFilled style={{ fontSize: "18px" }} />
                  <span>Cài đặt</span>
                </div>

                {user ? (
                  <Dropdown menu={{ items: userMenu }} placement="topLeft">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "#f8fafc",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#f8fafc")}
                    >
                      <Avatar src={user.photoURL} icon={<UserOutlined />} size={40} />
                      <div style={{ overflow: "hidden" }}>
                        <div
                          style={{
                            fontWeight: "700",
                            color: "#0f172a",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "14px",
                          }}
                        >
                          {user.displayName || "Người dùng"}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#3b82f6",
                            fontWeight: "500",
                          }}
                        >
                          Premium Member
                        </div>
                      </div>
                    </div>
                  </Dropdown>
                ) : (
                  <Button type="primary" block onClick={() => navigate("/login")}>
                    Đăng nhập
                  </Button>
                )}
              </div>
            </div>
          )}
        </Sider>
      )}

      {/* DRAWER CHO MOBILE */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ background: "#2563eb", color: "white", borderRadius: "6px", width: "28px", height: "28px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}><BookOutlined /></div>
            <span style={{ fontWeight: "800" }}>PrepMaster</span>
          </div>
        }
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
        size={250}
      >
        <Menu
          className="custom-sidebar-menu"
          mode="inline"
          selectedKeys={[location.pathname.substring(1)]}
          items={sidebarItems}
          onClick={({ key }) => handleMenuClick(key)}
          style={{ marginTop: 16 }}
        />
        {user && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, borderTop: "1px solid #f0f0f0" }}>
            <Button danger block onClick={() => { logout(); navigate("/login"); setDrawerVisible(false); }}>Đăng xuất</Button>
          </div>
        )}
      </Drawer>

      <Layout
        style={{
          // Nếu mobile thì không cần marginLeft, nếu desktop thì lùi theo trạng thái collapsed
          marginLeft: isMobile ? 0 : collapsed ? 80 : 250,
          transition: "all 0.2s",
          minHeight: "100vh",
          background: "transparent",
        }}
      >
        <Header
          className={!isMobile ? "desktop-header" : ""}
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: isMobile ? "flex" : "none", // Ẩn hoàn toàn trên desktop UI
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
            margin: isMobile ? "80px 16px 16px" : "32px 32px 24px",
            padding: 0,
            background: "transparent",
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
