export const DEFAULT_QUESTIONS = [
  {
    id: 1,
    sentence: "She ____ to work by bus every day.",
    options: ["go", "goes", "is going", "has gone"],
    answer: "goes",
    explanation:
      "Hien tai don dien ta thoi quen hang ngay. Chu ngu so it (She) dung dong tu them -s/-es.",
  },
  {
    id: 2,
    sentence: "They ____ dinner right now.",
    options: ["cook", "are cooking", "have cooked", "cooked"],
    answer: "are cooking",
    explanation:
      "Hien tai tiep dien dung de noi hanh dong dang dien ra tai thoi diem noi (right now).",
  },
  {
    id: 3,
    sentence: "I ____ this book before.",
    options: ["read", "am reading", "have read", "reads"],
    answer: "have read",
    explanation:
      "Hien tai hoan thanh dien ta kinh nghiem da xay ra trong qua khu, khong neu thoi gian cu the.",
  },
  {
    id: 4,
    sentence: "The sun ____ in the east.",
    options: ["rise", "rises", "is rising", "has risen"],
    answer: "rises",
    explanation:
      "Hien tai don dien ta su that hien nhien. Chu ngu so it (The sun) dung rises.",
  },
  {
    id: 5,
    sentence: "We ____ for the train at the moment.",
    options: ["wait", "are waiting", "have waited", "waited"],
    answer: "are waiting",
    explanation:
      "At the moment la dau hieu cua hien tai tiep dien.",
  },
  {
    id: 6,
    sentence: "He ____ in this city since 2020.",
    options: ["lives", "is living", "has lived", "lived"],
    answer: "has lived",
    explanation:
      "Since + moc thoi gian dung voi hien tai hoan thanh de noi hanh dong keo dai den hien tai.",
  },
  {
    id: 7,
    sentence: "My brother usually ____ coffee in the morning.",
    options: ["drink", "drinks", "is drinking", "has drunk"],
    answer: "drinks",
    explanation:
      "Usually la trang tu chi tan suat -> hien tai don. Chu ngu so it dung drinks.",
  },
  {
    id: 8,
    sentence: "Look! The kids ____ in the yard.",
    options: ["play", "are playing", "have played", "played"],
    answer: "are playing",
    explanation:
      "Look! la dau hieu cho hanh dong dang dien ra -> hien tai tiep dien.",
  },
  {
    id: 9,
    sentence: "She ____ already ____ her homework.",
    options: ["has / finished", "is / finishing", "finishes", "finished"],
    answer: "has / finished",
    explanation:
      "Already thuong di voi hien tai hoan thanh de noi hanh dong vua/da hoan tat.",
  },
  {
    id: 10,
    sentence: "I ____ English every weekend.",
    options: ["study", "studies", "am studying", "have studied"],
    answer: "study",
    explanation:
      "Every weekend la dau hieu cua hien tai don. Chu ngu I dung study.",
  },
];

export const DEFAULT_HARD_QUESTIONS = [
  {
    id: 1,
    sentence: "The report, along with the attachments, ____ due by noon.",
    options: ["are", "is", "were", "have been"],
    answer: "is",
    explanation:
      "Subject-verb agreement: 'The report' is the main subject; the phrase in between does not affect the verb.",
  },
  {
    id: 2,
    sentence: "Neither the manager nor the assistants ____ aware of the change.",
    options: ["is", "are", "was", "has been"],
    answer: "are",
    explanation:
      "With 'neither...nor', the verb agrees with the nearest subject (assistants - plural).",
  },
  {
    id: 3,
    sentence: "Had he ____ earlier, he would have caught the train.",
    options: ["leave", "left", "leaving", "to leave"],
    answer: "left",
    explanation:
      "Inverted third conditional uses past perfect: Had + subject + V3.",
  },
  {
    id: 4,
    sentence: "The contract requires that each employee ____ the policy.",
    options: ["signs", "sign", "signed", "to sign"],
    answer: "sign",
    explanation:
      "Subjunctive form: base verb after verbs like 'require'.",
  },
  {
    id: 5,
    sentence: "The committee decided that the proposal ____ revised immediately.",
    options: ["be", "is", "was", "being"],
    answer: "be",
    explanation:
      "Subjunctive after 'decided that': base verb.",
  },
  {
    id: 6,
    sentence: "By the time we arrived, the presentation ____ for ten minutes.",
    options: ["has started", "had started", "had been going", "was starting"],
    answer: "had been going",
    explanation:
      "Past perfect continuous shows an action that began earlier and continued up to a past time.",
  },
  {
    id: 7,
    sentence: "The data ____ to the cloud every night at midnight.",
    options: ["are backed up", "is backed up", "was backing up", "backing up"],
    answer: "is backed up",
    explanation:
      "'Data' is treated as singular in business contexts; passive voice present simple.",
  },
  {
    id: 8,
    sentence: "No sooner ____ the meeting started than the power went out.",
    options: ["had", "has", "did", "was"],
    answer: "had",
    explanation:
      "Inversion with 'No sooner' uses past perfect: No sooner had + subject + V3.",
  },
  {
    id: 9,
    sentence: "The new regulations are intended to prevent employees ____ confidential data.",
    options: ["share", "to share", "from sharing", "sharing to"],
    answer: "from sharing",
    explanation:
      "Verb pattern: prevent someone from doing something.",
  },
  {
    id: 10,
    sentence: "The CEO, as well as her advisors, ____ attending the conference.",
    options: ["are", "is", "were", "have been"],
    answer: "is",
    explanation:
      "'As well as' is not a conjunction; the verb agrees with the subject 'CEO'.",
  },
];

const NOUN_PRON_EASY = [
  { id: 101, sentence: "____ is my best friend.", options: ["Him", "He", "His", "Himself"], answer: "He", explanation: "Dai tu nhan xung 'He' lam chu ngu.", topic: "Pronouns" },
  { id: 102, sentence: "I need some ____ for the meeting.", options: ["information", "informations", "inform", "informative"], answer: "information", explanation: "Information la danh tu khong dem duoc.", topic: "Nouns" },
  { id: 103, sentence: "This is ____ new laptop.", options: ["I", "me", "my", "mine"], answer: "my", explanation: "Tinh tu so huu dung truoc danh tu.", topic: "Pronouns" },
  { id: 104, sentence: "There are many ____ in the office.", options: ["employee", "employees", "employ", "employed"], answer: "employees", explanation: "Danh tu dem duoc so nhieu.", topic: "Nouns" },
  { id: 105, sentence: "The company changed ____ policy.", options: ["it", "its", "it's", "itself"], answer: "its", explanation: "Tinh tu so huu cua 'it'.", topic: "Pronouns" },
  { id: 106, sentence: "I saw ____ at the meeting.", options: ["she", "her", "hers", "herself"], answer: "her", explanation: "Dai tu tan ngu sau dong tu.", topic: "Pronouns" },
  { id: 107, sentence: "This desk is ____.", options: ["my", "mine", "me", "I"], answer: "mine", explanation: "Dai tu so huu dung doc lap.", topic: "Pronouns" },
  { id: 108, sentence: "We need two ____ of paper.", options: ["piece", "pieces", "pieced", "piecings"], answer: "pieces", explanation: "Danh tu dem duoc so nhieu.", topic: "Nouns" },
  { id: 109, sentence: "The ____ is closed today.", options: ["office", "offices", "official", "office's"], answer: "office", explanation: "Danh tu so it phu hop chu ngu.", topic: "Nouns" },
  { id: 110, sentence: "The decision was made by ____.", options: ["they", "them", "their", "themselves"], answer: "them", explanation: "Dai tu tan ngu sau gioi tu.", topic: "Pronouns" },
  { id: 201, sentence: "____ are planning the project now.", options: ["Them", "They", "Their", "Theirs"], answer: "They", explanation: "Subject pronoun làm chủ ngữ.", topic: "Pronouns" },

  { id: 202, sentence: "Please send the email to ____.", options: ["we", "our", "us", "ours"], answer: "us", explanation: "Object pronoun sau giới từ.", topic: "Pronouns" },

  { id: 203, sentence: "This report is ____ responsibility.", options: ["you", "your", "yours", "yourself"], answer: "your", explanation: "Possessive adjective đứng trước noun.", topic: "Pronouns" },

  { id: 204, sentence: "That car is ____.", options: ["their", "theirs", "them", "they"], answer: "theirs", explanation: "Possessive pronoun đứng độc lập.", topic: "Pronouns" },

  { id: 205, sentence: "She prepared the presentation by ____.", options: ["she", "her", "hers", "herself"], answer: "herself", explanation: "Reflexive pronoun.", topic: "Pronouns" },

  { id: 206, sentence: "There isn't much ____ left.", options: ["chairs", "tables", "water", "documents"], answer: "water", explanation: "Water là danh từ không đếm được.", topic: "Nouns" },

  { id: 207, sentence: "The company hired three new ____.", options: ["staff", "staffs", "staff members", "staffing"], answer: "staff members", explanation: "Staff thường không đếm được → dùng members.", topic: "Nouns" },

  { id: 208, sentence: "I need a piece of ____.", options: ["advices", "advice", "advise", "advising"], answer: "advice", explanation: "Advice là danh từ không đếm được.", topic: "Nouns" },

  { id: 209, sentence: "Each of the ____ has a locker.", options: ["employee", "employees", "employ", "employment"], answer: "employees", explanation: "Each of + plural noun.", topic: "Nouns" },

  { id: 210, sentence: "Can you give this file to ____?", options: ["he", "him", "his", "himself"], answer: "him", explanation: "Object pronoun sau giới từ.", topic: "Pronouns" },

  { id: 211, sentence: "The manager introduced ____ to the new team.", options: ["he", "him", "his", "himself"], answer: "himself", explanation: "Reflexive pronoun khi chủ ngữ tự làm.", topic: "Pronouns" },

  { id: 212, sentence: "We bought some new ____ for the office.", options: ["equipments", "equipment", "equip", "equipping"], answer: "equipment", explanation: "Equipment là danh từ không đếm được.", topic: "Nouns" },

  { id: 213, sentence: "Those documents are ____.", options: ["our", "ours", "us", "we"], answer: "ours", explanation: "Possessive pronoun.", topic: "Pronouns" },

  { id: 214, sentence: "The ____ of this building is modern.", options: ["design", "designs", "designer", "designing"], answer: "design", explanation: "Danh từ phù hợp nghĩa câu.", topic: "Nouns" },

  { id: 215, sentence: "My parents sent a gift to ____.", options: ["I", "me", "my", "mine"], answer: "me", explanation: "Object pronoun.", topic: "Pronouns" },

  { id: 216, sentence: "There are several ____ in the waiting room.", options: ["person", "people", "peoples", "personnel"], answer: "people", explanation: "People là plural của person.", topic: "Nouns" },

  { id: 217, sentence: "Is this notebook ____?", options: ["you", "your", "yours", "yourself"], answer: "yours", explanation: "Possessive pronoun.", topic: "Pronouns" },

  { id: 218, sentence: "The company provides useful ____.", options: ["information", "informations", "inform", "informing"], answer: "information", explanation: "Danh từ không đếm được.", topic: "Nouns" },

  { id: 219, sentence: "We enjoyed ____ at the party.", options: ["our", "ourselves", "us", "we"], answer: "ourselves", explanation: "Reflexive pronoun.", topic: "Pronouns" },

  { id: 220, sentence: "The ____ of the product is excellent.", options: ["quality", "qualities", "qualify", "qualified"], answer: "quality", explanation: "Danh từ không đếm được trong nghĩa chung.", topic: "Nouns" },

  { id: 221, sentence: "She asked ____ to join the meeting.", options: ["they", "them", "their", "theirs"], answer: "them", explanation: "Object pronoun.", topic: "Pronouns" },

  { id: 222, sentence: "I bought two ____ of bread.", options: ["loaf", "loaves", "loafs", "loaving"], answer: "loaves", explanation: "Plural của loaf.", topic: "Nouns" },

  { id: 223, sentence: "This is not ____ fault.", options: ["me", "mine", "my", "I"], answer: "my", explanation: "Possessive adjective.", topic: "Pronouns" },

  { id: 224, sentence: "The ____ are working overtime.", options: ["team", "teams", "teamwork", "teaming"], answer: "teams", explanation: "Plural noun.", topic: "Nouns" },

  { id: 225, sentence: "He blamed ____ for the mistake.", options: ["him", "himself", "his", "he"], answer: "himself", explanation: "Reflexive pronoun.", topic: "Pronouns" },
];

const NOUN_PRON_HARD = [
  { id: 111, sentence: "Neither of the reports has ____ cover page.", options: ["their", "its", "it", "theirs"], answer: "its", explanation: "Neither so it -> its.", topic: "Pronouns" },
  { id: 112, sentence: "The CEO and ____ assistants arrived early.", options: ["his", "him", "he", "himself"], answer: "his", explanation: "Tinh tu so huu dung truoc danh tu.", topic: "Pronouns" },
  { id: 113, sentence: "A ____ of equipment was damaged.", options: ["piece", "pieces", "piecings", "piecely"], answer: "piece", explanation: "A piece of + N khong dem duoc.", topic: "Nouns" },
  { id: 114, sentence: "The board discussed the ____ of the contract.", options: ["renew", "renewal", "renewing", "renewed"], answer: "renewal", explanation: "Can danh tu sau 'the'.", topic: "Nouns" },
  { id: 115, sentence: "Everyone should submit ____ forms by Friday.", options: ["their", "his", "its", "her"], answer: "their", explanation: "Everyone dung their trong van noi hien dai.", topic: "Pronouns" },
  { id: 116, sentence: "The new ____ was announced yesterday.", options: ["policy", "policies", "politic", "political"], answer: "policy", explanation: "Danh tu so it phu hop chu ngu.", topic: "Nouns" },
  { id: 117, sentence: "The manager praised ____ for the results.", options: ["we", "us", "our", "ours"], answer: "us", explanation: "Tan ngu sau dong tu.", topic: "Pronouns" },
  { id: 118, sentence: "The report lacks proper ____.", options: ["analysis", "analyses", "analyze", "analytical"], answer: "analysis", explanation: "Danh tu khong dem duoc.", topic: "Nouns" },
  { id: 119, sentence: "The interns prepared the slides by ____.", options: ["they", "them", "their", "themselves"], answer: "themselves", explanation: "Dai tu phan than.", topic: "Pronouns" },
  { id: 120, sentence: "He has a lot of ____ to finish.", options: ["work", "works", "worked", "working"], answer: "work", explanation: "Work khi chi cong viec -> khong dem duoc.", topic: "Nouns" },
];


const PART5_PRO_NOUNS = [
  {
    "id": 1,
    "sentence": "Ms. Grier was surprised to learn that the CEO himself would be attending ____ presentation.",
    "options": ["she", "her", "hers", "herself"],
    "answer": "her",
    "explanation": "Cần một tính từ sở hữu đứng trước danh từ 'presentation' để chỉ sự sở hữu.",
    "topic": "Pronouns"
  },
  {
    "id": 2,
    "sentence": "The marketing team members are proud of the campaign that ____ designed for the new product.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "they",
    "explanation": "Cần một đại từ nhân xưng đóng vai trò chủ ngữ cho mệnh đề quan hệ rút gọn (they designed).",
    "topic": "Pronouns"
  },
  {
    "id": 3,
    "sentence": "Because the printer is broken, employees must fix it ____ or call a technician.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "themselves",
    "explanation": "Dùng đại từ phản thân 'themselves' để nhấn mạnh đối tượng tự thực hiện hành động (tự sửa).",
    "topic": "Pronouns"
  },
  {
    "id": 4,
    "sentence": "Any employee who has not yet submitted ____ travel expenses should do so by Friday.",
    "options": ["he", "him", "his", "himself"],
    "answer": "his",
    "explanation": "Cần một tính từ sở hữu đứng trước cụm danh từ 'travel expenses'. 'His' hoặc 'Her' đều được, ở đây dùng 'His'.",
    "topic": "Pronouns"
  },
  {
    "id": 5,
    "sentence": "Mr. Tanabe and Ms. Jones have different management styles, but ____ both achieve excellent results.",
    "options": ["we", "you", "they", "them"],
    "answer": "they",
    "explanation": "Dùng đại từ nhân xưng 'they' làm chủ ngữ thay thế cho hai người (Mr. Tanabe và Ms. Jones).",
    "topic": "Pronouns"
  },
  {
    "id": 6,
    "sentence": "Our company offers a better benefits package than ____ does.",
    "options": ["they", "them", "their", "theirs"],
    "answer": "theirs",
    "explanation": "Dùng đại từ sở hữu 'theirs' để thay thế cho cụm 'their company', tránh lặp từ.",
    "topic": "Pronouns"
  },
  {
    "id": 7,
    "sentence": "Please remind the candidates to bring copies of ____ resumes to the interview.",
    "options": ["they", "them", "their", "theirs"],
    "answer": "their",
    "explanation": "Cần một tính từ sở hữu đứng trước danh từ số nhiều 'resumes'.",
    "topic": "Pronouns"
  },
  {
    "id": 8,
    "sentence": "The manager asked me to give the document to ____ as soon as I finish the report.",
    "options": ["he", "him", "his", "himself"],
    "answer": "him",
    "explanation": "Cần một đại từ đóng vai trò tân ngữ (Object) sau giới từ 'to'.",
    "topic": "Pronouns"
  },
  {
    "id": 9,
    "sentence": "The software update will install ____ automatically once the download is complete.",
    "options": ["it", "its", "itself", "they"],
    "answer": "itself",
    "explanation": "Dùng đại từ phản thân 'itself' để chỉ bản thân phần mềm tự cài đặt.",
    "topic": "Pronouns"
  },
  {
    "id": 10,
    "sentence": "If your laptop is not working, you may borrow ____ for the afternoon.",
    "options": ["I", "me", "my", "mine"],
    "answer": "mine",
    "explanation": "Dùng đại từ sở hữu 'mine' để thay thế cho cụm 'my laptop'.",
    "topic": "Pronouns"
  },
  {
    "id": 11,
    "sentence": "The security guard requested that all visitors identify _______ at the front desk.",
    "options": ["them", "their", "theirs", "themselves"],
    "answer": "themselves",
    "explanation": "Dùng đại từ phản thân 'themselves' làm tân ngữ khi đối tượng thực hiện hành động (visitors) và đối tượng nhận hành động là một.",
    "topic": "Pronouns"
  },
  {
    "id": 12,
    "sentence": "The quality of these handmade rugs is much higher than _______ produced in factories.",
    "options": ["that", "those", "this", "these"],
    "answer": "those",
    "explanation": "Dùng đại từ chỉ định 'those' để thay thế cho danh từ số nhiều 'rugs' đã nhắc đến trước đó nhằm tránh lặp từ.",
    "topic": "Pronouns"
  },
  {
    "id": 13,
    "sentence": "Mr. Harrison’s assistant will handle all correspondence while _______ is away on business.",
    "options": ["he", "him", "his", "himself"],
    "answer": "he",
    "explanation": "Cần một đại từ nhân xưng làm chủ ngữ cho mệnh đề phụ 'while ____ is away'.",
    "topic": "Pronouns"
  },
  {
    "id": 14,
    "sentence": "Before selecting a health insurance plan, employees should compare several of _______.",
    "options": ["they", "them", "their", "theirs"],
    "answer": "them",
    "explanation": "Dùng đại từ tân ngữ 'them' sau giới từ 'of' để thay thế cho 'health insurance plans'.",
    "topic": "Pronouns"
  },
  {
    "id": 15,
    "sentence": "The new software allows users to customize the interface to suit _______ preferences.",
    "options": ["they", "them", "their", "theirs"],
    "answer": "their",
    "explanation": "Cần một tính từ sở hữu đứng trước danh từ 'preferences'.",
    "topic": "Pronouns"
  },
  {
    "id": 16,
    "sentence": "One of the interns has left _______ briefcase in the conference room.",
    "options": ["him", "his", "he", "himself"],
    "answer": "his",
    "explanation": "Cần tính từ sở hữu để bổ nghĩa cho danh từ 'briefcase'. 'One of the interns' là số ít.",
    "topic": "Pronouns"
  },
  {
    "id": 17,
    "sentence": "The CEO likes to visit the local branches and speak with the employees _______.",
    "options": ["him", "his", "he", "himself"],
    "answer": "himself",
    "explanation": "Sử dụng đại từ phản thân 'himself' để nhấn mạnh rằng đích thân CEO thực hiện hành động.",
    "topic": "Pronouns"
  },
  {
    "id": 18,
    "sentence": "Most of the clients expressed satisfaction with the services provided to _______.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "them",
    "explanation": "Cần đại từ làm tân ngữ đứng sau giới từ 'to'.",
    "topic": "Pronouns"
  },
  {
    "id": 19,
    "sentence": "Our marketing strategy is more aggressive than _______ of our competitors.",
    "options": ["that", "those", "this", "these"],
    "answer": "that",
    "explanation": "Dùng 'that' để thay thế cho danh từ số ít 'strategy' nhằm tránh lặp lại.",
    "topic": "Pronouns"
  },
  {
    "id": 20,
    "sentence": "We hope that the new policy will benefit _______ involved in the project.",
    "options": ["everyone", "everywhere", "everything", "every"],
    "answer": "everyone",
    "explanation": "Cần một đại từ bất định chỉ người làm tân ngữ cho động từ 'benefit'.",
    "topic": "Pronouns"
  },
  {
    "id": 21,
    "sentence": "The technicians fixed the server issue by _______ before the office opened.",
    "options": ["them", "their", "theirs", "themselves"],
    "answer": "themselves",
    "explanation": "Cấu trúc 'by + đại từ phản thân' (by themselves) có nghĩa là 'tự thân họ làm', không có sự trợ giúp.",
    "topic": "Pronouns"
  },
  {
    "id": 22,
    "sentence": "We are looking for a candidate _______ communication skills are exceptional.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "whose",
    "explanation": "Dùng đại từ quan hệ 'whose' để chỉ sự sở hữu cho danh từ 'communication skills' (người mà có kỹ năng giao tiếp...).",
    "topic": "Pronouns"
  },
  {
    "id": 23,
    "sentence": "If the blue folder is not yours, then it must be _______.",
    "options": ["she", "her", "hers", "herself"],
    "answer": "hers",
    "explanation": "Dùng đại từ sở hữu 'hers' để thay thế cho cụm 'her folder', đóng vai trò bổ ngữ sau động từ tobe.",
    "topic": "Pronouns"
  },
  {
    "id": 24,
    "sentence": "The committee members should introduce _______ to the guest speaker.",
    "options": ["them", "their", "theirs", "themselves"],
    "answer": "themselves",
    "explanation": "Chủ ngữ là 'members' và họ thực hiện hành động tự giới thiệu chính họ, nên dùng đại từ phản thân.",
    "topic": "Pronouns"
  },
  {
    "id": 25,
    "sentence": "The sales figures for this quarter are much better than _______ of the previous one.",
    "options": ["that", "those", "this", "these"],
    "answer": "those",
    "explanation": "Dùng 'those' để thay thế cho danh từ số nhiều 'sales figures' nhằm tránh lặp lại.",
    "topic": "Pronouns"
  },
  {
    "id": 26,
    "sentence": "The manager is not sure _______ of the two candidates is better suited for the role.",
    "options": ["who", "which", "whom", "whose"],
    "answer": "which",
    "explanation": "Khi có sự lựa chọn giữa một số lượng đối tượng giới hạn (ở đây là 2), ta dùng 'which' để hỏi/chỉ đối tượng cụ thể.",
    "topic": "Pronouns"
  },
  {
    "id": 27,
    "sentence": "Any employee _______ wishes to join the workshop must register by noon.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "who",
    "explanation": "Đại từ quan hệ 'who' làm chủ ngữ thay thế cho người (Any employee) trong mệnh đề quan hệ.",
    "topic": "Pronouns"
  },
  {
    "id": 28,
    "sentence": "The instructions on the box are so unclear that I cannot understand _______.",
    "options": ["it", "its", "them", "theirs"],
    "answer": "them",
    "explanation": "Tân ngữ 'them' thay thế cho danh từ số nhiều 'instructions' đã nhắc tới phía trước.",
    "topic": "Pronouns"
  },
  {
    "id": 29,
    "sentence": "Ms. Lawson handles most of the client accounts _______ because her assistant is on leave.",
    "options": ["she", "her", "hers", "herself"],
    "answer": "herself",
    "explanation": "Dùng đại từ phản thân ở cuối mệnh đề để nhấn mạnh chính chủ thể (Ms. Lawson) là người thực hiện hành động.",
    "topic": "Pronouns"
  },
  {
    "id": 30,
    "sentence": "While the project is difficult, _______ completion will bring great prestige to the firm.",
    "options": ["it", "its", "it's", "itself"],
    "answer": "its",
    "explanation": "Cần tính từ sở hữu 'its' (của nó) đứng trước danh từ 'completion'. Lưu ý 'it's' là viết tắt của 'it is'.",
    "topic": "Pronouns"
  },
  {
    "id": 31,
    "sentence": "If this printer is currently in use, please try _______ one down the hall.",
    "options": ["other", "another", "others", "the others"],
    "answer": "another",
    "explanation": "Dùng 'another' (một cái khác) trước danh từ số ít đếm được (one). 'Other' thường đi với danh từ số nhiều hoặc không đếm được.",
    "topic": "Pronouns"
  },
  {
    "id": 32,
    "sentence": "The marketing and sales departments must cooperate with _______ to achieve the quarterly targets.",
    "options": ["each other", "one", "another", "other"],
    "answer": "each other",
    "explanation": "Dùng 'each other' (nhau) để chỉ sự tương tác qua lại giữa hai đối tượng hoặc hai nhóm.",
    "topic": "Pronouns"
  },
  {
    "id": 33,
    "sentence": "Some board members supported the merger, while _______ strongly opposed it.",
    "options": ["other", "others", "another", "the other"],
    "answer": "others",
    "explanation": "Dùng 'others' (những người khác) làm chủ ngữ, thay thế cho 'other board members'. Không dùng 'other' vì thiếu danh từ phía sau.",
    "topic": "Pronouns"
  },
  {
    "id": 34,
    "sentence": "Only _______ with a valid security badge are allowed to enter the server room.",
    "options": ["that", "this", "those", "them"],
    "answer": "those",
    "explanation": "Dùng 'those' với nghĩa là 'những người' (those people) khi đi kèm với mệnh đề quan hệ rút gọn hoặc cụm giới từ.",
    "topic": "Pronouns"
  },
  {
    "id": 35,
    "sentence": "Please review the attached contract and sign _______ at the bottom of the last page.",
    "options": ["it", "its", "them", "they"],
    "answer": "it",
    "explanation": "Cần đại từ tân ngữ thay thế cho danh từ số ít 'contract'.",
    "topic": "Pronouns"
  },
  {
    "id": 36,
    "sentence": "Although the laptop is expensive, _______ features make it worth the price.",
    "options": ["it", "its", "it's", "itself"],
    "answer": "its",
    "explanation": "Cần tính từ sở hữu 'its' (của nó) đứng trước danh từ 'features'.",
    "topic": "Pronouns"
  },
  {
    "id": 37,
    "sentence": "_______ is important to double-check all data before generating the final report.",
    "options": ["It", "There", "That", "This"],
    "answer": "It",
    "explanation": "Cấu trúc chủ ngữ giả: 'It is + tính từ + to V' (Thật là... để làm gì đó).",
    "topic": "Pronouns"
  },
  {
    "id": 38,
    "sentence": "Ms. Johnson, _______ has been with the company for ten years, was promoted yesterday.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "who",
    "explanation": "Dùng đại từ quan hệ 'who' làm chủ ngữ thay thế cho người (Ms. Johnson) trong mệnh đề quan hệ không xác định.",
    "topic": "Pronouns"
  },
  {
    "id": 39,
    "sentence": "Neither of the candidates was suitable, so we have to interview _______.",
    "options": ["other", "others", "another", "each other"],
    "answer": "others",
    "explanation": "Cần một đại từ đóng vai trò tân ngữ. 'Others' ở đây thay thế cho 'other candidates'.",
    "topic": "Pronouns"
  },
  {
    "id": 40,
    "sentence": "My proposal was accepted, but _______ was rejected by the committee.",
    "options": ["she", "her", "hers", "herself"],
    "answer": "hers",
    "explanation": "Dùng đại từ sở hữu 'hers' làm chủ ngữ, thay thế cho cụm 'her proposal'.",
    "topic": "Pronouns"
  },
  {
    "id": 41,
    "sentence": "The extensive report covers _______ was discussed during the quarterly board meeting.",
    "options": ["that", "which", "what", "it"],
    "answer": "what",
    "explanation": "Cần một đại từ làm chủ ngữ cho mệnh đề danh ngữ '... was discussed'. 'What' = 'the thing that'.",
    "topic": "Pronouns"
  },
  {
    "id": 42,
    "sentence": "_______ of the employees who attended the training session found it beneficial.",
    "options": ["Almost", "Most", "The most", "Mostly"],
    "answer": "Most",
    "explanation": "'Most' đóng vai trò đại từ (Most of + N). 'Almost' là trạng từ, không đi trực tiếp với danh từ/giới từ.",
    "topic": "Pronouns"
  },
  {
    "id": 43,
    "sentence": "Mr. Lee is the architect _______ design won the competition for the new city library.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "whose",
    "explanation": "Dùng 'whose' để chỉ sự sở hữu cho danh từ 'design' (người kiến trúc sư mà thiết kế của ông ấy...).",
    "topic": "Pronouns"
  },
  {
    "id": 44,
    "sentence": "If you have any questions regarding the new policy, please direct _______ to the HR manager.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "them",
    "explanation": "Cần đại từ tân ngữ 'them' thay thế cho 'questions' (số nhiều) sau động từ 'direct'.",
    "topic": "Pronouns"
  },
  {
    "id": 45,
    "sentence": "_______ who wishes to participate in the seminar must register online by Friday.",
    "options": ["Anyone", "Someone", "Everyone", "No one"],
    "answer": "Anyone",
    "explanation": "Dùng 'Anyone' (bất cứ ai) kết hợp với mệnh đề quan hệ 'who wishes...' để chỉ đối tượng không xác định cụ thể.",
    "topic": "Pronouns"
  },
  {
    "id": 46,
    "sentence": "The two companies agreed to share resources and help _______ during the busy season.",
    "options": ["one another", "each other", "the other", "others"],
    "answer": "each other",
    "explanation": "Dùng 'each other' (lẫn nhau) khi nói về sự tương tác giữa hai đối tượng/nhóm.",
    "topic": "Pronouns"
  },
  {
    "id": 47,
    "sentence": "The final decision is not _______ to make, but rather the board of directors'.",
    "options": ["my", "mine", "me", "I"],
    "answer": "mine",
    "explanation": "Dùng đại từ sở hữu 'mine' (của tôi) làm bổ ngữ, thay thế cho cụm 'my decision'.",
    "topic": "Pronouns"
  },
  {
    "id": 48,
    "sentence": "_______ appears that the negotiation will continue for another week.",
    "options": ["This", "That", "It", "There"],
    "answer": "It",
    "explanation": "Chủ ngữ giả 'It' trong cấu trúc 'It appears that...' (Có vẻ như là...).",
    "topic": "Pronouns"
  },
  {
    "id": 49,
    "sentence": "Please provide the names of _______ responsible for organizing the event.",
    "options": ["that", "this", "those", "these"],
    "answer": "those",
    "explanation": "Dùng 'those' (những người) đi kèm với tính từ 'responsible' (rút gọn của 'those who are responsible').",
    "topic": "Pronouns"
  },
  {
    "id": 50,
    "sentence": "Neither the manager nor the assistant could find _______ keys to the office.",
    "options": ["he", "him", "his", "himself"],
    "answer": "his",
    "explanation": "Cần tính từ sở hữu 'his' trước danh từ 'keys'. (Lưu ý: Trong văn phạm truyền thống dùng 'his', hiện đại có thể dùng 'their').",
    "topic": "Pronouns"
  },
  {
    "id": 51,
    "sentence": "The manual makes _______ clear that safety gear must be worn at all times.",
    "options": ["it", "that", "this", "them"],
    "answer": "it",
    "explanation": "Cấu trúc 'Make it + adj + that/to V' (Làm cho điều gì đó trở nên rõ ràng...). 'It' ở đây là tân ngữ giả thay thế cho mệnh đề phía sau.",
    "topic": "Pronouns"
  },
  {
    "id": 52,
    "sentence": "_______ wants to join the planning committee should sign up by Friday.",
    "options": ["Who", "Whoever", "Whomever", "Whose"],
    "answer": "Whoever",
    "explanation": "'Whoever' (bất cứ ai) làm chủ ngữ cho mệnh đề danh ngữ 'Whoever wants...'. Mệnh đề này đóng vai trò chủ ngữ chính của cả câu.",
    "topic": "Pronouns"
  },
  {
    "id": 53,
    "sentence": "The two divisions have often collaborated with _______ on large-scale projects.",
    "options": ["one another", "the other", "others", "another"],
    "answer": "one another",
    "explanation": "Tương tự 'each other', 'one another' dùng để chỉ sự tương tác qua lại giữa nhiều đối tượng (thường là 3 trở lên, nhưng trong TOEIC hiện đại có thể dùng thay thế cho each other).",
    "topic": "Pronouns"
  },
  {
    "id": 54,
    "sentence": "Customers should retain their receipts in case _______ wish to return a defective item.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "they",
    "explanation": "Cần đại từ chủ ngữ 'they' thay thế cho 'Customers' trong mệnh đề trạng ngữ 'in case...'.",
    "topic": "Pronouns"
  },
  {
    "id": 55,
    "sentence": "The library has many books, but the most valuable _______ are kept in a secure room.",
    "options": ["one", "ones", "once", "on"],
    "answer": "ones",
    "explanation": "Dùng 'ones' để thay thế cho danh từ số nhiều 'books' đã nhắc trước đó.",
    "topic": "Pronouns"
  },
  {
    "id": 56,
    "sentence": "Of all the designs submitted, _______ was selected for the final round.",
    "options": ["none", "no", "not", "nothing"],
    "answer": "none",
    "explanation": "Dùng 'none' (không cái nào) làm đại từ chủ ngữ. 'No' là tính từ (phải đi kèm danh từ).",
    "topic": "Pronouns"
  },
  {
    "id": 57,
    "sentence": "We need to hire an assistant _______ main responsibility will be managing the schedule.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "whose",
    "explanation": "Dùng 'whose' để chỉ sở hữu (trợ lý mà trách nhiệm chính của người đó là...).",
    "topic": "Pronouns"
  },
  {
    "id": 58,
    "sentence": "_______ of the two options seems suitable for our current budget.",
    "options": ["Neither", "Either", "Both", "All"],
    "answer": "Neither",
    "explanation": "Động từ 'seems' chia số ít -> Chọn 'Neither' (không cái nào trong 2 cái). 'Both' (cả hai) đi với động từ số nhiều.",
    "topic": "Pronouns"
  },
  {
    "id": 59,
    "sentence": "The technician found the problem and fixed _______ within an hour.",
    "options": ["it", "its", "them", "theirs"],
    "answer": "it",
    "explanation": "Cần tân ngữ số ít thay thế cho 'the problem'.",
    "topic": "Pronouns"
  },
  {
    "id": 60,
    "sentence": "The director decided to handle the negotiations _______ rather than hiring a consultant.",
    "options": ["him", "his", "he", "himself"],
    "answer": "himself",
    "explanation": "Dùng đại từ phản thân để nhấn mạnh chủ thể tự làm (contrast với việc thuê người khác).",
    "topic": "Pronouns"
  },
  {
    "id": 61,
    "sentence": "Every _______ is expected to complete the compliance training by the end of the month.",
    "options": ["employ", "employee", "employees", "employed"],
    "answer": "employee",
    "explanation": "Sau lượng từ 'Every' (mỗi) luôn là danh từ đếm được số ít.",
    "topic": "Nouns/Pronouns"
  },
  {
    "id": 62,
    "sentence": "Ms. Sato insisted on finishing the proposal on _______ own without any assistance.",
    "options": ["she", "her", "hers", "herself"],
    "answer": "her",
    "explanation": "Cấu trúc 'on + one's + own' = 'by oneself' (tự mình làm). Cần tính từ sở hữu 'her'.",
    "topic": "Pronouns"
  },
  {
    "id": 63,
    "sentence": "The client to _______ we sent the contract has not replied yet.",
    "options": ["who", "whom", "which", "whose"],
    "answer": "whom",
    "explanation": "Khi đại từ quan hệ chỉ người đứng sau giới từ (to), bắt buộc dùng 'whom', không dùng 'who'.",
    "topic": "Pronouns"
  },
  {
    "id": 64,
    "sentence": "We have only _______ time left before the presentation starts.",
    "options": ["a few", "a little", "many", "few"],
    "answer": "a little",
    "explanation": "Danh từ 'time' (thời gian) là không đếm được, nên dùng 'a little'. 'A few/Many' dùng cho danh từ đếm được.",
    "topic": "Pronouns/Quantifiers"
  },
  {
    "id": 65,
    "sentence": "The population of the city is much larger than _______ of the surrounding towns.",
    "options": ["this", "that", "these", "those"],
    "answer": "that",
    "explanation": "Dùng 'that' để thay thế cho danh từ số ít 'population' phía trước. Cấu trúc so sánh: 'that of'.",
    "topic": "Pronouns"
  },
  {
    "id": 66,
    "sentence": "_______ is more important to our company than customer satisfaction.",
    "options": ["Nothing", "None", "No one", "Anything"],
    "answer": "Nothing",
    "explanation": "Dùng đại từ bất định 'Nothing' (Không có gì) làm chủ ngữ chỉ vật/sự việc.",
    "topic": "Pronouns"
  },
  {
    "id": 67,
    "sentence": "A colleague of _______ recommended this software for project management.",
    "options": ["me", "my", "mine", "I"],
    "answer": "mine",
    "explanation": "Cấu trúc sở hữu kép (Double Genitive): 'A + Noun + of + Đại từ sở hữu' (A friend of mine).",
    "topic": "Pronouns"
  },
  {
    "id": 68,
    "sentence": "The team members congratulated _______ on the successful launch of the product.",
    "options": ["one another", "the other", "others", "another"],
    "answer": "one another",
    "explanation": "Dùng 'one another' (nhau) để chỉ hành động tương tác qua lại giữa nhiều người trong nhóm.",
    "topic": "Pronouns"
  },
  {
    "id": 69,
    "sentence": "The company has two main branches, neither of _______ is profitable.",
    "options": ["which", "whom", "them", "that"],
    "answer": "which",
    "explanation": "Trong mệnh đề quan hệ không xác định, sau giới từ (of) chỉ vật, dùng 'which'. Nếu dùng 'them' sẽ bị lỗi hai mệnh đề độc lập nối nhau bằng dấu phẩy (Comma Splice).",
    "topic": "Pronouns"
  },
  {
    "id": 70,
    "sentence": "The _______ of the new security system will take approximately three days.",
    "options": ["install", "installation", "installed", "installer"],
    "answer": "installation",
    "explanation": "Sau mạo từ 'The' cần một danh từ. Dựa vào ngữ nghĩa (việc lắp đặt), chọn 'installation'.",
    "topic": "Nouns"
  },
  {
    "id": 71,
    "sentence": "Please let _______ know if you need any further assistance with the installation.",
    "options": ["we", "us", "our", "ours"],
    "answer": "us",
    "explanation": "Cấu trúc 'Let + Tân ngữ + V-bare'. Cần đại từ tân ngữ 'us'.",
    "topic": "Pronouns"
  },
  {
    "id": 72,
    "sentence": "_______ of the equipment needs to be replaced before the inspection next week.",
    "options": ["Many", "Much", "Few", "Several"],
    "answer": "Much",
    "explanation": "'Equipment' là danh từ không đếm được, nên phải dùng 'Much'. 'Many/Few/Several' đi với danh từ đếm được số nhiều.",
    "topic": "Pronouns/Quantifiers"
  },
  {
    "id": 73,
    "sentence": "The new laptop bag is not mine; perhaps it is _______.",
    "options": ["your", "yours", "you", "yourself"],
    "answer": "yours",
    "explanation": "Dùng đại từ sở hữu 'yours' (của bạn) đứng một mình làm bổ ngữ, thay thế cho 'your bag'.",
    "topic": "Pronouns"
  },
  {
    "id": 74,
    "sentence": "Those _______ strictly follow the safety guidelines will be rewarded.",
    "options": ["who", "which", "whom", "whose"],
    "answer": "who",
    "explanation": "Cấu trúc 'Those who...' (Những người mà...) là cấu trúc kinh điển trong TOEIC chỉ một nhóm người cụ thể.",
    "topic": "Pronouns"
  },
  {
    "id": 75,
    "sentence": "The director expressed his _______ for the team's hard work during the crisis.",
    "options": ["appreciate", "appreciation", "appreciative", "appreciated"],
    "answer": "appreciation",
    "explanation": "Sau tính từ sở hữu 'his' cần một danh từ. Đuôi -tion là dấu hiệu của danh từ.",
    "topic": "Nouns"
  },
  {
    "id": 76,
    "sentence": "Unlike his colleagues, Mr. Evans prefers to work by _______.",
    "options": ["he", "him", "his", "himself"],
    "answer": "himself",
    "explanation": "Cụm 'by himself' = 'alone' (một mình).",
    "topic": "Pronouns"
  },
  {
    "id": 77,
    "sentence": "The cost of living in this city is higher than _______ of my hometown.",
    "options": ["that", "those", "this", "these"],
    "answer": "that",
    "explanation": "Dùng 'that' để thay thế cho danh từ số ít 'cost' phía trước (The cost of living... that of...).",
    "topic": "Pronouns"
  },
  {
    "id": 78,
    "sentence": "Employees must present _______ identification cards to enter the building.",
    "options": ["they", "them", "their", "theirs"],
    "answer": "their",
    "explanation": "Cần tính từ sở hữu 'their' đứng trước cụm danh từ 'identification cards'.",
    "topic": "Pronouns"
  },
  {
    "id": 79,
    "sentence": "_______ of the applicants was qualified for the position, so we reopened the job posting.",
    "options": ["None", "No", "Not", "Nothing"],
    "answer": "None",
    "explanation": "Dùng 'None' (of the...) làm chủ ngữ. 'No' phải đi kèm danh từ ngay sau nó.",
    "topic": "Pronouns"
  },
  {
    "id": 80,
    "sentence": "To ensure fairness, the manager asked the two employees to evaluate _______ performance reviews.",
    "options": ["each other", "one another's", "the other", "others"],
    "answer": "one another's",
    "explanation": "Cần sở hữu cách của đại từ tương hỗ: 'đánh giá bài nhận xét hiệu suất của nhau'. (one another's reviews).",
    "topic": "Pronouns"
  },
  {
    "id": 81,
    "sentence": "The board granted its _______ for the merger after reviewing the financial reports.",
    "options": ["approve", "approves", "approval", "approvingly"],
    "answer": "approval",
    "explanation": "Cần một danh từ sau tính từ sở hữu 'its'. Lưu ý: 'Approval' (sự chấp thuận) có đuôi -al nhưng là danh từ, không phải tính từ.",
    "topic": "Nouns"
  },
  {
    "id": 82,
    "sentence": "_______ of the participants in the survey indicated that they prefer online shopping.",
    "options": ["A few", "Little", "Much", "Every"],
    "answer": "A few",
    "explanation": "'Participants' là danh từ đếm được số nhiều. 'A few' đi với danh từ đếm được. 'Little/Much' đi với không đếm được. 'Every' đi với số ít.",
    "topic": "Pronouns/Quantifiers"
  },
  {
    "id": 83,
    "sentence": "The manager decided to handle the customer complaint _______.",
    "options": ["he", "him", "his", "himself"],
    "answer": "himself",
    "explanation": "Dùng đại từ phản thân 'himself' ở cuối câu để nhấn mạnh chủ thể tự thực hiện hành động.",
    "topic": "Pronouns"
  },
  {
    "id": 84,
    "sentence": "All employees are expected to clean up after _______ in the break room.",
    "options": ["they", "them", "their", "themselves"],
    "answer": "themselves",
    "explanation": "Cụm 'clean up after oneself' (dọn dẹp sau khi bày bừa). Cần đại từ phản thân 'themselves'.",
    "topic": "Pronouns"
  },
  {
    "id": 85,
    "sentence": "The proposed budget cuts will affect every department except _______.",
    "options": ["our", "ours", "us", "we"],
    "answer": "ours",
    "explanation": "Dùng đại từ sở hữu 'ours' (của chúng tôi) để thay thế cho cụm 'our department'.",
    "topic": "Pronouns"
  },
  {
    "id": 86,
    "sentence": "Anyone _______ has questions about the new policy should contact HR immediately.",
    "options": ["who", "whom", "whose", "which"],
    "answer": "who",
    "explanation": "Dùng 'who' làm chủ ngữ cho mệnh đề quan hệ bổ nghĩa cho đại từ bất định 'Anyone'.",
    "topic": "Pronouns"
  },
  {
    "id": 87,
    "sentence": "The final decision regarding the project timeline is _______.",
    "options": ["you", "your", "yours", "yourself"],
    "answer": "yours",
    "explanation": "Cần đại từ sở hữu 'yours' (của bạn/quyền của bạn) làm bổ ngữ sau động từ tobe 'is'.",
    "topic": "Pronouns"
  },
  {
    "id": 88,
    "sentence": "Despite the delay, the construction crew managed to complete the building by _______.",
    "options": ["it", "its", "itself", "they"],
    "answer": "itself",
    "explanation": "Trong ngữ cảnh này, nếu 'building' là chủ thể thì 'complete by itself' (tự hoàn thành) không hợp lý. Tuy nhiên, xét đáp án: 'by itself' (tự nó/một mình nó). Câu này thường bẫy về cụm 'by themselves' (đội thợ tự làm), nhưng nếu chủ ngữ là 'crew' (số ít tập hợp) có thể dùng 'itself'.",
    "topic": "Pronouns"
  },
  {
    "id": 89,
    "sentence": "Please ensure that _______ sensitive documents are shredded before disposal.",
    "options": ["all", "every", "each", "much"],
    "answer": "all",
    "explanation": "Dùng 'all' đi với danh từ số nhiều 'documents'. 'Every/Each' đi với danh từ số ít. 'Much' đi với không đếm được.",
    "topic": "Pronouns/Quantifiers"
  },
  {
    "id": 90,
    "sentence": "The updated software is compatible with both Windows and Mac, unlike _______ predecessor.",
    "options": ["it", "its", "it's", "they"],
    "answer": "its",
    "explanation": "Cần tính từ sở hữu 'its' (của nó) trước danh từ 'predecessor' (phiên bản tiền nhiệm).",
    "topic": "Pronouns"
  },
  {
    "id": 91,
    "sentence": "If you need a calculator for the exam, the proctor can lend you _______.",
    "options": ["one", "it", "some", "any"],
    "answer": "one",
    "explanation": "Dùng 'one' (một cái) để thay thế cho danh từ đếm được số ít 'calculator' được nhắc đến chung chung (không xác định cụ thể cái nào). 'It' dùng cho vật xác định cụ thể.",
    "topic": "Pronouns"
  },
  {
    "id": 92,
    "sentence": "The CEO _______ will present the Employee of the Year award at the gala.",
    "options": ["he", "him", "his", "himself"],
    "answer": "himself",
    "explanation": "Đại từ phản thân 'himself' đứng ngay sau chủ ngữ (The CEO) để nhấn mạnh chính ông ấy sẽ làm việc đó.",
    "topic": "Pronouns"
  },
  {
    "id": 93,
    "sentence": "Despite the fierce competition, the two companies have a lot of respect for _______.",
    "options": ["each other", "the other", "others", "another"],
    "answer": "each other",
    "explanation": "Dùng 'each other' sau giới từ 'for' để chỉ sự tôn trọng lẫn nhau giữa hai đối tượng.",
    "topic": "Pronouns"
  },
  {
    "id": 94,
    "sentence": "_______ of the new interns has been assigned a mentor yet.",
    "options": ["None", "No", "Not", "Any"],
    "answer": "None",
    "explanation": "Dùng 'None' (of...) làm chủ ngữ. 'No' cần danh từ đi kèm. 'Not' là trạng từ phủ định.",
    "topic": "Pronouns"
  },
  {
    "id": 95,
    "sentence": "For _______ is the package on the reception desk intended?",
    "options": ["who", "whom", "whose", "which"],
    "answer": "whom",
    "explanation": "Giới từ 'For' đứng đầu câu hỏi -> Bắt buộc dùng 'whom' (đối với người). (For whom is... = The package is intended for whom?).",
    "topic": "Pronouns"
  },
  {
    "id": 96,
    "sentence": "Please hand your completed timesheets to Mr. Lee or _______ before leaving.",
    "options": ["I", "me", "my", "mine"],
    "answer": "me",
    "explanation": "Cần đại từ tân ngữ (Object Pronoun) sau giới từ 'to'. Cấu trúc: 'to Mr. Lee or me'. (Rất nhiều người sai chọn 'I').",
    "topic": "Pronouns"
  },
  {
    "id": 97,
    "sentence": "The board of directors expressed _______ gratitude for the staff's dedication.",
    "options": ["its", "their", "theirs", "it"],
    "answer": "its",
    "explanation": "'The board of directors' thường được xem là một thực thể thống nhất (tập hợp) nên dùng tính từ sở hữu số ít 'its'. (Tuy nhiên, nếu ngữ cảnh nhấn mạnh từng thành viên thì dùng 'their', nhưng trong TOEIC, tổ chức thường đi với 'its').",
    "topic": "Pronouns"
  },
  {
    "id": 98,
    "sentence": "_______ is essential that we meet the production deadline this month.",
    "options": ["This", "That", "It", "There"],
    "answer": "It",
    "explanation": "Cấu trúc chủ ngữ giả 'It is + adj + that...'.",
    "topic": "Pronouns"
  },
  {
    "id": 99,
    "sentence": "We cannot afford to let _______ fall behind schedule on this critical project.",
    "options": ["us", "our", "ours", "ourselves"],
    "answer": "ourselves",
    "explanation": "Chủ ngữ là 'We', tân ngữ cũng là chính chúng ta -> Dùng đại từ phản thân 'ourselves'.",
    "topic": "Pronouns"
  },
  {
    "id": 100,
    "sentence": "_______ interested in the position should submit a resume and cover letter.",
    "options": ["Anyone", "Whoever", "Those", "They"],
    "answer": "Those",
    "explanation": "Cấu trúc 'Those + V-ed/adj' (Những người mà...). Nếu dùng 'Anyone', câu đầy đủ phải là 'Anyone who is interested...'. Ở đây 'interested' là rút gọn mệnh đề quan hệ, 'Those' phù hợp nhất.",
    "topic": "Pronouns"
  }
];

