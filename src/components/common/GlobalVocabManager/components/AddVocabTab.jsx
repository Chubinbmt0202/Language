/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import { Layout, Card, Row, Col, Input, Button, Table, Typography, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as wanakana from 'wanakana'; // Thư viện chuyển đổi Nhật ngữ
import MenuContent from "./MenuContent";
import { Select, Modal } from "antd";
import { getVocabData, saveVocabData } from "../../../../util/vocabStorage";
import { columnsEnglish, columnsJapan } from "../constants/columns";

const { Header: AntHeader, Content: AntContent, Sider } = Layout;
const { Title } = Typography;

const AddVocabTab = ({ activeLang, form, dataSource, onSave }) => {
  const isEn = activeLang === "en";
  const [topics, setTopics] = React.useState([]);
const [selectedTopic, setSelectedTopic] = React.useState(null);
const [topicModalOpen, setTopicModalOpen] = React.useState(false);
const [newTopicName, setNewTopicName] = React.useState("");


  // Logic tự động chuyển đổi khi gõ Romaji
  const handleRomajiChange = (e) => {
    const value = e.target.value;
    if (!isEn) {
      // Cập nhật giá trị vào Form của Antd
      form.setFieldsValue({
        hiragana: wanakana.toHiragana(value),
        katakana: wanakana.toKatakana(value),
      });
    }
  };
  useEffect(() => {
  const data = getVocabData();
  const langData = data[activeLang]?.topics || {};
  const topicList = Object.entries(langData).map(([key, value]) => ({
    key,
    name: value.name
  }));

  setTopics(topicList);
  setSelectedTopic(topicList[0]?.key || null);
}, [activeLang]);

  return (
    <Layout style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", border: "1px solid #f0f0f0", minHeight: "400px" }} hasSider>
      <Sider theme="light" width={250} breakpoint="lg" collapsedWidth="0" trigger={null} style={{ borderRight: "1px solid #f0f0f0" }}>
        <MenuContent />
      </Sider>

      <Layout style={{ background: "#fff" }}>
        <AntHeader style={{ background: "#fff", padding: "0 24px", display: "flex", alignItems: "center", borderBottom: "1px solid #f0f0f0", height: 64 }}>
          <Title level={4} style={{ margin: 0 }}>{isEn ? "English Vocab" : "Japanese Vocab"}</Title>
        </AntHeader>

        <AntContent style={{ padding: "24px" }}>
          {/* Sử dụng Form để bọc Card nhập liệu */}
          <Form form={form} onFinish={onSave} layout="vertical">
            <Card size="small" title="Thêm từ mới" style={{ marginBottom: 24, borderRadius: 8 }}>
              
              <Row gutter={[12, 12]}>
                {isEn ? (
                  <>
                    <Col xs={24} md={8}>
                      <Form.Item name="word" rules={[{ required: true, message: 'Nhập từ vựng!' }]}>
                        <Input placeholder="Từ mới" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                      <Form.Item name="meaning" rules={[{ required: true, message: 'Nhập nghĩa!' }]}>
                        <Input placeholder="Nghĩa" />
                      </Form.Item>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs={24} md={8}>
                      <Form.Item name="meaning" rules={[{ required: true, message: 'Nhập nghĩa!' }]}>
                        <Input placeholder="Nghĩa (Con mèo)" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                      <Form.Item name="romaji" rules={[{ required: true, message: 'Nhập romaji!' }]}>
                        <Input 
                          placeholder="Romaji (neko)" 
                          onChange={handleRomajiChange} // Bắt sự kiện gõ phím
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Item name="hiragana">
                        <Input placeholder="Hiragana" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                      </Form.Item>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Item name="katakana">
                        <Input placeholder="Katakana" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                      </Form.Item>
                    </Col>
                  </>
                )}
                <Col xs={24} md={isEn ? 8 : 24}>
                  <Button type="primary" block icon={<PlusOutlined />} htmlType="submit">
                    Lưu từ vựng
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>

          <Table 
            columns={isEn ? columnsEnglish : columnsJapan} 
            dataSource={dataSource} // Nhận dữ liệu từ component cha
            rowKey={(record) => record.key || record.romaji + record.meaning}
            pagination={{ pageSize: 5 }} 
            scroll={{ x: 600 }} 
          />
        </AntContent>
      </Layout>
    </Layout>
  );
};

export default AddVocabTab;