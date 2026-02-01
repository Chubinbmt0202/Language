// Đường dẫn: src/data/theoryData.js (hoặc đường dẫn tương ứng của bạn)

// 1. Định nghĩa dữ liệu chi tiết
const presentSimpleEasy = {
  id: "present_simple_easy",
  title: "Thì Hiện Tại Đơn (Present Simple)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + V(s/es)", example: "She works." },
    { type: "-", label: "Phủ định", formula: "S + do/does + not + V_inf", example: "She doesn't work." },
    { type: "?", label: "Nghi vấn", formula: "Do/Does + S + V_inf?", example: "Does she work?" }
  ],
  usage: [
    "Diễn tả thói quen, hành động lặp đi lặp lại.",
    "Sự thật hiển nhiên."
  ],
  signs: ["always", "usually", "often", "every day"],
  notes: ["Ngôi thứ 3 số ít thêm s/es."]
};

const presentSimpleMedium = {
  id: "present_simple_medium",
  title: "Thì Hiện Tại Đơn (Present Simple) - Trung Cấp",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + V(s/es)", example: "He plays football." },
    { type: "-", label: "Phủ định", formula: "S + do/does + not + V_inf", example: "He doesn't play football." },
    { type: "?", label: "Nghi vấn", formula: "Do/Does + S + V_inf?", example: "Does he play football?" }
  ],
  usage: [
    "Diễn tả thói quen, hành động lặp đi lặp lại.",
    "Sự thật hiển nhiên.",
    "Hướng dẫn, chỉ dẫn."
  ],
  signs: ["sometimes", "often", "every week", "on Mondays"],
  notes: ["Ngôi thứ 3 số ít thêm s/es.", "Động từ 'to be' có dạng đặc biệt."]
};

const presentSimpleHard = {
  id: "present_simple_hard",
  title: "Thì Hiện Tại Đơn (Present Simple) - Nâng Cao",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + V(s/es)", example: "They study English." },
    { type: "-", label: "Phủ định", formula: "S + do/does + not + V_inf", example: "They don't study English." },
    { type: "?", label: "Nghi vấn", formula: "Do/Does + S + V_inf?", example: "Do they study English?" }
  ],
  usage: [
    "Diễn tả thói quen, hành động lặp đi lặp lại.",
    "Sự thật hiển nhiên.",
    "Hướng dẫn, chỉ dẫn.",
    "Lịch trình, thời gian biểu."
  ],
  signs: ["rarely", "seldom", "every month", "on Fridays"],
  notes: ["Ngôi thứ 3 số ít thêm s/es.", "Động từ 'to be' có dạng đặc biệt.", "Trạng từ tần suất thường đứng trước động từ chính."]
};

// 2. TẠO KHO LƯU TRỮ (LOOKUP TABLE)
// Key ở đây ("present_simple_easy") phải TRÙNG KHỚP với "$ref" từ API
export const THEORY_LIBRARY = {
  "present_simple_easy": presentSimpleEasy,
  "present_simple_medium": presentSimpleMedium,
  "present_simple_hard": presentSimpleHard,
  // Thêm các thì khác vào đây nếu có
  // "present_continuous_easy": ...
};