const MIXED_EASY = DEFAULT_QUESTIONS;
const MIXED_HARD = DEFAULT_HARD_QUESTIONS;

const ADJ_POSITION_EASY = [
  {
    id: 2001,
    sentence: "The ____ report was sent to all employees.",
    options: ["final", "finally", "finalize", "finalized"],
    answer: "final",
    explanation: "Tinh tu dung truoc danh tu 'report'.",
    topic: "Adjectives",
  },
  {
    id: 2002,
    sentence: "The meeting room is very ____ today.",
    options: ["quiet", "quietly", "quieter", "quietness"],
    answer: "quiet",
    explanation: "Sau dong tu to be dung tinh tu.",
    topic: "Adjectives",
  },
  {
    id: 2003,
    sentence: "We need a ____ solution to this problem.",
    options: ["quick", "quickly", "quicken", "quickness"],
    answer: "quick",
    explanation: "Tinh tu bo nghia cho danh tu 'solution'.",
    topic: "Adjectives",
  },
];

const ADJ_POSITION_HARD = [
  {
    id: 2011,
    sentence: "The manager seems ____ about the new policy.",
    options: ["concerned", "concern", "concerning", "concernedly"],
    answer: "concerned",
    explanation: "Sau dong tu lien ket (seem) dung tinh tu/phan tu V3 nhu tinh tu.",
    topic: "Adjectives",
  },
  {
    id: 2012,
    sentence: "It is ____ that the documents be submitted by Friday.",
    options: ["essential", "essence", "essentially", "essentials"],
    answer: "essential",
    explanation: "Cau truc 'It is + adj + that...': can tinh tu.",
    topic: "Adjectives",
  },
  {
    id: 2013,
    sentence: "The customers were ____ with the service.",
    options: ["satisfied", "satisfy", "satisfaction", "satisfying"],
    answer: "satisfied",
    explanation: "Sau 'were' dung tinh tu (V3) de mo ta trang thai.",
    topic: "Adjectives",
  },
];

const ADJ_SUFFIX_EASY = [
  {
    "id": 2024,
    "sentence": "She represents the most ____ brand in the market.",
    "options": ["success", "successful", "successfully", "succeed"],
    "answer": "successful",
    "explanation": "Cần một tính từ đứng trước danh từ 'brand'. Hậu tố -ful tạo tính từ: successful (thành công).",
    "topic": "Suffixes"
  },
  {
    "id": 2025,
    "sentence": "Don't be ____; you will find your keys soon.",
    "options": ["hope", "hopeless", "hopelessly", "hopeful"],
    "answer": "hopeless",
    "explanation": "Dựa vào ngữ cảnh 'đừng... bạn sẽ tìm thấy sớm', ta cần một tính từ mang nghĩa tiêu cực. Hậu tố -less tạo tính từ mang nghĩa 'không/thiếu': hopeless (tuyệt vọng).",
    "topic": "Suffixes"
  },
  {
    "id": 2026,
    "sentence": "It is ____ to drive without a seatbelt.",
    "options": ["risk", "risky", "riskily", "risked"],
    "answer": "risky",
    "explanation": "Sau động từ to be 'is' cần một tính từ. Hậu tố -y thường biến danh từ thành tính từ: risky (rủi ro/nguy hiểm).",
    "topic": "Suffixes"
  },
  {
    "id": 2027,
    "sentence": "The artist is very ____ and has many new ideas.",
    "options": ["create", "creation", "creative", "creatively"],
    "answer": "creative",
    "explanation": "Sau 'very' cần một tính từ chỉ tính chất. Hậu tố -ive tạo tính từ: creative (sáng tạo).",
    "topic": "Suffixes"
  },
  {
    "id": 2028,
    "sentence": "We need to find a ____ solution to this problem.",
    "options": ["logic", "logical", "logically", "logician"],
    "answer": "logical",
    "explanation": "Trước danh từ 'solution' cần một tính từ. Hậu tố -al tạo tính từ: logical (hợp lý/có logic).",
    "topic": "Suffixes"
  },
  {
    "id": 2029,
    "sentence": "Be ____ when you cross the street.",
    "options": ["care", "careful", "carefully", "careless"],
    "answer": "careful",
    "explanation": "Sau động từ 'Be' (mệnh lệnh thức) cần một tính từ. Dựa vào ngữ cảnh 'qua đường', cần tính từ mang nghĩa cẩn thận. Hậu tố -ful: careful.",
    "topic": "Suffixes"
  },
  {
    "id": 2030,
    "sentence": "This sofa is very ____ to sit on.",
    "options": ["comfort", "comfortable", "comfortably", "comforting"],
    "answer": "comfortable",
    "explanation": "Sau 'very' cần tính từ. Hậu tố -able tạo tính từ chỉ khả năng hoặc tính chất: comfortable (thoải mái).",
    "topic": "Suffixes"
  },
  {
    "id": 2031,
    "sentence": "Smoking is ____ to your health.",
    "options": ["harm", "harmful", "harmless", "harmfully"],
    "answer": "harmful",
    "explanation": "Cấu trúc 'to be + adj + to'. Hậu tố -ful tạo tính từ mang nghĩa 'gây hại': harmful.",
    "topic": "Suffixes"
  },
  {
    "id": 2032,
    "sentence": "He gave a ____ explanation for his absence.",
    "options": ["reason", "reasonable", "reasonably", "reasoning"],
    "answer": "reasonable",
    "explanation": "Trước danh từ 'explanation' cần tính từ. Hậu tố -able: reasonable (hợp lý/có lý).",
    "topic": "Suffixes"
  },
  {
    "id": 2033,
    "sentence": "Traditional costumes are often very ____.",
    "options": ["color", "colorful", "colored", "coloring"],
    "answer": "colorful",
    "explanation": "Sau 'very' cần tính từ. Hậu tố -ful: colorful (sặc sỡ/nhiều màu sắc).",
    "topic": "Suffixes"
  },
  {
    "id": 2034,
    "sentence": "She is a ____ musicians in our country.",
    "options": ["fame", "famous", "famously", "infamous"],
    "answer": "famous",
    "explanation": "Trước danh từ 'musicians' cần tính từ. Hậu tố -ous biến danh từ 'fame' thành tính từ: famous (nổi tiếng).",
    "topic": "Suffixes"
  },
  {
    "id": 2035,
    "sentence": "Scientific research is essential for ____ development.",
    "options": ["industry", "industrial", "industrially", "industrialize"],
    "answer": "industrial",
    "explanation": "Trước danh từ 'development' cần tính từ. Hậu tố -al (hoặc -ial) biến danh từ thành tính từ: industrial (thuộc về công nghiệp).",
    "topic": "Suffixes"
  },
  {
    "id": 2036,
    "sentence": "The snake bite is ____ and needs immediate treatment.",
    "options": ["poison", "poisonous", "poisonously", "poisoned"],
    "answer": "poisonous",
    "explanation": "Sau động từ to be cần tính từ mô tả chủ ngữ. Hậu tố -ous: poisonous (có độc).",
    "topic": "Suffixes"
  },
  {
    "id": 2037,
    "sentence": "Whatever you do, don't be ____ with your money.",
    "options": ["fool", "foolish", "foolishly", "fooled"],
    "answer": "foolish",
    "explanation": "Sau 'don't be' cần tính từ. Hậu tố -ish mang nghĩa 'có tính chất của': foolish (ngốc nghếch/dại dột).",
    "topic": "Suffixes"
  },
  {
    "id": 2038,
    "sentence": "This chemical is highly ____ so handle it with care.",
    "options": ["explode", "explosive", "explosion", "explosively"],
    "answer": "explosive",
    "explanation": "Sau trạng từ 'highly' cần tính từ. Hậu tố -ive biến động từ/danh từ thành tính từ: explosive (dễ nổ).",
    "topic": "Suffixes"
  },
  {
    "id": 2039,
    "sentence": "The manager is ____ for the entire project.",
    "options": ["response", "responsible", "responsibility", "responsibly"],
    "answer": "responsible",
    "explanation": "Cấu trúc 'responsible for' (chịu trách nhiệm). Hậu tố -ible tạo tính từ: responsible.",
    "topic": "Suffixes"
  },
  {
    "id": 2040,
    "sentence": "We had a very ____ vacation in Hawaii.",
    "options": ["enjoy", "enjoyable", "enjoyment", "enjoyably"],
    "answer": "enjoyable",
    "explanation": "Trước danh từ 'vacation' cần tính từ. Hậu tố -able: enjoyable (thú vị/đáng nhớ).",
    "topic": "Suffixes"
  },
  {
    "id": 2041,
    "sentence": "Eating vegetables is ____ for your body.",
    "options": ["health", "healthy", "healthily", "healthiness"],
    "answer": "healthy",
    "explanation": "Sau to be 'is' cần tính từ. Hậu tố -y biến danh từ 'health' thành tính từ: healthy (tốt cho sức khỏe/lành mạnh).",
    "topic": "Suffixes"
  },
  {
    "id": 2042,
    "sentence": "The movie was so ____ that I fell asleep.",
    "options": ["bore", "bored", "boring", "boredom"],
    "answer": "boring",
    "explanation": "Chủ ngữ là vật (The movie) gây ra cảm giác nên dùng tính từ đuôi -ing (V-ing đóng vai trò tính từ): boring (nhàm chán).",
    "topic": "Suffixes"
  },
  {
    "id": 2043,
    "sentence": "He is very ____ about his new job.",
    "options": ["excite", "exciting", "excited", "excitement"],
    "answer": "excited",
    "explanation": "Chủ ngữ là người (He) bị tác động bởi cảm xúc nên dùng tính từ đuôi -ed (V-ed đóng vai trò tính từ): excited (hào hứng).",
    "topic": "Suffixes"
  },
  {
    "id": 2044,
    "sentence": "The children played ____ in the park.",
    "options": ["happy", "happily", "happiness", "unhappy"],
    "answer": "happily",
    "explanation": "Sau động từ thường 'played' cần một trạng từ để bổ nghĩa. Hậu tố -ly tạo trạng từ: happily (một cách vui vẻ).",
    "topic": "Suffixes"
  },
  {
    "id": 2045,
    "sentence": "His ____ of the subject was impressive.",
    "options": ["know", "knowledge", "known", "knowing"],
    "answer": "knowledge",
    "explanation": "Sau tính từ sở hữu 'His' cần một danh từ. Hậu tố -ledge biến động từ 'know' thành danh từ: knowledge (kiến thức).",
    "topic": "Suffixes"
  },
  {
    "id": 2046,
    "sentence": "They need to ____ the bridge before winter.",
    "options": ["strong", "strength", "strengthen", "strongly"],
    "answer": "strengthen",
    "explanation": "Sau 'need to' cần một động từ nguyên mẫu. Hậu tố -en biến tính từ/danh từ thành động từ: strengthen (làm cho mạnh lên/củng cố).",
    "topic": "Suffixes"
  },
  {
    "id": 2047,
    "sentence": "There is a ____ between the two plans.",
    "options": ["differ", "different", "difference", "differently"],
    "answer": "difference",
    "explanation": "Sau mạo từ 'a' cần một danh từ. Hậu tố -ence biến động từ/tính từ thành danh từ: difference (sự khác biệt).",
    "topic": "Suffixes"
  },
  {
    "id": 2048,
    "sentence": "Please read the instructions ____.",
    "options": ["care", "careful", "carefully", "careless"],
    "answer": "carefully",
    "explanation": "Sau động từ 'read' và tân ngữ 'the instructions', cần trạng từ bổ nghĩa cho hành động đọc. Hậu tố -ly: carefully (một cách cẩn thận).",
    "topic": "Suffixes"
  },
  {
    "id": 2049,
    "sentence": "Her ____ to the company is admirable.",
    "options": ["loyal", "loyally", "loyalty", "disloyal"],
    "answer": "loyalty",
    "explanation": "Sau tính từ sở hữu 'Her' cần danh từ. Hậu tố -ty biến tính từ thành danh từ: loyalty (lòng trung thành).",
    "topic": "Suffixes"
  },
  {
    "id": 2050,
    "sentence": "The ____ of the internet has changed our lives.",
    "options": ["invent", "inventive", "invention", "inventor"],
    "answer": "invention",
    "explanation": "Sau 'The' cần danh từ chỉ sự vật/sự việc. Hậu tố -tion biến động từ thành danh từ: invention (sự phát minh).",
    "topic": "Suffixes"
  },
  {
    "id": 2051,
    "sentence": "He wants to become a famous ____.",
    "options": ["act", "action", "active", "actor"],
    "answer": "actor",
    "explanation": "Sau 'a famous' cần danh từ chỉ người. Hậu tố -or chỉ người thực hiện hành động: actor (diễn viên nam).",
    "topic": "Suffixes"
  },
  {
    "id": 2052,
    "sentence": "The ____ of the sun makes plants grow.",
    "options": ["warm", "warmly", "warmth", "warming"],
    "answer": "warmth",
    "explanation": "Sau 'The' cần danh từ. Hậu tố -th biến tính từ 'warm' thành danh từ: warmth (sự ấm áp/hơi ấm).",
    "topic": "Suffixes"
  },
  {
    "id": 2053,
    "sentence": "We need to ____ the process to save time.",
    "options": ["simple", "simply", "simplify", "simplicity"],
    "answer": "simplify",
    "explanation": "Sau 'need to' cần động từ. Hậu tố -ify biến tính từ/danh từ thành động từ: simplify (đơn giản hóa).",
    "topic": "Suffixes"
  },
  {
    "id": 2054,
    "sentence": "Air ____ is a serious problem in big cities.",
    "options": ["pollute", "polluted", "pollution", "pollutant"],
    "answer": "pollution",
    "explanation": "Cụm danh từ ghép 'Air pollution' (ô nhiễm không khí). Hậu tố -tion tạo danh từ trừu tượng.",
    "topic": "Suffixes"
  },
  {
    "id": 2055,
    "sentence": "She smiled ____ at the camera.",
    "options": ["sweet", "sweeten", "sweetly", "sweetness"],
    "answer": "sweetly",
    "explanation": "Sau động từ 'smiled' cần trạng từ chỉ cách thức. Hậu tố -ly: sweetly (một cách ngọt ngào).",
    "topic": "Suffixes"
  },
  {
    "id": 2056,
    "sentence": "Freedom and ____ are important values.",
    "options": ["just", "justice", "justify", "justly"],
    "answer": "justice",
    "explanation": "Cần một danh từ song song với 'Freedom'. Hậu tố -ice biến tính từ 'just' (công bằng) thành danh từ: justice (công lý/sự công bằng).",
    "topic": "Suffixes"
  },
  {
    "id": 2057,
    "sentence": "The company plans to ____ its operations.",
    "options": ["modern", "modernize", "modernization", "modernity"],
    "answer": "modernize",
    "explanation": "Sau 'plans to' cần động từ. Hậu tố -ize biến tính từ thành động từ: modernize (hiện đại hóa).",
    "topic": "Suffixes"
  },
  {
    "id": 2058,
    "sentence": "His ____ was sudden and unexpected.",
    "options": ["arrive", "arrival", "arriving", "arrives"],
    "answer": "arrival",
    "explanation": "Sau 'His' cần danh từ. Hậu tố -al biến động từ 'arrive' thành danh từ: arrival (sự đến nơi). Lưu ý: -al thường tạo tính từ nhưng cũng tạo danh từ trong trường hợp này.",
    "topic": "Suffixes"
  },
  {
    "id": 2059,
    "sentence": "She works as a ____ in a large hospital.",
    "options": ["pharmacy", "pharmaceutical", "pharmacist", "pharmacology"],
    "answer": "pharmacist",
    "explanation": "Sau 'as a' cần danh từ chỉ nghề nghiệp. Hậu tố -ist chỉ người làm nghề: pharmacist (dược sĩ).",
    "topic": "Suffixes"
  },
  {
    "id": 2060,
    "sentence": "The ____ was very boring.",
    "options": ["perform", "performer", "performance", "performing"],
    "answer": "performance",
    "explanation": "Sau 'The' cần danh từ chỉ sự việc. Hậu tố -ance biến động từ thành danh từ: performance (buổi biểu diễn/màn trình diễn).",
    "topic": "Suffixes"
  },
  {
    "id": 2061,
    "sentence": "He solved the math problem ____.",
    "options": ["easy", "ease", "easily", "easiness"],
    "answer": "easily",
    "explanation": "Sau động từ và tân ngữ 'solved the math problem' cần trạng từ. Hậu tố -ly (y dài đổi thành i ngắn + ly): easily (một cách dễ dàng).",
    "topic": "Suffixes"
  },
  {
    "id": 2062,
    "sentence": "Use your ____ to draw a picture.",
    "options": ["imagine", "imaginative", "imagination", "imaginary"],
    "answer": "imagination",
    "explanation": "Sau tính từ sở hữu 'your' cần danh từ. Hậu tố -ation biến động từ thành danh từ: imagination (trí tưởng tượng).",
    "topic": "Suffixes"
  },
  {
    "id": 2063,
    "sentence": "Please ____ the length of the table.",
    "options": ["measure", "measurement", "measurable", "measuring"],
    "answer": "measure",
    "explanation": "Đứng đầu câu mệnh lệnh (sau 'Please') cần động từ nguyên mẫu: measure (đo đạc).",
    "topic": "Suffixes"
  },
  {
    "id": 2064,
    "sentence": "Their ____ has lasted for over 20 years.",
    "options": ["friend", "friendly", "friendship", "befriend"],
    "answer": "friendship",
    "explanation": "Sau tính từ sở hữu 'Their' cần danh từ. Hậu tố -ship chỉ mối quan hệ hoặc tình trạng: friendship (tình bạn).",
    "topic": "Suffixes"
  },
  {
    "id": 2065,
    "sentence": "He spent his ____ in a small village.",
    "options": ["child", "childish", "childhood", "childless"],
    "answer": "childhood",
    "explanation": "Sau 'his' cần danh từ chỉ khoảng thời gian. Hậu tố -hood chỉ giai đoạn hoặc trạng thái: childhood (thời thơ ấu).",
    "topic": "Suffixes"
  },
  {
    "id": 2066,
    "sentence": "The company is looking for a new ____.",
    "options": ["train", "trainer", "trainee", "training"],
    "answer": "trainee",
    "explanation": "Dựa vào ngữ cảnh (tìm người mới để đào tạo), hậu tố -ee chỉ người nhận hành động: trainee (thực tập sinh/người được đào tạo). Trainer là người đào tạo.",
    "topic": "Suffixes"
  },
  {
    "id": 2067,
    "sentence": "She works as an ____ for a large firm.",
    "options": ["account", "accountant", "accounting", "accountable"],
    "answer": "accountant",
    "explanation": "Sau 'an' cần danh từ chỉ nghề nghiệp. Hậu tố -ant chỉ người làm nghề: accountant (kế toán).",
    "topic": "Suffixes"
  },
  {
    "id": 2068,
    "sentence": "Please ____ the water before drinking.",
    "options": ["pure", "purely", "purify", "purity"],
    "answer": "purify",
    "explanation": "Sau 'Please' cần động từ nguyên mẫu. Hậu tố -ify biến tính từ 'pure' thành động từ: purify (làm sạch/thanh lọc).",
    "topic": "Suffixes"
  },
  {
    "id": 2069,
    "sentence": "The ____ of the kingdom was celebrated.",
    "options": ["free", "freedom", "freely", "freed"],
    "answer": "freedom",
    "explanation": "Sau 'The' cần danh từ trừu tượng. Hậu tố -dom chỉ tình trạng hoặc quyền: freedom (sự tự do).",
    "topic": "Suffixes"
  },
  {
    "id": 2070,
    "sentence": "He is a brilliant ____ in the field of physics.",
    "options": ["science", "scientific", "scientist", "scientifically"],
    "answer": "scientist",
    "explanation": "Cần danh từ chỉ người. Hậu tố -ist: scientist (nhà khoa học).",
    "topic": "Suffixes"
  },
  {
    "id": 2071,
    "sentence": "Can you ____ this dress for me? It's too long.",
    "options": ["short", "shortness", "shorten", "shortly"],
    "answer": "shorten",
    "explanation": "Sau 'Can you' cần động từ. Hậu tố -en biến tính từ 'short' thành động từ: shorten (làm ngắn lại/cắt ngắn).",
    "topic": "Suffixes"
  },
  {
    "id": 2072,
    "sentence": "Darkness and ____ filled the room.",
    "options": ["sad", "sadness", "sadden", "sadly"],
    "answer": "sadness",
    "explanation": "Cần danh từ song song với 'Darkness'. Hậu tố -ness biến tính từ 'sad' thành danh từ: sadness (nỗi buồn).",
    "topic": "Suffixes"
  },
  {
    "id": 2073,
    "sentence": "The ____ asked to see my ticket.",
    "options": ["attend", "attendance", "attendant", "attending"],
    "answer": "attendant",
    "explanation": "Cần danh từ chỉ người thực hiện hành động kiểm tra vé. Hậu tố -ant: attendant (người phục vụ/nhân viên).",
    "topic": "Suffixes"
  },
  {
    "id": 2074,
    "sentence": "We need to ____ the road to reduce traffic.",
    "options": ["wide", "width", "widen", "widely"],
    "answer": "widen",
    "explanation": "Sau 'need to' cần động từ. Hậu tố -en: widen (mở rộng).",
    "topic": "Suffixes"
  },
  {
    "id": 2075,
    "sentence": "He is a famous ____ who writes novels.",
    "options": ["novel", "novelist", "novelty", "novelize"],
    "answer": "novelist",
    "explanation": "Cần danh từ chỉ người viết tiểu thuyết. Hậu tố -ist: novelist (tiểu thuyết gia).",
    "topic": "Suffixes"
  },
  {
    "id": 2076,
    "sentence": "Her ____ relies on her parents.",
    "options": ["depend", "dependent", "dependence", "dependable"],
    "answer": "dependence",
    "explanation": "Sau 'Her' cần danh từ. Hậu tố -ence: dependence (sự phụ thuộc). Lưu ý: dependent là tính từ hoặc danh từ chỉ người phụ thuộc.",
    "topic": "Suffixes"
  },
  {
    "id": 2077,
    "sentence": "The ____ called for an ambulance immediately.",
    "options": ["witness", "witnessed", "witnessing", "witnesses"],
    "answer": "witness",
    "explanation": "Ở đây 'witness' đóng vai trò danh từ chỉ người (nhân chứng), không cần thêm hậu tố đặc biệt nhưng cần nhận biết từ loại. Trong ngữ cảnh này, witness là chủ ngữ.",
    "topic": "Suffixes"
  },
  {
    "id": 2078,
    "sentence": "We need to ____ the exact location.",
    "options": ["identify", "identity", "identical", "identification"],
    "answer": "identify",
    "explanation": "Sau 'need to' cần động từ. Hậu tố -ify: identify (xác định/nhận dạng).",
    "topic": "Suffixes"
  },
  {
    "id": 2079,
    "sentence": "His ____ was shocking to everyone.",
    "options": ["rude", "rudely", "rudeness", "ruder"],
    "answer": "rudeness",
    "explanation": "Sau 'His' cần danh từ chỉ tính chất. Hậu tố -ness: rudeness (sự thô lỗ).",
    "topic": "Suffixes"
  },
  {
    "id": 2080,
    "sentence": "She is an ____ at the local hospital.",
    "options": ["employ", "employer", "employee", "employment"],
    "answer": "employee",
    "explanation": "Sau 'an' cần danh từ chỉ người làm việc (nhân viên). Hậu tố -ee: employee.",
    "topic": "Suffixes"
  },
  {
    "id": 2081,
    "sentence": "This is a form of ____ discrimination.",
    "options": ["race", "racial", "racism", "racist"],
    "answer": "racial",
    "explanation": "Trước danh từ 'discrimination' (sự phân biệt đối xử) cần tính từ. Hậu tố -ial: racial (thuộc về chủng tộc).",
    "topic": "Suffixes"
  },
  {
    "id": 2082,
    "sentence": "We must ____ that the door is locked.",
    "options": ["sure", "ensure", "surely", "surety"],
    "answer": "ensure",
    "explanation": "Tiền tố en- (hoặc hậu tố -en) thường tạo động từ. Ở đây 'ensure' (đảm bảo) là động từ phù hợp sau 'must'.",
    "topic": "Suffixes"
  },
  {
    "id": 2083,
    "sentence": "He showed great ____ during the crisis.",
    "options": ["lead", "leader", "leadership", "leading"],
    "answer": "leadership",
    "explanation": "Sau 'great' cần danh từ trừu tượng chỉ khả năng lãnh đạo. Hậu tố -ship: leadership (khả năng lãnh đạo/sự lãnh đạo).",
    "topic": "Suffixes"
  },
  {
    "id": 2084,
    "sentence": "It is not ____ to buy a new car right now.",
    "options": ["economy", "economic", "economical", "economics"],
    "answer": "economical",
    "explanation": "Cần phân biệt: 'Economic' thuộc về kinh tế, 'Economical' mang nghĩa tiết kiệm. Trong ngữ cảnh mua xe, ý nói về việc tiết kiệm tiền -> economical.",
    "topic": "Word Formation"
  },
  {
    "id": 2085,
    "sentence": "The rate of ____ has increased this year.",
    "options": ["employ", "employed", "employment", "unemployment"],
    "answer": "unemployment",
    "explanation": "Dựa vào ngữ cảnh 'tăng lên' (thường là điều tiêu cực trong kinh tế) và cấu trúc 'rate of' (tỷ lệ...), ta cần danh từ 'unemployment' (thất nghiệp).",
    "topic": "Word Formation"
  },
  {
    "id": 2086,
    "sentence": "This is a ____ building protected by the government.",
    "options": ["history", "historic", "historical", "historian"],
    "answer": "historic",
    "explanation": "Phân biệt: 'Historic' mang tính lịch sử quan trọng (sự kiện, địa điểm), 'Historical' thuộc về quá khứ/lịch sử (tài liệu, phim ảnh). Tòa nhà quan trọng -> historic.",
    "topic": "Word Formation"
  },
  {
    "id": 2087,
    "sentence": "She made a deep ____ on the interviewers.",
    "options": ["impress", "impression", "impressive", "impressively"],
    "answer": "impression",
    "explanation": "Cấu trúc 'make an impression on someone' (tạo ấn tượng với ai). Cần danh từ: impression.",
    "topic": "Word Formation"
  },
  {
    "id": 2088,
    "sentence": "Pollution can ____ many species of animals.",
    "options": ["danger", "dangerous", "endanger", "endangered"],
    "answer": "endanger",
    "explanation": "Sau động từ khuyết thiếu 'can' cần động từ nguyên mẫu. Tiền tố en- biến danh từ 'danger' thành động từ: endanger (gây nguy hiểm).",
    "topic": "Word Formation"
  },
  {
    "id": 2089,
    "sentence": "He has the ____ to solve complex problems.",
    "options": ["able", "ability", "enable", "ably"],
    "answer": "ability",
    "explanation": "Sau mạo từ 'the' cần danh từ. Hậu tố -ity biến tính từ 'able' thành danh từ: ability (khả năng).",
    "topic": "Word Formation"
  },
  {
    "id": 2090,
    "sentence": "They live in a quiet ____ area.",
    "options": ["reside", "resident", "residence", "residential"],
    "answer": "residential",
    "explanation": "Trước danh từ 'area' cần tính từ. Hậu tố -ial: residential (thuộc về khu dân cư/nhà ở).",
    "topic": "Word Formation"
  },
  {
    "id": 2091,
    "sentence": "Honesty is the best ____.",
    "options": ["polite", "police", "policy", "politics"],
    "answer": "policy",
    "explanation": "Đây là câu thành ngữ: 'Honesty is the best policy' (Thật thà là thượng sách). Cần danh từ: policy.",
    "topic": "Word Formation"
  },
  {
    "id": 2092,
    "sentence": "The virus can ____ the immune system.",
    "options": ["weak", "weakness", "weaken", "weakly"],
    "answer": "weaken",
    "explanation": "Sau 'can' cần động từ. Hậu tố -en: weaken (làm suy yếu).",
    "topic": "Word Formation"
  },
  {
    "id": 2093,
    "sentence": "We need to call an ____ to fix the lights.",
    "options": ["electric", "electrical", "electricity", "electrician"],
    "answer": "electrician",
    "explanation": "Cần danh từ chỉ người sửa điện. Hậu tố -ian chỉ người làm nghề: electrician (thợ điện).",
    "topic": "Word Formation"
  },
  {
    "id": 2094,
    "sentence": "English is an ____ language.",
    "options": ["nation", "native", "international", "nationality"],
    "answer": "international",
    "explanation": "Trước danh từ 'language' cần tính từ. Hậu tố -al và tiền tố inter- (liên): international (quốc tế).",
    "topic": "Word Formation"
  },
  {
    "id": 2095,
    "sentence": "The ____ scenery attracted many tourists.",
    "options": ["nature", "natural", "naturally", "naturalize"],
    "answer": "natural",
    "explanation": "Trước danh từ 'scenery' cần tính từ. Hậu tố -al: natural (thuộc về thiên nhiên).",
    "topic": "Word Formation"
  },
  {
    "id": 2096,
    "sentence": "Please accept my ____ for the mistake.",
    "options": ["apologize", "apology", "apologetic", "apologies"],
    "answer": "apology",
    "explanation": "Sau tính từ sở hữu 'my' cần danh từ số ít (hoặc nhiều). Ở đây 'apology' (lời xin lỗi) là phù hợp nhất.",
    "topic": "Word Formation"
  },
  {
    "id": 2097,
    "sentence": "Winning the competition gave him a sense of ____.",
    "options": ["achieve", "achievement", "achievable", "achiever"],
    "answer": "achievement",
    "explanation": "Sau giới từ 'of' cần danh từ. Hậu tố -ment: achievement (thành tựu/sự đạt được).",
    "topic": "Word Formation"
  },
  {
    "id": 2098,
    "sentence": "The offer is very ____ to investors.",
    "options": ["attract", "attraction", "attractive", "attractively"],
    "answer": "attractive",
    "explanation": "Sau 'very' cần tính từ. Hậu tố -ive: attractive (hấp dẫn/lôi cuốn).",
    "topic": "Word Formation"
  },
  {
    "id": 2099,
    "sentence": "There is a fierce ____ between the two teams.",
    "options": ["compete", "competitive", "competitor", "competition"],
    "answer": "competition",
    "explanation": "Sau mạo từ 'a' và tính từ 'fierce' cần danh từ chỉ sự việc. Hậu tố -tion: competition (sự cạnh tranh/cuộc thi).",
    "topic": "Word Formation"
  },
  {
    "id": 2100,
    "sentence": "The movie was ____ based on a true story.",
    "options": ["loose", "loosen", "loosely", "loss"],
    "answer": "loosely",
    "explanation": "Bổ nghĩa cho động từ 'based' cần trạng từ. Hậu tố -ly: loosely (dựa một cách lỏng lẻo/phóng tác).",
    "topic": "Word Formation"
  },
  {
    "id": 2101,
    "sentence": "Ghost stories often ____ children.",
    "options": ["terror", "terrible", "terrify", "terrific"],
    "answer": "terrify",
    "explanation": "Vị trí này cần một động từ chính trong câu. Hậu tố -ify: terrify (làm cho khiếp sợ).",
    "topic": "Word Formation"
  },
  {
    "id": 2102,
    "sentence": "Regular exercise is ____ for your heart.",
    "options": ["benefit", "beneficial", "beneficially", "beneficiary"],
    "answer": "beneficial",
    "explanation": "Sau động từ to be 'is' cần tính từ. Hậu tố -ial: beneficial (có lợi).",
    "topic": "Word Formation"
  },
  {
    "id": 2103,
    "sentence": "He behaved ____ towards the guests.",
    "options": ["friend", "friendly", "friendliness", "unfriendly"],
    "answer": "unfriendly",
    "explanation": "Mặc dù 'friendly' kết thúc bằng -ly nhưng nó là tính từ. Tuy nhiên, ở đây cần một tính từ bổ nghĩa cho chủ ngữ sau động từ nối hoặc trạng từ? Thực ra 'behave' đi với trạng từ. Nhưng 'friendly' không có dạng 'friendlily'. Ta dùng cụm 'in a friendly way'. Tuy nhiên, nếu đề bài bắt chọn từ đơn, 'unfriendly' (tính từ) có thể dùng như tính từ bổ ngữ hoặc hiểu theo nghĩa trạng từ trong văn nói. Nhưng chính xác nhất: trong các lựa chọn, nếu ngữ cảnh tiêu cực, 'unfriendly' là tính từ. Nếu cần trạng từ, đáp án phải là cấu trúc khác. *Lưu ý*: Với câu này, nếu bắt buộc chọn trạng từ, tiếng Anh không dùng 'friendlily'. Ta thường chọn tính từ 'unfriendly' nếu nó đóng vai trò bổ ngữ chủ ngữ (He was unfriendly). Với động từ 'behave', người ta chấp nhận tính từ trong văn phong suồng sã hoặc coi nó là trạng từ bất quy tắc trong bài thi trắc nghiệm. Đáp án chọn 'unfriendly' (có thái độ không thân thiện).",
    "topic": "Word Formation"
  }
];

