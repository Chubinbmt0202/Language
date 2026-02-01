import React, { useState } from "react";
import { FloatButton, Modal, Tabs, Form, message } from "antd";
import { PlusOutlined, UnorderedListOutlined, ReadOutlined, GlobalOutlined } from "@ant-design/icons";
import AddVocabTab from "../common/GlobalVocabManager/components/AddVocabTab";
import ListVocabTab from "../common/GlobalVocabManager/components/MenuContent";

const GlobalVocabManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("list");
  const [activeLang, setActiveLang] = useState("en");
  const [form] = Form.useForm();
  const [vocabListEn, setVocabListEn] = useState([]);
  const [vocabListJp, setVocabListJp] = useState([]);

  const handleClose = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleAddVocab = (values) => {
    const { word, meaning, romaji, hiragana, katakana } = values;

    if (activeLang === "en") {
      const newEntry = { key: Date.now(), word, meaning };
      setVocabListEn([newEntry, ...vocabListEn]);
      message.success("Đã thêm từ vựng tiếng Anh!");
    } else {
      const newEntry = { key: Date.now(), meaning, romaji, hiragana, katakana };
      setVocabListJp([newEntry, ...vocabListJp]);
      message.success("Đã thêm từ vựng tiếng Nhật!");
    }
    form.resetFields(); // Xóa form sau khi thêm thành công
  };

  const items = [
    {
      key: "en",
      label: "Tiếng Anh",
      children: <AddVocabTab 
                  activeLang="en" 
                  form={form} 
                  dataSource={vocabListEn} 
                  onFinish={handleAddVocab} 
                />
    },
    {
      key: "jp",
      label: "Tiếng Nhật",
      children: <AddVocabTab 
                  activeLang="jp" 
                  form={form} 
                  dataSource={vocabListJp} 
                  onFinish={handleAddVocab} 
                />
    }
  ];

  return (
    <>
      <FloatButton.Group trigger="click" type="primary" style={{ right: 24, bottom: 24 }} icon={<PlusOutlined />}>
        <FloatButton icon={<UnorderedListOutlined />} tooltip="Danh sách" onClick={() => { setModalMode("list"); setIsModalOpen(true); }} />
        <FloatButton icon={<ReadOutlined />} tooltip="Thêm nhanh" onClick={() => { setModalMode("add"); setIsModalOpen(true); }} />
      </FloatButton.Group>

      <Modal
        title={modalMode === "add" ? "Thêm Từ Vựng Mới" : "Kho Từ Vựng Cá Nhân"}
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
        centered
        width={modalMode === "add" ? 1100 : "90%"}
      >
        <Tabs activeKey={activeLang} onChange={setActiveLang} items={items} />
      </Modal>
    </>
  );
};

export default GlobalVocabManager;