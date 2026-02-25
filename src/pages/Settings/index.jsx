import React, { useState } from 'react';
import { Layout, Typography, Switch, Divider, Card, Row, Col, Select, Button } from 'antd';
import { GlobalOutlined, BgColorsOutlined, BellOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('vi');
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>Cài đặt</Title>

      <Card bordered={false} style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        {/* Theme Settings */}
        <Row align="middle" justify="space-between" style={{ padding: '16px 0' }}>
          <Col>
            <Space>
              <BgColorsOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '12px' }} />
              <div>
                <Title level={5} style={{ margin: 0 }}>Giao diện</Title>
                <Text type="secondary">Tùy chỉnh chế độ sáng tối của ứng dụng</Text>
              </div>
            </Space>
          </Col>
          <Col>
            <Switch
              checkedChildren="Tối"
              unCheckedChildren="Sáng"
              checked={theme === 'dark'}
              onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </Col>
        </Row>

        <Divider style={{ margin: '8px 0' }} />

        {/* Language Settings */}
        <Row align="middle" justify="space-between" style={{ padding: '16px 0' }}>
          <Col>
            <Space>
              <GlobalOutlined style={{ fontSize: '20px', color: '#52c41a', marginRight: '12px' }} />
              <div>
                <Title level={5} style={{ margin: 0 }}>Ngôn ngữ</Title>
                <Text type="secondary">Cài đặt ngôn ngữ hiển thị</Text>
              </div>
            </Space>
          </Col>
          <Col>
            <Select value={language} onChange={setLanguage} style={{ width: 120 }}>
              <Option value="vi">Tiếng Việt</Option>
              <Option value="en">English</Option>
              <Option value="ja">日本語</Option>
            </Select>
          </Col>
        </Row>

        <Divider style={{ margin: '8px 0' }} />

        {/* Notification Settings */}
        <Row align="middle" justify="space-between" style={{ padding: '16px 0' }}>
          <Col>
            <Space>
              <BellOutlined style={{ fontSize: '20px', color: '#faad14', marginRight: '12px' }} />
              <div>
                <Title level={5} style={{ margin: 0 }}>Thông báo</Title>
                <Text type="secondary">Nhận thông báo về bài tập và tiến độ mới</Text>
              </div>
            </Space>
          </Col>
          <Col>
            <Switch
              checked={notifications}
              onChange={setNotifications}
            />
          </Col>
        </Row>

        <Divider style={{ margin: '8px 0' }} />

        {/* Data & Privacy */}
        <Row align="middle" justify="space-between" style={{ padding: '16px 0' }}>
          <Col>
            <Space>
              <SafetyCertificateOutlined style={{ fontSize: '20px', color: '#f5222d', marginRight: '12px' }} />
              <div>
                <Title level={5} style={{ margin: 0 }}>Quyền riêng tư</Title>
                <Text type="secondary">Quản lý dữ liệu và quyền riêng tư tài khoản</Text>
              </div>
            </Space>
          </Col>
          <Col>
            <Button type="default">Quản lý</Button>
          </Col>
        </Row>
      </Card>

      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <Button type="primary" size="large" style={{ padding: '0 40px', borderRadius: '8px' }}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
};

// Add Space component import properly
import { Space } from 'antd';

export default Settings;
