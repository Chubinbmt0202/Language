import React, { useEffect } from "react"; // Thêm useEffect
import { Button, Card, Typography, Tooltip } from "antd"; // Thêm Tooltip
import {
  RedoOutlined,
  CheckCircleOutlined,
  BackwardFilled,
  SoundOutlined, // <--- Import Icon Loa
} from "@ant-design/icons";
import { useHiraganaGame } from "../../../hooks/useHiraganaGame";
import SetupCard from "./SetupCard";
import CharacterBlock from "./CharacterBlock";
import { useLang } from "@/app/providers/LanguageContext";

const { Text } = Typography;

const HiraganaPractice = () => {
  const { value, setValue, gameState, inputRefs, actions } = useHiraganaGame();
  const lang = useLang();
  const {
    charData,
    meaning,
    userInputs,
    hintUsedIndices,
    isLoading,
    isStarted,
    isCompleted,
  } = gameState;

  // --- 1. HÀM XỬ LÝ ĐỌC GIỌNG NÓI ---

  console.log("HiraganaPractice render, lang:", lang);
  const handleSpeak = () => {
    // Ghép các ký tự lại thành câu hoàn chỉnh
    const sentence = charData.map((item) => item.char).join("");
    
    if (!sentence) return;

    // Ngắt giọng cũ nếu đang đọc dở
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "ja-JP"; // Thiết lập giọng tiếng Nhật
    utterance.rate = 1;     // Tốc độ đọc (0.8 là vừa phải, 1 là bình thường)
    utterance.pitch = 1;      // Độ cao giọng

    window.speechSynthesis.speak(utterance);
  };

  // (Tùy chọn) Tự động đọc khi hoàn thành bài
  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
         handleSpeak();
      }, 500); // Đợi 0.5s sau khi hoàn thành rồi mới đọc
    }
  }, [isCompleted]);


  // Nếu chưa bắt đầu -> Hiện SetupCard
  if (!isStarted && !isLoading) {
    return (
      <SetupCard
        value={value}
        setValue={setValue}
        onStart={actions.startExercise}
        isLoading={isLoading}
      />
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <Button
          type="dashed"
          icon={<BackwardFilled style={{ color: "#080808" }} />}
          onClick={actions.resetGame}
        >
          Cấu hình
        </Button>

        <Button icon={<RedoOutlined />} onClick={actions.startExercise}>
          Đổi bài khác
        </Button>
      </div>

      <Card loading={isLoading} style={{ minHeight: 300 }}>
        {/* GAME AREA */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 4px", alignItems: "flex-end", lineHeight: 1.5 }}>
          {charData.map((item, index) => (
            <CharacterBlock
              key={index}
              index={index}
              item={item}
              userInput={userInputs[index]}
              isHinted={hintUsedIndices[index]}
              onInputChange={actions.handleInputChange}
              onKeyDown={actions.handleKeyDown}
              onFocus={actions.setFocusedIndex}
              inputRef={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* --- KHU VỰC HIỂN THỊ NGHĨA & NÚT ĐỌC --- */}
        {isCompleted && meaning && (
          <div
            style={{
              marginTop: 40,
              padding: "20px",
              background: "#f6ffed",
              border: "1px solid #b7eb8f",
              borderRadius: "12px",
              textAlign: "center",
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            <Text type="secondary" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "1px" }}>
              Dịch nghĩa
            </Text>
            
            <div style={{ fontSize: 20, fontWeight: 600, color: "#389e0d", marginTop: 10, fontFamily: '"Segoe UI", Roboto, Arial' }}>
              "{meaning}"
            </div>

            {/* --- NÚT LOA Ở ĐÂY --- */}
            <div style={{ marginTop: 15 }}>
              <Tooltip title="Nghe phát âm">
                <Button 
                  shape="circle" 
                  icon={<SoundOutlined />} 
                  size="large" 
                  onClick={handleSpeak} 
                  style={{ 
                    color: "#1890ff", 
                    borderColor: "#1890ff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                />
              </Tooltip>
            </div>
          </div>
        )}
      </Card>

      {/* FOOTER */}
      <div style={{ textAlign: "center", marginTop: 30 }}>
        {isCompleted ? (
          <Button
            type="primary"
            size="large"
            icon={<CheckCircleOutlined />}
            style={{ background: "#52c41a", height: 50, padding: "0 40px" }}
          >
            Làm tốt lắm!
          </Button>
        ) : (
          <Button
            type="primary"
            size="large"
            onClick={actions.checkAll}
            style={{ width: 200, height: 50 }}
          >
            Kiểm tra
          </Button>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HiraganaPractice;