const ADJ_SUFFIX_HARD = [
  {
    "id": 2034,
    "sentence": "The instructions were very ____ and difficult to follow.",
    "options": ["confuse", "confused", "confusing", "confusion"],
    "answer": "confusing",
    "explanation": "Chủ ngữ là vật (instructions) gây ra sự khó hiểu -> dùng V-ing: confusing.",
    "topic": "Suffixes"
  },
  {
    "id": 2035,
    "sentence": "She was ____ by the complexity of the puzzle.",
    "options": ["fascinate", "fascinating", "fascinated", "fascination"],
    "answer": "fascinated",
    "explanation": "Chủ ngữ là người (She) bị tác động cảm xúc -> dùng V-ed: fascinated.",
    "topic": "Suffixes"
  },
  {
    "id": 2036,
    "sentence": "The manager was ____ of the employee's performance.",
    "options": ["appreciate", "appreciative", "appreciation", "appreciated"],
    "answer": "appreciative",
    "explanation": "Cấu trúc 'be appreciative of' (biết ơn/đánh giá cao). Hậu tố -ive tạo tính từ.",
    "topic": "Suffixes"
  },
  {
    "id": 2037,
    "sentence": "It is ____ to double-check your work before submitting.",
    "options": ["advise", "advisable", "advisory", "advice"],
    "answer": "advisable",
    "explanation": "Cấu trúc 'It is + adj + to V'. 'Advisable' (nên làm/khôn ngoan/đáng khuyến khích).",
    "topic": "Suffixes"
  },
  {
    "id": 2038,
    "sentence": "The chemical is extremely ____ to the skin.",
    "options": ["irritate", "irritating", "irritated", "irritation"],
    "answer": "irritating",
    "explanation": "Chất hóa học gây ra sự kích ứng -> dùng tính từ chủ động/gây ra: irritating.",
    "topic": "Suffixes"
  },
  {
    "id": 2039,
    "sentence": "He is a very ____ person; you can trust him.",
    "options": ["depend", "dependent", "dependable", "dependence"],
    "answer": "dependable",
    "explanation": "Cần tính từ chỉ phẩm chất con người đáng tin cậy -> dependable (có thể tin cậy được). Dependent là phụ thuộc.",
    "topic": "Suffixes"
  },
  {
    "id": 2040,
    "sentence": "The outlook for the economy is quite ____.",
    "options": ["opt", "optimist", "optimistic", "optimism"],
    "answer": "optimistic",
    "explanation": "Sau to be 'is' cần tính từ. Hậu tố -ic: optimistic (lạc quan).",
    "topic": "Suffixes"
  },
  {
    "id": 2041,
    "sentence": "This species is ____ to this specific region.",
    "options": ["native", "nation", "national", "nature"],
    "answer": "native",
    "explanation": "Cụm từ 'native to' (bản địa/đặc hữu của vùng nào).",
    "topic": "Suffixes"
  },
  {
    "id": 2042,
    "sentence": "The movie's ending was completely ____.",
    "options": ["predict", "predictable", "prediction", "predictably"],
    "answer": "predictable",
    "explanation": "Sau to be 'was' cần tính từ. Hậu tố -able: predictable (có thể đoán trước được).",
    "topic": "Suffixes"
  },
  {
    "id": 2043,
    "sentence": "Please be ____ of the noise level in the library.",
    "options": ["respect", "respective", "respectful", "respectable"],
    "answer": "respectful",
    "explanation": "Cần tính từ mang nghĩa 'tôn trọng/có ý thức'. 'Respectful' (biết tôn trọng), 'Respective' (tương ứng), 'Respectable' (đáng kính).",
    "topic": "Suffixes"
  },
  {
    "id": 2044,
    "sentence": "The data provided is ____ and cannot be used.",
    "options": ["accuracy", "accurate", "inaccurate", "accurately"],
    "answer": "inaccurate",
    "explanation": "Dựa vào vế sau 'cannot be used' (không dùng được), cần tính từ mang nghĩa phủ định: inaccurate (không chính xác).",
    "topic": "Suffixes"
  },
  {
    "id": 2045,
    "sentence": "She has a very ____ approach to solving problems.",
    "options": ["system", "systematic", "systematical", "systematize"],
    "answer": "systematic",
    "explanation": "Trước danh từ 'approach' cần tính từ. Hậu tố -atic: systematic (có hệ thống).",
    "topic": "Suffixes"
  },
  {
    "id": 2046,
    "sentence": "The results of the experiment were ____.",
    "options": ["conclude", "conclusion", "conclusive", "conclusively"],
    "answer": "conclusive",
    "explanation": "Sau to be 'were' cần tính từ. Hậu tố -ive: conclusive (có tính thuyết phục/kết luận).",
    "topic": "Suffixes"
  },
  {
    "id": 2047,
    "sentence": "It was ____ of him to share his lunch with me.",
    "options": ["generous", "generosity", "generously", "general"],
    "answer": "generous",
    "explanation": "Cấu trúc 'It was + adj + of someone'. Hậu tố -ous: generous (hào phóng).",
    "topic": "Suffixes"
  },
  {
    "id": 2048,
    "sentence": "The antique vase is extremely ____.",
    "options": ["value", "valuable", "valueless", "valuation"],
    "answer": "valuable",
    "explanation": "Cần tính từ mang nghĩa 'có giá trị'. Valuable (quý giá). Valueless là không có giá trị.",
    "topic": "Suffixes"
  },
  {
    "id": 2049,
    "sentence": "He was ____ about the upcoming trip.",
    "options": ["enthusiasm", "enthusiast", "enthusiastic", "enthusiastically"],
    "answer": "enthusiastic",
    "explanation": "Sau to be 'was' cần tính từ chỉ cảm xúc. Hậu tố -ic: enthusiastic (nhiệt tình/hào hứng).",
    "topic": "Suffixes"
  },
  {
    "id": 2050,
    "sentence": "The two sisters are ____ in appearance.",
    "options": ["differ", "difference", "different", "indifferent"],
    "answer": "different",
    "explanation": "Sau to be 'are' cần tính từ. Hậu tố -ent: different (khác nhau).",
    "topic": "Suffixes"
  },
  {
    "id": 2051,
    "sentence": "This information is ____ and should not be shared.",
    "options": ["confide", "confidence", "confidential", "confident"],
    "answer": "confidential",
    "explanation": "Cần tính từ mang nghĩa 'bảo mật/tuyệt mật'. Confidential (bảo mật) khác với Confident (tự tin).",
    "topic": "Suffixes"
  },
  {
    "id": 2052,
    "sentence": "The weather is exceptionally ____ today.",
    "options": ["favor", "favorable", "favorite", "favorably"],
    "answer": "favorable",
    "explanation": "Cần tính từ mang nghĩa 'thuận lợi'. Favorable (thuận lợi). Favorite là yêu thích.",
    "topic": "Suffixes"
  },
  {
    "id": 2053,
    "sentence": "He is ____ of speaking three languages.",
    "options": ["cap", "capability", "capable", "capably"],
    "answer": "capable",
    "explanation": "Cấu trúc 'capable of + V-ing' (có khả năng làm gì). Hậu tố -able: capable.",
    "topic": "Suffixes"
  },
  {
    "id": 2054,
    "sentence": "It was a ____ decision to save money for the future.",
    "options": ["sense", "sensitive", "sensible", "sensibility"],
    "answer": "sensible",
    "explanation": "Phân biệt: 'Sensible' (khôn ngoan/có óc phán đoán), 'Sensitive' (nhạy cảm). Ngữ cảnh tiết kiệm tiền là hành động khôn ngoan -> sensible.",
    "topic": "Suffixes"
  },
  {
    "id": 2055,
    "sentence": "The report was extremely ____, covering every single detail.",
    "options": ["comprehend", "comprehensive", "comprehensible", "comprehension"],
    "answer": "comprehensive",
    "explanation": "Phân biệt: 'Comprehensive' (bao quát/toàn diện), 'Comprehensible' (dễ hiểu). Báo cáo bao gồm mọi chi tiết -> comprehensive.",
    "topic": "Suffixes"
  },
  {
    "id": 2056,
    "sentence": "He prefers listening to ____ music like Beethoven.",
    "options": ["class", "classic", "classical", "classify"],
    "answer": "classical",
    "explanation": "Phân biệt: 'Classical' (nhạc cổ điển), 'Classic' (kinh điển/tiêu biểu). Nhạc Beethoven -> classical.",
    "topic": "Suffixes"
  },
  {
    "id": 2057,
    "sentence": "Please be ____ of the elderly people on the bus.",
    "options": ["consider", "considerable", "considerate", "consideration"],
    "answer": "considerate",
    "explanation": "Phân biệt: 'Considerate' (ân cần/chu đáo/biết nghĩ cho người khác), 'Considerable' (đáng kể/to lớn).",
    "topic": "Suffixes"
  },
  {
    "id": 2058,
    "sentence": "The police conducted an ____ search of the area.",
    "options": ["exhaust", "exhausting", "exhausted", "exhaustive"],
    "answer": "exhaustive",
    "explanation": "Phân biệt: 'Exhaustive' (thấu đáo/toàn diện - không bỏ sót gì), 'Exhausting' (gây kiệt sức), 'Exhausted' (bị kiệt sức). Cuộc tìm kiếm toàn diện -> exhaustive.",
    "topic": "Suffixes"
  },
  {
    "id": 2059,
    "sentence": "After the contest, the winners went to their ____ homes.",
    "options": ["respect", "respectful", "respectable", "respective"],
    "answer": "respective",
    "explanation": "Phân biệt: 'Respective' (tương ứng/của riêng từng người), 'Respectful' (lễ phép), 'Respectable' (đáng kính). Về nhà của riêng mỗi người -> respective.",
    "topic": "Suffixes"
  },
  {
    "id": 2060,
    "sentence": "Dragons are ____ creatures that do not exist.",
    "options": ["imagine", "imaginative", "imaginary", "imagination"],
    "answer": "imaginary",
    "explanation": "Phân biệt: 'Imaginary' (hư cấu/tưởng tượng - không thật), 'Imaginative' (giàu trí tưởng tượng - dùng cho người). Rồng không có thật -> imaginary.",
    "topic": "Suffixes"
  },
  {
    "id": 2061,
    "sentence": "The ____ students studied late into the night.",
    "options": ["industry", "industrial", "industrious", "industrialize"],
    "answer": "industrious",
    "explanation": "Phân biệt: 'Industrious' (cần cù/chăm chỉ), 'Industrial' (thuộc công nghiệp). Học sinh chăm chỉ -> industrious.",
    "topic": "Suffixes"
  },
  {
    "id": 2062,
    "sentence": "We need to find an ____ solution if this one fails.",
    "options": ["alter", "alternation", "alternative", "alternated"],
    "answer": "alternative",
    "explanation": "Hậu tố -ive: 'Alternative' (thay thế).",
    "topic": "Suffixes"
  },
  {
    "id": 2063,
    "sentence": "A judge must be ____ in order to be fair.",
    "options": ["interest", "interested", "uninterested", "disinterested"],
    "answer": "disinterested",
    "explanation": "Câu hỏi khó. Phân biệt: 'Disinterested' (vô tư/không vụ lợi), 'Uninterested' (không quan tâm/chán nản). Thẩm phán cần sự công bằng -> disinterested.",
    "topic": "Suffixes"
  },
  {
    "id": 2064,
    "sentence": "The noise from the construction site was ____.",
    "options": ["continue", "continuous", "continual", "continuity"],
    "answer": "continuous",
    "explanation": "Phân biệt: 'Continuous' (liên tục không ngừng nghỉ), 'Continual' (lặp đi lặp lại có ngắt quãng). Tiếng ồn xây dựng thường được mô tả là continuous (nếu kéo dài suốt).",
    "topic": "Suffixes"
  },
  {
    "id": 2065,
    "sentence": "Flu is a highly ____ disease.",
    "options": ["communicate", "communicative", "communicable", "communication"],
    "answer": "communicable",
    "explanation": "Phân biệt: 'Communicable' (có thể lây lan - dùng cho bệnh), 'Communicative' (cởi mở/thích giao tiếp - dùng cho người).",
    "topic": "Suffixes"
  },
  {
    "id": 2066,
    "sentence": "Stop being so ____ and act like an adult!",
    "options": ["child", "childish", "childlike", "childless"],
    "answer": "childish",
    "explanation": "Phân biệt: 'Childish' (trẻ con/ngố nghếch - nghĩa tiêu cực), 'Childlike' (ngây thơ như trẻ nhỏ - nghĩa tích cực). Ngữ cảnh mắng mỏ -> childish.",
    "topic": "Suffixes"
  },
  {
    "id": 2067,
    "sentence": "His handwriting is completely ____; I can't read it.",
    "options": ["legal", "legible", "illegal", "illegible"],
    "answer": "illegible",
    "explanation": "Gốc từ 'legible' (đọc được). Tiền tố phủ định il- + hậu tố -ible: 'illegible' (không đọc được).",
    "topic": "Suffixes"
  },
  {
    "id": 2068,
    "sentence": "Her help during the crisis was ____.",
    "options": ["value", "valuable", "valueless", "invaluable"],
    "answer": "invaluable",
    "explanation": "Câu hỏi khó. 'Valuable' (có giá trị), 'Invaluable' (vô giá - cực kỳ quý báu), 'Valueless' (không có giá trị). Trong khủng hoảng, sự giúp đỡ là cực kỳ quý -> invaluable (mạnh hơn valuable).",
    "topic": "Suffixes"
  },
  {
    "id": 2069,
    "sentence": "He is highly ____ of people with different beliefs.",
    "options": ["tolerate", "tolerable", "tolerant", "tolerance"],
    "answer": "tolerant",
    "explanation": "Phân biệt: 'Tolerant' (khoan dung/biết chấp nhận), 'Tolerable' (có thể chịu đựng được). Người biết chấp nhận sự khác biệt -> tolerant.",
    "topic": "Suffixes"
  },
  {
    "id": 2070,
    "sentence": "The service at the restaurant was ____ but not great.",
    "options": ["satisfy", "satisfactory", "satisfying", "satisfied"],
    "answer": "satisfactory",
    "explanation": "Phân biệt: 'Satisfactory' (đạt yêu cầu/tạm được), 'Satisfying' (đem lại sự thỏa mãn lớn). Ngữ cảnh 'not great' ám chỉ chỉ dừng ở mức chấp nhận được -> satisfactory.",
    "topic": "Suffixes"
  },
  {
    "id": 2071,
    "sentence": "This liquid is highly ____ so keep it away from fire.",
    "options": ["flame", "flammable", "inflammable", "nonflammable"],
    "answer": "flammable",
    "explanation": "Lưu ý: 'Flammable' và 'Inflammable' đều có nghĩa là 'dễ cháy'. Tuy nhiên, trong tiếng Anh hiện đại (đặc biệt là biển báo an toàn), 'flammable' được ưu tiên để tránh nhầm lẫn tiền tố 'in-' là phủ định. Nếu đề bài có cả hai, chọn 'flammable' (hoặc inflammable cũng đúng về ngữ nghĩa gốc, nhưng flammable an toàn hơn). Trong trắc nghiệm thường chỉ cho 1 trong 2 từ đúng.",
    "topic": "Suffixes"
  },
  {
    "id": 2072,
    "sentence": "She gave me a ____ smile.",
    "options": ["love", "lovely", "loving", "lovable"],
    "answer": "loving",
    "explanation": "Phân biệt: 'Loving' (trìu mến/đầy yêu thương - tả hành động/cảm xúc), 'Lovely' (đáng yêu/đẹp), 'Lovable' (dễ thương). Nụ cười thể hiện tình cảm -> loving smile.",
    "topic": "Suffixes"
  },
  {
    "id": 2073,
    "sentence": "The chemical waste is ____ to the environment.",
    "options": ["hazard", "hazardous", "hazardously", "hazarded"],
    "answer": "hazardous",
    "explanation": "Hậu tố -ous: 'Hazardous' (nguy hiểm/độc hại). Tương tự như dangerous.",
    "topic": "Suffixes"
  },
  {
    "id": 2074,
    "sentence": "The decoration of the room was very ____.",
    "options": ["taste", "tasty", "tasteful", "tasteless"],
    "answer": "tasteful",
    "explanation": "Phân biệt: 'Tasteful' (có gu thẩm mỹ/trang nhã), 'Tasty' (ngon miệng - dùng cho đồ ăn). Nói về trang trí -> tasteful.",
    "topic": "Suffixes"
  },
  {
    "id": 2075,
    "sentence": "The wiring in the house is ____ and needs repair.",
    "options": ["fault", "faulty", "faultless", "faltering"],
    "answer": "faulty",
    "explanation": "Phân biệt: 'Faulty' (bị hỏng/có lỗi kỹ thuật), 'Faultless' (hoàn hảo/không có lỗi lầm). Cần sửa chữa -> faulty.",
    "topic": "Suffixes"
  },
  {
    "id": 2076,
    "sentence": "Signing the peace treaty was a ____ occasion.",
    "options": ["moment", "momentary", "momentous", "momentum"],
    "answer": "momentous",
    "explanation": "Phân biệt: 'Momentous' (quan trọng/có tính lịch sử), 'Momentary' (chốc lát/ngắn ngủi). Sự kiện ký hiệp ước -> momentous.",
    "topic": "Suffixes"
  },
  {
    "id": 2077,
    "sentence": "He is a ____ traveler who has visited 50 countries.",
    "options": ["season", "seasonal", "seasoned", "seasoning"],
    "answer": "seasoned",
    "explanation": "Tính từ 'Seasoned' (dày dạn kinh nghiệm/lão luyện). 'Seasonal' (theo mùa). Người du lịch nhiều -> seasoned traveler.",
    "topic": "Suffixes"
  },
  {
    "id": 2078,
    "sentence": "Please give a ____ translation of the text.",
    "options": ["literacy", "literary", "literal", "literate"],
    "answer": "literal",
    "explanation": "Phân biệt: 'Literal' (nghĩa đen/từng chữ), 'Literary' (thuộc văn học), 'Literate' (biết chữ). Dịch sát nghĩa -> literal translation.",
    "topic": "Suffixes"
  },
  {
    "id": 2079,
    "sentence": "She has become very ____ and refuses to listen.",
    "options": ["argue", "argument", "argumentative", "arguable"],
    "answer": "argumentative",
    "explanation": "Phân biệt: 'Argumentative' (thích tranh cãi/hay lý sự), 'Arguable' (đáng ngờ/có thể tranh luận). Chỉ tính cách người -> argumentative.",
    "topic": "Suffixes"
  },
  {
    "id": 2080,
    "sentence": "The new law is ____ immediately.",
    "options": ["effect", "effective", "efficient", "effectual"],
    "answer": "effective",
    "explanation": "Cụm từ 'Effective immediately' (có hiệu lực ngay lập tức). Phân biệt với 'Efficient' (năng suất cao/tiết kiệm).",
    "topic": "Suffixes"
  },
  {
    "id": 2081,
    "sentence": "Steve Jobs was known as a ____ leader.",
    "options": ["vision", "visible", "visual", "visionary"],
    "answer": "visionary",
    "explanation": "Phân biệt: 'Visionary' (có tầm nhìn xa trông rộng), 'Visual' (thuộc thị giác), 'Visible' (có thể nhìn thấy). Lãnh đạo -> visionary.",
    "topic": "Suffixes"
  },
  {
    "id": 2082,
    "sentence": "Despite the storm, the ship remained ____.",
    "options": ["float", "afloat", "floating", "floated"],
    "answer": "afloat",
    "explanation": "Tính từ bắt đầu bằng a- (predicative adjective) thường đứng sau to be/linking verb. 'Afloat' (nổi trên mặt nước/không bị chìm).",
    "topic": "Suffixes"
  },
  {
    "id": 2083,
    "sentence": "This is the most ____ apartment we have seen.",
    "options": ["space", "spacious", "spatial", "spacing"],
    "answer": "spacious",
    "explanation": "Phân biệt: 'Spacious' (rộng rãi), 'Spatial' (thuộc về không gian hình học). Căn hộ rộng -> spacious.",
    "topic": "Suffixes"
  },
  {
    "id": 2084,
    "sentence": "The heavy rain had a ____ effect on the harvest.",
    "options": ["disaster", "disastrous", "disastrously", "disasterous"],
    "answer": "disastrous",
    "explanation": "Hậu tố -ous biến 'disaster' thành tính từ. Lưu ý chính tả: bỏ 'e' -> disastrous (thảm khốc).",
    "topic": "Suffixes"
  },
  {
    "id": 2085,
    "sentence": "He gave a ____ performance in the final match.",
    "options": ["credit", "credible", "creditable", "credulous"],
    "answer": "creditable",
    "explanation": "Phân biệt: 'Creditable' (đáng khen ngợi), 'Credible' (đáng tin), 'Credulous' (nhẹ dạ cả tin). Màn trình diễn tốt -> creditable.",
    "topic": "Suffixes"
  },
  {
    "id": 2086,
    "sentence": "We received ____ complaints about the noise.",
    "options": ["number", "numerical", "numerous", "numbering"],
    "answer": "numerous",
    "explanation": "Phân biệt: 'Numerous' (nhiều/đông đảo), 'Numerical' (thuộc về số liệu). Nhiều phàn nàn -> numerous.",
    "topic": "Suffixes"
  },
  {
    "id": 2087,
    "sentence": "The touch screen is not very ____ to my fingers.",
    "options": ["respond", "response", "responsive", "responsible"],
    "answer": "responsive",
    "explanation": "Phân biệt: 'Responsive' (phản hồi nhanh/nhạy), 'Responsible' (có trách nhiệm). Màn hình cảm ứng nhạy -> responsive.",
    "topic": "Suffixes"
  },
  {
    "id": 2088,
    "sentence": "It is ____ for students to wear uniforms.",
    "options": ["compel", "compulsive", "compulsory", "compulsorily"],
    "answer": "compulsory",
    "explanation": "Phân biệt: 'Compulsory' (bắt buộc - do quy định), 'Compulsive' (không cưỡng lại được - thói quen, ví dụ: compulsive gambler). Quy định nhà trường -> compulsory.",
    "topic": "Suffixes"
  },
  {
    "id": 2089,
    "sentence": "She has a very ____ personality.",
    "options": ["dominate", "dominant", "domineering", "dominion"],
    "answer": "domineering",
    "explanation": "Phân biệt: 'Domineering' (độc đoán/thích ra lệnh - tiêu cực), 'Dominant' (trội hơn/chiếm ưu thế). Tính cách áp đặt người khác -> domineering.",
    "topic": "Suffixes"
  },
  {
    "id": 2090,
    "sentence": "Harvard is a highly ____ university.",
    "options": ["prestige", "prestigious", "prestigiously", "prestigiousness"],
    "answer": "prestigious",
    "explanation": "Hậu tố -ious: Prestigious (có uy tín lớn/danh giá).",
    "topic": "Suffixes"
  },
  {
    "id": 2091,
    "sentence": "His yawn was ____; soon everyone was yawning.",
    "options": ["contagion", "contagious", "contiguous", "contact"],
    "answer": "contagious",
    "explanation": "Phân biệt: 'Contagious' (lây lan - bệnh/cảm xúc), 'Contiguous' (giáp ranh/tiếp giáp). Ngáp lây -> contagious.",
    "topic": "Suffixes"
  },
  {
    "id": 2092,
    "sentence": "The information is ____ to outsiders.",
    "options": ["access", "accessible", "accessibly", "accession"],
    "answer": "accessible",
    "explanation": "Hậu tố -ible: Accessible (có thể tiếp cận được).",
    "topic": "Suffixes"
  },
  {
    "id": 2093,
    "sentence": "He is ____ regarding the outcome of the deal.",
    "options": ["apprehend", "apprehensive", "apprehensible", "apprehension"],
    "answer": "apprehensive",
    "explanation": "Phân biệt: 'Apprehensive' (lo lắng/e sợ), 'Apprehensible' (có thể hiểu được). Lo lắng về kết quả -> apprehensive.",
    "topic": "Suffixes"
  }
];

