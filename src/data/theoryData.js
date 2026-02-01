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


// 2: Thì quá khứ đơn (Present Simple) - Tương tự như trên, bạn có thể định nghĩa các mức độ khó khác nhau

const pastSimple =  {
  id: "past_simple_hard",
  title: "Thì Quá Khứ Đơn – Past Simple (Hard Level)",
  forms: [
    {
      type: "+",
      label: "Khẳng định",
      formula: "S + V2 / V-ed",
      example: "The students who joined the course finished the test yesterday."
    },
    {
      type: "-",
      label: "Phủ định",
      formula: "S + did not + V_inf",
      example: "The manager did not attend the meeting last week."
    },
    {
      type: "?",
      label: "Nghi vấn",
      formula: "Did + S + V_inf ?",
      example: "Did the teacher who taught you last year retire?"
    }
  ],
  usage: [
    "Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.",
    "Dùng để kể lại sự kiện, câu chuyện, trải nghiệm trong quá khứ.",
    "Dùng với mốc thời gian xác định trong quá khứ."
  ],
  signs: [
    "yesterday",
    "last night / last week / last year",
    "… ago",
    "in + year (in 2020)",
    "when + mệnh đề quá khứ",
    "during + thời gian trong quá khứ"
  ],
  notes: [
    "Dù chủ ngữ rất dài hay có mệnh đề phụ, động từ chính vẫn chia theo thì.",
    "Trong câu phủ định và nghi vấn, động từ chính luôn ở dạng nguyên mẫu.",
    "Không bao giờ dùng V2/V-ed sau did hoặc did not.",
    "Trạng từ hiện tại (usually, often, always) chỉ là bẫy – không quyết định thì.",
    "Cần xác định đúng mốc thời gian để tránh nhầm với Present Perfect."
  ],
  commonMistakes: [
    "❌ Did the students finished the test?",
    "❌ The manager did not attended the meeting.",
    "❌ Did the boy broke the window?"
  ],
  tips: [
    "Bước 1: Tìm mốc thời gian → xác định chắc chắn quá khứ.",
    "Bước 2: Xác định loại câu (khẳng định / phủ định / nghi vấn).",
    "Bước 3: Nếu có did / did not → dùng V nguyên mẫu.",
    "Bước 4: Bỏ qua phần chủ ngữ dài, chỉ tập trung vào động từ chính."
  ]
};

// 2. TẠO KHO LƯU TRỮ (LOOKUP TABLE)
// Key ở đây ("present_simple_easy") phải TRÙNG KHỚP với "$ref" từ API
export const THEORY_LIBRARY = {
  "present_simple_easy": presentSimpleEasy,
  "present_simple_medium": presentSimpleMedium,
  "present_simple_hard": presentSimpleHard,
  "past_simple": pastSimple
};