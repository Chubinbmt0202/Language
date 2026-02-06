
import React, { useMemo, useState } from "react";
import { Card, Radio, Button, Typography, Space, Alert, Result, Divider, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, ReloadOutlined, SmileOutlined } from "@ant-design/icons";
import { markLessonMissionDone } from "../../../util/lessonMissions";
const { Title, Text, Paragraph } = Typography;

// --- DỮ LIỆU CÂU HỎI (5 DANH TỪ + 5 ĐẠI TỪ) ---
const QUIZ_DATA = [
  // --- PHẦN 1: DANH TỪ (NOUNS) ---
  {
    id: 1,
    category: "Noun",
    question: "Từ nào dưới đây là Danh từ không đếm được (Uncountable Noun)?",
    options: [
      { value: "A", text: "Apple" },
      { value: "B", text: "Water" },
      { value: "C", text: "Student" },
      { value: "D", text: "Table" },
    ],
    correct: "B",
    explain: "'Water' là chất lỏng, không thể đếm 1, 2 được. Các từ còn lại đều đếm được."
  },
  {
    id: 2,
    category: "Noun",
    question: "Chọn dạng số nhiều đúng của từ 'Child':",
    options: [
      { value: "A", text: "Childs" },
      { value: "B", text: "Children" },
      { value: "C", text: "Childrens" },
      { value: "D", text: "Childes" },
    ],
    correct: "B",
    explain: "'Child' là danh từ bất quy tắc, số nhiều là 'Children' (không thêm s)."
  },
  {
    id: 3,
    category: "Noun",
    question: "Trong câu 'She is a teacher', từ 'teacher' đóng vai trò gì?",
    options: [
      { value: "A", text: "Chủ ngữ (Subject)" },
      { value: "B", text: "Tân ngữ (Object)" },
      { value: "C", text: "Bổ ngữ (Complement)" },
      { value: "D", text: "Động từ (Verb)" },
    ],
    correct: "C",
    explain: "Sau động từ tobe (is), danh từ chỉ nghề nghiệp đóng vai trò là Bổ ngữ cho chủ ngữ."
  },
  {
    id: 4,
    category: "Noun",
    question: "Từ nào dưới đây là Danh từ Trừu tượng (Abstract Noun)?",
    options: [
      { value: "A", text: "Happiness" },
      { value: "B", text: "Car" },
      { value: "C", text: "London" },
      { value: "D", text: "Teacher" },
    ],
    correct: "A",
    explain: "'Happiness' (hạnh phúc) là cảm xúc, không thể cầm nắm được."
  },
  {
    id: 5,
    category: "Noun",
    question: "Điền từ thích hợp: 'I need two _____ of bread.'",
    options: [
      { value: "A", text: "loaves" },
      { value: "B", text: "loafs" },
      { value: "C", text: "loaf" },
      { value: "D", text: "piece" },
    ],
    correct: "A",
    explain: "Danh từ tận cùng là 'f', khi chuyển sang số nhiều thường đổi thành 'ves'. (loaf -> loaves)."
  },

  // --- PHẦN 2: ĐẠI TỪ (PRONOUNS) ---
  {
    id: 6,
    category: "Pronoun",
    question: "Điền đại từ thích hợp: 'My brother loves music. _____ plays the guitar very well.'",
    options: [
      { value: "A", text: "He" },
      { value: "B", text: "Him" },
      { value: "C", text: "His" },
      { value: "D", text: "Himself" },
    ],
    correct: "A",
    explain: "Cần một Chủ ngữ (S) thay thế cho 'My brother'. 'He' là đáp án đúng."
  },
  {
    id: 7,
    category: "Pronoun",
    question: "Điền từ thích hợp: 'This is not my book. It is _____.'",
    options: [
      { value: "A", text: "her" },
      { value: "B", text: "hers" },
      { value: "C", text: "she" },
      { value: "D", text: "herself" },
    ],
    correct: "B",
    explain: "Cần một Đại từ sở hữu (đứng một mình, không có danh từ theo sau). Hers = Her book."
  },
  {
    id: 8,
    category: "Pronoun",
    question: "Chọn câu đúng:",
    options: [
      { value: "A", text: "Her loves me." },
      { value: "B", text: "She loves I." },
      { value: "C", text: "She loves mine." },
      { value: "D", text: "She loves me." },
    ],
    correct: "D",
    explain: "'She' là chủ ngữ (S), 'me' là tân ngữ (O) đứng sau động từ 'loves'."
  },
  {
    id: 9,
    category: "Pronoun",
    question: "Điền từ thích hợp: 'Look at that cat. _____ tail is very long.'",
    options: [
      { value: "A", text: "It" },
      { value: "B", text: "It's" },
      { value: "C", text: "Its" },
      { value: "D", text: "Itself" },
    ],
    correct: "C",
    explain: "Cần Tính từ sở hữu cho vật (con mèo). 'Its' (của nó). Lưu ý: 'It's' là viết tắt của 'It is'."
  },
  {
    id: 10,
    category: "Pronoun",
    question: "Điền từ thích hợp: 'I cut _____ when I was cooking.'",
    options: [
      { value: "A", text: "me" },
      { value: "B", text: "myself" },
      { value: "C", text: "mine" },
      { value: "D", text: "I" },
    ],
    correct: "B",
    explain: "Chủ ngữ (I) và Tân ngữ là cùng một người -> Dùng đại từ phản thân 'myself'."
  },
];

