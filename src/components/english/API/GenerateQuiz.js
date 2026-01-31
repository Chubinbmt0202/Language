import axios from "axios";

const BASE_URL_LOCAL = "http://localhost:9999"; // Thay thế bằng URL thực tế của bạn
const BASE_URL = "https://language-backend-onoo.onrender.com"; // Thay thế bằng URL thực tế của bạn
const ENDPOINT_WORD_FORM = "/api/generate-quiz-wordForm";
const ENDPOINT_SUFFIXES = "/api/generate-quiz-suffixes";
const ENDPOINT_ERROR_GAME = "/api/generate-quiz-error";

const generateQuizWordForm = async (config) => {
  let apiType = config.type;
  if (apiType !== "wordForm") {
    console.error("Loại không hợp lệ cho generateQuizWordForm:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizWordForm: ${apiType}`);
  }
  const response = await axios.post(`${BASE_URL}${ENDPOINT_WORD_FORM}`, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizWordForm:", response);
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data.questions;
  console.log("Dữ liệu câu hỏi từ API generateQuizWordForm:", data);
  return data;
};

const generateQuizSuffixes = async (config) => {
  let apiType = config.type;
  if (apiType !== "suffixes") {
    console.error("Loại không hợp lệ cho generateQuizSuffixes:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizSuffixes: ${apiType}`);
  }
  const response = await axios.post(`${BASE_URL}${ENDPOINT_SUFFIXES}`, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizSuffixes:", response);
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data.questions;
  console.log("Dữ liệu câu hỏi từ API generateQuizSuffixes:", data);
  return data;
};

const generateQuizErrorGame = async (config) => {
  let apiType = config.type;
  if (apiType !== "error_game") {
    console.error("Loại không hợp lệ cho generateQuizErrorGame:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizErrorGame: ${apiType}`);
  }
  const response = await axios.post(`${BASE_URL}${ENDPOINT_ERROR_GAME}`, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizErrorGame:", response);
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data.questions;
  console.log("Dữ liệu câu hỏi từ API generateQuizErrorGame:", data);
  return data;
};

export { generateQuizWordForm, generateQuizSuffixes, generateQuizErrorGame };
