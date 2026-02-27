import { auth } from "@/shared/api/firebase/firebase";

const BASE_KEY = "vocabData";

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${BASE_KEY}_${user.uid}` : null;
};

export const getVocabData = () => {
  try {
    const key = getUserKey();
    if (!key) {
       return { en: { topics: {} }, jp: { topics: {} } };
    }

    return JSON.parse(localStorage.getItem(key)) || {
      en: { topics: {} },
      jp: { topics: {} }
    };
  } catch {
    return { en: { topics: {} }, jp: { topics: {} } };
  }
};

export const saveVocabData = (data) => {
  const key = getUserKey();
  if (key) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};