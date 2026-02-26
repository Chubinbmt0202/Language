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
  "w1-d1-t2": {
    title: "Lý thuyết: Danh từ (Nouns) & Đại từ (Pronouns)",
    layout: "noun_pronoun",
    videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0",
    showQuiz: true,
    seedNotes: [
      "Danh từ đếm được/không đếm được: nhớ ví dụ.",
      "Phân biệt I/me, my/mine, he/him...",
    ],
  },

  // Tuần 1 - Ngày 3 (Tính từ & Trạng từ)
  "w1-d3-t2": {
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

  // Phụ lục (Trạng từ)
  "w1-d3-t2-adv": {
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

  // Tuần 1 - Ngày 2 (Động từ & Các thì)
  "w1-d2-t2": {
    title: "Lý thuyết: Động từ (Verbs) & Các thì (Tenses) cơ bản",
    layout: "sections",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/HQm_W4P_S7U",
    missions: [
      {
        key: "video",
        title: "Xem bài giảng Động từ & Thì",
        desc: "Nắm trọn cốt lõi 4 thì cơ bản thường thi.",
        icon: <PlayCircleOutlined />,
        points: "+15 điểm",
      },
      {
        key: "read_structure",
        title: "Đọc Cấu trúc Câu Cơ bản",
        desc: "Phân tích S-V-O và vị trí động từ.",
        icon: <ReadOutlined />,
        points: "+10 điểm",
      },
      {
        key: "read_tenses",
        title: "Học 4 Thì Part 5-6",
        desc: "Hiện tại, Quá khứ, Tương lai, HT Hoàn thành.",
        icon: <ReadOutlined />,
        points: "+20 điểm",
      },
      {
        key: "quiz",
        title: "Hoàn thành Mini Exercise",
        desc: "Tuyệt chiêu loại trừ nhanh thì động từ.",
        icon: <FormOutlined />,
        points: "+20 điểm",
      },
      {
        key: "notes",
        title: "Lưu dấu hiệu nhận biết",
        desc: "Ghi chép các từ khóa (already, since, by...).",
        icon: <EditOutlined />,
        points: "+5 điểm",
      },
    ],
    seedNotes: [
      "Bước 1 trong Part 5 chia động từ: NHÌN DẤU HIỆU THỜI GIAN ĐẦU VÀ CUỐI CÂU.",
      "Hiện tại hoàn thành: since + mốc, for + khoảng, over the past/last + thời gian.",
      "Tương lai đơn: next, tomorrow, shorty, soon, by the end of...",
    ],
    sections: [
      {
        heading: "1. Tầm quan trọng của Động từ trong TOEIC",
        content:
          "Trong Part 5 và 6, câu hỏi về Động từ (Verb) chiếm ít nhất 30% đến 40% số lượng câu hỏi ngữ pháp. Cốt lõi của 1 câu Tiếng Anh luôn là cụm [Chủ ngữ + Động từ chính]. Nếu thiếu 1 trong 2, đó không phải là một câu hoàn chỉnh. Việc xác định đúng Động từ chính là kỹ năng sống còn.",
      },
      {
        heading: "2. Phân loại Động từ",
        content:
          "TOEIC chủ yếu xoay quanh 3 nhóm động từ: \n• Động từ To be (is/are/am/was/were/be/been/being): Thường đứng trước Tính từ (Adj), Danh từ (N), hoặc phân từ (V-ed/V-ing) trong câu bị động/tiếp diễn.\n• Trợ động từ (do/does/did/have/has/had): Dùng để hình thành thì (Tenses) hoặc câu phủ định/nghi vấn.\n• Động từ Khiếm khuyết (can/could/will/would/should/may/might/must): LUÔN cộng với Động từ nguyên thể (V-bare). Ví dụ: The manager *will approve* the budget.",
      },
      {
        heading: "3. Bốn (4) Thì xuất hiện nhiều nhất trong Part 5 & 6",
        content:
          "Đừng học lan man cả 12 thì! Hãy tập trung vào 4 thì 'đẻ ra điểm' sau đây:\n\n1) HIỆN TẠI ĐƠN (Present Simple): Diễn tả sự thật, lịch trình, thói quen. Dấu hiệu: usually, often, always, currently, routinely. Lịch trình tàu xe, lịch hội thảo cực kỳ hay dùng thì này.\n\n2) QUÁ KHỨ ĐƠN (Past Simple): Việc ĐÃ XẢY RA và KẾT THÚC. Dấu hiệu: yesterday, ago, last (week/month/year), in + năm quá khứ (in 2010).\n\n3) TƯƠNG LAI ĐƠN (Future Simple): Dự định chưa xảy ra. Dấu hiệu: tomorrow, next (week/month), shortly, soon, upcoming, in the future.\n\n4) HIỆN TẠI HOÀN THÀNH (Present Perfect): Bắt đầu quá khứ kéo dài đến hiện tại. Dấu hiệu ĐẶC TRƯNG TOEIC: over/for the past/last + thời gian (over the last 5 years), since, recently, lately, already, yet.",
      },
      {
        heading: "4. Kỹ thuật loại trừ khi làm bài (Mẹo Part 5)",
        content:
          "Khi gặp câu 4 đáp án đều là động từ (ví dụ: A. working, B. works, C. to work, D. worked):\n• BƯỚC 1: Tìm xem câu ĐÃ CÓ V CHÍNH CHƯA? Nếu chưa có V chính -> Loại ngay các dạng V-ing, To-V.\n• BƯỚC 2: Xét sự hòa hợp Chủ ngữ (S) - số ít hay số nhiều? (VD: The company -> số ít).\n• BƯỚC 3: Liếc tìm DẤU HIỆU THỜI GIAN ở đầu hoặc cuối câu để chốt Thì (Tense).\n• BƯỚC 4: Xét Chủ động hay Bị động (nhìn xem phía sau có Tân ngữ không). Giới từ (in/on/at) đứng ngay sau chỗ trống thường báo hiệu Bị động.",
      },
    ],
  },

  // Tuần 1 - Ngày 4 (Hòa hợp S-V)
  "w1-d4-t2": {
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

  // Tuần 3 - Ngày 4 (Skimming & Scanning)
  "w3-d4-t2": {
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
