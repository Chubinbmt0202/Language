// src/services/geminiService.js
import axios from "axios";

const BASE_URL_LOCAL = 'http://localhost:9999'; // Thay thế bằng URL thực tế của bạn
const BASE_URL = 'https://language-backend-onoo.onrender.com'; // Thay thế bằng URL thực tế của bạn
const ENDPOINT = '/api/generate-quiz-fill';

const generateQuizFill = async (scriptType) => {
  let apiType = scriptType;
  if (scriptType !== 'mixed-text' && !scriptType.includes('-text')) {
    apiType = `${scriptType}-text`;
  }
  const response = await axios.post(`${BASE_URL_LOCAL}${ENDPOINT}`, { type: apiType });
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data;
  return data;
};

const generateVocab = async (config) => {
  console.log("Gọi API generateVocab với cấu hình:", config);
  const response = await axios.post(`${BASE_URL_LOCAL}/api/generate-quiz-vocab`, config);
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data;
  return data;
};

export {
  generateQuizFill,
  generateVocab,
};