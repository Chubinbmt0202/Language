/* eslint-disable react-hooks/static-components */
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input, Button, Table, Card, Space, Typography, Modal, Progress, Tag, Popconfirm, message, Form, Empty, Drawer } from 'antd';
import { 
  PlusOutlined, BookOutlined, FolderAddOutlined, 
  FireOutlined, SoundOutlined, EditOutlined, 
  DeleteOutlined, CloseOutlined, MenuOutlined 
} from '@ant-design/icons';
import * as wanakana from 'wanakana';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const JapaneseApp = () => {
  // --- 1. DATA MANAGEMENT ---
  const [topics, setTopics] = useState(() => {
    const savedData = localStorage.getItem('japanese_app_data');
    return savedData ? JSON.parse(savedData) : [{ id: 'default_1', name: 'Gia đình (Ví dụ)', words: [] }];
  });

  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || '');
  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  useEffect(() => {
    localStorage.setItem('japanese_app_data', JSON.stringify(topics));
  }, [topics]);

  // --- 2. UI STATES ---
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [newWord, setNewWord] = useState({ meaning: '', romaji: '', hiragana: '', katakana: '' });
  
  // Responsive States
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); // Quản lý Menu trên Mobile

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
      setMobileDrawerOpen(false); // Đóng menu mobile sau khi tạo
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

  // --- 4. COLUMN DEFINITIONS ---
  const columns = [
    {
      title: 'Loa',
      width: 60,
      align: 'center',
      fixed: 'left', // Cố định cột này trên mobile
      render: (_, record) => (
        <Button shape="circle" size="small" icon={<SoundOutlined />} onClick={() => speak(record.hiragana)} />
      )
    },
    { 
      title: 'Kana', 
      key: 'kana',
      width: 120,
      render: (_, record) => (
        <Space direction="vertical" size={0}>
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
      fixed: 'right', // Cố định cột này bên phải
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <Button icon={<EditOutlined />} size="small" onClick={() => { setEditingWord(record); setIsEditModalOpen(true); }} />
          <Popconfirm title="Xóa?" onConfirm={() => deleteWord(record.key)}>
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Component Menu dùng chung cho cả Sidebar và Mobile Drawer
  const MenuContent = () => (
    <>
      <div style={{ padding: '16px', background: '#fafafa', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text strong><BookOutlined /> CHỦ ĐỀ</Text>
        <Button type="primary" size="small" icon={<PlusOutlined />} onClick={() => setIsTopicModalOpen(true)} />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[activeTopicId]}
        onClick={(e) => { setActiveTopicId(e.key); setMobileDrawerOpen(false); }}
        items={topics.map(t => ({
          key: t.id,
          label: (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '140px' }}>{t.name}</span>
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
    <Layout style={{ minHeight: '100vh' }}>
      {/* SIDEBAR CHO PC (Ẩn trên màn hình nhỏ xs) */}
      <Sider 
        theme="light" 
        width={260} 
        style={{ borderRight: '1px solid #f0f0f0', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 10 }}
        breakpoint="lg" // Tự động ẩn khi màn hình < 992px
        collapsedWidth="0" // Ẩn hoàn toàn khi collapse
        trigger={null} // Tắt nút trigger mặc định
      >
        <MenuContent />
      </Sider>

      {/* DRAWER CHO MOBILE (Hiện khi click menu icon) */}
      <Drawer
        title="Danh sách chủ đề"
        placement="left"
        onClose={() => setMobileDrawerOpen(false)}
        open={mobileDrawerOpen}
        bodyStyle={{ padding: 0 }}
        width={280}
      >
        <MenuContent />
      </Drawer>

      <Layout style={{ marginLeft: 0 }} className="site-layout-responsive">
        {/* CSS để đẩy content sang phải trên màn hình lớn */}
        <style>{`
          @media (min-width: 992px) { .site-layout-responsive { margin-left: 260px !important; } }
          .input-grid { display: grid; gap: 10px; }
          @media (min-width: 768px) { .input-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr auto; } }
        `}</style>

        <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 9, width: '100%' }}>
          {/* Nút Hamburger cho Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Button 
              className="lg:hidden" // Class này cần Tailwind hoặc custom CSS để ẩn trên màn lớn. Ở đây mình dùng logic JS của Sider breakpoint.
              icon={<MenuOutlined />} 
              onClick={() => setMobileDrawerOpen(true)} 
              style={{ display: window.innerWidth >= 992 ? 'none' : 'inline-flex' }} // Fallback style
            />
            <Title level={5} style={{ margin: 0, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {activeTopic ? activeTopic.name : 'Chọn chủ đề'}
            </Title>
          </div>
          
          <Space>
             <Tag color="blue">{activeTopic?.words.length || 0}</Tag>
             {activeTopic?.words.length > 0 && (
                <Button type="primary" danger shape="circle" icon={<FireOutlined />} onClick={() => { setCurrentCardIndex(0); setIsFlipped(false); setIsPracticeMode(true); }} />
             )}
          </Space>
        </Header>
        
        <Content style={{ padding: '16px', margin: '0 auto', width: '100%', maxWidth: '1000px' }}>
          
          {/* FORM THÊM TỪ (Responsive Grid) */}
          <Card size="small" title="Thêm từ mới" style={{ marginBottom: 20 }}>
            <div className="input-grid">
              <Input placeholder="Nghĩa (Con mèo)" value={newWord.meaning} onChange={e => setNewWord({...newWord, meaning: e.target.value})} onPressEnter={addWord}/>
              <Input placeholder="Romaji (neko)" value={newWord.romaji} onChange={handleNewWordChange} onPressEnter={addWord}/>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <Input placeholder="Hiragana" value={newWord.hiragana} readOnly style={{ background: '#f5f5f5' }}/>
                <Input placeholder="Katakana" value={newWord.katakana} readOnly style={{ background: '#f5f5f5' }}/>
              </div>
              <Button type="primary" block icon={<PlusOutlined />} onClick={addWord}>Lưu</Button>
            </div>
          </Card>

          {/* BẢNG TỪ VỰNG (Scrollable on Mobile) */}
          <Table 
            dataSource={activeTopic?.words} 
            columns={columns} 
            rowKey="key"
            pagination={{ pageSize: 6 }}
            scroll={{ x: 600 }} // Kích hoạt thanh cuộn ngang nếu màn hình nhỏ hơn 600px
            size="small" // Bảng nhỏ gọn hơn trên mobile
            locale={{ emptyText: <Empty description="Trống" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}
          />
        </Content>
      </Layout>

      {/* CÁC MODAL (Giữ nguyên nhưng thêm width responsive nếu cần) */}
      <Modal open={isPracticeMode} onCancel={() => setIsPracticeMode(false)} footer={null} centered width={350} title="Luyện tập">
        {/* Nội dung Modal Luyện Tập (đã có sẵn) */}
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
                  <Text type="secondary" style={{ marginTop: 10 }}>Chạm để lật</Text>
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

      <Modal title="Chủ đề mới" open={isTopicModalOpen} onOk={addTopic} onCancel={() => setIsTopicModalOpen(false)}>
        <Input autoFocus placeholder="Tên chủ đề..." value={newTopicName} onChange={e => setNewTopicName(e.target.value)} onPressEnter={addTopic} />
      </Modal>

      <Modal title="Sửa từ" open={isEditModalOpen} onOk={saveEditedWord} onCancel={() => setIsEditModalOpen(false)}>
        {editingWord && (
          <Form layout="vertical">
            <Form.Item label="Nghĩa"><Input value={editingWord.meaning} onChange={e => setEditingWord({...editingWord, meaning: e.target.value})} /></Form.Item>
            <Form.Item label="Romaji"><Input value={editingWord.romaji} onChange={e => setEditingWord({...editingWord, ...convertRomaji(e.target.value)})} /></Form.Item>
            <Space>
               <Form.Item label="Hiragana"><Input value={editingWord.hiragana} readOnly className="bg-gray-100"/></Form.Item>
               <Form.Item label="Katakana"><Input value={editingWord.katakana} readOnly className="bg-gray-100"/></Form.Item>
            </Space>
          </Form>
        )}
      </Modal>
    </Layout>
  );
};

export default JapaneseApp;