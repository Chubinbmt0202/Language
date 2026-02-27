/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useRef } from "react";
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
import AutoQuizModal from "./AutoQuizModal.jsx";
import { useLang } from "@/app/providers/LanguageContext";
import { auth } from "@/shared/api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { loadGlobalVocab, saveGlobalVocab } from "@/shared/utils/storage/globalVocabStore";

const GlobalVocabManager = () => {
  const quizLockRef = useRef(false);
  const lang = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  console.log("GlobalVocabManager render, activeLang:", lang);

  const getDefaultActiveIds = (data) => ({
    en: data?.en?.[0]?.id ?? "en_default",
    jp: data?.jp?.[0]?.id ?? "jp_default",
  });

  // Load dữ liệu
  const [allData, setAllData] = useState(() => loadGlobalVocab());

  const [activeTopicIds, setActiveTopicIds] = useState(() =>
    getDefaultActiveIds(loadGlobalVocab()),
  );

  // Lấy danh sách từ vựng hiện tại để kiểm tra
  const allCurrentWords = useMemo(() => {
    const topics = allData[lang] || [];
    return topics.flatMap((t) => t.words);
  }, [allData, lang]);

  useEffect(() => {
    saveGlobalVocab(allData);
  }, [allData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      const data = loadGlobalVocab();
      setAllData(data);
      setActiveTopicIds(getDefaultActiveIds(data));
    });
    return unsubscribe;
  }, []);

  // --- LOGIC KIỂM TRA THỜI GIAN (Đã sửa lỗi 10s) ---
  useEffect(() => {
    const INTERVAL = 60 * 1000 * 5; // 15 phút
    const uid = auth.currentUser?.uid ?? "guest";
    const STORAGE_KEY = `vocab_last_quiz_time_${uid}_${lang}`;

    const checkQuizTrigger = () => {
      if (quizLockRef.current) return; // 🔒 đang mở
      if (isQuizOpen) return;
      if (allCurrentWords.length === 0) return;

      const now = Date.now();
      const lastTime = Number(localStorage.getItem(STORAGE_KEY) || 0);

      if (now - lastTime >= INTERVAL) {
        console.log("🧠 Mở quiz | lang:", lang);

        quizLockRef.current = true; // 🔒 khoá
        setIsQuizOpen(true);
        localStorage.setItem(STORAGE_KEY, now.toString());
      }
    };

    const timer = setInterval(checkQuizTrigger, INTERVAL);
    console.log("⏱️ Bắt đầu timer kiểm tra quiz | lang:", timer, lang);

    return () => clearInterval(timer);
  }, [lang, allCurrentWords.length, isQuizOpen]);
  // --- HẾT LOGIC KIỂM TRA THỜI GIAN ---

  const currentTopics = allData[activeLang] || [];
  const currentActiveId = activeTopicIds[activeLang];
  const activeTopic =
    currentTopics.find((t) => t.id === currentActiveId) || currentTopics[0];

  const updateTopicsForCurrentLang = (newTopics) => {
    setAllData((prev) => ({ ...prev, [activeLang]: newTopics }));
  };

  const updateActiveIdForCurrentLang = (id) => {
    setActiveTopicIds((prev) => ({ ...prev, [activeLang]: id }));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <FloatButton.Group trigger="click" type="primary" icon={<PlusOutlined />}>
        <FloatButton
          icon={<ReadOutlined />}
          onClick={() => setIsModalOpen(true)}
        />
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
                {/* Mobile Menu Button */}
                <div
                  className="mobile-only"
                  style={{ marginBottom: 10, display: "none" }}
                >
                  <Button
                    icon={<MenuUnfoldOutlined />}
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    Chủ đề
                  </Button>
                </div>

                <style>{`
                  @media (max-width: 768px) {
                    .desktop-sidebar { display: none !important; }
                    .mobile-only { display: block !important; }
                    .content-area { padding: 0 !important; }
                  }
                `}</style>

                {/* Desktop Sidebar */}
                <div className="desktop-sidebar">
                  <TopicSidebar
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeTopicId={currentActiveId}
                    setActiveTopicId={updateActiveIdForCurrentLang}
                  />
                </div>

                {/* Mobile Drawer */}
                <Drawer
                  title="Danh sách chủ đề"
                  placement="left"
                  onClose={() => setIsMobileMenuOpen(false)}
                  open={isMobileMenuOpen}
                  width={280}
                  styles={{ body: { padding: 0 } }}
                >
                  <TopicSidebar
                    topics={currentTopics}
                    setTopics={updateTopicsForCurrentLang}
                    activeTopicId={currentActiveId}
                    setActiveTopicId={updateActiveIdForCurrentLang}
                  />
                </Drawer>

                <Layout.Content
                  className="content-area"
                  style={{ padding: "0 24px", overflowY: "auto" }}
                >
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

      <AutoQuizModal
        key={lang}
        isOpen={isQuizOpen}
        onClose={() => {
          quizLockRef.current = false; // 🔓 mở khoá
          setIsQuizOpen(false);
        }}
        allWords={allCurrentWords}
        lang={lang}
      />
    </>
  );
};

export default GlobalVocabManager;
