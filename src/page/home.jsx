import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HiraganaPractice from '../components/japan/FillInBlank/index.jsx';
import VocabularyJapan from '../components/japan/Vocabulary/index.jsx';
import ListenAndFillJapanese from '../components/japan/ListenAndFill/index.jsx';
import JapaneseQuiz from '../components/japan/Multichoice/index.jsx';

const { Header, Content, Sider } = Layout;

const sidebarItems = [
  {
    key: 'dashboard',
    icon: <UserOutlined />,
    label: 'Tổng quan',
  },
  {
    key: 'English',
    icon: <LaptopOutlined />,
    label: 'Tiếng Anh',
    children: [
      { key: 'multiple-choice-english', label: 'Trắc nghiệm', title: 'Trắc nghiệm Tiếng Anh' },
      { key: 'fill-in-the-blank', label: 'Điền vào chỗ trống' },
      { key: 'listen-and-fill', label: 'Nghe và điền' },
    ],
  },
  {
    key: 'Japanese',
    icon: <NotificationOutlined />,
    label: 'Tiếng Nhật',
    children: [
      { key: 'multiple-choice-japanese', label: 'Trắc nghiệm', title: 'Trắc nghiệm Tiếng Nhật' },
      { key: 'vocabulary-japanese', label: 'Bài tập từ vựng', title: 'Bài tập từ vựng Tiếng Nhật' },
      { key: 'fill-passage', label: 'Điền vào đoạn văn', title: 'Điền vào đoạn văn Tiếng Nhật' },
      { key: 'listen-and-fill-japanese', label: 'Nghe và điền' },
    ],
  },
  {
    key: 'Chinese',
    icon: <NotificationOutlined />,
    label: 'Tiếng Trung',
    children: [
      { key: 'profile', label: 'Hồ sơ cá nhân' },
      { key: 'security', label: 'Bảo mật' },
    ],
  },
];

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const renderContent = (key) => {
    switch (key) {
      case 'dashboard':
        return <div>Chào mừng đến với trang tổng quan!</div>;
      case 'multiple-choice-japanese':
        return <JapaneseQuiz />;
      case 'vocabulary-japanese':
        return <VocabularyJapan />;
      case 'fill-passage':
        return <HiraganaPractice />;
      case 'listen-and-fill-japanese':
        return <ListenAndFillJapanese />;
      default:
        return <div>Nội dung đang được cập nhật cho mục: {key}</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider width={250} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['dashboard']}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={sidebarItems}
            onClick={(e) => setSelectedKey(e.key)}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'App' }, { title: selectedKey }]}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent(selectedKey)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;