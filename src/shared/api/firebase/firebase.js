// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Thay thế bằng thông tin từ Firebase Console của bạn
const firebaseConfig = {
  apiKey: "AIzaSyBWFVjAV1zgeMYgwQ8TG9wbceYsRhKyBHg",
  authDomain: "edtech-d7ae8.firebaseapp.com",
  projectId: "edtech-d7ae8",
  storageBucket: "edtech-d7ae8.firebasestorage.app",
  messagingSenderId: "440206803031",
  appId: "1:440206803031:web:2d4e60a53569a8b75e6312",
  measurementId: "G-60GL5JQ954"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };