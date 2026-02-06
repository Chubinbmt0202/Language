import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Empty, Input, List, Tooltip, Typography, message } from "antd";
import { DeleteOutlined, FormOutlined, SaveOutlined } from "@ant-design/icons";
import { markLessonMissionDone } from "../../../util/lessonMissions";

const { Text } = Typography;
const { TextArea } = Input;

const STORAGE_PREFIX = "theory_lesson_notes:";

const safeParseJson = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const formatNoteTime = (createdAt) => {
  try {
    const date = new Date(createdAt);
    return date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    });
  } catch {
    return "";
  }
};

const QuickNotes = ({ taskId, seedNotes }) => {
  const storageKey = taskId ? `${STORAGE_PREFIX}${taskId}` : null;
  const initialSeed = useMemo(() => {
    if (!Array.isArray(seedNotes)) return [];
    return seedNotes
      .filter((n) => typeof n === "string" && n.trim())
      .map((content) => ({
        id: `${Date.now()}-${Math.random()}`,
        content,
        createdAt: new Date().toISOString(),
      }));
  }, [seedNotes]);

  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!storageKey) return;
    const stored = safeParseJson(window.localStorage.getItem(storageKey), null);
    if (Array.isArray(stored)) {
      setNotes(stored);
      return;
    }
    setNotes(initialSeed);
  }, [storageKey, initialSeed]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!storageKey) return;
    window.localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes, storageKey]);

  const handleAddNote = () => {
    const content = inputValue.trim();
    if (!content) return;

    const newNote = {
      id: `${Date.now()}-${Math.random()}`,
      content,
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [newNote, ...prev]);
    setInputValue("");
    message.success("Đã lưu ghi chú!");
    markLessonMissionDone(taskId, "notes");
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotes([]);
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
          renderItem={(item) => (
            <div
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
                  {formatNoteTime(item.createdAt)}
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
          style={{ maxHeight: 320, overflowY: "auto" }}
        />
      ) : (
        <Empty description="Chưa có ghi chú nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Card>
  );
};

export default QuickNotes;
