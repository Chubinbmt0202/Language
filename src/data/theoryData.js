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

const pastSimple = {
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

// Động từ To be
const verbToBe = {
  id: "verb_to_be",
  title: "Động Từ To Be",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + am/is/are + N/Adj", example: "I am a student." },
    { type: "-", label: "Phủ định", formula: "S + am/is/are + not + N/Adj", example: "He is not happy." },
    { type: "?", label: "Nghi vấn", formula: "Am/Is/Are + S + N/Adj?", example: "Are they ready?" }
  ],
  usage: [
    "Dùng để giới thiệu tên, tuổi, quốc tịch, nghề nghiệp.",
    "Miêu tả tính chất, trạng thái của người hoặc vật.",
    "Chỉ vị trí của người hoặc vật."
  ],
  signs: [],
  notes: [
    "I đi với am",
    "He/She/It và danh từ số ít đi với is",
    "You/We/They và danh từ số nhiều đi với are"
  ]
};

// Động từ thường
const verbOrdinary = {
  id: "verb_ordinary",
  title: "Động Từ Thường (Ordinary Verbs)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + V / V(s/es)", example: "They walk to school." },
    { type: "-", label: "Phủ định", formula: "S + trợ động từ + not + V_inf", example: "They do not walk to school." },
    { type: "?", label: "Nghi vấn", formula: "Trợ động từ + S + V_inf?", example: "Do they walk to school?" }
  ],
  usage: [
    "Thể hiện hành động hoặc trạng thái của chủ ngữ."
  ],
  signs: [],
  notes: [
    "Khác với động từ to be, khi lập câu hỏi hay câu phủ định với động từ thường, ta phải mượn trợ động từ (do, does, did...)."
  ]
};

// Động từ khiếm khuyết
const verbModal = {
  id: "verb_modal",
  title: "Động Từ Khiếm Khuyết (Modal Verbs)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + modal verb + V_inf", example: "She can swim." },
    { type: "-", label: "Phủ định", formula: "S + modal verb + not + V_inf", example: "She cannot swim." },
    { type: "?", label: "Nghi vấn", formula: "Modal verb + S + V_inf?", example: "Can she swim?" }
  ],
  usage: [
    "Thể hiện khả năng (can, could), sự cho phép (may, can), nghĩa vụ (must, have to), lời khuyên (should, ought to)."
  ],
  signs: ["can", "could", "may", "might", "must", "should", "will", "would"],
  notes: [
    "Không chia theo ngôi (không thêm s/es/ed/ing).",
    "Luôn đi kèm với một động từ nguyên mẫu không to (V_inf)."
  ]
};

// Thì hiện tại tiếp diễn
const presentContinuous = {
  id: "present_continuous",
  title: "Thì Hiện Tại Tiếp Diễn (Present Continuous)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + am/is/are + V-ing", example: "I am studying now." },
    { type: "-", label: "Phủ định", formula: "S + am/is/are + not + V-ing", example: "He isn't sleeping." },
    { type: "?", label: "Nghi vấn", formula: "Am/Is/Are + S + V-ing?", example: "Are they playing football?" }
  ],
  usage: [
    "Diễn tả hành động đang xảy ra tại thời điểm nói.",
    "Diễn tả hành động mang tính tạm thời.",
    "Kế hoạch chắc chắn trong tương lai gần."
  ],
  signs: ["now", "right now", "at the moment", "at present", "Look!", "Listen!"],
  notes: [
    "Không dùng thì hiện tại tiếp diễn với các động từ chỉ tri giác, nhận thức (know, understand, want, like, love, hate, see, hear...)."
  ]
};

// Thì tương lai đơn
const futureSimple = {
  id: "future_simple",
  title: "Thì Tương Lai Đơn (Future Simple)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + will + V_inf", example: "I will help you." },
    { type: "-", label: "Phủ định", formula: "S + will not (won't) + V_inf", example: "She won't come." },
    { type: "?", label: "Nghi vấn", formula: "Will + S + V_inf?", example: "Will they win?" }
  ],
  usage: [
    "Diễn tả một quyết định nảy sinh tại thời điểm nói.",
    "Dự đoán không có căn cứ chắc chắn.",
    "Lời hứa, yêu cầu, đề nghị."
  ],
  signs: ["tomorrow", "next (week/month/year)", "in + (thời gian trong tương lai)", "think", "hope", "believe"],
  notes: [
    "Will not viết tắt là won't."
  ]
};

// Thì hiện tại hoàn thành
const presentPerfect = {
  id: "present_perfect",
  title: "Thì Hiện Tại Hoàn Thành (Present Perfect)",
  forms: [
    { type: "+", label: "Khẳng định", formula: "S + have/has + V3/ed", example: "I have lived here for 5 years." },
    { type: "-", label: "Phủ định", formula: "S + have/has + not + V3/ed", example: "She hasn't finished her homework." },
    { type: "?", label: "Nghi vấn", formula: "Have/Has + S + V3/ed?", example: "Have you ever been to Paris?" }
  ],
  usage: [
    "Hành động xảy ra trong quá khứ kéo dài đến hiện tại (có thể tiếp tục ở tương lai).",
    "Hành động vừa mới xảy ra.",
    "Trải nghiệm cho đến thời điểm hiện tại (thường dùng ever/never)."
  ],
  signs: ["already", "yet", "just", "ever", "never", "since", "for", "recently", "so far", "up to now"],
  notes: [
    "Dùng 'for' + khoảng thời gian (for 2 years)",
    "Dùng 'since' + mốc thời gian (since 2010)"
  ]
};