const QuizSection = ({ taskId }) => {
  // State lưu đáp án người dùng đã chọn: { 1: "A", 2: "B", ... }
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Xử lý khi chọn đáp án
  const handleSelect = (questionId, value) => {
    if (submitted) return; // Nếu đã nộp bài thì không cho chọn lại
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Tính điểm
  const calculateScore = () => {
    let score = 0;
    QUIZ_DATA.forEach((q) => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // Reset làm lại
  const handleRetry = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const canSubmit = useMemo(
    () => Object.keys(userAnswers).length >= QUIZ_DATA.length,
    [userAnswers],
  );

  if (submitted) {
    return (
      <Card>
        <Result
          status={score >= 8 ? "success" : score >= 5 ? "warning" : "error"}
          title={`Bạn đã đạt ${score} / ${QUIZ_DATA.length} điểm`}
          subTitle={score >= 8 ? "Tuyệt vời! Bạn đã nắm chắc kiến thức." : "Hãy xem lại lời giải chi tiết bên dưới nhé."}
          extra={[
            <Button type="primary" key="retry" onClick={handleRetry} icon={<ReloadOutlined />}>
              Làm lại
            </Button>,
          ]}
        />
        <Divider orientation="left">Chi tiết lời giải</Divider>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          {QUIZ_DATA.map((q, index) => {
            const isCorrect = userAnswers[q.id] === q.correct;
            return (
              <Card 
                key={q.id} 
                size="small" 
                title={<span>Câu {index + 1}: <Tag color={q.category === 'Noun' ? 'blue' : 'purple'}>{q.category}</Tag></span>}
                style={{ borderLeft: isCorrect ? "5px solid #52c41a" : "5px solid #ff4d4f" }}
              >
                <Paragraph strong>{q.question}</Paragraph>
                <Space direction="vertical" style={{width: '100%'}}>
                   {q.options.map(opt => (
                       <div key={opt.value} style={{
                           color: opt.value === q.correct ? '#52c41a' : (opt.value === userAnswers[q.id] ? '#ff4d4f' : 'inherit'),
                           fontWeight: (opt.value === q.correct || opt.value === userAnswers[q.id]) ? 'bold' : 'normal'
                       }}>
                           {opt.value}. {opt.text} {opt.value === q.correct && <CheckCircleOutlined />}
                       </div>
                   ))}
                </Space>
                <Alert 
                    message="Giải thích:" 
                    description={q.explain} 
                    type={isCorrect ? "success" : "error"} 
                    showIcon 
                    style={{marginTop: 10}}
                />
              </Card>
            );
          })}
        </Space>
      </Card>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Alert message="Hãy chọn đáp án đúng nhất cho 10 câu hỏi dưới đây." type="info" showIcon />
        
        {QUIZ_DATA.map((q, index) => (
          <Card key={q.id} title={<span>Câu {index + 1} <Tag>{q.category}</Tag></span>}>
            <Title level={5} style={{ marginTop: 0 }}>{q.question}</Title>
            <Radio.Group 
                onChange={(e) => handleSelect(q.id, e.target.value)} 
                value={userAnswers[q.id]}
            >
              <Space direction="vertical">
                {q.options.map((opt) => (
                  <Radio key={opt.value} value={opt.value}>
                    {opt.value}. {opt.text}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Card>
        ))}

        <Button 
            type="primary" 
            size="large" 
            block 
            onClick={() => {
              setSubmitted(true);
              markLessonMissionDone(taskId, "quiz");
            }}
            disabled={!canSubmit}
        >
          Nộp bài ({Object.keys(userAnswers).length}/{QUIZ_DATA.length})
        </Button>
      </Space>
    </div>
  );
};

export default QuizSection;