const PART5_ADJ_EASY = [
  {
    "id": 2044,
    "sentence": "Employees must wear ____ clothing in the factory area.",
    "options": ["protection", "protective", "protect", "protectively"],
    "answer": "protective",
    "explanation": "Cần một tính từ bổ nghĩa cho danh từ 'clothing'. Cụm từ phổ biến: 'protective clothing' (quần áo bảo hộ).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2045,
    "sentence": "The manager is ____ for overseeing the entire project.",
    "options": ["response", "responsibly", "responsible", "responsibility"],
    "answer": "responsible",
    "explanation": "Sau động từ to be 'is' và trước giới từ 'for', cần tính từ. Cấu trúc: 'be responsible for' (chịu trách nhiệm về).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2046,
    "sentence": "We offer ____ rates for long-term rentals.",
    "options": ["competition", "competitive", "competitor", "compete"],
    "answer": "competitive",
    "explanation": "Cần tính từ bổ nghĩa cho danh từ 'rates' (mức giá). 'Competitive rates' (mức giá cạnh tranh/giá tốt) là cụm từ rất hay gặp trong thương mại.",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2047,
    "sentence": "Please check the ____ date on the package.",
    "options": ["expire", "expiration", "expired", "expiring"],
    "answer": "expiration",
    "explanation": "Đây là trường hợp danh từ bổ nghĩa cho danh từ (Compound Noun). 'Expiration date' (ngày hết hạn). 'Expired' (đã hết hạn) là tính từ nhưng thường đứng sau to be hoặc đứng trước danh từ với nghĩa bị động, nhưng cụm cố định chỉ ngày tháng là 'expiration date'.",
    "topic": "Part 5 - Word Form"
  },
  {
    "id": 2048,
    "sentence": "The new software is ____ easy to install.",
    "options": ["extreme", "extremely", "extremist", "extremity"],
    "answer": "extremely",
    "explanation": "Trước tính từ 'easy' cần một trạng từ để chỉ mức độ. 'Extremely easy' (cực kỳ dễ).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2049,
    "sentence": "All information provided will be kept strictly ____.",
    "options": ["confide", "confidence", "confidential", "confidentially"],
    "answer": "confidential",
    "explanation": "Sau động từ 'kept' (keep + O + Adj) hoặc bị động 'be kept + Adj'. Cần tính từ: 'confidential' (bảo mật).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2050,
    "sentence": "The annual conference was ____ successful.",
    "options": ["high", "highly", "height", "heighten"],
    "answer": "highly",
    "explanation": "Trước tính từ 'successful' cần trạng từ chỉ mức độ. 'Highly successful' (rất thành công).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2051,
    "sentence": "Mr. Tan is ____ to participate in the seminar.",
    "options": ["eligibility", "eligible", "eligibly", "elite"],
    "answer": "eligible",
    "explanation": "Cấu trúc 'be eligible to V' hoặc 'be eligible for N' (đủ điều kiện/tư cách để làm gì). Cần tính từ.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2052,
    "sentence": "Please submit the report by the ____ deadline.",
    "options": ["revise", "revised", "revision", "revising"],
    "answer": "revised",
    "explanation": "Cần tính từ bổ nghĩa cho 'deadline'. Dùng V-ed (phân từ quá khứ) mang nghĩa bị động: 'revised deadline' (hạn chót đã được điều chỉnh).",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2053,
    "sentence": "Access to the server is ____ unavailable.",
    "options": ["temporary", "temporarily", "temp", "temporariness"],
    "answer": "temporarily",
    "explanation": "Sau to be 'is' và trước tính từ 'unavailable', cần trạng từ bổ nghĩa cho tính từ đó. 'Temporarily unavailable' (tạm thời không khả dụng).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2054,
    "sentence": "We are looking for a ____ assistant.",
    "options": ["rely", "reliability", "reliable", "reliably"],
    "answer": "reliable",
    "explanation": "Cần tính từ bổ nghĩa cho danh từ chỉ người 'assistant'. 'Reliable' (đáng tin cậy).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2055,
    "sentence": "The hotel offers ____ rooms at affordable prices.",
    "options": ["space", "spacing", "spacious", "spaciously"],
    "answer": "spacious",
    "explanation": "Cần tính từ bổ nghĩa cho 'rooms'. 'Spacious' (rộng rãi).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2056,
    "sentence": "This measure is necessary to ensure customer ____.",
    "options": ["satisfy", "satisfaction", "satisfactory", "satisfied"],
    "answer": "satisfaction",
    "explanation": "Sau động từ 'ensure' và danh từ phụ 'customer', cần danh từ chính. 'Customer satisfaction' (sự hài lòng của khách hàng) là cụm danh từ ghép phổ biến.",
    "topic": "Part 5 - Word Form"
  },
  {
    "id": 2057,
    "sentence": "The instructions are ____ to follow.",
    "options": ["simple", "simply", "simplify", "simplicity"],
    "answer": "simple",
    "explanation": "Sau to be 'are' cần tính từ. Cấu trúc 'be + Adj + to V'. 'Simple to follow' (đơn giản để làm theo).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2058,
    "sentence": "The marketing team has developed an ____ strategy.",
    "options": ["impress", "impression", "impressive", "impressively"],
    "answer": "impressive",
    "explanation": "Sau mạo từ 'an' và trước danh từ 'strategy', cần tính từ. 'Impressive' (ấn tượng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2059,
    "sentence": "Please remain ____ while the bus is in motion.",
    "options": ["seat", "seated", "seating", "seats"],
    "answer": "seated",
    "explanation": "Sau động từ nối 'remain' cần tính từ. 'Seated' (ở tư thế ngồi/yên vị) là tính từ dạng bị động.",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2060,
    "sentence": "Regular maintenance is ____ for optimal performance.",
    "options": ["essence", "essential", "essentially", "essentials"],
    "answer": "essential",
    "explanation": "Sau to be 'is' cần tính từ. 'Essential' (cần thiết/thiết yếu).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2061,
    "sentence": "The brochure provides ____ information about the tour.",
    "options": ["add", "addition", "additional", "additionally"],
    "answer": "additional",
    "explanation": "Trước danh từ 'information' cần tính từ. 'Additional information' (thông tin thêm/bổ sung).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2062,
    "sentence": "He is a ____ respected expert in his field.",
    "options": ["wide", "widely", "widen", "width"],
    "answer": "widely",
    "explanation": "Trước cụm tính từ 'respected expert', cần trạng từ chỉ mức độ. 'Widely respected' (được tôn trọng rộng rãi).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2063,
    "sentence": "The item you requested is currently ____ stock.",
    "options": ["out", "out of", "outing", "outer"],
    "answer": "out of",
    "explanation": "Cụm từ cố định 'out of stock' (hết hàng). Mặc dù không phải là tính từ đơn lẻ, cụm này đóng vai trò như tính từ (Predicative Adjective phrase).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2064,
    "sentence": "We hope to establish a mutually ____ relationship.",
    "options": ["benefit", "beneficial", "beneficially", "beneficiary"],
    "answer": "beneficial",
    "explanation": "Cụm từ cố định 'mutually beneficial' (đôi bên cùng có lợi). Trạng từ 'mutually' bổ nghĩa cho tính từ 'beneficial'.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2065,
    "sentence": "The hotel is ____ located near the city center.",
    "options": ["convenience", "convenient", "conveniently", "convene"],
    "answer": "conveniently",
    "explanation": "Cấu trúc 'be + Adv + Adj/V_ed'. 'Conveniently located' (có vị trí thuận lợi) là cụm rất hay gặp trong quảng cáo/du lịch.",
    "topic": "Part 5 - Adverbs modifying Participles"
  },
  {
    "id": 2066,
    "sentence": "Please review the attached ____ documents.",
    "options": ["finance", "financial", "financially", "finances"],
    "answer": "financial",
    "explanation": "Trước danh từ 'documents' cần tính từ. 'Financial documents' (tài liệu tài chính).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2067,
    "sentence": "Employees must be ____ with the new safety regulations.",
    "options": ["family", "familiarize", "familiarity", "familiar"],
    "answer": "familiar",
    "explanation": "Cấu trúc 'be familiar with' (quen thuộc với/nắm rõ cái gì).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2068,
    "sentence": "The CEO made a ____ decision to cut costs.",
    "options": ["strategy", "strategic", "strategically", "strategies"],
    "answer": "strategic",
    "explanation": "Trước danh từ 'decision' cần tính từ. 'Strategic decision' (quyết định mang tính chiến lược).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2069,
    "sentence": "There has been a ____ increase in sales this quarter.",
    "options": ["signify", "significant", "significance", "significantly"],
    "answer": "significant",
    "explanation": "Trước danh từ 'increase' cần tính từ để chỉ mức độ. 'Significant increase' (sự gia tăng đáng kể).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2070,
    "sentence": "This ticket is only ____ for three days.",
    "options": ["valid", "validate", "validity", "validly"],
    "answer": "valid",
    "explanation": "Sau động từ to be 'is' cần tính từ. 'Valid' (có hiệu lực).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2071,
    "sentence": "We are seeking a highly ____ candidate for the job.",
    "options": ["motivation", "motivated", "motivate", "motivating"],
    "answer": "motivated",
    "explanation": "Cụm 'highly motivated' (có động lực cao/nhiệt huyết). Dùng V-ed vì mô tả trạng thái của người.",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2072,
    "sentence": "The system requires ____ maintenance.",
    "options": ["period", "periodic", "periodically", "periodical"],
    "answer": "periodic",
    "explanation": "Trước danh từ 'maintenance' (sự bảo trì) cần tính từ. 'Periodic' (định kỳ).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2073,
    "sentence": "The seminar was quite ____ to all attendees.",
    "options": ["inform", "information", "informative", "informatively"],
    "answer": "informative",
    "explanation": "Sau to be 'was' cần tính từ. 'Informative' (chứa nhiều thông tin bổ ích).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2074,
    "sentence": "Please replace any ____ equipment immediately.",
    "options": ["defect", "defective", "defectively", "defection"],
    "answer": "defective",
    "explanation": "Trước danh từ 'equipment' cần tính từ. 'Defective' (bị lỗi/hỏng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2075,
    "sentence": "Attendance at the meeting is ____ for all staff.",
    "options": ["mandate", "mandatory", "mandatorily", "mandates"],
    "answer": "mandatory",
    "explanation": "Sau to be 'is' cần tính từ. 'Mandatory' (bắt buộc).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2076,
    "sentence": "We need to conduct a ____ market analysis.",
    "options": ["thorough", "through", "thought", "though"],
    "answer": "thorough",
    "explanation": "Cần tính từ mang nghĩa 'kỹ lưỡng/chi tiết'. 'Thorough' (tỉ mỉ/cẩn thận). Các từ còn lại là giới từ hoặc từ nối dễ gây nhầm lẫn.",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2077,
    "sentence": "The project was completed in a ____ manner.",
    "options": ["time", "timely", "timing", "timed"],
    "answer": "timely",
    "explanation": "Cụm 'in a timely manner' (một cách kịp thời). Lưu ý: 'Timely' là tính từ dù có đuôi -ly.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2078,
    "sentence": "She has ____ experience in project management.",
    "options": ["extend", "extension", "extensive", "extensively"],
    "answer": "extensive",
    "explanation": "Trước danh từ 'experience' cần tính từ chỉ mức độ rộng. 'Extensive experience' (kinh nghiệm dày dạn/sâu rộng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2079,
    "sentence": "The warehouse is located in a ____ area.",
    "options": ["secure", "security", "securely", "securing"],
    "answer": "secure",
    "explanation": "Trước danh từ 'area' cần tính từ. 'Secure' (an toàn/được bảo vệ). 'Security area' cũng có nghĩa nhưng 'secure area' phổ biến hơn khi tả tính chất.",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2080,
    "sentence": "We apologize for any ____ inconvenience.",
    "options": ["possible", "potential", "power", "possibly"],
    "answer": "potential",
    "explanation": "Trước danh từ 'inconvenience' cần tính từ. 'Potential inconvenience' (sự bất tiện có thể xảy ra).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2081,
    "sentence": "The updated software is ____ with older systems.",
    "options": ["compatibly", "compatibility", "compatible", "compete"],
    "answer": "compatible",
    "explanation": "Cấu trúc 'be compatible with' (tương thích với).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2082,
    "sentence": "Please keep your receipt as ____ of purchase.",
    "options": ["proof", "prove", "proven", "proofing"],
    "answer": "proof",
    "explanation": "Sau 'as' cần danh từ. 'Proof of purchase' (bằng chứng mua hàng). Đây là câu hỏi Word Form về Danh từ để thay đổi không khí.",
    "topic": "Part 5 - Word Form"
  },
  {
    "id": 2083,
    "sentence": "The instructions are ____ and precise.",
    "options": ["clear", "clarity", "clearly", "clearness"],
    "answer": "clear",
    "explanation": "Sau to be 'are' cần tính từ, song song với tính từ 'precise'. 'Clear' (rõ ràng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2084,
    "sentence": "Smoking is strictly ____ inside the building.",
    "options": ["prohibit", "prohibited", "prohibition", "prohibiting"],
    "answer": "prohibited",
    "explanation": "Cấu trúc bị động 'be + Adv + V_ed'. 'Strictly prohibited' (bị nghiêm cấm).",
    "topic": "Part 5 - Adverbs modifying Participles"
  },
  {
    "id": 2085,
    "sentence": "We discussed the ____ changes to the policy.",
    "options": ["recent", "recently", "recency", "recentness"],
    "answer": "recent",
    "explanation": "Trước danh từ 'changes' cần tính từ. 'Recent changes' (những thay đổi gần đây).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2086,
    "sentence": "The team is working ____ to meet the deadline.",
    "options": ["close", "closely", "closed", "closer"],
    "answer": "closely",
    "explanation": "Sau động từ 'working' cần trạng từ. 'Work closely' (làm việc sát sao/chặt chẽ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2087,
    "sentence": "Please give a ____ summary of the project.",
    "options": ["brief", "briefly", "brevity", "briefing"],
    "answer": "brief",
    "explanation": "Trước danh từ 'summary' cần tính từ. 'Brief summary' (bản tóm tắt ngắn gọn).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2088,
    "sentence": "He is a ____ traveler to Japan.",
    "options": ["frequency", "frequent", "frequently", "frequented"],
    "answer": "frequent",
    "explanation": "Trước danh từ chỉ người 'traveler' cần tính từ. 'Frequent traveler' (người hay đi du lịch/khách quen).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2089,
    "sentence": "The country is facing slow ____ growth.",
    "options": ["economy", "economic", "economical", "economist"],
    "answer": "economic",
    "explanation": "Trước danh từ 'growth' cần tính từ. 'Economic growth' (tăng trưởng kinh tế). Phân biệt với 'economical' (tiết kiệm).",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2090,
    "sentence": "Our products are ____ friendly.",
    "options": ["environment", "environmental", "environmentally", "environments"],
    "answer": "environmentally",
    "explanation": "Trước tính từ 'friendly' cần trạng từ. Cụm 'environmentally friendly' (thân thiện với môi trường).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2091,
    "sentence": "There is an ____ need for medical supplies.",
    "options": ["urge", "urgent", "urgency", "urgently"],
    "answer": "urgent",
    "explanation": "Trước danh từ 'need' cần tính từ. 'Urgent need' (nhu cầu cấp thiết).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2092,
    "sentence": "We offer discounts to ____ residents.",
    "options": ["local", "locally", "locality", "localize"],
    "answer": "local",
    "explanation": "Trước danh từ 'residents' cần tính từ. 'Local residents' (cư dân địa phương).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2093,
    "sentence": "This software is ____ designed for architects.",
    "options": ["specific", "specifically", "specify", "specification"],
    "answer": "specifically",
    "explanation": "Bổ nghĩa cho động từ/phân từ 'designed' cần trạng từ. 'Specifically designed' (được thiết kế đặc biệt/riêng biệt).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2094,
    "sentence": "Customer feedback is ____ important to us.",
    "options": ["extreme", "extremely", "extremity", "extremist"],
    "answer": "extremely",
    "explanation": "Trước tính từ 'important' cần trạng từ chỉ mức độ. 'Extremely important' (cực kỳ quan trọng).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2095,
    "sentence": "We have ____ options for shipping.",
    "options": ["vary", "variety", "various", "variously"],
    "answer": "various",
    "explanation": "Trước danh từ 'options' cần tính từ. 'Various options' (nhiều lựa chọn khác nhau).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2096,
    "sentence": "Please follow the ____ procedure.",
    "options": ["stand", "standard", "standardize", "standardly"],
    "answer": "standard",
    "explanation": "Trước danh từ 'procedure' cần tính từ. 'Standard procedure' (quy trình chuẩn).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2097,
    "sentence": "You must present the ____ receipt for a refund.",
    "options": ["origin", "original", "originally", "originate"],
    "answer": "original",
    "explanation": "Trước danh từ 'receipt' cần tính từ. 'Original receipt' (hóa đơn gốc).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2098,
    "sentence": "The product comes with a ____ warranty.",
    "options": ["limit", "limited", "limitation", "limiting"],
    "answer": "limited",
    "explanation": "Trước danh từ 'warranty' cần tính từ. 'Limited warranty' (bảo hành có giới hạn).",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2099,
    "sentence": "Guests are expected to wear ____ attire.",
    "options": ["formality", "formal", "formally", "formalize"],
    "answer": "formal",
    "explanation": "Trước danh từ 'attire' (trang phục) cần tính từ. 'Formal attire' (trang phục trang trọng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2100,
    "sentence": "Do you have any ____ experience in sales?",
    "options": ["previous", "previously", "preview", "prevention"],
    "answer": "previous",
    "explanation": "Trước danh từ 'experience' cần tính từ. 'Previous experience' (kinh nghiệm trước đây).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2101,
    "sentence": "The item is ____ out of stock.",
    "options": ["current", "currently", "currency", "concurrent"],
    "answer": "currently",
    "explanation": "Trước cụm tính từ/giới từ 'out of stock' cần trạng từ chỉ thời gian. 'Currently out of stock' (hiện đang hết hàng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2102,
    "sentence": "We had a very ____ meeting yesterday.",
    "options": ["produce", "product", "productive", "productively"],
    "answer": "productive",
    "explanation": "Trước danh từ 'meeting' cần tính từ. 'Productive meeting' (cuộc họp hiệu quả/năng suất).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2103,
    "sentence": "Thank you for your ____ response.",
    "options": ["prompt", "promptly", "promptness", "prompted"],
    "answer": "prompt",
    "explanation": "Trước danh từ 'response' cần tính từ. 'Prompt response' (phản hồi nhanh chóng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2104,
    "sentence": "We are seeking a ____ solution to the problem.",
    "options": ["last", "lasting", "lastly", "lasted"],
    "answer": "lasting",
    "explanation": "Trước danh từ 'solution' cần tính từ. 'Lasting solution' (giải pháp lâu dài/bền vững).",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2105,
    "sentence": "The manual provides ____ instructions for assembly.",
    "options": ["specialize", "specific", "specifically", "specification"],
    "answer": "specific",
    "explanation": "Trước danh từ 'instructions' cần tính từ. 'Specific instructions' (hướng dẫn cụ thể).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2106,
    "sentence": "The hotel is ____ for its excellent service.",
    "options": ["know", "knew", "known", "knowledge"],
    "answer": "known",
    "explanation": "Cấu trúc 'be known for' (nổi tiếng vì cái gì). Dạng bị động của động từ 'know'.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2107,
    "sentence": "Please exercise ____ when handling these chemicals.",
    "options": ["cautious", "caution", "cautiously", "precaution"],
    "answer": "caution",
    "explanation": "Sau động từ 'exercise' (thực hiện/dùng) cần danh từ. 'Exercise caution' (thận trọng).",
    "topic": "Part 5 - Word Form"
  },
  {
    "id": 2108,
    "sentence": "The updated policy is ____ immediately.",
    "options": ["effect", "effective", "effectively", "effectiveness"],
    "answer": "effective",
    "explanation": "Sau to be 'is' cần tính từ. 'Effective immediately' (có hiệu lực ngay lập tức).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2109,
    "sentence": "We have seen a ____ decline in profits.",
    "options": ["sharp", "sharpen", "sharply", "sharpness"],
    "answer": "sharp",
    "explanation": "Trước danh từ 'decline' cần tính từ. 'Sharp decline' (sự sụt giảm mạnh/đột ngột).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2110,
    "sentence": "The manager ____ recommended Ms. Lee for the promotion.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "highly",
    "explanation": "Bổ nghĩa cho động từ 'recommended' cần trạng từ. 'Highly recommended' (đánh giá rất cao/rất đề xuất).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2111,
    "sentence": "There is an ____ demand for electric cars.",
    "options": ["increase", "increasing", "increasingly", "increased"],
    "answer": "increasing",
    "explanation": "Trước danh từ 'demand' cần tính từ. 'Increasing demand' (nhu cầu đang tăng lên - nhấn mạnh tính tiếp diễn).",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2112,
    "sentence": "The results of the survey were ____.",
    "options": ["predict", "prediction", "predictable", "predictably"],
    "answer": "predictable",
    "explanation": "Sau to be 'were' cần tính từ. 'Predictable' (có thể đoán trước được).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2113,
    "sentence": "He is ____ capable of handling the task.",
    "options": ["full", "fully", "fullness", "filled"],
    "answer": "fully",
    "explanation": "Trước tính từ 'capable' cần trạng từ chỉ mức độ. 'Fully capable' (hoàn toàn có khả năng).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2114,
    "sentence": "Please provide a ____ description of the item.",
    "options": ["detail", "detailed", "detailing", "details"],
    "answer": "detailed",
    "explanation": "Trước danh từ 'description' cần tính từ. 'Detailed description' (mô tả chi tiết - được làm chi tiết).",
    "topic": "Part 5 - Participle Adjectives"
  },
  {
    "id": 2115,
    "sentence": "The fee is ____ upon registration.",
    "options": ["pay", "payment", "payable", "payer"],
    "answer": "payable",
    "explanation": "Sau to be 'is' cần tính từ. 'Payable' (phải trả/có thể trả).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2116,
    "sentence": "It is ____ to book your flight in advance.",
    "options": ["advice", "advise", "advisable", "advisor"],
    "answer": "advisable",
    "explanation": "Cấu trúc 'It is + adj + to V'. 'Advisable' (được khuyến khích/nên làm).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2117,
    "sentence": "The information on the website is not ____.",
    "options": ["accuracy", "accurate", "accurately", "accurateness"],
    "answer": "accurate",
    "explanation": "Sau to be 'is' cần tính từ. 'Accurate' (chính xác).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2118,
    "sentence": "We need to make a ____ decision soon.",
    "options": ["final", "finally", "finalize", "finalist"],
    "answer": "final",
    "explanation": "Trước danh từ 'decision' cần tính từ. 'Final decision' (quyết định cuối cùng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2119,
    "sentence": "The train runs ____ every 30 minutes.",
    "options": ["regular", "regularity", "regularly", "regulate"],
    "answer": "regularly",
    "explanation": "Bổ nghĩa cho động từ 'runs' (chạy/hoạt động) cần trạng từ. 'Runs regularly' (chạy đều đặn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2120,
    "sentence": "We apologize for the ____ delivery.",
    "options": ["late", "lately", "latenss", "later"],
    "answer": "late",
    "explanation": "Trước danh từ 'delivery' cần tính từ. 'Late delivery' (giao hàng muộn). Lưu ý: 'Lately' là trạng từ nghĩa là 'gần đây', không dùng bổ nghĩa cho danh từ trong trường hợp này.",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2121,
    "sentence": "The contract is ____ for another year.",
    "options": ["renew", "renewable", "renewal", "renewed"],
    "answer": "renewable",
    "explanation": "Sau to be 'is' cần tính từ. 'Renewable' (có thể gia hạn).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2122,
    "sentence": "She is ____ qualified for the position.",
    "options": ["suit", "suitable", "suitably", "suitability"],
    "answer": "suitably",
    "explanation": "Trước tính từ/phân từ 'qualified' cần trạng từ. 'Suitably qualified' (có trình độ phù hợp).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2123,
    "sentence": "This offer is ____ to new customers only.",
    "options": ["exclusive", "exclude", "exclusion", "exclusively"],
    "answer": "exclusive",
    "explanation": "Sau to be 'is' và đi với giới từ 'to', cần tính từ. 'Exclusive to' (dành riêng cho).",
    "topic": "Part 5 - Adjectives"
  }
];

