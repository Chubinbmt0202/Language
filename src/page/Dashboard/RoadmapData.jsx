const rawRoadmap = [
{
  week: 1,
  "name": "Tuần 1: Ngữ pháp cốt lõi & Câu trúc câu",
  "description": "Nắm chắc ngữ pháp cơ bản, giải quyết Part 5 trong tối đa 20 giây/câu.",
  "days": [
    {
      "id": "w1-d1",
      "title": "Ngày 1: Danh từ (Nouns) & Đại từ (Pronouns)",
      "focus": "Nhận diện vị trí và chức năng của Danh từ.",
      "tasks": [
        { "text": "Lý thuyết Danh từ và Đại từ", "type": "theory", "completed": false, "id": "w1-d1-t1" },
        { "text": "Học thuộc 25 từ vựng (chú ý động từ bất quy tắc)", "completed": false, "id": "w1-d1-t3", "type": "vocab", "maxProgress": 5 },
        { "text": "Thực chiến Part 5 (Danh từ & Đại từ)", "completed": false, "id": "w1-d1-t4" },
        { "text": "Nhận diện Danh từ và Đại từ trong câu", "completed": false, "id": "w1-d1-t2" },
      ]
    },
    {
      "id": "w1-d2",
      "title": "Ngày 2: Tính từ (Adjectives)",
      "focus": "Hiểu rõ Tính từ bổ nghĩa cho cái gì.",
      "tasks": [
        { "text": "Lý thuyết Tính từ", "type": "theory", "completed": false, "id": "w1-d2-t1" },
        { "text": "Nạp dữ liệu từ vựng chủ đề (Office Procedures)","type": "vocab",  "completed": false, "id": "w1-d2-t2" },
        { "text": "Vị trí 'Kiếm tiền' của tính từ", "completed": false, "id": "w1-d2-t3" },
        { "text": "Hậu tố Tính từ", "completed": false, "id": "w1-d2-t5" },
        { "text": "Thực chiến Part 5 (Tính từ)", "completed": false, "id": "w1-d2-t4" },
      ]
    },
    {
      "id": "w1-d3",
      "title": "Ngày 3: Trạng từ (Adverbs)",
      "focus": "Hiểu rõ Trạng từ bổ nghĩa cho động từ, tính từ hay trạng từ khác.",
      "tasks": [
        { "text": "Lý thuyết Trạng từ ", "type": "theory", "completed": false, "id": "w1-d3-t1" },
        { "text": "Nạp dữ liệu từ vựng chủ đề (Personnel & Recruitment)","type": "vocab",  "completed": false, "id": "w1-d3-t2" },
        { "text": "Nhận diện Trạng từ trong câu", "completed": false, "id": "w1-d3-t3" },
        { "text": "Thực chiến Part 5 (Trạng từ)", "completed": false, "id": "w1-d3-t4" }
      ]
    },
    {
      "id": "w1-d4",
      "title": "Ngày 4: Động từ (Verbs) & Cấu trúc câu (S + V + O)",
      "focus": "Nắm vững cách sử dụng Động từ và nhận diện cấu trúc câu cơ bản.",
      "tasks": [
        { "text": "Lý thuyết Động từ và Cấu trúc câu","type": "theory", "completed": false, "id": "w1-d4-t1" },
        { "text": "Nạp dữ liệu từ vựng chủ đề (Salaries & Benefits)","type": "vocab",  "completed": false, "id": "w1-d4-t2" },
        { "text": "Xác định Động từ trong câu", "completed": false, "id": "w1-d4-t3" },
        { "text": "Phân tích câu", "completed": false, "id": "w1-d4-t4" },
        { "text": "Thực chiến Part 5 (Động từ) và cấu trúc câu", "completed": false, "id": "w1-d4-t5" }
      ]
    },
    {
      "id": "w1-d5",
      "title": "Sự hòa hợp Chủ ngữ - Động từ (Subject-Verb Agreement).",
      "focus": "Quy tắc làm cho Chủ ngữ và Động từ ăn khớp với nhau.",
      "tasks": [
        { "text": "Lý thuyết Sự hòa hợp Chủ ngữ - Động từ","type": "theory", "completed": false, "id": "w1-d5-t1" },
        { "text": "Nạp dữ liệu từ vựng chủ đề (Marketing)","type": "vocab", "completed": false, "id": "w1-d5-t2" },
        { "text": "Nhận diện Sự hòa hợp Chủ ngữ - Động từ trong câu", "completed": false, "id": "w1-d5-t3" },
        { "text": "Thực chiến Part 5 (Sự hòa hợp Chủ ngữ - Động từ)", "completed": false, "id": "w1-d5-t4" }
      ]
    },
    {
      "id": "w1-d6",
      "title": "Ngày 6: Scanning & Skimming (Làm quen Part 7).",
      "focus": " Luyện kỹ năng đọc nhanh để tìm thông tin chính xác trong bài đọc.",
      "tasks": [
        ///////// Giao review từ vựng tuần qua
        { "text": "Hiểu rõ sự khác biệt giữa Skimming và Scanning.", "type": "theory", "completed": false, "id": "w1-d6-t1" },
        { "text": "Nạp dữ liệu từ vựng chủ đề (Shopping)", "type": "vocab", "completed": false, "id": "w1-d6-t2" },
        ////// Giao diện thực chiến part 7
        { "text": "Thực chiến Part 7 - Dạng Advertisements & Announcements", "completed": false, "id": "w1-d6-t3" },
      ]
    },
    {
      "id": "w1-d7",
      "title": "Ngày 7: Review & Mini-Test (Kiểm tra & Chữa lỗi)",
      "focus": "  Ôn tập kiến thức đã học trong tuần và làm đề thi thử rút gọn.",
      "tasks": [
        { "text": "Part 5", "completed": false, "id": "w1-d7-t1" },
        { "text": "Part 7 (đoạn văn ngắn", "completed": false, "id": "w1-d7-t2" },
        { "text": "Kiểm tra từ vựng tuần qua  ", "completed": false, "id": "w1-d7-t3" },
      ]
    }
  ]
},
{
  week: 2,
  "name": "Tuần 2: test tuần 2",
  "description": "Nắm chắc ngữ pháp cơ bản, giải quyết Part 5 trong tối đa 20 giây/câu.",
  "days": [
    {
      "id": "w2-d1",
      "title": "Ngày 1: Danh từ (Nouns) & Đại từ (Pronouns)",
      "focus": "Nhận diện vị trí và chức năng của Danh từ.",
      "tasks": [
        { "text": "Lý thuyết Danh từ và Đại từ", "type": "theory", "completed": false, "id": "w1-d1-t1" },
        { "text": "Học thuộc 25 từ vựng (chú ý động từ bất quy tắc)", "completed": false, "id": "w1-d1-t3", "type": "vocab", "maxProgress": 5 },
        { "text": "Thực chiến Part 5 (Danh từ & Đại từ)", "completed": false, "id": "w1-d1-t4" },
        { "text": "Nhận diện Danh từ và Đại từ trong câu", "completed": false, "id": "w1-d1-t2" },
      ]
    },
  ]
},

  // ... Thêm các tuần khác
];
const normalizeTasks = (weeks) =>
  weeks.map((week) => ({
    ...week,
    days: week.days.map((day) => ({
      ...day,
      tasks: day.tasks.map((task) => {
        const type = task.type ?? "quiz";
        const tag = task.tag ?? (type === "vocab" ? "Từ vựng" : "Trắc nghiệm");
        return { ...task, type, tag };
      }),
    })),
  }));

export const detailedRoadmap = normalizeTasks(rawRoadmap);


export const chartData = [
  { name: "Start", target: 300, current: 300, label: "Mất gốc" },
  { name: "Tuần 1", target: 350, current: 360, label: "Grammar nền" },
  { name: "Tuần 2", target: 420, current: null, label: "Part 5 ổn định" },
  { name: "Tuần 3", target: 480, current: null, label: "Part 5 + 6" },
  { name: "Tuần 4", target: 540, current: null, label: "Đọc đơn" },
  { name: "Tuần 5", target: 600, current: null, label: "Reading tăng tốc" },
  { name: "Tuần 6", target: 660, current: null, label: "Luyện đề" },
  { name: "Tuần 7", target: 700, current: null, label: "Ổn định tâm lý" },
  { name: "Exam", target: 720, current: null, label: "Thi thật" },
];

