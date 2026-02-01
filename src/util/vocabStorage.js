const STORAGE_KEY = "vocabData";

export const getVocabData = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      en: { topics: {} },
      jp: { topics: {} }
    };
  } catch {
    return { en: { topics: {} }, jp: { topics: {} } };
  }
};

export const saveVocabData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