const PART5_ADJ_HARD = [
  {
    "id": 2054,
    "sentence": "____, we decided to proceed with the merger despite the risks.",
    "options": ["Ultimate", "Ultimately", "Ultimatum", "Ultimates"],
    "answer": "Ultimately",
    "explanation": "Đứng đầu câu, ngăn cách bởi dấu phẩy, bổ nghĩa cho cả mệnh đề phía sau -> Cần trạng từ: Ultimately (Cuối cùng thì/Sau cùng).",
    "topic": "Part 5 - Adverbs modifying Sentences"
  },
  {
    "id": 2055,
    "sentence": "The director remained ____ optimistic about the project's success.",
    "options": ["cautious", "caution", "cautiously", "cautions"],
    "answer": "cautiously",
    "explanation": "Bổ nghĩa cho tính từ 'optimistic' cần trạng từ. Cụm 'cautiously optimistic' (lạc quan một cách thận trọng) là cụm từ rất hay gặp trong báo chí kinh doanh.",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2056,
    "sentence": "Guests are ____ advised to keep their valuables in the safe.",
    "options": ["strong", "strength", "strongly", "strengthen"],
    "answer": "strongly",
    "explanation": "Bổ nghĩa cho động từ bị động 'advised' cần trạng từ. 'Strongly advised' (được khuyến cáo mạnh mẽ).",
    "topic": "Part 5 - Adverbs modifying Verbs"
  },
  {
    "id": 2057,
    "sentence": "The technician found the instructions ____ complicated.",
    "options": ["overwhelm", "overwhelmingly", "overwhelmed", "overwhelming"],
    "answer": "overwhelmingly",
    "explanation": "Cấu trúc: 'found + O + Adj'. Tuy nhiên, ở đây 'complicated' đã là tính từ rồi. Từ cần điền đứng trước tính từ để bổ nghĩa mức độ -> Cần trạng từ: Overwhelmingly (cực kỳ/quá mức).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2058,
    "sentence": "It is ____ unlikely that the price will drop soon.",
    "options": ["high", "highly", "height", "heighten"],
    "answer": "highly",
    "explanation": "Bổ nghĩa cho tính từ 'unlikely' cần trạng từ chỉ mức độ cao. 'Highly unlikely' (cực kỳ khó xảy ra/rất ít khả năng).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2059,
    "sentence": "The marketing campaign was ____ succesful than anticipated.",
    "options": ["more", "much", "far", "very"],
    "answer": "more",
    "explanation": "Câu so sánh hơn (có 'than' phía sau). Cấu trúc: 'more + adj dài + than'. Đáp án là 'more'. ('Far' hoặc 'much' dùng để nhấn mạnh so sánh hơn: 'far more successful', nhưng ở đây chỉ cần 'more' để tạo thành cấu trúc so sánh).",
    "topic": "Part 5 - Comparatives"
  },
  {
    "id": 2060,
    "sentence": "Unless ____ noted, all meetings will be held in Room B.",
    "options": ["other", "others", "otherwise", "otherness"],
    "answer": "otherwise",
    "explanation": "Cụm từ cố định 'Unless otherwise noted' (Trừ khi có ghi chú khác). Đây là dạng rút gọn của mệnh đề bị động.",
    "topic": "Part 5 - Fixed Expressions"
  },
  {
    "id": 2061,
    "sentence": "The CEO is ____ available for interviews.",
    "options": ["rare", "rarely", "rareness", "rarity"],
    "answer": "rarely",
    "explanation": "Trạng từ tần suất đứng sau to be. 'Rarely available' (hiếm khi rảnh/có mặt).",
    "topic": "Part 5 - Adverbs of Frequency"
  },
  {
    "id": 2062,
    "sentence": "Please ensure that the form is ____ completed.",
    "options": ["proper", "property", "properly", "properties"],
    "answer": "properly",
    "explanation": "Bổ nghĩa cho phân từ quá khứ 'completed' (trong cấu trúc bị động 'is completed') cần trạng từ chỉ cách thức. 'Properly completed' (được điền/hoàn thành đúng cách).",
    "topic": "Part 5 - Adverbs modifying Participles"
  },
  {
    "id": 2063,
    "sentence": "The team worked ____ to finish the proposal on time.",
    "options": ["hardly", "hard", "harder", "hardness"],
    "answer": "hard",
    "explanation": "Phân biệt: 'Hard' (chăm chỉ/vất vả) vừa là tính từ vừa là trạng từ. 'Hardly' (hầu như không). Ngữ cảnh 'làm việc để kịp tiến độ' -> Cần nghĩa 'chăm chỉ' -> hard.",
    "topic": "Part 5 - Confusing Adverbs"
  },
  {
    "id": 2064,
    "sentence": "The decision was made ____ independent of the board.",
    "options": ["complete", "completely", "completion", "completed"],
    "answer": "completely",
    "explanation": "Bổ nghĩa cho tính từ 'independent' cần trạng từ. 'Completely independent' (hoàn toàn độc lập).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2065,
    "sentence": "____ representative will contact you shortly.",
    "options": ["Sale", "Sales", "Selling", "Sold"],
    "answer": "Sales",
    "explanation": "Danh từ ghép (Compound Noun). 'Sales representative' (đại diện bán hàng). Dùng danh từ số nhiều 'Sales' để làm định ngữ.",
    "topic": "Part 5 - Noun Adjuncts"
  },
  {
    "id": 2066,
    "sentence": "The negotiations are currently in a ____ stage.",
    "options": ["delicate", "delicately", "delicacy", "delicious"],
    "answer": "delicate",
    "explanation": "Trước danh từ 'stage' (giai đoạn) cần tính từ. 'Delicate stage' (giai đoạn nhạy cảm/mong manh).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2067,
    "sentence": "He is ____ regarding the details of the contract.",
    "options": ["hesitate", "hesitation", "hesitant", "hesitantly"],
    "answer": "hesitant",
    "explanation": "Sau động từ to be 'is' cần tính từ chỉ trạng thái người. 'Hesitant' (do dự/lưỡng lự).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2068,
    "sentence": "The revised schedule is attached for your ____ review.",
    "options": ["convenience", "convenient", "conveniently", "convene"],
    "answer": "convenient",
    "explanation": "Thường gặp cụm 'for your convenience' (danh từ). Tuy nhiên, ở đây 'review' là danh từ chính, nên từ đứng trước phải là tính từ bổ nghĩa cho 'review'. 'Convenient review' (việc xem xét thuận tiện). *Lưu ý*: Câu này hơi gài. Nếu không có 'review', đáp án là 'convenience' (for your convenience). Có 'review' -> convenient.",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2069,
    "sentence": "Production has increased ____ since the new machinery arrived.",
    "options": ["drama", "dramatic", "dramatically", "dramatist"],
    "answer": "dramatically",
    "explanation": "Bổ nghĩa cho động từ 'increased' cần trạng từ. 'Increased dramatically' (tăng đột biến/mạnh mẽ).",
    "topic": "Part 5 - Adverbs modifying Verbs"
  },
  {
    "id": 2070,
    "sentence": "We need a ____ appraisal of the property value.",
    "options": ["real", "realize", "reality", "realistic"],
    "answer": "realistic",
    "explanation": "Trước danh từ 'appraisal' (sự định giá) cần tính từ. 'Realistic appraisal' (sự định giá thực tế/sát thực).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2071,
    "sentence": "This chemical is ____ dangerous if inhaled.",
    "options": ["potential", "potentially", "potentiality", "potent"],
    "answer": "potentially",
    "explanation": "Bổ nghĩa cho tính từ 'dangerous' cần trạng từ. 'Potentially dangerous' (có tiềm năng gây nguy hiểm).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2072,
    "sentence": "The system is ____ checked for errors.",
    "options": ["routine", "routinely", "routed", "routing"],
    "answer": "routinely",
    "explanation": "Bổ nghĩa cho động từ bị động 'checked' cần trạng từ chỉ tần suất/cách thức. 'Routinely checked' (được kiểm tra thường xuyên/định kỳ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2073,
    "sentence": "____ enough, the sales figures were better than expected.",
    "options": ["Surprise", "Surprising", "Surprisingly", "Surprised"],
    "answer": "Surprisingly",
    "explanation": "Cụm từ cố định đứng đầu câu: 'Surprisingly enough' (Khá bất ngờ là...). Bổ nghĩa cho cả câu.",
    "topic": "Part 5 - Sentence Adverbs"
  },
  {
    "id": 2074,
    "sentence": "The manual is ____ available online.",
    "options": ["ready", "readily", "readiness", "reading"],
    "answer": "readily",
    "explanation": "Cụm từ cố định 'readily available' (có sẵn/dễ dàng tìm thấy). Trạng từ 'readily' bổ nghĩa cho tính từ 'available'.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2075,
    "sentence": "Online shopping has become ____ popular.",
    "options": ["increase", "increasing", "increasingly", "increased"],
    "answer": "increasingly",
    "explanation": "Trước tính từ 'popular' cần trạng từ. 'Increasingly popular' (ngày càng phổ biến).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2076,
    "sentence": "The new headquarters is ____ located near the airport.",
    "options": ["strategy", "strategic", "strategically", "strategies"],
    "answer": "strategically",
    "explanation": "Bổ nghĩa cho động từ/phân từ 'located' cần trạng từ. 'Strategically located' (có vị trí chiến lược).",
    "topic": "Part 5 - Adverbs modifying Participles"
  },
  {
    "id": 2077,
    "sentence": "Bad weather could ____ affect the shipment schedule.",
    "options": ["adverse", "adversely", "adversity", "adversary"],
    "answer": "adversely",
    "explanation": "Bổ nghĩa cho động từ 'affect' cần trạng từ. 'Adversely affect' (ảnh hưởng tiêu cực/bất lợi). Đây là collocation rất phổ biến.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2078,
    "sentence": "Ensure that the seatbelt is ____ fastened.",
    "options": ["secure", "security", "securely", "securing"],
    "answer": "securely",
    "explanation": "Bổ nghĩa cho phân từ 'fastened' (được thắt chặt) cần trạng từ. 'Securely fastened' (được thắt chặt an toàn/chắc chắn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2079,
    "sentence": "Please pay the ____ balance by the end of the month.",
    "options": ["outstand", "outstanding", "outstandingly", "standard"],
    "answer": "outstanding",
    "explanation": "Tính từ 'Outstanding' trong ngữ cảnh tài chính có nghĩa là 'chưa thanh toán/còn nợ'. 'Outstanding balance' (số dư nợ).",
    "topic": "Part 5 - Business Vocabulary"
  },
  {
    "id": 2080,
    "sentence": "It has rained for three ____ days.",
    "options": ["consecutive", "consequence", "consecutively", "consequent"],
    "answer": "consecutive",
    "explanation": "Trước danh từ 'days' cần tính từ. 'Consecutive days' (ngày liên tiếp).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2081,
    "sentence": "We have created a ____ schedule for the conference.",
    "options": ["tentative", "tentatively", "intent", "intention"],
    "answer": "tentative",
    "explanation": "Trước danh từ 'schedule' cần tính từ. 'Tentative schedule' (lịch trình dự kiến/tạm thời - có thể thay đổi).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2082,
    "sentence": "The company faced ____ demand for its new product.",
    "options": ["precedent", "unprecedented", "precede", "precedence"],
    "answer": "unprecedented",
    "explanation": "Trước danh từ 'demand' cần tính từ. 'Unprecedented demand' (nhu cầu chưa từng có tiền lệ/cao kỷ lục).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2083,
    "sentence": "Due to the ____ nature of the document, it cannot be copied.",
    "options": ["confide", "confident", "confidential", "confidence"],
    "answer": "confidential",
    "explanation": "Trước danh từ 'nature' (tính chất) cần tính từ. 'Confidential nature' (tính chất bảo mật).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2084,
    "sentence": "Ms. Green has ____ knowledge of international law.",
    "options": ["extend", "extensive", "extension", "extensively"],
    "answer": "extensive",
    "explanation": "Trước danh từ 'knowledge' cần tính từ chỉ mức độ rộng. 'Extensive knowledge' (kiến thức sâu rộng).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2085,
    "sentence": "We must ____ decline your offer.",
    "options": ["respect", "respectful", "respectfully", "respective"],
    "answer": "respectfully",
    "explanation": "Bổ nghĩa cho động từ 'decline' (từ chối) cần trạng từ. 'Respectfully decline' (từ chối một cách trân trọng/lịch sự).",
    "topic": "Part 5 - Adverbs modifying Verbs"
  },
  {
    "id": 2086,
    "sentence": "Production costs remain ____ low.",
    "options": ["compare", "comparative", "comparatively", "comparison"],
    "answer": "comparatively",
    "explanation": "Trước tính từ 'low' cần trạng từ chỉ mức độ. 'Comparatively low' (tương đối thấp).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2087,
    "sentence": "The company will reimburse any ____ expenses.",
    "options": ["incident", "incidental", "incidentally", "incidence"],
    "answer": "incidental",
    "explanation": "Trước danh từ 'expenses' cần tính từ. 'Incidental expenses' (chi phí phát sinh/phụ phí).",
    "topic": "Part 5 - Business Vocabulary"
  },
  {
    "id": 2088,
    "sentence": "Photography is ____ forbidden in the gallery.",
    "options": ["express", "expressive", "expressly", "expression"],
    "answer": "expressly",
    "explanation": "Bổ nghĩa cho 'forbidden' (bị cấm). 'Expressly forbidden' (bị nghiêm cấm một cách rõ ràng/cụ thể).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2089,
    "sentence": "Staff are preparing for the ____ arrival of the CEO.",
    "options": ["imminent", "imminently", "immense", "immensely"],
    "answer": "imminent",
    "explanation": "Trước danh từ 'arrival' cần tính từ. 'Imminent arrival' (sự đến nơi sắp xảy ra/cận kề). Phân biệt với 'immense' (bao la/to lớn).",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2090,
    "sentence": "We have invested a ____ amount of money.",
    "options": ["substance", "substantial", "substantially", "substantiate"],
    "answer": "substantial",
    "explanation": "Trước danh từ 'amount' cần tính từ. 'Substantial amount' (số lượng đáng kể/lớn).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2091,
    "sentence": "The event was ____ planned to ensure success.",
    "options": ["meticulous", "meticulously", "meticulousness", "merit"],
    "answer": "meticulously",
    "explanation": "Bổ nghĩa cho động từ/phân từ 'planned' cần trạng từ. 'Meticulously planned' (được lên kế hoạch tỉ mỉ/kỹ càng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2092,
    "sentence": "The project received ____ approval from the board.",
    "options": ["provision", "provisional", "provisionally", "provide"],
    "answer": "provisional",
    "explanation": "Trước danh từ 'approval' cần tính từ. 'Provisional approval' (phê duyệt tạm thời/có điều kiện).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2093,
    "sentence": "It is more ____ to buy in bulk.",
    "options": ["economy", "economic", "economical", "economist"],
    "answer": "economical",
    "explanation": "Sau động từ to be và 'more', cần tính từ mang nghĩa 'tiết kiệm/hiệu quả về chi phí'. 'Economical' (tiết kiệm), trong khi 'economic' (thuộc về nền kinh tế).",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2094,
    "sentence": "The decision to merge was ____.",
    "options": ["unanimous", "anonymity", "unanimously", "animated"],
    "answer": "unanimous",
    "explanation": "Sau to be 'was' cần tính từ. 'Unanimous' (nhất trí/đồng lòng). Phân biệt với 'anonymous' (ẩn danh).",
    "topic": "Part 5 - Advanced Vocabulary"
  },
  {
    "id": 2095,
    "sentence": "It is ____ impossible to predict the outcome.",
    "options": ["virtual", "virtually", "virtue", "virtuous"],
    "answer": "virtually",
    "explanation": "Trạng từ bổ nghĩa cho tính từ 'impossible'. 'Virtually impossible' (gần như không thể). 'Virtually' ở đây nghĩa là 'almost', không phải 'ảo'.",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2096,
    "sentence": "We must adhere to ____ safety standards.",
    "options": ["stringent", "stringency", "stringently", "string"],
    "answer": "stringent",
    "explanation": "Trước danh từ 'safety standards' cần tính từ mang nghĩa 'nghiêm ngặt'. 'Stringent' (nghiêm ngặt/chặt chẽ).",
    "topic": "Part 5 - Advanced Vocabulary"
  },
  {
    "id": 2097,
    "sentence": "The file was ____ deleted from the server.",
    "options": ["inadvertent", "inadvertently", "advert", "advertise"],
    "answer": "inadvertently",
    "explanation": "Bổ nghĩa cho động từ bị động 'deleted' cần trạng từ. 'Inadvertently' (vô tình/không cố ý). Từ này trái nghĩa với 'deliberately'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2098,
    "sentence": "We are looking for ____ clients in the Asian market.",
    "options": ["prospect", "prospective", "perspective", "prosperous"],
    "answer": "prospective",
    "explanation": "Trước danh từ 'clients' cần tính từ. 'Prospective clients' (khách hàng tiềm năng). Phân biệt với 'Perspective' (quan điểm/góc nhìn) và 'Prosperous' (thịnh vượng).",
    "topic": "Part 5 - Confusing Words"
  },
  {
    "id": 2099,
    "sentence": "Sales regarding product A and B increased by 10% and 15%, ____.",
    "options": ["respective", "respectfully", "respectively", "respect"],
    "answer": "respectively",
    "explanation": "Trạng từ đứng cuối câu liệt kê để chỉ thứ tự tương ứng. 'Respectively' (theo thứ tự lần lượt).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2100,
    "sentence": "Trust is an ____ part of any business relationship.",
    "options": ["integrate", "integrity", "integral", "integration"],
    "answer": "integral",
    "explanation": "Trước danh từ 'part' cần tính từ. 'Integral part' (phần không thể thiếu/thiết yếu).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2101,
    "sentence": "We need to develop a commercially ____ plan.",
    "options": ["via", "viable", "viability", "viably"],
    "answer": "viable",
    "explanation": "Trước danh từ 'plan' cần tính từ. 'Viable' (khả thi). 'Commercially viable' (có khả năng sinh lời/khả thi về mặt thương mại).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2102,
    "sentence": "Due to ____ circumstances, the meeting is canceled.",
    "options": ["seen", "foreseen", "unforeseen", "seeing"],
    "answer": "unforeseen",
    "explanation": "Trước danh từ 'circumstances' cần tính từ. 'Unforeseen circumstances' (những tình huống bất ngờ/không lường trước được).",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2103,
    "sentence": "The task was ____ easy to complete.",
    "options": ["relative", "relatively", "relation", "relate"],
    "answer": "relatively",
    "explanation": "Trước tính từ 'easy' cần trạng từ chỉ mức độ. 'Relatively easy' (tương đối dễ).",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2104,
    "sentence": "The bonus is ____ and depends on performance.",
    "options": ["discretion", "discreet", "discrete", "discretionary"],
    "answer": "discretionary",
    "explanation": "Câu khó. 'Discretionary' (tùy ý/không bắt buộc - dựa trên quyết định của quản lý). Phân biệt với 'Discreet' (kín đáo) và 'Discrete' (riêng biệt).",
    "topic": "Part 5 - Advanced Vocabulary"
  },
  {
    "id": 2105,
    "sentence": "The two contracts are NOT ____ exclusive.",
    "options": ["mutual", "mutually", "mutation", "mute"],
    "answer": "mutually",
    "explanation": "Cụm từ cố định 'mutually exclusive' (loại trừ lẫn nhau). Cần trạng từ bổ nghĩa cho tính từ 'exclusive'.",
    "topic": "Part 5 - Collocations"
  },
  {
    "id": 2106,
    "sentence": "The equipment underwent ____ testing before launch.",
    "options": ["rigor", "rigorous", "rigorously", "rigid"],
    "answer": "rigorous",
    "explanation": "Trước danh từ/danh động từ 'testing' cần tính từ. 'Rigorous testing' (kiểm tra khắt khe/kỹ lưỡng).",
    "topic": "Part 5 - Advanced Vocabulary"
  },
  {
    "id": 2107,
    "sentence": "Ms. Lan showed ____ leadership during the crisis.",
    "options": ["example", "exemplify", "exemplary", "exempt"],
    "answer": "exemplary",
    "explanation": "Trước danh từ 'leadership' cần tính từ. 'Exemplary' (gương mẫu/xuất sắc - đáng để noi theo).",
    "topic": "Part 5 - Advanced Vocabulary"
  },
  {
    "id": 2108,
    "sentence": "The audience was ____ female.",
    "options": ["predominate", "predominantly", "dominance", "dominant"],
    "answer": "predominantly",
    "explanation": "Trước tính từ 'female' cần trạng từ. 'Predominantly' (chủ yếu là/phần lớn là).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2109,
    "sentence": "Any ____ changes to the plan must be approved.",
    "options": ["subsequence", "subsequent", "subsequently", "sequence"],
    "answer": "subsequent",
    "explanation": "Trước danh từ 'changes' cần tính từ. 'Subsequent' (xảy ra sau đó/tiếp theo).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2110,
    "sentence": "It is ____ that we finish the project today.",
    "options": ["imperative", "imperatively", "imperial", "imperious"],
    "answer": "imperative",
    "explanation": "Cấu trúc giả định 'It is + adj + that'. 'Imperative' (bắt buộc/cấp bách).",
    "topic": "Part 5 - Adjectives"
  },
  {
    "id": 2111,
    "sentence": "The flight will take ____ three hours.",
    "options": ["approximate", "approximately", "approximation", "proximate"],
    "answer": "approximately",
    "explanation": "Trước số từ 'three hours' cần trạng từ. 'Approximately' (xấp xỉ/khoảng).",
    "topic": "Part 5 - Adverbs modifying Numbers"
  },
  {
    "id": 2112,
    "sentence": "This offer is available ____ to our members.",
    "options": ["exclude", "exclusive", "exclusively", "exclusion"],
    "answer": "exclusively",
    "explanation": "Bổ nghĩa cho tính từ 'available' hoặc cụm giới từ 'to our members'. 'Exclusively available' (dành riêng/độc quyền).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2113,
    "sentence": "Salary will be ____ with experience.",
    "options": ["commensurate", "comment", "commence", "commerce"],
    "answer": "commensurate",
    "explanation": "Cấu trúc 'commensurate with' (tương xứng với). Đây là từ vựng rất hay gặp trong thông báo tuyển dụng.",
    "topic": "Part 5 - Advanced Vocabulary"
  }
];

const ADV_RECOGNITION_EASY = [
  {
    "id": 2064,
    "sentence": "She plays the piano very ____.",
    "options": ["good", "well", "better", "best"],
    "answer": "well",
    "explanation": "Bổ nghĩa cho động từ thường 'plays' cần trạng từ. 'Well' là trạng từ của 'good'.",
    "topic": "Adverbs"
  },
  {
    "id": 2065,
    "sentence": "Please drive ____ on this wet road.",
    "options": ["care", "careful", "carefully", "careless"],
    "answer": "carefully",
    "explanation": "Bổ nghĩa cho động từ 'drive' cần trạng từ chỉ cách thức. 'Drive carefully' (lái xe cẩn thận).",
    "topic": "Adverbs"
  },
  {
    "id": 2066,
    "sentence": "The train is ____ late today.",
    "options": ["usual", "usually", "usage", "used"],
    "answer": "usually",
    "explanation": "Trạng từ tần suất đứng sau động từ to be 'is'. 'Is usually late' (thường xuyên trễ).",
    "topic": "Adverbs"
  },
  {
    "id": 2067,
    "sentence": "He ____ reads books in the library.",
    "options": ["often", "oftener", "oftenness", "of"],
    "answer": "often",
    "explanation": "Trạng từ tần suất đứng trước động từ thường 'reads'. 'Often reads' (thường đọc).",
    "topic": "Adverbs"
  },
  {
    "id": 2068,
    "sentence": "The package was handled ____.",
    "options": ["rough", "roughness", "roughly", "roughen"],
    "answer": "roughly",
    "explanation": "Trạng từ chỉ cách thức bổ nghĩa cho động từ bị động 'handled'. 'Handled roughly' (bị xử lý mạnh tay/thô bạo).",
    "topic": "Adverbs"
  },
  {
    "id": 2069,
    "sentence": "They completed the project ____.",
    "options": ["success", "successful", "successfully", "succeed"],
    "answer": "successfully",
    "explanation": "Trạng từ đứng cuối câu bổ nghĩa cho động từ 'completed'. 'Completed successfully' (hoàn thành thành công).",
    "topic": "Adverbs"
  },
  {
    "id": 2070,
    "sentence": "This movie is ____ boring.",
    "options": ["real", "really", "reality", "realize"],
    "answer": "really",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'boring'. 'Really boring' (thực sự nhàm chán).",
    "topic": "Adverbs"
  },
  {
    "id": 2071,
    "sentence": "Please listen ____ to the instructions.",
    "options": ["attentive", "attention", "attentively", "attend"],
    "answer": "attentively",
    "explanation": "Bổ nghĩa cho động từ 'listen' cần trạng từ. 'Listen attentively' (lắng nghe chăm chú).",
    "topic": "Adverbs"
  },
  {
    "id": 2072,
    "sentence": "The sun shines ____ in summer.",
    "options": ["bright", "brightness", "brightly", "brighten"],
    "answer": "brightly",
    "explanation": "Bổ nghĩa cho động từ 'shines' cần trạng từ. 'Shines brightly' (tỏa sáng rực rỡ).",
    "topic": "Adverbs"
  },
  {
    "id": 2073,
    "sentence": "She was ____ dressed for the party.",
    "options": ["beautiful", "beauty", "beautifully", "beautify"],
    "answer": "beautifully",
    "explanation": "Bổ nghĩa cho phân từ 'dressed' (ăn mặc) cần trạng từ. 'Beautifully dressed' (ăn mặc đẹp).",
    "topic": "Adverbs"
  },
  {
    "id": 2074,
    "sentence": "He runs ____ than his brother.",
    "options": ["fast", "fastly", "faster", "fastest"],
    "answer": "faster",
    "explanation": "So sánh hơn của trạng từ 'fast' (nhanh) là 'faster'. Lưu ý: không có 'fastly'.",
    "topic": "Adverbs"
  },
  {
    "id": 2075,
    "sentence": "They spoke ____ about their plans.",
    "options": ["open", "openly", "opening", "openness"],
    "answer": "openly",
    "explanation": "Bổ nghĩa cho động từ 'spoke' cần trạng từ. 'Spoke openly' (nói chuyện một cách cởi mở/công khai).",
    "topic": "Adverbs"
  },
  {
    "id": 2076,
    "sentence": "The price has increased ____ recently.",
    "options": ["slight", "slightly", "slightness", "slighted"],
    "answer": "slightly",
    "explanation": "Bổ nghĩa cho động từ 'increased' cần trạng từ. 'Increased slightly' (tăng nhẹ).",
    "topic": "Adverbs"
  },
  {
    "id": 2077,
    "sentence": "I ____ agree with your opinion.",
    "options": ["total", "totally", "totality", "totaled"],
    "answer": "totally",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ 'agree'. 'Totally agree' (hoàn toàn đồng ý).",
    "topic": "Adverbs"
  },
  {
    "id": 2078,
    "sentence": "Please write your name ____ on the form.",
    "options": ["clear", "clearly", "clarity", "clearness"],
    "answer": "clearly",
    "explanation": "Bổ nghĩa cho động từ 'write' cần trạng từ. 'Write clearly' (viết rõ ràng).",
    "topic": "Adverbs"
  },
  {
    "id": 2079,
    "sentence": "The team worked ____ to finish on time.",
    "options": ["hard", "hardly", "hardness", "harden"],
    "answer": "hard",
    "explanation": "Trạng từ 'hard' (chăm chỉ/vất vả). 'Hardly' nghĩa là 'hầu như không', sai ngữ cảnh.",
    "topic": "Adverbs"
  },
  {
    "id": 2080,
    "sentence": "She smiled ____ at the baby.",
    "options": ["gentle", "gently", "gentleness", "gentler"],
    "answer": "gently",
    "explanation": "Bổ nghĩa cho động từ 'smiled' cần trạng từ. 'Smiled gently' (cười dịu dàng/nhẹ nhàng).",
    "topic": "Adverbs"
  },
  {
    "id": 2081,
    "sentence": "The accident happened ____.",
    "options": ["sudden", "suddenly", "suddenness", "suddened"],
    "answer": "suddenly",
    "explanation": "Trạng từ chỉ thời gian/cách thức đứng cuối câu. 'Happened suddenly' (xảy ra đột ngột).",
    "topic": "Adverbs"
  },
  {
    "id": 2082,
    "sentence": "He is ____ capable of doing the job.",
    "options": ["perfect", "perfectly", "perfection", "perfected"],
    "answer": "perfectly",
    "explanation": "Trạng từ bổ nghĩa cho tính từ 'capable'. 'Perfectly capable' (hoàn toàn có khả năng).",
    "topic": "Adverbs"
  },
  {
    "id": 2083,
    "sentence": "They are ____ waiting for the results.",
    "options": ["anxious", "anxiously", "anxiety", "anxiousness"],
    "answer": "anxiously",
    "explanation": "Trạng từ đứng giữa to be và V-ing để bổ nghĩa cho hành động đang diễn ra. 'Are anxiously waiting' (đang lo lắng chờ đợi).",
    "topic": "Adverbs"
  },
  {
    "id": 2084,
    "sentence": "It is ____ cold outside today.",
    "options": ["extreme", "extremely", "extremity", "extremist"],
    "answer": "extremely",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'cold'. 'Extremely cold' (cực kỳ lạnh).",
    "topic": "Adverbs"
  },
  {
    "id": 2085,
    "sentence": "It rained ____ all night.",
    "options": ["heavy", "heavily", "heaviness", "heavier"],
    "answer": "heavily",
    "explanation": "Bổ nghĩa cho động từ 'rained' cần trạng từ. 'Rained heavily' (mưa to/mưa nặng hạt).",
    "topic": "Adverbs"
  },
  {
    "id": 2086,
    "sentence": "He is ____ late for meetings.",
    "options": ["always", "all", "every", "most"],
    "answer": "always",
    "explanation": "Trạng từ tần suất đứng sau động từ to be 'is'. 'Is always late' (luôn luôn trễ).",
    "topic": "Adverbs"
  },
  {
    "id": 2087,
    "sentence": "Please speak ____ so everyone can hear.",
    "options": ["loud", "loudly", "loudness", "louder"],
    "answer": "loudly",
    "explanation": "Bổ nghĩa cho động từ 'speak' cần trạng từ. 'Speak loudly' (nói to).",
    "topic": "Adverbs"
  },
  {
    "id": 2088,
    "sentence": "Your answer is ____ wrong.",
    "options": ["complete", "completely", "completion", "completed"],
    "answer": "completely",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'wrong'. 'Completely wrong' (hoàn toàn sai).",
    "topic": "Adverbs"
  },
  {
    "id": 2089,
    "sentence": "We waited ____ for the doctor.",
    "options": ["patient", "patiently", "patience", "patients"],
    "answer": "patiently",
    "explanation": "Bổ nghĩa cho động từ 'waited' cần trạng từ. 'Waited patiently' (kiên nhẫn chờ đợi).",
    "topic": "Adverbs"
  },
  {
    "id": 2090,
    "sentence": "I ____ go to the cinema.",
    "options": ["never", "no", "not", "none"],
    "answer": "never",
    "explanation": "Trạng từ tần suất đứng trước động từ thường 'go'. 'Never go' (không bao giờ đi).",
    "topic": "Adverbs"
  },
  {
    "id": 2091,
    "sentence": "She answered all questions ____.",
    "options": ["correct", "correctly", "correction", "correctness"],
    "answer": "correctly",
    "explanation": "Bổ nghĩa cho động từ 'answered' cần trạng từ. 'Answered correctly' (trả lời chính xác).",
    "topic": "Adverbs"
  },
  {
    "id": 2092,
    "sentence": "Have you seen him ____?",
    "options": ["recent", "recently", "recency", "recentness"],
    "answer": "recently",
    "explanation": "Trạng từ chỉ thời gian đứng cuối câu hỏi thì hiện tại hoàn thành. 'Seen him recently' (gặp anh ấy gần đây).",
    "topic": "Adverbs"
  },
  {
    "id": 2093,
    "sentence": "____, we missed the bus.",
    "options": ["Unfortunate", "Unfortunately", "Fortune", "Fortunate"],
    "answer": "Unfortunately",
    "explanation": "Trạng từ đứng đầu câu, ngăn cách bởi dấu phẩy, bổ nghĩa cho cả câu. 'Unfortunately' (Thật không may).",
    "topic": "Adverbs"
  },
  {
    "id": 2094,
    "sentence": "The car was ____ damaged in the accident.",
    "options": ["bad", "badly", "badness", "worse"],
    "answer": "badly",
    "explanation": "Bổ nghĩa cho phân từ bị động 'damaged' cần trạng từ. 'Badly damaged' (bị hư hại nặng).",
    "topic": "Adverbs"
  },
  {
    "id": 2095,
    "sentence": "The machine works ____.",
    "options": ["efficient", "efficiently", "efficiency", "efficacy"],
    "answer": "efficiently",
    "explanation": "Bổ nghĩa cho động từ 'works' cần trạng từ. 'Works efficiently' (hoạt động hiệu quả).",
    "topic": "Adverbs"
  },
  {
    "id": 2096,
    "sentence": "I ____ know him.",
    "options": ["bare", "barely", "baring", "bared"],
    "answer": "barely",
    "explanation": "Trạng từ chỉ mức độ phủ định đứng trước động từ. 'Barely know' (hầu như không biết/chỉ biết sơ sơ).",
    "topic": "Adverbs"
  },
  {
    "id": 2097,
    "sentence": "Look at the picture ____.",
    "options": ["care", "careful", "carefully", "careless"],
    "answer": "carefully",
    "explanation": "Bổ nghĩa cho động từ 'look' cần trạng từ. 'Look carefully' (nhìn kỹ/cẩn thận).",
    "topic": "Adverbs"
  },
  {
    "id": 2098,
    "sentence": "Please leave the room ____.",
    "options": ["immediate", "immediately", "immediacy", "medium"],
    "answer": "immediately",
    "explanation": "Trạng từ chỉ thời gian/cách thức đứng cuối câu mệnh lệnh. 'Leave immediately' (rời đi ngay lập tức).",
    "topic": "Adverbs"
  },
  {
    "id": 2099,
    "sentence": "The city is growing ____.",
    "options": ["rapid", "rapidly", "rapidity", "rapids"],
    "answer": "rapidly",
    "explanation": "Bổ nghĩa cho động từ đang diễn ra 'is growing'. 'Growing rapidly' (phát triển nhanh chóng).",
    "topic": "Adverbs"
  },
  {
    "id": 2100,
    "sentence": "He was ____ happy with the gift.",
    "options": ["incredibility", "incredible", "incredibly", "incredulous"],
    "answer": "incredibly",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'happy'. 'Incredibly happy' (vui sướng đến khó tin/cực kỳ vui).",
    "topic": "Adverbs"
  },
  {
    "id": 2101,
    "sentence": "They treated the guests ____.",
    "options": ["polite", "politely", "politeness", "politic"],
    "answer": "politely",
    "explanation": "Bổ nghĩa cho động từ 'treated' cần trạng từ. 'Treated politely' (đối xử lịch sự).",
    "topic": "Adverbs"
  },
  {
    "id": 2102,
    "sentence": "We ____ see such beautiful birds.",
    "options": ["seldom", "some", "any", "few"],
    "answer": "seldom",
    "explanation": "Trạng từ tần suất phủ định đứng trước động từ. 'Seldom see' (hiếm khi thấy).",
    "topic": "Adverbs"
  },
  {
    "id": 2103,
    "sentence": "The task can be ____ done in an hour.",
    "options": ["easy", "easily", "easiness", "ease"],
    "answer": "easily",
    "explanation": "Bổ nghĩa cho động từ bị động 'done' (hoặc cụm 'can be done') cần trạng từ. 'Easily done' (được làm một cách dễ dàng).",
    "topic": "Adverbs"
  },
  {
    "id": 2104,
    "sentence": "Please drive ____ in the school zone.",
    "options": ["slow", "slowly", "slowness", "slower"],
    "answer": "slowly",
    "explanation": "Bổ nghĩa cho động từ 'drive' cần trạng từ chỉ cách thức. 'Drive slowly' (lái xe chậm).",
    "topic": "Adverbs"
  },
  {
    "id": 2105,
    "sentence": "The movie was ____ good.",
    "options": ["quite", "quit", "quiet", "quietly"],
    "answer": "quite",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'good'. 'Quite good' (khá hay). Lưu ý phân biệt với 'quiet' (yên tĩnh).",
    "topic": "Adverbs"
  },
  {
    "id": 2106,
    "sentence": "The door opens ____.",
    "options": ["automatic", "automatically", "automation", "automate"],
    "answer": "automatically",
    "explanation": "Bổ nghĩa cho động từ 'opens' cần trạng từ. 'Opens automatically' (tự động mở).",
    "topic": "Adverbs"
  },
  {
    "id": 2107,
    "sentence": "I ____ agree with you.",
    "options": ["complete", "completely", "completion", "completed"],
    "answer": "completely",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ 'agree'. 'Completely agree' (hoàn toàn đồng ý).",
    "topic": "Adverbs"
  },
  {
    "id": 2108,
    "sentence": "He arrived ____ at 9 AM.",
    "options": ["exact", "exactly", "exacting", "exactness"],
    "answer": "exactly",
    "explanation": "Trạng từ nhấn mạnh thời gian. 'Exactly at 9 AM' (chính xác vào lúc 9 giờ).",
    "topic": "Adverbs"
  },
  {
    "id": 2109,
    "sentence": "She speaks English ____.",
    "options": ["fluent", "fluently", "fluency", "influence"],
    "answer": "fluently",
    "explanation": "Bổ nghĩa cho động từ 'speaks' cần trạng từ. 'Speaks fluently' (nói trôi chảy).",
    "topic": "Adverbs"
  },
  {
    "id": 2110,
    "sentence": "The team played ____ today.",
    "options": ["bad", "badly", "badness", "worse"],
    "answer": "badly",
    "explanation": "Bổ nghĩa cho động từ 'played' cần trạng từ. 'Played badly' (chơi dở/tệ).",
    "topic": "Adverbs"
  },
  {
    "id": 2111,
    "sentence": "They ____ finished the work.",
    "options": ["final", "finally", "finalize", "finalist"],
    "answer": "finally",
    "explanation": "Trạng từ chỉ thời gian/kết quả đứng trước động từ. 'Finally finished' (cuối cùng cũng xong).",
    "topic": "Adverbs"
  },
  {
    "id": 2112,
    "sentence": "It costs ____ 100 dollars.",
    "options": ["approximate", "approximately", "approximation", "proximate"],
    "answer": "approximately",
    "explanation": "Trạng từ bổ nghĩa cho số từ. 'Approximately 100 dollars' (khoảng/xấp xỉ 100 đô la).",
    "topic": "Adverbs"
  },
  {
    "id": 2113,
    "sentence": "Please sit ____.",
    "options": ["quiet", "quietly", "quietness", "quite"],
    "answer": "quietly",
    "explanation": "Bổ nghĩa cho động từ 'sit' cần trạng từ. 'Sit quietly' (ngồi yên lặng).",
    "topic": "Adverbs"
  },
  {
    "id": 2114,
    "sentence": "The children are playing ____ in the garden.",
    "options": ["happy", "happily", "happiness", "happier"],
    "answer": "happily",
    "explanation": "Bổ nghĩa cho động từ 'playing' cần trạng từ. 'Playing happily' (chơi đùa vui vẻ).",
    "topic": "Adverbs"
  },
  {
    "id": 2115,
    "sentence": "He was ____ injured in the crash.",
    "options": ["serious", "seriously", "seriousness", "series"],
    "answer": "seriously",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho phân từ 'injured'. 'Seriously injured' (bị thương nghiêm trọng).",
    "topic": "Adverbs"
  },
  {
    "id": 2116,
    "sentence": "The engine runs ____.",
    "options": ["smooth", "smoothly", "smoothness", "smoothen"],
    "answer": "smoothly",
    "explanation": "Bổ nghĩa cho động từ 'runs' cần trạng từ. 'Runs smoothly' (chạy êm/trơn tru).",
    "topic": "Adverbs"
  },
  {
    "id": 2117,
    "sentence": "She touched the cat ____.",
    "options": ["soft", "softly", "softness", "soften"],
    "answer": "softly",
    "explanation": "Bổ nghĩa cho động từ 'touched' cần trạng từ. 'Touched softly' (chạm nhẹ nhàng).",
    "topic": "Adverbs"
  },
  {
    "id": 2118,
    "sentence": "This gift was ____ made for you.",
    "options": ["special", "specially", "specialty", "specialize"],
    "answer": "specially",
    "explanation": "Bổ nghĩa cho động từ bị động 'made' cần trạng từ. 'Specially made' (được làm đặc biệt/riêng).",
    "topic": "Adverbs"
  },
  {
    "id": 2119,
    "sentence": "The rain fell ____.",
    "options": ["steady", "steadily", "steadying", "steadiness"],
    "answer": "steadily",
    "explanation": "Bổ nghĩa cho động từ 'fell' cần trạng từ. 'Fell steadily' (rơi đều đặn/không ngớt).",
    "topic": "Adverbs"
  },
  {
    "id": 2120,
    "sentence": "I ____ recommend this book.",
    "options": ["strong", "strongly", "strength", "strengthen"],
    "answer": "strongly",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ 'recommend'. 'Strongly recommend' (nhiệt liệt đề cử/khuyên dùng).",
    "topic": "Adverbs"
  },
  {
    "id": 2121,
    "sentence": "____, he didn't pass the exam.",
    "options": ["Sad", "Sadly", "Sadness", "Sadden"],
    "answer": "Sadly",
    "explanation": "Trạng từ đứng đầu câu, bổ nghĩa cho cả câu. 'Sadly' (Đáng buồn thay).",
    "topic": "Adverbs"
  },
  {
    "id": 2122,
    "sentence": "The files are stored ____.",
    "options": ["separate", "separately", "separation", "separator"],
    "answer": "separately",
    "explanation": "Bổ nghĩa cho động từ bị động 'stored' cần trạng từ. 'Stored separately' (được lưu trữ riêng biệt).",
    "topic": "Adverbs"
  },
  {
    "id": 2123,
    "sentence": "It will ____ rain later.",
    "options": ["probable", "probably", "probability", "probation"],
    "answer": "probably",
    "explanation": "Trạng từ chỉ khả năng đứng giữa trợ động từ 'will' và động từ chính. 'Will probably rain' (có thể sẽ mưa).",
    "topic": "Adverbs"
  },
  {
    "id": 2124,
    "sentence": "Business is continuing as ____.",
    "options": ["usual", "usually", "unusual", "use"],
    "answer": "usual",
    "explanation": "Cụm từ cố định 'as usual' (như thường lệ). Ở đây 'usual' đóng vai trò tính từ trong cụm thành ngữ.",
    "topic": "Adverbs/Fixed Phrases"
  },
  {
    "id": 2125,
    "sentence": "This book is ____ recommended.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "highly",
    "explanation": "Trạng từ chỉ mức độ đứng trước phân từ 'recommended'. 'Highly recommended' (được đánh giá rất cao/rất khuyên đọc).",
    "topic": "Adverbs"
  },
  {
    "id": 2126,
    "sentence": "Are you ____ sure?",
    "options": ["absolute", "absolutely", "absolution", "absolved"],
    "answer": "absolutely",
    "explanation": "Trạng từ chỉ mức độ nhấn mạnh cho tính từ 'sure'. 'Absolutely sure' (chắc chắn hoàn toàn).",
    "topic": "Adverbs"
  },
  {
    "id": 2127,
    "sentence": "Please go ____ to the manager's office.",
    "options": ["direct", "directly", "direction", "director"],
    "answer": "directly",
    "explanation": "Bổ nghĩa cho động từ 'go' cần trạng từ. 'Go directly' (đi thẳng đến/trực tiếp đến).",
    "topic": "Adverbs"
  },
  {
    "id": 2128,
    "sentence": "Our team won ____.",
    "options": ["easy", "easily", "easiness", "ease"],
    "answer": "easily",
    "explanation": "Bổ nghĩa cho động từ 'won' cần trạng từ. 'Won easily' (thắng dễ dàng).",
    "topic": "Adverbs"
  },
  {
    "id": 2129,
    "sentence": "I ____ understand your situation.",
    "options": ["full", "fully", "fullness", "filled"],
    "answer": "fully",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ 'understand'. 'Fully understand' (hiểu hoàn toàn/hiểu rõ).",
    "topic": "Adverbs"
  },
  {
    "id": 2130,
    "sentence": "____ speaking, men are stronger than women.",
    "options": ["General", "Generally", "Generalize", "Generality"],
    "answer": "Generally",
    "explanation": "Trạng từ đứng đầu câu bổ nghĩa cho cả câu. 'Generally speaking' (Nói chung là...).",
    "topic": "Adverbs"
  },
  {
    "id": 2131,
    "sentence": "I can ____ hear you.",
    "options": ["hard", "hardly", "hardness", "harden"],
    "answer": "hardly",
    "explanation": "Trạng từ mang nghĩa phủ định. 'Hardly hear' (hầu như không nghe thấy). Khác với 'hear hard' (nghe chăm chú - không dùng).",
    "topic": "Adverbs"
  },
  {
    "id": 2132,
    "sentence": "____, I don't like it.",
    "options": ["Honest", "Honestly", "Honesty", "Dishonest"],
    "answer": "Honestly",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Honestly' (Thành thật mà nói).",
    "topic": "Adverbs"
  },
  {
    "id": 2133,
    "sentence": "____, the rain will stop soon.",
    "options": ["Hope", "Hopefully", "Hopeful", "Hopeless"],
    "answer": "Hopefully",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Hopefully' (Hy vọng là...).",
    "topic": "Adverbs"
  },
  {
    "id": 2134,
    "sentence": "I haven't seen him ____.",
    "options": ["late", "lately", "latest", "later"],
    "answer": "lately",
    "explanation": "Trạng từ chỉ thời gian dùng trong thì hiện tại hoàn thành. 'Lately' = 'Recently' (gần đây). 'Late' là trễ.",
    "topic": "Adverbs"
  },
  {
    "id": 2135,
    "sentence": "He laughed ____ at the joke.",
    "options": ["loud", "loudly", "loudness", "louder"],
    "answer": "loudly",
    "explanation": "Bổ nghĩa cho động từ 'laughed' cần trạng từ. 'Laughed loudly' (cười to).",
    "topic": "Adverbs"
  },
  {
    "id": 2136,
    "sentence": "The problem is ____ due to money.",
    "options": ["main", "mainly", "mainstream", "mainland"],
    "answer": "mainly",
    "explanation": "Trạng từ nhấn mạnh nguyên nhân. 'Mainly due to' (chủ yếu là do).",
    "topic": "Adverbs"
  },
  {
    "id": 2137,
    "sentence": "____, he was upset about the news.",
    "options": ["Nature", "Natural", "Naturally", "Naturalize"],
    "answer": "Naturally",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Naturally' (Lẽ dĩ nhiên là...).",
    "topic": "Adverbs"
  },
  {
    "id": 2138,
    "sentence": "The project is ____ finished.",
    "options": ["near", "nearly", "nears", "nearness"],
    "answer": "nearly",
    "explanation": "Trạng từ chỉ mức độ. 'Nearly finished' (gần xong).",
    "topic": "Adverbs"
  },
  {
    "id": 2139,
    "sentence": "She is ____ talented.",
    "options": ["obvious", "obviously", "oblivious", "obviousness"],
    "answer": "obviously",
    "explanation": "Trạng từ nhấn mạnh cho tính từ 'talented'. 'Obviously talented' (rõ ràng là có tài).",
    "topic": "Adverbs"
  },
  {
    "id": 2140,
    "sentence": "The store is ____ open.",
    "options": ["official", "officially", "office", "officer"],
    "answer": "officially",
    "explanation": "Bổ nghĩa cho tính từ 'open'. 'Officially open' (chính thức mở cửa).",
    "topic": "Adverbs"
  },
  {
    "id": 2141,
    "sentence": "This topic is ____ interesting.",
    "options": ["particular", "particularly", "particularity", "part"],
    "answer": "particularly",
    "explanation": "Trạng từ chỉ mức độ nhấn mạnh tính từ 'interesting'. 'Particularly interesting' (đặc biệt thú vị).",
    "topic": "Adverbs"
  },
  {
    "id": 2142,
    "sentence": "Your explanation was ____ clear.",
    "options": ["perfect", "perfectly", "perfection", "perfected"],
    "answer": "perfectly",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'clear'. 'Perfectly clear' (hoàn toàn rõ ràng).",
    "topic": "Adverbs"
  },
  {
    "id": 2143,
    "sentence": "____, I think it's a good idea.",
    "options": ["Person", "Personal", "Personally", "Personality"],
    "answer": "Personally",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Personally' (Theo cá nhân tôi/Đối với tôi thì).",
    "topic": "Adverbs"
  },
  {
    "id": 2144,
    "sentence": "He is ____ fit for the job.",
    "options": ["physics", "physical", "physically", "physician"],
    "answer": "physically",
    "explanation": "Trạng từ chỉ mức độ/khía cạnh bổ nghĩa cho tính từ 'fit'. 'Physically fit' (đủ sức khỏe/thể chất).",
    "topic": "Adverbs"
  },
  {
    "id": 2145,
    "sentence": "I was ____ surprised by the news.",
    "options": ["pleasant", "pleasantly", "pleasure", "please"],
    "answer": "pleasantly",
    "explanation": "Bổ nghĩa cho tính từ/phân từ 'surprised'. 'Pleasantly surprised' (ngạc nhiên một cách thú vị/vui vẻ).",
    "topic": "Adverbs"
  },
  {
    "id": 2146,
    "sentence": "This chemical is ____ dangerous.",
    "options": ["potential", "potentially", "potentiality", "potent"],
    "answer": "potentially",
    "explanation": "Trạng từ bổ nghĩa cho tính từ 'dangerous'. 'Potentially dangerous' (có tiềm năng gây nguy hiểm).",
    "topic": "Adverbs"
  },
  {
    "id": 2147,
    "sentence": "The train arrived ____ at 8:00.",
    "options": ["precise", "precisely", "precision", "preciseness"],
    "answer": "precisely",
    "explanation": "Trạng từ nhấn mạnh thời gian. 'Precisely at 8:00' (đúng 8 giờ).",
    "topic": "Adverbs"
  },
  {
    "id": 2148,
    "sentence": "____, he will be late.",
    "options": ["Presume", "Presumably", "Presumption", "Presumable"],
    "answer": "Presumably",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Presumably' (Có lẽ là/Đoán chừng là).",
    "topic": "Adverbs"
  },
  {
    "id": 2149,
    "sentence": "She has ____ lived in London.",
    "options": ["previous", "previously", "preview", "prevention"],
    "answer": "previously",
    "explanation": "Trạng từ chỉ thời gian đứng giữa trợ động từ và động từ chính. 'Has previously lived' (trước đây đã từng sống).",
    "topic": "Adverbs"
  },
  {
    "id": 2150,
    "sentence": "Can we talk ____?",
    "options": ["private", "privately", "privacy", "privation"],
    "answer": "privately",
    "explanation": "Bổ nghĩa cho động từ 'talk'. 'Talk privately' (nói chuyện riêng tư).",
    "topic": "Adverbs"
  },
  {
    "id": 2151,
    "sentence": "The meeting started ____.",
    "options": ["prompt", "promptly", "promptness", "prompted"],
    "answer": "promptly",
    "explanation": "Bổ nghĩa cho động từ 'started'. 'Started promptly' (bắt đầu đúng giờ/ngay lập tức).",
    "topic": "Adverbs"
  },
  {
    "id": 2152,
    "sentence": "The machine is not working ____.",
    "options": ["proper", "properly", "property", "proprietor"],
    "answer": "properly",
    "explanation": "Bổ nghĩa cho động từ 'working'. 'Working properly' (hoạt động đúng cách/bình thường).",
    "topic": "Adverbs"
  },
  {
    "id": 2153,
    "sentence": "The results were ____ announced.",
    "options": ["public", "publicly", "publicity", "publication"],
    "answer": "publicly",
    "explanation": "Bổ nghĩa cho động từ 'announced'. 'Publicly announced' (được công bố công khai).",
    "topic": "Adverbs"
  },
  {
    "id": 2154,
    "sentence": "He ran ____ to catch the bus.",
    "options": ["quick", "quickly", "quicken", "quickness"],
    "answer": "quickly",
    "explanation": "Bổ nghĩa cho động từ 'ran' cần trạng từ chỉ cách thức. 'Ran quickly' (chạy nhanh).",
    "topic": "Adverbs"
  },
  {
    "id": 2155,
    "sentence": "She ____ eats meat.",
    "options": ["rare", "rarely", "rareness", "rarity"],
    "answer": "rarely",
    "explanation": "Trạng từ tần suất phủ định đứng trước động từ. 'Rarely eats' (hiếm khi ăn).",
    "topic": "Adverbs"
  },
  {
    "id": 2156,
    "sentence": "Information is ____ available.",
    "options": ["ready", "readily", "readiness", "reading"],
    "answer": "readily",
    "explanation": "Trạng từ bổ nghĩa cho tính từ 'available'. 'Readily available' (có sẵn dễ dàng).",
    "topic": "Adverbs"
  },
  {
    "id": 2157,
    "sentence": "The food is ____ priced.",
    "options": ["reason", "reasonable", "reasonably", "reasoning"],
    "answer": "reasonably",
    "explanation": "Bổ nghĩa cho tính từ/phân từ 'priced'. 'Reasonably priced' (giá cả hợp lý).",
    "topic": "Adverbs"
  },
  {
    "id": 2158,
    "sentence": "We meet ____ for coffee.",
    "options": ["regular", "regularly", "regularity", "regulate"],
    "answer": "regularly",
    "explanation": "Trạng từ tần suất đứng cuối câu. 'Meet regularly' (gặp nhau thường xuyên).",
    "topic": "Adverbs"
  },
  {
    "id": 2159,
    "sentence": "The test was ____ simple.",
    "options": ["relative", "relatively", "relation", "relate"],
    "answer": "relatively",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'simple'. 'Relatively simple' (tương đối đơn giản).",
    "topic": "Adverbs"
  },
  {
    "id": 2160,
    "sentence": "He ____ agreed to help.",
    "options": ["reluctant", "reluctantly", "reluctance", "rely"],
    "answer": "reluctantly",
    "explanation": "Trạng từ chỉ cách thức đứng trước động từ. 'Reluctantly agreed' (miễn cưỡng đồng ý).",
    "topic": "Adverbs"
  },
  {
    "id": 2161,
    "sentence": "I have told you ____.",
    "options": ["repeat", "repeatedly", "repetition", "repetitive"],
    "answer": "repeatedly",
    "explanation": "Trạng từ chỉ tần suất/lặp lại. 'Told you repeatedly' (nói đi nói lại nhiều lần).",
    "topic": "Adverbs"
  },
  {
    "id": 2162,
    "sentence": "Security checks are ____ performed.",
    "options": ["routine", "routinely", "route", "routing"],
    "answer": "routinely",
    "explanation": "Trạng từ chỉ tần suất/thói quen. 'Routinely performed' (được thực hiện thường quy/định kỳ).",
    "topic": "Adverbs"
  },
  {
    "id": 2163,
    "sentence": "Did you arrive ____?",
    "options": ["safe", "safely", "safety", "save"],
    "answer": "safely",
    "explanation": "Bổ nghĩa cho động từ 'arrive'. 'Arrive safely' (đến nơi an toàn).",
    "topic": "Adverbs"
  }
];

