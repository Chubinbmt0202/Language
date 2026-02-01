import React, { useState } from "react";
import { Card, Row, Col, Input, Button, message, Select } from "antd";
import { PlusOutlined, AudioOutlined } from "@ant-design/icons";
import * as wanakana from "wanakana";

const { Option } = Select;

const AddVocabForm = ({ activeTopicId, topics, setTopics, activeLang }) => {
  const [newWord, setNewWord] = useState({
    word: "",      // Dùng cho Tiếng Anh
    meaning: "",
    romaji: "",    // Dùng cho Tiếng Nhật
    hiragana: "",
    katakana: "",
    type: "n",     // Loại từ: n (noun), v (verb), adj, adv dùng cho tiếng anh
    ipa: ""        // Phiên âm tiếng Anh
  });

  const handleAdd = () => {
    // Kiểm tra điều kiện nhập tùy theo ngôn ngữ
    const isEnglish = activeLang === "en";
    const mainField = isEnglish ? newWord.word : newWord.romaji;

    if (!newWord.meaning || !mainField) {
      return message.warning("Vui lòng nhập từ mới và ý nghĩa!");
    }

    const updated = topics.map(t => t.id === activeTopicId 
      ? { ...t, words: [{ ...newWord, key: Date.now(), lang: activeLang }, ...t.words] } 
      : t
    );
    
    setTopics(updated);
    // Reset form
    setNewWord({ word: "", meaning: "", romaji: "", hiragana: "", katakana: "", type: "n", ipa: "" });
    message.success("Đã thêm từ vựng thành công!");
  };

  return (
    <Card size="small" title={`Thêm từ mới (${activeLang === 'en' ? 'English' : 'Japanese'})`} style={{ marginBottom: 20, borderRadius: 8 }}>
      <Row gutter={[12, 12]}>
        {/* CỘT 1: NHẬP TỪ CHÍNH */}
        <Col xs={24} md={6}>
          {activeLang === "en" ? (
            <Input 
              placeholder="English word (e.g. Applicant)" 
              value={newWord.word}
              onChange={e => setNewWord({...newWord, word: e.target.value})}
            />
          ) : (
            <Input 
              placeholder="Romaji (e.g. neko)" 
              value={newWord.romaji}
              onChange={e => setNewWord({
                ...newWord, 
                romaji: e.target.value,
                hiragana: wanakana.toHiragana(e.target.value),
                katakana: wanakana.toKatakana(e.target.value)
              })} 
            />
          )}
        </Col>

        {/* CỘT 2: PHIÊN ÂM / KANA */}
        <Col xs={12} md={5}>
          {activeLang === "en" ? (
            <Input 
              prefix={<AudioOutlined style={{ color: '#bfbfbf' }} />}
              placeholder="IPA (e.g. /ˈæplɪkənt/)" 
              value={newWord.ipa}
              onChange={e => setNewWord({...newWord, ipa: e.target.value})}
            />
          ) : (
            <Input value={newWord.hiragana} readOnly placeholder="Hiragana" className="bg-gray-50" />
          )}
        </Col>

        {/* CỘT 3: LOẠI TỪ (Cực kỳ quan trọng cho TOEIC) */}
        <Col xs={12} md={4}>
          <Select 
            style={{ width: '100%' }} 
            value={newWord.type} 
            onChange={val => setNewWord({...newWord, type: val})}
          >
            <Option value="n">Noun (Danh từ)</Option>
            <Option value="v">Verb (Động từ)</Option>
            <Option value="adj">Adj (Tính từ)</Option>
            <Option value="adv">Adv (Trạng từ)</Option>
          </Select>
        </Col>

        {/* CỘT 4: NGHĨA TIẾNG VIỆT */}
        <Col xs={24} md={6}>
          <Input 
            placeholder="Nghĩa tiếng Việt" 
            value={newWord.meaning} 
            onChange={e => setNewWord({...newWord, meaning: e.target.value})}
            onPressEnter={handleAdd}
          />
        </Col>

        {/* CỘT 5: NÚT LƯU */}
        <Col xs={24} md={3}>
          <Button type="primary" block icon={<PlusOutlined />} onClick={handleAdd}>
            Lưu
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AddVocabForm;