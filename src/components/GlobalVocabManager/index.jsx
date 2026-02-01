/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FloatButton, Modal, Tabs, Layout, Button, Drawer } from "antd";
import {
  PlusOutlined,
  ReadOutlined,
  GlobalOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import TopicSidebar from "./TopicSidebar.jsx";
import AddVocabForm from "./AddVocabForm.jsx";
import VocabTable from "./VocabTable";
import FlashcardModal from "./FlashcardModal";

const GlobalVocabManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Quản lý drawer trên mobile

  const [allData, setAllData] = useState(() => {
    const saved = localStorage.getItem("global_vocab_app_data");
    return saved ? JSON.parse(saved) : {
      en: [{ id: "en_default", name: "English TOEIC", words: [] }],
      jp: [{ id: "jp_default", name: "Từ vựng N3", words: [] }]
    };
  });

  const [activeTopicIds, setActiveTopicIds] = useState({
    en: "en_default",
    jp: "jp_default"
  });

  useEffect(() => {
    localStorage.setItem("global_vocab_app_data", JSON.stringify(allData));
  }, [allData]);

  const currentTopics = allData[activeLang] || [];
  const currentActiveId = activeTopicIds[activeLang];
  const activeTopic = currentTopics.find((t) => t.id === currentActiveId) || currentTopics[0];

  const updateTopicsForCurrentLang = (newTopics) => {
    setAllData(prev => ({ ...prev, [activeLang]: newTopics }));
  };

  const updateActiveIdForCurrentLang = (id) => {
    setActiveTopicIds(prev => ({ ...prev, [activeLang]: id }));
    setIsMobileMenuOpen(false); // Đóng menu sau khi chọn chủ đề trên mobile
  };

  return (
    <>
      <FloatButton.Group trigger="click" type="primary" icon={<PlusOutlined />}>
        <FloatButton icon={<ReadOutlined />} onClick={() => setIsModalOpen(true)} />
      </FloatButton.Group>

      <Modal
        title="Kho Từ Vựng Cá Nhân"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        centered
        width="98vw"
        style={{ maxWidth: 1200, top: 10 }}
        styles={{ body: { height: "calc(100vh - 150px)", padding: "0 10px" } }}
        footer={null}
      >
        <Tabs
          activeKey={activeLang}
          onChange={setActiveLang}
          style={{ height: "100%" }}
          items={["en", "jp"].map((lang) => ({
            key: lang,
            label: (
              <span>
                <GlobalOutlined /> {lang === "en" ? "Tiếng Anh" : "Tiếng Nhật"}
              </span>
            ),
            children: (
              <Layout style={{ background: "#fff", height: "100%" }}>
                {/* 1. Nút mở Sidebar cho Mobile */}
                <div className="mobile-only" style={{ marginBottom: 10, display: 'none' }}>
                   <Button 
                    icon={<MenuUnfoldOutlined />} 
                    onClick={() => setIsMobileMenuOpen(true)}
                   >
                     Chủ đề
                   </Button>
                </div>
                
                <style>
                  {`
                    @media (max-width: 768px) {
                      .desktop-sidebar { display: none !important; }
                      .mobile-only { display: block !important; }
                      .content-area { padding: 0 !important; }
                    }
                  `}
                </style>

                {/* 2. Sidebar Desktop */}
                <div className="desktop-sidebar">
                  <TopicSidebar
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeTopicId={currentActiveId}
                    setActiveTopicId={updateActiveIdForCurrentLang}
                  />
                </div>

                {/* 3. Drawer cho Mobile */}
                <Drawer
                  title="Danh sách chủ đề"
                  placement="left"
                  onClose={() => setIsMobileMenuOpen(false)}
                  open={isMobileMenuOpen}
                  size={280}
                  styles={{ body: { padding: 0 } }}
                >
                  <TopicSidebar
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeTopicId={currentActiveId}
                    setActiveTopicId={updateActiveIdForCurrentLang}
                  />
                </Drawer>

                <Layout.Content className="content-area" style={{ padding: "0 24px", overflowY: "auto" }}>
                  <AddVocabForm
                    activeTopicId={currentActiveId}
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeLang={activeLang}
                  />
                  <VocabTable
                    activeTopic={activeTopic}
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeLang={activeLang}
                    onPractice={() => setIsPracticeMode(true)}
                  />
                </Layout.Content>
              </Layout>
            ),
          }))}
        />
      </Modal>

      <FlashcardModal
        isOpen={isPracticeMode}
        onClose={() => setIsPracticeMode(false)}
        words={activeTopic?.words || []}
      />
    </>
  );
};

export default GlobalVocabManager;