const ADV_RECOGNITION_HARD = [
  {
    "id": 2074,
    "sentence": "The train arrived ____ late due to the storm.",
    "options": ["expect", "expected", "expectedly", "unexpectedly"],
    "answer": "unexpectedly",
    "explanation": "Bổ nghĩa cho trạng từ 'late' hoặc cả cụm động từ. Dựa vào ngữ cảnh 'storm' (bão) -> trễ một cách bất ngờ -> unexpectedly.",
    "topic": "Adverbs"
  },
  {
    "id": 2075,
    "sentence": "____, we decided to cancel the picnic.",
    "options": ["Unfortunate", "Unfortunately", "Fortune", "Fortunate"],
    "answer": "Unfortunately",
    "explanation": "Trạng từ đứng đầu câu, ngăn cách bởi dấu phẩy, bổ nghĩa cho cả mệnh đề phía sau (Sentence Adverb).",
    "topic": "Sentence Adverbs"
  },
  {
    "id": 2076,
    "sentence": "I have ____ finished my report.",
    "options": ["near", "nearly", "nears", "nearest"],
    "answer": "nearly",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ. 'Nearly finished' (gần xong/suýt xong). Phân biệt với 'near' (gần về khoảng cách).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2077,
    "sentence": "He works ____ to support his family.",
    "options": ["hard", "hardly", "hardness", "harden"],
    "answer": "hard",
    "explanation": "Phân biệt 'hard' (chăm chỉ/vất vả) và 'hardly' (hầu như không). Ngữ cảnh 'nuôi gia đình' -> làm việc chăm chỉ -> hard.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2078,
    "sentence": "We ____ go to the cinema these days.",
    "options": ["hard", "hardly", "hardness", "harder"],
    "answer": "hardly",
    "explanation": "Ngữ cảnh 'these days' (dạo này) thường đi với tần suất. 'Hardly' mang nghĩa phủ định (hầu như không đi).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2079,
    "sentence": "The prices have risen ____ in the last quarter.",
    "options": ["sharp", "sharpen", "sharply", "sharpness"],
    "answer": "sharply",
    "explanation": "Bổ nghĩa cho động từ 'risen' (tăng). 'Risen sharply' (tăng mạnh/đột ngột).",
    "topic": "Adverbs"
  },
  {
    "id": 2080,
    "sentence": "She was ____ dressed for the interview.",
    "options": ["suit", "suitable", "suitably", "suitability"],
    "answer": "suitably",
    "explanation": "Bổ nghĩa cho phân từ 'dressed' (ăn mặc). 'Suitably dressed' (ăn mặc phù hợp).",
    "topic": "Adverbs"
  },
  {
    "id": 2081,
    "sentence": "The instructions were ____ confusing.",
    "options": ["some", "somewhat", "something", "someone"],
    "answer": "somewhat",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'confusing'. 'Somewhat' (hơi hơi/một chút).",
    "topic": "Adverbs of Degree"
  },
  {
    "id": 2082,
    "sentence": "He ____ denied the accusations.",
    "options": ["flat", "flatly", "flatten", "flatness"],
    "answer": "flatly",
    "explanation": "Collocation: 'Flatly denied' (phủ nhận thẳng thừng/dứt khoát).",
    "topic": "Collocations"
  },
  {
    "id": 2083,
    "sentence": "The two sisters are ____ different.",
    "options": ["complete", "completely", "completion", "completed"],
    "answer": "completely",
    "explanation": "Trạng từ chỉ mức độ tuyệt đối bổ nghĩa cho 'different'. 'Completely different' (khác hoàn toàn).",
    "topic": "Adverbs of Degree"
  },
  {
    "id": 2084,
    "sentence": "I haven't seen him ____.",
    "options": ["late", "lately", "latest", "later"],
    "answer": "lately",
    "explanation": "Phân biệt 'late' (trễ) và 'lately' (gần đây). Dấu hiệu thì hiện tại hoàn thành phủ định -> lately.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2085,
    "sentence": "The car stopped ____ just inches from the wall.",
    "options": ["short", "shortly", "shorten", "shorter"],
    "answer": "short",
    "explanation": "Thành ngữ/Cụm từ: 'Stop short' (dừng lại đột ngột). 'Shortly' nghĩa là 'sớm/chẳng bao lâu nữa' (ví dụ: arriving shortly).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2086,
    "sentence": "The event will begin ____.",
    "options": ["short", "shortly", "shorten", "shortness"],
    "answer": "shortly",
    "explanation": "Trạng từ chỉ thời gian tương lai gần. 'Begin shortly' (bắt đầu sớm/trong chốc lát).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2087,
    "sentence": "She speaks French ____ well.",
    "options": ["fair", "fairly", "fairness", "fairs"],
    "answer": "fairly",
    "explanation": "Trạng từ chỉ mức độ (khá là) bổ nghĩa cho trạng từ 'well'. 'Fairly well' (khá tốt).",
    "topic": "Adverbs of Degree"
  },
  {
    "id": 2088,
    "sentence": "The eagle flew ____ over the mountains.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "high",
    "explanation": "Phân biệt 'high' (cao - nghĩa đen về vị trí) và 'highly' (cao - nghĩa bóng/mức độ, ví dụ: highly recommended). Bay cao -> high.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2089,
    "sentence": "This is a ____ debated topic.",
    "options": ["hot", "hotly", "heat", "heated"],
    "answer": "hotly",
    "explanation": "Collocation: 'Hotly debated' (tranh luận sôi nổi/gay gắt).",
    "topic": "Collocations"
  },
  {
    "id": 2090,
    "sentence": "____, he admitted his mistake.",
    "options": ["Eventual", "Eventually", "Event", "Events"],
    "answer": "Eventually",
    "explanation": "Trạng từ đứng đầu câu chỉ kết quả sau cùng. 'Eventually' (Cuối cùng thì/Rốt cuộc).",
    "topic": "Sentence Adverbs"
  },
  {
    "id": 2091,
    "sentence": "The room was ____ silent.",
    "options": ["dead", "deadly", "death", "die"],
    "answer": "dead",
    "explanation": "Cụm từ nhấn mạnh: 'Dead silent' (im phăng phắc/im như tờ). 'Deadly' nghĩa là 'chết người' hoặc 'cực kỳ' (nhưng ít dùng với silent theo cách này). Trong ngữ cảnh này 'dead' đóng vai trò trạng từ nhấn mạnh mức độ tuyệt đối.",
    "topic": "Advanced Adverbs"
  },
  {
    "id": 2092,
    "sentence": "Please treat this information ____.",
    "options": ["confident", "confidence", "confidential", "confidentially"],
    "answer": "confidentially",
    "explanation": "Bổ nghĩa cho động từ 'treat' (xử lý/đối xử). 'Treat confidentially' (giữ bí mật/xử lý một cách bảo mật).",
    "topic": "Adverbs"
  },
  {
    "id": 2093,
    "sentence": "He was ____ acquitted of all charges.",
    "options": ["subsequent", "subsequently", "sequence", "subsequence"],
    "answer": "subsequently",
    "explanation": "Trạng từ chỉ trình tự thời gian bổ nghĩa cho động từ. 'Subsequently acquitted' (sau đó đã được tuyên trắng án).",
    "topic": "Adverbs of Time"
  },
  {
    "id": 2094,
    "sentence": "The door was ____ open.",
    "options": ["wide", "widely", "width", "widen"],
    "answer": "wide",
    "explanation": "Cụm từ cố định 'wide open' (mở toang). 'Widely' thường dùng cho mức độ trừu tượng (widely known - được biết đến rộng rãi).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2095,
    "sentence": "We went ____ into the forest.",
    "options": ["deep", "deeply", "depth", "deepen"],
    "answer": "deep",
    "explanation": "Phân biệt 'deep' (sâu - nghĩa đen về không gian/vị trí) và 'deeply' (sâu sắc - nghĩa bóng về cảm xúc). Đi sâu vào rừng -> deep.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2096,
    "sentence": "I ____ regret my decision.",
    "options": ["deep", "deeply", "depth", "deepness"],
    "answer": "deeply",
    "explanation": "Nghĩa bóng: hối hận sâu sắc -> deeply regret.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2097,
    "sentence": "Children under 5 can enter for ____.",
    "options": ["free", "freely", "freedom", "freed"],
    "answer": "free",
    "explanation": "Phân biệt 'free' (miễn phí) và 'freely' (tự do/không bị hạn chế). Vào cửa miễn phí -> enter for free.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2098,
    "sentence": "You can speak ____ here.",
    "options": ["free", "freely", "freedom", "freeing"],
    "answer": "freely",
    "explanation": "Nghĩa là nói chuyện một cách tự do/thoải mái -> speak freely.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2099,
    "sentence": "The audience consisted ____ of students.",
    "options": ["most", "mostly", "almost", "utmost"],
    "answer": "mostly",
    "explanation": "Phân biệt 'most' (hầu hết - định lượng) và 'mostly' (chủ yếu là/phần lớn là - trạng từ). 'Consisted mostly of' (chủ yếu bao gồm).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2100,
    "sentence": "____, you don't believe him?",
    "options": ["Sure", "Surely", "Surety", "Assure"],
    "answer": "Surely",
    "explanation": "Trạng từ đứng đầu câu dùng để nhấn mạnh sự ngạc nhiên hoặc tìm kiếm sự đồng thuận. 'Surely' (Chắc hẳn là/Chẳng lẽ...).",
    "topic": "Sentence Adverbs"
  },
  {
    "id": 2101,
    "sentence": "He was ____ accused of the crime.",
    "options": ["wrong", "wrongly", "wrongful", "wrongness"],
    "answer": "wrongly",
    "explanation": "Bổ nghĩa cho động từ 'accused'. 'Wrongly accused' (bị kết tội oan/sai). 'Wrong' thường dùng sau động từ như 'go wrong', 'guess wrong'.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2102,
    "sentence": "The exam was ____ difficult.",
    "options": ["pretty", "prettily", "prettier", "prettiest"],
    "answer": "pretty",
    "explanation": "Trạng từ chỉ mức độ (khá là). 'Pretty difficult' (khá khó). 'Prettily' nghĩa là (một cách xinh đẹp/duyên dáng).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2103,
    "sentence": "Please be there at 8 o'clock ____.",
    "options": ["sharp", "sharply", "sharpen", "sharpness"],
    "answer": "sharp",
    "explanation": "Dùng cho thời gian: '8 o'clock sharp' (đúng 8 giờ). 'Sharply' dùng cho hành động (tăng mạnh, rẽ ngoặt, nói gay gắt).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2104,
    "sentence": "We flew ____ to London without stopping.",
    "options": ["direct", "directly", "direction", "director"],
    "answer": "direct",
    "explanation": "Phân biệt 'direct' (bay thẳng/không quá cảnh) và 'directly' (ngay lập tức/trực tiếp). Bay thẳng -> fly direct.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2105,
    "sentence": "He finished ____ in the race.",
    "options": ["last", "lastly", "lasted", "lasting"],
    "answer": "last",
    "explanation": "Chỉ thứ tự về đích -> finished last (về chót). 'Lastly' thường dùng liệt kê ý trong văn bản (Finally/Lastly).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2106,
    "sentence": "There is ____ any food left.",
    "options": ["hard", "hardly", "hardness", "harder"],
    "answer": "hardly",
    "explanation": "Cấu trúc 'hardly any' (hầu như không còn chút nào).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2107,
    "sentence": "I have been very busy ____.",
    "options": ["late", "lately", "later", "latest"],
    "answer": "lately",
    "explanation": "Nghĩa là 'gần đây' (recently) -> lately. 'Late' là trễ.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2108,
    "sentence": "They are ____ related to each other.",
    "options": ["close", "closely", "closed", "closer"],
    "answer": "closely",
    "explanation": "Nghĩa bóng: quan hệ mật thiết/gần gũi -> closely related. 'Close' dùng cho khoảng cách vật lý (sit close).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2109,
    "sentence": "There were ____ 50 people there.",
    "options": ["scare", "scarcely", "scarce", "scarcity"],
    "answer": "scarcely",
    "explanation": "Nghĩa là 'chỉ vừa mới/hầu như không' hoặc dùng với số lượng để chỉ sự ít ỏi. 'Scarcely 50 people' (chắc chỉ được tầm 50 người/hầu như không đủ 50 người).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2110,
    "sentence": "He treated me ____.",
    "options": ["fair", "fairly", "fairness", "fairs"],
    "answer": "fairly",
    "explanation": "Nghĩa là 'công bằng' -> treated me fairly. (Lưu ý: 'fairly' cũng có nghĩa là 'khá là' khi đứng trước tính từ).",
    "topic": "Adverbs"
  },
  {
    "id": 2111,
    "sentence": "I can ____ wait to see you.",
    "options": ["hard", "hardly", "hardness", "harden"],
    "answer": "hardly",
    "explanation": "Cấu trúc nhấn mạnh sự mong chờ: 'can hardly wait' (hầu như không thể chờ đợi được nữa/nóng lòng muốn gặp).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2112,
    "sentence": "The project is ____ 100 pages long.",
    "options": ["rough", "roughly", "roughness", "roughen"],
    "answer": "roughly",
    "explanation": "Nghĩa là 'khoảng chừng/xấp xỉ' (approximately) -> roughly.",
    "topic": "Adverbs"
  },
  {
    "id": 2113,
    "sentence": "He fell ____ on the floor.",
    "options": ["flat", "flatly", "flatten", "flatness"],
    "answer": "flat",
    "explanation": "Cụm 'fall flat' (ngã sóng soài). 'Flatly' dùng cho lời nói (flatly refuse).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2114,
    "sentence": "____ do we see such talent in a young child.",
    "options": ["Rare", "Rarely", "Rareness", "Rarity"],
    "answer": "Rarely",
    "explanation": "Đảo ngữ: Trạng từ phủ định đứng đầu câu + Trợ động từ + Chủ ngữ. 'Rarely do we see' (Hiếm khi chúng ta thấy).",
    "topic": "Inversion/Adverbs"
  },
  {
    "id": 2115,
    "sentence": "The knife cut ____ through the paper.",
    "options": ["clean", "cleanly", "cleanness", "cleaner"],
    "answer": "clean",
    "explanation": "Một số trạng từ giữ nguyên hình thức tính từ. 'Cut clean' (cắt ngọt/dứt khoát). 'Cleanly' thường dùng cho nghĩa bóng hoặc thể thao (chơi đẹp).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2116,
    "sentence": "Take it ____; don't work too hard.",
    "options": ["easy", "easily", "easiness", "ease"],
    "answer": "easy",
    "explanation": "Thành ngữ: 'Take it easy' (Thư giãn đi/Bình tĩnh nào). Không dùng 'easily' ở đây.",
    "topic": "Fixed Phrases"
  },
  {
    "id": 2117,
    "sentence": "He was ____ punished for his crimes.",
    "options": ["just", "justly", "justice", "justify"],
    "answer": "justly",
    "explanation": "Nghĩa là 'một cách công bằng/xứng đáng' -> justly punished. 'Just' nghĩa là 'vừa mới' hoặc 'chỉ'.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2118,
    "sentence": "Stand ____ of the closing doors.",
    "options": ["clear", "clearly", "clarity", "clearness"],
    "answer": "clear",
    "explanation": "Cụm từ: 'Stand clear' (đứng tránh ra/giữ khoảng cách). 'Clearly' nghĩa là 'rõ ràng'.",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2119,
    "sentence": "The baby is sleeping ____.",
    "options": ["sound", "soundly", "soundness", "sounds"],
    "answer": "soundly",
    "explanation": "Collocation: 'Sleep soundly' (ngủ say/ngon giấc).",
    "topic": "Collocations"
  },
  {
    "id": 2120,
    "sentence": "Turn ____ right at the corner.",
    "options": ["sharp", "sharply", "sharpen", "sharpness"],
    "answer": "sharp",
    "explanation": "Chỉ hướng đi/ngoặt gấp -> turn sharp right. 'Sharply' dùng cho lời nói hoặc tăng giảm (speak sharply, rise sharply).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2121,
    "sentence": "You are ____ right!",
    "options": ["dead", "deadly", "death", "die"],
    "answer": "dead",
    "explanation": "Trạng từ nhấn mạnh mức độ tuyệt đối trong văn nói: 'Dead right' (Hoàn toàn đúng/Chính xác 100%).",
    "topic": "Advanced Adverbs"
  },
  {
    "id": 2122,
    "sentence": "Please chop the onions ____.",
    "options": ["fine", "finely", "fineness", "finer"],
    "answer": "finely",
    "explanation": "Nghĩa là 'nhỏ/mịn' -> chop finely (băm nhỏ). 'Fine' thường dùng trong 'doing fine'.",
    "topic": "Adverbs"
  },
  {
    "id": 2123,
    "sentence": "He thinks ____ of you.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "highly",
    "explanation": "Cấu trúc: 'Think highly of someone' (Đánh giá cao/trọng vọng ai đó).",
    "topic": "Collocations"
  },
  {
    "id": 2124,
    "sentence": "I'll be with you ____.",
    "options": ["direct", "directly", "direction", "director"],
    "answer": "directly",
    "explanation": "Trong ngữ cảnh thời gian, 'directly' nghĩa là 'ngay lập tức/sớm thôi' (very soon).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2125,
    "sentence": "The arrow flew ____ to the target.",
    "options": ["straight", "straightly", "straighten", "straightness"],
    "answer": "straight",
    "explanation": "Trạng từ của 'straight' vẫn là 'straight'. Không có từ 'straightly' trong tiếng Anh chuẩn.",
    "topic": "Adverbs without -ly"
  },
  {
    "id": 2126,
    "sentence": "____, no one was hurt in the accident.",
    "options": ["Amazed", "Amazing", "Amazingly", "Amazement"],
    "answer": "Amazingly",
    "explanation": "Trạng từ quan điểm đứng đầu câu. 'Amazingly' (Thật đáng ngạc nhiên là...).",
    "topic": "Sentence Adverbs"
  },
  {
    "id": 2127,
    "sentence": "She works ____ as a consultant.",
    "options": ["primary", "primarily", "prime", "primacy"],
    "answer": "primarily",
    "explanation": "Nghĩa là 'chủ yếu/chính' -> works primarily as...",
    "topic": "Adverbs"
  },
  {
    "id": 2128,
    "sentence": "The rumor is ____ false.",
    "options": ["absolute", "absolutely", "absolution", "absolved"],
    "answer": "absolutely",
    "explanation": "Bổ nghĩa cho tính từ 'false'. 'Absolutely false' (hoàn toàn sai sự thật).",
    "topic": "Adverbs"
  },
  {
    "id": 2129,
    "sentence": "He was ____ disappointed.",
    "options": ["bitter", "bitterly", "bitterness", "bitters"],
    "answer": "bitterly",
    "explanation": "Collocation: 'Bitterly disappointed' (thất vọng ê chề/cay đắng).",
    "topic": "Collocations"
  },
  {
    "id": 2130,
    "sentence": "I ____ remember closing the door.",
    "options": ["distinct", "distinctly", "distinction", "distinctive"],
    "answer": "distinctly",
    "explanation": "Bổ nghĩa cho động từ nhận thức 'remember'. 'Distinctly remember' (nhớ rất rõ ràng).",
    "topic": "Collocations"
  },
  {
    "id": 2131,
    "sentence": "This theory is ____ accepted.",
    "options": ["wide", "widely", "width", "widen"],
    "answer": "widely",
    "explanation": "Bổ nghĩa cho phân từ 'accepted'. 'Widely accepted' (được chấp nhận rộng rãi).",
    "topic": "Adverbs"
  },
  {
    "id": 2132,
    "sentence": "Prices have increased ____.",
    "options": ["signify", "significant", "significantly", "significance"],
    "answer": "significantly",
    "explanation": "Bổ nghĩa cho động từ 'increased'. 'Increased significantly' (tăng đáng kể).",
    "topic": "Adverbs"
  },
  {
    "id": 2133,
    "sentence": "He checked the document ____.",
    "options": ["thorough", "thoroughly", "thought", "through"],
    "answer": "thoroughly",
    "explanation": "Bổ nghĩa cho động từ 'checked'. 'Checked thoroughly' (kiểm tra kỹ lưỡng/triệt để).",
    "topic": "Adverbs"
  },
  {
    "id": 2134,
    "sentence": "The cost of the project was ____ underestimated.",
    "options": ["gross", "grossly", "grossness", "grosses"],
    "answer": "grossly",
    "explanation": "Collocation: 'Grossly underestimated/exaggerated' (bị đánh giá thấp/thổi phồng một cách quá đáng/thô thiển).",
    "topic": "Adverbs"
  },
  {
    "id": 2135,
    "sentence": "____ did I know that he was the CEO of the company.",
    "options": ["Small", "Little", "Bit", "Few"],
    "answer": "Little",
    "explanation": "Đảo ngữ với trạng từ phủ định: 'Little did I know' (Tôi đâu có ngờ rằng/Tôi gần như không hề biết).",
    "topic": "Inversion"
  },
  {
    "id": 2136,
    "sentence": "The results are ____ linked to the new marketing strategy.",
    "options": ["inextricable", "inextricably", "extricate", "extrication"],
    "answer": "inextricably",
    "explanation": "Collocation: 'Inextricably linked/intertwined' (gắn bó khăng khít, không thể tách rời).",
    "topic": "Collocations"
  },
  {
    "id": 2137,
    "sentence": "He was ____ tired after the long flight.",
    "options": ["utter", "utterly", "utterance", "uttered"],
    "answer": "utterly",
    "explanation": "Trạng từ chỉ mức độ tuyệt đối (hoàn toàn/hết mức) bổ nghĩa cho tính từ. 'Utterly exhausted/tired'.",
    "topic": "Adverbs of Degree"
  },
  {
    "id": 2138,
    "sentence": "The information is ____ available to the public.",
    "options": ["free", "freely", "freedom", "freed"],
    "answer": "freely",
    "explanation": "Nghĩa là 'một cách tự do/không hạn chế'. 'Freely available' (được cung cấp rộng rãi/không giới hạn).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2139,
    "sentence": "The new law will ____ affect small businesses.",
    "options": ["inevitable", "inevitably", "inevitability", "invincible"],
    "answer": "inevitably",
    "explanation": "Trạng từ chỉ sự chắc chắn/không thể tránh khỏi. 'Inevitably affect' (chắc chắn sẽ ảnh hưởng).",
    "topic": "Adverbs"
  },
  {
    "id": 2140,
    "sentence": "They have ____ different views on the matter.",
    "options": ["fundamental", "fundamentally", "foundation", "fundament"],
    "answer": "fundamentally",
    "explanation": "Trạng từ chỉ mức độ cơ bản/bản chất. 'Fundamentally different' (khác nhau về mặt bản chất).",
    "topic": "Adverbs"
  },
  {
    "id": 2141,
    "sentence": "The project is ____ complete.",
    "options": ["virtually", "virtual", "virtue", "virtuous"],
    "answer": "virtually",
    "explanation": "Trạng từ 'virtually' nghĩa là 'hầu như/gần như' (almost). 'Virtually complete' (gần như hoàn thành).",
    "topic": "Adverbs"
  },
  {
    "id": 2142,
    "sentence": "He ____ refused to cooperate with the police.",
    "options": ["steadfast", "steadfastly", "steadfastness", "steady"],
    "answer": "steadfastly",
    "explanation": "Nghĩa là 'kiên quyết/trước sau như một'. 'Steadfastly refused' (khăng khăng từ chối).",
    "topic": "Adverbs"
  },
  {
    "id": 2143,
    "sentence": "The quality of the product is ____ superior.",
    "options": ["vast", "vastly", "vastness", "vastly"],
    "answer": "vastly",
    "explanation": "Trạng từ chỉ mức độ lớn, bổ nghĩa cho tính từ so sánh hoặc mang tính vượt trội. 'Vastly superior' (vượt trội hơn hẳn).",
    "topic": "Adverbs"
  },
  {
    "id": 2144,
    "sentence": "She was ____ moved by the performance.",
    "options": ["deep", "deeply", "depth", "deepen"],
    "answer": "deeply",
    "explanation": "Bổ nghĩa cho cảm xúc (nghĩa bóng) -> 'deeply moved' (cảm động sâu sắc).",
    "topic": "Confusing Adverbs"
  },
  {
    "id": 2145,
    "sentence": "The company is ____ seeking new investment.",
    "options": ["active", "actively", "activity", "activate"],
    "answer": "actively",
    "explanation": "Trạng từ bổ nghĩa cho hành động đang diễn ra. 'Actively seeking' (đang tích cực tìm kiếm).",
    "topic": "Adverbs"
  },
  {
    "id": 2146,
    "sentence": "The document was ____ signed by both parties.",
    "options": ["duly", "due", "dues", "duty"],
    "answer": "duly",
    "explanation": "Từ vựng trang trọng (Formal): 'Duly signed' (đã được ký kết đúng thủ tục/đúng hạn).",
    "topic": "Formal Adverbs"
  },
  {
    "id": 2147,
    "sentence": "The deadline is ____ approaching.",
    "options": ["fast", "fastly", "faster", "fastest"],
    "answer": "fast",
    "explanation": "Trạng từ của 'fast' vẫn là 'fast'. 'Fast approaching' (đang đến gần nhanh chóng).",
    "topic": "Adverbs without -ly"
  },
  {
    "id": 2148,
    "sentence": "The two events happened ____.",
    "options": ["simultaneous", "simultaneously", "simultaneity", "simulate"],
    "answer": "simultaneously",
    "explanation": "Nghĩa là 'xảy ra đồng thời/cùng một lúc'.",
    "topic": "Adverbs"
  },
  {
    "id": 2149,
    "sentence": "He is ____ qualified for the position.",
    "options": ["ample", "amply", "amplitude", "amplifier"],
    "answer": "amply",
    "explanation": "Nghĩa là 'dư dả/quá đủ'. 'Amply qualified' (thừa tiêu chuẩn/trình độ).",
    "topic": "Adverbs"
  },
  {
    "id": 2150,
    "sentence": "The policy was ____ implemented last year.",
    "options": ["initial", "initially", "initiate", "initiative"],
    "answer": "initially",
    "explanation": "Trạng từ chỉ thời điểm bắt đầu. 'Initially implemented' (ban đầu được triển khai).",
    "topic": "Adverbs"
  },
  {
    "id": 2151,
    "sentence": "The software is ____ updated.",
    "options": ["period", "periodic", "periodically", "periodical"],
    "answer": "periodically",
    "explanation": "Trạng từ chỉ tần suất (định kỳ). 'Periodically updated' (được cập nhật định kỳ).",
    "topic": "Adverbs"
  },
  {
    "id": 2152,
    "sentence": "The hotel is ____ situated in the heart of the city.",
    "options": ["ideal", "ideally", "ideality", "idealize"],
    "answer": "ideally",
    "explanation": "Collocation: 'Ideally situated/located' (vị trí lý tưởng).",
    "topic": "Adverbs"
  },
  {
    "id": 2153,
    "sentence": "He ____ missed the target.",
    "options": ["narrow", "narrowly", "narrowness", "narrowed"],
    "answer": "narrowly",
    "explanation": "Trạng từ 'narrowly' nghĩa là 'trong gang tấc/suýt soát'. 'Narrowly missed' (suýt chút nữa là trúng).",
    "topic": "Adverbs"
  },
  {
    "id": 2154,
    "sentence": "The new model is ____ superior to the previous one.",
    "options": ["vast", "vastly", "vastness", "vaster"],
    "answer": "vastly",
    "explanation": "Bổ nghĩa cho tính từ so sánh 'superior' cần trạng từ chỉ mức độ cực lớn. 'Vastly superior' (vượt trội hơn hẳn).",
    "topic": "Adverbs of Degree"
  },
  {
    "id": 2155,
    "sentence": "He was ____ aware of the risks involved in the deal.",
    "options": ["full", "fully", "fullness", "filling"],
    "answer": "fully",
    "explanation": "Bổ nghĩa cho tính từ 'aware'. 'Fully aware' (nhận thức đầy đủ/hoàn toàn).",
    "topic": "Adverbs"
  },
  {
    "id": 2156,
    "sentence": "The resources were ____ distributed among the departments.",
    "options": ["proportion", "proportional", "disproportionately", "proportioning"],
    "answer": "disproportionately",
    "explanation": "Trạng từ mang nghĩa 'không cân đối/quá chênh lệch'. Dựa vào ngữ cảnh phân chia tài nguyên trong quản trị doanh nghiệp.",
    "topic": "Advanced Adverbs"
  },
  {
    "id": 2157,
    "sentence": "____ had we started the meeting when the power went out.",
    "options": ["Hard", "Hardly", "Hardness", "Harden"],
    "answer": "Hardly",
    "explanation": "Cấu trúc đảo ngữ: 'Hardly + had + S + V3... when...' (Vừa mới... thì...).",
    "topic": "Inversion"
  },
  {
    "id": 2158,
    "sentence": "The weather was ____ hot for this time of year.",
    "options": ["atypical", "atypically", "type", "typicality"],
    "answer": "atypically",
    "explanation": "Trạng từ mang nghĩa 'khác thường/không điển hình'. Bổ nghĩa cho tính từ 'hot'.",
    "topic": "Advanced Adverbs"
  },
  {
    "id": 2159,
    "sentence": "She was ____ moved by the stories of the refugees.",
    "options": ["profound", "profoundly", "profundity", "profoundness"],
    "answer": "profoundly",
    "explanation": "Collocation: 'Profoundly moved' (cảm động sâu sắc). Dùng cho những cảm xúc mãnh liệt.",
    "topic": "Collocations"
  },
  {
    "id": 2160,
    "sentence": "The software is ____ compatible with various operating systems.",
    "options": ["universary", "universal", "universally", "universe"],
    "answer": "universally",
    "explanation": "Trạng từ mang nghĩa 'mọi lúc mọi nơi/toàn cầu'. 'Universally compatible' (tương thích phổ quát).",
    "topic": "Adverbs"
  },
  {
    "id": 2161,
    "sentence": "The evidence was ____ presented during the trial.",
    "options": ["compel", "compelling", "compellingly", "compulsion"],
    "answer": "compellingly",
    "explanation": "Trạng từ mang nghĩa 'một cách thuyết phục'. 'Compellingly presented' (được trình bày đầy thuyết phục).",
    "topic": "Adverbs"
  },
  {
    "id": 2162,
    "sentence": "He ____ avoids any kind of conflict.",
    "options": ["consistent", "consistently", "consistency", "consisting"],
    "answer": "consistently",
    "explanation": "Trạng từ tần suất mang nghĩa 'luôn luôn/trước sau như một'. 'Consistently avoids' (luôn luôn né tránh).",
    "topic": "Adverbs"
  },
  {
    "id": 2163,
    "sentence": "The project was ____ expensive for such a small company.",
    "options": ["prohibit", "prohibitive", "prohibitively", "prohibition"],
    "answer": "prohibitively",
    "explanation": "Cụm từ đặc biệt trong kinh doanh: 'Prohibitively expensive' (đắt đến mức không thể mua/làm nổi).",
    "topic": "Collocations"
  },
  {
    "id": 2164,
    "sentence": "We were ____ surprised by the outcome of the election.",
    "options": ["genuine", "genuinely", "genuineness", "genus"],
    "answer": "genuinely",
    "explanation": "Bổ nghĩa cho tính từ 'surprised'. 'Genuinely surprised' (thực sự ngạc nhiên - không giả tạo).",
    "topic": "Adverbs"
  },
  {
    "id": 2165,
    "sentence": "The report was ____ researched and well-written.",
    "options": ["meticulous", "meticulously", "meticulousness", "merit"],
    "answer": "meticulously",
    "explanation": "Trạng từ mang nghĩa 'tỉ mỉ/cẩn thận từng chút một'.",
    "topic": "Adverbs"
  },
  {
    "id": 2166,
    "sentence": "He is ____ the best candidate for the job.",
    "options": ["arguably", "argue", "arguable", "argument"],
    "answer": "arguably",
    "explanation": "Trạng từ quan điểm dùng để đưa ra nhận định có thể gây tranh cãi nhưng có cơ sở. 'Arguably the best' (Có thể coi là người tốt nhất).",
    "topic": "Sentence Adverbs"
  },
  {
    "id": 2167,
    "sentence": "The prices vary ____ from store to store.",
    "options": ["consider", "considerable", "considerably", "consideration"],
    "answer": "considerably",
    "explanation": "Bổ nghĩa cho động từ 'vary'. 'Vary considerably' (thay đổi/khác biệt đáng kể).",
    "topic": "Adverbs"
  },
  {
    "id": 2168,
    "sentence": "She ____ accepted the award on behalf of the team.",
    "options": ["gracious", "graciously", "graciousness", "grace"],
    "answer": "graciously",
    "explanation": "Trạng từ chỉ cách thức mang nghĩa 'lịch thiệp/nhã nhặn'.",
    "topic": "Adverbs"
  },
  {
    "id": 2169,
    "sentence": "The virus spread ____ throughout the country.",
    "options": ["rapid", "rapidly", "rapidity", "rapids"],
    "answer": "rapidly",
    "explanation": "Bổ nghĩa cho động từ 'spread'. 'Spread rapidly' (lây lan nhanh chóng).",
    "topic": "Adverbs"
  },
  {
    "id": 2170,
    "sentence": "The contract was ____ terminated due to a breach.",
    "options": ["unilateral", "unilaterally", "unilateralism", "unit"],
    "answer": "unilaterally",
    "explanation": "Thuật ngữ pháp lý/kinh doanh: 'Unilaterally terminated' (bị chấm dứt đơn phương).",
    "topic": "Business Vocabulary"
  },
  {
    "id": 2171,
    "sentence": "The information provided is ____ incorrect.",
    "options": ["fact", "factual", "factually", "factions"],
    "answer": "factually",
    "explanation": "Trạng từ bổ nghĩa cho tính từ 'incorrect'. 'Factually incorrect' (sai về mặt sự thật/dữ liệu).",
    "topic": "Adverbs"
  },
  {
    "id": 2172,
    "sentence": "He was ____ annoyed by the constant interruptions.",
    "options": ["visible", "visibly", "visibility", "vision"],
    "answer": "visibly",
    "explanation": "Trạng từ mang nghĩa 'có thể thấy rõ bằng mắt'. 'Visibly annoyed' (lộ rõ vẻ khó chịu).",
    "topic": "Adverbs"
  },
  {
    "id": 2173,
    "sentence": "The plan was ____ flawed from the start.",
    "options": ["fatal", "fatally", "fatality", "fate"],
    "answer": "fatally",
    "explanation": "Trạng từ mang nghĩa 'chí tử/nghiêm trọng dẫn đến thất bại'. 'Fatally flawed' (có sai lầm chết người/sai lầm căn bản).",
    "topic": "Collocations"
  }
];

