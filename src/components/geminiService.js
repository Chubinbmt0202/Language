// geminiService.js (Frontend)

// URL của backend (có thể đưa vào biến môi trường VITE_API_URL)
const API_URL = "https://language-backend-onoo.onrender.com/api/generate-quiz";

export const generateQuestions = async ({ type = 'multiple-choice', count = 5, level = 'N5', topic = 'General' }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, count, level, topic }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      console.log(`Generated [${type}] Questions from Backend:`, result.data);
      return result.data;
    } else {
      throw new Error(result.message || "Unknown error from backend");
    }

  } catch (error) {
    console.error("Error calling quiz API:", error);
    throw error;
  }
};