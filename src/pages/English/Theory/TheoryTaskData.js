export const DEFAULT_THEORY_LESSON = {
  title: "Lý thuyết",
  layout: "sections",
  videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0",
  showQuiz: false,
  sections: [
    {
      heading: "Đang cập nhật",
      content:
        "Nội dung lý thuyết cho bài này chưa được thêm. Vui lòng quay lại sau.",
    },
  ],
};

// Một nơi duy nhất chứa toàn bộ nội dung lý thuyết theo `taskId` (type: "theory")
export const THEORY_TASKS = {
  // Tuần 1 - Ngày 1
  "w1-d1-t1": {
    title: "Lý thuyết: Danh từ (Nouns) & Đại từ (Pronouns)",
    layout: "noun_pronoun",
    videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0",
    showQuiz: true,
    seedNotes: [
      "Danh từ đếm được/không đếm được: nhớ ví dụ.",
      "Phân biệt I/me, my/mine, he/him...",
    ],
  },

  // Tuần 1 - Ngày 2
  "w1-d2-t1": {
    title: "Lý thuyết: Tính từ (Adjectives)",
    layout: "sections",
    showQuiz: false,
    seedNotes: ["Vị trí tính từ: trước N hoặc sau to be/linking verbs."],
    sections: [
      {
        heading: "Định nghĩa",
        content:
          "Tính từ dùng để mô tả đặc điểm/tính chất của người, vật, sự việc. Thường đứng trước danh từ hoặc sau động từ to be/linking verbs.",
      },
      {
        heading: "Vị trí phổ biến",
        content:
          "1) Trước danh từ: a fast car, an important meeting. 2) Sau to be: The car is fast. 3) Sau linking verbs: feel/seem/look/become: He feels tired.",
      },
      {
        heading: "Mẹo Part 5",
        content:
          "Nhìn danh từ ở gần chỗ trống: nếu cần từ bổ nghĩa danh từ → ưu tiên tính từ. Nếu sau to be và trước danh từ không có → thường là tính từ.",
      },
    ],
  },

  // Tuần 1 - Ngày 3
  "w1-d3-t1": {
    title: "Lý thuyết: Trạng từ (Adverbs)",
    layout: "sections",
    showQuiz: false,
    seedNotes: ["Trạng từ hay gặp: -ly; vị trí thường đi kèm V/Adj/Adv."],
    sections: [
      {
        heading: "Định nghĩa",
        content:
          "Trạng từ bổ nghĩa cho động từ, tính từ, hoặc một trạng từ khác. Nhiều trạng từ kết thúc bằng -ly: quickly, carefully, normally.",
      },
      {
        heading: "Vị trí phổ biến",
        content:
          "1) Sau động từ thường: She speaks clearly. 2) Trước tính từ/trạng từ: very fast, extremely important. 3) Đầu câu (nhấn mạnh): Fortunately, ...",
      },
      {
        heading: "Mẹo Part 5",
        content:
          "Nếu chỗ trống đứng trước động từ chính hoặc sau động từ thường → xem xét trạng từ. Nếu chỗ trống bổ nghĩa tính từ → thường là trạng từ (very, extremely...).",
      },
    ],
  },

  // Tuần 1 - Ngày 4
  "w1-d4-t1": {
    title: "Lý thuyết: Động từ (Verbs) & Cấu trúc câu (S + V + O)",
    layout: "sections",
    showQuiz: false,
    seedNotes: ["Xác định S-V chính trước khi chọn đáp án Part 5."],
    sections: [
      {
        heading: "Thành phần câu cơ bản",
        content:
          "Câu đơn thường có: Chủ ngữ (S) + Động từ (V) + (Tân ngữ/ Bổ ngữ) (O/C). Ví dụ: She (S) likes (V) music (O).",
      },
      {
        heading: "Động từ thường & to be",
        content:
          "To be (am/is/are/was/were) liên kết chủ ngữ với bổ ngữ. Động từ thường diễn tả hành động/trạng thái và có thể cần tân ngữ.",
      },
      {
        heading: "Mẹo Part 5",
        content:
          "Xác định S trước, tìm V chính của mệnh đề. Nếu thiếu V → chọn động từ đúng thì/số. Nếu có V rồi → chỗ trống có thể là O/C/adv/adj tùy vị trí.",
      },
    ],
  },

  // Tuần 1 - Ngày 5
  "w1-d5-t1": {
    title: "Lý thuyết: Hòa hợp Chủ ngữ - Động từ (Subject–Verb Agreement)",
    layout: "sections",
    showQuiz: false,
    seedNotes: ["The number of + N(pl) dùng V số ít; a number of + N(pl) dùng V số nhiều."],
    sections: [
      {
        heading: "Quy tắc cốt lõi",
        content:
          "Chủ ngữ số ít → động từ số ít (adds -s ở hiện tại đơn). Chủ ngữ số nhiều → động từ nguyên mẫu. Ví dụ: He works / They work.",
      },
      {
        heading: "Chủ ngữ giả & cụm giới từ",
        content:
          "Đừng bị nhiễu bởi cụm giới từ: The list of items is... (chủ ngữ chính: list).",
      },
      {
        heading: "Các trường hợp hay gặp",
        content:
          "Each/everyone/someone/no one → số ít. A number of + N(pl) → số nhiều; The number of + N(pl) → số ít.",
      },
    ],
  },

  // Tuần 1 - Ngày 6
  "w1-d6-t1": {
    title: "Lý thuyết: Skimming & Scanning (Part 7)",
    layout: "sections",
    showQuiz: false,
    seedNotes: ["Skimming = ý chính; Scanning = thông tin cụ thể."],
    sections: [
      {
        heading: "Skimming là gì?",
        content:
          "Skimming = đọc lướt để nắm ý chính (main idea). Tập trung tiêu đề, câu đầu/ cuối đoạn, từ khóa nổi bật.",
      },
      {
        heading: "Scanning là gì?",
        content:
          "Scanning = quét để tìm thông tin cụ thể (ngày tháng, tên riêng, số liệu, địa điểm). Không cần đọc hết.",
      },
      {
        heading: "Cách áp dụng Part 7",
        content:
          "Đọc câu hỏi trước → xác định từ khóa → scanning để tìm vị trí → đọc kỹ đoạn liên quan (close reading) để chọn đáp án.",
      },
    ],
  },
};

export const getTheoryLesson = (taskId) => {
  if (!taskId) return DEFAULT_THEORY_LESSON;
  const lesson = THEORY_TASKS[taskId];
  if (!lesson) return DEFAULT_THEORY_LESSON;
  return { ...DEFAULT_THEORY_LESSON, ...lesson };
};