const PART5_ADV_EASY = [
  {
    "id": 2084,
    "sentence": "The new manager works ____ with the marketing team.",
    "options": ["close", "closely", "closeness", "closing"],
    "answer": "closely",
    "explanation": "Cần trạng từ bổ nghĩa cho động từ 'works'. Cụm 'work closely with' (làm việc chặt chẽ với) rất phổ biến.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2085,
    "sentence": "Please read the manual ____ before operating the machine.",
    "options": ["careful", "care", "carefully", "carefulness"],
    "answer": "carefully",
    "explanation": "Trạng từ 'carefully' bổ nghĩa cho hành động 'read' (đọc một cách cẩn thận).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2086,
    "sentence": "The store is ____ located near the train station.",
    "options": ["convenient", "convenience", "conveniently", "convene"],
    "answer": "conveniently",
    "explanation": "Trạng từ bổ nghĩa cho phân từ 'located'. 'Conveniently located' (có vị trí thuận tiện).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2087,
    "sentence": "The company ____ announced the new partnership yesterday.",
    "options": ["official", "officially", "officials", "officiate"],
    "answer": "officially",
    "explanation": "Trạng từ bổ nghĩa cho động từ 'announced'. 'Officially announced' (tuyên bố một cách chính thức).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2088,
    "sentence": "Sales have increased ____ since the advertisement campaign.",
    "options": ["steady", "steadily", "steadiness", "steadiest"],
    "answer": "steadily",
    "explanation": "Bổ nghĩa cho động từ 'increased' cần trạng từ. 'Increased steadily' (tăng trưởng đều đặn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2089,
    "sentence": "The technician repaired the computer ____.",
    "options": ["quick", "quickly", "quickness", "quicker"],
    "answer": "quickly",
    "explanation": "Trạng từ đứng cuối câu bổ nghĩa cho hành động 'repaired' (sửa chữa một cách nhanh chóng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2090,
    "sentence": "The presentation was ____ received by the board members.",
    "options": ["well", "good", "better", "best"],
    "answer": "well",
    "explanation": "Trạng từ 'well' bổ nghĩa cho phân từ 'received' (được đón nhận tốt).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2091,
    "sentence": "We ____ recommend that you back up your files.",
    "options": ["strong", "strongly", "strength", "stronger"],
    "answer": "strongly",
    "explanation": "Trạng từ nhấn mạnh mức độ cho động từ 'recommend'. 'Strongly recommend' (nhiệt liệt đề xuất).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2092,
    "sentence": "The flight was delayed ____ due to technical issues.",
    "options": ["brief", "briefly", "brevity", "briefing"],
    "answer": "briefly",
    "explanation": "Trạng từ chỉ thời gian bổ nghĩa cho 'delayed'. 'Delayed briefly' (bị hoãn lại trong chốc lát).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2093,
    "sentence": "You should check the report ____ for any errors.",
    "options": ["thorough", "thoroughly", "thoroughness", "through"],
    "answer": "thoroughly",
    "explanation": "Bổ nghĩa cho động từ 'check'. 'Check thoroughly' (kiểm tra một cách kỹ lưỡng/triệt để).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2094,
    "sentence": "The client was ____ satisfied with the final result.",
    "options": ["full", "fully", "fullness", "filling"],
    "answer": "fully",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'satisfied'. 'Fully satisfied' (hoàn toàn hài lòng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2095,
    "sentence": "Please sign your name ____ on the dotted line.",
    "options": ["clear", "clearly", "clarity", "clearness"],
    "answer": "clearly",
    "explanation": "Bổ nghĩa cho hành động 'sign'. 'Sign clearly' (ký một cách rõ ràng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2096,
    "sentence": "The security system is ____ checked every month.",
    "options": ["regular", "regularly", "regularity", "regulate"],
    "answer": "regularly",
    "explanation": "Trạng từ tần suất bổ nghĩa cho động từ bị động 'checked'. 'Regularly checked' (được kiểm tra định kỳ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2097,
    "sentence": "The CEO spoke ____ about the company's future.",
    "options": ["optimistic", "optimism", "optimistically", "optimists"],
    "answer": "optimistically",
    "explanation": "Bổ nghĩa cho động từ 'spoke' cần trạng từ chỉ cách thức (nói một cách lạc quan).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2098,
    "sentence": "The bus arrived ____ at the station.",
    "options": ["prompt", "promptly", "promptness", "prompting"],
    "answer": "promptly",
    "explanation": "Trạng từ chỉ thời gian/cách thức. 'Arrived promptly' (đến đúng giờ/ngay lập tức).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2099,
    "sentence": "Parking is ____ available for all employees.",
    "options": ["free", "freely", "freedom", "freed"],
    "answer": "freely",
    "explanation": "Trong ngữ cảnh TOEIC, 'freely available' nghĩa là có sẵn một cách rộng rãi/thoải mái.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2100,
    "sentence": "The prices in this store are ____ high.",
    "options": ["extreme", "extremely", "extremity", "extremes"],
    "answer": "extremely",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'high'. 'Extremely high' (cực kỳ cao).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2101,
    "sentence": "He ____ forgot to bring his ID badge today.",
    "options": ["complete", "completely", "completion", "completing"],
    "answer": "completely",
    "explanation": "Trạng từ nhấn mạnh cho động từ 'forgot'. 'Completely forgot' (hoàn toàn quên mất).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2102,
    "sentence": "The conference will start ____ at 9:00 AM.",
    "options": ["exact", "exactly", "exacting", "exactness"],
    "answer": "exactly",
    "explanation": "Trạng từ nhấn mạnh thời điểm chính xác. 'Exactly at 9:00 AM'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2103,
    "sentence": "The software was ____ designed for small businesses.",
    "options": ["specific", "specifically", "specifying", "specification"],
    "answer": "specifically",
    "explanation": "Bổ nghĩa cho phân từ 'designed'. 'Specifically designed' (được thiết kế riêng biệt/đặc biệt).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2104,
    "sentence": "The marketing team worked ____ than the sales department this month.",
    "options": ["hardly", "harder", "hard", "hardest"],
    "answer": "harder",
    "explanation": "Câu so sánh hơn (có từ 'than'). Trạng từ 'hard' có dạng so sánh hơn là 'harder'. 'Hardly' là một từ khác mang nghĩa 'hầu như không'.",
    "topic": "Part 5 - Comparison of Adverbs"
  },
  {
    "id": 2105,
    "sentence": "____, the shipment was damaged during transit.",
    "options": ["Unfortunate", "Unfortunately", "Fortune", "Fortunate"],
    "answer": "Unfortunately",
    "explanation": "Đứng đầu câu và ngăn cách bằng dấu phẩy, cần một trạng từ bổ nghĩa cho cả câu (Sentence Adverb) để chỉ thái độ/quan điểm: 'Thật không may'.",
    "topic": "Part 5 - Sentence Adverbs"
  },
  {
    "id": 2106,
    "sentence": "Mr. Lee speaks English ____ enough to lead the international meeting.",
    "options": ["fluent", "fluently", "fluency", "fluentness"],
    "answer": "fluently",
    "explanation": "Bổ nghĩa cho động từ 'speaks' cần một trạng từ. Cấu trúc 'Adv + enough' (đủ trôi chảy).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2107,
    "sentence": "The auditor checked the financial records ____ more carefully than last year.",
    "options": ["very", "much", "too", "so"],
    "answer": "much",
    "explanation": "Dùng để nhấn mạnh so sánh hơn ('more carefully'). Trong tiếng Anh, 'much', 'far', hoặc 'a lot' thường dùng để nhấn mạnh mức độ so sánh.",
    "topic": "Part 5 - Adverb Modifiers"
  },
  {
    "id": 2108,
    "sentence": "The server is ____ down for scheduled maintenance.",
    "options": ["current", "currently", "currency", "currence"],
    "answer": "currently",
    "explanation": "Trạng từ chỉ thời gian đứng giữa trợ động từ 'is' và tính từ/trạng thái 'down'. 'Currently' (hiện tại).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2109,
    "sentence": "Please fill out the application form as ____ as possible.",
    "options": ["complete", "completely", "completion", "completing"],
    "answer": "completely",
    "explanation": "Cấu trúc 'as + Adj/Adv + as possible'. Bổ nghĩa cho động từ 'fill out' cần trạng từ 'completely' (một cách đầy đủ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2110,
    "sentence": "The new employee learns new tasks ____ quickly.",
    "options": ["amaze", "amazing", "amazingly", "amazement"],
    "answer": "amazingly",
    "explanation": "Cần một trạng từ chỉ mức độ để bổ nghĩa cho trạng từ 'quickly' đứng sau nó. 'Amazingly quickly' (nhanh một cách kinh ngạc).",
    "topic": "Part 5 - Adverbs modifying Adverbs"
  },
  {
    "id": 2111,
    "sentence": "The prices of our services are ____ competitive.",
    "options": ["highly", "high", "height", "higher"],
    "answer": "highly",
    "explanation": "Trạng từ 'highly' bổ nghĩa cho tính từ 'competitive'. Cụm 'highly competitive' (cực kỳ cạnh tranh) là collocation phổ biến.",
    "topic": "Part 5 - Adverbs modifying Adjectives"
  },
  {
    "id": 2112,
    "sentence": "Wait for the paint to dry ____ before applying the second coat.",
    "options": ["thorough", "thoroughly", "through", "thoroughness"],
    "answer": "thoroughly",
    "explanation": "Bổ nghĩa cho động từ 'dry'. 'Dry thoroughly' (khô hoàn toàn/khô kỹ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2113,
    "sentence": "The management team ____ disagreed with the consultant's proposal.",
    "options": ["total", "totally", "totality", "totals"],
    "answer": "totally",
    "explanation": "Trạng từ chỉ mức độ đứng trước động từ để nhấn mạnh. 'Totally disagreed' (hoàn toàn không đồng ý).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2114,
    "sentence": "You must arrive ____ at the airport to check in your luggage.",
    "options": ["early", "earlyness", "earlier", "earliest"],
    "answer": "early",
    "explanation": "Bổ nghĩa cho động từ 'arrive' cần trạng từ. 'Early' vừa là tính từ vừa là trạng từ (đến sớm).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2115,
    "sentence": "The project was ____ difficult, but we finished it on time.",
    "options": ["relative", "relatively", "relation", "relate"],
    "answer": "relatively",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'difficult'. 'Relatively difficult' (tương đối khó).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2116,
    "sentence": "The customer's complaint was handled ____.",
    "options": ["profession", "professional", "professionally", "professionalism"],
    "answer": "professionally",
    "explanation": "Bổ nghĩa cho động từ bị động 'was handled'. Cần trạng từ: 'một cách chuyên nghiệp'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2117,
    "sentence": "I ____ believe that we can reach our sales goal this year.",
    "options": ["firm", "firmly", "firmness", "firms"],
    "answer": "firmly",
    "explanation": "Trạng từ đứng trước động từ chính 'believe' để nhấn mạnh niềm tin. 'Firmly believe' (tin tưởng một cách chắc chắn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2118,
    "sentence": "The office will be closed ____ from July 1st to July 5th.",
    "options": ["temporary", "temporarily", "temporariness", "temporal"],
    "answer": "temporarily",
    "explanation": "Bổ nghĩa cho trạng thái 'closed'. 'Temporarily closed' (đóng cửa tạm thời).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2119,
    "sentence": "He answered the questions ____ and honestly during the interview.",
    "options": ["direct", "directly", "direction", "directness"],
    "answer": "directly",
    "explanation": "Song hành với trạng từ 'honestly' sau từ nối 'and', ta cần một trạng từ: 'directly' (trực tiếp/thẳng thắn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2120,
    "sentence": "The cost of raw materials has fallen ____ over the last quarter.",
    "options": ["slight", "slightly", "slightness", "slighted"],
    "answer": "slightly",
    "explanation": "Bổ nghĩa cho động từ 'fallen'. 'Fallen slightly' (giảm nhẹ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2121,
    "sentence": "The CEO visits the local branches ____ to meet with staff.",
    "options": ["regular", "regularly", "regularity", "regulate"],
    "answer": "regularly",
    "explanation": "Trạng từ chỉ tần suất bổ nghĩa cho động từ 'visits'. 'Visits regularly' (thăm thường xuyên).",
    "topic": "Part 5 - Adverbs of Frequency"
  },
  {
    "id": 2122,
    "sentence": "The instructions are ____ simple to understand.",
    "options": ["fair", "fairly", "fairness", "fairs"],
    "answer": "fairly",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'simple'. 'Fairly simple' (khá là đơn giản).",
    "topic": "Part 5 - Adverbs of Degree"
  },
  {
    "id": 2123,
    "sentence": "The new software is ____ better than the old version.",
    "options": ["significantly", "significant", "significance", "signify"],
    "answer": "significantly",
    "explanation": "Trạng từ nhấn mạnh cấu trúc so sánh hơn 'better'. 'Significantly better' (tốt hơn đáng kể).",
    "topic": "Part 5 - Adverb Modifiers"
  },
  {
    "id": 2124,
    "sentence": "The renovations to the lobby are ____ complete.",
    "options": ["near", "nearly", "nearness", "nearing"],
    "answer": "nearly",
    "explanation": "Trạng từ 'nearly' bổ nghĩa cho tính từ 'complete' (gần như hoàn thành). 'Near' thường là giới từ hoặc tính từ chỉ khoảng cách.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2125,
    "sentence": "The security system was ____ installed by a local company.",
    "options": ["recent", "recently", "recency", "recentness"],
    "answer": "recently",
    "explanation": "Bổ nghĩa cho động từ bị động 'was installed'. 'Recently' (gần đây) là trạng từ chỉ thời gian phổ biến.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2126,
    "sentence": "The marketing manager was ____ impressed by the presentation.",
    "options": ["particular", "particularly", "particularity", "particularize"],
    "answer": "particularly",
    "explanation": "Trạng từ chỉ mức độ nhấn mạnh tính từ/phân từ 'impressed'. 'Particularly' (đặc biệt/nhất là).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2127,
    "sentence": "The price of the subscription is ____ 50 dollars per year.",
    "options": ["approximate", "approximately", "approximation", "approximated"],
    "answer": "approximately",
    "explanation": "Trước một con số (50 dollars) cần trạng từ để chỉ sự ước lượng. 'Approximately' (xấp xỉ/khoảng).",
    "topic": "Part 5 - Adverbs modifying Numbers"
  },
  {
    "id": 2128,
    "sentence": "Our technicians can ____ solve most software issues remotely.",
    "options": ["easy", "easily", "easiness", "ease"],
    "answer": "easily",
    "explanation": "Trạng từ đứng giữa trợ động từ 'can' và động từ chính 'solve'. 'Easily' (một cách dễ dàng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2129,
    "sentence": "The board members will ____ approve the budget next week.",
    "options": ["probable", "probably", "probability", "probabilities"],
    "answer": "probably",
    "explanation": "Trạng từ chỉ sự chắc chắn đứng sau trợ động từ 'will'. 'Probably' (có lẽ/có khả năng).",
    "topic": "Part 5 - Adverbs of Certainty"
  },
  {
    "id": 2130,
    "sentence": "The legal department checked the contract ____.",
    "options": ["brief", "briefly", "brevity", "brieflyness"],
    "answer": "briefly",
    "explanation": "Bổ nghĩa cho động từ 'checked'. 'Briefly' (một cách ngắn gọn/nhanh chóng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2131,
    "sentence": "The shipment arrived ____ due to a delay at the port.",
    "options": ["late", "lately", "lateness", "latest"],
    "answer": "late",
    "explanation": "Trong ngữ cảnh này, 'late' đóng vai trò trạng từ (đến muộn). 'Lately' nghĩa là 'gần đây' (recently), không hợp nghĩa.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2132,
    "sentence": "She ____ recommended the new restaurant to her colleagues.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "highly",
    "explanation": "Collocation: 'Highly recommend' (cực kỳ đề xuất/đánh giá cao).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2133,
    "sentence": "The hotel guests were ____ moved to a different room.",
    "options": ["quick", "quickly", "quickness", "quicker"],
    "answer": "quickly",
    "explanation": "Trạng từ bổ nghĩa cho phân từ 'moved' trong câu bị động.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2134,
    "sentence": "The report is ____ ready for the annual meeting.",
    "options": ["final", "finally", "finality", "finalize"],
    "answer": "finally",
    "explanation": "Trạng từ 'finally' (cuối cùng cũng) bổ nghĩa cho trạng thái 'ready'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2135,
    "sentence": "The new software is ____ compatible with older operating systems.",
    "options": ["full", "fully", "fullness", "filling"],
    "answer": "fully",
    "explanation": "Bổ nghĩa cho tính từ 'compatible'. 'Fully compatible' (hoàn toàn tương thích).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2136,
    "sentence": "Please fill out the survey as ____ as you can.",
    "options": ["honest", "honestly", "honesty", "honestness"],
    "answer": "honestly",
    "explanation": "Cấu trúc 'as + Adv + as'. Bổ nghĩa cho động từ 'fill out'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2137,
    "sentence": "The company ____ supports local environmental initiatives.",
    "options": ["active", "actively", "activity", "activation"],
    "answer": "actively",
    "explanation": "Trạng từ 'actively' bổ nghĩa cho động từ 'supports'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2138,
    "sentence": "The prices of our products are ____ calculated based on market value.",
    "options": ["careful", "carefully", "care", "carefulness"],
    "answer": "carefully",
    "explanation": "Bổ nghĩa cho phân từ 'calculated'. 'Carefully calculated' (được tính toán cẩn thận).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2139,
    "sentence": "The project was ____ more expensive than we had anticipated.",
    "options": ["considerable", "considerably", "consideration", "considering"],
    "answer": "considerably",
    "explanation": "Trạng từ nhấn mạnh cấu trúc so sánh hơn 'more expensive'. 'Considerably' (đáng kể).",
    "topic": "Part 5 - Adverbs modifying Comparatives"
  },
  {
    "id": 2140,
    "sentence": "The candidate answered the interviewer's questions ____.",
    "options": ["confident", "confidence", "confidently", "confidential"],
    "answer": "confidently",
    "explanation": "Bổ nghĩa cho động từ 'answered'. 'Confidently' (một cách tự tin).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2141,
    "sentence": "The office lights are ____ turned off after 7:00 PM.",
    "options": ["automatic", "automatically", "automation", "automate"],
    "answer": "automatically",
    "explanation": "Bổ nghĩa cho hành động 'turned off'. 'Automatically' (một cách tự động).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2142,
    "sentence": "The schedule is ____ changed to accommodate everyone's needs.",
    "options": ["frequent", "frequently", "frequency", "frequented"],
    "answer": "frequently",
    "explanation": "Trạng từ tần suất 'frequently' (thường xuyên) bổ nghĩa cho 'changed'.",
    "topic": "Part 5 - Adverbs of Frequency"
  },
  {
    "id": 2143,
    "sentence": "I ____ recommend this training program to all new employees.",
    "options": ["strong", "strongly", "strength", "stronger"],
    "answer": "strongly",
    "explanation": "Trạng từ nhấn mạnh động từ 'recommend'. 'Strongly recommend' (nhiệt liệt đề cử).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2144,
    "sentence": "The director was ____ surprised by the sudden increase in production costs.",
    "options": ["genuine", "genuinely", "genuineness", "genuining"],
    "answer": "genuinely",
    "explanation": "Trạng từ 'genuinely' (thực sự) bổ nghĩa cho tính từ 'surprised'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2145,
    "sentence": "Please ensure that all electrical devices are ____ turned off before leaving.",
    "options": ["complete", "completely", "completion", "completeness"],
    "answer": "completely",
    "explanation": "Bổ nghĩa cho cụm động từ bị động 'turned off'. 'Completely' (hoàn toàn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2146,
    "sentence": "The new auditorium is ____ larger than the old one.",
    "options": ["substance", "substantial", "substantially", "substantiate"],
    "answer": "substantially",
    "explanation": "Trạng từ bổ nghĩa cho cấu trúc so sánh hơn 'larger than'. 'Substantially' (đáng kể/nhiều).",
    "topic": "Part 5 - Adverbs modifying Comparatives"
  },
  {
    "id": 2147,
    "sentence": "The manager ____ review the monthly reports every Friday.",
    "options": ["usual", "usually", "usage", "usualness"],
    "answer": "usually",
    "explanation": "Trạng từ tần suất đứng trước động từ thường 'review'. 'Usually' (thường xuyên).",
    "topic": "Part 5 - Adverbs of Frequency"
  },
  {
    "id": 2148,
    "sentence": "The company decided to ____ postpone the meeting until next week.",
    "options": ["temporary", "temporarily", "temporariness", "temporal"],
    "answer": "temporarily",
    "explanation": "Trạng từ đứng trước động từ 'postpone' (trì hoãn). 'Temporarily' (tạm thời).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2149,
    "sentence": "The instructions for the new software are ____ easy to follow.",
    "options": ["extreme", "extremely", "extremity", "extremes"],
    "answer": "extremely",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'easy'. 'Extremely' (cực kỳ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2150,
    "sentence": "We ____ apologize for any inconvenience caused by the delay.",
    "options": ["sincere", "sincerely", "sincerity", "sincerest"],
    "answer": "sincerely",
    "explanation": "Cụm từ trang trọng trong email: 'Sincerely apologize' (chân thành xin lỗi).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2151,
    "sentence": "The results of the laboratory test were ____ accurate.",
    "options": ["high", "highly", "height", "higher"],
    "answer": "highly",
    "explanation": "Trạng từ 'highly' bổ nghĩa cho tính từ 'accurate'. 'Highly accurate' (độ chính xác cao).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2152,
    "sentence": "The project was completed ____ under the original budget.",
    "options": ["success", "successful", "successfully", "succeed"],
    "answer": "successfully",
    "explanation": "Trạng từ bổ nghĩa cho phân từ 'completed' trong câu bị động.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2153,
    "sentence": "The CEO visits each department ____ to monitor progress.",
    "options": ["periodic", "periodically", "period", "periodical"],
    "answer": "periodically",
    "explanation": "Trạng từ chỉ tần suất (định kỳ). 'Visits periodically'.",
    "topic": "Part 5 - Adverbs of Frequency"
  },
  {
    "id": 2154,
    "sentence": "The data is ____ stored on a secure remote server.",
    "options": ["safe", "safely", "safety", "safest"],
    "answer": "safely",
    "explanation": "Bổ nghĩa cho hành động 'stored'. 'Safely stored' (được lưu trữ một cách an toàn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2155,
    "sentence": "The marketing strategy was ____ effective in attracting new clients.",
    "options": ["remark", "remarkable", "remarkably", "remarking"],
    "answer": "remarkably",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'effective'. 'Remarkably' (đáng chú ý/xuất sắc).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2156,
    "sentence": "Please respond ____ to the client's request for information.",
    "options": ["prompt", "promptly", "promptness", "prompting"],
    "answer": "promptly",
    "explanation": "Bổ nghĩa cho động từ 'respond'. 'Respond promptly' (phản hồi ngay lập tức).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2157,
    "sentence": "The hotel is ____ located within walking distance of the beach.",
    "options": ["ideal", "ideally", "idealize", "idealism"],
    "answer": "ideally",
    "explanation": "Collocation: 'Ideally located' (có vị trí lý tưởng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2158,
    "sentence": "Prices for electronics have dropped ____ in recent months.",
    "options": ["sharp", "sharply", "sharpen", "sharpness"],
    "answer": "sharply",
    "explanation": "Bổ nghĩa cho động từ 'dropped'. 'Dropped sharply' (giảm mạnh).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2159,
    "sentence": "All employees are ____ encouraged to attend the safety workshop.",
    "options": ["strong", "strongly", "strength", "strongest"],
    "answer": "strongly",
    "explanation": "Cụm từ nhấn mạnh: 'Strongly encouraged' (được khuyến khích mạnh mẽ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2160,
    "sentence": "The two companies work ____ on research and development projects.",
    "options": ["close", "closely", "closeness", "closing"],
    "answer": "closely",
    "explanation": "Cấu trúc 'work closely' (làm việc chặt chẽ/mật thiết).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2161,
    "sentence": "The legal team is ____ reviewing the terms of the contract.",
    "options": ["careful", "care", "carefully", "carefulness"],
    "answer": "carefully",
    "explanation": "Bổ nghĩa cho động từ 'reviewing'. 'Carefully reviewing' (đang xem xét cẩn thận).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2162,
    "sentence": "The new software performs ____ better than the previous version.",
    "options": ["signify", "significant", "significantly", "significance"],
    "answer": "significantly",
    "explanation": "Trạng từ nhấn mạnh cấu trúc so sánh hơn 'better than'. 'Significantly' (đáng kể).",
    "topic": "Part 5 - Adverbs modifying Comparatives"
  },
  {
    "id": 2163,
    "sentence": "The flight was ____ cancelled due to severe weather conditions.",
    "options": ["final", "finally", "finalize", "finality"],
    "answer": "finally",
    "explanation": "Trạng từ bổ nghĩa cho hành động 'cancelled'. 'Finally cancelled' (cuối cùng đã bị hủy).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2164,
    "sentence": "The discount is ____ available to customers who sign up for the newsletter.",
    "options": ["exclusive", "exclusively", "exclusion", "exclude"],
    "answer": "exclusively",
    "explanation": "Bổ nghĩa cho tính từ 'available'. 'Exclusively' (dành riêng/độc quyền) chỉ đối tượng duy nhất được hưởng ưu đãi.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2165,
    "sentence": "The new system is ____ more efficient than the one we used previously.",
    "options": ["noticeable", "noticeably", "notice", "noticing"],
    "answer": "noticeably",
    "explanation": "Trạng từ bổ nghĩa cho cấu trúc so sánh hơn 'more efficient'. 'Noticeably' (đáng chú ý/rõ rệt).",
    "topic": "Part 5 - Adverbs modifying Comparatives"
  },
  {
    "id": 2166,
    "sentence": "Please check the document ____ to ensure there are no formatting errors.",
    "options": ["thorough", "thoroughly", "thoroughness", "through"],
    "answer": "thoroughly",
    "explanation": "Bổ nghĩa cho động từ 'check'. 'Check thoroughly' (kiểm tra một cách kỹ lưỡng/triệt để).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2167,
    "sentence": "The CEO will ____ visit our branch office next month.",
    "options": ["definite", "definitely", "definition", "definitive"],
    "answer": "definitely",
    "explanation": "Trạng từ chỉ sự chắc chắn đứng giữa trợ động từ 'will' và động từ chính 'visit'.",
    "topic": "Part 5 - Adverbs of Certainty"
  },
  {
    "id": 2168,
    "sentence": "The manager spoke ____ about the upcoming department merger.",
    "options": ["brief", "briefly", "brevity", "briefing"],
    "answer": "briefly",
    "explanation": "Bổ nghĩa cho động từ 'spoke'. 'Spoke briefly' (nói một cách ngắn gọn/sơ qua).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2169,
    "sentence": "The project was delayed ____ due to a shortage of raw materials.",
    "options": ["unavoidable", "unavoidably", "unavoidability", "avoid"],
    "answer": "unavoidably",
    "explanation": "Trạng từ bổ nghĩa cho phân từ 'delayed'. 'Unavoidably delayed' (bị trì hoãn một cách không thể tránh khỏi).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2170,
    "sentence": "Sales figures for the third quarter were ____ higher than expected.",
    "options": ["slight", "slightly", "slightness", "slighting"],
    "answer": "slightly",
    "explanation": "Trạng từ chỉ mức độ nhẹ bổ nghĩa cho tính từ so sánh 'higher'. 'Slightly higher' (cao hơn một chút).",
    "topic": "Part 5 - Adverbs modifying Comparatives"
  },
  {
    "id": 2171,
    "sentence": "The new employee integrated ____ into the existing team.",
    "options": ["smooth", "smoothly", "smoothness", "smoothen"],
    "answer": "smoothly",
    "explanation": "Bổ nghĩa cho động từ 'integrated'. 'Integrated smoothly' (hòa nhập một cách trơn tru).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2172,
    "sentence": "All confidential files are ____ locked in the cabinet.",
    "options": ["secure", "securely", "security", "secured"],
    "answer": "securely",
    "explanation": "Trạng từ bổ nghĩa cho phân từ 'locked' trong câu bị động. 'Securely locked' (được khóa an toàn).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2173,
    "sentence": "The technician is ____ capable of fixing the server issue.",
    "options": ["full", "fully", "fullness", "filling"],
    "answer": "fully",
    "explanation": "Bổ nghĩa cho tính từ 'capable'. 'Fully capable' (hoàn toàn có khả năng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2174,
    "sentence": "The company's stock price has been fluctuating ____ all week.",
    "options": ["wild", "wildly", "wildness", "wilder"],
    "answer": "wildly",
    "explanation": "Bổ nghĩa cho động từ 'fluctuating'. 'Fluctuating wildly' (biến động dữ dội/mạnh mẽ).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2175,
    "sentence": "Please arrive ____ at 8:30 AM for the orientation session.",
    "options": ["prompt", "promptly", "promptness", "prompting"],
    "answer": "promptly",
    "explanation": "Trạng từ chỉ thời gian/cách thức. 'Arrive promptly' (đến đúng giờ/ngay lập tức).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2176,
    "sentence": "The proposal was ____ rejected by the committee.",
    "options": ["unanimous", "unanimously", "unanimity", "animate"],
    "answer": "unanimously",
    "explanation": "Bổ nghĩa cho hành động 'rejected'. 'Unanimously rejected' (bị từ chối một cách nhất trí/đồng lòng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2177,
    "sentence": "The training manual is ____ written to avoid confusion.",
    "options": ["clear", "clearly", "clarity", "clearing"],
    "answer": "clearly",
    "explanation": "Bổ nghĩa cho phân từ 'written'. 'Clearly written' (được viết một cách rõ ràng).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2178,
    "sentence": "The price of the product is ____ high for most consumers.",
    "options": ["extreme", "extremely", "extremity", "extremes"],
    "answer": "extremely",
    "explanation": "Trạng từ chỉ mức độ bổ nghĩa cho tính từ 'high'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2179,
    "sentence": "The HR department ____ reviews all job applications.",
    "options": ["careful", "carefully", "care", "carefulness"],
    "answer": "carefully",
    "explanation": "Bổ nghĩa cho động từ 'reviews'. 'Carefully reviews' (xem xét một cách cẩn thận).",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2180,
    "sentence": "We are ____ looking for ways to reduce our carbon footprint.",
    "options": ["active", "actively", "activity", "activism"],
    "answer": "actively",
    "explanation": "Trạng từ 'actively' bổ nghĩa cho thì hiện tại tiếp diễn 'are looking for'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2181,
    "sentence": "The seminar was ____ more informative than I had expected.",
    "options": ["far", "very", "too", "so"],
    "answer": "far",
    "explanation": "Dùng để nhấn mạnh so sánh hơn ('more informative'). 'Far more' (hơn rất nhiều).",
    "topic": "Part 5 - Adverb Modifiers"
  },
  {
    "id": 2182,
    "sentence": "The flight was ____ delayed by heavy fog.",
    "options": ["temporary", "temporarily", "temporariness", "temporal"],
    "answer": "temporarily",
    "explanation": "Trạng từ 'temporarily' (tạm thời) bổ nghĩa cho trạng thái 'delayed'.",
    "topic": "Part 5 - Adverbs"
  },
  {
    "id": 2183,
    "sentence": "Please listen ____ while the safety procedures are explained.",
    "options": ["attentive", "attentively", "attention", "attentiveness"],
    "answer": "attentively",
    "explanation": "Bổ nghĩa cho động từ 'listen'. 'Listen attentively' (lắng nghe một cách chăm chú).",
    "topic": "Part 5 - Adverbs"
  }
];

const PART5_ADV_HARD = [
  {
    id: 2091,
    sentence: "The CEO spoke ____ about the company's future.",
    options: ["confident", "confidence", "confidently", "confidences"],
    answer: "confidently",
    explanation: "Trang tu bo nghia cho dong tu 'spoke'.",
    topic: "Part 5 - Adverbs",
  },
  {
    id: 2092,
    sentence: "The files were ____ organized for quick access.",
    options: ["neat", "neatly", "neatness", "neaten"],
    answer: "neatly",
    explanation: "Trang tu bo nghia cho V3 'organized'.",
    topic: "Part 5 - Adverbs",
  },
  {
    id: 2093,
    sentence: "You should check the figures ____ before submitting the report.",
    options: ["careful", "carefully", "care", "caring"],
    answer: "carefully",
    explanation: "Trang tu bo nghia cho dong tu 'check'.",
    topic: "Part 5 - Adverbs",
  },
];

const VERB_RECOGNITION_EASY = [
  {
    id: 2101,
    sentence: "The company ____ a new policy last month.",
    options: ["introduce", "introduced", "introduction", "introducing"],
    answer: "introduced",
    explanation: "Can dong tu chia qua khu don (last month).",
    topic: "Verbs",
  },
  {
    id: 2102,
    sentence: "Every employee must ____ the form before Friday.",
    options: ["sign", "signed", "signing", "signature"],
    answer: "sign",
    explanation: "Sau modal verb 'must' dung dong tu nguyen mau.",
    topic: "Verbs",
  },
  {
    id: 2103,
    sentence: "The meeting ____ at 9 a.m. every Monday.",
    options: ["start", "starts", "starting", "started"],
    answer: "starts",
    explanation: "Hien tai don, chu ngu so it (The meeting) -> starts.",
    topic: "Verbs",
  },
];

const VERB_RECOGNITION_HARD = [
  {
    id: 2111,
    sentence: "The documents must be ____ by the manager.",
    options: ["approve", "approved", "approval", "approving"],
    answer: "approved",
    explanation: "Bi dong: must be + V3.",
    topic: "Verbs",
  },
  {
    id: 2112,
    sentence: "The staff members ____ to attend the training session.",
    options: ["require", "required", "requirement", "requiring"],
    answer: "required",
    explanation: "Bi dong rut gon: are required to + V.",
    topic: "Verbs",
  },
  {
    id: 2113,
    sentence: "The IT team is ____ the issue right now.",
    options: ["investigate", "investigated", "investigating", "investigation"],
    answer: "investigating",
    explanation: "Hien tai tiep dien: is + V-ing.",
    topic: "Verbs",
  },
];

const SENTENCE_STRUCTURE_EASY = [
  {
    id: 2121,
    sentence: "Choose the correct sentence (S + V + O):",
    options: [
      "Completed the report she yesterday.",
      "She completed the report yesterday.",
      "She the report completed yesterday.",
      "Completed she yesterday the report.",
    ],
    answer: "She completed the report yesterday.",
    explanation: "Thu tu co ban: Subject + Verb + Object (+ time).",
    topic: "Sentence Structure",
  },
  {
    id: 2122,
    sentence: "The assistant sent ____.",
    options: ["to the client the email", "the email to the client", "the client to the email", "email the client to"],
    answer: "the email to the client",
    explanation: "Thu tu tu nhien: send + O + to + nguoi nhan.",
    topic: "Sentence Structure",
  },
  {
    id: 2123,
    sentence: "They will discuss ____ tomorrow.",
    options: ["the plan", "discuss", "discussion", "discussed"],
    answer: "the plan",
    explanation: "Dong tu 'discuss' can tan ngu (object).",
    topic: "Sentence Structure",
  },
];

const SENTENCE_STRUCTURE_HARD = [
  {
    id: 2131,
    sentence: "Choose the correct sentence (S + V + O + O):",
    options: [
      "She explained me the process.",
      "She explained the process to me.",
      "She explained to me about the process.",
      "She explained the process me.",
    ],
    answer: "She explained the process to me.",
    explanation: "'Explain' dung: explain + something + to someone.",
    topic: "Sentence Structure",
  },
  {
    id: 2132,
    sentence: "The manager asked ____ to submit the forms.",
    options: ["us", "we", "our", "ours"],
    answer: "us",
    explanation: "Sau dong tu 'asked' can tan ngu: asked us to...",
    topic: "Sentence Structure",
  },
  {
    id: 2133,
    sentence: "Choose the best option: \"The report ____ yesterday\"",
    options: ["was submitted", "submitted", "submitting", "submit"],
    answer: "was submitted",
    explanation: "Cau bi dong qua khu: was/were + V3.",
    topic: "Sentence Structure",
  },
];

const PART5_VERB_EASY = [
  {
    id: 2141,
    sentence: "The company will ____ the new software next week.",
    options: ["launch", "launched", "launching", "launcher"],
    answer: "launch",
    explanation: "Sau 'will' dung dong tu nguyen mau.",
    topic: "Part 5 - Verbs",
  },
  {
    id: 2142,
    sentence: "He ____ the presentation slides before the meeting.",
    options: ["prepare", "prepared", "preparation", "preparing"],
    answer: "prepared",
    explanation: "Ngu canh qua khu -> prepared.",
    topic: "Part 5 - Verbs",
  },
  {
    id: 2143,
    sentence: "The printer needs to be ____ immediately.",
    options: ["repair", "repaired", "repairing", "repairs"],
    answer: "repaired",
    explanation: "Bi dong: needs to be + V3.",
    topic: "Part 5 - Verbs",
  },
];

const PART5_VERB_HARD = [
  {
    id: 2151,
    sentence: "The new system has ____ several errors so far.",
    options: ["cause", "causing", "caused", "causes"],
    answer: "caused",
    explanation: "Hien tai hoan thanh: has + V3.",
    topic: "Part 5 - Tenses",
  },
  {
    id: 2152,
    sentence: "Employees are ____ to arrive on time.",
    options: ["expect", "expected", "expecting", "expectation"],
    answer: "expected",
    explanation: "Bi dong: are expected to + V.",
    topic: "Part 5 - Verbs",
  },
  {
    id: 2153,
    sentence: "The manager suggested that we ____ the deadline.",
    options: ["meet", "meets", "met", "meeting"],
    answer: "meet",
    explanation: "Subjunctive: suggest that + S + V (bare).",
    topic: "Part 5 - Subjunctive",
  },
];

const SVA_RECOGNITION_EASY = [
  {
    id: 2161,
    sentence: "Each of the applicants ____ qualified.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Each + of + N(plural) -> dong tu so it.",
    topic: "S-V Agreement",
  },
  {
    id: 2162,
    sentence: "The manager and the staff ____ ready for the meeting.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    explanation: "A and B -> chu ngu so nhieu -> are.",
    topic: "S-V Agreement",
  },
  {
    id: 2163,
    sentence: "The list of items ____ on the desk.",
    options: ["are", "is", "were", "have"],
    answer: "is",
    explanation: "Chu ngu chinh la 'The list' (so it).",
    topic: "S-V Agreement",
  },
];

const SVA_RECOGNITION_HARD = [
  {
    id: 2171,
    sentence: "Neither the suppliers nor the buyer ____ satisfied.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Neither...nor: dong tu theo chu ngu gan nhat (buyer - so it).",
    topic: "S-V Agreement",
  },
  {
    id: 2172,
    sentence: "A number of employees ____ attending the seminar.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    explanation: "'A number of' + plural noun -> dong tu so nhieu.",
    topic: "S-V Agreement",
  },
  {
    id: 2173,
    sentence: "The number of employees ____ increasing this year.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "'The number of' -> nhan manh so luong -> dong tu so it.",
    topic: "S-V Agreement",
  },
];

const PART5_SVA_EASY = [
  {
    id: 2181,
    sentence: "The report on sales figures ____ ready now.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Chu ngu chinh: The report (so it).",
    topic: "Part 5 - S-V Agreement",
  },
  {
    id: 2182,
    sentence: "All of the equipment ____ stored in the warehouse.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Equipment la danh tu khong dem duoc -> dung dong tu so it.",
    topic: "Part 5 - S-V Agreement",
  },
  {
    id: 2183,
    sentence: "Both the CEO and the director ____ attending the meeting.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    explanation: "Both A and B -> dong tu so nhieu.",
    topic: "Part 5 - S-V Agreement",
  },
];

const PART5_SVA_HARD = [
  {
    id: 2191,
    sentence: "The quality of the products ____ improved significantly.",
    options: ["has", "have", "are", "were"],
    answer: "has",
    explanation: "Chu ngu chinh: The quality (so it).",
    topic: "Part 5 - S-V Agreement",
  },
  {
    id: 2192,
    sentence: "None of the information ____ available at the moment.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Information la khong dem duoc -> is.",
    topic: "Part 5 - S-V Agreement",
  },
  {
    id: 2193,
    sentence: "The team of engineers ____ working on the project.",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Team la tap hop -> thuong dung dong tu so it trong TOEIC.",
    topic: "Part 5 - S-V Agreement",
  },
];

const PART7_ADS_EASY = [
  {
    id: 2201,
    sentence: "NOTICE: The office will be closed on ____ for maintenance.",
    options: ["Monday", "Mondays", "Monday's", "the Monday"],
    answer: "Monday",
    explanation: "Ten ngay trong tuan viet hoa va khong can so nhieu.",
    topic: "Part 7 - Notices",
  },
  {
    id: 2202,
    sentence: "ANNOUNCEMENT: Please submit the form by ____.",
    options: ["5 p.m.", "5 p.m.s", "the 5 p.m.", "5 p.m.'"],
    answer: "5 p.m.",
    explanation: "Gio giac dung dang: 5 p.m.",
    topic: "Part 7 - Announcements",
  },
  {
    id: 2203,
    sentence: "ADVERTISEMENT: This weekend only, all shoes are 20% ____.",
    options: ["discount", "discounted", "discounting", "discounts"],
    answer: "discounted",
    explanation: "Be discounted: duoc giam gia.",
    topic: "Part 7 - Ads",
  },
];

const PART7_ADS_HARD = [
  {
    id: 2211,
    sentence: "NOTICE: Employees must wear their ID badges at ____ times.",
    options: ["all", "every", "each", "whole"],
    answer: "all",
    explanation: "Cum tu co dinh: at all times.",
    topic: "Part 7 - Notices",
  },
  {
    id: 2212,
    sentence: "ANNOUNCEMENT: The seminar has been ____ to next Friday.",
    options: ["postpone", "postponed", "postponing", "postponement"],
    answer: "postponed",
    explanation: "Bi dong: has been + V3.",
    topic: "Part 7 - Announcements",
  },
  {
    id: 2213,
    sentence: "ADVERTISEMENT: Customers who sign up today will receive a ____ gift.",
    options: ["free", "freely", "freed", "freedom"],
    answer: "free",
    explanation: "Free dung nhu tinh tu bo nghia cho gift.",
    topic: "Part 7 - Ads",
  },
];

const REVIEW_PART5_EASY = [
  {
    id: 2221,
    sentence: "The staff ____ to work from home tomorrow.",
    options: ["is allowed", "are allowed", "allowed", "allow"],
    answer: "is allowed",
    explanation: "Bi dong: is/are allowed to. O day chon 'is allowed' theo cach dung business TOEIC.",
    topic: "Review - Part 5",
  },
  {
    id: 2222,
    sentence: "Please complete the form ____.",
    options: ["careful", "carefully", "care", "caring"],
    answer: "carefully",
    explanation: "Trang tu bo nghia cho dong tu 'complete'.",
    topic: "Review - Part 5",
  },
  {
    id: 2223,
    sentence: "The ____ schedule will be updated weekly.",
    options: ["revise", "revised", "revision", "revising"],
    answer: "revised",
    explanation: "Tinh tu (V3) bo nghia cho danh tu schedule.",
    topic: "Review - Part 5",
  },
];

const REVIEW_PART5_HARD = [
  {
    id: 2231,
    sentence: "The proposal, along with the attachments, ____ due by noon.",
    options: ["are", "is", "were", "have been"],
    answer: "is",
    explanation: "Chu ngu chinh: The proposal -> is.",
    topic: "Review - Part 5",
  },
  {
    id: 2232,
    sentence: "No sooner ____ the meeting started than the power went out.",
    options: ["had", "has", "did", "was"],
    answer: "had",
    explanation: "Dao ngu voi 'No sooner': No sooner had + S + V3...",
    topic: "Review - Part 5",
  },
  {
    id: 2233,
    sentence: "The contract requires that each employee ____ the policy.",
    options: ["signs", "sign", "signed", "to sign"],
    answer: "sign",
    explanation: "Subjunctive: require that + V (bare).",
    topic: "Review - Part 5",
  },
];

const REVIEW_PART7_EASY = [
  {
    id: 2241,
    sentence: "NOTICE: The cafeteria will reopen on ____ 1.",
    options: ["April", "Aprils", "April's", "the April"],
    answer: "April",
    explanation: "Ten thang viet hoa va dung so it.",
    topic: "Review - Part 7",
  },
  {
    id: 2242,
    sentence: "ADVERTISEMENT: Call before ____ to reserve a seat.",
    options: ["noon", "the noon", "noons", "noon's"],
    answer: "noon",
    explanation: "Cum tu: before noon.",
    topic: "Review - Part 7",
  },
  {
    id: 2243,
    sentence: "ANNOUNCEMENT: The training session will last ____ hours.",
    options: ["two", "twice", "second", "double"],
    answer: "two",
    explanation: "So dem dung de chi so gio.",
    topic: "Review - Part 7",
  },
];

const REVIEW_PART7_HARD = [
  {
    id: 2251,
    sentence: "NOTICE: Parking is prohibited ____ the main entrance.",
    options: ["near", "nearly", "nearest", "nearness"],
    answer: "near",
    explanation: "Gioi tu chi vi tri: near.",
    topic: "Review - Part 7",
  },
  {
    id: 2252,
    sentence: "ADVERTISEMENT: Products are available ____ supplies last.",
    options: ["while", "during", "since", "because"],
    answer: "while",
    explanation: "Cum tu co dinh: while supplies last.",
    topic: "Review - Part 7",
  },
  {
    id: 2253,
    sentence: "ANNOUNCEMENT: The deadline has been extended ____ one week.",
    options: ["by", "for", "until", "since"],
    answer: "by",
    explanation: "Extend by + khoang thoi gian.",
    topic: "Review - Part 7",
  },
];

const REVIEW_VOCAB_EASY = [
  {
    id: 2261,
    sentence: "The word \"resume\" is closest in meaning to ____.",
    options: ["a job application document", "a telephone", "a meeting room", "a discount coupon"],
    answer: "a job application document",
    explanation: "Resume = CV/ho so xin viec.",
    topic: "Vocabulary",
  },
  {
    id: 2262,
    sentence: "A \"procedure\" is most likely a ____.",
    options: ["set of steps", "type of salary", "shopping mall", "personal opinion"],
    answer: "set of steps",
    explanation: "Procedure = quy trinh (cac buoc).",
    topic: "Vocabulary",
  },
  {
    id: 2263,
    sentence: "\"Benefit\" in a job offer usually means ____.",
    options: ["extra advantage", "a mistake", "a deadline", "an advertisement"],
    answer: "extra advantage",
    explanation: "Benefits = phuc loi/quyen loi them.",
    topic: "Vocabulary",
  },
];

const REVIEW_VOCAB_HARD = [
  {
    id: 2271,
    sentence: "\"Recruitment\" refers to the process of ____.",
    options: ["hiring new employees", "closing an office", "selling products", "writing emails"],
    answer: "hiring new employees",
    explanation: "Recruitment = tuyen dung.",
    topic: "Vocabulary",
  },
  {
    id: 2272,
    sentence: "\"Marketing\" is mainly about ____.",
    options: ["promoting products", "repairing equipment", "filing documents", "scheduling vacations"],
    answer: "promoting products",
    explanation: "Marketing = tiep thi/quang ba.",
    topic: "Vocabulary",
  },
  {
    id: 2273,
    sentence: "A \"discount\" means a ____ in price.",
    options: ["reduction", "increase", "delay", "warning"],
    answer: "reduction",
    explanation: "Discount = giam gia -> price reduction.",
    topic: "Vocabulary",
  },
];

export const EXERCISE_DATA = {
  // --- DAY 1: NOUNS & PRONOUNS ---
  "w1-d1": {
    title: "Nouns & Pronouns",
    taskOrder: ["grammar-recognition", "grammar-practice", "vocab-practice", "reading-grammar", "part6-grammar"],
    tasks: {
      "grammar-recognition": { description: "Nhan biet danh tu, dai tu", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "grammar-practice": { description: "Luyen tap noun/pronoun", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "part5_nous": { description: "Doc hieu + grammar", total: 10, questions: { easy: PART5_PRO_NOUNS, hard: MIXED_HARD } },
      // "part6-grammar": { description: "Part 6 co ban", total: 100, questions: { easy: PART5_PRO_NOUNS, hard: MIXED_HARD } },
    },
  },

  // --- DAY 2: ADJECTIVES & ADVERBS ---
  "w1-d2": {
    title: "Adjectives",
    taskOrder: ["adj-position", "adj-suffixes", "part5-adj"],
    tasks: {
      "adj-position": { description: "Vi tri 'kiem tien' cua tinh tu", total: 10, questions: { easy: ADJ_POSITION_EASY, hard: ADJ_POSITION_HARD } },
      "adj-suffixes": { description: "Hau to tinh tu", total: 10, questions: { easy: ADJ_SUFFIX_EASY, hard: ADJ_SUFFIX_HARD } },
      "part5-adj": { description: "Part 5 ve tinh tu", total: 10, questions: { easy: PART5_ADJ_EASY, hard: PART5_ADJ_HARD } },
    },
  },

  // --- DAY 3: ADVERBS ---
  "w1-d3": {
    title: "Adverbs",
    taskOrder: ["adv-recognition", "part5-adv"],
    tasks: {
      "adv-recognition": { description: "Nhan dien trang tu", total: 10, questions: { easy: ADV_RECOGNITION_EASY, hard: ADV_RECOGNITION_HARD } },
      "part5-adv": { description: "Part 5 ve trang tu", total: 10, questions: { easy: PART5_ADV_EASY, hard: PART5_ADV_HARD } },
    },
  },

  // --- DAY 4: VERBS & SENTENCE STRUCTURE ---
  "w1-d4": {
    title: "Verbs & Sentence Structure",
    taskOrder: ["verb-recognition", "sentence-structure", "part5-verb"],
    tasks: {
      "verb-recognition": { description: "Xac dinh dong tu", total: 10, questions: { easy: VERB_RECOGNITION_EASY, hard: VERB_RECOGNITION_HARD } },
      "sentence-structure": { description: "Phan tich cau (S + V + O)", total: 10, questions: { easy: SENTENCE_STRUCTURE_EASY, hard: SENTENCE_STRUCTURE_HARD } },
      "part5-verb": { description: "Part 5 ve dong tu", total: 10, questions: { easy: PART5_VERB_EASY, hard: PART5_VERB_HARD } },
    },
  },

  // --- DAY 5: SUBJECT-VERB AGREEMENT ---
  "w1-d5": {
    title: "Subject-Verb Agreement",
    taskOrder: ["sva-recognition", "part5-sva"],
    tasks: {
      "sva-recognition": { description: "Nhan dien S-V agreement", total: 10, questions: { easy: SVA_RECOGNITION_EASY, hard: SVA_RECOGNITION_HARD } },
      "part5-sva": { description: "Part 5 ve S-V agreement", total: 10, questions: { easy: PART5_SVA_EASY, hard: PART5_SVA_HARD } },
    },
  },

  // --- DAY 6: PART 7 (ADS & ANNOUNCEMENTS) ---
  "w1-d6": {
    title: "Scanning & Skimming (Part 7)",
    taskOrder: ["part7-ads"],
    tasks: {
      "part7-ads": { description: "Part 7 - Advertisements & Announcements", total: 10, questions: { easy: PART7_ADS_EASY, hard: PART7_ADS_HARD } },
    },
  },

  // --- DAY 7: REVIEW & MINI-TEST ---
  "w1-d7": {
    title: "Review & Mini-Test",
    taskOrder: ["review-part5", "review-part7", "review-vocab"],
    tasks: {
      "review-part5": { description: "Review Part 5", total: 10, questions: { easy: REVIEW_PART5_EASY, hard: REVIEW_PART5_HARD } },
      "review-part7": { description: "Review Part 7 (short)", total: 10, questions: { easy: REVIEW_PART7_EASY, hard: REVIEW_PART7_HARD } },
      "review-vocab": { description: "Kiem tra tu vung", total: 10, questions: { easy: REVIEW_VOCAB_EASY, hard: REVIEW_VOCAB_HARD } },
    },
  },

  // --- EXTRA PRACTICE (PART 5) ---
  "extra-practice": {
    "part5-mixed": {
      questions: [
        { id: 901, sentence: "...", options: [], answer: "...", topic: "Mixed" },
        { id: 902, sentence: "...", options: [], answer: "...", topic: "Prepositions" },
      ],
    },
  },
};
