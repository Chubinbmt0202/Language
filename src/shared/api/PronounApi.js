import axiosClient from "./axiosClient";
const ENDPOINT_TENSE = "/api/generate-quiz-pronouns-choose";

const generateQuizPronouns = async (config) => {
  let apiType = config.type;
  if (apiType !== "pronouns") {
    console.error("Loại không hợp lệ cho generateQuizPronouns:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizPronouns: ${apiType}`);
  }
  const response = await axiosClient.post(ENDPOINT_TENSE, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizPronouns:", response);
  return response.questions;
};

const generateQuizPronounsMulti = async (config) => {
  let apiType = config.type;
  if (apiType !== "pronouns-multi") {
    console.error("Loại không hợp lệ cho generateQuizPronounsMulti:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizPronounsMulti: ${apiType}`);
  }
  const response = await axiosClient.post(ENDPOINT_TENSE, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizPronounsMulti:", response);
  return response.questions;
};

const generateQuizPronounsFindError = async (config) => {
  let apiType = config.type;
  if (apiType !== "FindErrorPronouns") {
    console.error("Loại không hợp lệ cho generateQuizPronounsFindError:", apiType);
    throw new Error(`Loại không hợp lệ cho generateQuizPronounsFindError: ${apiType}`);
  }
  const response = await axiosClient.post(ENDPOINT_TENSE, {
    type: apiType,
    numQuestions: config.numQuestions,
  });
  console.log("Phản hồi từ API generateQuizPronounsFindError:", response);
  return response.questions;
}

export { generateQuizPronouns, generateQuizPronounsMulti, generateQuizPronounsFindError };