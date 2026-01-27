import React from "react";
import { Card, Radio, Button } from "antd";
import { useState } from "react";

const Multipage = () => {
  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital and most populous city of France.",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      explanation:
        "Mars is often called the 'Red Planet' because of its reddish appearance.",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
      explanation:
        "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
    },
  ];

  // state quản lý 
  const [value, setValue] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [explanation, setExplanation] = useState(true);

  const handleChange = (answerCorrect) => {
    return (e) => {
      setValue(e.target.value);
      if (answerCorrect === e.target.value) {
        console.log("Correct Answer");
        setScore(score + 1);
        setDisabled(true);
        setExplanation(false);
      } else {
        console.log("Wrong Answer");
        setDisabled(true);
        setExplanation(false);
      }
    }
  };

  const handleNext = () => {
    // kiểm tra nếu chưa chọn đáp án
    if (!disabled) {
      alert("Vui lòng chọn đáp án trước khi tiếp tục!");
      return;
    }

    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setDisabled(false);
      setValue(1); // Reset selected value for the next question
    } else {
      alert("Bạn đã hoàn thành bài quiz!, tổng điểm của bạn là: " + score);
    }
  };
  const Question = data[currentQuestion];


  return (
    <>
        <h1>Điểm: {score}</h1>
        <Card
          key={Question.id}
          title={`Question ${Question.id}`}
          style={{ margin: "20px" }}
        >
          <p>
            <strong>Q:</strong> {Question.question}
          </p>
          <ul>
            {Question.options.map((index) => (
              <Radio
                key={index}
                value={index}
                disabled={disabled}
                checked={value === index}
                onChange={handleChange(Question.correctAnswer)}
                style={{ display: "block", margin: "8px 0" }}
              >
                {index}
              </Radio>
            ))}
          </ul>
          <Button onClick={handleNext}>Next</Button>
          <p hidden={true}>
            <strong>Correct Answer:</strong> {Question.correctAnswer}
          </p>
          <p hidden={explanation}>
            <strong>Explanation:</strong> {Question.explanation}
          </p>
        </Card>
    </>
  );
}

export default Multipage;