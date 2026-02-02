/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Card,
  Radio,
  Button,
  Typography,
  Tag,
  Divider,
  Space,
  Progress,
  Slider,
  Collapse,
  Drawer,
} from "antd";
import { generateQuizPronouns } from "../../../API/PronounApi";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

// ===== THEORY CONTENT =====
const THEORY = {
  "subject-object": (
    <>
      <Title level={5}>📌 Subject & Object Pronouns</Title>
      <ul>
        <li>
          <strong>Subject pronouns</strong>: I, you, he, she, it, we, they
        </li>
        <li>
          Dùng làm <strong>chủ ngữ</strong> (đứng đầu câu)
        </li>
        <li>
          <strong>Object pronouns</strong>: me, you, him, her, it, us, them
        </li>
        <li>
          Dùng sau <strong>động từ / giới từ</strong>
        </li>
      </ul>
      <p>
        <strong>Ví dụ:</strong>
      </p>
      <ul>
        <li>
          <Tag>I</Tag> am a student.
        </li>
        <li>
          Can you help <Tag>me</Tag>?
        </li>
      </ul>
    </>
  ),
  "possessive": (
    <>
      <Title level={5}>📌 Possessive Pronouns</Title>
      <ul>
        <li>
          <strong>Possessive adjectives</strong>: my, your, his, her, its, our,
          their
        </li>
        <li>
          Dùng <strong>trước danh từ</strong>
        </li>
        <li>
          <strong>Possessive pronouns</strong>: mine, yours, his, hers, ours,
          theirs
        </li>
        <li>
          <strong>Không có danh từ</strong> theo sau
        </li>
      </ul>
      <p>
        <strong>Ví dụ:</strong>
      </p>
      <ul>
        <li>
          This is <Tag>my</Tag> book.
        </li>
        <li>
          This book is <Tag>mine</Tag>.
        </li>
      </ul>
    </>
  ),
};

const levelColor = {
  easy: "green",
  medium: "orange",
  hard: "red",
};

