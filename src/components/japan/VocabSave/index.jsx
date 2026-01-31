/* eslint-disable react-hooks/static-components */
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input, Button, Table, Card, Space, Typography, Modal, Progress, Tag, Popconfirm, message, Form, Empty, Drawer, Row, Col } from 'antd';
import { 
  PlusOutlined, BookOutlined, FolderAddOutlined, 
  FireOutlined, SoundOutlined, EditOutlined, 
  DeleteOutlined, CloseOutlined, MenuOutlined 
} from '@ant-design/icons';
import * as wanakana from 'wanakana';

// Lưu ý: Không destructure Sider từ Layout ở đây để tránh lỗi context nếu lồng nhau quá sâu
// Chúng ta sẽ dùng Layout.Sider trực tiếp bên dưới
const { Header, Content } = Layout;
const { Title, Text } = Typography;

const JapaneseApp = () => {
  // --- 1. DATA MANAGEMENT ---
  const [topics, setTopics] = useState(() => {
    const savedData = localStorage.getItem('japanese_app_data');
    return savedData ? JSON.parse(savedData) : [{ id: 'default_1', name: 'Động vật', words: [] }];
  });

  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || '');
  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  useEffect(() => {
    localStorage.setItem('japanese_app_data', JSON.stringify(topics));
  }, [topics]);

  // --- 2. STATES ---
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [newWord, setNewWord] = useState({ meaning: '', romaji: '', hiragana: '', katakana: '' });
  
  // Responsive States
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Edit/Practice States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingWord, setEditingWord] = useState(null);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // --- 3. LOGIC HANDLERS ---
  const convertRomaji = (val) => ({
    romaji: val,
    hiragana: wanakana.toHiragana(val),
    katakana: wanakana.toKatakana(val)
  });

  const handleNewWordChange = (e) => {
    setNewWord({ ...newWord, ...convertRomaji(e.target.value) });
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  };

  const addTopic = () => {
    if (newTopicName.trim()) {
      const newId = Date.now().toString();
      const newTopic = { id: newId, name: newTopicName, words: [] };
      setTopics([...topics, newTopic]);
      setNewTopicName('');
      setIsTopicModalOpen(false);
      setActiveTopicId(newId);
      setMobileDrawerOpen(false);
      message.success('Đã tạo chủ đề mới');
    }
  };

  const deleteTopic = (e, topicId) => {
    e.stopPropagation();
    if (topics.length === 1) {
      message.error('Giữ lại ít nhất 1 chủ đề!');
      return;
    }
    const newTopics = topics.filter(t => t.id !== topicId);
    setTopics(newTopics);
    if (topicId === activeTopicId) setActiveTopicId(newTopics[0].id);
    message.success('Đã xóa chủ đề');
  };

  const addWord = () => {
    if (newWord.meaning && newWord.romaji) {
      const updatedTopics = topics.map(t => {
        if (t.id === activeTopicId) {
          return { ...t, words: [{ ...newWord, key: Date.now() }, ...t.words] };
        }
        return t;
      });
      setTopics(updatedTopics);
      setNewWord({ meaning: '', romaji: '', hiragana: '', katakana: '' });
      message.success('Đã thêm từ');
    }
  };

  const deleteWord = (wordKey) => {
    const updatedTopics = topics.map(t => {
      if (t.id === activeTopicId) {
        return { ...t, words: t.words.filter(w => w.key !== wordKey) };
      }
      return t;
    });
    setTopics(updatedTopics);
    message.success('Đã xóa từ');
  };

  const saveEditedWord = () => {
    const updatedTopics = topics.map(t => {
      if (t.id === activeTopicId) {
        return {
          ...t,
          words: t.words.map(w => w.key === editingWord.key ? editingWord : w)
        };
      }
      return t;
    });
    setTopics(updatedTopics);
    setIsEditModalOpen(false);
    message.success('Đã cập nhật');
  };

  // --- 4. CONFIG TABLES ---
  const columns = [
    {
      title: 'Loa',
      width: 60,
      align: 'center',
      render: (_, record) => (
        <Button shape="circle" size="small" type="text" icon={<SoundOutlined />} onClick={() => speak(record.hiragana)} />
      )
    },
    { 
      title: 'Kana', 
      key: 'kana',
      width: 120,
      render: (_, record) => (
        <Space orientation="vertical" size={0}>
          <Text strong style={{ fontSize: 16, color: '#1890ff' }}>{record.hiragana}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>{record.katakana}</Text>
        </Space>
      )
    },
    { title: 'Romaji', dataIndex: 'romaji', key: 'romaji', width: 100, render: text => <Tag>{text}</Tag> },
    { title: 'Nghĩa', dataIndex: 'meaning', key: 'meaning', render: text => <Text strong>{text}</Text> },
    {
      title: 'Thao tác',
      key: 'action',
      width: 100,
      align: 'right',
      render: (_, record) => (
        <Space size="small">
          <Button icon={<EditOutlined />} size="small" onClick={() => { setEditingWord(record); setIsEditModalOpen(true); }} />
          <Popconfirm title="Xóa?" onConfirm={() => deleteWord(record.key)}>
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const MenuContent = () => (
    <>
      <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text strong><BookOutlined /> CHỦ ĐỀ</Text>
        <Button type="primary" ghost size="small" icon={<PlusOutlined />} onClick={() => setIsTopicModalOpen(true)} />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[activeTopicId]}
        onClick={(e) => { setActiveTopicId(e.key); setMobileDrawerOpen(false); }}
        items={topics.map(t => ({
          key: t.id,
          label: (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '130px' }}>{t.name}</span>
              {topics.length > 1 && (
                <Popconfirm title="Xóa chủ đề?" onConfirm={(e) => deleteTopic(e, t.id)} placement="right">
                   <Button type="text" size="small" icon={<CloseOutlined style={{ fontSize: 10, color: '#999' }} />} onClick={(e) => e.stopPropagation()}/>
                </Popconfirm>
              )}
            </div>
          )
        }))}
        style={{ border: 'none' }}
      />
    </>
  );

  return (
    // QUAN TRỌNG: Layout bao ngoài dùng style height 100% để nằm gọn trong div cha của Admin template
    // hasSider giúp Antd hiểu đây là layout ngang
    <Layout style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f0f0f0', minHeight: '600px' }} hasSider>
      
      {/* SIDEBAR PC: Không dùng position fixed nữa */}
      <Layout.Sider 
        theme="light" 
        width={250} 
        breakpoint="lg" 
        collapsedWidth="0"
        trigger={null}
        style={{ borderRight: '1px solid #f0f0f0' }}
      >
        <MenuContent />
      </Layout.Sider>

      {/* DRAWER MOBILE */}
      <Drawer
        title="Danh sách chủ đề"
        placement="left"
        onClose={() => setMobileDrawerOpen(false)}
        open={mobileDrawerOpen}
        styles={{body: { padding: 0 }}}
        size={260}
      >
        <MenuContent />
      </Drawer>

      <Layout style={{ background: '#fff' }}>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Nút Hamburger chỉ hiện trên Mobile khi Sider bị ẩn */}
            <Button 
              type="text"
              icon={<MenuOutlined />} 
              onClick={() => setMobileDrawerOpen(true)} 
              className="lg:hidden" // Bạn cần CSS global hoặc style logic để ẩn hiện nút này
              style={{ display: 'none' }} // Mặc định ẩn, bạn có thể dùng Media Query để hiện nó khi màn hình nhỏ
            />
            <Title level={4} style={{ margin: 0 }}>{activeTopic?.name}</Title>
            <Tag color="blue">{activeTopic?.words.length}</Tag>
          </div>
          
          {activeTopic?.words.length > 0 && (
             <Button type="primary" danger shape="circle" icon={<FireOutlined />} onClick={() => { setCurrentCardIndex(0); setIsFlipped(false); setIsPracticeMode(true); }} />
          )}
        </Header>
        
        <Content style={{ padding: '24px' }}>
          {/* Form thêm từ */}
          <Card size="small" title="Thêm từ mới" style={{ marginBottom: 24, borderRadius: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
               <Row gutter={[12, 12]}>
                  <Col xs={24} md={8}>
                    <Input placeholder="Nghĩa (Con mèo)" value={newWord.meaning} onChange={e => setNewWord({...newWord, meaning: e.target.value})} onPressEnter={addWord}/>
                  </Col>
                  <Col xs={24} md={8}>
                    <Input placeholder="Romaji (neko)" value={newWord.romaji} onChange={handleNewWordChange} onPressEnter={addWord}/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Input placeholder="Hiragana" value={newWord.hiragana} readOnly className="bg-gray-50" />
                  </Col>
                  <Col xs={12} md={4}>
                    <Input placeholder="Katakana" value={newWord.katakana} readOnly className="bg-gray-50" />
                  </Col>
               </Row>
               <Button type="primary" block icon={<PlusOutlined />} onClick={addWord}>Lưu từ vựng</Button>
            </div>
          </Card>

          {/* Bảng dữ liệu */}
          <Table 
            dataSource={activeTopic?.words} 
            columns={columns} 
            rowKey="key"
            pagination={{ pageSize: 5 }}
            scroll={{ x: 600 }}
            locale={{ emptyText: <Empty description="Chưa có từ vựng nào" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
          />
        </Content>
      </Layout>

      {/* CÁC MODAL GIỮ NGUYÊN */}
      <Modal open={isPracticeMode} onCancel={() => setIsPracticeMode(false)} footer={null} centered width={400} title="Luyện tập Flashcard">
        {activeTopic?.words.length > 0 && (
          <div style={{ textAlign: 'center' }}>
            <Progress percent={Math.round(((currentCardIndex + 1) / activeTopic.words.length) * 100)} size="small" status="active" />
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ 
                marginTop: 20, height: 220, borderRadius: 12, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: isFlipped ? '#f6ffed' : '#e6f7ff', border: '1px solid #d9d9d9', transition: 'all 0.3s'
              }}
            >
              {!isFlipped ? (
                <>
                  <Title level={2} style={{ color: '#1890ff', marginBottom: 10 }}>{activeTopic.words[currentCardIndex].hiragana}</Title>
                  <Button size="large" shape="circle" icon={<SoundOutlined />} onClick={(e) => {e.stopPropagation(); speak(activeTopic.words[currentCardIndex].hiragana)}} />
                  <Text type="secondary" style={{ marginTop: 10 }}>Chạm để xem nghĩa</Text>
                </>
              ) : (
                <>
                  <Title level={3} style={{ color: '#389e0d', margin: 0 }}>{activeTopic.words[currentCardIndex].meaning}</Title>
                  <Text type="secondary">{activeTopic.words[currentCardIndex].romaji}</Text>
                </>
              )}
            </div>
            <Space style={{ marginTop: 20, width: '100%', justifyContent: 'space-between' }}>
               <Button onClick={() => { setCurrentCardIndex(p => p - 1); setIsFlipped(false); }} disabled={currentCardIndex === 0}>Trước</Button>
               <Button type="primary" onClick={() => { setCurrentCardIndex(p => p + 1); setIsFlipped(false); }} disabled={currentCardIndex === activeTopic.words.length - 1}>Tiếp</Button>
            </Space>
          </div>
        )}
      </Modal>

      <Modal title="Tạo chủ đề mới" open={isTopicModalOpen} onOk={addTopic} onCancel={() => setIsTopicModalOpen(false)}>
        <Input autoFocus prefix={<FolderAddOutlined />} placeholder="Nhập tên chủ đề..." value={newTopicName} onChange={e => setNewTopicName(e.target.value)} onPressEnter={addTopic} />
      </Modal>

      <Modal title="Sửa từ vựng" open={isEditModalOpen} onOk={saveEditedWord} onCancel={() => setIsEditModalOpen(false)}>
        {editingWord && (
          <Form layout="vertical">
            <Form.Item label="Nghĩa"><Input value={editingWord.meaning} onChange={e => setEditingWord({...editingWord, meaning: e.target.value})} /></Form.Item>
            <Form.Item label="Romaji"><Input value={editingWord.romaji} onChange={e => setEditingWord({...editingWord, ...convertRomaji(e.target.value)})} /></Form.Item>
            <Space>
               <Form.Item label="Hiragana"><Input value={editingWord.hiragana} readOnly className="bg-gray-50"/></Form.Item>
               <Form.Item label="Katakana"><Input value={editingWord.katakana} readOnly className="bg-gray-50"/></Form.Item>
            </Space>
          </Form>
        )}
      </Modal>
    </Layout>
  );
};

export default JapaneseApp;