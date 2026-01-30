import React, { useState } from "react";
import {
  useNavigate,
  useLocation,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";

const { Content, Sider, Header } = Layout;
const sidebarItems = [
  {
    key: "dashboard",
    icon: <UserOutlined />,
    label: "Tổng quan",
  },
  {
    key: "english",
    icon: <LaptopOutlined />,
    label: "Tiếng Anh",
    children: [
      { key: "english/grammar", label: "Ngữ pháp" },
      { key: "english/fill-in-the-blank", label: "Điền vào chỗ trống" },
      { key: "english/listen-and-fill", label: "Nghe và điền" },
    ],
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
];

const breadcrumbNameMap = {
  'dashboard': 'Tổng quan',
  'english': 'Tiếng Anh',
  'grammar': 'Ngữ pháp',
  'word-form': 'Từ loại',
  'fill-in-the-blank': 'Điền từ',
  'suffix-exercise': 'Hậu tố',
  'find-errors': 'Tìm lỗi sai',
  'japanese': 'Tiếng Nhật',
  // Thêm các key khác...
};

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = [
  { title: <Link to="/">Home</Link> },
  ...pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const snippet = pathSnippets[index];
    
    // Nếu có trong map thì dùng tiếng Việt, không thì format text mặc định
    const label = breadcrumbNameMap[snippet] || 
                  snippet.charAt(0).toUpperCase() + snippet.slice(1).replace(/-/g, ' ');

    return { title: <Link to={url}>{label}</Link> };
  }),
];

return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR CỐ ĐỊNH */}
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
          bottom: 0,
          zIndex: 1002, // Cao hơn Header
          background: colorBgContainer,
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <div style={{ height: 32, margin: 16, background: "rgba(0, 0, 0, 0.05)", borderRadius: 6 }} />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.substring(1)]}
          defaultOpenKeys={["english", "japanese"]}
          items={sidebarItems}
          onClick={({ key }) => navigate(`/${key}`)}
        />
      </Sider>

      {/* LAYOUT CHÍNH */}
      <Layout 
        style={{ 
          marginLeft: collapsed ? 80 : 250, // Cập nhật lại cho khớp chuẩn AntD
          transition: "margin-left 0.2s",
          minHeight: "100vh",
        }}
      >
        {/* HEADER CỐ ĐỊNH */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            position: "fixed", // Chuyển sang fixed để tuyệt đối đứng yên
            top: 0,
            right: 0,
            zIndex: 1001,
            // Header phải co giãn theo Sidebar
            width: `calc(100% - ${collapsed ? 80 : 250}px)`, 
            transition: "width 0.2s",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64, background: "transparent" }}
          />
          <Breadcrumb items={breadcrumbItems} style={{ margin: "0 16px" }} />
        </Header>

        {/* CONTENT */}
        <Content
          style={{
            margin: "80px 16px 16px", // 64px (header) + 24px (khoảng cách top)
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "calc(100vh - 112px)", // Đảm bảo luôn lấp đầy màn hình
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
