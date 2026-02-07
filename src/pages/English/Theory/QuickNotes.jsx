/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Empty, Input, List, Tooltip, Typography, message } from "antd";
import { DeleteOutlined, FormOutlined, SaveOutlined } from "@ant-design/icons";
import { markLessonMissionDone } from "../../../util/lessonMissions";
import { auth } from "../../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const { Text } = Typography;
const { TextArea } = Input;

const STORAGE_PREFIX = "theory_lesson_notes:";

const QuickNotes = ({ taskId, seedNotes }) => {
  const [uid, setUid] = useState(() => auth.currentUser?.uid ?? null);
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 1. Tạo key duy nhất cho mỗi user và mỗi bài học
  const storageKey = useMemo(() => {
    return uid && taskId ? `${STORAGE_PREFIX}${uid}:${taskId}` : null;
  }, [uid, taskId]);

  // 2. Theo dõi trạng thái đăng nhập
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUid(user?.uid ?? null);
    });
    return unsubscribe;
  }, []);

  // 3. Đọc dữ liệu từ Storage khi storageKey thay đổi
  useEffect(() => {
    if (typeof window === "undefined" || !storageKey) return;

    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        setNotes([]);
      }
    } else {
      // Nếu không có trong storage thì mới dùng seedNotes (nếu có)
      const initialSeed = Array.isArray(seedNotes) 
        ? seedNotes.map(n => ({
            id: `${Date.now()}-${Math.random()}`,
            content: n,
            createdAt: new Date().toISOString(),
          }))
        : [];
      setNotes(initialSeed);
    }
  }, [storageKey, seedNotes]);

  // 4. Hàm Lưu ghi chú mới
  const handleAddNote = () => {
    const content = inputValue.trim();
    if (!content) return;

    const newNote = {
      id: `${Date.now()}-${Math.random()}`,
      content,
      createdAt: new Date().toISOString(),
    };

    const updatedNotes = [newNote, ...notes];
    
    // Cập nhật state và lưu vào localStorage ngay lập tức
    setNotes(updatedNotes);
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(updatedNotes));
    }

    setInputValue("");
    message.success("Đã lưu ghi chú!");
    markLessonMissionDone(taskId, "notes");
  };

  // 5. Hàm Xóa từng ghi chú
  const handleDelete = (id) => {
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNotes(updatedNotes);
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(updatedNotes));
    }
  };

  // 6. Hàm Xóa tất cả
  const handleClearAll = () => {
    setNotes([]);
    if (storageKey) {
      localStorage.removeItem(storageKey);
    }
    message.success("Đã xóa toàn bộ ghi chú.");
  };

  return (
    <Card
      title={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>
            <FormOutlined /> Ghi chú nhanh
          </span>
          <Button size="small" type="text" danger onClick={handleClearAll} disabled={notes.length === 0}>
            Xóa hết
          </Button>
        </div>
      }
      bordered={false}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginTop: 20 }}
      bodyStyle={{ padding: 15 }}
    >
      <div style={{ marginBottom: 16 }}>
        <TextArea
          rows={3}
          placeholder="Ghi lại công thức, ví dụ hay, từ khóa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginBottom: 12, resize: "none", borderRadius: 8 }}
          maxLength={240}
          showCount
        />
        <Button
          type="primary"
          block
          icon={<SaveOutlined />}
          onClick={handleAddNote}
          disabled={!inputValue.trim()}
        >
          Lưu ghi chú
        </Button>
      </div>

      {notes.length > 0 ? (
        <List
          dataSource={notes}
          style={{ maxHeight: 320, overflowY: "auto" }}
          renderItem={(item) => (
            <div
              key={item.id}
              style={{
                background: "#fffbe6",
                padding: "10px 12px",
                borderRadius: 8,
                marginBottom: 10,
                border: "1px solid #ffe58f",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {new Date(item.createdAt).toLocaleString()}
                </Text>
                <Tooltip title="Xóa">
                  <DeleteOutlined
                    onClick={() => handleDelete(item.id)}
                    style={{ color: "#ff4d4f", cursor: "pointer" }}
                  />
                </Tooltip>
              </div>
              <Text style={{ fontSize: 13, color: "#262626", wordBreak: "break-word" }}>
                {item.content}
              </Text>
            </div>
          )}
        />
      ) : (
        <Empty description="Chưa có ghi chú nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Card>
  );
};

export default QuickNotes;