// ----------------------------------------------------
// TỪ LOẠI (PARTS OF SPEECH)
// ----------------------------------------------------

// Danh từ
const nounTheory = {
  id: "noun_theory",
  title: "Danh Từ (Nouns)",
  forms: [
    { type: "Đếm được", label: "Danh từ đếm được (Countable Nouns)", formula: "Có thể thêm s/es. Dùng với a/an/many/few...", example: "a cat, two cats, many books" },
    { type: "Không đếm được", label: "Danh từ không đếm được (Uncountable Nouns)", formula: "Không thêm s/es. Dùng với much/little/a lot of...", example: "water, money, information" },
    { type: "Số nhiều bất quy tắc", label: "Danh từ số nhiều bất quy tắc", formula: "Thay đổi hoàn toàn hình thức", example: "man -> men, child -> children, foot -> feet, tooth -> teeth, mouse -> mice" }
  ],
  usage: [
    "Làm chủ ngữ (Subject) trong câu: [The dog] is barking.",
    "Làm tân ngữ trực tiếp hoặc gián tiếp (Object) cho động từ: I love [my dog].",
    "Làm tân ngữ cho giới từ: She is listening to [music].",
    "Làm bổ ngữ cho chủ ngữ (sau to be, become...): He is [a doctor]."
  ],
  signs: [
    "Hậu tố chỉ người: -er (worker), -or (actor), -ist (scientist), -ee (employee), -ant (assistant).",
    "Hậu tố chỉ vật/sự việc: -tion/-sion (action), -ment (development), -ness (happiness), -ity (ability), -ance/-ence (importance)."
  ],
  notes: [
    "Một số danh từ luôn ở dạng số nhiều: scissors (cái kéo), pants (quần dài), glasses (kính).",
    "Một số danh từ tận cùng là 's' nhưng là số ít: news (tin tức), physics (vật lý), mathematics (toán học).",
    "Danh từ tập hợp có thể dùng số ít hoặc số nhiều tùy ngữ cảnh: family, team, police..."
  ]
};

// Đại từ
const pronounTheory = {
  id: "pronoun_theory",
  title: "Đại Từ (Pronouns)",
  forms: [
    { type: "Nhân xưng (Chủ)", label: "Nhân xưng (Chủ ngữ)", formula: "Đứng đầu câu, trước động từ", example: "I, you, we, they, he, she, it" },
    { type: "Nhân xưng (Tân)", label: "Nhân xưng (Tân ngữ)", formula: "Đứng sau động từ hoặc giới từ", example: "me, you, us, them, him, her, it" },
    { type: "Tính từ sở hữu", label: "Tính từ sở hữu", formula: "Đứng trước danh từ (Sở hữu + Danh từ)", example: "my, your, our, their, his, her, its (VD: my book)" },
    { type: "Đại từ sở hữu", label: "Đại từ sở hữu", formula: "Đứng một mình thay cho (Tính từ sở hữu + Danh từ)", example: "mine, yours, ours, theirs, his, hers, its (VD: This is mine)" },
    { type: "Phản thân", label: "Đại từ phản thân", formula: "Chủ ngữ và tân ngữ là một", example: "myself, yourself, ourselves, themselves, himself, herself, itself" }
  ],
  usage: [
    "Thay thế cho danh từ đã được nhắc đến trước đó để tránh lặp từ.",
    "Đại từ quan hệ (who, whom, whose, which, that) dùng để nối các mệnh đề.",
    "Đại từ chỉ định (this, that, these, those) chỉ ra người hoặc vật cụ thể.",
    "Đại từ bất định (someone, anybody, nothing...) chỉ người hoặc vật không xác định."
  ],
  signs: [
    "Thường đứng độc lập (trừ tính từ sở hữu phải đi kèm danh từ)."
  ],
  notes: [
    "Cần phân biệt rõ: Tính từ sở hữu BẮT BUỘC có danh từ theo sau. Đại từ sở hữu KHÔNG ĐƯỢC có danh từ theo sau.",
    "Sau giới từ (between, to, for...), phải dùng Đại từ nhân xưng làm tân ngữ. VD: 'between you and me' (KHÔNG dùng 'between you and I').",
    "Đại từ phản thân còn dùng để nhấn mạnh: 'I did it myself' (Chính tôi đã tự làm việc đó)."
  ]
};

// 2. TẠO KHO LƯU TRỮ (LOOKUP TABLE)
// Key ở đây ("present_simple_easy") phải TRÙNG KHỚP với "$ref" từ API
export const THEORY_LIBRARY = {
  "present_simple_easy": presentSimpleEasy,
  "present_simple_medium": presentSimpleMedium,
  "present_simple_hard": presentSimpleHard,
  "past_simple": pastSimple,
  "verb_to_be": verbToBe,
  "verb_ordinary": verbOrdinary,
  "verb_modal": verbModal,
  "present_continuous": presentContinuous,
  "future_simple": futureSimple,
  "present_perfect": presentPerfect,
  "noun_theory": nounTheory,
  "pronoun_theory": pronounTheory
};