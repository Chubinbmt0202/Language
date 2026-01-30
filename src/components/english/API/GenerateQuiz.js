import axios from "axios";

const BASE_URL_LOCAL = 'http://localhost:9999'; // Thay thế bằng URL thực tế của bạn
const BASE_URL = 'https://language-backend-onoo.onrender.com'; // Thay thế bằng URL thực tế của bạn
const ENDPOINT = '/api/generate-quiz-wordForm';

const generateQuizWordForm = async (config) => {
  let apiType = config.type;
  if (apiType !== 'wordForm' ) {
    console.error("Loại không hợp lệ cho generateQuizWordForm:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizWordForm: ${apiType}`);
  } 
    const response = await axios.post(`${BASE_URL}${ENDPOINT}`, { type: apiType, numQuestions: config.numQuestions });
    console.log("Phản hồi từ API generateQuizWordForm:", response);
    if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
    }
    const data = response.data.questions;
    console.log("Dữ liệu câu hỏi từ API generateQuizWordForm:", data);
    return data;
};

export {
  generateQuizWordForm,
};
