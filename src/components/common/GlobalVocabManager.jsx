/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  FloatButton,
  Modal,
  Tabs,
  List,
  Form,
  Input,
  Button,
  Progress,
  Popconfirm,
  message,
  Tag,
  Space,
  Typography,
  Row,
  Layout,
  Menu,
  Drawer,
  Card,
  Table,
  Empty,
  Col,
} from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  ReadOutlined,
  MenuOutlined,
  BookOutlined,
  FolderAddOutlined,
  FireOutlined,
  EditOutlined,
  DeleteOutlined,
  CloseOutlined,
  GlobalOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import * as wanakana from "wanakana";

// import vocabularyJapanese from "../japan/VocabSave/index.jsx";
const { Header, Content } = Layout;
const { Text, Title } = Typography;

const GlobalVocabManager = () => {

  return (
    <>
      {/* Nút nổi góc màn hình */}
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24, bottom: 24 }}
        icon={<PlusOutlined />}
      >
        <FloatButton
          icon={<UnorderedListOutlined />}
          tooltip="Danh sách từ đã lưu"
          onClick={() => {
            setModalMode("list");
            setIsModalOpen(true);
          }}
        />
        <FloatButton
          icon={<ReadOutlined />}
          tooltip="Thêm từ vựng nhanh"
          onClick={() => {
            setModalMode("add");
            setIsModalOpen(true);
          }}
        />
      </FloatButton.Group>

      <Modal
        title={modalMode === "add" ? "Thêm Từ Vựng Mới" : "Kho Từ Vựng Cá Nhân"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        footer={null}
        centered
        width={modalMode === "add" ? 1000 : 10000}
        styles={{
          mask: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        }}
      >
        <Tabs
          activeKey={activeLang}
          onChange={setActiveLang}
          items={[
            {
              key: "en",
              label: (
                <span>
                  <GlobalOutlined /> Tiếng Anh
                </span>
              ),
              children:
                modalMode === "add" ? <AddVocabTab /> : <ListVocabTab />,
            },
            {
              key: "jp",
              label: (
                <span>
                  <GlobalOutlined /> Tiếng Nhật
                </span>
              ),
              children:
                modalMode === "add" ? <AddVocabTab /> : <ListVocabTab />,
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default GlobalVocabManager;
