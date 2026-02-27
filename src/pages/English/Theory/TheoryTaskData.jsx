import PlayCircleOutlined from "@ant-design/icons/es/icons/PlayCircleOutlined";
import ReadOutlined from "@ant-design/icons/es/icons/ReadOutlined";
import FormOutlined from "@ant-design/icons/es/icons/FormOutlined";
import EditOutlined from "@ant-design/icons/es/icons/EditOutlined";

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
    title: "Lý thuyết: Danh từ (Nouns)",
    layout: "noun",
    videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0",
    showQuiz: true,
    seedNotes: [
      "Danh từ đếm được/không đếm được: nhớ ví dụ."
    ],
  },
  "w1-d1-t4": {
    title: "Lý thuyết: Đại từ (Pronouns)",
    layout: "pronoun",
    videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0",
    showQuiz: true,
    seedNotes: [
      "Phân biệt I/me, my/mine, he/him...",
      "Khi nào dùng Đại từ phản thân (myself, himself...)"
    ],
  },

  // Tuần 1 - Ngày 3 (Tính từ)
  "w1-d3-t2": {
    title: "Lý thuyết: Tính từ (Adjectives)",
    layout: "adjective",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/I1M7pF-gwd0", /* Thay bằng ID video Tính từ thực tế nếu có */
    missions: [
      {
        key: "video",
        title: "Xem bài giảng Tính từ",
        desc: "Cách nhận biết đuôi Tính từ và Vị trí đứng của chúng.",
        icon: <PlayCircleOutlined />,
        points: "+15 điểm",
      },
      {
        key: "read_structure",
        title: "OSASCOMP - Trật tự Tính từ",
        desc: "Cách sắp xếp nhiều tính từ đứng trước Danh từ.",
        icon: <ReadOutlined />,
        points: "+10 điểm",
      },
      {
        key: "quiz",
        title: "Hoàn thành Mini Exercise",
        desc: "Nhận biết vị trí Vàng của Tính từ trong đề thi",
        icon: <FormOutlined />,
        points: "+20 điểm",
      }
    ],
    seedNotes: ["Vị trí tính từ: trước Danh từ hoặc sau to be/linking verbs (feel, seem, look...).", "Đuôi tính từ cơ bản: -ful, -less, -ive, -al, -able, -ous."],
  },

  // Tuần 1 - Ngày 3 (Trạng từ)
  "w1-d3-t4": {
    title: "Lý thuyết: Trạng từ (Adverbs)",
    layout: "adverb",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/HQm_W4P_S7U", /* Thay bằng ID video Trạng từ thực tế nếu có */
    missions: [
      {
        key: "video",
        title: "Xem bài giảng Trạng từ",
        desc: "Bí quyết giải câu chọn Trạng từ đuôi -ly.",
        icon: <PlayCircleOutlined />,
        points: "+15 điểm",
      },
      {
        key: "read_compare",
        title: "Phân biệt Tính từ / Trạng từ dễ nhầm",
        desc: "Hard vs Hardly, Late vs Lately, High vs Highly.",
        icon: <ReadOutlined />,
        points: "+10 điểm",
      },
      {
        key: "quiz",
        title: "Luyện Mẹo Part 5",
        desc: "Câu đã đủ S-V-O => Điền ngay Trạng từ bổ nghĩa.",
        icon: <FormOutlined />,
        points: "+20 điểm",
      }
    ],
    seedNotes: ["Trạng từ: Thường thêm đuôi -ly vào sau Tính từ (quick -> quickly).", "Trạng từ có thể bổ nghĩa cho mọi thứ, TRỪ Danh từ.", "Không bao giờ để Trạng từ chen giữa Động từ và Tân ngữ."],
  },

  // Tuần 1 - Ngày 2 (Động từ)
  "w1-d2-t2": {
    title: "Lý thuyết: Động từ (Verbs)",
    layout: "verb",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/HQm_W4P_S7U",
    missions: [
      {
        key: "video",
        title: "Xem bài giảng Động từ",
        desc: "Nắm trọn cốt lõi Động từ thường, trợ ĐT, V khuyết thiếu.",
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
        key: "quiz",
        title: "Hoàn thành Mini Exercise",
        desc: "Luyện tập xác định Động từ chính (V-main).",
        icon: <FormOutlined />,
        points: "+20 điểm",
      }
    ],
    seedNotes: [
      "Bước 1 trong Part 5 chia động từ: NHÌN XEM CÂU CÓ ĐỘNG TỪ CHÍNH CHƯA.",
      "V-ing và To-V KHÔNG BAO GIỜ làm động từ chính."
    ],
  },

  // Tuần 1 - Ngày 2 (Các thì cơ bản)
  "w1-d2-t4": {
    title: "Lý thuyết: Các thì cơ bản (Tenses)",
    layout: "tenses",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/HQm_W4P_S7U",
    missions: [
      {
        key: "read_tenses",
        title: "Học 4 Thì Part 5-6",
        desc: "Hiện tại, Quá khứ, Tương lai, HT Hoàn thành.",
        icon: <ReadOutlined />,
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
      "Hiện tại hoàn thành: since + mốc, for + khoảng, over the past/last + thời gian.",
      "Tương lai đơn: next, tomorrow, shorty, soon, by the end of...",
    ],
  },

  // Tuần 1 - Ngày 4 (Hòa hợp S-V)
  "w1-d4-t2": {
    title: "Lý thuyết: Sự hòa hợp Chủ ngữ - Động từ (S-V Agreement)",
    layout: "sv_agreement",
    showQuiz: true,
    videoSrc: "https://www.youtube.com/embed/PjRkH7K63aI", /* ID Placeholder */
    missions: [
      {
        key: "video",
        title: "Xem bài giảng SV Agreement",
        desc: "Cách xác định Chủ ngữ thật trong câu để chia Động từ.",
        icon: <PlayCircleOutlined />,
        points: "+15 điểm",
      },
      {
        key: "read_indefinite",
        title: "Mẹo bẫy 'Đại từ bất định'",
        desc: "Everyone, no one, everything... đi với V số ít hay số nhiều?",
        icon: <ReadOutlined />,
        points: "+10 điểm",
      },
      {
        key: "quiz",
        title: "Luyện Part 5: Chia Động từ",
        desc: "Tránh bẫy Cụm giới từ chen ngang giữa S và V.",
        icon: <FormOutlined />,
        points: "+20 điểm",
      }
    ],
    seedNotes: ["N1 + giới từ + N2 -> Chia V theo N1.", "Everyone, someone, nobody, nothing -> Luôn chia V số ít.", "The number of + N(pl) dùng V số ít; A number of + N(pl) dùng V số nhiều."],
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
