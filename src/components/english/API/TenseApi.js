import axios from "axios";

const BASE_URL_LOCAL = "http://localhost:9999";
const BASE_URL = "https://language-backend-onoo.onrender.com";
const ENDPOINT_TENSE = "/api/generate-quiz-conjugation";

export const generateQuizTense = async (config) => {
  let apiType = config.type;

  if (apiType !== "conjugation") {
    console.error("Loại không hợp lệ cho generateQuizTense:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizTense: ${apiType}`);
  }
  const response = await axios.post(`${BASE_URL_LOCAL}${ENDPOINT_TENSE}`, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizTense:", response);
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data.questions;
  console.log("Dữ liệu câu hỏi từ API generateQuizTense:", data);
  return data;
};
