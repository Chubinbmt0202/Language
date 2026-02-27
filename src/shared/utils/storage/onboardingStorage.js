import { auth } from "@/shared/api/firebase/firebase";

const ONBOARDING_STORAGE_KEY = "onboardingSetup";

const getUserKey = () => {
  const user = auth.currentUser;
  return user ? `${ONBOARDING_STORAGE_KEY}_${user.uid}` : null;
};

export const hasCompletedOnboarding = () => {
  const key = getUserKey();
  if (!key) return false;
  const raw = localStorage.getItem(key);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    return !!data.completedAt;
  } catch {
    return false;
  }
};

export const loadOnboardingData = () => {
  const key = getUserKey();
  if (!key) return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveOnboardingData = (data) => {
  const key = getUserKey();
  if (!key) return;
  const record = {
    ...data,
    completedAt: new Date().toISOString(),
    version: 1,
  };
  localStorage.setItem(key, JSON.stringify(record));
};

export const clearOnboardingData = () => {
  const key = getUserKey();
  if (!key) return;
  localStorage.removeItem(key);
};
