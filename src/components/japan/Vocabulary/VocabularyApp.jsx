import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import VocabularyGame from "./VocabularyGame";
import GameSetup from "./GameSetup.jsx";
import "./index.css";

const { Header, Content } = Layout;


// Dữ liệu mẫu phong phú hơn để test tính năng lọc
const INITIAL_DATA = [
  {
    id: 1,
    fullWord: "ねこ",
    meaning: "Con mèo",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    parts: ["ね", "こ"],
    options: ["と", "ね", "ご", "こ", "で", "ゃ", "は", "に", "ち", "う"],
    level: "N5",
    type: "Hiragana",
  },
  {
    id: 2,
    fullWord: "サクラ",
    meaning: "Hoa anh đào",
    imageUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600",
    parts: ["サ", "ク", "ラ"],
    options: ["サ", "ク", "ラ", "ア", "イ", "ウ", "エ", "オ", "カ", "キ"],
    level: "N5",
    type: "Katakana",
  },
  {
    id: 3,
    fullWord: "",
    meaning: "",
    imageUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600",
    parts: [],
    options: [],
    level: "N5",
    type: "Kanji",
  },
  {
    id: 4,
    fullWord: "",
    meaning: "",
    imageUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600",
    parts: [],
    options: [],
    level: "N5",
    type: "Mixed",
  },
];

// const data = generateVocab();

const VocabularyApp = () => {
  const [screen, setScreen] = useState("setup");
  const [gameData, setGameData] = useState(null);

  // Xử lý khi người dùng bấm "Bắt đầu" từ màn hình Setup
  const handleStartGame = (dataAPI) => {
    setGameData(dataAPI);
    setScreen("game");
  };

  return (
    <Layout className="app-layout">
      <Content className="app-content">
        {screen === "setup" && (
          <GameSetup
            onStart={handleStartGame}
            totalQuestions={gameData ? gameData.length : 0}
          />
        )}

        {screen === "game" && (
          <VocabularyGame
            data={gameData || "đéo có data"}
            onExit={() => setScreen("setup")}
          />
        )}
      </Content>
    </Layout>
  );
};

export default VocabularyApp;
