import { auth } from "../firebase/firebase";

const BASE_STORAGE_KEY = "global_vocab_app_data";

const defaultData = {
  en: [{ id: "en_default", name: "English TOEIC", words: [] }],
  jp: [{ id: "jp_default", name: "Tu vung N3", words: [] }],
};

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${BASE_STORAGE_KEY}_${user.uid}` : null;
};

export const loadGlobalVocab = () => {
  const key = getUserKey();
  if (!key) return defaultData; // Trả về mặc định nếu chưa login

  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultData;
  } catch {
    return defaultData;
  }
};

export const saveGlobalVocab = (data) => {
  const key = getUserKey();
  if (key) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

const toWordItem = (word, index, lang) => {
  const typeMap = {
    noun: "n",
    verb: "v",
    adjective: "adj",
    adverb: "adv",
  };
  if (word && typeof word === "object" && "word" in word) {
    return {
      ...word,
      key: word.key ?? Date.now() + index,
      lang: word.lang ?? lang,
      type: word.type ?? "n",
      ipa: word.ipa ?? "",
      meaning: word.meaning ?? "",
    };
  }
  return {
    key: Date.now() + index,
    lang,
    word: word.term,
    meaning: word.meaning,
    type: typeMap[word.pos] || word.pos || "n",
    ipa: "",
  };
};

export const addWordsToGlobalVocab = (words, lang = "en") => {
  if (!auth.currentUser) return loadGlobalVocab(); // Không cho thêm nếu chưa login

  const data = loadGlobalVocab();
  const topics = data[lang] || [];
  const activeTopic = topics[0] || { id: `${lang}_default`, name: "Default", words: [] };

  const existing = new Set((activeTopic.words || []).map((w) => w.word));
  const nextWords = [
    ...(activeTopic.words || []),
    ...words
      .filter((w) => !existing.has(w.word ?? w.term))
      .map((w, i) => toWordItem(w, i, lang)),
  ];

  const nextTopic = { ...activeTopic, words: nextWords };
  const nextTopics = [nextTopic, ...topics.filter((t) => t.id !== activeTopic.id)];

  const updated = { ...data, [lang]: nextTopics };
  saveGlobalVocab(updated);
  return updated;
};