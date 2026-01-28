// src/services/geminiService.js
import axios from "axios";

const BASE_URL = 'https://language-backend-onoo.onrender.com'; // Thay thế bằng URL thực tế của bạn
const ENDPOINT = '/api/generate-quiz-fill';

export const generateQuizFill = async (scriptType) => {
  let apiType = scriptType;
  if (scriptType !== 'mixed-text' && !scriptType.includes('-text')) {
    apiType = `${scriptType}-text`;
  }
  // console.log(`📡 Calling API generateQuizFill with type: ${apiType}`);
  const response = await axios.post(`${BASE_URL}${ENDPOINT}`, { type: apiType });
  // console.log('📨 API raw response:', response);
  
  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = response.data;
  return data;
};