const ChooseCorrectPronouns = () => {


  const [step, setStep] = useState("setup");
  const [totalQuestions, setTotalQuestions] = useState(3);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTheory, setCurrentTheory] = useState(null);

  console.log("Current Theory:", currentTheory);

  const startQuiz = async () => {
    try {
        const response = await generateQuizPronouns({
            type: "pronouns",
            numQuestions: totalQuestions,
        });
        const fetchedQuestions = response;
        const shuffledQuestions = shuffleArray(fetchedQuestions);
        setQuestions(shuffledQuestions);
        setStep("quiz");
        setCurrent(0);
        
        // Thiết lập lý thuyết cho câu hỏi đầu tiên ngay khi bắt đầu
        if (shuffledQuestions.length > 0) {
          setCurrentTheory(shuffledQuestions[0].theory); 
        }

        setAnswers({});
        setChecked(false);
        setScore(0);
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
    }
  };

  const q = questions[current];
  const userAnswer = q ? answers[q.id] : null;

  const handleCheck = () => {
    if (userAnswer === q.correct) setScore((s) => s + 1);
    setChecked(true);
  };

  const handleNext = () => {
    setChecked(false);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setStep("review"); // Đổi từ "result" thành "review"
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: 16 }}>
      <Title level={4} style={{ textAlign: "center" }}>
        🧠 Pronouns Quiz
      </Title>

      {/* SETUP */}
      {step === "setup" && (
        <Card>
          <Title level={5}>Chọn số câu hỏi</Title>
          <Slider
            min={1}
            max={20}
            value={totalQuestions}
            onChange={setTotalQuestions}
          />
          <Button type="primary" block onClick={startQuiz}>
            🚀 Start Quiz
          </Button>
        </Card>
      )}

      {/* QUIZ */}
      {step === "quiz" && q && (
        <>
          <Progress
            percent={Math.round(((current) / questions.length) * 100)}
            size="small"
          />

          <Card
            style={{ marginTop: 16 }}
            title={
              <Space>
                <Text>
                  Question {current + 1} / {questions.length}
                </Text>
                <Tag color={levelColor[q.level]}>{q.level.toUpperCase()}</Tag>
              </Space>
            }
            extra={
              <Button
                size="small"
                onClick={() => {
                  setCurrentTheory(q.theory);
                  setDrawerOpen(true);
                }}
              >
                📘 Lý thuyết
              </Button>
            }
          >
            <Title level={5}>{q.question}</Title>

            <Radio.Group
              value={userAnswer}
              onChange={(e) =>
                setAnswers({ ...answers, [q.id]: e.target.value })
              }
              disabled={checked}
            >
              <Space direction="vertical">
                {q.options.map((opt) => (
                  <Radio key={opt} value={opt}>
                    {opt}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>

            {checked && (
              <>
                <Divider />
                <Tag color={userAnswer === q.correct ? "green" : "red"}>
                  {userAnswer === q.correct
                    ? "✅ Correct"
                    : `❌ Wrong (Correct: ${q.correct})`}
                </Tag>
                <p>
                  <Text type="secondary">💡 {q.explanation}</Text>
                </p>
              </>
            )}
          </Card>

          <Button
            type="primary"
            block
            style={{ marginTop: 16 }}
            disabled={!userAnswer}
            onClick={checked ? handleNext : handleCheck}
          >
            {checked ? "Next Question" : "Check Answer"}
          </Button>
        </>
      )}

      {/* RESULT */}
      {/* REVIEW */}
      {step === "review" && (
        <div style={{ paddingBottom: 32 }}>
          <Card
            style={{
              textAlign: "center",
              marginBottom: 20,
              backgroundColor: "#fafafa",
            }}
            bodyStyle={{ padding: "16px" }}
          >
            <Title level={3}>
              Kết quả: {score} / {questions.length}
            </Title>
            <Progress
              type="circle"
              percent={Math.round((score / questions.length) * 100)}
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              size={80}
            />
          </Card>

          {questions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correct;

            return (
              <Card
                key={q.id}
                style={{
                  marginBottom: 16,
                  borderLeft: `6px solid ${isCorrect ? "#52c41a" : "#f5222d"}`,
                }}
                title={
                  <Space>
                    <Text strong>Câu {index + 1}</Text>
                    <Tag color={levelColor[q.level]}>
                      {q.level.toUpperCase()}
                    </Tag>
                  </Space>
                }
              >
                <Title level={5} style={{ marginBottom: 16 }}>
                  {q.question}
                </Title>

                <Space direction="vertical" style={{ width: "100%" }}>
                  {q.options.map((opt) => {
                    let color = "default";
                    let suffix = null;

                    if (opt === q.correct) {
                      color = "success";
                      suffix = " (Đáp án đúng)";
                    } else if (opt === userAnswer && !isCorrect) {
                      color = "error";
                      suffix = " (Lựa chọn của bạn)";
                    }

                    return (
                      <Tag
                        key={opt}
                        color={color}
                        style={{
                          padding: "4px 12px",
                          fontSize: "14px",
                          borderRadius: "4px",
                          width: "100%",
                        }}
                      >
                        {opt} {suffix}
                      </Tag>
                    );
                  })}
                </Space>

                <Divider style={{ margin: "12px 0" }} />

                <div
                  style={{
                    backgroundColor: "#f0f2f5",
                    padding: "8px 12px",
                    borderRadius: "4px",
                  }}
                >
                  <Text type="secondary">
                    <span style={{ marginRight: 8 }}>💡</span>
                    <strong>Giải thích:</strong> {q.explanation}
                  </Text>
                </div>
              </Card>
            );
          })}

          <Button
            block
            type="primary"
            size="large"
            icon={<span>🔁</span>}
            onClick={() => setStep("setup")}
            style={{ marginTop: 8 }}
          >
            Làm lại bài tập
          </Button>
        </div>
      )}

      {/* THEORY DRAWER */}
      <Drawer
        title="📘 Lý thuyết"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={360}
      >
        {THEORY[currentTheory]}
      </Drawer>
    </div>
  );
};

export default ChooseCorrectPronouns;
