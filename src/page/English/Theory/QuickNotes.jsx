import React, { useState } from "react";
import { Card, Input, Button, List, Typography, Empty, message, Tooltip } from "antd";
import { 
  FormOutlined, 
  PlusOutlined, 
  DeleteOutlined, 
  SaveOutlined 
} from "@ant-design/icons";

const { Text } = Typography;
const { TextArea } = Input;

const QuickNotes = () => {
  // State lưu danh sách ghi chú (Demo sẵn 1 cái)
  const [notes, setNotes] = useState([
    { 
      id: 1, 
      content: "Danh từ tận cùng là 'y' đổi thành 'ies' khi chuyển số nhiều.", 
      time: "10:15" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  // Hàm thêm ghi chú mới
  const handleAddNote = () => {
    if (!inputValue.trim()) return;

    const newNote = {
      id: Date.now(),
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setNotes([newNote, ...notes]); // Thêm vào đầu danh sách
    setInputValue("");
    message.success("Đã lưu ghi chú!");
  };

  // Hàm xóa ghi chú
  const handleDelete = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <Card 
      title={<span><FormOutlined /> Ghi chú nhanh</span>} 
      bordered={false}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginTop: 20 }}
      bodyStyle={{ padding: "15px" }}
    >
      {/* Ô NHẬP LIỆU */}
      <div style={{ marginBottom: 20 }}>
        <TextArea 
          rows={3} 
          placeholder="Ghi lại công thức, từ vựng khó nhớ..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginBottom: 20, resize: 'none', borderRadius: 8 }}
          maxLength={200}
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

      {/* DANH SÁCH GHI CHÚ */}
      {notes.length > 0 ? (
        <List
          dataSource={notes}
          renderItem={(item) => (
            <div style={{ 
              background: "#fffbe6", // Màu vàng nhạt giống giấy note
              padding: "10px 12px", 
              borderRadius: 8, 
              marginBottom: 10,
              border: "1px solid #ffe58f",
              position: "relative",
              transition: "all 0.3s"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <Text type="secondary" style={{ fontSize: 11 }}>{item.time} hôm nay</Text>
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
          style={{ maxHeight: 300, overflowY: "auto" }} // Scroll nếu danh sách dài
        />
      ) : (
        <Empty description="Chưa có ghi chú nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Card>
  );
};

export default QuickNotes;