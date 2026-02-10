// src/page/Login.jsx
import React, { useEffect } from "react";
import { Button, Card, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "../util/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const { loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      background: "#f0f2f5" 
    }}>
      <Card style={{ width: 400, textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
        <Title level={3}>Chào mừng trở lại</Title>
        <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
          Đăng nhập để tiếp tục việc học của bạn
        </Text>
        
        <Button 
          type="primary" 
          icon={<GoogleOutlined />} 
          size="large" 
          block 
          onClick={loginWithGoogle}
        >
          Đăng nhập bằng Google
        </Button>
      </Card>
    </div>
  );
};

export default Login;