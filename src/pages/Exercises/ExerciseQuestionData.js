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

export const SV_AGREEMENT_EASY = [
  {
    "id": "q_sv_agreement_001",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The new interactive feature in the EduKit app _____ students to track their collective study hours.",
    "options": [
      { "key": "A", "text": "allow" },
      { "key": "B", "text": "allows" },
      { "key": "C", "text": "allowing" },
      { "key": "D", "text": "are allowing" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ chính của câu là 'The new interactive feature' (số ít). Cụm 'in the EduKit app' chỉ là thành phần bổ nghĩa.",
    "explanation": "Chính xác. Động từ phải chia theo chủ ngữ số ít 'feature', do đó ta thêm 's' thành 'allows'.",
    "translation": "Tính năng tương tác mới trong ứng dụng EduKit cho phép học sinh theo dõi tổng số giờ học tập thể của họ."
  },
  {
    "id": "q_sv_agreement_002",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Each of the premium gift boxes _____ carefully packed with eco-friendly materials before shipping.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'Each of + Danh từ số nhiều' luôn đi kèm với động từ chia ở dạng số ít.",
    "explanation": "Chính xác. Mặc dù 'gift boxes' là số nhiều, nhưng chủ ngữ chính của câu là 'Each' (Mỗi một), do đó động từ to be phải chia ở số ít 'is'.",
    "translation": "Mỗi chiếc hộp quà tặng cao cấp đều được đóng gói cẩn thận bằng vật liệu thân thiện với môi trường trước khi vận chuyển."
  },
  {
    "id": "q_sv_agreement_003",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "The number of users subscribing to the PrepMaster platform _____ steadily over the past three months.",
    "options": [
      { "key": "A", "text": "increase" },
      { "key": "B", "text": "have increased" },
      { "key": "C", "text": "has increased" },
      { "key": "D", "text": "are increasing" }
    ],
    "correct_answer": "C",
    "hint": "Phân biệt: 'The number of' (Số lượng những...) + Động từ số ít. 'A number of' (Một số những...) + Động từ số nhiều.",
    "explanation": "Chính xác. 'The number of' yêu cầu động từ số ít. Kết hợp với dấu hiệu 'over the past three months', ta chọn thì hiện tại hoàn thành số ít 'has increased'.",
    "translation": "Số lượng người dùng đăng ký nền tảng PrepMaster đã tăng đều đặn trong ba tháng qua."
  },
  {
    "id": "q_sv_agreement_004",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Not only the developers but also the project manager _____ attending the workshop on mobile app security tomorrow.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "A",
    "hint": "Trong cấu trúc 'Not only A but also B' (Không những A mà còn B), động từ luôn được chia theo chủ ngữ gần nó nhất (tức là B).",
    "explanation": "Chính xác. Chủ ngữ gần động từ nhất là 'the project manager' (số ít), nên động từ to be chia là 'is'.",
    "translation": "Không chỉ các lập trình viên mà cả quản lý dự án cũng sẽ tham dự hội thảo về bảo mật ứng dụng di động vào ngày mai."
  },
  {
    "id": "q_sv_agreement_005",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Creating daily TikTok videos to practice English _____ a significant amount of creativity and dedication.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requires" },
      { "key": "C", "text": "are requiring" },
      { "key": "D", "text": "have required" }
    ],
    "correct_answer": "B",
    "hint": "Khi một Danh động từ (V-ing) đóng vai trò làm chủ ngữ trong câu, động từ theo sau nó luôn được chia ở dạng số ít.",
    "explanation": "Chính xác. Chủ ngữ của câu là việc 'Creating...' (Tạo ra...), là một danh động từ, do đó động từ 'require' phải thêm 's'.",
    "translation": "Việc tạo các video TikTok hàng ngày để luyện tiếng Anh đòi hỏi một lượng lớn sự sáng tạo và cống hiến."
  },
  {
    "id": "q_sv_agreement_006",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The marketing team _____ decided to launch a new promotional campaign for the Happy Box collection next week.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "is" }
    ],
    "correct_answer": "A",
    "hint": "Các danh từ tập hợp (collective nouns) như 'team', 'committee', 'staff' thường được coi là một thực thể thống nhất (số ít) trong ngữ pháp TOEIC.",
    "explanation": "Chính xác. 'The marketing team' đóng vai trò là một chủ thể duy nhất cùng đưa ra quyết định, nên dùng trợ động từ số ít 'has'.",
    "translation": "Nhóm tiếp thị đã quyết định ra mắt một chiến dịch khuyến mãi mới cho bộ sưu tập Happy Box vào tuần tới."
  },
  {
    "id": "q_sv_agreement_007",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Neither the timekeeping app nor the HR portals _____ properly during the server upgrade last night.",
    "options": [
      { "key": "A", "text": "function" },
      { "key": "B", "text": "functions" },
      { "key": "C", "text": "functioned" },
      { "key": "D", "text": "was functioning" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'Neither A nor B' chia động từ theo B. Ở đây, B là 'HR portals' (số nhiều). Hơn nữa, câu có dấu hiệu thời gian 'last night'.",
    "explanation": "Chính xác. Động từ chia theo 'HR portals' (số nhiều) và ở thì quá khứ đơn (last night), nên 'functioned' là đáp án đúng.",
    "translation": "Cả ứng dụng chấm công lẫn các cổng thông tin nhân sự đều không hoạt động bình thường trong quá trình nâng cấp máy chủ tối qua."
  },
  {
    "id": "q_sv_agreement_008",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The CEO, along with several investors, _____ visiting the new packaging facility for Happy Box this afternoon.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Trong cấu trúc 'Subject 1 + along with / together with / as well as + Subject 2', động từ luôn được chia theo Subject 1.",
    "explanation": "Chính xác. Chủ ngữ chính là 'The CEO' (số ít). Cụm 'along with several investors' chỉ là thành phần phụ thêm vào, không ảnh hưởng đến động từ. Chọn 'is'.",
    "translation": "Giám đốc điều hành, cùng với một vài nhà đầu tư, sẽ đến thăm cơ sở đóng gói mới cho Happy Box vào chiều nay."
  },
  {
    "id": "q_sv_agreement_009",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Everyone in the mobile development department _____ required to attend the weekly code review session.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Các đại từ bất định như 'Everyone, everybody, someone, nobody, anyone...' luôn đi kèm với động từ chia ở số ít.",
    "explanation": "Chính xác. Chủ ngữ là đại từ bất định 'Everyone' nên động từ to be phải chia ở số ít 'is'.",
    "translation": "Mọi người trong bộ phận phát triển thiết bị di động đều phải tham dự buổi đánh giá mã nguồn hàng tuần."
  },
  {
    "id": "q_sv_agreement_010",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "A number of severe bugs _____ discovered in the EduKit beta version by the QA team yesterday.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "has been" },
      { "key": "D", "text": "is" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'A number of' mang nghĩa là 'Một vài/Một số', luôn đi với danh từ số nhiều và ĐỘNG TỪ SỐ NHIỀU.",
    "explanation": "Chính xác. 'A number of bugs' yêu cầu động từ số nhiều. Kết hợp với trạng từ quá khứ 'yesterday', 'were' là đáp án đúng.",
    "translation": "Một số lỗi nghiêm trọng đã được nhóm QA phát hiện trong phiên bản thử nghiệm EduKit vào ngày hôm qua."
  },
  {
    "id": "q_sv_agreement_011",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Two months _____ considered enough time to thoroughly prepare for the JLPT N3 if you study consistently.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "has" },
      { "key": "D", "text": "have" }
    ],
    "correct_answer": "A",
    "hint": "Các danh từ chỉ khoảng thời gian, khoảng cách, số tiền hay trọng lượng luôn được coi là một thể thống nhất và đi với động từ số ít.",
    "explanation": "Chính xác. Mặc dù 'Two months' (hai tháng) có vẻ là số nhiều, nhưng nó chỉ một khoảng thời gian duy nhất nên dùng động từ số ít 'is'.",
    "translation": "Hai tháng được coi là đủ thời gian để chuẩn bị kỹ lưỡng cho kỳ thi JLPT N3 nếu bạn học tập đều đặn."
  },
  {
    "id": "q_sv_agreement_012",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Every employee and manager _____ expected to read the new data privacy policy before using the HR app.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'Every + Danh từ 1 and Danh từ 2' vẫn luôn được coi là một khối tổng thể và đi cùng với động từ số ít.",
    "explanation": "Chính xác. Sự xuất hiện của từ 'Every' ở đầu chủ ngữ quyết định việc động từ phải chia ở số ít 'is', bất chấp việc có từ nối 'and'.",
    "translation": "Mọi nhân viên và quản lý đều được mong đợi sẽ đọc chính sách bảo mật dữ liệu mới trước khi sử dụng ứng dụng nhân sự."
  },
  {
    "id": "q_sv_agreement_013",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The list of candidates interviewed for the Mobile Developer Intern position _____ been finalized.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Chủ ngữ chính của câu là 'The list' (số ít). Cụm 'of candidates interviewed...' chỉ là phần bổ nghĩa.",
    "explanation": "Chính xác. Động từ chia theo chủ ngữ số ít 'The list' nên ta dùng trợ động từ 'has' cho thì hiện tại hoàn thành.",
    "translation": "Danh sách các ứng viên được phỏng vấn cho vị trí Thực tập sinh Mobile Developer đã được chốt."
  },
  {
    "id": "q_sv_agreement_014",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Either the main server or the backup databases _____ experiencing connectivity issues at the moment.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "B",
    "hint": "Tương tự 'Neither... nor', cấu trúc 'Either A or B' yêu cầu động từ chia theo chủ ngữ gần nó nhất (B).",
    "explanation": "Chính xác. Chủ ngữ gần động từ nhất là 'the backup databases' (số nhiều), kết hợp với 'at the moment' (hiện tại tiếp diễn), ta chọn 'are'.",
    "translation": "Hoặc máy chủ chính hoặc các cơ sở dữ liệu dự phòng đang gặp sự cố kết nối vào lúc này."
  },
  {
    "id": "q_sv_agreement_015",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Both the TOEIC reading modules and the JLPT listening exercises _____ available on the new PrepMaster update.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'Both A and B' (Cả A và B) luôn đóng vai trò là chủ ngữ số nhiều.",
    "explanation": "Chính xác. Chủ ngữ luôn là số nhiều nên động từ to be phải chia là 'are'.",
    "translation": "Cả các mô-đun đọc TOEIC và các bài tập nghe JLPT đều có sẵn trong bản cập nhật PrepMaster mới."
  },
  {
    "id": "q_sv_agreement_016",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Five hundred dollars _____ the estimated budget for producing the next batch of promotional TikTok videos.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Đại lượng chỉ số tiền (money) luôn được ngữ pháp tiếng Anh coi là một đơn vị số ít.",
    "explanation": "Chính xác. Dù là 'Five hundred dollars', nó biểu thị một khoản tiền tổng thể nên đi với động từ số ít 'is'.",
    "translation": "Năm trăm đô la là ngân sách ước tính để sản xuất đợt video TikTok quảng cáo tiếp theo."
  },
  {
    "id": "q_sv_agreement_017",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The quality of the eco-friendly materials used in our Happy Box packaging _____ significantly improved this year.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Xác định từ cốt lõi của chủ ngữ. Đó là 'The quality' (Chất lượng - số ít), không phải 'materials'.",
    "explanation": "Chính xác. Động từ chia theo 'The quality' (số ít). Kết hợp với 'improved', ta dùng thì hiện tại hoàn thành số ít 'has'.",
    "translation": "Chất lượng của các vật liệu thân thiện với môi trường được sử dụng trong bao bì Happy Box của chúng tôi đã được cải thiện đáng kể trong năm nay."
  },
  {
    "id": "q_sv_agreement_018",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Information regarding user engagement on the learning app _____ closely monitored by the data analysts.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Từ 'Information' (Thông tin) là một danh từ không đếm được trong tiếng Anh, do đó luôn đi với động từ số ít.",
    "explanation": "Chính xác. Chủ ngữ 'Information' là danh từ không đếm được nên dùng động từ to be số ít 'is' trong cấu trúc bị động.",
    "translation": "Thông tin liên quan đến sự tương tác của người dùng trên ứng dụng học tập được các nhà phân tích dữ liệu theo dõi chặt chẽ."
  },
  {
    "id": "q_sv_agreement_019",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Anybody who _____ to customize their corporate gift box order must contact the sales department directly.",
    "options": [
      { "key": "A", "text": "wishes" },
      { "key": "B", "text": "wish" },
      { "key": "C", "text": "wishing" },
      { "key": "D", "text": "to wish" }
    ],
    "correct_answer": "A",
    "hint": "Đại từ quan hệ 'who' thay thế cho đại từ bất định 'Anybody' (Bất cứ ai - số ít). Động từ đi theo 'who' phải chia theo 'Anybody'.",
    "explanation": "Chính xác. 'Anybody' là đại từ bất định số ít, do đó động từ 'wish' phải thêm 'es' thành 'wishes'.",
    "translation": "Bất cứ ai muốn tùy chỉnh đơn hàng hộp quà tặng doanh nghiệp của họ đều phải liên hệ trực tiếp với bộ phận bán hàng."
  },
  {
    "id": "q_sv_agreement_020",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The integration between the mobile timekeeping app and the HR portal _____ seamlessly without any glitches.",
    "options": [
      { "key": "A", "text": "work" },
      { "key": "B", "text": "works" },
      { "key": "C", "text": "working" },
      { "key": "D", "text": "are working" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ chính là 'The integration' (Sự tích hợp - danh từ trừu tượng số ít). Các thành phần sau 'between' chỉ là bổ ngữ.",
    "explanation": "Chính xác. Chủ ngữ số ít 'The integration' yêu cầu động từ thêm 's', thành 'works'.",
    "translation": "Sự tích hợp giữa ứng dụng chấm công trên thiết bị di động và cổng thông tin nhân sự hoạt động trơn tru mà không có bất kỳ trục trặc nào."
  },
  {
    "id": "q_sv_agreement_021",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The marketing director, as well as the graphic designers, _____ currently working on the visual concepts for the Happy Box campaign.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cụm từ được nối bởi 'as well as', 'along with', 'together with' không làm thay đổi số lượng của chủ ngữ chính đứng trước nó.",
    "explanation": "Chính xác. Chủ ngữ chính là 'The marketing director' (số ít). Cụm 'as well as the graphic designers' chỉ là thành phần phụ. Do đó, động từ to be chia ở số ít 'is'.",
    "translation": "Giám đốc tiếp thị, cũng như các nhà thiết kế đồ họa, hiện đang làm việc trên các ý tưởng hình ảnh cho chiến dịch Happy Box."
  },
  {
    "id": "q_sv_agreement_022",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Neither the HR manager nor the employees _____ why the mobile timekeeping app crashed during rush hour.",
    "options": [
      { "key": "A", "text": "know" },
      { "key": "B", "text": "knows" },
      { "key": "C", "text": "knowing" },
      { "key": "D", "text": "is knowing" }
    ],
    "correct_answer": "A",
    "hint": "Với cấu trúc 'Neither A nor B' (Không A cũng không B), động từ luôn được chia theo chủ ngữ gần nó nhất (tức là B).",
    "explanation": "Chính xác. Chủ ngữ gần động từ nhất là 'the employees' (số nhiều), nên động từ 'know' giữ nguyên mẫu.",
    "translation": "Cả người quản lý nhân sự lẫn các nhân viên đều không biết tại sao ứng dụng chấm công di động lại bị sập trong giờ cao điểm."
  },
  {
    "id": "q_sv_agreement_023",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Three hours of daily practice _____ to be the minimum requirement for mastering both English and Japanese simultaneously.",
    "options": [
      { "key": "A", "text": "seem" },
      { "key": "B", "text": "seems" },
      { "key": "C", "text": "seeming" },
      { "key": "D", "text": "are seeming" }
    ],
    "correct_answer": "B",
    "hint": "Các cụm từ chỉ thời gian, khoảng cách, số lượng hoặc tiền bạc luôn được coi là một đại lượng thống nhất và đi với động từ số ít.",
    "explanation": "Chính xác. Mặc dù 'Three hours' là số nhiều, nó đại diện cho một khoảng thời gian duy nhất. Do đó, động từ 'seems' phải thêm 's'.",
    "translation": "Ba giờ luyện tập hàng ngày dường như là yêu cầu tối thiểu để làm chủ cả tiếng Anh và tiếng Nhật cùng một lúc."
  },
  {
    "id": "q_sv_agreement_024",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Integrating the new timekeeping app with the central database _____ a highly skilled Mobile Developer.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requires" },
      { "key": "C", "text": "are requiring" },
      { "key": "D", "text": "have required" }
    ],
    "correct_answer": "B",
    "hint": "Khi một Danh động từ (V-ing) hoặc cụm Danh động từ làm chủ ngữ, nó luôn được coi là số ít.",
    "explanation": "Chính xác. Chủ ngữ của câu là cụm danh động từ 'Integrating... database' (Việc tích hợp...), do đó động từ chính 'requires' phải chia ở số ít.",
    "translation": "Việc tích hợp ứng dụng chấm công mới với cơ sở dữ liệu trung tâm đòi hỏi một Lập trình viên thiết bị di động có kỹ năng cao."
  },
  {
    "id": "q_sv_agreement_025",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Because the project is still in the planning phase, nothing in the latest PrepMaster update _____ been finalized yet.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Đại từ bất định 'nothing', 'everything', 'something', 'anything' luôn luôn đi kèm với động từ chia ở số ít.",
    "explanation": "Chính xác. Chủ ngữ là đại từ bất định 'nothing', do đó trợ động từ của thì hiện tại hoàn thành phải là số ít 'has'.",
    "translation": "Vì dự án vẫn đang trong giai đoạn lập kế hoạch, không có gì trong bản cập nhật PrepMaster mới nhất được chốt lại cả."
  },
  {
    "id": "q_sv_agreement_026",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "A number of corporate clients _____ already requested customized Happy Boxes for the upcoming holiday season.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "B",
    "hint": "Phân biệt: 'The number of' (Số lượng những...) đi với số ít. Nhưng 'A number of' (Một số/Vài...) luôn đi với động từ số nhiều.",
    "explanation": "Chính xác. Cấu trúc 'A number of' mang nghĩa là 'một số', làm chủ ngữ số nhiều, do đó đi với trợ động từ 'have'.",
    "translation": "Một số khách hàng doanh nghiệp đã yêu cầu các hộp Happy Box tùy chỉnh cho mùa lễ sắp tới."
  },
  {
    "id": "q_sv_agreement_027",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The number of active users on the EduKit platform _____ increasing rapidly thanks to the new interactive features.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Ngược lại với 'A number of', cấu trúc 'The number of' chỉ một con số cụ thể, do đó nó luôn đi với động từ số ít.",
    "explanation": "Chính xác. Chủ ngữ là 'The number of' (Con số/Số lượng) nên động từ to be phải chia ở số ít 'is'.",
    "translation": "Số lượng người dùng hoạt động trên nền tảng EduKit đang tăng lên nhanh chóng nhờ vào các tính năng tương tác mới."
  },
  {
    "id": "q_sv_agreement_028",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Nearly fifty percent of the marketing budget _____ allocated to the daily English speaking TikTok series.",
    "options": [
      { "key": "A", "text": "were" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "have been" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "B",
    "hint": "Với các từ chỉ phân số, phần trăm (percent, half, some, all...), động từ chia số ít hay số nhiều phụ thuộc vào danh từ đứng sau giới từ 'of'.",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the marketing budget' (ngân sách - số ít không đếm được). Do đó động từ to be phải chia ở số ít 'was'.",
    "translation": "Gần năm mươi phần trăm ngân sách tiếp thị đã được phân bổ cho loạt video TikTok luyện nói tiếng Anh hàng ngày."
  },
  {
    "id": "q_sv_agreement_029",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Either the lead developer or the interns _____ responsible for updating the central database every Friday.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'Either A or B' (Hoặc A hoặc B). Động từ luôn được chia theo chủ ngữ B (chủ ngữ đứng gần động từ nhất).",
    "explanation": "Chính xác. Chủ ngữ gần động từ nhất là 'the interns' (số nhiều), và hành động lặp lại 'every Friday' (hiện tại đơn), nên chọn 'are'.",
    "translation": "Hoặc lập trình viên chính hoặc các thực tập sinh chịu trách nhiệm cập nhật cơ sở dữ liệu trung tâm vào mỗi thứ Sáu."
  },
  {
    "id": "q_sv_agreement_030",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The lighting equipment used for shooting the daily TikTok videos _____ quite a lot of money.",
    "options": [
      { "key": "A", "text": "cost" },
      { "key": "B", "text": "costing" },
      { "key": "C", "text": "costs" },
      { "key": "D", "text": "are costing" }
    ],
    "correct_answer": "C",
    "hint": "Từ 'equipment' (thiết bị/trang thiết bị) là một danh từ không đếm được trong tiếng Anh, do đó nó luôn là chủ ngữ số ít.",
    "explanation": "Chính xác. Vì 'equipment' là số ít, động từ thường 'cost' phải thêm 's' thành 'costs'. Phần 'used for...' chỉ là mệnh đề quan hệ rút gọn bổ nghĩa cho chủ ngữ.",
    "translation": "Các thiết bị chiếu sáng được sử dụng để quay các video TikTok hàng ngày tốn khá nhiều tiền."
  },
  {
    "id": "q_sv_agreement_031",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "The developers who _____ on the EduKit app are planning a major update to improve user experience.",
    "options": [
      { "key": "A", "text": "work" },
      { "key": "B", "text": "works" },
      { "key": "C", "text": "working" },
      { "key": "D", "text": "has worked" }
    ],
    "correct_answer": "A",
    "hint": "Trong mệnh đề quan hệ (who/which/that), động từ được chia phụ thuộc vào danh từ đứng ngay trước đại từ quan hệ đó (antecedent).",
    "explanation": "Chính xác. Đại từ quan hệ 'who' thay thế cho 'The developers' (số nhiều). Do đó, động từ 'work' ở mệnh đề quan hệ giữ nguyên mẫu.",
    "translation": "Các lập trình viên làm việc trên ứng dụng EduKit đang lên kế hoạch cho một bản cập nhật lớn để cải thiện trải nghiệm người dùng."
  },
  {
    "id": "q_sv_agreement_032",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "There _____ several new features in the timekeeping application that need thorough testing before the launch.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Trong cấu trúc đảo ngữ với 'There' (There is/There are), chủ ngữ thực sự của câu nằm NGAY SAU động từ to be.",
    "explanation": "Chính xác. Chủ ngữ thực sự là 'several new features' (vài tính năng mới - số nhiều), do đó động từ to be phải là 'are'.",
    "translation": "Có một vài tính năng mới trong ứng dụng chấm công cần được kiểm tra kỹ lưỡng trước khi ra mắt."
  },
  {
    "id": "q_sv_agreement_033",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Mathematics _____ not explicitly taught on the PrepMaster platform, as it primarily focuses on language proficiency.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Các danh từ chỉ môn học (Mathematics, Physics, Economics...), các căn bệnh (Measles, Mumps) hoặc tin tức (News) dù có tận cùng là 's' nhưng luôn là số ít.",
    "explanation": "Chính xác. 'Mathematics' là tên một môn học (môn Toán), là danh từ số ít nên đi với động từ to be 'is'.",
    "translation": "Môn Toán không được giảng dạy rõ ràng trên nền tảng PrepMaster, vì nó chủ yếu tập trung vào trình độ ngôn ngữ."
  },
  {
    "id": "q_sv_agreement_034",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Every employee and manager _____ to log their working hours through the new HR portal by the end of the day.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "having" },
      { "key": "C", "text": "has" },
      { "key": "D", "text": "are having" }
    ],
    "correct_answer": "C",
    "hint": "Ngay cả khi có nhiều danh từ được nối với nhau bằng 'and', nếu phía trước có từ 'Every' hoặc 'Each', toàn bộ cụm đó được xem là một khối số ít.",
    "explanation": "Chính xác. Từ 'Every' bao trùm cả 'employee and manager' tạo thành một chủ ngữ số ít, do đó phải dùng động từ 'has'.",
    "translation": "Mọi nhân viên và quản lý đều phải ghi lại số giờ làm việc của mình thông qua cổng thông tin nhân sự mới trước cuối ngày."
  },
  {
    "id": "q_sv_agreement_035",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Both the TOEIC preparation course and the JLPT N3 training module _____ highly rated by the users.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'Both A and B' (Cả A và B) luôn đóng vai trò là chủ ngữ số nhiều.",
    "explanation": "Chính xác. Do chủ ngữ là số nhiều ('Both... and...'), động từ to be phải chia ở số nhiều 'are'.",
    "translation": "Cả khóa học luyện thi TOEIC và học phần đào tạo JLPT N3 đều được người dùng đánh giá cao."
  },
  {
    "id": "q_sv_agreement_036",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Ten thousand dollars _____ invested last month in the redesign of the Happy Box packaging.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Tương tự như chỉ khoảng thời gian, một tổng số tiền cụ thể (dù số nhiều) được coi là một khoản tiền duy nhất (số ít).",
    "explanation": "Chính xác. 'Ten thousand dollars' là một khoản tiền, đóng vai trò chủ ngữ số ít. Dấu hiệu 'last month' yêu cầu thì quá khứ đơn, nên chọn 'was'.",
    "translation": "Mười nghìn đô la đã được đầu tư vào tháng trước để thiết kế lại bao bì Happy Box."
  },
  {
    "id": "q_sv_agreement_037",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "The committee _____ finally approved the budget to hire a new Mobile Developer Intern for the timekeeping project.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "has" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "B",
    "hint": "Các danh từ tập hợp như 'committee', 'team', 'jury', 'family' thường đi với động từ số ít khi chúng hoạt động như một thực thể thống nhất đưa ra một quyết định chung.",
    "explanation": "Chính xác. 'The committee' (Ủy ban) ở đây đang cùng nhau đưa ra một quyết định thống nhất (approved), do đó nó được xem là chủ ngữ số ít, đi với 'has'.",
    "translation": "Ủy ban cuối cùng đã phê duyệt ngân sách để thuê một Thực tập sinh Mobile Developer mới cho dự án chấm công."
  },
  {
    "id": "q_sv_agreement_038",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The quality of the daily English speaking videos _____ depending on the lighting and the camera used.",
    "options": [
      { "key": "A", "text": "vary" },
      { "key": "B", "text": "varies" },
      { "key": "C", "text": "varying" },
      { "key": "D", "text": "are varying" }
    ],
    "correct_answer": "B",
    "hint": "Xác định danh từ chính của cụm chủ ngữ. Cụm 'of the... videos' chỉ là cụm giới từ bổ nghĩa, không quyết định việc chia động từ.",
    "explanation": "Chính xác. Danh từ chính là 'The quality' (Chất lượng - số ít), do đó động từ 'vary' phải đổi 'y' thành 'i' và thêm 'es' thành 'varies'.",
    "translation": "Chất lượng của các video nói tiếng Anh hàng ngày thay đổi tùy thuộc vào ánh sáng và máy ảnh được sử dụng."
  },
  {
    "id": "q_sv_agreement_039",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "None of the information in the HR database _____ compromised during the cyber attack yesterday.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "have been" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Với 'None of', động từ chia số ít hay nhiều phụ thuộc vào danh từ đứng sau 'of'. Chú ý: 'Information' luôn là danh từ không đếm được.",
    "explanation": "Chính xác. Do 'information' là danh từ không đếm được (số ít), động từ phải chia ở số ít. Sự việc diễn ra 'yesterday' nên dùng 'was'.",
    "translation": "Không có thông tin nào trong cơ sở dữ liệu nhân sự bị xâm phạm trong cuộc tấn công mạng ngày hôm qua."
  },
  {
    "id": "q_sv_agreement_040",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "One of the biggest challenges in building the PrepMaster app _____ creating accurate and engaging mock exams.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'One of the + Danh từ số nhiều' (Một trong những...) luôn dùng để chỉ MỘT đối tượng, do đó chủ ngữ chính là 'One' (số ít).",
    "explanation": "Chính xác. Chủ ngữ chính là đại từ 'One' (số ít), bất chấp việc có các cụm danh từ số nhiều theo sau. Do đó động từ to be phải là 'is'.",
    "translation": "Một trong những thách thức lớn nhất trong việc xây dựng ứng dụng PrepMaster là tạo ra các bài thi thử chính xác và hấp dẫn."
  },
  {
    "id": "q_sv_agreement_041",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The news regarding the delayed launch of the new HR portal _____ disappointing to the employees.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Một số danh từ tận cùng bằng 's' nhưng luôn mang nghĩa số ít, ví dụ như: news (tin tức), physics (vật lý), mathematics (toán học).",
    "explanation": "Chính xác. Mặc dù có chữ 's' ở cuối, 'The news' (tin tức) là một danh từ không đếm được và luôn đi với động từ số ít 'is'.",
    "translation": "Tin tức về việc trì hoãn ra mắt cổng thông tin nhân sự mới thật đáng thất vọng đối với các nhân viên."
  },
  {
    "id": "q_sv_agreement_042",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "A large box of custom corporate gift samples _____ just arrived at the reception desk for the Happy Box team.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "has" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "C",
    "hint": "Xác định từ cốt lõi của chủ ngữ. Chủ ngữ là 'A large box' (số ít), phần 'of custom corporate gift samples' chỉ là cụm giới từ bổ nghĩa.",
    "explanation": "Chính xác. Động từ chia theo chủ ngữ số ít 'A large box', kết hợp với từ 'just', ta dùng trợ động từ 'has' cho thì hiện tại hoàn thành.",
    "translation": "Một hộp lớn chứa các mẫu quà tặng doanh nghiệp tùy chỉnh vừa mới đến bàn tiếp tân cho nhóm Happy Box."
  },
  {
    "id": "q_sv_agreement_043",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Nearly three-quarters of the TikTok followers _____ active daily to watch the English speaking lessons.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Với các từ chỉ phân số (three-quarters), động từ chia số ít hay số nhiều phụ thuộc vào danh từ đứng sau giới từ 'of'.",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the TikTok followers' (số nhiều). Do đó động từ to be phải chia ở số nhiều 'are'.",
    "translation": "Gần ba phần tư số người theo dõi TikTok hoạt động hàng ngày để xem các bài học nói tiếng Anh."
  },
  {
    "id": "q_sv_agreement_044",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "The founder and lead developer of EduKit _____ scheduled to speak at the ed-tech conference next Monday.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'The + Noun 1 + and + Noun 2' (chỉ có MỘT mạo từ 'The') dùng để chỉ một người kiêm nhiệm cả hai chức vụ. Do đó, đây là chủ ngữ số ít.",
    "explanation": "Chính xác. 'The founder and lead developer' chỉ cùng MỘT người đảm nhận hai vai trò. Vì vậy, động từ chia ở số ít 'is'. Nếu là hai người khác nhau, câu sẽ viết là 'The founder and THE lead developer'.",
    "translation": "Người sáng lập kiêm lập trình viên chính của EduKit dự kiến sẽ phát biểu tại hội nghị công nghệ giáo dục vào thứ Hai tới."
  },
  {
    "id": "q_sv_agreement_045",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The CEO and the marketing director _____ both agreed to increase the budget for the upcoming holiday campaign.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "was" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'The + Noun 1 + and + The + Noun 2' chỉ hai người/vật hoàn toàn khác nhau, do đó nó là chủ ngữ số nhiều.",
    "explanation": "Chính xác. Vì có hai mạo từ 'The' đứng trước hai chức danh, đây là hai người khác nhau (CEO và Giám đốc tiếp thị). Chủ ngữ là số nhiều nên dùng trợ động từ 'have'.",
    "translation": "Cả Giám đốc điều hành và Giám đốc tiếp thị đều đã đồng ý tăng ngân sách cho chiến dịch dịp lễ sắp tới."
  },
  {
    "id": "q_sv_agreement_046",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Despite the thorough testing, there _____ still a few minor bugs in the timekeeping application.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Trong cấu trúc 'There is / There are', động từ to be được chia dựa vào danh từ đứng NGAY SAU nó.",
    "explanation": "Chính xác. Danh từ đứng ngay sau khoảng trống là 'a few minor bugs' (một vài lỗi nhỏ - số nhiều), nên động từ to be phải là 'are'.",
    "translation": "Bất chấp việc kiểm thử kỹ lưỡng, vẫn còn một vài lỗi nhỏ trong ứng dụng chấm công."
  },
  {
    "id": "q_sv_agreement_047",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "None of the employee data synced to the HR portal _____ lost during the unexpected server crash yesterday.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Với đại từ 'None of', động từ chia theo danh từ đứng ngay sau giới từ 'of'. Ở đây là 'the employee data' (dữ liệu - danh từ không đếm được).",
    "explanation": "Chính xác. 'Data' (dữ liệu) trong ngữ cảnh tiếng Anh hiện đại thường được coi là danh từ không đếm được (số ít). Kết hợp với 'yesterday', động từ to be chia là 'was'.",
    "translation": "Không có dữ liệu nhân viên nào được đồng bộ hóa với cổng thông tin nhân sự bị mất trong sự cố sập máy chủ bất ngờ ngày hôm qua."
  },
  {
    "id": "q_sv_agreement_048",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "The number of active PrepMaster subscribers _____ expected to double by the end of this year.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'The number of + Noun số nhiều' luôn đi kèm với động từ chia ở số ít, vì chủ ngữ chính là 'The number' (Con số).",
    "explanation": "Chính xác. Chủ ngữ là 'The number' (số ít) nên động từ to be chia là 'is'.",
    "translation": "Số lượng người đăng ký PrepMaster đang hoạt động dự kiến sẽ tăng gấp đôi vào cuối năm nay."
  },
  {
    "id": "q_sv_agreement_049",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The students who _____ consistently using the PrepMaster app report significantly higher TOEIC scores.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "has been" },
      { "key": "D", "text": "was" }
    ],
    "correct_answer": "B",
    "hint": "Đại từ quan hệ 'who' thay thế cho danh từ đứng ngay trước nó là 'The students' (số nhiều).",
    "explanation": "Chính xác. Vì 'The students' là danh từ số nhiều, động từ to be đi theo mệnh đề quan hệ 'who' cũng phải chia ở số nhiều là 'are'.",
    "translation": "Những học sinh liên tục sử dụng ứng dụng PrepMaster báo cáo điểm TOEIC cao hơn đáng kể."
  },
  {
    "id": "q_sv_agreement_050",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Every short video and interactive exercise on the platform _____ designed to keep language learners engaged.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Dù có bao nhiêu danh từ được nối bởi 'and', nếu có từ 'Every' hoặc 'Each' đứng ở đầu, toàn bộ cụm chủ ngữ đó được xem là số ít.",
    "explanation": "Chính xác. Từ 'Every' bao trùm cả 'video and interactive exercise', biến toàn bộ cụm này thành chủ ngữ số ít. Do đó dùng 'is'.",
    "translation": "Mỗi video ngắn và bài tập tương tác trên nền tảng đều được thiết kế để giữ cho người học ngôn ngữ luôn hứng thú."
  },
  {
    "id": "q_sv_agreement_051",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "A number of candidates applying for the Mobile Developer Intern role _____ already submitted their portfolios.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "was" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'A number of' mang nghĩa là 'Một số / Vài' và luôn đi kèm với động từ chia ở số nhiều.",
    "explanation": "Chính xác. Vì 'A number of candidates' là chủ ngữ số nhiều, ta sử dụng trợ động từ 'have' cho thì hiện tại hoàn thành.",
    "translation": "Một số ứng viên ứng tuyển vào vị trí Thực tập sinh Mobile Developer đã nộp danh mục đầu tư (portfolio) của họ."
  },
  {
    "id": "q_sv_agreement_052",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The feedback from the students who watched the daily TikTok videos _____ very positive.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Hãy tìm từ cốt lõi của chủ ngữ chính. Đó là 'The feedback' (không đếm được, số ít), toàn bộ đoạn 'from the students... videos' chỉ là bổ ngữ.",
    "explanation": "Chính xác. Động từ phải chia theo chủ ngữ chính 'The feedback' (số ít). Vì vậy động từ to be chia là 'is'.",
    "translation": "Phản hồi từ những học sinh đã xem các video TikTok hàng ngày rất tích cực."
  },
  {
    "id": "q_sv_agreement_053",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Two thousand dollars _____ required to upgrade the camera and lighting equipment for the English speaking series.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Một số lượng tiền cụ thể, dù có 's' (dollars), vẫn được coi là một khoản tiền thống nhất (số ít).",
    "explanation": "Chính xác. Chủ ngữ chỉ tiền bạc được coi là số ít, do đó động từ to be chia là 'is'.",
    "translation": "Cần hai nghìn đô la để nâng cấp máy ảnh và thiết bị chiếu sáng cho loạt video nói tiếng Anh."
  },
  {
    "id": "q_sv_agreement_054",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Either the mobile app or the backend servers _____ causing the synchronization delay right now.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Trong cấu trúc 'Either A or B', động từ chia theo B (danh từ đứng gần nó nhất).",
    "explanation": "Chính xác. Danh từ gần động từ nhất là 'the backend servers' (số nhiều), và thì là hiện tại tiếp diễn (right now), nên dùng 'are'.",
    "translation": "Hoặc là ứng dụng di động, hoặc là các máy chủ phụ trợ đang gây ra sự chậm trễ trong việc đồng bộ hóa ngay lúc này."
  },
  {
    "id": "q_sv_agreement_055",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Developing educational applications like EduKit _____ a deep understanding of both technology and pedagogy.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requires" },
      { "key": "C", "text": "are requiring" },
      { "key": "D", "text": "have required" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ của câu là một cụm danh động từ 'Developing...' (Việc phát triển...). Cụm này luôn đóng vai trò là số ít.",
    "explanation": "Chính xác. Vì chủ ngữ là cụm V-ing (số ít), động từ 'require' phải thêm 's' thành 'requires'.",
    "translation": "Việc phát triển các ứng dụng giáo dục như EduKit đòi hỏi sự hiểu biết sâu sắc về cả công nghệ và sư phạm."
  },
  {
    "id": "q_sv_agreement_056",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The mobile timekeeping app, as well as the web portal, _____ currently undergoing scheduled maintenance.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cụm 'as well as' (cũng như) không kết nối hai danh từ thành số nhiều như từ 'and'. Chủ ngữ chính vẫn là từ đứng trước 'as well as'.",
    "explanation": "Chính xác. Chủ ngữ chính là 'The mobile timekeeping app' (số ít). Cụm giữa hai dấu phẩy chỉ là phần phụ. Do đó dùng 'is'.",
    "translation": "Ứng dụng chấm công di động, cũng như cổng thông tin điện tử, hiện đang được bảo trì theo lịch trình."
  },
  {
    "id": "q_sv_agreement_057",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Logistics _____ a major challenge when shipping thousands of Happy Boxes to different corporate clients during the holiday season.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Một số danh từ chỉ ngành học, lĩnh vực chuyên môn tận cùng bằng '-ics' (Logistics, Economics, Statistics...) thường là danh từ số ít.",
    "explanation": "Chính xác. 'Logistics' (hậu cần) là một lĩnh vực chuyên môn, là danh từ số ít nên đi với 'is'.",
    "translation": "Hậu cần là một thách thức lớn khi vận chuyển hàng nghìn hộp Happy Box đến các khách hàng doanh nghiệp khác nhau trong mùa lễ hội."
  },
  {
    "id": "q_sv_agreement_058",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Attached to this email _____ the weekly attendance reports generated by the new HR system.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "has been" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "D",
    "hint": "Đây là cấu trúc đảo ngữ: Attached/Included + to be + Chủ ngữ thực sự. Chủ ngữ nằm ở phía sau động từ.",
    "explanation": "Chính xác. Chủ ngữ thực sự là 'the weekly attendance reports' (các báo cáo điểm danh hàng tuần - số nhiều), nên động từ to be phải là 'are'.",
    "translation": "Đính kèm với email này là các báo cáo điểm danh hàng tuần được tạo bởi hệ thống nhân sự mới."
  },
  {
    "id": "q_sv_agreement_059",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The majority of the users _____ satisfied with the new gamified features introduced on PrepMaster.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Từ 'majority' (phần lớn/đa số) khi đi với giới từ 'of' sẽ chia động từ phụ thuộc vào danh từ đứng sau 'of'.",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the users' (số nhiều), nên động từ to be chia ở số nhiều 'are'.",
    "translation": "Phần lớn người dùng hài lòng với các tính năng trò chơi hóa mới được giới thiệu trên PrepMaster."
  },
  {
    "id": "q_sv_agreement_060",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Ms. Lin is one of the content creators who _____ educational TikTok videos every day to help students.",
    "options": [
      { "key": "A", "text": "post" },
      { "key": "B", "text": "posts" },
      { "key": "C", "text": "is posting" },
      { "key": "D", "text": "has posted" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'One of the + Noun(s) + who/that/which + Verb(s)'. Động từ ở mệnh đề quan hệ phải chia theo danh từ số nhiều đứng NGAY TRƯỚC đại từ quan hệ.",
    "explanation": "Chính xác. Đại từ 'who' thay thế cho 'content creators' (số nhiều). Vì vậy, động từ 'post' giữ nguyên mẫu. Lưu ý: Chỉ khi có từ 'THE ONLY one of...' thì động từ mới chia số ít.",
    "translation": "Cô Lin là một trong những nhà sáng tạo nội dung đăng các video TikTok giáo dục mỗi ngày để giúp đỡ học sinh."
  },
  {
    "id": "q_sv_agreement_061",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The number of active subscribers to the PrepMaster app _____ significantly since the new reading module was released.",
    "options": [
      { "key": "A", "text": "has grown" },
      { "key": "B", "text": "have grown" },
      { "key": "C", "text": "grow" },
      { "key": "D", "text": "are growing" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'The number of + Danh từ số nhiều' luôn đóng vai trò là chủ ngữ số ít, vì nó nhấn mạnh vào 'con số' (The number).",
    "explanation": "Chính xác. Vì chủ ngữ chính là 'The number' (số ít), và câu có trạng từ 'since', động từ phải được chia ở thì hiện tại hoàn thành số ít là 'has grown'.",
    "translation": "Số lượng người đăng ký hoạt động trên ứng dụng PrepMaster đã tăng lên đáng kể kể từ khi mô-đun đọc hiểu mới được phát hành."
  },
  {
    "id": "q_sv_agreement_062",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Optimizing the timekeeping application for Android devices _____ currently the top priority for the engineering team.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Chủ ngữ của câu là một cụm danh động từ bắt đầu bằng V-ing (Optimizing...). Cụm này luôn được coi là một hành động duy nhất, tức là số ít.",
    "explanation": "Chính xác. Mặc dù có từ 'devices' (số nhiều) đứng ngay trước khoảng trống, nhưng chủ ngữ chính của câu là 'Optimizing' (Việc tối ưu hóa), nên động từ to be phải là số ít 'is'.",
    "translation": "Việc tối ưu hóa ứng dụng chấm công cho các thiết bị Android hiện là ưu tiên hàng đầu của đội ngũ kỹ thuật."
  },
  {
    "id": "q_sv_agreement_063",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Either the marketing team or the CEO _____ presenting the Happy Box holiday campaign to the investors tomorrow.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have" }
    ],
    "correct_answer": "A",
    "hint": "Trong cấu trúc 'Either A or B' (Hoặc A hoặc B), động từ luôn được chia theo chủ ngữ B (chủ ngữ đứng gần nó nhất).",
    "explanation": "Chính xác. Chủ ngữ đứng gần khoảng trống nhất là 'the CEO' (số ít). Do đó, động từ to be phải chia là 'is' cho thì hiện tại tiếp diễn mang nghĩa tương lai.",
    "translation": "Hoặc nhóm tiếp thị hoặc Giám đốc điều hành sẽ trình bày chiến dịch dịp lễ Happy Box cho các nhà đầu tư vào ngày mai."
  },
  {
    "id": "q_sv_agreement_064",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Neither the mobile app nor the web portals _____ functioning properly during the server outage last night.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "has been" },
      { "key": "D", "text": "is" }
    ],
    "correct_answer": "B",
    "hint": "Tương tự như cấu trúc Either/Or, cấu trúc 'Neither A nor B' yêu cầu động từ chia theo B (chủ ngữ đứng gần động từ nhất).",
    "explanation": "Chính xác. Chủ ngữ đứng gần khoảng trống là 'the web portals' (số nhiều). Cùng với trạng từ chỉ thời gian 'last night', động từ to be phải là 'were'.",
    "translation": "Cả ứng dụng di động và các cổng thông tin điện tử đều đã không hoạt động bình thường trong thời gian máy chủ bị ngắt kết nối vào tối qua."
  },
  {
    "id": "q_sv_agreement_065",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Everyone involved in the EduKit project _____ expected to submit their weekly progress reports by Friday.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Các đại từ bất định như 'Everyone, everybody, everything, someone, no one...' luôn luôn đi với động từ chia ở dạng số ít.",
    "explanation": "Chính xác. Chủ ngữ chính là 'Everyone', do đó động từ to be phải chia ở số ít 'is'.",
    "translation": "Tất cả mọi người tham gia vào dự án EduKit đều được mong đợi sẽ nộp báo cáo tiến độ hàng tuần của họ trước thứ Sáu."
  },
  {
    "id": "q_sv_agreement_066",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Five years of experience in mobile development _____ required for this senior programming position.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "have been" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "A",
    "hint": "Các cụm từ chỉ khoảng thời gian, số tiền, hay trọng lượng được ngữ pháp tiếng Anh coi là một đơn vị tổng thể duy nhất (số ít).",
    "explanation": "Chính xác. 'Five years' ở đây đại diện cho một khoảng thời gian/mức độ kinh nghiệm tổng thể, nên nó là chủ ngữ số ít. Chọn 'is'.",
    "translation": "Năm năm kinh nghiệm trong lĩnh vực phát triển thiết bị di động là yêu cầu bắt buộc đối với vị trí lập trình viên cấp cao này."
  },
  {
    "id": "q_sv_agreement_067",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The lead developer, along with two junior programmers, _____ responsible for fixing the login bug.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Trong cấu trúc 'S1 + along with / as well as / together with + S2', động từ luôn luôn được chia theo chủ ngữ thứ nhất (S1).",
    "explanation": "Chính xác. S1 ở đây là 'The lead developer' (số ít). Phần 'along with two junior programmers' chỉ là thành phần phụ trợ. Do đó, dùng 'is'.",
    "translation": "Lập trình viên chính, cùng với hai lập trình viên cấp dưới, chịu trách nhiệm sửa lỗi đăng nhập."
  },
  {
    "id": "q_sv_agreement_068",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "“Happy Boxes” _____ currently offering a 20 percent discount on all corporate gift orders to attract new B2B clients.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have" }
    ],
    "correct_answer": "A",
    "hint": "Tên của một công ty, cuốn sách, bộ phim hoặc tổ chức, cho dù có đuôi 's' (số nhiều), vẫn luôn được coi là một thực thể duy nhất (số ít).",
    "explanation": "Chính xác. 'Happy Boxes' là tên riêng của một công ty/thương hiệu, do đó động từ to be phải chia ở số ít 'is'.",
    "translation": "Công ty “Happy Boxes” hiện đang cung cấp mức giảm giá 20% cho tất cả các đơn hàng quà tặng doanh nghiệp để thu hút khách hàng B2B mới."
  },
  {
    "id": "q_sv_agreement_069",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Approximately 60 percent of the marketing budget _____ already been spent on TikTok advertising.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Với các từ chỉ tỷ lệ phần trăm (percent, fraction, some, all...), việc chia động từ sẽ phụ thuộc hoàn toàn vào danh từ đứng NGAY SAU giới từ 'of'.",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the marketing budget' (ngân sách tiếp thị - không đếm được, số ít). Do đó, ta dùng trợ động từ số ít 'has'.",
    "translation": "Khoảng 60% ngân sách tiếp thị đã được chi cho quảng cáo trên TikTok."
  },
  {
    "id": "q_sv_agreement_070",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "None of the servers _____ damaged during the sudden power outage in the data center.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'None of + Danh từ đếm được số nhiều' thường đi với động từ số nhiều trong tiếng Anh hiện đại (đặc biệt trong bài thi TOEIC).",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the servers' (số nhiều). Cùng với ngữ cảnh quá khứ (power outage), động từ to be phải chia là 'were'.",
    "translation": "Không có máy chủ nào bị hư hỏng trong đợt mất điện đột ngột tại trung tâm dữ liệu."
  },
  {
    "id": "q_sv_agreement_071",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "There _____ a significant delay in the shipping of the Happy Box orders this morning due to heavy rain.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "B",
    "hint": "Trong cấu trúc 'There is/There are', chủ ngữ thực sự đứng ngay sau động từ to be. 'this morning' là mốc thời gian đã qua.",
    "explanation": "Chính xác. Chủ ngữ là 'a significant delay' (một sự chậm trễ - số ít). Vì sự việc đã xảy ra 'this morning', động từ to be chia ở quá khứ số ít là 'was'.",
    "translation": "Đã có một sự chậm trễ đáng kể trong việc vận chuyển các đơn đặt hàng Happy Box vào sáng nay do mưa lớn."
  },
  {
    "id": "q_sv_agreement_072",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The employees who _____ the mobile timekeeping app find it very intuitive and easy to use.",
    "options": [
      { "key": "A", "text": "uses" },
      { "key": "B", "text": "use" },
      { "key": "C", "text": "using" },
      { "key": "D", "text": "is using" }
    ],
    "correct_answer": "B",
    "hint": "Đại từ quan hệ 'who' thay thế cho danh từ đứng ngay trước nó ('The employees' - số nhiều). Động từ theo sau 'who' phải chia theo danh từ này.",
    "explanation": "Chính xác. Vì 'The employees' là số nhiều, động từ 'use' giữ nguyên mẫu.",
    "translation": "Những nhân viên sử dụng ứng dụng chấm công trên thiết bị di động thấy nó rất trực quan và dễ sử dụng."
  },
  {
    "id": "q_sv_agreement_073",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Each developer and tester _____ given a new laptop for the EduKit project last week.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "have been" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "A",
    "hint": "Dù có dùng từ nối 'and', nhưng nếu cụm chủ ngữ bắt đầu bằng 'Each' hoặc 'Every', nó luôn luôn được tính là chủ ngữ số ít.",
    "explanation": "Chính xác. 'Each developer and tester' là chủ ngữ số ít. Vì sự việc xảy ra 'last week' nên dùng động từ 'was'.",
    "translation": "Mỗi lập trình viên và người kiểm thử đều được cấp một máy tính xách tay mới cho dự án EduKit vào tuần trước."
  },
  {
    "id": "q_sv_agreement_074",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Many a student _____ found the TOEIC reading section challenging due to the strict time limit.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc đặc biệt: 'Many a + Danh từ đếm được số ít' luôn đi kèm với ĐỘNG TỪ SỐ ÍT, mặc dù nghĩa của nó là 'Rất nhiều'.",
    "explanation": "Chính xác. 'Many a student' yêu cầu động từ số ít. Do đó trợ động từ phải là 'has'.",
    "translation": "Rất nhiều học sinh đã thấy phần đọc hiểu TOEIC đầy thách thức do giới hạn thời gian nghiêm ngặt."
  },
  {
    "id": "q_sv_agreement_075",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "What the users want from the new PrepMaster update _____ a more interactive interface for the JLPT mock exams.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Khi một mệnh đề danh ngữ (bắt đầu bằng What, That, Whether...) đóng vai trò làm chủ ngữ, động từ chính của câu luôn được chia ở dạng số ít.",
    "explanation": "Chính xác. Cả mệnh đề 'What the users want...' đóng vai trò là một chủ thể duy nhất (số ít). Vì vậy, động từ to be phải là 'is'.",
    "translation": "Những gì người dùng muốn từ bản cập nhật PrepMaster mới là một giao diện tương tác hơn cho các bài thi thử JLPT."
  },
  {
    "id": "q_sv_agreement_076",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "A total of 500 corporate gift boxes _____ ordered by the tech company for their upcoming anniversary event.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "has" },
      { "key": "D", "text": "have" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'A total of + Danh từ số nhiều' (Tổng số...) được xử lý giống như 'A number of', tức là động từ phải chia ở SỐ NHIỀU.",
    "explanation": "Chính xác. Vì 'A total of' kết hợp với danh từ số nhiều (boxes), động từ phải chia ở số nhiều. Đây là câu bị động nên chọn 'were'.",
    "translation": "Tổng cộng 500 hộp quà tặng doanh nghiệp đã được công ty công nghệ đặt hàng cho sự kiện kỷ niệm sắp tới của họ."
  },
  {
    "id": "q_sv_agreement_077",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The majority of the feedback from the beta testers of the app _____ very positive and encouraging.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Từ 'majority' (phần lớn) chia động từ phụ thuộc vào danh từ sau giới từ 'of'. 'Feedback' là một danh từ không đếm được.",
    "explanation": "Chính xác. Vì 'feedback' (phản hồi) không đếm được (luôn số ít), động từ to be chia theo nó cũng phải là 'is'.",
    "translation": "Phần lớn phản hồi từ những người thử nghiệm phiên bản beta của ứng dụng đều rất tích cực và đáng khích lệ."
  },
  {
    "id": "q_sv_agreement_078",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The new software update, together with improved server hardware, _____ significantly reduced the app's loading time.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "A",
    "hint": "Cụm 'together with' không tạo thành chủ ngữ số nhiều. Bạn phải chia động từ theo danh từ chính đứng trước nó.",
    "explanation": "Chính xác. Danh từ chính là 'The new software update' (số ít). Vì vậy trợ động từ chia là 'has'.",
    "translation": "Bản cập nhật phần mềm mới, cùng với phần cứng máy chủ được cải tiến, đã làm giảm đáng kể thời gian tải của ứng dụng."
  },
  {
    "id": "q_sv_agreement_079",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Statistics _____ a crucial part of analyzing user engagement and behavior on the PrepMaster application.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Khi 'Statistics' mang nghĩa là một 'môn học' hoặc 'lĩnh vực nghiên cứu' (Thống kê học), nó được coi là danh từ số ít.",
    "explanation": "Chính xác. 'Statistics' ở đây chỉ môn Thống kê học / lĩnh vực thống kê (số ít), nên động từ to be phải là 'is'.",
    "translation": "Thống kê học là một phần quan trọng trong việc phân tích sự tương tác và hành vi của người dùng trên ứng dụng PrepMaster."
  },
  {
    "id": "q_sv_agreement_080",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "One of the main reasons for the app's rapid success _____ its user-friendly and intuitive design.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'One of the + Danh từ số nhiều' có chủ ngữ cốt lõi là từ 'One'.",
    "explanation": "Chính xác. Động từ chia theo 'One' (số ít) nên đáp án đúng là 'is'.",
    "translation": "Một trong những lý do chính cho sự thành công nhanh chóng của ứng dụng là thiết kế trực quan và thân thiện với người dùng của nó."
  },
  {
    "id": "q_sv_agreement_081",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "A variety of customized Happy Box designs _____ available for corporate clients to choose from this holiday season.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "was" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'A variety of + Danh từ số nhiều' mang nghĩa là 'Sự đa dạng / Nhiều loại', luôn đi với động từ chia ở SỐ NHIỀU.",
    "explanation": "Chính xác. Vì 'A variety of' đóng vai trò như một lượng từ chỉ số nhiều, động từ to be phải chia là 'are'.",
    "translation": "Nhiều thiết kế Happy Box tùy chỉnh đa dạng hiện có sẵn để các khách hàng doanh nghiệp lựa chọn trong mùa lễ này."
  },
  {
    "id": "q_sv_agreement_082",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "The variety of interactive features on the EduKit platform _____ what sets it apart from traditional learning methods.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "C",
    "hint": "Trái ngược với 'A variety of', cấu trúc 'The variety of' nhấn mạnh vào 'Sự đa dạng' (một danh từ trừu tượng duy nhất), do đó đi với động từ SỐ ÍT.",
    "explanation": "Chính xác. Chủ ngữ cốt lõi là 'The variety' (số ít), nên động từ to be phải là 'is'.",
    "translation": "Sự đa dạng của các tính năng tương tác trên nền tảng EduKit chính là điều làm cho nó khác biệt so với các phương pháp học tập truyền thống."
  },
  {
    "id": "q_sv_agreement_083",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "To master both English and Japanese simultaneously _____ rigorous daily practice and a well-structured study plan.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requires" },
      { "key": "C", "text": "are requiring" },
      { "key": "D", "text": "have required" }
    ],
    "correct_answer": "B",
    "hint": "Khi một cụm động từ nguyên mẫu có 'To' (To-infinitive phrase) đóng vai trò làm chủ ngữ, động từ chính luôn chia ở dạng số ít.",
    "explanation": "Chính xác. Chủ ngữ là cụm 'To master...' (Việc thành thạo...), do đó động từ 'require' phải thêm 's' thành 'requires'.",
    "translation": "Việc thành thạo cả tiếng Anh và tiếng Nhật cùng một lúc đòi hỏi sự rèn luyện nghiêm ngặt hàng ngày và một kế hoạch học tập có cấu trúc tốt."
  },
  {
    "id": "q_sv_agreement_084",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Not only the software bugs but also the server issue _____ resolved before the mobile timekeeping app was launched.",
    "options": [
      { "key": "A", "text": "were" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "have been" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "B",
    "hint": "Trong cấu trúc 'Not only A but also B', động từ phải được chia theo chủ ngữ B (chủ ngữ gần động từ nhất).",
    "explanation": "Chính xác. Chủ ngữ gần nhất là 'the server issue' (số ít). Vì sự việc xảy ra trong quá khứ (trước khi ra mắt), ta dùng động từ to be 'was'.",
    "translation": "Không chỉ các lỗi phần mềm mà cả sự cố máy chủ cũng đã được giải quyết trước khi ứng dụng chấm công di động được ra mắt."
  },
  {
    "id": "q_sv_agreement_085",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Over half of the budget for the TikTok English speaking series _____ already been spent on high-quality editing software.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "has" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "is" }
    ],
    "correct_answer": "B",
    "hint": "Với các từ chỉ phân số/tỷ lệ (half, some, all, most...), động từ chia theo danh từ đứng ngay sau giới từ 'of'.",
    "explanation": "Chính xác. Danh từ đứng sau 'of' là 'the budget' (ngân sách - số ít không đếm được), nên trợ động từ cho thì hiện tại hoàn thành phải là 'has'.",
    "translation": "Hơn một nửa ngân sách cho loạt video nói tiếng Anh trên TikTok đã được chi cho phần mềm chỉnh sửa video chất lượng cao."
  },
  {
    "id": "q_sv_agreement_086",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "None of the applicants for the Mobile Developer Intern position _____ previous experience with offline data synchronization.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "are" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'None of + Danh từ số nhiều' trong tiếng Anh hiện đại thường ưu tiên đi với động từ chia ở số nhiều.",
    "explanation": "Chính xác. Vì 'the applicants' là số nhiều, động từ 'have' (có) được giữ nguyên mẫu.",
    "translation": "Không có ứng viên nào cho vị trí Thực tập sinh Mobile Developer có kinh nghiệm trước đó về đồng bộ hóa dữ liệu ngoại tuyến."
  },
  {
    "id": "q_sv_agreement_087",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Each of the mock tests on PrepMaster _____ designed to accurately simulate the real JLPT N3 exam environment.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'Each of + Danh từ số nhiều' mang ý nghĩa 'Mỗi một (trong số...)', luôn luôn đi kèm với động từ số ít.",
    "explanation": "Chính xác. Chủ ngữ cốt lõi là 'Each' (Mỗi bài), do đó động từ to be phải chia ở số ít 'is'.",
    "translation": "Mỗi bài thi thử trên PrepMaster đều được thiết kế để mô phỏng chính xác môi trường thi JLPT N3 thực tế."
  },
  {
    "id": "q_sv_agreement_088",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Included in the latest software update _____ several new reading modules specifically created for TOEIC learners.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "was" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "C",
    "hint": "Đây là câu đảo ngữ với phân từ hai (Included / Attached). Chủ ngữ thực sự đứng ở TẬN CÙNG câu, ngay sau khoảng trống.",
    "explanation": "Chính xác. Chủ ngữ thực sự là 'several new reading modules' (vài mô-đun đọc mới - số nhiều), nên động từ to be phải là 'are'.",
    "translation": "Được bao gồm trong bản cập nhật phần mềm mới nhất là một số mô-đun đọc mới được tạo riêng cho người học TOEIC."
  },
  {
    "id": "q_sv_agreement_089",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The board of directors _____ unanimously approved the budget for the new HR portal development.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "has" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "B",
    "hint": "Các danh từ tập hợp như 'board', 'committee', 'team' được coi là số ít khi chúng hoạt động như một khối thống nhất (ở đây là nhất trí phê duyệt).",
    "explanation": "Chính xác. Hội đồng quản trị (The board of directors) đưa ra một quyết định chung, đóng vai trò là chủ ngữ số ít, nên trợ động từ là 'has'.",
    "translation": "Hội đồng quản trị đã nhất trí phê duyệt ngân sách cho việc phát triển cổng thông tin nhân sự mới."
  },
  {
    "id": "q_sv_agreement_090",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Every programmer and QA tester _____ required to attend the daily stand-up meeting to discuss project progress.",
    "options": [
      { "key": "A", "text": "is" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Khi có từ 'Every' hoặc 'Each' đứng trước nhiều danh từ được nối bằng 'and', toàn bộ cụm đó vẫn bị ép thành chủ ngữ số ít.",
    "explanation": "Chính xác. Từ 'Every' bao trùm cả cụm, do đó động từ to be chia ở số ít 'is'.",
    "translation": "Mọi lập trình viên và người kiểm thử chất lượng đều phải tham dự cuộc họp đứng hàng ngày để thảo luận về tiến độ dự án."
  },
  {
    "id": "q_sv_agreement_091",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "A new series of short English speaking videos _____ uploaded to the TikTok channel every Monday morning.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ là 'A new series' (Một chuỗi/loạt mới). Từ 'series' có hình thức giống nhau ở cả số ít và số nhiều, nhưng mạo từ 'A' xác định nó là số ít.",
    "explanation": "Chính xác. Vì chủ ngữ là 'A new series' (số ít), động từ to be phải chia là 'is'.",
    "translation": "Một loạt các video ngắn nói tiếng Anh mới được tải lên kênh TikTok vào mỗi sáng thứ Hai."
  },
  {
    "id": "q_sv_agreement_092",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Those who _____ a score of 800 or higher on the TOEIC will receive a certificate of excellence from PrepMaster.",
    "options": [
      { "key": "A", "text": "achieves" },
      { "key": "B", "text": "achieve" },
      { "key": "C", "text": "achieving" },
      { "key": "D", "text": "is achieving" }
    ],
    "correct_answer": "B",
    "hint": "Đại từ chỉ định 'Those' mang nghĩa là 'Những người (đó)', là một đại từ số nhiều. Động từ trong mệnh đề quan hệ 'who' chia theo 'Those'.",
    "explanation": "Chính xác. Vì 'Those' là chủ ngữ số nhiều, động từ 'achieve' giữ nguyên mẫu.",
    "translation": "Những người đạt được số điểm từ 800 trở lên trong kỳ thi TOEIC sẽ nhận được giấy chứng nhận xuất sắc từ PrepMaster."
  },
  {
    "id": "q_sv_agreement_093",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Anyone who _____ to customize their corporate Happy Box orders should contact our sales team directly.",
    "options": [
      { "key": "A", "text": "wish" },
      { "key": "B", "text": "wishing" },
      { "key": "C", "text": "wishes" },
      { "key": "D", "text": "are wishing" }
    ],
    "correct_answer": "C",
    "hint": "Trái ngược với 'Those', đại từ bất định 'Anyone' (Bất cứ ai) luôn là chủ ngữ số ít.",
    "explanation": "Chính xác. Vì 'Anyone' là số ít, động từ trong mệnh đề quan hệ phải thêm 'es' thành 'wishes'.",
    "translation": "Bất cứ ai muốn tùy chỉnh các đơn đặt hàng Happy Box doanh nghiệp của mình nên liên hệ trực tiếp với đội ngũ bán hàng của chúng tôi."
  },
  {
    "id": "q_sv_agreement_094",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Six months _____ considered a realistic timeframe to build and launch a fully functional HR management website.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Một khoảng thời gian cụ thể ('Six months') được coi là một lượng thời gian duy nhất và đóng vai trò là chủ ngữ số ít.",
    "explanation": "Chính xác. Vì 'Six months' là một khối thời gian thống nhất, động từ to be chia ở số ít 'is'.",
    "translation": "Sáu tháng được coi là một khung thời gian thực tế để xây dựng và ra mắt một trang web quản lý nhân sự đầy đủ chức năng."
  },
  {
    "id": "q_sv_agreement_095",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "What the developers need right now _____ more time to optimize the timekeeping application for older Android devices.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "is" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "C",
    "hint": "Khi một mệnh đề danh ngữ (bắt đầu bằng What/That/How...) đóng vai trò làm chủ ngữ, động từ chính của câu luôn được chia ở dạng số ít.",
    "explanation": "Chính xác. Cả mệnh đề 'What the developers need right now' đóng vai trò là một sự việc duy nhất (số ít). Do đó, động từ to be phải là 'is'.",
    "translation": "Những gì các lập trình viên cần ngay lúc này là có thêm thời gian để tối ưu hóa ứng dụng chấm công cho các thiết bị Android đời cũ."
  },
  {
    "id": "q_sv_agreement_096",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The lead developer, accompanied by two junior software engineers, _____ presenting the new features to the board today.",
    "options": [
      { "key": "A", "text": "are" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "B",
    "hint": "Cụm 'accompanied by' hoạt động giống như 'along with' hoặc 'as well as', không làm thay đổi chủ ngữ chính đứng trước nó.",
    "explanation": "Chính xác. Chủ ngữ chính là 'The lead developer' (số ít). Các kỹ sư cấp dưới chỉ đi kèm theo, không ảnh hưởng đến động từ. Chọn 'is'.",
    "translation": "Lập trình viên chính, cùng với hai kỹ sư phần mềm cấp dưới, sẽ trình bày các tính năng mới cho hội đồng quản trị vào hôm nay."
  },
  {
    "id": "q_sv_agreement_097",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "Neither of the proposed marketing strategies for the Happy Box brand _____ selected by the CEO during yesterday's meeting.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "were" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "have been" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'Neither of + Danh từ số nhiều' mang nghĩa 'Không ai/Không cái nào (trong số 2 cái)', theo ngữ pháp chuẩn truyền thống luôn đi với động từ số ít.",
    "explanation": "Chính xác. Mặc dù 'strategies' là số nhiều, đại từ 'Neither' làm chủ ngữ chính (nghĩa là không một chiến lược nào). Kết hợp với 'yesterday', ta chọn 'was'.",
    "translation": "Không có chiến lược tiếp thị nào trong số hai chiến lược được đề xuất cho thương hiệu Happy Box được CEO lựa chọn trong cuộc họp ngày hôm qua."
  },
  {
    "id": "q_sv_agreement_098",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Hard",
    "question_text": "Many a mobile developer _____ struggled with the complexities of syncing offline data to the main server.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "has" },
      { "key": "C", "text": "are" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "B",
    "hint": "Hãy ghi nhớ cấu trúc đặc biệt: 'Many a + Noun (số ít) + Verb (số ít)'.",
    "explanation": "Chính xác. 'Many a mobile developer' bắt buộc đi với động từ số ít, do đó trợ động từ hiện tại hoàn thành phải là 'has'.",
    "translation": "Rất nhiều lập trình viên thiết bị di động đã phải vật lộn với sự phức tạp của việc đồng bộ hóa dữ liệu ngoại tuyến với máy chủ chính."
  },
  {
    "id": "q_sv_agreement_099",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Easy",
    "question_text": "Both the frontend user interface and the backend database of the EduKit application _____ completely overhauled last month.",
    "options": [
      { "key": "A", "text": "was" },
      { "key": "B", "text": "is" },
      { "key": "C", "text": "were" },
      { "key": "D", "text": "has been" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'Both A and B' (Cả A và B) luôn luôn tạo thành một chủ ngữ số nhiều.",
    "explanation": "Chính xác. Vì chủ ngữ là số nhiều và sự việc xảy ra 'last month', động từ to be phải chia ở quá khứ số nhiều 'were'.",
    "translation": "Cả giao diện người dùng frontend và cơ sở dữ liệu backend của ứng dụng EduKit đều đã được đại tu hoàn toàn vào tháng trước."
  },
  {
    "id": "q_sv_agreement_100",
    "part": 5,
    "grammar_topic": "Subject-Verb Agreement",
    "difficulty_level": "Medium",
    "question_text": "The number of positive reviews for the daily English speaking TikTok series _____ exceeded all of our initial expectations.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "are" },
      { "key": "C", "text": "has" },
      { "key": "D", "text": "were" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'The number of + Danh từ số nhiều' luôn đóng vai trò là chủ ngữ SỐ ÍT.",
    "explanation": "Chính xác. Chủ ngữ chính 'The number' là số ít. Để tạo thành thì hiện tại hoàn thành với động từ 'exceeded', ta dùng trợ động từ 'has'.",
    "translation": "Số lượng đánh giá tích cực cho loạt video nói tiếng Anh hàng ngày trên TikTok đã vượt qua mọi kỳ vọng ban đầu của chúng tôi."
  }
];

export const SV_AGREEMENT = {
  easy: SV_AGREEMENT_EASY,
  medium: [],
  hard: []
};

export const PARTS_OF_SPEECH_EASY = [
  {
    "id": "q_word_form_001",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "The new timekeeping app requires all employees to submit their timesheets for _____ by 5 PM on Fridays.",
    "options": [
      { "key": "A", "text": "approve" },
      { "key": "B", "text": "approval" },
      { "key": "C", "text": "approved" },
      { "key": "D", "text": "approving" }
    ],
    "correct_answer": "B",
    "hint": "Đứng sau giới từ 'for' bắt buộc phải là một danh từ hoặc V-ing. Ở đây ta cần một danh từ mang nghĩa 'sự phê duyệt'.",
    "explanation": "Chính xác. Giới từ 'for' cần một danh từ theo sau để làm tân ngữ. 'Approval' (sự phê duyệt) là danh từ gốc của động từ 'approve'.",
    "translation": "Ứng dụng chấm công mới yêu cầu tất cả nhân viên nộp bảng chấm công của họ để phê duyệt trước 5 giờ chiều các ngày thứ Sáu."
  },
  {
    "id": "q_word_form_002",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The grammar explanations on the PrepMaster platform are _____ beneficial for students aiming for the JLPT N3.",
    "options": [
      { "key": "A", "text": "extreme" },
      { "key": "B", "text": "extremely" },
      { "key": "C", "text": "extremes" },
      { "key": "D", "text": "extremity" }
    ],
    "correct_answer": "B",
    "hint": "Chỗ trống nằm giữa to be 'are' và tính từ 'beneficial' (có lợi). Từ duy nhất có thể bổ nghĩa cho tính từ là trạng từ.",
    "explanation": "Chính xác. Trạng từ 'extremely' (cực kỳ) đứng trước để bổ nghĩa và nhấn mạnh mức độ cho tính từ 'beneficial'.",
    "translation": "Các phần giải thích ngữ pháp trên nền tảng PrepMaster cực kỳ hữu ích cho những học sinh hướng tới kỳ thi JLPT N3."
  },
  {
    "id": "q_word_form_003",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Easy",
    "question_text": "The Happy Box team is currently looking for a _____ supplier of eco-friendly packaging materials.",
    "options": [
      { "key": "A", "text": "rely" },
      { "key": "B", "text": "reliable" },
      { "key": "C", "text": "reliably" },
      { "key": "D", "text": "reliability" }
    ],
    "correct_answer": "B",
    "hint": "Nằm giữa mạo từ 'a' và danh từ 'supplier', bạn cần một tính từ để bổ nghĩa cho danh từ đó.",
    "explanation": "Chính xác. Tính từ 'reliable' (đáng tin cậy) kết hợp với 'supplier' tạo thành cụm danh từ 'một nhà cung cấp đáng tin cậy'.",
    "translation": "Nhóm Happy Box hiện đang tìm kiếm một nhà cung cấp vật liệu đóng gói thân thiện với môi trường đáng tin cậy."
  },
  {
    "id": "q_word_form_004",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "To ensure maximum _____, the development team decided to refactor the React codebase for the web portal.",
    "options": [
      { "key": "A", "text": "perform" },
      { "key": "B", "text": "performance" },
      { "key": "C", "text": "performing" },
      { "key": "D", "text": "performed" }
    ],
    "correct_answer": "B",
    "hint": "Tính từ 'maximum' (tối đa) đứng trước yêu cầu một danh từ theo sau nó.",
    "explanation": "Chính xác. Danh từ 'performance' (hiệu suất) đi cùng tính từ 'maximum' tạo thành cụm 'hiệu suất tối đa'.",
    "translation": "Để đảm bảo hiệu suất tối đa, nhóm phát triển đã quyết định cấu trúc lại mã nguồn React cho cổng thông tin điện tử."
  },
  {
    "id": "q_word_form_005",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "To build a loyal audience, the creator _____ uploads short English speaking videos to her TikTok channel.",
    "options": [
      { "key": "A", "text": "consistent" },
      { "key": "B", "text": "consistency" },
      { "key": "C", "text": "consistently" },
      { "key": "D", "text": "consists" }
    ],
    "correct_answer": "C",
    "hint": "Đứng trước động từ thường 'uploads' và bổ nghĩa cho nó, ta cần một trạng từ chỉ tần suất/cách thức.",
    "explanation": "Chính xác. Trạng từ 'consistently' (một cách đều đặn/nhất quán) bổ nghĩa cho hành động 'uploads'.",
    "translation": "Để xây dựng một lượng khán giả trung thành, nhà sáng tạo liên tục tải lên các video ngắn luyện nói tiếng Anh lên kênh TikTok của cô ấy."
  },
  {
    "id": "q_word_form_006",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "A smooth _____ to the new mobile timekeeping system is mandatory for all warehouse and office staff.",
    "options": [
      { "key": "A", "text": "transition" },
      { "key": "B", "text": "transit" },
      { "key": "C", "text": "transitional" },
      { "key": "D", "text": "transitioned" }
    ],
    "correct_answer": "A",
    "hint": "Mạo từ 'A' và tính từ 'smooth' (suôn sẻ) báo hiệu từ cần điền phải là một danh từ làm chủ ngữ chính của câu.",
    "explanation": "Chính xác. Danh từ 'transition' (sự chuyển đổi) là đáp án đúng. Đuôi '-tion' là dấu hiệu nhận biết danh từ cực kỳ phổ biến.",
    "translation": "Một sự chuyển đổi suôn sẻ sang hệ thống chấm công di động mới là bắt buộc đối với tất cả nhân viên kho và văn phòng."
  },
  {
    "id": "q_word_form_007",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The user interface of the EduKit application remains _____ even after the implementation of several complex features.",
    "options": [
      { "key": "A", "text": "access" },
      { "key": "B", "text": "accessible" },
      { "key": "C", "text": "accessibly" },
      { "key": "D", "text": "accessibility" }
    ],
    "correct_answer": "B",
    "hint": "Động từ 'remains' (vẫn duy trì/giữ nguyên) là một linking verb. Sau linking verb luôn là một tính từ.",
    "explanation": "Chính xác. Tính từ 'accessible' (dễ tiếp cận/dễ sử dụng) đứng sau 'remains' để miêu tả giao diện người dùng.",
    "translation": "Giao diện người dùng của ứng dụng EduKit vẫn dễ sử dụng ngay cả sau khi triển khai một vài tính năng phức tạp."
  },
  {
    "id": "q_word_form_008",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "We plan to _____ the PrepMaster database to accommodate the growing number of users preparing for the TOEIC exam.",
    "options": [
      { "key": "A", "text": "broad" },
      { "key": "B", "text": "breadth" },
      { "key": "C", "text": "broaden" },
      { "key": "D", "text": "broadly" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'plan to do something'. Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'broaden' (mở rộng) được tạo ra bằng cách thêm hậu tố '-en' vào tính từ 'broad'.",
    "translation": "Chúng tôi dự định mở rộng cơ sở dữ liệu PrepMaster để đáp ứng số lượng ngày càng tăng người dùng chuẩn bị cho kỳ thi TOEIC."
  },
  {
    "id": "q_word_form_009",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "_____, the shipment of custom corporate gifts arrived just in time for the client's anniversary event.",
    "options": [
      { "key": "A", "text": "Fortunate" },
      { "key": "B", "text": "Fortune" },
      { "key": "C", "text": "Fortunately" },
      { "key": "D", "text": "Fortunateness" }
    ],
    "correct_answer": "C",
    "hint": "Đứng ở đầu câu và được ngăn cách bằng dấu phẩy, từ cần điền phải là một trạng từ bổ nghĩa cho toàn bộ mệnh đề phía sau.",
    "explanation": "Chính xác. Trạng từ 'Fortunately' (Thật may mắn) đứng đầu câu làm trạng từ liên kết.",
    "translation": "Thật may mắn, lô hàng quà tặng doanh nghiệp tùy chỉnh đã đến vừa kịp lúc cho sự kiện kỷ niệm của khách hàng."
  },
  {
    "id": "q_word_form_010",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The content creator received a highly positive _____ from viewers who improved their English pronunciation by watching her videos.",
    "options": [
      { "key": "A", "text": "respond" },
      { "key": "B", "text": "response" },
      { "key": "C", "text": "responsive" },
      { "key": "D", "text": "responsively" }
    ],
    "correct_answer": "B",
    "hint": "Mạo từ 'a' + trạng từ 'highly' + tính từ 'positive' -> Bắt buộc phải kết thúc bằng một danh từ số ít.",
    "explanation": "Chính xác. Danh từ 'response' (sự phản hồi) là đáp án đúng. 'Respond' là động từ.",
    "translation": "Nhà sáng tạo nội dung đã nhận được sự phản hồi rất tích cực từ những người xem đã cải thiện được cách phát âm tiếng Anh nhờ xem video của cô."
  },
  {
    "id": "q_word_form_011",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Easy",
    "question_text": "The HR manager provided a _____ summary of the new data privacy policy during the team meeting.",
    "options": [
      { "key": "A", "text": "detail" },
      { "key": "B", "text": "detailed" },
      { "key": "C", "text": "detailing" },
      { "key": "D", "text": "details" }
    ],
    "correct_answer": "B",
    "hint": "Đứng giữa mạo từ 'a' và danh từ 'summary' (bản tóm tắt), ta cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'detailed' (chi tiết/được trình bày cặn kẽ) bổ nghĩa cho danh từ 'summary'.",
    "translation": "Người quản lý nhân sự đã cung cấp một bản tóm tắt chi tiết về chính sách bảo mật dữ liệu mới trong cuộc họp nhóm."
  },
  {
    "id": "q_word_form_012",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The new React component renders the user dashboard _____, significantly enhancing the overall experience.",
    "options": [
      { "key": "A", "text": "quick" },
      { "key": "B", "text": "quickest" },
      { "key": "C", "text": "quickly" },
      { "key": "D", "text": "quickness" }
    ],
    "correct_answer": "C",
    "hint": "Từ cần điền bổ nghĩa cho động từ 'renders' (hiển thị/xuất), diễn tả tốc độ của hành động đó.",
    "explanation": "Chính xác. Trạng từ 'quickly' (một cách nhanh chóng) bổ nghĩa cho động từ thường 'renders'.",
    "translation": "Thành phần React mới hiển thị bảng điều khiển người dùng một cách nhanh chóng, nâng cao đáng kể trải nghiệm tổng thể."
  },
  {
    "id": "q_word_form_013",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "Continuous _____ is required to master both vocabulary and grammar when preparing for the JLPT N3 exam.",
    "options": [
      { "key": "A", "text": "dedicate" },
      { "key": "B", "text": "dedicated" },
      { "key": "C", "text": "dedication" },
      { "key": "D", "text": "dedicating" }
    ],
    "correct_answer": "C",
    "hint": "Tính từ 'Continuous' (liên tục) đứng đầu câu cần một danh từ theo sau để tạo thành cụm chủ ngữ.",
    "explanation": "Chính xác. Danh từ 'dedication' (sự cống hiến/sự nỗ lực) là chủ ngữ chính của câu. Đuôi '-tion' là đuôi danh từ quen thuộc.",
    "translation": "Sự nỗ lực liên tục là điều cần thiết để nắm vững cả từ vựng và ngữ pháp khi chuẩn bị cho kỳ thi JLPT N3."
  },
  {
    "id": "q_word_form_014",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "Offering customized branding options makes our corporate gift boxes highly _____ to potential B2B clients.",
    "options": [
      { "key": "A", "text": "attract" },
      { "key": "B", "text": "attractive" },
      { "key": "C", "text": "attractively" },
      { "key": "D", "text": "attraction" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc: make + tân ngữ (our corporate gift boxes) + [Trạng từ] + [Tính từ]. Tính từ này miêu tả tân ngữ.",
    "explanation": "Chính xác. Tính từ 'attractive' (hấp dẫn) đứng sau tân ngữ và trạng từ 'highly' để miêu tả sức hút của những hộp quà.",
    "translation": "Việc cung cấp các tùy chọn xây dựng thương hiệu tùy chỉnh làm cho các hộp quà tặng doanh nghiệp của chúng tôi trở nên cực kỳ hấp dẫn đối với các khách hàng B2B tiềm năng."
  },
  {
    "id": "q_word_form_015",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The main goal of the updated EduKit platform is to _____ the process of online learning for high school students.",
    "options": [
      { "key": "A", "text": "simple" },
      { "key": "B", "text": "simplify" },
      { "key": "C", "text": "simply" },
      { "key": "D", "text": "simplicity" }
    ],
    "correct_answer": "B",
    "hint": "Sau 'to' để chỉ mục đích, chúng ta cần một động từ nguyên mẫu (To-infinitive).",
    "explanation": "Chính xác. Động từ 'simplify' (đơn giản hóa) có hậu tố '-ify', một hậu tố tạo động từ rất phổ biến trong tiếng Anh.",
    "translation": "Mục tiêu chính của nền tảng EduKit được cập nhật là đơn giản hóa quá trình học trực tuyến cho học sinh trung học."
  },
  {
    "id": "q_word_form_016",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The daily conversational English practice videos on TikTok have become _____ popular among language learners.",
    "options": [
      { "key": "A", "text": "immense" },
      { "key": "B", "text": "immensely" },
      { "key": "C", "text": "immensity" },
      { "key": "D", "text": "immenseness" }
    ],
    "correct_answer": "B",
    "hint": "Giữa động từ liên kết 'become' và tính từ 'popular', ta cần một trạng từ chỉ mức độ để nhấn mạnh.",
    "explanation": "Chính xác. Trạng từ 'immensely' (cực kỳ / vô cùng) bổ nghĩa cho tính từ 'popular'.",
    "translation": "Các video thực hành hội thoại tiếng Anh hàng ngày trên TikTok đã trở nên cực kỳ phổ biến đối với những người học ngôn ngữ."
  },
  {
    "id": "q_word_form_017",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "Please remind all staff that the _____ of their digital timesheets must be completed by the last working day of the month.",
    "options": [
      { "key": "A", "text": "submit" },
      { "key": "B", "text": "submission" },
      { "key": "C", "text": "submissive" },
      { "key": "D", "text": "submitting" }
    ],
    "correct_answer": "B",
    "hint": "Sau mạo từ 'the' và trước giới từ 'of' luôn luôn là một danh từ.",
    "explanation": "Chính xác. Danh từ 'submission' (sự nộp/đệ trình) là danh từ gốc của động từ 'submit'.",
    "translation": "Vui lòng nhắc nhở tất cả nhân viên rằng việc nộp bảng chấm công kỹ thuật số của họ phải được hoàn thành trước ngày làm việc cuối cùng của tháng."
  },
  {
    "id": "q_word_form_018",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "All full-length mock exams on the PrepMaster application are strictly _____ and automatically close after 120 minutes.",
    "options": [
      { "key": "A", "text": "time" },
      { "key": "B", "text": "timely" },
      { "key": "C", "text": "timed" },
      { "key": "D", "text": "timer" }
    ],
    "correct_answer": "C",
    "hint": "Đứng sau to be 'are' và trạng từ 'strictly', ta cần một tính từ dạng phân từ (V-ed) mang nghĩa bị động: 'được canh thời gian'.",
    "explanation": "Chính xác. Tính từ 'timed' mang nghĩa 'được tính giờ/canh giờ'. 'Timely' (kịp thời) không hợp nghĩa trong ngữ cảnh bài thi.",
    "translation": "Tất cả các bài thi thử đầy đủ trên ứng dụng PrepMaster đều được tính giờ nghiêm ngặt và tự động đóng sau 120 phút."
  },
  {
    "id": "q_word_form_019",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The corporate client expressed great _____ with the premium quality of our eco-friendly packaging.",
    "options": [
      { "key": "A", "text": "satisfy" },
      { "key": "B", "text": "satisfactory" },
      { "key": "C", "text": "satisfying" },
      { "key": "D", "text": "satisfaction" }
    ],
    "correct_answer": "D",
    "hint": "Sau tính từ 'great' (to lớn/tuyệt vời) bắt buộc phải là một danh từ làm tân ngữ cho động từ 'expressed'.",
    "explanation": "Chính xác. Danh từ 'satisfaction' (sự hài lòng) có hậu tố '-tion' chuẩn xác.",
    "translation": "Khách hàng doanh nghiệp bày tỏ sự hài lòng tuyệt đối với chất lượng cao cấp của bao bì thân thiện với môi trường của chúng ta."
  },
  {
    "id": "q_word_form_020",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The backend developers _____ resolved the data synchronization issue between the mobile app and the HR server.",
    "options": [
      { "key": "A", "text": "prompt" },
      { "key": "B", "text": "promptness" },
      { "key": "C", "text": "promptly" },
      { "key": "D", "text": "prompting" }
    ],
    "correct_answer": "C",
    "hint": "Từ nằm giữa chủ ngữ và động từ chính 'resolved' là trạng từ, dùng để bổ nghĩa cho hành động đó.",
    "explanation": "Chính xác. Trạng từ 'promptly' (một cách nhanh chóng) diễn tả cách thức các lập trình viên giải quyết vấn đề.",
    "translation": "Các lập trình viên backend đã nhanh chóng giải quyết sự cố đồng bộ hóa dữ liệu giữa ứng dụng di động và máy chủ nhân sự."
  },
  {
    "id": "q_word_form_021",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The successful _____ of the React-based HR portal has significantly reduced administrative tasks.",
    "options": [
      { "key": "A", "text": "implement" },
      { "key": "B", "text": "implemented" },
      { "key": "C", "text": "implementation" },
      { "key": "D", "text": "implementing" }
    ],
    "correct_answer": "C",
    "hint": "Đứng sau tính từ 'successful' và trước giới từ 'of', chúng ta cần một danh từ để làm chủ ngữ chính cho câu.",
    "explanation": "Chính xác. Danh từ 'implementation' (sự triển khai) kết hợp với 'successful' tạo thành cụm 'sự triển khai thành công'. Đuôi '-tion' là dấu hiệu nhận biết danh từ.",
    "translation": "Sự triển khai thành công cổng thông tin nhân sự dựa trên React đã làm giảm đáng kể các nhiệm vụ hành chính."
  },
  {
    "id": "q_word_form_022",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Easy",
    "question_text": "The new mobile timekeeping app features a highly _____ interface that even older employees can use easily.",
    "options": [
      { "key": "A", "text": "intuition" },
      { "key": "B", "text": "intuitive" },
      { "key": "C", "text": "intuitively" },
      { "key": "D", "text": "intuitiveness" }
    ],
    "correct_answer": "B",
    "hint": "Nằm giữa trạng từ chỉ mức độ 'highly' và danh từ 'interface' (giao diện), ta cần một tính từ bổ nghĩa cho danh từ.",
    "explanation": "Chính xác. Tính từ 'intuitive' (trực quan/dễ hiểu) có đuôi '-ive' đặc trưng, dùng để miêu tả tính chất của giao diện người dùng.",
    "translation": "Ứng dụng chấm công di động mới có giao diện cực kỳ trực quan mà ngay cả những nhân viên lớn tuổi cũng có thể sử dụng dễ dàng."
  },
  {
    "id": "q_word_form_023",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The TikTok creator _____ uploads new English practice videos to keep her audience engaged.",
    "options": [
      { "key": "A", "text": "regular" },
      { "key": "B", "text": "regularity" },
      { "key": "C", "text": "regularly" },
      { "key": "D", "text": "regularize" }
    ],
    "correct_answer": "C",
    "hint": "Chỗ trống nằm giữa chủ ngữ 'The TikTok creator' và động từ chính 'uploads'. Bạn cần một trạng từ chỉ tần suất.",
    "explanation": "Chính xác. Trạng từ 'regularly' (một cách thường xuyên) bổ nghĩa cho động từ 'uploads'. Đuôi '-ly' là dấu hiệu của trạng từ.",
    "translation": "Nhà sáng tạo TikTok thường xuyên tải lên các video luyện tiếng Anh mới để giữ chân khán giả của cô ấy."
  },
  {
    "id": "q_word_form_024",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The latest software update will _____ users to track their TOEIC and JLPT study hours more accurately.",
    "options": [
      { "key": "A", "text": "able" },
      { "key": "B", "text": "ability" },
      { "key": "C", "text": "enable" },
      { "key": "D", "text": "enabling" }
    ],
    "correct_answer": "C",
    "hint": "Sau trợ động từ 'will', ta luôn cần một động từ ở dạng nguyên mẫu không 'to'.",
    "explanation": "Chính xác. Động từ 'enable' (cho phép/làm cho có khả năng) được tạo ra bằng cách thêm tiền tố 'en-' vào tính từ 'able'.",
    "translation": "Bản cập nhật phần mềm mới nhất sẽ cho phép người dùng theo dõi số giờ học TOEIC và JLPT của họ một cách chính xác hơn."
  },
  {
    "id": "q_word_form_025",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "Mass _____ of the eco-friendly Happy Boxes is scheduled to begin early next month.",
    "options": [
      { "key": "A", "text": "produce" },
      { "key": "B", "text": "product" },
      { "key": "C", "text": "productive" },
      { "key": "D", "text": "production" }
    ],
    "correct_answer": "D",
    "hint": "Tính từ 'Mass' (hàng loạt) đứng trước yêu cầu một danh từ theo sau để tạo thành cụm chủ ngữ hoàn chỉnh.",
    "explanation": "Chính xác. Danh từ 'production' (sự sản xuất) đi cùng 'Mass' tạo thành cụm 'sản xuất hàng loạt'. Đuôi '-tion' chỉ danh từ sự việc.",
    "translation": "Việc sản xuất hàng loạt các hộp Happy Box thân thiện với môi trường dự kiến sẽ bắt đầu vào đầu tháng tới."
  },
  {
    "id": "q_word_form_026",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The custom API ensures that data syncs _____ between the mobile timekeeping app and the central database.",
    "options": [
      { "key": "A", "text": "seamless" },
      { "key": "B", "text": "seamlessly" },
      { "key": "C", "text": "seamlessness" },
      { "key": "D", "text": "seam" }
    ],
    "correct_answer": "B",
    "hint": "Đứng sau động từ thường 'syncs' (đồng bộ) và trước giới từ 'between', ta cần trạng từ để chỉ cách thức đồng bộ.",
    "explanation": "Chính xác. Trạng từ 'seamlessly' (một cách liền mạch/trơn tru) bổ nghĩa cho động từ 'syncs'.",
    "translation": "API tùy chỉnh đảm bảo rằng dữ liệu đồng bộ liền mạch giữa ứng dụng chấm công di động và cơ sở dữ liệu trung tâm."
  },
  {
    "id": "q_word_form_027",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "PrepMaster provides a _____ review of grammar topics that frequently appear on the TOEIC exam.",
    "options": [
      { "key": "A", "text": "comprehend" },
      { "key": "B", "text": "comprehension" },
      { "key": "C", "text": "comprehensive" },
      { "key": "D", "text": "comprehensively" }
    ],
    "correct_answer": "C",
    "hint": "Chỗ trống nằm giữa mạo từ 'a' và danh từ 'review'. Bạn cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'comprehensive' (toàn diện/đầy đủ) có đuôi '-ive' bổ nghĩa cho danh từ 'review'.",
    "translation": "PrepMaster cung cấp một bài ôn tập toàn diện về các chủ điểm ngữ pháp thường xuất hiện trong kỳ thi TOEIC."
  },
  {
    "id": "q_word_form_028",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The mobile developer was praised by the CEO for his outstanding _____ to the HR portal project.",
    "options": [
      { "key": "A", "text": "contribute" },
      { "key": "B", "text": "contribution" },
      { "key": "C", "text": "contributory" },
      { "key": "D", "text": "contributing" }
    ],
    "correct_answer": "B",
    "hint": "Tính từ sở hữu 'his' và tính từ 'outstanding' (xuất sắc) bắt buộc từ theo sau phải là một danh từ.",
    "explanation": "Chính xác. Danh từ 'contribution' (sự đóng góp) là đáp án đúng. Cấu trúc: make a contribution to something.",
    "translation": "Lập trình viên thiết bị di động đã được Giám đốc điều hành khen ngợi vì sự đóng góp xuất sắc của anh ấy cho dự án cổng thông tin nhân sự."
  },
  {
    "id": "q_word_form_029",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Hard",
    "question_text": "All TOEIC and JLPT mock tests on the EduKit platform are _____ evaluated by our advanced AI system.",
    "options": [
      { "key": "A", "text": "objective" },
      { "key": "B", "text": "objectively" },
      { "key": "C", "text": "object" },
      { "key": "D", "text": "objectivity" }
    ],
    "correct_answer": "B",
    "hint": "Chỗ trống nằm giữa trợ động từ to be 'are' và động từ phân từ hai 'evaluated' (được đánh giá). Chỉ có trạng từ mới đứng được ở vị trí này.",
    "explanation": "Chính xác. Trạng từ 'objectively' (một cách khách quan) bổ nghĩa cho hành động 'được đánh giá'.",
    "translation": "Tất cả các bài thi thử TOEIC và JLPT trên nền tảng EduKit đều được hệ thống AI tiên tiến của chúng tôi đánh giá một cách khách quan."
  },
  {
    "id": "q_word_form_030",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "To prevent unauthorized access, the IT department decided to _____ the security protocols for the HR database.",
    "options": [
      { "key": "A", "text": "strong" },
      { "key": "B", "text": "strength" },
      { "key": "C", "text": "strengthen" },
      { "key": "D", "text": "strongly" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'decided to do something'. Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'strengthen' (củng cố/làm cho mạnh lên) có hậu tố '-en' rất phổ biến để tạo động từ từ tính/danh từ (strength -> strengthen).",
    "translation": "Để ngăn chặn truy cập trái phép, bộ phận CNTT đã quyết định củng cố các giao thức bảo mật cho cơ sở dữ liệu nhân sự."
  },
  {
    "id": "q_word_form_031",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "All holiday gift box designs must receive final _____ from the client before we begin manufacturing.",
    "options": [
      { "key": "A", "text": "approve" },
      { "key": "B", "text": "approved" },
      { "key": "C", "text": "approval" },
      { "key": "D", "text": "approving" }
    ],
    "correct_answer": "C",
    "hint": "Tính từ 'final' (cuối cùng) đứng trước yêu cầu một danh từ theo sau làm tân ngữ cho động từ 'receive'.",
    "explanation": "Chính xác. Danh từ 'approval' (sự phê duyệt) có đuôi '-al', một đuôi danh từ chỉ sự việc được chuyển từ động từ (approve -> approval).",
    "translation": "Tất cả các thiết kế hộp quà tặng dịp lễ phải nhận được sự phê duyệt cuối cùng từ khách hàng trước khi chúng tôi bắt đầu sản xuất."
  },
  {
    "id": "q_word_form_032",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The startup offers a highly _____ salary and benefits package to attract experienced React developers.",
    "options": [
      { "key": "A", "text": "compete" },
      { "key": "B", "text": "competition" },
      { "key": "C", "text": "competitive" },
      { "key": "D", "text": "competitively" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'a' + trạng từ 'highly' + [Tính từ] + danh từ 'salary'.",
    "explanation": "Chính xác. Tính từ 'competitive' (mang tính cạnh tranh) có đuôi '-ive' quen thuộc. 'A competitive salary' là cụm từ rất hay gặp trong các bài đọc tuyển dụng TOEIC.",
    "translation": "Công ty khởi nghiệp cung cấp một mức lương và gói phúc lợi mang tính cạnh tranh cao để thu hút các lập trình viên React giàu kinh nghiệm."
  },
  {
    "id": "q_word_form_033",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The new English practice module was _____ designed to help users overcome their fear of speaking.",
    "options": [
      { "key": "A", "text": "specific" },
      { "key": "B", "text": "specifically" },
      { "key": "C", "text": "specify" },
      { "key": "D", "text": "specification" }
    ],
    "correct_answer": "B",
    "hint": "Từ cần điền nằm giữa trợ động từ to be 'was' và động từ chính 'designed', vì vậy nó phải là trạng từ.",
    "explanation": "Chính xác. Trạng từ 'specifically' (một cách đặc biệt/dành riêng) bổ nghĩa cho hành động 'được thiết kế'.",
    "translation": "Mô-đun luyện tiếng Anh mới được thiết kế đặc biệt để giúp người dùng vượt qua nỗi sợ nói."
  },
  {
    "id": "q_word_form_034",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "Ensuring high customer _____ is the primary goal of the Happy Box customer service team.",
    "options": [
      { "key": "A", "text": "satisfy" },
      { "key": "B", "text": "satisfying" },
      { "key": "C", "text": "satisfied" },
      { "key": "D", "text": "satisfaction" }
    ],
    "correct_answer": "D",
    "hint": "Sau tính từ 'high' và danh từ bổ trợ 'customer', ta cần một danh từ để tạo thành cụm danh từ làm chủ ngữ.",
    "explanation": "Chính xác. Danh từ 'satisfaction' (sự hài lòng) có đuôi '-tion' tạo thành cụm từ cố định 'customer satisfaction' (sự hài lòng của khách hàng).",
    "translation": "Đảm bảo sự hài lòng cao của khách hàng là mục tiêu chính của nhóm dịch vụ khách hàng Happy Box."
  },
  {
    "id": "q_word_form_035",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The methodology used in the PrepMaster app has proven to be highly _____ for busy language learners.",
    "options": [
      { "key": "A", "text": "effect" },
      { "key": "B", "text": "effective" },
      { "key": "C", "text": "effectively" },
      { "key": "D", "text": "effectiveness" }
    ],
    "correct_answer": "B",
    "hint": "Sau động từ to be 'to be' và trạng từ 'highly', ta cần một tính từ miêu tả 'phương pháp luận' (methodology).",
    "explanation": "Chính xác. Tính từ 'effective' (hiệu quả) có đuôi '-ive' là lựa chọn đúng để miêu tả phương pháp học tập.",
    "translation": "Phương pháp luận được sử dụng trong ứng dụng PrepMaster đã được chứng minh là cực kỳ hiệu quả đối với những người học ngôn ngữ bận rộn."
  },
  {
    "id": "q_word_form_036",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Easy",
    "question_text": "Employees must enter their unique ID and password to _____ the HR portal and view their payslips.",
    "options": [
      { "key": "A", "text": "accessible" },
      { "key": "B", "text": "accessibility" },
      { "key": "C", "text": "access" },
      { "key": "D", "text": "accessibly" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'to do something' (để làm gì). Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'access' (truy cập) đóng vai trò diễn tả mục đích của việc nhập ID và mật khẩu. Chú ý: 'access' vừa là danh từ vừa là động từ.",
    "translation": "Nhân viên phải nhập ID và mật khẩu duy nhất của mình để truy cập cổng thông tin nhân sự và xem phiếu lương của họ."
  },
  {
    "id": "q_word_form_037",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The marketing and design teams worked _____ to launch the new holiday campaign on time.",
    "options": [
      { "key": "A", "text": "collaborate" },
      { "key": "B", "text": "collaborative" },
      { "key": "C", "text": "collaboratively" },
      { "key": "D", "text": "collaboration" }
    ],
    "correct_answer": "C",
    "hint": "Sau động từ 'worked', ta cần một trạng từ để miêu tả cách thức làm việc của hai đội nhóm.",
    "explanation": "Chính xác. Trạng từ 'collaboratively' (một cách hợp tác / cùng nhau) có đuôi '-ly' bổ nghĩa cho động từ 'worked'.",
    "translation": "Nhóm tiếp thị và nhóm thiết kế đã làm việc hợp tác cùng nhau để ra mắt chiến dịch dịp lễ đúng hạn."
  },
  {
    "id": "q_word_form_038",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Hard",
    "question_text": "Recent market research shows a strong _____ for customized corporate gifts over generic items.",
    "options": [
      { "key": "A", "text": "prefer" },
      { "key": "B", "text": "preferable" },
      { "key": "C", "text": "preferably" },
      { "key": "D", "text": "preference" }
    ],
    "correct_answer": "D",
    "hint": "Mạo từ 'a' + tính từ 'strong' đòi hỏi từ theo sau phải là một danh từ làm tân ngữ cho động từ 'shows'.",
    "explanation": "Chính xác. Danh từ 'preference' (sự ưa thích/ưu tiên) có đuôi '-ence' kết hợp với cấu trúc 'preference for A over B' (thích A hơn B).",
    "translation": "Nghiên cứu thị trường gần đây cho thấy sự ưa chuộng mạnh mẽ đối với các món quà tặng doanh nghiệp tùy chỉnh so với các mặt hàng thông thường."
  },
  {
    "id": "q_word_form_039",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The company maintains _____ guidelines regarding the security of all user data stored in the EduKit app.",
    "options": [
      { "key": "A", "text": "strictness" },
      { "key": "B", "text": "strictly" },
      { "key": "C", "text": "strict" },
      { "key": "D", "text": "stricter" }
    ],
    "correct_answer": "C",
    "hint": "Từ cần điền đứng trước danh từ 'guidelines' (những nguyên tắc/hướng dẫn), do đó nó phải là một tính từ.",
    "explanation": "Chính xác. Tính từ 'strict' (nghiêm ngặt) bổ nghĩa cho danh từ phía sau tạo thành cụm 'những nguyên tắc nghiêm ngặt'.",
    "translation": "Công ty duy trì các nguyên tắc nghiêm ngặt liên quan đến việc bảo mật tất cả dữ liệu người dùng được lưu trữ trong ứng dụng EduKit."
  },
  {
    "id": "q_word_form_040",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The rigorous _____ of the React components resulted in significantly faster loading times for the HR website.",
    "options": [
      { "key": "A", "text": "optimize" },
      { "key": "B", "text": "optimization" },
      { "key": "C", "text": "optimized" },
      { "key": "D", "text": "optimizing" }
    ],
    "correct_answer": "B",
    "hint": "Mạo từ 'The' và tính từ 'rigorous' (nghiêm ngặt/kỹ lưỡng) bắt buộc từ điền vào là một danh từ.",
    "explanation": "Chính xác. Danh từ 'optimization' (sự tối ưu hóa) có đuôi '-tion' là chủ ngữ chính của câu.",
    "translation": "Sự tối ưu hóa kỹ lưỡng các thành phần React đã dẫn đến thời gian tải trang web nhân sự nhanh hơn đáng kể."
  },
  {
    "id": "q_word_form_041",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "To ensure the _____ of the timekeeping data, employees must verify their hours before the end of the week.",
    "options": [
      { "key": "A", "text": "accurate" },
      { "key": "B", "text": "accurately" },
      { "key": "C", "text": "accuracy" },
      { "key": "D", "text": "accurateness" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'the' đứng trước và giới từ 'of' đứng sau bắt buộc từ cần điền phải là một danh từ.",
    "explanation": "Chính xác. Danh từ 'accuracy' (sự chính xác) với hậu tố '-cy' là đáp án đúng để tạo thành cụm 'sự chính xác của dữ liệu chấm công'.",
    "translation": "Để đảm bảo sự chính xác của dữ liệu chấm công, nhân viên phải xác minh giờ làm việc của mình trước cuối tuần."
  },
  {
    "id": "q_word_form_042",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Hard",
    "question_text": "The React components for the HR portal were _____ designed to load quickly and reduce server requests.",
    "options": [
      { "key": "A", "text": "efficient" },
      { "key": "B", "text": "efficiency" },
      { "key": "C", "text": "efficiencies" },
      { "key": "D", "text": "efficiently" }
    ],
    "correct_answer": "D",
    "hint": "Chỗ trống nằm giữa trợ động từ to be 'were' và động từ phân từ hai 'designed'. Vị trí này chỉ dành cho trạng từ.",
    "explanation": "Chính xác. Trạng từ 'efficiently' (một cách hiệu quả) bổ nghĩa cho hành động 'được thiết kế'.",
    "translation": "Các thành phần React cho cổng thông tin nhân sự được thiết kế một cách hiệu quả để tải nhanh và giảm thiểu các yêu cầu đến máy chủ."
  },
  {
    "id": "q_word_form_043",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "Happy Box offers a _____ selection of customized corporate gifts to suit different company budgets.",
    "options": [
      { "key": "A", "text": "variety" },
      { "key": "B", "text": "various" },
      { "key": "C", "text": "vary" },
      { "key": "D", "text": "variably" }
    ],
    "correct_answer": "B",
    "hint": "Nằm giữa mạo từ 'a' và danh từ 'selection' (sự lựa chọn/bộ sưu tập), ta cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'various' (đa dạng/nhiều loại) bổ nghĩa cho 'selection' tạo thành cụm 'một sự lựa chọn đa dạng'.",
    "translation": "Happy Box cung cấp một sự lựa chọn đa dạng các món quà tặng doanh nghiệp tùy chỉnh để phù hợp với các ngân sách công ty khác nhau."
  },
  {
    "id": "q_word_form_044",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The new mobile application will _____ the entire attendance tracking process, saving managers hours of manual work.",
    "options": [
      { "key": "A", "text": "automatic" },
      { "key": "B", "text": "automatically" },
      { "key": "C", "text": "automate" },
      { "key": "D", "text": "automation" }
    ],
    "correct_answer": "C",
    "hint": "Sau trợ động từ 'will' (sẽ), chúng ta luôn cần một động từ ở dạng nguyên mẫu không 'to'.",
    "explanation": "Chính xác. Động từ 'automate' (tự động hóa) với hậu tố '-ate' là đáp án chuẩn xác để diễn tả hành động của ứng dụng.",
    "translation": "Ứng dụng di động mới sẽ tự động hóa toàn bộ quá trình theo dõi điểm danh, giúp các nhà quản lý tiết kiệm được nhiều giờ làm việc thủ công."
  },
  {
    "id": "q_word_form_045",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "The _____ of the daily English speaking series on TikTok has attracted millions of language learners worldwide.",
    "options": [
      { "key": "A", "text": "create" },
      { "key": "B", "text": "creative" },
      { "key": "C", "text": "creatively" },
      { "key": "D", "text": "creation" }
    ],
    "correct_answer": "D",
    "hint": "Cấu trúc 'The + [Danh từ] + of + [Danh từ]'. Chỗ trống phải là một danh từ đóng vai trò chủ ngữ.",
    "explanation": "Chính xác. Danh từ 'creation' (sự tạo ra/sự sáng tạo) với hậu tố '-tion' là chủ ngữ chính của câu.",
    "translation": "Việc tạo ra loạt video nói tiếng Anh hàng ngày trên TikTok đã thu hút hàng triệu người học ngôn ngữ trên toàn thế giới."
  },
  {
    "id": "q_word_form_046",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The TOEIC and JLPT mock tests on the PrepMaster app are _____ updated to reflect the latest exam trends.",
    "options": [
      { "key": "A", "text": "continual" },
      { "key": "B", "text": "continually" },
      { "key": "C", "text": "continue" },
      { "key": "D", "text": "continuation" }
    ],
    "correct_answer": "B",
    "hint": "Đứng trước động từ phân từ hai 'updated', ta cần một trạng từ để bổ nghĩa về mặt tần suất cho hành động đó.",
    "explanation": "Chính xác. Trạng từ 'continually' (một cách liên tục/không ngừng) bổ nghĩa cho động từ 'được cập nhật'.",
    "translation": "Các bài thi thử TOEIC và JLPT trên ứng dụng PrepMaster liên tục được cập nhật để phản ánh các xu hướng ra đề mới nhất."
  },
  {
    "id": "q_word_form_047",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "Learning Japanese and English concurrently requires a _____ commitment of time and energy.",
    "options": [
      { "key": "A", "text": "substance" },
      { "key": "B", "text": "substantial" },
      { "key": "C", "text": "substantially" },
      { "key": "D", "text": "substantiate" }
    ],
    "correct_answer": "B",
    "hint": "Giữa mạo từ 'a' và danh từ 'commitment' (sự cam kết), ta cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'substantial' (đáng kể/lớn lao) với hậu tố '-al' kết hợp với danh từ phía sau tạo thành cụm 'một sự cam kết lớn'.",
    "translation": "Việc học tiếng Nhật và tiếng Anh cùng lúc đòi hỏi một sự cam kết đáng kể về thời gian và sức lực."
  },
  {
    "id": "q_word_form_048",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The board of directors finally reached a mutual _____ regarding the marketing budget for the EduKit project.",
    "options": [
      { "key": "A", "text": "agree" },
      { "key": "B", "text": "agreed" },
      { "key": "C", "text": "agreement" },
      { "key": "D", "text": "agreeable" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'a' + tính từ 'mutual' (lẫn nhau/chung) yêu cầu một danh từ đứng cuối để hoàn thành cụm tân ngữ.",
    "explanation": "Chính xác. Danh từ 'agreement' (sự thỏa thuận/sự đồng tình) có hậu tố '-ment' ghép thành cụm 'a mutual agreement' (một thỏa thuận chung).",
    "translation": "Hội đồng quản trị cuối cùng đã đạt được một thỏa thuận chung về ngân sách tiếp thị cho dự án EduKit."
  },
  {
    "id": "q_word_form_049",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Easy",
    "question_text": "For security reasons, employees must _____ their login passwords for the HR portal every 90 days.",
    "options": [
      { "key": "A", "text": "renewal" },
      { "key": "B", "text": "renewable" },
      { "key": "C", "text": "renew" },
      { "key": "D", "text": "renews" }
    ],
    "correct_answer": "C",
    "hint": "Động từ khuyết thiếu 'must' (phải) luôn luôn đi kèm với một động từ nguyên mẫu không 'to'.",
    "explanation": "Chính xác. Động từ nguyên mẫu 'renew' (làm mới/gia hạn) đứng sau 'must' diễn tả một hành động bắt buộc.",
    "translation": "Vì lý do bảo mật, nhân viên phải làm mới mật khẩu đăng nhập cổng thông tin nhân sự của họ cứ sau 90 ngày."
  },
  {
    "id": "q_word_form_050",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The promotional video for the new Happy Box collection performed _____ well across all social media platforms.",
    "options": [
      { "key": "A", "text": "exceptional" },
      { "key": "B", "text": "exceptionally" },
      { "key": "C", "text": "exception" },
      { "key": "D", "text": "exceptions" }
    ],
    "correct_answer": "B",
    "hint": "Trước trạng từ 'well' (tốt), bạn cần một trạng từ chỉ mức độ để bổ nghĩa và nhấn mạnh cho nó.",
    "explanation": "Chính xác. Trạng từ 'exceptionally' (đặc biệt/xuất chúng) bổ nghĩa cho trạng từ 'well', tạo thành cụm 'đặc biệt tốt'.",
    "translation": "Video quảng cáo cho bộ sưu tập Happy Box mới hoạt động đặc biệt tốt trên tất cả các nền tảng truyền thông xã hội."
  },
  {
    "id": "q_word_form_051",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "The main priority for the React developer is to ensure the _____ of the web application against cyber attacks.",
    "options": [
      { "key": "A", "text": "secure" },
      { "key": "B", "text": "securely" },
      { "key": "C", "text": "securing" },
      { "key": "D", "text": "security" }
    ],
    "correct_answer": "D",
    "hint": "Mạo từ 'the' đòi hỏi một danh từ theo sau nó để làm tân ngữ cho động từ 'ensure' (đảm bảo).",
    "explanation": "Chính xác. Danh từ 'security' (sự bảo mật) với hậu tố '-ity' là từ phù hợp nhất về mặt cấu trúc và ý nghĩa.",
    "translation": "Ưu tiên chính của lập trình viên React là đảm bảo sự bảo mật của ứng dụng web trước các cuộc tấn công mạng."
  },
  {
    "id": "q_word_form_052",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The _____ growth of the EduKit user base demonstrates the high demand for interactive online learning tools.",
    "options": [
      { "key": "A", "text": "rapid" },
      { "key": "B", "text": "rapidly" },
      { "key": "C", "text": "rapidity" },
      { "key": "D", "text": "rapids" }
    ],
    "correct_answer": "A",
    "hint": "Từ cần điền đứng trước danh từ 'growth' (sự tăng trưởng) để miêu tả tốc độ của sự tăng trưởng đó.",
    "explanation": "Chính xác. Tính từ 'rapid' (nhanh chóng) đứng trước và bổ nghĩa cho danh từ 'growth'.",
    "translation": "Sự tăng trưởng nhanh chóng của cơ sở người dùng EduKit chứng tỏ nhu cầu cao đối với các công cụ học trực tuyến tương tác."
  },
  {
    "id": "q_word_form_053",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The new payroll software _____ calculates overtime pay based on the data imported from the timekeeping app.",
    "options": [
      { "key": "A", "text": "precise" },
      { "key": "B", "text": "precision" },
      { "key": "C", "text": "precisely" },
      { "key": "D", "text": "preciseness" }
    ],
    "correct_answer": "C",
    "hint": "Chỗ trống nằm giữa chủ ngữ 'software' và động từ chính 'calculates'. Vị trí này yêu cầu một trạng từ.",
    "explanation": "Chính xác. Trạng từ 'precisely' (một cách chính xác) bổ nghĩa cho hành động tính toán của phần mềm.",
    "translation": "Phần mềm tính lương mới tính toán chính xác tiền lương làm thêm giờ dựa trên dữ liệu được nhập từ ứng dụng chấm công."
  },
  {
    "id": "q_word_form_054",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Easy",
    "question_text": "The company plans to _____ its PrepMaster app services to the Japanese market early next year.",
    "options": [
      { "key": "A", "text": "expand" },
      { "key": "B", "text": "expansion" },
      { "key": "C", "text": "expansive" },
      { "key": "D", "text": "expands" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'plan to do something'. Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ nguyên mẫu 'expand' (mở rộng) đi sau 'to' để chỉ mục đích/kế hoạch của công ty.",
    "translation": "Công ty có kế hoạch mở rộng các dịch vụ ứng dụng PrepMaster sang thị trường Nhật Bản vào đầu năm tới."
  },
  {
    "id": "q_word_form_055",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Hard",
    "question_text": "The recent _____ of advanced analytics features to the PrepMaster platform has greatly increased user retention.",
    "options": [
      { "key": "A", "text": "add" },
      { "key": "B", "text": "added" },
      { "key": "C", "text": "additional" },
      { "key": "D", "text": "addition" }
    ],
    "correct_answer": "D",
    "hint": "Mạo từ 'The' và tính từ 'recent' (gần đây) đòi hỏi một danh từ theo sau làm chủ ngữ chính của câu.",
    "explanation": "Chính xác. Danh từ 'addition' (sự thêm vào/bổ sung) là đáp án đúng, tạo thành cụm chủ ngữ 'Việc bổ sung gần đây...'.",
    "translation": "Việc bổ sung gần đây các tính năng phân tích nâng cao vào nền tảng PrepMaster đã làm tăng đáng kể tỷ lệ giữ chân người dùng."
  },
  {
    "id": "q_word_form_056",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The mobile application is fully _____ with all the latest iOS and Android operating systems.",
    "options": [
      { "key": "A", "text": "compete" },
      { "key": "B", "text": "compatible" },
      { "key": "C", "text": "compatibility" },
      { "key": "D", "text": "compatibly" }
    ],
    "correct_answer": "B",
    "hint": "Đứng sau động từ to be 'is' và trạng từ 'fully', ta cần một tính từ miêu tả tính chất của ứng dụng. Cấu trúc '... with' mang nghĩa 'tương thích với'.",
    "explanation": "Chính xác. Tính từ 'compatible' (tương thích) đi kèm với giới từ 'with' là một cụm từ rất phổ biến trong lĩnh vực công nghệ.",
    "translation": "Ứng dụng di động hoàn toàn tương thích với tất cả các hệ điều hành iOS và Android mới nhất."
  },
  {
    "id": "q_word_form_057",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The newly upgraded database server handles heavy web traffic _____, ensuring no downtime during peak hours.",
    "options": [
      { "key": "A", "text": "effortless" },
      { "key": "B", "text": "effort" },
      { "key": "C", "text": "effortlessly" },
      { "key": "D", "text": "efforts" }
    ],
    "correct_answer": "C",
    "hint": "Từ cần điền bổ nghĩa cho động từ 'handles' (xử lý), trả lời cho câu hỏi 'xử lý như thế nào?'.",
    "explanation": "Chính xác. Trạng từ 'effortlessly' (một cách dễ dàng/không tốn sức) bổ nghĩa cho hành động xử lý của máy chủ.",
    "translation": "Máy chủ cơ sở dữ liệu mới được nâng cấp xử lý lưu lượng truy cập web lớn một cách dễ dàng, đảm bảo không có thời gian chết trong giờ cao điểm."
  },
  {
    "id": "q_word_form_058",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "Ms. Lin expressed her deep _____ to the loyal followers of her TikTok English channel during the live stream.",
    "options": [
      { "key": "A", "text": "appreciate" },
      { "key": "B", "text": "appreciative" },
      { "key": "C", "text": "appreciatively" },
      { "key": "D", "text": "appreciation" }
    ],
    "correct_answer": "D",
    "hint": "Tính từ sở hữu 'her' và tính từ 'deep' (sâu sắc) bắt buộc từ điền vào phải là một danh từ.",
    "explanation": "Chính xác. Danh từ 'appreciation' (sự trân trọng / lòng biết ơn) có hậu tố '-tion' tạo thành cụm 'lòng biết ơn sâu sắc'.",
    "translation": "Cô Lin bày tỏ lòng biết ơn sâu sắc của mình tới những người theo dõi trung thành của kênh tiếng Anh TikTok của cô trong buổi phát trực tiếp."
  },
  {
    "id": "q_word_form_059",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Easy",
    "question_text": "The CEO wants to _____ the gift box packaging to include the company logos of our B2B clients.",
    "options": [
      { "key": "A", "text": "custom" },
      { "key": "B", "text": "customary" },
      { "key": "C", "text": "customize" },
      { "key": "D", "text": "customer" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'want to do something'. Chỗ trống cần một động từ nguyên thể.",
    "explanation": "Chính xác. Động từ 'customize' (tùy chỉnh/cá nhân hóa) có hậu tố '-ize', một hậu tố chuyên dùng để tạo động từ.",
    "translation": "Giám đốc điều hành muốn tùy chỉnh bao bì hộp quà để bao gồm biểu trưng (logo) của các khách hàng B2B của chúng tôi."
  },
  {
    "id": "q_word_form_060",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "Implementing the new automated timekeeping system proved to be a highly _____ decision for the company.",
    "options": [
      { "key": "A", "text": "profit" },
      { "key": "B", "text": "profitably" },
      { "key": "C", "text": "profitable" },
      { "key": "D", "text": "profitability" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'a' + trạng từ 'highly' + [Tính từ] + danh từ 'decision' (quyết định).",
    "explanation": "Chính xác. Tính từ 'profitable' (sinh lời / có lợi) với hậu tố '-able' bổ nghĩa cho danh từ 'decision'.",
    "translation": "Việc triển khai hệ thống chấm công tự động mới tỏ ra là một quyết định mang lại nhiều lợi ích cho công ty."
  },
  {
    "id": "q_word_form_061",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The continuous _____ of the React-based HR portal is necessary to meet the growing demands of the company.",
    "options": [
      { "key": "A", "text": "innovate" },
      { "key": "B", "text": "innovative" },
      { "key": "C", "text": "innovation" },
      { "key": "D", "text": "innovatively" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'The' và tính từ 'continuous' (liên tục) đứng trước đòi hỏi một danh từ theo sau làm chủ ngữ chính.",
    "explanation": "Chính xác. Danh từ 'innovation' (sự đổi mới/cải tiến) có đuôi '-tion' tạo thành cụm chủ ngữ 'Sự cải tiến liên tục...'.",
    "translation": "Sự cải tiến liên tục của cổng thông tin nhân sự dựa trên React là cần thiết để đáp ứng nhu cầu ngày càng tăng của công ty."
  },
  {
    "id": "q_word_form_062",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The new advanced learning module in PrepMaster is designed _____ for students aiming for a TOEIC score of 900+.",
    "options": [
      { "key": "A", "text": "exclusive" },
      { "key": "B", "text": "exclusively" },
      { "key": "C", "text": "exclusivity" },
      { "key": "D", "text": "excluding" }
    ],
    "correct_answer": "B",
    "hint": "Từ cần điền bổ nghĩa cho hành động 'designed' (được thiết kế), chỉ ra mục đích thiết kế hướng tới ai.",
    "explanation": "Chính xác. Trạng từ 'exclusively' (dành riêng/độc quyền) có đuôi '-ly' bổ nghĩa cho động từ phân từ hai 'designed'.",
    "translation": "Mô-đun học tập nâng cao mới trong PrepMaster được thiết kế dành riêng cho những học sinh hướng tới điểm TOEIC 900+."
  },
  {
    "id": "q_word_form_063",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "Happy Box's management team made a _____ decision to shift their marketing focus entirely to B2B clients.",
    "options": [
      { "key": "A", "text": "strategy" },
      { "key": "B", "text": "strategize" },
      { "key": "C", "text": "strategic" },
      { "key": "D", "text": "strategically" }
    ],
    "correct_answer": "C",
    "hint": "Chỗ trống nằm giữa mạo từ 'a' và danh từ 'decision' (quyết định), do đó bạn cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'strategic' (mang tính chiến lược) có đuôi '-ic' kết hợp với 'decision' tạo thành cụm 'một quyết định mang tính chiến lược'.",
    "translation": "Ban quản lý của Happy Box đã đưa ra một quyết định mang tính chiến lược là chuyển toàn bộ trọng tâm tiếp thị sang các khách hàng B2B."
  },
  {
    "id": "q_word_form_064",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "To _____ server downtime during peak hours, the IT department has upgraded the database hardware.",
    "options": [
      { "key": "A", "text": "minimum" },
      { "key": "B", "text": "minimize" },
      { "key": "C", "text": "minimal" },
      { "key": "D", "text": "minimally" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'To do something' chỉ mục đích. Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'minimize' (giảm thiểu) có đuôi '-ize' rất đặc trưng để tạo động từ trong tiếng Anh.",
    "translation": "Để giảm thiểu thời gian chết của máy chủ trong giờ cao điểm, bộ phận CNTT đã nâng cấp phần cứng cơ sở dữ liệu."
  },
  {
    "id": "q_word_form_065",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "Routine _____ of the mobile timekeeping app is scheduled for this weekend, so the system will be temporarily offline.",
    "options": [
      { "key": "A", "text": "maintain" },
      { "key": "B", "text": "maintained" },
      { "key": "C", "text": "maintaining" },
      { "key": "D", "text": "maintenance" }
    ],
    "correct_answer": "D",
    "hint": "Tính từ 'Routine' (thường lệ/định kỳ) đứng trước yêu cầu một danh từ theo sau làm chủ ngữ.",
    "explanation": "Chính xác. Danh từ 'maintenance' (sự bảo trì) có đuôi '-ance' là danh từ gốc của động từ 'maintain'.",
    "translation": "Việc bảo trì định kỳ ứng dụng chấm công di động được lên lịch vào cuối tuần này, vì vậy hệ thống sẽ tạm thời ngoại tuyến."
  },
  {
    "id": "q_word_form_066",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The new Mobile Developer Intern _____ answered all the technical questions during his final interview.",
    "options": [
      { "key": "A", "text": "confident" },
      { "key": "B", "text": "confidence" },
      { "key": "C", "text": "confidently" },
      { "key": "D", "text": "confide" }
    ],
    "correct_answer": "C",
    "hint": "Từ cần điền nằm giữa chủ ngữ và động từ chính 'answered', đóng vai trò bổ nghĩa cho cách thức trả lời.",
    "explanation": "Chính xác. Trạng từ 'confidently' (một cách tự tin) bổ nghĩa cho động từ 'answered'.",
    "translation": "Thực tập sinh Mobile Developer mới đã tự tin trả lời tất cả các câu hỏi kỹ thuật trong buổi phỏng vấn cuối cùng của anh ấy."
  },
  {
    "id": "q_word_form_067",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "For a smooth user experience, the navigation flow of the EduKit application must be highly _____.",
    "options": [
      { "key": "A", "text": "predict" },
      { "key": "B", "text": "predictable" },
      { "key": "C", "text": "predictably" },
      { "key": "D", "text": "predictability" }
    ],
    "correct_answer": "B",
    "hint": "Sau động từ to be 'be' và trạng từ 'highly', ta cần một tính từ miêu tả luồng điều hướng (navigation flow).",
    "explanation": "Chính xác. Tính từ 'predictable' (có thể đoán trước/dễ đoán) có đuôi '-able' miêu tả một giao diện thân thiện, logic với người dùng.",
    "translation": "Để có trải nghiệm người dùng suôn sẻ, luồng điều hướng của ứng dụng EduKit phải rất dễ đoán (có tính logic cao)."
  },
  {
    "id": "q_word_form_068",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "To increase its market share, PrepMaster plans to _____ its language course offerings by adding Korean and Mandarin.",
    "options": [
      { "key": "A", "text": "diverse" },
      { "key": "B", "text": "diversity" },
      { "key": "C", "text": "diversify" },
      { "key": "D", "text": "diversification" }
    ],
    "correct_answer": "C",
    "hint": "Sau 'to' để chỉ mục đích hoặc kế hoạch, chúng ta cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'diversify' (đa dạng hóa) có đuôi '-ify' được tạo ra từ tính từ 'diverse'.",
    "translation": "Để tăng thị phần, PrepMaster có kế hoạch đa dạng hóa các khóa học ngôn ngữ được cung cấp bằng cách thêm tiếng Hàn và tiếng Quan Thoại."
  },
  {
    "id": "q_word_form_069",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "A comprehensive _____ of the new timekeeping system showed a 20 percent increase in overall HR efficiency.",
    "options": [
      { "key": "A", "text": "evaluate" },
      { "key": "B", "text": "evaluation" },
      { "key": "C", "text": "evaluative" },
      { "key": "D", "text": "evaluating" }
    ],
    "correct_answer": "B",
    "hint": "Mạo từ 'A' và tính từ 'comprehensive' (toàn diện) đòi hỏi một danh từ theo sau.",
    "explanation": "Chính xác. Danh từ 'evaluation' (sự đánh giá) có đuôi '-tion' tạo thành cụm chủ ngữ 'Một sự đánh giá toàn diện...'.",
    "translation": "Một sự đánh giá toàn diện về hệ thống chấm công mới cho thấy hiệu quả chung của bộ phận nhân sự đã tăng 20%."
  },
  {
    "id": "q_word_form_070",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The Happy Box holiday campaign was _____ expected to launch in November, but it was postponed to December.",
    "options": [
      { "key": "A", "text": "initial" },
      { "key": "B", "text": "initially" },
      { "key": "C", "text": "initiate" },
      { "key": "D", "text": "initiative" }
    ],
    "correct_answer": "B",
    "hint": "Chỗ trống nằm giữa to be 'was' và động từ phân từ hai 'expected' (được dự kiến). Vị trí này chỉ dành cho trạng từ.",
    "explanation": "Chính xác. Trạng từ 'initially' (ban đầu/lúc đầu) bổ nghĩa cho hành động 'được dự kiến'.",
    "translation": "Chiến dịch dịp lễ Happy Box ban đầu được dự kiến ra mắt vào tháng 11, nhưng nó đã bị hoãn lại đến tháng 12."
  },
  {
    "id": "q_word_form_071",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Easy",
    "question_text": "The CEO requested a detailed _____ analysis before approving the budget for the new app development project.",
    "options": [
      { "key": "A", "text": "finance" },
      { "key": "B", "text": "financial" },
      { "key": "C", "text": "financially" },
      { "key": "D", "text": "financed" }
    ],
    "correct_answer": "B",
    "hint": "Từ cần điền đứng trước danh từ 'analysis' (phân tích) để chỉ loại hình phân tích (thuộc về tài chính).",
    "explanation": "Chính xác. Tính từ 'financial' (thuộc về tài chính) có đuôi '-al' bổ nghĩa cho 'analysis' tạo thành cụm 'financial analysis'.",
    "translation": "Giám đốc điều hành đã yêu cầu một bản phân tích tài chính chi tiết trước khi phê duyệt ngân sách cho dự án phát triển ứng dụng mới."
  },
  {
    "id": "q_word_form_072",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Hard",
    "question_text": "Could you please _____ the instructions for syncing the offline data to the main server?",
    "options": [
      { "key": "A", "text": "clear" },
      { "key": "B", "text": "clarity" },
      { "key": "C", "text": "clarify" },
      { "key": "D", "text": "clearly" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'Could you please + Động từ nguyên mẫu' dùng để đưa ra lời yêu cầu lịch sự.",
    "explanation": "Chính xác. Động từ 'clarify' (làm rõ) có đuôi '-ify' là động từ nguyên mẫu đứng sau 'please'.",
    "translation": "Bạn có thể vui lòng làm rõ các hướng dẫn về việc đồng bộ hóa dữ liệu ngoại tuyến với máy chủ chính được không?"
  },
  {
    "id": "q_word_form_073",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The strategic _____ between EduKit and local universities has provided students with free access to learning materials.",
    "options": [
      { "key": "A", "text": "partner" },
      { "key": "B", "text": "partnered" },
      { "key": "C", "text": "partnership" },
      { "key": "D", "text": "partnering" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'The' và tính từ 'strategic' (chiến lược) yêu cầu một danh từ chỉ mối quan hệ theo sau.",
    "explanation": "Chính xác. Danh từ 'partnership' (mối quan hệ đối tác) có đuôi '-ship' tạo thành cụm 'mối quan hệ đối tác chiến lược'.",
    "translation": "Mối quan hệ đối tác chiến lược giữa EduKit và các trường đại học địa phương đã cung cấp cho sinh viên quyền truy cập miễn phí vào các tài liệu học tập."
  },
  {
    "id": "q_word_form_074",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The TikTok creator _____ interacts with her followers in the comment section to build a strong community.",
    "options": [
      { "key": "A", "text": "active" },
      { "key": "B", "text": "actively" },
      { "key": "C", "text": "activity" },
      { "key": "D", "text": "activate" }
    ],
    "correct_answer": "B",
    "hint": "Nằm giữa chủ ngữ và động từ chính 'interacts' (tương tác), ta cần một trạng từ chỉ cách thức.",
    "explanation": "Chính xác. Trạng từ 'actively' (một cách tích cực) bổ nghĩa cho hành động tương tác của nhà sáng tạo.",
    "translation": "Nhà sáng tạo trên TikTok tích cực tương tác với những người theo dõi cô ấy trong phần bình luận để xây dựng một cộng đồng vững mạnh."
  },
  {
    "id": "q_word_form_075",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "Some older staff members were initially _____ to adopt the new digital HR portal for their daily check-ins.",
    "options": [
      { "key": "A", "text": "hesitate" },
      { "key": "B", "text": "hesitation" },
      { "key": "C", "text": "hesitant" },
      { "key": "D", "text": "hesitantly" }
    ],
    "correct_answer": "C",
    "hint": "Sau động từ to be 'were' và trạng từ 'initially' (ban đầu), ta cần một tính từ miêu tả thái độ của nhân viên.",
    "explanation": "Chính xác. Tính từ 'hesitant' (do dự/ngần ngại) có đuôi '-ant' đi với cấu trúc 'to be hesitant to do something'.",
    "translation": "Một số nhân viên lớn tuổi ban đầu đã tỏ ra ngần ngại trong việc áp dụng cổng thông tin nhân sự kỹ thuật số mới cho việc điểm danh hàng ngày của họ."
  },
  {
    "id": "q_word_form_076",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The short 60-second video format helps language learners _____ new English vocabulary much more effectively.",
    "options": [
      { "key": "A", "text": "memory" },
      { "key": "B", "text": "memorize" },
      { "key": "C", "text": "memorable" },
      { "key": "D", "text": "memorably" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'help someone (to) do something'. Chỗ trống cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'memorize' (ghi nhớ) có đuôi '-ize' đóng vai trò là động từ chỉ hành động của người học.",
    "translation": "Định dạng video ngắn 60 giây giúp người học ngôn ngữ ghi nhớ từ vựng tiếng Anh mới một cách hiệu quả hơn nhiều."
  },
  {
    "id": "q_word_form_077",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "Under the expert _____ of the lead developer, the intern team completed the React project ahead of schedule.",
    "options": [
      { "key": "A", "text": "guide" },
      { "key": "B", "text": "guided" },
      { "key": "C", "text": "guidance" },
      { "key": "D", "text": "guiding" }
    ],
    "correct_answer": "C",
    "hint": "Mạo từ 'the' và tính từ 'expert' (chuyên nghiệp) đòi hỏi một danh từ theo sau làm tân ngữ cho giới từ 'Under'.",
    "explanation": "Chính xác. Danh từ 'guidance' (sự hướng dẫn) có đuôi '-ance' tạo thành cụm 'Dưới sự hướng dẫn chuyên nghiệp...'.",
    "translation": "Dưới sự hướng dẫn chuyên nghiệp của lập trình viên chính, đội ngũ thực tập sinh đã hoàn thành dự án React trước thời hạn."
  },
  {
    "id": "q_word_form_078",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "If an employee _____ deletes a timesheet on the app, they must immediately contact the IT helpdesk for recovery.",
    "options": [
      { "key": "A", "text": "accidental" },
      { "key": "B", "text": "accident" },
      { "key": "C", "text": "accidentally" },
      { "key": "D", "text": "accidents" }
    ],
    "correct_answer": "C",
    "hint": "Từ cần điền nằm giữa chủ ngữ 'an employee' và động từ 'deletes', đóng vai trò làm trạng từ chỉ cách thức.",
    "explanation": "Chính xác. Trạng từ 'accidentally' (một cách tình cờ/vô ý) bổ nghĩa cho hành động xóa.",
    "translation": "Nếu một nhân viên vô tình xóa bảng chấm công trên ứng dụng, họ phải ngay lập tức liên hệ với bộ phận hỗ trợ CNTT để khôi phục."
  },
  {
    "id": "q_word_form_079",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The React development team came up with an _____ solution to fix the data fetching problem in the HR portal.",
    "options": [
      { "key": "A", "text": "innovate" },
      { "key": "B", "text": "innovator" },
      { "key": "C", "text": "innovative" },
      { "key": "D", "text": "innovatively" }
    ],
    "correct_answer": "C",
    "hint": "Chỗ trống nằm giữa mạo từ 'an' và danh từ 'solution' (giải pháp). Bạn cần một tính từ mang nghĩa 'mang tính đột phá'.",
    "explanation": "Chính xác. Tính từ 'innovative' (sáng tạo/đột phá) có đuôi '-ive' bổ nghĩa cho danh từ 'solution'.",
    "translation": "Nhóm phát triển React đã đưa ra một giải pháp mang tính đột phá để khắc phục sự cố tải dữ liệu trong cổng thông tin nhân sự."
  },
  {
    "id": "q_word_form_080",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "A stable internet connection is a strict _____ for taking the online TOEIC mock test on the PrepMaster platform.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requirement" },
      { "key": "C", "text": "requiring" },
      { "key": "D", "text": "required" }
    ],
    "correct_answer": "B",
    "hint": "Mạo từ 'a' và tính từ 'strict' (nghiêm ngặt) yêu cầu một danh từ theo sau để hoàn thành cụm danh từ.",
    "explanation": "Chính xác. Danh từ 'requirement' (yêu cầu/điều kiện bắt buộc) có đuôi '-ment' kết hợp tạo thành cụm 'một yêu cầu nghiêm ngặt'.",
    "translation": "Một kết nối internet ổn định là một yêu cầu nghiêm ngặt đối với việc làm bài thi thử TOEIC trực tuyến trên nền tảng PrepMaster."
  },
  {
    "id": "q_word_form_081",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The successful _____ of the new interactive video feature caused a massive surge in daily active users on EduKit.",
    "options": [
      { "key": "A", "text": "introduce" },
      { "key": "B", "text": "introductory" },
      { "key": "C", "text": "introduction" },
      { "key": "D", "text": "introduces" }
    ],
    "correct_answer": "C",
    "hint": "Nằm giữa tính từ 'successful' và giới từ 'of', ta bắt buộc phải điền một danh từ làm chủ ngữ.",
    "explanation": "Chính xác. Danh từ 'introduction' (sự ra mắt/giới thiệu) có đuôi '-tion' là đáp án chuẩn xác để hoàn thành cụm danh từ.",
    "translation": "Sự ra mắt thành công của tính năng video tương tác mới đã gây ra một sự gia tăng lớn về số lượng người dùng hoạt động hàng ngày trên EduKit."
  },
  {
    "id": "q_word_form_082",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "To prevent any loss of timesheet records, the mobile app backs up all data _____ to the cloud server.",
    "options": [
      { "key": "A", "text": "automatic" },
      { "key": "B", "text": "automatically" },
      { "key": "C", "text": "automate" },
      { "key": "D", "text": "automation" }
    ],
    "correct_answer": "B",
    "hint": "Đứng ở cuối mệnh đề và bổ nghĩa cho động từ 'backs up' (sao lưu), từ cần điền phải là một trạng từ chỉ cách thức.",
    "explanation": "Chính xác. Trạng từ 'automatically' (một cách tự động) miêu tả cách hệ thống thực hiện việc sao lưu.",
    "translation": "Để ngăn chặn bất kỳ sự mất mát hồ sơ chấm công nào, ứng dụng di động sao lưu tất cả dữ liệu một cách tự động lên máy chủ đám mây."
  },
  {
    "id": "q_word_form_083",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "It is highly _____ for users to read the terms and conditions before purchasing the premium PrepMaster subscription.",
    "options": [
      { "key": "A", "text": "advise" },
      { "key": "B", "text": "adviser" },
      { "key": "C", "text": "advisable" },
      { "key": "D", "text": "advising" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc chủ ngữ giả 'It is + [Trạng từ] + [Tính từ] + for someone to do something'.",
    "explanation": "Chính xác. Tính từ 'advisable' (đáng được khuyên/nên làm) có đuôi '-able' kết hợp với 'highly' tạo thành cụm 'rất nên làm gì đó'.",
    "translation": "Người dùng rất nên đọc các điều khoản và điều kiện trước khi mua gói đăng ký PrepMaster cao cấp."
  },
  {
    "id": "q_word_form_084",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The marketing team aims to _____ the company's brand presence in the corporate gifting sector this year.",
    "options": [
      { "key": "A", "text": "broad" },
      { "key": "B", "text": "broaden" },
      { "key": "C", "text": "broadly" },
      { "key": "D", "text": "breadth" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'aim to do something' (nhắm tới việc làm gì). Sau 'to' cần một động từ nguyên mẫu.",
    "explanation": "Chính xác. Động từ 'broaden' (mở rộng) có hậu tố '-en', được biến đổi từ tính từ 'broad'.",
    "translation": "Nhóm tiếp thị đặt mục tiêu mở rộng sự hiện diện thương hiệu của công ty trong lĩnh vực quà tặng doanh nghiệp trong năm nay."
  },
  {
    "id": "q_word_form_085",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The intern was offered a full-time position as a React Developer due to his exceptional _____ to the project.",
    "options": [
      { "key": "A", "text": "dedicate" },
      { "key": "B", "text": "dedicated" },
      { "key": "C", "text": "dedication" },
      { "key": "D", "text": "dedicating" }
    ],
    "correct_answer": "C",
    "hint": "Tính từ sở hữu 'his' và tính từ 'exceptional' (xuất chúng) yêu cầu một danh từ theo sau.",
    "explanation": "Chính xác. Danh từ 'dedication' (sự cống hiến/tận tâm) đi với giới từ 'to' tạo thành cụm 'sự cống hiến cho dự án'.",
    "translation": "Thực tập sinh đã được đề nghị một vị trí toàn thời gian với tư cách là Lập trình viên React nhờ sự cống hiến xuất sắc của anh ấy cho dự án."
  },
  {
    "id": "q_word_form_086",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "The timekeeping application was _____ updated to resolve the geolocation tracking error.",
    "options": [
      { "key": "A", "text": "recent" },
      { "key": "B", "text": "recently" },
      { "key": "C", "text": "recentness" },
      { "key": "D", "text": "recents" }
    ],
    "correct_answer": "B",
    "hint": "Vị trí nằm giữa trợ động từ to be 'was' và động từ chính 'updated' chỉ có thể dành cho trạng từ.",
    "explanation": "Chính xác. Trạng từ 'recently' (gần đây) bổ nghĩa cho hành động cập nhật.",
    "translation": "Ứng dụng chấm công gần đây đã được cập nhật để giải quyết lỗi theo dõi vị trí địa lý."
  },
  {
    "id": "q_word_form_087",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The CEO delivered a very _____ speech about the future goals of the EduKit learning platform.",
    "options": [
      { "key": "A", "text": "inspire" },
      { "key": "B", "text": "inspiration" },
      { "key": "C", "text": "inspiring" },
      { "key": "D", "text": "inspired" }
    ],
    "correct_answer": "C",
    "hint": "Cần một tính từ đứng trước danh từ 'speech' (bài phát biểu) để miêu tả tính chất của nó.",
    "explanation": "Chính xác. Tính từ đuôi '-ing' 'inspiring' (truyền cảm hứng) được dùng để miêu tả bản chất của bài phát biểu mang lại cảm hứng cho người nghe.",
    "translation": "Giám đốc điều hành đã có một bài phát biểu rất truyền cảm hứng về các mục tiêu trong tương lai của nền tảng học tập EduKit."
  },
  {
    "id": "q_word_form_088",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Easy",
    "question_text": "If you forget your password for the HR portal, please _____ the IT helpdesk immediately.",
    "options": [
      { "key": "A", "text": "notification" },
      { "key": "B", "text": "notifiable" },
      { "key": "C", "text": "notify" },
      { "key": "D", "text": "notifying" }
    ],
    "correct_answer": "C",
    "hint": "Từ 'please' thường đi kèm với một động từ nguyên mẫu để tạo thành câu mệnh lệnh lịch sự.",
    "explanation": "Chính xác. Động từ 'notify' (thông báo) có đuôi '-ify' đóng vai trò là động từ chính của mệnh đề mệnh lệnh.",
    "translation": "Nếu bạn quên mật khẩu cổng thông tin nhân sự, vui lòng thông báo cho bộ phận hỗ trợ CNTT ngay lập tức."
  },
  {
    "id": "q_word_form_089",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Medium",
    "question_text": "The pre-orders provide a strong _____ that the new Happy Box design will be a bestseller this year.",
    "options": [
      { "key": "A", "text": "indicate" },
      { "key": "B", "text": "indicative" },
      { "key": "C", "text": "indicator" },
      { "key": "D", "text": "indication" }
    ],
    "correct_answer": "D",
    "hint": "Mạo từ 'a' và tính từ 'strong' đòi hỏi một danh từ theo sau làm tân ngữ.",
    "explanation": "Chính xác. Danh từ 'indication' (dấu hiệu/sự biểu thị) kết hợp tạo thành cụm 'a strong indication' (một dấu hiệu mạnh mẽ).",
    "translation": "Các đơn đặt hàng trước cung cấp một dấu hiệu mạnh mẽ rằng thiết kế Happy Box mới sẽ là sản phẩm bán chạy nhất trong năm nay."
  },
  {
    "id": "q_word_form_090",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The mobile development team worked _____ for two weeks to launch the timekeeping app on schedule.",
    "options": [
      { "key": "A", "text": "tireless" },
      { "key": "B", "text": "tirelessly" },
      { "key": "C", "text": "tiresome" },
      { "key": "D", "text": "tiredness" }
    ],
    "correct_answer": "B",
    "hint": "Từ cần điền bổ nghĩa cho động từ 'worked', miêu tả cách thức làm việc của nhóm.",
    "explanation": "Chính xác. Trạng từ 'tirelessly' (một cách không mệt mỏi) có đuôi '-ly' bổ nghĩa hoàn hảo cho hành động làm việc.",
    "translation": "Nhóm phát triển thiết bị di động đã làm việc không mệt mỏi trong hai tuần để ra mắt ứng dụng chấm công đúng lịch trình."
  },
  {
    "id": "q_word_form_091",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Hard",
    "question_text": "We are seeking a highly _____ candidate with a strong background in React to join our front-end team.",
    "options": [
      { "key": "A", "text": "qualify" },
      { "key": "B", "text": "qualification" },
      { "key": "C", "text": "qualifying" },
      { "key": "D", "text": "qualified" }
    ],
    "correct_answer": "D",
    "hint": "Đứng trước danh từ 'candidate' (ứng viên) cần một tính từ miêu tả trình độ/năng lực.",
    "explanation": "Chính xác. Tính từ dạng V-ed 'qualified' (đủ tiêu chuẩn/trình độ) đi với 'highly' tạo thành cụm từ tuyển dụng kinh điển 'a highly qualified candidate'.",
    "translation": "Chúng tôi đang tìm kiếm một ứng viên có trình độ cao với nền tảng vững chắc về React để tham gia nhóm front-end của chúng tôi."
  },
  {
    "id": "q_word_form_092",
    "part": 5,
    "grammar_topic": "Word Form (Verb)",
    "difficulty_level": "Medium",
    "question_text": "The updated company policy will _____ all employees to work remotely two days a week.",
    "options": [
      { "key": "A", "text": "permission" },
      { "key": "B", "text": "permissible" },
      { "key": "C", "text": "permit" },
      { "key": "D", "text": "permitting" }
    ],
    "correct_answer": "C",
    "hint": "Sau trợ động từ 'will', ta luôn cần một động từ nguyên mẫu không 'to'.",
    "explanation": "Chính xác. Động từ 'permit' (cho phép) có cấu trúc 'permit someone to do something'.",
    "translation": "Chính sách cập nhật của công ty sẽ cho phép tất cả nhân viên làm việc từ xa hai ngày một tuần."
  },
  {
    "id": "q_word_form_093",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "The _____ of the React application depends largely on writing clean and well-structured code.",
    "options": [
      { "key": "A", "text": "stable" },
      { "key": "B", "text": "stably" },
      { "key": "C", "text": "stabilize" },
      { "key": "D", "text": "stability" }
    ],
    "correct_answer": "D",
    "hint": "Mạo từ 'The' và giới từ 'of' là dấu hiệu rõ ràng nhất yêu cầu một danh từ điền vào chỗ trống.",
    "explanation": "Chính xác. Danh từ 'stability' (sự ổn định) với hậu tố '-ity' đóng vai trò là chủ ngữ chính.",
    "translation": "Sự ổn định của ứng dụng React phụ thuộc phần lớn vào việc viết mã nguồn sạch và có cấu trúc tốt."
  },
  {
    "id": "q_word_form_094",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Easy",
    "question_text": "Users can _____ track their TOEIC and JLPT study progress using the dashboard on the PrepMaster app.",
    "options": [
      { "key": "A", "text": "easy" },
      { "key": "B", "text": "easily" },
      { "key": "C", "text": "easiness" },
      { "key": "D", "text": "easier" }
    ],
    "correct_answer": "B",
    "hint": "Từ cần điền nằm giữa động từ khuyết thiếu 'can' và động từ chính 'track', dùng để chỉ cách thức của hành động.",
    "explanation": "Chính xác. Trạng từ 'easily' (một cách dễ dàng) bổ nghĩa cho động từ 'track'.",
    "translation": "Người dùng có thể dễ dàng theo dõi tiến độ học TOEIC và JLPT của mình bằng cách sử dụng bảng điều khiển trên ứng dụng PrepMaster."
  },
  {
    "id": "q_word_form_095",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "The packaging for the corporate Happy Box gifts must be both durable and visually _____.",
    "options": [
      { "key": "A", "text": "attract" },
      { "key": "B", "text": "attraction" },
      { "key": "C", "text": "attractive" },
      { "key": "D", "text": "attractively" }
    ],
    "correct_answer": "C",
    "hint": "Liên từ 'and' nối hai từ cùng loại. Từ 'durable' là tính từ, do đó từ còn thiếu cũng phải là tính từ (bổ nghĩa cho The packaging).",
    "explanation": "Chính xác. Tính từ 'attractive' (thu hút/hấp dẫn) với đuôi '-ive' đứng sau trạng từ 'visually' (về mặt thị giác).",
    "translation": "Bao bì cho các món quà doanh nghiệp Happy Box phải vừa bền vừa hấp dẫn về mặt thị giác."
  },
  {
    "id": "q_word_form_096",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Hard",
    "question_text": "The TikTok creator's immense _____ to producing educational videos every day has finally paid off.",
    "options": [
      { "key": "A", "text": "commit" },
      { "key": "B", "text": "committed" },
      { "key": "C", "text": "commitment" },
      { "key": "D", "text": "committing" }
    ],
    "correct_answer": "C",
    "hint": "Sở hữu cách ('s) và tính từ 'immense' (to lớn) yêu cầu một danh từ theo sau làm chủ ngữ chính của câu.",
    "explanation": "Chính xác. Danh từ 'commitment' (sự cam kết/sự tận tâm) có hậu tố '-ment' là lựa chọn đúng. Cấu trúc: commitment to doing something.",
    "translation": "Sự tận tâm to lớn của nhà sáng tạo TikTok đối với việc sản xuất video giáo dục mỗi ngày cuối cùng đã được đền đáp."
  },
  {
    "id": "q_word_form_097",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Medium",
    "question_text": "The data migration from the old server to the new HR database was completed _____ without any corrupted files.",
    "options": [
      { "key": "A", "text": "success" },
      { "key": "B", "text": "successful" },
      { "key": "C", "text": "successfully" },
      { "key": "D", "text": "succeed" }
    ],
    "correct_answer": "C",
    "hint": "Đứng sau cụm động từ bị động 'was completed' (được hoàn thành) cần một trạng từ chỉ cách thức.",
    "explanation": "Chính xác. Trạng từ 'successfully' (một cách thành công) bổ nghĩa cho động từ hoàn thành.",
    "translation": "Việc di chuyển dữ liệu từ máy chủ cũ sang cơ sở dữ liệu nhân sự mới đã được hoàn thành thành công mà không có bất kỳ tệp nào bị hỏng."
  },
  {
    "id": "q_word_form_098",
    "part": 5,
    "grammar_topic": "Word Form (Adjective)",
    "difficulty_level": "Medium",
    "question_text": "Offering a highly _____ working environment is crucial for retaining top tech talent in mobile development.",
    "options": [
      { "key": "A", "text": "support" },
      { "key": "B", "text": "supporter" },
      { "key": "C", "text": "supportive" },
      { "key": "D", "text": "supportively" }
    ],
    "correct_answer": "C",
    "hint": "Giữa trạng từ chỉ mức độ 'highly' và cụm danh từ 'working environment' cần một tính từ.",
    "explanation": "Chính xác. Tính từ 'supportive' (mang tính hỗ trợ/khuyến khích) có đuôi '-ive' miêu tả tính chất của môi trường làm việc.",
    "translation": "Cung cấp một môi trường làm việc mang tính hỗ trợ cao là điều rất quan trọng để giữ chân các nhân tài công nghệ hàng đầu trong lĩnh vực phát triển thiết bị di động."
  },
  {
    "id": "q_word_form_099",
    "part": 5,
    "grammar_topic": "Word Form (Noun)",
    "difficulty_level": "Easy",
    "question_text": "We need your physical _____ on this confidentiality agreement before you can access the company's source code.",
    "options": [
      { "key": "A", "text": "sign" },
      { "key": "B", "text": "signature" },
      { "key": "C", "text": "signatory" },
      { "key": "D", "text": "signing" }
    ],
    "correct_answer": "B",
    "hint": "Tính từ sở hữu 'your' và tính từ 'physical' (vật lý) yêu cầu một danh từ làm tân ngữ cho động từ 'need'.",
    "explanation": "Chính xác. Danh từ 'signature' (chữ ký) kết hợp với 'physical' mang nghĩa là chữ ký tay (chữ ký sống) trên văn bản.",
    "translation": "Chúng tôi cần chữ ký tay của bạn trên thỏa thuận bảo mật này trước khi bạn có thể truy cập mã nguồn của công ty."
  },
  {
    "id": "q_word_form_100",
    "part": 5,
    "grammar_topic": "Word Form (Adverb)",
    "difficulty_level": "Hard",
    "question_text": "The reporting feature on the new timekeeping application is _____ more accurate than the old manual system.",
    "options": [
      { "key": "A", "text": "considerable" },
      { "key": "B", "text": "consideration" },
      { "key": "C", "text": "considerably" },
      { "key": "D", "text": "consider" }
    ],
    "correct_answer": "C",
    "hint": "Trước cấu trúc so sánh hơn 'more accurate' (chính xác hơn), ta cần một trạng từ chỉ mức độ để nhấn mạnh (mang nghĩa: hơn ĐÁNG KỂ).",
    "explanation": "Chính xác. Trạng từ 'considerably' (một cách đáng kể) thường đứng trước cấu trúc so sánh hơn để nhấn mạnh sự chênh lệch lớn.",
    "translation": "Tính năng báo cáo trên ứng dụng chấm công mới chính xác hơn đáng kể so với hệ thống thủ công cũ."
  }
];

export const PARTS_OF_SPEECH = {
  easy: PARTS_OF_SPEECH_EASY,
  medium: [],
  hard: []
};

export const TENSES_EASY = [
  {
    "id": "q_tense_conjugation_001",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Medium",
    "question_text": "Since Ms. Jenkins joined the marketing department, overall sales for the region _____ by nearly 15 percent.",
    "options": [
      { "key": "A", "text": "increase" },
      { "key": "B", "text": "increased" },
      { "key": "C", "text": "have increased" },
      { "key": "D", "text": "are increasing" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc kinh điển của TOEIC: Since + Mệnh đề Quá khứ đơn, Mệnh đề chính chia ở Hiện tại hoàn thành.",
    "explanation": "Chính xác. Mệnh đề đi với 'Since' (joined) dùng thì Quá khứ đơn, do đó mệnh đề chính phải dùng thì Hiện tại hoàn thành (have increased) để diễn tả kết quả kéo dài đến hiện tại.",
    "translation": "Kể từ khi cô Jenkins gia nhập bộ phận tiếp thị, tổng doanh số bán hàng của khu vực này đã tăng gần 15%."
  },
  {
    "id": "q_tense_conjugation_002",
    "part": 5,
    "grammar_topic": "Future Simple",
    "difficulty_level": "Easy",
    "question_text": "The board of directors _____ the new company policies regarding remote work next quarter.",
    "options": [
      { "key": "A", "text": "announces" },
      { "key": "B", "text": "will announce" },
      { "key": "C", "text": "announced" },
      { "key": "D", "text": "has announced" }
    ],
    "correct_answer": "B",
    "hint": "Cụm thời gian 'next quarter' (quý tới) báo hiệu một hành động sẽ xảy ra trong tương lai.",
    "explanation": "Chính xác. Thì Tương lai đơn 'will announce' phù hợp với dấu hiệu thời gian ở tương lai.",
    "translation": "Hội đồng quản trị sẽ công bố các chính sách mới của công ty liên quan đến làm việc từ xa vào quý tới."
  },
  {
    "id": "q_tense_conjugation_003",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The complimentary shuttle bus to the airport _____ every hour from the main entrance of the hotel.",
    "options": [
      { "key": "A", "text": "depart" },
      { "key": "B", "text": "departed" },
      { "key": "C", "text": "departs" },
      { "key": "D", "text": "is departing" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'every hour' (mỗi giờ) chỉ một lịch trình cố định hoặc thói quen, yêu cầu thì Hiện tại đơn.",
    "explanation": "Chính xác. Chủ ngữ 'The complimentary shuttle bus' là số ít, do đó động từ Hiện tại đơn cần thêm 's' thành 'departs'.",
    "translation": "Xe buýt đưa đón miễn phí đến sân bay khởi hành mỗi giờ từ lối vào chính của khách sạn."
  },
  {
    "id": "q_tense_conjugation_004",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "Mr. Lee _____ the finalized budget proposal to the accounting department yesterday afternoon.",
    "options": [
      { "key": "A", "text": "submits" },
      { "key": "B", "text": "submitted" },
      { "key": "C", "text": "has submitted" },
      { "key": "D", "text": "will submit" }
    ],
    "correct_answer": "B",
    "hint": "Từ 'yesterday afternoon' là dấu hiệu rõ ràng của một hành động đã hoàn tất trong quá khứ.",
    "explanation": "Chính xác. Thì Quá khứ đơn 'submitted' được dùng để diễn đạt một sự việc đã xảy ra và kết thúc trong quá khứ.",
    "translation": "Ông Lee đã nộp bản đề xuất ngân sách cuối cùng cho bộ phận kế toán vào chiều hôm qua."
  },
  {
    "id": "q_tense_conjugation_005",
    "part": 5,
    "grammar_topic": "Past Continuous",
    "difficulty_level": "Medium",
    "question_text": "While the technician _____ the copy machine, the office staff had to use the one on the second floor.",
    "options": [
      { "key": "A", "text": "repairs" },
      { "key": "B", "text": "repaired" },
      { "key": "C", "text": "is repairing" },
      { "key": "D", "text": "was repairing" }
    ],
    "correct_answer": "D",
    "hint": "Liên từ 'While' diễn tả một hành động đang diễn ra kéo dài trong quá khứ, đi kèm với một hành động khác ở Quá khứ đơn (had to use).",
    "explanation": "Chính xác. Thì Quá khứ tiếp diễn 'was repairing' mô tả hành động đang dang dở trong một khoảng thời gian ở quá khứ.",
    "translation": "Trong khi kỹ thuật viên đang sửa máy photocopy, nhân viên văn phòng phải sử dụng chiếc máy ở tầng hai."
  },
  {
    "id": "q_tense_conjugation_006",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Hard",
    "question_text": "By the time the regional manager arrives at the branch, the audit team _____ all the financial records.",
    "options": [
      { "key": "A", "text": "review" },
      { "key": "B", "text": "will review" },
      { "key": "C", "text": "will have reviewed" },
      { "key": "D", "text": "have reviewed" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc TOEIC rất hay gặp: 'By the time + Hiện tại đơn (arrives)', mệnh đề chính phải chia ở thì Tương lai hoàn thành.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have reviewed' diễn tả một hành động sẽ hoàn tất TRƯỚC một thời điểm hoặc hành động khác trong tương lai.",
    "translation": "Tính đến lúc giám đốc khu vực đến chi nhánh, nhóm kiểm toán sẽ đã xem xét xong tất cả các hồ sơ tài chính."
  },
  {
    "id": "q_tense_conjugation_007",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Simple)",
    "difficulty_level": "Medium",
    "question_text": "All employee expense reports _____ carefully by the finance department before any reimbursements are issued.",
    "options": [
      { "key": "A", "text": "review" },
      { "key": "B", "text": "reviews" },
      { "key": "C", "text": "are reviewing" },
      { "key": "D", "text": "are reviewed" }
    ],
    "correct_answer": "D",
    "hint": "Chủ ngữ là 'All employee expense reports' (Bản báo cáo - vật), không thể tự thực hiện hành động 'review'. Hành động này là quy trình cố định.",
    "explanation": "Chính xác. Câu cần chia ở thể bị động của Hiện tại đơn 'are reviewed' để chỉ một quy trình thường xuyên trong công ty.",
    "translation": "Tất cả các báo cáo chi phí của nhân viên đều được bộ phận tài chính xem xét cẩn thận trước khi bất kỳ khoản hoàn trả nào được xuất ra."
  },
  {
    "id": "q_tense_conjugation_008",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "The training seminar _____ already _____ before we managed to find a parking spot.",
    "options": [
      { "key": "A", "text": "has / begun" },
      { "key": "B", "text": "had / begun" },
      { "key": "C", "text": "is / beginning" },
      { "key": "D", "text": "will / begin" }
    ],
    "correct_answer": "B",
    "hint": "Hành động bắt đầu (begin) xảy ra TRƯỚC một hành động khác trong quá khứ 'managed to find' (đã tìm được).",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had begun' được dùng để diễn tả sự việc đã hoàn tất trước một sự kiện khác trong quá khứ.",
    "translation": "Buổi hội thảo đào tạo đã bắt đầu trước khi chúng tôi xoay sở tìm được chỗ đỗ xe."
  },
  {
    "id": "q_tense_conjugation_009",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Easy",
    "question_text": "The electronics manufacturer is _____ developing a new line of smart home appliances to meet consumer demand.",
    "options": [
      { "key": "A", "text": "current" },
      { "key": "B", "text": "currently" },
      { "key": "C", "text": "recent" },
      { "key": "D", "text": "recently" }
    ],
    "correct_answer": "B",
    "hint": "Dấu hiệu của thì Hiện tại tiếp diễn (is developing) thường đi kèm với trạng từ chỉ thời gian 'hiện tại'.",
    "explanation": "Chính xác. Trạng từ 'currently' (hiện tại/ngay lúc này) chen giữa to be và V-ing bổ nghĩa cho thì Hiện tại tiếp diễn.",
    "translation": "Nhà sản xuất đồ điện tử hiện đang phát triển một dòng thiết bị nhà thông minh mới để đáp ứng nhu cầu của người tiêu dùng."
  },
  {
    "id": "q_tense_conjugation_010",
    "part": 5,
    "grammar_topic": "Passive Voice (Future Simple)",
    "difficulty_level": "Medium",
    "question_text": "The annual corporate banquet _____ at the Grand Plaza Hotel on the 15th of December.",
    "options": [
      { "key": "A", "text": "holds" },
      { "key": "B", "text": "will hold" },
      { "key": "C", "text": "held" },
      { "key": "D", "text": "will be held" }
    ],
    "correct_answer": "D",
    "hint": "Chủ ngữ 'The annual corporate banquet' (Bữa tiệc - sự kiện) phải 'được tổ chức'. Thời gian trong tương lai (15th of December).",
    "explanation": "Chính xác. Thể bị động của Tương lai đơn 'will be held' là phù hợp nhất để nói về sự kiện được lên lịch trong tương lai.",
    "translation": "Bữa tiệc thường niên của công ty sẽ được tổ chức tại Khách sạn Grand Plaza vào ngày 15 tháng 12."
  },
  {
    "id": "q_tense_conjugation_011",
    "part": 5,
    "grammar_topic": "Present Perfect Continuous",
    "difficulty_level": "Hard",
    "question_text": "The negotiation team _____ the terms of the new contract for the last three hours without reaching an agreement.",
    "options": [
      { "key": "A", "text": "discusses" },
      { "key": "B", "text": "discussed" },
      { "key": "C", "text": "has been discussing" },
      { "key": "D", "text": "is discussing" }
    ],
    "correct_answer": "C",
    "hint": "Cụm 'for the last three hours' nhấn mạnh một quá trình diễn ra liên tục từ quá khứ và vẫn chưa kết thúc ở hiện tại.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành tiếp diễn 'has been discussing' nhấn mạnh tính liên tục của hành động.",
    "translation": "Đội đàm phán đã và đang thảo luận về các điều khoản của hợp đồng mới trong suốt ba giờ qua mà chưa đạt được thỏa thuận."
  },
  {
    "id": "q_tense_conjugation_012",
    "part": 5,
    "grammar_topic": "Future Simple (Conditionals)",
    "difficulty_level": "Medium",
    "question_text": "If the weather _____ significantly by tomorrow morning, the outdoor team-building event will proceed as planned.",
    "options": [
      { "key": "A", "text": "improve" },
      { "key": "B", "text": "improves" },
      { "key": "C", "text": "will improve" },
      { "key": "D", "text": "improved" }
    ],
    "correct_answer": "B",
    "hint": "Câu điều kiện loại 1 (sự việc có thể xảy ra ở tương lai): If + Hiện tại đơn, Tương lai đơn.",
    "explanation": "Chính xác. Trong mệnh đề If của câu điều kiện loại 1, động từ chia ở Hiện tại đơn. 'the weather' là số ít nên chọn 'improves'.",
    "translation": "Nếu thời tiết cải thiện đáng kể vào sáng mai, sự kiện xây dựng đội nhóm ngoài trời sẽ tiến hành như dự kiến."
  },
  {
    "id": "q_tense_conjugation_013",
    "part": 5,
    "grammar_topic": "Passive Voice (Past Simple)",
    "difficulty_level": "Medium",
    "question_text": "The revised conference schedule _____ to all registered attendees via email late last night.",
    "options": [
      { "key": "A", "text": "distributes" },
      { "key": "B", "text": "distributed" },
      { "key": "C", "text": "is distributed" },
      { "key": "D", "text": "was distributed" }
    ],
    "correct_answer": "D",
    "hint": "Dấu hiệu 'late last night' yêu cầu thì Quá khứ. Lịch trình (schedule) phải 'được phân phát' (bị động).",
    "explanation": "Chính xác. Thể bị động của thì Quá khứ đơn 'was distributed' đáp ứng đúng ngữ pháp và ngữ nghĩa của câu.",
    "translation": "Lịch trình hội nghị đã được chỉnh sửa đã được phân phát cho tất cả những người tham dự đã đăng ký qua email vào đêm muộn hôm qua."
  },
  {
    "id": "q_tense_conjugation_014",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "Please do not call Mr. Tanaka at 10 AM tomorrow; he _____ a presentation to the overseas clients at that time.",
    "options": [
      { "key": "A", "text": "gives" },
      { "key": "B", "text": "will give" },
      { "key": "C", "text": "has given" },
      { "key": "D", "text": "will be giving" }
    ],
    "correct_answer": "D",
    "hint": "Sự việc sẽ đang diễn ra tại một THỜI ĐIỂM CHÍNH XÁC trong tương lai (10 AM tomorrow).",
    "explanation": "Chính xác. Thì Tương lai tiếp diễn 'will be giving' dùng để mô tả một hành động sẽ đang dở dang tại một thời điểm xác định ở tương lai.",
    "translation": "Vui lòng không gọi cho ông Tanaka vào lúc 10 giờ sáng mai; ông ấy sẽ đang thuyết trình cho các khách hàng nước ngoài vào thời điểm đó."
  },
  {
    "id": "q_tense_conjugation_015",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The instruction manual clearly _____ that users should update their passwords every three months for security reasons.",
    "options": [
      { "key": "A", "text": "state" },
      { "key": "B", "text": "states" },
      { "key": "C", "text": "stating" },
      { "key": "D", "text": "is stated" }
    ],
    "correct_answer": "B",
    "hint": "Khi nói về nội dung của một tài liệu, sách, báo hoặc bảng hướng dẫn, ta luôn sử dụng thì Hiện tại đơn.",
    "explanation": "Chính xác. Chủ ngữ 'The instruction manual' là số ít nên động từ thêm 's' thành 'states'.",
    "translation": "Sổ tay hướng dẫn nêu rõ rằng người dùng nên cập nhật mật khẩu của họ ba tháng một lần vì lý do bảo mật."
  },
  {
    "id": "q_tense_conjugation_016",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "The logistics company _____ its first international branch in Tokyo exactly five years ago.",
    "options": [
      { "key": "A", "text": "establishes" },
      { "key": "B", "text": "has established" },
      { "key": "C", "text": "established" },
      { "key": "D", "text": "establishing" }
    ],
    "correct_answer": "C",
    "hint": "Trạng từ 'ago' (cách đây) là từ khóa báo hiệu thì Quá khứ đơn.",
    "explanation": "Chính xác. Thì Quá khứ đơn 'established' diễn tả hành động đã kết thúc trong quá khứ.",
    "translation": "Công ty hậu cần đã thành lập chi nhánh quốc tế đầu tiên tại Tokyo cách đây chính xác 5 năm."
  },
  {
    "id": "q_tense_conjugation_017",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Perfect)",
    "difficulty_level": "Hard",
    "question_text": "The main lobby of the corporate headquarters _____ to feature a more modern and welcoming design.",
    "options": [
      { "key": "A", "text": "has renovated" },
      { "key": "B", "text": "has been renovated" },
      { "key": "C", "text": "is renovating" },
      { "key": "D", "text": "was renovating" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ là 'The main lobby' (Sảnh chính) phải chịu tác động của hành động cải tạo. Việc cải tạo vừa hoàn tất và có kết quả ở hiện tại.",
    "explanation": "Chính xác. Cấu trúc bị động của Hiện tại hoàn thành 'has been renovated' (đã được cải tạo) là phù hợp nhất về mặt logic và ngữ pháp.",
    "translation": "Sảnh chính của trụ sở công ty đã được cải tạo để mang thiết kế hiện đại và chào đón hơn."
  },
  {
    "id": "q_tense_conjugation_018",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Medium",
    "question_text": "Over the past year, customer demand for eco-friendly packaging materials _____ substantially.",
    "options": [
      { "key": "A", "text": "rises" },
      { "key": "B", "text": "rose" },
      { "key": "C", "text": "has risen" },
      { "key": "D", "text": "will rise" }
    ],
    "correct_answer": "C",
    "hint": "Cụm 'Over the past/last + thời gian' (Trong suốt... qua) luôn đi kèm với thì Hiện tại hoàn thành trong đề thi TOEIC.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has risen' diễn tả sự việc bắt đầu từ quá khứ (cách đây 1 năm) kéo dài và đạt kết quả ở hiện tại.",
    "translation": "Trong năm qua, nhu cầu của khách hàng đối với vật liệu đóng gói thân thiện với môi trường đã tăng lên đáng kể."
  },
  {
    "id": "q_tense_conjugation_019",
    "part": 5,
    "grammar_topic": "Time Clauses (Present Simple)",
    "difficulty_level": "Medium",
    "question_text": "As soon as the CEO _____ the final contract, the legal team will send a copy to our business partners.",
    "options": [
      { "key": "A", "text": "signs" },
      { "key": "B", "text": "signed" },
      { "key": "C", "text": "will sign" },
      { "key": "D", "text": "has signed" }
    ],
    "correct_answer": "A",
    "hint": "Trong mệnh đề thời gian bắt đầu bằng As soon as/When/Before/After chỉ tương lai, ta KHÔNG DÙNG thì Tương lai mà dùng Hiện tại đơn.",
    "explanation": "Chính xác. Mệnh đề phụ dùng Hiện tại đơn 'signs' mang ý nghĩa Tương lai kết hợp với mệnh đề chính Tương lai đơn (will send). (Có thể dùng HTHT 'has signed' nhưng 'signs' phổ biến hơn).",
    "translation": "Ngay khi Giám đốc điều hành ký hợp đồng cuối cùng, nhóm pháp lý sẽ gửi một bản sao cho các đối tác kinh doanh của chúng ta."
  },
  {
    "id": "q_tense_conjugation_020",
    "part": 5,
    "grammar_topic": "Passive Voice (Past Perfect)",
    "difficulty_level": "Hard",
    "question_text": "The architect discovered that his initial blueprints _____ by the city council before he could even revise them.",
    "options": [
      { "key": "A", "text": "rejected" },
      { "key": "B", "text": "were rejecting" },
      { "key": "C", "text": "have been rejected" },
      { "key": "D", "text": "had been rejected" }
    ],
    "correct_answer": "D",
    "hint": "Hành động từ chối xảy ra TRƯỚC một hành động khác trong quá khứ (could revise). Bản thiết kế (blueprints) phải mang nghĩa bị động.",
    "explanation": "Chính xác. Thể bị động của thì Quá khứ hoàn thành 'had been rejected' chỉ sự việc bị từ chối hoàn tất trước một thời điểm quá khứ.",
    "translation": "Kiến trúc sư phát hiện ra rằng các bản thiết kế ban đầu của ông đã bị hội đồng thành phố từ chối trước khi ông kịp chỉnh sửa chúng."
  },
  {
    "id": "q_tense_conjugation_021",
    "part": 5,
    "grammar_topic": "Past Continuous",
    "difficulty_level": "Medium",
    "question_text": "While the IT technician _____ the timekeeping software, the main server unexpectedly crashed.",
    "options": [
      { "key": "A", "text": "updates" },
      { "key": "B", "text": "was updating" },
      { "key": "C", "text": "has updated" },
      { "key": "D", "text": "will update" }
    ],
    "correct_answer": "B",
    "hint": "Liên từ 'While' diễn tả một hành động đang kéo dài trong quá khứ thì một hành động khác (crashed) xen vào.",
    "explanation": "Chính xác. Thì quá khứ tiếp diễn 'was updating' miêu tả hành động đang diễn ra trong một khoảng thời gian ở quá khứ thì bị gián đoạn.",
    "translation": "Trong khi kỹ thuật viên CNTT đang cập nhật phần mềm chấm công, máy chủ chính bất ngờ bị sập."
  },
  {
    "id": "q_tense_conjugation_022",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Easy",
    "question_text": "Over the past five years, the PrepMaster app _____ into one of the leading language learning platforms in the country.",
    "options": [
      { "key": "A", "text": "grows" },
      { "key": "B", "text": "grew" },
      { "key": "C", "text": "has grown" },
      { "key": "D", "text": "is growing" }
    ],
    "correct_answer": "C",
    "hint": "Cụm 'Over the past + khoảng thời gian' (Trong suốt... qua) là dấu hiệu kinh điển của thì Hiện tại hoàn thành trong bài thi TOEIC.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has grown' diễn tả sự phát triển bắt đầu từ 5 năm trước và kéo dài đến hiện tại.",
    "translation": "Trong năm năm qua, ứng dụng PrepMaster đã phát triển thành một trong những nền tảng học ngôn ngữ hàng đầu trong nước."
  },
  {
    "id": "q_tense_conjugation_023",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Hard",
    "question_text": "By next December, the Happy Box company _____ over 100,000 corporate gifts to international clients.",
    "options": [
      { "key": "A", "text": "shipped" },
      { "key": "B", "text": "ships" },
      { "key": "C", "text": "will have shipped" },
      { "key": "D", "text": "has shipped" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'By + mốc thời gian trong tương lai' (By next December) yêu cầu mệnh đề chính chia ở thì Tương lai hoàn thành.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have shipped' chỉ một hành động sẽ hoàn tất tính đến một thời điểm xác định trong tương lai.",
    "translation": "Tính đến tháng 12 tới, công ty Happy Box sẽ vận chuyển được hơn 100.000 món quà doanh nghiệp cho các khách hàng quốc tế."
  },
  {
    "id": "q_tense_conjugation_024",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The mobile timekeeping application automatically _____ employee attendance data to the cloud every night at 11 PM.",
    "options": [
      { "key": "A", "text": "syncs" },
      { "key": "B", "text": "synced" },
      { "key": "C", "text": "is syncing" },
      { "key": "D", "text": "will sync" }
    ],
    "correct_answer": "A",
    "hint": "Cụm 'every night at 11 PM' (mỗi tối lúc 11 giờ) và trạng từ 'automatically' chỉ một lịch trình lặp đi lặp lại cố định.",
    "explanation": "Chính xác. Thì Hiện tại đơn được sử dụng cho các hành động lặp lại theo thói quen hoặc lịch trình. Chủ ngữ số ít nên dùng 'syncs'.",
    "translation": "Ứng dụng chấm công trên thiết bị di động tự động đồng bộ hóa dữ liệu điểm danh của nhân viên lên đám mây vào mỗi tối lúc 11 giờ."
  },
  {
    "id": "q_tense_conjugation_025",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "By the time the marketing director arrived at the meeting, the creative team _____ the presentation.",
    "options": [
      { "key": "A", "text": "finishes" },
      { "key": "B", "text": "finished" },
      { "key": "C", "text": "had finished" },
      { "key": "D", "text": "has finished" }
    ],
    "correct_answer": "C",
    "hint": "Mệnh đề 'By the time + Quá khứ đơn (arrived)' chỉ một thời điểm trong quá khứ. Hành động xảy ra trước thời điểm đó phải dùng Quá khứ hoàn thành.",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had finished' miêu tả hành động hoàn thành bài thuyết trình đã xong trước khi giám đốc đến.",
    "translation": "Vào lúc giám đốc tiếp thị đến cuộc họp, nhóm sáng tạo đã hoàn thành xong bài thuyết trình."
  },
  {
    "id": "q_tense_conjugation_026",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Medium",
    "question_text": "The software engineers are _____ a new feature that will allow users to study offline on the EduKit platform.",
    "options": [
      { "key": "A", "text": "develop" },
      { "key": "B", "text": "developed" },
      { "key": "C", "text": "developing" },
      { "key": "D", "text": "develops" }
    ],
    "correct_answer": "C",
    "hint": "Sau động từ to be 'are', nếu muốn diễn tả một hành động đang chủ động diễn ra, ta dùng V-ing để tạo thành thì Hiện tại tiếp diễn.",
    "explanation": "Chính xác. 'Are developing' (đang phát triển) miêu tả một dự án đang được tiến hành ở thời điểm hiện tại.",
    "translation": "Các kỹ sư phần mềm đang phát triển một tính năng mới cho phép người dùng học ngoại tuyến trên nền tảng EduKit."
  },
  {
    "id": "q_tense_conjugation_027",
    "part": 5,
    "grammar_topic": "Passive Voice (Past Simple)",
    "difficulty_level": "Medium",
    "question_text": "The custom corporate gift boxes _____ to the client's headquarters in Tokyo two days ago.",
    "options": [
      { "key": "A", "text": "delivered" },
      { "key": "B", "text": "were delivered" },
      { "key": "C", "text": "deliver" },
      { "key": "D", "text": "are delivering" }
    ],
    "correct_answer": "B",
    "hint": "Thời gian 'two days ago' yêu cầu thì Quá khứ đơn. Chủ ngữ 'gift boxes' là vật, không thể tự giao hàng nên phải dùng thể bị động.",
    "explanation": "Chính xác. Thể bị động của thì quá khứ đơn 'were delivered' (đã được giao) là đáp án đúng ngữ pháp và ngữ nghĩa.",
    "translation": "Các hộp quà tặng doanh nghiệp tùy chỉnh đã được giao đến trụ sở của khách hàng tại Tokyo hai ngày trước."
  },
  {
    "id": "q_tense_conjugation_028",
    "part": 5,
    "grammar_topic": "Future Simple (Time Clause)",
    "difficulty_level": "Hard",
    "question_text": "As soon as the new update _____ available, all users will receive a notification to download it.",
    "options": [
      { "key": "A", "text": "will become" },
      { "key": "B", "text": "becomes" },
      { "key": "C", "text": "became" },
      { "key": "D", "text": "is becoming" }
    ],
    "correct_answer": "B",
    "hint": "Trong mệnh đề thời gian bắt đầu bằng 'As soon as', 'When', 'Before' chỉ sự việc tương lai, ta không dùng 'will' mà phải dùng thì Hiện tại đơn.",
    "explanation": "Chính xác. Động từ chia ở hiện tại đơn 'becomes' đi với chủ ngữ số ít 'update' mang ý nghĩa tương lai trong mệnh đề trạng ngữ chỉ thời gian.",
    "translation": "Ngay khi bản cập nhật mới có sẵn, tất cả người dùng sẽ nhận được thông báo để tải xuống."
  },
  {
    "id": "q_tense_conjugation_029",
    "part": 5,
    "grammar_topic": "Present Perfect Continuous",
    "difficulty_level": "Hard",
    "question_text": "Ms. Lin _____ educational TikTok videos on daily English conversation since early 2024.",
    "options": [
      { "key": "A", "text": "is producing" },
      { "key": "B", "text": "produces" },
      { "key": "C", "text": "has been producing" },
      { "key": "D", "text": "produced" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'since early 2024' chỉ một hành động bắt đầu trong quá khứ. Cấu trúc Hoàn thành tiếp diễn được ưu tiên để nhấn mạnh tính liên tục của hành động.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành tiếp diễn 'has been producing' nhấn mạnh việc cô Lin đã và đang liên tục sản xuất video.",
    "translation": "Cô Lin đã và đang sản xuất các video TikTok giáo dục về hội thoại tiếng Anh hàng ngày kể từ đầu năm 2024."
  },
  {
    "id": "q_tense_conjugation_030",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Continuous)",
    "difficulty_level": "Medium",
    "question_text": "The entire network infrastructure of the office _____ right now to accommodate the new HR software.",
    "options": [
      { "key": "A", "text": "upgrades" },
      { "key": "B", "text": "is upgrading" },
      { "key": "C", "text": "is being upgraded" },
      { "key": "D", "text": "has upgraded" }
    ],
    "correct_answer": "C",
    "hint": "Trạng từ 'right now' (ngay lúc này) báo hiệu thì Hiện tại tiếp diễn. 'Network infrastructure' (hạ tầng mạng) phải chịu tác động (bị động).",
    "explanation": "Chính xác. Thể bị động của Hiện tại tiếp diễn 'is being upgraded' mang nghĩa là 'đang được nâng cấp'.",
    "translation": "Toàn bộ cơ sở hạ tầng mạng của văn phòng đang được nâng cấp ngay lúc này để đáp ứng phần mềm nhân sự mới."
  },
  {
    "id": "q_tense_conjugation_031",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "At this time tomorrow, the executive team _____ the quarterly financial reports in the main boardroom.",
    "options": [
      { "key": "A", "text": "discusses" },
      { "key": "B", "text": "will discuss" },
      { "key": "C", "text": "will be discussing" },
      { "key": "D", "text": "discussed" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'At this time tomorrow' khoanh vùng một thời điểm vô cùng chính xác trong tương lai, yêu cầu thì Tương lai tiếp diễn.",
    "explanation": "Chính xác. Thì Tương lai tiếp diễn 'will be discussing' mô tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
    "translation": "Vào giờ này ngày mai, đội ngũ điều hành sẽ đang thảo luận về các báo cáo tài chính hàng quý trong phòng họp chính."
  },
  {
    "id": "q_tense_conjugation_032",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "The company _____ three new senior developers last month to speed up the launch of the PrepMaster app.",
    "options": [
      { "key": "A", "text": "hires" },
      { "key": "B", "text": "hired" },
      { "key": "C", "text": "has hired" },
      { "key": "D", "text": "is hiring" }
    ],
    "correct_answer": "B",
    "hint": "Trạng từ thời gian 'last month' (tháng trước) chốt mốc thời gian hoàn toàn thuộc về Quá khứ đơn.",
    "explanation": "Chính xác. Động từ 'hired' (đã thuê) được chia ở quá khứ đơn, phù hợp với sự việc đã kết thúc trong quá khứ.",
    "translation": "Công ty đã thuê ba lập trình viên cấp cao mới vào tháng trước để đẩy nhanh việc ra mắt ứng dụng PrepMaster."
  },
  {
    "id": "q_tense_conjugation_033",
    "part": 5,
    "grammar_topic": "Passive Voice (Future Simple)",
    "difficulty_level": "Easy",
    "question_text": "All orders placed before 3 PM _____ the same business day using express shipping.",
    "options": [
      { "key": "A", "text": "will process" },
      { "key": "B", "text": "process" },
      { "key": "C", "text": "will be processed" },
      { "key": "D", "text": "processed" }
    ],
    "correct_answer": "C",
    "hint": "Chủ ngữ là 'All orders' (Tất cả đơn hàng) không thể tự 'process' (xử lý). Đây là một chính sách, lời hứa sẽ thực hiện trong tương lai.",
    "explanation": "Chính xác. Thể bị động của tương lai đơn 'will be processed' (sẽ được xử lý) phù hợp nhất với cấu trúc câu thông báo/chính sách của công ty.",
    "translation": "Tất cả các đơn đặt hàng được đặt trước 3 giờ chiều sẽ được xử lý trong cùng một ngày làm việc bằng dịch vụ vận chuyển hỏa tốc."
  },
  {
    "id": "q_tense_conjugation_034",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Perfect)",
    "difficulty_level": "Medium",
    "question_text": "The launch of the interactive video feature _____ due to unexpected technical difficulties.",
    "options": [
      { "key": "A", "text": "has postponed" },
      { "key": "B", "text": "has been postponed" },
      { "key": "C", "text": "postpones" },
      { "key": "D", "text": "is postponing" }
    ],
    "correct_answer": "B",
    "hint": "Sự việc ra mắt (The launch) phải chịu tác động (bị động). Hậu quả của việc hoãn vẫn kéo dài đến hiện tại.",
    "explanation": "Chính xác. Thể bị động của Hiện tại hoàn thành 'has been postponed' diễn tả một sự thay đổi lịch trình vừa diễn ra và ảnh hưởng đến hiện tại.",
    "translation": "Việc ra mắt tính năng video tương tác đã bị hoãn lại do những khó khăn kỹ thuật không lường trước được."
  },
  {
    "id": "q_tense_conjugation_035",
    "part": 5,
    "grammar_topic": "Past Continuous vs Past Simple",
    "difficulty_level": "Medium",
    "question_text": "Mr. Smith _____ the timesheets when the fire alarm suddenly went off in the building.",
    "options": [
      { "key": "A", "text": "reviewed" },
      { "key": "B", "text": "was reviewing" },
      { "key": "C", "text": "reviews" },
      { "key": "D", "text": "has reviewed" }
    ],
    "correct_answer": "B",
    "hint": "Mệnh đề sau 'when' sử dụng quá khứ đơn (went off) để chỉ một hành động bất ngờ cắt ngang hành động đang diễn ra (was reviewing).",
    "explanation": "Chính xác. Thì Quá khứ tiếp diễn 'was reviewing' miêu tả hành động đang được thực hiện dang dở trong quá khứ.",
    "translation": "Ông Smith đang xem xét các bảng chấm công thì chuông báo cháy đột nhiên reo lên trong tòa nhà."
  },
  {
    "id": "q_tense_conjugation_036",
    "part": 5,
    "grammar_topic": "Future Simple (Conditionals Type 1)",
    "difficulty_level": "Easy",
    "question_text": "If you upgrade to a premium account on EduKit, you _____ access to advanced mock exams.",
    "options": [
      { "key": "A", "text": "receive" },
      { "key": "B", "text": "received" },
      { "key": "C", "text": "will receive" },
      { "key": "D", "text": "have received" }
    ],
    "correct_answer": "C",
    "hint": "Câu điều kiện loại 1 (If + S + V-hiện tại đơn). Mệnh đề kết quả sẽ sử dụng thì Tương lai đơn (will + V).",
    "explanation": "Chính xác. 'Will receive' chỉ một kết quả chắc chắn sẽ xảy ra trong tương lai nếu điều kiện được đáp ứng.",
    "translation": "Nếu bạn nâng cấp lên tài khoản cao cấp trên EduKit, bạn sẽ nhận được quyền truy cập vào các bài thi thử nâng cao."
  },
  {
    "id": "q_tense_conjugation_037",
    "part": 5,
    "grammar_topic": "Past Perfect (After)",
    "difficulty_level": "Hard",
    "question_text": "After the QA team _____ the new application thoroughly, it was released to the public.",
    "options": [
      { "key": "A", "text": "had tested" },
      { "key": "B", "text": "tests" },
      { "key": "C", "text": "has tested" },
      { "key": "D", "text": "was testing" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'After + Quá khứ hoàn thành, Quá khứ đơn' dùng để nhấn mạnh hành động test đã kết thúc hoàn toàn trước khi hành động release xảy ra.",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had tested' diễn tả một hành động xảy ra và kết thúc trước một hành động khác trong quá khứ.",
    "translation": "Sau khi nhóm QA đã kiểm tra ứng dụng mới một cách kỹ lưỡng, nó đã được phát hành ra công chúng."
  },
  {
    "id": "q_tense_conjugation_038",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Medium",
    "question_text": "Since its inception, the Happy Box brand _____ its operations from a small local shop to a nationwide distributor.",
    "options": [
      { "key": "A", "text": "expands" },
      { "key": "B", "text": "expanded" },
      { "key": "C", "text": "will expand" },
      { "key": "D", "text": "has expanded" }
    ],
    "correct_answer": "D",
    "hint": "Cụm từ 'Since its inception' (kể từ khi thành lập) là dấu hiệu mạnh mẽ của thì Hiện tại hoàn thành.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has expanded' được sử dụng để mô tả một quá trình phát triển kéo dài từ quá khứ đến hiện tại.",
    "translation": "Kể từ khi thành lập, thương hiệu Happy Box đã mở rộng hoạt động từ một cửa hàng nhỏ ở địa phương thành một nhà phân phối toàn quốc."
  },
  {
    "id": "q_tense_conjugation_039",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Simple)",
    "difficulty_level": "Easy",
    "question_text": "All confidential employee files _____ securely in an encrypted cloud database.",
    "options": [
      { "key": "A", "text": "store" },
      { "key": "B", "text": "are storing" },
      { "key": "C", "text": "are stored" },
      { "key": "D", "text": "stored" }
    ],
    "correct_answer": "C",
    "hint": "Chủ ngữ là 'files' (các tệp - số nhiều, chỉ vật). Chúng không tự lưu trữ mà phải 'được lưu trữ'.",
    "explanation": "Chính xác. Thể bị động của thì hiện tại đơn 'are stored' diễn tả một trạng thái, quy trình bảo mật cố định của công ty.",
    "translation": "Tất cả các tệp thông tin bí mật của nhân viên được lưu trữ an toàn trong một cơ sở dữ liệu đám mây được mã hóa."
  },
  {
    "id": "q_tense_conjugation_040",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Hard",
    "question_text": "By the time the new academic year begins, the development team _____ all the requested features to the EduKit app.",
    "options": [
      { "key": "A", "text": "add" },
      { "key": "B", "text": "added" },
      { "key": "C", "text": "will have added" },
      { "key": "D", "text": "are adding" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'By the time + S + V(hiện tại đơn)' luôn đi kèm với thì Tương lai hoàn thành ở mệnh đề chính.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have added' dự báo một công việc sẽ được hoàn tất tính đến trước một thời điểm ở tương lai.",
    "translation": "Tính đến lúc năm học mới bắt đầu, nhóm phát triển sẽ đã thêm toàn bộ các tính năng được yêu cầu vào ứng dụng EduKit."
  },
  {
    "id": "q_tense_conjugation_041",
    "part": 5,
    "grammar_topic": "Past Continuous",
    "difficulty_level": "Medium",
    "question_text": "The warehouse staff _____ the holiday gift boxes when the CEO unexpectedly visited the facility.",
    "options": [
      { "key": "A", "text": "pack" },
      { "key": "B", "text": "packed" },
      { "key": "C", "text": "were packing" },
      { "key": "D", "text": "have packed" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'when + Quá khứ đơn (visited)' thường đi kèm với một hành động đang diễn ra dang dở trong quá khứ.",
    "explanation": "Chính xác. Thì Quá khứ tiếp diễn 'were packing' miêu tả hành động đang đóng gói hàng hóa thì bị một hành động khác (CEO đến thăm) cắt ngang.",
    "translation": "Nhân viên kho đang đóng gói các hộp quà tặng dịp lễ thì Giám đốc điều hành bất ngờ đến thăm cơ sở."
  },
  {
    "id": "q_tense_conjugation_042",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Easy",
    "question_text": "The developers of PrepMaster _____ several new listening exercises to the application recently.",
    "options": [
      { "key": "A", "text": "add" },
      { "key": "B", "text": "added" },
      { "key": "C", "text": "are adding" },
      { "key": "D", "text": "have added" }
    ],
    "correct_answer": "D",
    "hint": "Trạng từ 'recently' (gần đây) là một trong những dấu hiệu nhận biết phổ biến nhất của thì Hiện tại hoàn thành.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'have added' diễn tả một hành động vừa mới xảy ra gần đây và kết quả của nó vẫn còn ở hiện tại.",
    "translation": "Các lập trình viên của PrepMaster gần đây đã thêm một vài bài tập nghe mới vào ứng dụng."
  },
  {
    "id": "q_tense_conjugation_043",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "Tomorrow at exactly 8 PM, the popular English teacher _____ a live Q&A session on her TikTok channel.",
    "options": [
      { "key": "A", "text": "hosts" },
      { "key": "B", "text": "will be hosting" },
      { "key": "C", "text": "hosted" },
      { "key": "D", "text": "has hosted" }
    ],
    "correct_answer": "B",
    "hint": "Cụm 'Tomorrow at exactly 8 PM' chỉ một thời điểm cực kỳ chính xác sẽ diễn ra trong tương lai.",
    "explanation": "Chính xác. Thì Tương lai tiếp diễn 'will be hosting' được sử dụng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm xác định ở tương lai.",
    "translation": "Vào đúng 8 giờ tối ngày mai, giáo viên tiếng Anh nổi tiếng sẽ đang tổ chức một buổi Hỏi đáp trực tiếp trên kênh TikTok của cô ấy."
  },
  {
    "id": "q_tense_conjugation_044",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "Every Friday afternoon, the HR manager _____ the weekly timesheets submitted through the mobile app.",
    "options": [
      { "key": "A", "text": "review" },
      { "key": "B", "text": "reviewed" },
      { "key": "C", "text": "reviews" },
      { "key": "D", "text": "is reviewing" }
    ],
    "correct_answer": "C",
    "hint": "Trạng từ chỉ tần suất 'Every Friday afternoon' (Mỗi chiều thứ Sáu) báo hiệu một thói quen hoặc lịch trình lặp đi lặp lại.",
    "explanation": "Chính xác. Thì Hiện tại đơn được sử dụng. Chủ ngữ 'the HR manager' là số ít nên động từ 'review' thêm 's'.",
    "translation": "Mỗi chiều thứ Sáu, người quản lý nhân sự xem xét các bảng chấm công hàng tuần được nộp qua ứng dụng di động."
  },
  {
    "id": "q_tense_conjugation_045",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Perfect)",
    "difficulty_level": "Hard",
    "question_text": "Several new interactive modules _____ to the EduKit platform since its initial launch in January.",
    "options": [
      { "key": "A", "text": "have added" },
      { "key": "B", "text": "added" },
      { "key": "C", "text": "have been added" },
      { "key": "D", "text": "were adding" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'since' + mốc quá khứ yêu cầu thì Hiện tại hoàn thành. 'Modules' (các mô-đun) là vật, phải 'được thêm vào'.",
    "explanation": "Chính xác. Câu này yêu cầu thể bị động của thì Hiện tại hoàn thành (have been + V3/ed) để diễn tả các mô-đun đã được thêm vào nền tảng.",
    "translation": "Một vài mô-đun tương tác mới đã được thêm vào nền tảng EduKit kể từ lần ra mắt đầu tiên vào tháng Một."
  },
  {
    "id": "q_tense_conjugation_046",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "The courier realized that he _____ the package to the wrong corporate address before the client called.",
    "options": [
      { "key": "A", "text": "delivers" },
      { "key": "B", "text": "delivered" },
      { "key": "C", "text": "has delivered" },
      { "key": "D", "text": "had delivered" }
    ],
    "correct_answer": "D",
    "hint": "Hành động giao nhầm hàng xảy ra TRƯỚC hai hành động khác trong quá khứ là 'realized' (nhận ra) và 'called' (gọi).",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had delivered' miêu tả một sự việc đã hoàn tất trước một thời điểm hoặc một hành động khác trong quá khứ.",
    "translation": "Người chuyển phát nhận ra rằng anh ta đã giao kiện hàng đến sai địa chỉ công ty trước khi khách hàng gọi điện."
  },
  {
    "id": "q_tense_conjugation_047",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Medium",
    "question_text": "By the end of this month, the PrepMaster application _____ over 10,000 active users.",
    "options": [
      { "key": "A", "text": "reach" },
      { "key": "B", "text": "reached" },
      { "key": "C", "text": "will have reached" },
      { "key": "D", "text": "is reaching" }
    ],
    "correct_answer": "C",
    "hint": "Cụm từ 'By the end of...' (Tính đến cuối...) là dấu hiệu nhận biết đặc trưng của thì Tương lai hoàn thành.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have reached' dùng để dự báo một thành tựu sẽ đạt được tính đến một thời điểm trong tương lai.",
    "translation": "Tính đến cuối tháng này, ứng dụng PrepMaster sẽ đạt được hơn 10.000 người dùng hoạt động."
  },
  {
    "id": "q_tense_conjugation_048",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Easy",
    "question_text": "Due to the sudden increase in web traffic, the IT department _____ the server capacity right now.",
    "options": [
      { "key": "A", "text": "upgrades" },
      { "key": "B", "text": "is upgrading" },
      { "key": "C", "text": "upgraded" },
      { "key": "D", "text": "has upgraded" }
    ],
    "correct_answer": "B",
    "hint": "Trạng từ 'right now' (ngay lúc này) bắt buộc phải sử dụng thì Hiện tại tiếp diễn.",
    "explanation": "Chính xác. Thì Hiện tại tiếp diễn 'is upgrading' diễn tả một hành động khẩn cấp đang xảy ra ngay tại thời điểm nói.",
    "translation": "Do sự gia tăng đột biến của lưu lượng truy cập web, bộ phận CNTT đang nâng cấp dung lượng máy chủ ngay lúc này."
  },
  {
    "id": "q_tense_conjugation_049",
    "part": 5,
    "grammar_topic": "Passive Voice (Past Simple)",
    "difficulty_level": "Medium",
    "question_text": "The minutes from yesterday's board meeting _____ to all department heads this morning.",
    "options": [
      { "key": "A", "text": "emailed" },
      { "key": "B", "text": "were emailing" },
      { "key": "C", "text": "are emailed" },
      { "key": "D", "text": "were emailed" }
    ],
    "correct_answer": "D",
    "hint": "Dấu hiệu 'this morning' (sáng nay - khi người nói đã qua buổi sáng) yêu cầu thì Quá khứ. 'The minutes' (biên bản họp - số nhiều) phải 'được gửi'.",
    "explanation": "Chính xác. Thể bị động của thì Quá khứ đơn 'were emailed' là phù hợp nhất, miêu tả hành động đã hoàn tất trong quá khứ.",
    "translation": "Biên bản cuộc họp hội đồng quản trị ngày hôm qua đã được gửi email đến tất cả các trưởng bộ phận vào sáng nay."
  },
  {
    "id": "q_tense_conjugation_050",
    "part": 5,
    "grammar_topic": "Present Simple (Future Meaning)",
    "difficulty_level": "Medium",
    "question_text": "The online seminar on advanced React development _____ at exactly 9:00 AM tomorrow.",
    "options": [
      { "key": "A", "text": "begin" },
      { "key": "B", "text": "begins" },
      { "key": "C", "text": "began" },
      { "key": "D", "text": "has begun" }
    ],
    "correct_answer": "B",
    "hint": "Lịch trình tàu xe, máy bay, cuộc họp, hoặc sự kiện đã được lên lịch cố định thường sử dụng thì Hiện tại đơn để mang ý nghĩa tương lai.",
    "explanation": "Chính xác. Mặc dù có 'tomorrow', nhưng đây là một lịch trình cố định của hội thảo, nên dùng Hiện tại đơn 'begins' là cách dùng rất tự nhiên trong tiếng Anh.",
    "translation": "Hội thảo trực tuyến về phát triển React nâng cao bắt đầu vào đúng 9:00 sáng mai."
  },
  {
    "id": "q_tense_conjugation_051",
    "part": 5,
    "grammar_topic": "Present Perfect Continuous",
    "difficulty_level": "Hard",
    "question_text": "The mobile app development team _____ on the new timekeeping interface for over a month.",
    "options": [
      { "key": "A", "text": "is working" },
      { "key": "B", "text": "works" },
      { "key": "C", "text": "worked" },
      { "key": "D", "text": "has been working" }
    ],
    "correct_answer": "D",
    "hint": "Cụm 'for over a month' (hơn 1 tháng) kết hợp với hành động 'work' (làm việc) cần một thì nhấn mạnh sự liên tục từ quá khứ tới hiện tại.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành tiếp diễn 'has been working' nhấn mạnh quá trình làm việc liên tục, không ngắt quãng của nhóm phát triển.",
    "translation": "Nhóm phát triển ứng dụng di động đã và đang làm việc trên giao diện chấm công mới trong hơn một tháng qua."
  },
  {
    "id": "q_tense_conjugation_052",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "During last year's holiday season, Happy Box _____ a record number of corporate clients.",
    "options": [
      { "key": "A", "text": "attracts" },
      { "key": "B", "text": "attracted" },
      { "key": "C", "text": "has attracted" },
      { "key": "D", "text": "is attracting" }
    ],
    "correct_answer": "B",
    "hint": "Cụm từ 'During last year's holiday season' xác định rõ một khoảng thời gian đã kết thúc trong quá khứ.",
    "explanation": "Chính xác. Thì Quá khứ đơn 'attracted' (đã thu hút) được sử dụng cho sự việc đã xảy ra và hoàn toàn chấm dứt trong năm ngoái.",
    "translation": "Trong mùa lễ hội năm ngoái, Happy Box đã thu hút một số lượng kỷ lục các khách hàng doanh nghiệp."
  },
  {
    "id": "q_tense_conjugation_053",
    "part": 5,
    "grammar_topic": "Passive Voice (Future Simple)",
    "difficulty_level": "Medium",
    "question_text": "Any employee who fails to log their hours _____ by the automated timekeeping system next Monday.",
    "options": [
      { "key": "A", "text": "will notify" },
      { "key": "B", "text": "notifies" },
      { "key": "C", "text": "will be notified" },
      { "key": "D", "text": "is notified" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'next Monday' yêu cầu thì tương lai. Người nhân viên không tự thông báo mà sẽ 'được thông báo' bởi hệ thống (by the system).",
    "explanation": "Chính xác. Thể bị động của thì Tương lai đơn 'will be notified' (sẽ được thông báo) hoàn toàn phù hợp với ngữ cảnh câu.",
    "translation": "Bất kỳ nhân viên nào không ghi lại giờ làm việc của mình sẽ được hệ thống chấm công tự động thông báo vào thứ Hai tới."
  },
  {
    "id": "q_tense_conjugation_054",
    "part": 5,
    "grammar_topic": "Conditionals (Type 2)",
    "difficulty_level": "Hard",
    "question_text": "If the company _____ more funds, we would hire an additional React developer for the project.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "had" },
      { "key": "C", "text": "have" },
      { "key": "D", "text": "will have" }
    ],
    "correct_answer": "B",
    "hint": "Đây là câu điều kiện loại 2, diễn tả một giả định không có thật ở hiện tại. Mệnh đề chính dùng 'would + V', mệnh đề If dùng Quá khứ đơn.",
    "explanation": "Chính xác. Trong câu điều kiện loại 2, động từ ở mệnh đề If được chia ở thì Quá khứ đơn. Do đó, 'had' là đáp án đúng.",
    "translation": "Nếu công ty có thêm kinh phí, chúng tôi sẽ thuê thêm một lập trình viên React cho dự án."
  },
  {
    "id": "q_tense_conjugation_055",
    "part": 5,
    "grammar_topic": "Future Simple (Promise/Decision)",
    "difficulty_level": "Medium",
    "question_text": "\"I _____ the technical issue with the EduKit login page immediately,\" the support agent assured the user.",
    "options": [
      { "key": "A", "text": "fixed" },
      { "key": "B", "text": "fix" },
      { "key": "C", "text": "will fix" },
      { "key": "D", "text": "have fixed" }
    ],
    "correct_answer": "C",
    "hint": "Khi đưa ra một lời hứa (assure), một quyết định tức thời ngay lúc nói, hoặc một lời đề nghị giúp đỡ, ta sử dụng thì Tương lai đơn (will).",
    "explanation": "Chính xác. 'Will fix' thể hiện một lời cam kết/quyết định giải quyết vấn đề ngay lập tức từ nhân viên hỗ trợ.",
    "translation": "\"Tôi sẽ khắc phục sự cố kỹ thuật với trang đăng nhập EduKit ngay lập tức,\" nhân viên hỗ trợ đảm bảo với người dùng."
  },
  {
    "id": "q_tense_conjugation_056",
    "part": 5,
    "grammar_topic": "Past Continuous",
    "difficulty_level": "Medium",
    "question_text": "While the marketing team was brainstorming new campaign ideas, the design team _____ the packaging for Happy Box.",
    "options": [
      { "key": "A", "text": "finalizes" },
      { "key": "B", "text": "finalized" },
      { "key": "C", "text": "was finalizing" },
      { "key": "D", "text": "has finalized" }
    ],
    "correct_answer": "C",
    "hint": "Liên từ 'While' có thể nối hai hành động song song, cùng diễn ra trong một khoảng thời gian ở quá khứ.",
    "explanation": "Chính xác. Để thể hiện tính song song của hai sự việc, khi vế trước dùng Quá khứ tiếp diễn (was brainstorming), vế sau cũng dùng Quá khứ tiếp diễn (was finalizing).",
    "translation": "Trong khi nhóm tiếp thị đang suy nghĩ các ý tưởng chiến dịch mới, thì nhóm thiết kế đang hoàn thiện bao bì cho Happy Box."
  },
  {
    "id": "q_tense_conjugation_057",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Hard",
    "question_text": "The CEO stated that he _____ such a rapid increase in user engagement on the learning platform before.",
    "options": [
      { "key": "A", "text": "never sees" },
      { "key": "B", "text": "has never seen" },
      { "key": "C", "text": "was never seeing" },
      { "key": "D", "text": "will never see" }
    ],
    "correct_answer": "B",
    "hint": "Cụm từ 'never... before' (chưa từng... trước đây) là dấu hiệu kinh điển của thì Hiện tại hoàn thành dùng để diễn tả trải nghiệm.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has never seen' diễn đạt một sự việc/trải nghiệm chưa từng có tính đến thời điểm hiện tại.",
    "translation": "Giám đốc điều hành tuyên bố rằng ông chưa từng thấy sự gia tăng nhanh chóng về mức độ tương tác của người dùng trên nền tảng học tập như vậy trước đây."
  },
  {
    "id": "q_tense_conjugation_058",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Continuous)",
    "difficulty_level": "Medium",
    "question_text": "Users are experiencing login errors because the main database _____ by the engineering team.",
    "options": [
      { "key": "A", "text": "updates" },
      { "key": "B", "text": "is updating" },
      { "key": "C", "text": "is being updated" },
      { "key": "D", "text": "was updated" }
    ],
    "correct_answer": "C",
    "hint": "Ngữ cảnh đang ở hiện tại (are experiencing). 'The main database' (Cơ sở dữ liệu) đang phải chịu tác động của việc cập nhật (bị động).",
    "explanation": "Chính xác. Thể bị động của thì Hiện tại tiếp diễn 'is being updated' (đang được cập nhật) giải thích lý do cho sự cố đang diễn ra lúc này.",
    "translation": "Người dùng đang gặp lỗi đăng nhập vì cơ sở dữ liệu chính đang được nhóm kỹ thuật cập nhật."
  },
  {
    "id": "q_tense_conjugation_059",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Hard",
    "question_text": "By the time the video editor finished adding the subtitles, the creator _____ the thumbnail image.",
    "options": [
      { "key": "A", "text": "prepared" },
      { "key": "B", "text": "prepares" },
      { "key": "C", "text": "has prepared" },
      { "key": "D", "text": "had prepared" }
    ],
    "correct_answer": "D",
    "hint": "Cấu trúc 'By the time + Quá khứ đơn (finished)'. Hành động xảy ra và hoàn thành trước thời điểm đó phải chia ở thì Quá khứ hoàn thành.",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had prepared' nhấn mạnh việc chuẩn bị ảnh thu nhỏ đã xong xuôi trước khi người chỉnh sửa thêm xong phụ đề.",
    "translation": "Vào lúc người chỉnh sửa video thêm xong phụ đề, nhà sáng tạo đã chuẩn bị xong hình ảnh thu nhỏ."
  },
  {
    "id": "q_tense_conjugation_060",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The PrepMaster application _____ a comprehensive analytics dashboard to help students track their progress.",
    "options": [
      { "key": "A", "text": "feature" },
      { "key": "B", "text": "features" },
      { "key": "C", "text": "featuring" },
      { "key": "D", "text": "is featured" }
    ],
    "correct_answer": "B",
    "hint": "Diễn tả tính năng, công dụng, hoặc sự thật hiển nhiên về một sản phẩm, chúng ta luôn sử dụng thì Hiện tại đơn.",
    "explanation": "Chính xác. Chủ ngữ 'The PrepMaster application' là số ít nên động từ 'feature' (có tính năng/bao gồm) phải thêm 's' thành 'features'.",
    "translation": "Ứng dụng PrepMaster có một bảng điều khiển phân tích toàn diện để giúp học sinh theo dõi tiến độ của mình."
  },
  {
    "id": "q_tense_conjugation_061",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Hard",
    "question_text": "By the end of this year, the engineering team _____ the integration of the timekeeping app with the new HR portal.",
    "options": [
      { "key": "A", "text": "completes" },
      { "key": "B", "text": "completed" },
      { "key": "C", "text": "will have completed" },
      { "key": "D", "text": "is completing" }
    ],
    "correct_answer": "C",
    "hint": "Cụm từ 'By the end of this year' (Tính đến cuối năm nay) là dấu hiệu bắt buộc phải sử dụng thì Tương lai hoàn thành.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have completed' diễn tả một hành động sẽ được hoàn tất trước một thời điểm được xác định trong tương lai.",
    "translation": "Tính đến cuối năm nay, đội ngũ kỹ thuật sẽ hoàn tất việc tích hợp ứng dụng chấm công với cổng thông tin nhân sự mới."
  },
  {
    "id": "q_tense_conjugation_062",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Medium",
    "question_text": "The content creator _____ highly positive feedback from her audience since she started the daily English series.",
    "options": [
      { "key": "A", "text": "receives" },
      { "key": "B", "text": "received" },
      { "key": "C", "text": "has received" },
      { "key": "D", "text": "will receive" }
    ],
    "correct_answer": "C",
    "hint": "Cấu trúc 'since + Mệnh đề quá khứ đơn (started)' yêu cầu mệnh đề chính phải chia ở thì Hiện tại hoàn thành.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has received' miêu tả một kết quả (nhận phản hồi) kéo dài từ quá khứ đến hiện tại.",
    "translation": "Nhà sáng tạo nội dung đã nhận được những phản hồi rất tích cực từ khán giả kể từ khi cô bắt đầu loạt video tiếng Anh hàng ngày."
  },
  {
    "id": "q_tense_conjugation_063",
    "part": 5,
    "grammar_topic": "Past Continuous vs Past Simple",
    "difficulty_level": "Medium",
    "question_text": "The intern _____ the new promotional video when the editing software suddenly crashed.",
    "options": [
      { "key": "A", "text": "rendered" },
      { "key": "B", "text": "was rendering" },
      { "key": "C", "text": "has rendered" },
      { "key": "D", "text": "renders" }
    ],
    "correct_answer": "B",
    "hint": "Hành động phần mềm bị sập (crashed - quá khứ đơn) cắt ngang một hành động đang dang dở. Hành động dang dở đó phải dùng Quá khứ tiếp diễn.",
    "explanation": "Chính xác. Thì Quá khứ tiếp diễn 'was rendering' (đang xuất video) miêu tả một quá trình đang diễn ra trong quá khứ thì bị gián đoạn.",
    "translation": "Thực tập sinh đang xuất video quảng cáo mới thì phần mềm chỉnh sửa đột nhiên bị sập."
  },
  {
    "id": "q_tense_conjugation_064",
    "part": 5,
    "grammar_topic": "Conditionals (Type 1)",
    "difficulty_level": "Easy",
    "question_text": "If the client _____ the customized Happy Box designs, we will begin mass production immediately.",
    "options": [
      { "key": "A", "text": "approves" },
      { "key": "B", "text": "approved" },
      { "key": "C", "text": "will approve" },
      { "key": "D", "text": "has approved" }
    ],
    "correct_answer": "A",
    "hint": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra. Mệnh đề chính dùng Tương lai đơn (will begin), mệnh đề If dùng Hiện tại đơn.",
    "explanation": "Chính xác. Động từ 'approves' chia ở Hiện tại đơn (với chủ ngữ số ít 'the client') là đáp án chuẩn xác cho mệnh đề điều kiện loại 1.",
    "translation": "Nếu khách hàng phê duyệt các thiết kế Happy Box tùy chỉnh, chúng tôi sẽ bắt đầu sản xuất hàng loạt ngay lập tức."
  },
  {
    "id": "q_tense_conjugation_065",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "The CEO officially _____ the launch of the PrepMaster educational platform during yesterday's press conference.",
    "options": [
      { "key": "A", "text": "announces" },
      { "key": "B", "text": "has announced" },
      { "key": "C", "text": "announced" },
      { "key": "D", "text": "is announcing" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu 'yesterday's press conference' (cuộc họp báo ngày hôm qua) chốt mốc thời gian hoàn toàn thuộc về Quá khứ đơn.",
    "explanation": "Chính xác. Động từ 'announced' (đã công bố) diễn tả một hành động đã kết thúc trong quá khứ.",
    "translation": "Giám đốc điều hành đã chính thức công bố việc ra mắt nền tảng giáo dục PrepMaster trong cuộc họp báo ngày hôm qua."
  },
  {
    "id": "q_tense_conjugation_066",
    "part": 5,
    "grammar_topic": "Passive Voice (Future Simple)",
    "difficulty_level": "Medium",
    "question_text": "An updated version of the employee handbook _____ to all staff members by the end of next week.",
    "options": [
      { "key": "A", "text": "will distribute" },
      { "key": "B", "text": "distributes" },
      { "key": "C", "text": "will be distributed" },
      { "key": "D", "text": "has distributed" }
    ],
    "correct_answer": "C",
    "hint": "Chủ ngữ là 'An updated version' (Một phiên bản cập nhật) không tự phân phát được mà phải 'được phân phát' (bị động). Thời gian ở tương lai (next week).",
    "explanation": "Chính xác. Thể bị động của thì Tương lai đơn 'will be distributed' phù hợp với ngữ cảnh chỉ một kế hoạch sẽ được thực hiện.",
    "translation": "Một phiên bản cập nhật của sổ tay nhân viên sẽ được phân phát cho tất cả các nhân viên vào cuối tuần tới."
  },
  {
    "id": "q_tense_conjugation_067",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Medium",
    "question_text": "The company _____ its market reach by offering the EduKit platform to international schools this year.",
    "options": [
      { "key": "A", "text": "expands" },
      { "key": "B", "text": "is expanding" },
      { "key": "C", "text": "expanded" },
      { "key": "D", "text": "has expanded" }
    ],
    "correct_answer": "B",
    "hint": "Cụm 'this year' (năm nay) đi với một quá trình mang tính xu hướng, sự thay đổi đang diễn ra ở thời điểm hiện tại, ta ưu tiên dùng Hiện tại tiếp diễn.",
    "explanation": "Chính xác. 'Is expanding' diễn tả một dự án/chiến lược đang được tiến hành trong năm nay.",
    "translation": "Công ty đang mở rộng phạm vi thị trường của mình bằng cách cung cấp nền tảng EduKit cho các trường quốc tế trong năm nay."
  },
  {
    "id": "q_tense_conjugation_068",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Hard",
    "question_text": "The HR manager noticed that several employees _____ to submit their timesheets before the deadline passed.",
    "options": [
      { "key": "A", "text": "forget" },
      { "key": "B", "text": "forgot" },
      { "key": "C", "text": "have forgotten" },
      { "key": "D", "text": "had forgotten" }
    ],
    "correct_answer": "D",
    "hint": "Sự việc quên nộp (forget) đã xảy ra TRƯỚC khi người quản lý nhận ra (noticed) và trước khi hạn chót trôi qua (passed).",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had forgotten' diễn tả sự việc xảy ra trước một thời điểm trong quá khứ.",
    "translation": "Người quản lý nhân sự nhận thấy rằng một số nhân viên đã quên nộp bảng chấm công của họ trước khi hạn chót trôi qua."
  },
  {
    "id": "q_tense_conjugation_069",
    "part": 5,
    "grammar_topic": "Present Simple (Schedule)",
    "difficulty_level": "Easy",
    "question_text": "The daily stand-up meeting for the development team _____ at exactly 9:30 AM in the main conference room.",
    "options": [
      { "key": "A", "text": "start" },
      { "key": "B", "text": "starts" },
      { "key": "C", "text": "started" },
      { "key": "D", "text": "is starting" }
    ],
    "correct_answer": "B",
    "hint": "Một lịch trình cố định hàng ngày (daily) luôn được diễn đạt bằng thì Hiện tại đơn.",
    "explanation": "Chính xác. Chủ ngữ 'The daily stand-up meeting' là số ít, do đó động từ 'start' phải thêm 's' thành 'starts'.",
    "translation": "Cuộc họp đứng hàng ngày của nhóm phát triển bắt đầu vào đúng 9:30 sáng tại phòng hội nghị chính."
  },
  {
    "id": "q_tense_conjugation_070",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Perfect)",
    "difficulty_level": "Medium",
    "question_text": "A variety of new eco-friendly materials _____ recently _____ by the packaging department for the Happy Box project.",
    "options": [
      { "key": "A", "text": "has / tested" },
      { "key": "B", "text": "have / been tested" },
      { "key": "C", "text": "are / testing" },
      { "key": "D", "text": "were / testing" }
    ],
    "correct_answer": "B",
    "hint": "Cấu trúc 'A variety of + N(số nhiều)' là chủ ngữ số nhiều. Dấu hiệu 'recently' (gần đây) yêu cầu Hiện tại hoàn thành. Vật liệu phải 'được kiểm tra' (bị động).",
    "explanation": "Chính xác. Thể bị động của Hiện tại hoàn thành với chủ ngữ số nhiều là 'have been tested'.",
    "translation": "Nhiều loại vật liệu thân thiện với môi trường mới gần đây đã được bộ phận đóng gói kiểm tra cho dự án Happy Box."
  },
  {
    "id": "q_tense_conjugation_071",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "Next Tuesday at 2 PM, our lead developer _____ a training session on React basics for the new interns.",
    "options": [
      { "key": "A", "text": "conducts" },
      { "key": "B", "text": "will conduct" },
      { "key": "C", "text": "will be conducting" },
      { "key": "D", "text": "conducted" }
    ],
    "correct_answer": "C",
    "hint": "Dấu hiệu thời gian 'Next Tuesday at 2 PM' chỉ định một khoảnh khắc rất cụ thể trong tương lai, thích hợp nhất với thì Tương lai tiếp diễn.",
    "explanation": "Chính xác. 'Will be conducting' (sẽ đang tiến hành) phác họa một sự việc đang dở dang tại một thời điểm được xác định ở tương lai.",
    "translation": "Vào lúc 2 giờ chiều thứ Ba tới, lập trình viên chính của chúng tôi sẽ đang tiến hành một buổi đào tạo về kiến thức React cơ bản cho các thực tập sinh mới."
  },
  {
    "id": "q_tense_conjugation_072",
    "part": 5,
    "grammar_topic": "Present Perfect Continuous",
    "difficulty_level": "Hard",
    "question_text": "The student _____ for the JLPT N3 exam for six months and finally feels confident enough to take the test.",
    "options": [
      { "key": "A", "text": "studies" },
      { "key": "B", "text": "studied" },
      { "key": "C", "text": "is studying" },
      { "key": "D", "text": "has been studying" }
    ],
    "correct_answer": "D",
    "hint": "Giới từ 'for six months' (khoảng 6 tháng) nhấn mạnh sự liên tục của hành động học tập tính đến hiện tại.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành tiếp diễn 'has been studying' được ưu tiên để mô tả quá trình ôn luyện miệt mài không ngắt quãng.",
    "translation": "Học sinh này đã và đang ôn thi JLPT N3 trong sáu tháng và cuối cùng cảm thấy đủ tự tin để làm bài thi."
  },
  {
    "id": "q_tense_conjugation_073",
    "part": 5,
    "grammar_topic": "Future Simple (Time Clause)",
    "difficulty_level": "Medium",
    "question_text": "As soon as the mobile application _____ live on the App Store, the marketing team will launch the ad campaign.",
    "options": [
      { "key": "A", "text": "will go" },
      { "key": "B", "text": "goes" },
      { "key": "C", "text": "went" },
      { "key": "D", "text": "is going" }
    ],
    "correct_answer": "B",
    "hint": "Mệnh đề phụ chỉ thời gian bắt đầu bằng 'As soon as' diễn tả tương lai phải dùng thì Hiện tại đơn.",
    "explanation": "Chính xác. Động từ 'goes' (hiện tại đơn) đi với chủ ngữ số ít 'the mobile application' tạo thành mệnh đề thời gian hợp lệ.",
    "translation": "Ngay khi ứng dụng di động chính thức ra mắt trên App Store, nhóm tiếp thị sẽ khởi chạy chiến dịch quảng cáo."
  },
  {
    "id": "q_tense_conjugation_074",
    "part": 5,
    "grammar_topic": "Conditionals (Type 2)",
    "difficulty_level": "Hard",
    "question_text": "If the company _____ a larger budget, they would invest in AI features for the PrepMaster platform.",
    "options": [
      { "key": "A", "text": "have" },
      { "key": "B", "text": "has" },
      { "key": "C", "text": "had" },
      { "key": "D", "text": "had had" }
    ],
    "correct_answer": "C",
    "hint": "Sự xuất hiện của 'would invest' ở mệnh đề chính báo hiệu đây là câu điều kiện loại 2 (trái với thực tế ở hiện tại). Mệnh đề If dùng Quá khứ đơn.",
    "explanation": "Chính xác. Động từ trong mệnh đề If của câu điều kiện loại 2 phải chia ở thì Quá khứ đơn 'had'.",
    "translation": "Nếu công ty có ngân sách lớn hơn, họ sẽ đầu tư vào các tính năng AI cho nền tảng PrepMaster."
  },
  {
    "id": "q_tense_conjugation_075",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "Two weeks ago, the project manager _____ a new timeline for the completion of the HR website.",
    "options": [
      { "key": "A", "text": "proposes" },
      { "key": "B", "text": "proposed" },
      { "key": "C", "text": "has proposed" },
      { "key": "D", "text": "will propose" }
    ],
    "correct_answer": "B",
    "hint": "Cụm 'Two weeks ago' (Cách đây 2 tuần) là dấu hiệu kinh điển yêu cầu thì Quá khứ đơn.",
    "explanation": "Chính xác. Động từ 'proposed' (đã đề xuất) chia ở quá khứ đơn phù hợp với thời điểm đã kết thúc hoàn toàn.",
    "translation": "Hai tuần trước, quản lý dự án đã đề xuất một mốc thời gian mới cho việc hoàn thành trang web nhân sự."
  },
  {
    "id": "q_tense_conjugation_076",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Simple)",
    "difficulty_level": "Medium",
    "question_text": "The leaderboards on the EduKit application _____ daily to encourage healthy competition among students.",
    "options": [
      { "key": "A", "text": "update" },
      { "key": "B", "text": "are updating" },
      { "key": "C", "text": "are updated" },
      { "key": "D", "text": "updated" }
    ],
    "correct_answer": "C",
    "hint": "Chủ ngữ 'The leaderboards' (Bảng xếp hạng) là vật, phải 'được cập nhật'. Trạng từ 'daily' (hàng ngày) yêu cầu thì Hiện tại đơn.",
    "explanation": "Chính xác. Thể bị động của thì Hiện tại đơn 'are updated' diễn tả một quy trình tự động, lặp đi lặp lại.",
    "translation": "Bảng xếp hạng trên ứng dụng EduKit được cập nhật hàng ngày để khuyến khích sự cạnh tranh lành mạnh giữa các học sinh."
  },
  {
    "id": "q_tense_conjugation_077",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The new timekeeping system _____ employees to clock in using facial recognition technology.",
    "options": [
      { "key": "A", "text": "allow" },
      { "key": "B", "text": "allows" },
      { "key": "C", "text": "allowing" },
      { "key": "D", "text": "is allowed" }
    ],
    "correct_answer": "B",
    "hint": "Diễn tả tính năng cố định của một hệ thống, ta dùng thì Hiện tại đơn. Hệ thống là chủ ngữ số ít nên chủ động cho phép nhân viên làm gì.",
    "explanation": "Chính xác. Động từ 'allows' (cho phép) thêm 's' để hòa hợp với chủ ngữ số ít 'The new timekeeping system'.",
    "translation": "Hệ thống chấm công mới cho phép nhân viên điểm danh bằng công nghệ nhận dạng khuôn mặt."
  },
  {
    "id": "q_tense_conjugation_078",
    "part": 5,
    "grammar_topic": "Future Perfect (Passive)",
    "difficulty_level": "Hard",
    "question_text": "By the time the investors arrive next week, the beta version of the app _____ by the QA team.",
    "options": [
      { "key": "A", "text": "will complete" },
      { "key": "B", "text": "will have completed" },
      { "key": "C", "text": "will be completed" },
      { "key": "D", "text": "will have been completed" }
    ],
    "correct_answer": "D",
    "hint": "Cấu trúc 'By the time + HTĐ' yêu cầu Tương lai hoàn thành. Chủ ngữ 'the beta version' phải mang nghĩa BỊ ĐỘNG (được hoàn thành).",
    "explanation": "Chính xác. Câu này yêu cầu thể bị động của thì Tương lai hoàn thành (will have been + V3/ed) để chỉ một công việc sẽ được người khác hoàn tất trước một mốc tương lai.",
    "translation": "Tính đến lúc các nhà đầu tư đến vào tuần tới, phiên bản thử nghiệm của ứng dụng sẽ được hoàn thành bởi nhóm QA."
  },
  {
    "id": "q_tense_conjugation_079",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "The client noted that they _____ a similar issue with their previous gift box supplier last year.",
    "options": [
      { "key": "A", "text": "experience" },
      { "key": "B", "text": "experienced" },
      { "key": "C", "text": "have experienced" },
      { "key": "D", "text": "had experienced" }
    ],
    "correct_answer": "D",
    "hint": "Động từ tường thuật 'noted' ở quá khứ. Sự việc khách hàng gặp sự cố xảy ra TRƯỚC thời điểm tường thuật đó.",
    "explanation": "Chính xác. Trong câu tường thuật gián tiếp, sự việc lùi một thì so với quá khứ đơn (noted) sẽ thành Quá khứ hoàn thành 'had experienced'.",
    "translation": "Khách hàng lưu ý rằng họ đã từng gặp một vấn đề tương tự với nhà cung cấp hộp quà trước đây của họ vào năm ngoái."
  },
  {
    "id": "q_tense_conjugation_080",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Easy",
    "question_text": "Because her follower base is growing rapidly, the creator _____ more time interacting with comments on TikTok.",
    "options": [
      { "key": "A", "text": "spend" },
      { "key": "B", "text": "spends" },
      { "key": "C", "text": "is spending" },
      { "key": "D", "text": "spent" }
    ],
    "correct_answer": "C",
    "hint": "Mệnh đề nguyên nhân dùng Hiện tại tiếp diễn (is growing) chỉ một xu hướng hiện tại, do đó mệnh đề chính cũng nên miêu tả hành động tạm thời tương ứng.",
    "explanation": "Chính xác. Thì Hiện tại tiếp diễn 'is spending' miêu tả một sự thay đổi hành vi đang diễn ra ở thời điểm hiện tại do nguyên nhân bên ngoài.",
    "translation": "Vì lượng người theo dõi của cô đang tăng lên nhanh chóng, nhà sáng tạo hiện đang dành nhiều thời gian hơn để tương tác với các bình luận trên TikTok."
  },
  {
    "id": "q_tense_conjugation_081",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "Next Friday at 10 AM, the lead developer _____ the new React framework to the rest of the engineering team.",
    "options": [
      { "key": "A", "text": "will present" },
      { "key": "B", "text": "presents" },
      { "key": "C", "text": "will be presenting" },
      { "key": "D", "text": "presented" }
    ],
    "correct_answer": "C",
    "hint": "Cụm thời gian 'Next Friday at 10 AM' chỉ định một khoảnh khắc rất cụ thể sẽ xảy ra trong tương lai, yêu cầu thì Tương lai tiếp diễn.",
    "explanation": "Chính xác. Thì Tương lai tiếp diễn 'will be presenting' (sẽ đang trình bày) phác họa một sự việc đang diễn ra dang dở tại một thời điểm xác định ở tương lai.",
    "translation": "Vào 10 giờ sáng thứ Sáu tới, lập trình viên chính sẽ đang trình bày về framework React mới cho phần còn lại của nhóm kỹ thuật."
  },
  {
    "id": "q_tense_conjugation_082",
    "part": 5,
    "grammar_topic": "Present Perfect Continuous",
    "difficulty_level": "Hard",
    "question_text": "The content team _____ on compiling the TOEIC mock exams for the PrepMaster app for three straight weeks.",
    "options": [
      { "key": "A", "text": "is working" },
      { "key": "B", "text": "worked" },
      { "key": "C", "text": "has been working" },
      { "key": "D", "text": "works" }
    ],
    "correct_answer": "C",
    "hint": "Cụm 'for three straight weeks' (trong 3 tuần liên tiếp) nhấn mạnh một quá trình làm việc liên tục kéo dài từ quá khứ đến hiện tại.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành tiếp diễn 'has been working' được sử dụng để nhấn mạnh tính liên tục không ngắt quãng của hành động.",
    "translation": "Nhóm nội dung đã và đang làm việc liên tục trong ba tuần để biên soạn các bài thi thử TOEIC cho ứng dụng PrepMaster."
  },
  {
    "id": "q_tense_conjugation_083",
    "part": 5,
    "grammar_topic": "Passive Voice (Past Simple)",
    "difficulty_level": "Easy",
    "question_text": "The promotional video for the daily English TikTok series _____ to the platform yesterday evening.",
    "options": [
      { "key": "A", "text": "uploaded" },
      { "key": "B", "text": "was uploaded" },
      { "key": "C", "text": "uploads" },
      { "key": "D", "text": "has uploaded" }
    ],
    "correct_answer": "B",
    "hint": "Thời gian 'yesterday evening' yêu cầu thì quá khứ đơn. Chủ ngữ 'The promotional video' là vật, do đó phải sử dụng thể bị động.",
    "explanation": "Chính xác. Thể bị động của thì Quá khứ đơn 'was uploaded' (đã được tải lên) hoàn toàn phù hợp với ngữ pháp và nghĩa của câu.",
    "translation": "Video quảng cáo cho loạt bài tiếng Anh hàng ngày trên TikTok đã được tải lên nền tảng vào tối hôm qua."
  },
  {
    "id": "q_tense_conjugation_084",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "The mobile timekeeping app _____ a stable internet connection to sync attendance data in real-time.",
    "options": [
      { "key": "A", "text": "require" },
      { "key": "B", "text": "requiring" },
      { "key": "C", "text": "is required" },
      { "key": "D", "text": "requires" }
    ],
    "correct_answer": "D",
    "hint": "Để diễn tả một yêu cầu kỹ thuật, một tính năng cố định hay sự thật hiển nhiên của ứng dụng, ta dùng thì Hiện tại đơn.",
    "explanation": "Chính xác. Chủ ngữ 'The mobile timekeeping app' là số ít, do đó động từ chủ động 'require' phải thêm 's' thành 'requires'.",
    "translation": "Ứng dụng chấm công trên thiết bị di động yêu cầu một kết nối internet ổn định để đồng bộ hóa dữ liệu điểm danh theo thời gian thực."
  },
  {
    "id": "q_tense_conjugation_085",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "Before she started her popular TikTok channel, Ms. Lin _____ as an English teacher at a local high school for five years.",
    "options": [
      { "key": "A", "text": "works" },
      { "key": "B", "text": "has worked" },
      { "key": "C", "text": "had worked" },
      { "key": "D", "text": "is working" }
    ],
    "correct_answer": "C",
    "hint": "Hành động làm giáo viên đã xảy ra và kéo dài (for five years) TRƯỚC một hành động khác trong quá khứ 'started' (bắt đầu).",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had worked' diễn tả một hành động đã diễn ra và hoàn tất trước một mốc thời gian trong quá khứ.",
    "translation": "Trước khi bắt đầu kênh TikTok nổi tiếng của mình, cô Lin đã từng làm giáo viên tiếng Anh tại một trường trung học địa phương trong năm năm."
  },
  {
    "id": "q_tense_conjugation_086",
    "part": 5,
    "grammar_topic": "Conditionals (Type 1)",
    "difficulty_level": "Easy",
    "question_text": "If a user _____ their password, the HR system will automatically send a password reset link to their registered email.",
    "options": [
      { "key": "A", "text": "forgot" },
      { "key": "B", "text": "forgets" },
      { "key": "C", "text": "will forget" },
      { "key": "D", "text": "forgetting" }
    ],
    "correct_answer": "B",
    "hint": "Câu điều kiện loại 1 (sự việc có thể xảy ra ở hiện tại/tương lai). Mệnh đề If dùng thì Hiện tại đơn, mệnh đề chính dùng Tương lai đơn (will send).",
    "explanation": "Chính xác. Động từ ở mệnh đề If chia ở hiện tại đơn 'forgets' đi với chủ ngữ số ít 'a user'.",
    "translation": "Nếu người dùng quên mật khẩu, hệ thống nhân sự sẽ tự động gửi một liên kết đặt lại mật khẩu đến email đã đăng ký của họ."
  },
  {
    "id": "q_tense_conjugation_087",
    "part": 5,
    "grammar_topic": "Future Perfect",
    "difficulty_level": "Hard",
    "question_text": "By the time the new school term begins, we _____ all the advanced grammar lessons to the EduKit platform.",
    "options": [
      { "key": "A", "text": "will have added" },
      { "key": "B", "text": "will add" },
      { "key": "C", "text": "add" },
      { "key": "D", "text": "have added" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'By the time + Hiện tại đơn (begins)' báo hiệu mệnh đề chính phải được chia ở thì Tương lai hoàn thành.",
    "explanation": "Chính xác. Tương lai hoàn thành 'will have added' dự báo một hành động sẽ hoàn tất tính đến trước một thời điểm ở tương lai.",
    "translation": "Tính đến lúc học kỳ mới bắt đầu, chúng tôi sẽ đã thêm tất cả các bài học ngữ pháp nâng cao vào nền tảng EduKit."
  },
  {
    "id": "q_tense_conjugation_088",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Perfect)",
    "difficulty_level": "Medium",
    "question_text": "The terms of service for the mobile application _____ to include new data privacy regulations recently.",
    "options": [
      { "key": "A", "text": "has revised" },
      { "key": "B", "text": "have been revised" },
      { "key": "C", "text": "were revising" },
      { "key": "D", "text": "have revised" }
    ],
    "correct_answer": "B",
    "hint": "Chủ ngữ là 'The terms' (Điều khoản - số nhiều) không tự sửa đổi mà phải 'được sửa đổi' (bị động). 'Recently' yêu cầu Hiện tại hoàn thành.",
    "explanation": "Chính xác. Thể bị động của Hiện tại hoàn thành với chủ ngữ số nhiều là 'have been revised'.",
    "translation": "Các điều khoản dịch vụ cho ứng dụng di động gần đây đã được sửa đổi để bao gồm các quy định mới về bảo mật dữ liệu."
  },
  {
    "id": "q_tense_conjugation_089",
    "part": 5,
    "grammar_topic": "Past Continuous",
    "difficulty_level": "Medium",
    "question_text": "The creative team _____ the new eco-friendly Happy Box designs when the client called to request a meeting.",
    "options": [
      { "key": "A", "text": "was discussing" },
      { "key": "B", "text": "discusses" },
      { "key": "C", "text": "has discussed" },
      { "key": "D", "text": "discussed" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc hành động đang diễn ra (Quá khứ tiếp diễn) thì có hành động khác cắt ngang (called - Quá khứ đơn).",
    "explanation": "Chính xác. 'Was discussing' miêu tả hành động đang diễn ra dang dở của nhóm sáng tạo thì bị cuộc gọi của khách hàng cắt ngang.",
    "translation": "Nhóm sáng tạo đang thảo luận về các thiết kế Happy Box thân thiện với môi trường mới thì khách hàng gọi điện yêu cầu một cuộc họp."
  },
  {
    "id": "q_tense_conjugation_090",
    "part": 5,
    "grammar_topic": "Future Simple (Time Clause)",
    "difficulty_level": "Hard",
    "question_text": "As soon as the HR manager _____ the weekly timesheets, the payroll software will process the payments.",
    "options": [
      { "key": "A", "text": "will approve" },
      { "key": "B", "text": "approving" },
      { "key": "C", "text": "approves" },
      { "key": "D", "text": "approved" }
    ],
    "correct_answer": "C",
    "hint": "Mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng 'As soon as' mang ý nghĩa tương lai bắt buộc phải dùng thì Hiện tại đơn.",
    "explanation": "Chính xác. Động từ 'approves' chia ở Hiện tại đơn là đáp án đúng, mặc dù toàn bộ câu diễn tả một quy trình sẽ xảy ra trong tương lai.",
    "translation": "Ngay khi người quản lý nhân sự phê duyệt các bảng chấm công hàng tuần, phần mềm tính lương sẽ xử lý các khoản thanh toán."
  },
  {
    "id": "q_tense_conjugation_091",
    "part": 5,
    "grammar_topic": "Future Simple",
    "difficulty_level": "Easy",
    "question_text": "We assure you that we _____ the 500 custom corporate gift boxes to your Tokyo office by tomorrow afternoon.",
    "options": [
      { "key": "A", "text": "deliver" },
      { "key": "B", "text": "will deliver" },
      { "key": "C", "text": "delivered" },
      { "key": "D", "text": "are delivered" }
    ],
    "correct_answer": "B",
    "hint": "Động từ 'assure' (đảm bảo) thường đi kèm với một lời hứa hẹn sẽ thực hiện trong tương lai ('will + V').",
    "explanation": "Chính xác. Thì Tương lai đơn 'will deliver' thể hiện một lời hứa hoặc cam kết chắc chắn từ phía công ty đối với khách hàng.",
    "translation": "Chúng tôi đảm bảo với bạn rằng chúng tôi sẽ giao 500 hộp quà tặng doanh nghiệp tùy chỉnh đến văn phòng Tokyo của bạn trước chiều ngày mai."
  },
  {
    "id": "q_tense_conjugation_092",
    "part": 5,
    "grammar_topic": "Present Continuous",
    "difficulty_level": "Medium",
    "question_text": "The number of active users on the PrepMaster application _____ rapidly this month due to the new interactive features.",
    "options": [
      { "key": "A", "text": "is growing" },
      { "key": "B", "text": "grows" },
      { "key": "C", "text": "has grown" },
      { "key": "D", "text": "are growing" }
    ],
    "correct_answer": "A",
    "hint": "Cụm 'this month' (tháng này) kết hợp với trạng từ 'rapidly' chỉ một xu hướng, một sự thay đổi đang diễn ra ngay trong hiện tại.",
    "explanation": "Chính xác. Thì Hiện tại tiếp diễn 'is growing' là lựa chọn tốt nhất để mô tả một quá trình tăng trưởng đang tiếp diễn. Chú ý: 'The number' là chủ ngữ số ít.",
    "translation": "Số lượng người dùng hoạt động trên ứng dụng PrepMaster đang tăng lên nhanh chóng trong tháng này nhờ các tính năng tương tác mới."
  },
  {
    "id": "q_tense_conjugation_093",
    "part": 5,
    "grammar_topic": "Past Simple",
    "difficulty_level": "Easy",
    "question_text": "The front-end developer _____ the display bug on the HR portal yesterday before logging off for the day.",
    "options": [
      { "key": "A", "text": "fixes" },
      { "key": "B", "text": "is fixing" },
      { "key": "C", "text": "has fixed" },
      { "key": "D", "text": "fixed" }
    ],
    "correct_answer": "D",
    "hint": "Trạng từ thời gian 'yesterday' xác định một hành động đã hoàn tất trong quá khứ.",
    "explanation": "Chính xác. Thì Quá khứ đơn 'fixed' (đã sửa) là đáp án đúng cho một sự việc đã xảy ra và kết thúc.",
    "translation": "Lập trình viên front-end đã sửa lỗi hiển thị trên cổng thông tin nhân sự vào ngày hôm qua trước khi đăng xuất nghỉ làm."
  },
  {
    "id": "q_tense_conjugation_094",
    "part": 5,
    "grammar_topic": "Future Perfect (Passive)",
    "difficulty_level": "Hard",
    "question_text": "By the end of next month, the integration of the mobile app with the cloud server _____.",
    "options": [
      { "key": "A", "text": "will complete" },
      { "key": "B", "text": "will be completing" },
      { "key": "C", "text": "will have been completed" },
      { "key": "D", "text": "has completed" }
    ],
    "correct_answer": "C",
    "hint": "Cụm 'By the end of next month' yêu cầu Tương lai hoàn thành. Chủ ngữ 'the integration' (sự tích hợp) phải mang nghĩa bị động.",
    "explanation": "Chính xác. Câu cần chia ở thể bị động của thì Tương lai hoàn thành (will have been + V3/ed) để chỉ một quá trình sẽ được hoàn tất.",
    "translation": "Tính đến cuối tháng tới, việc tích hợp ứng dụng di động với máy chủ đám mây sẽ được hoàn thành."
  },
  {
    "id": "q_tense_conjugation_095",
    "part": 5,
    "grammar_topic": "Conditionals (Type 2)",
    "difficulty_level": "Hard",
    "question_text": "If our team _____ more time, we would add several more JLPT mock tests to the upcoming update.",
    "options": [
      { "key": "A", "text": "has" },
      { "key": "B", "text": "have" },
      { "key": "C", "text": "had" },
      { "key": "D", "text": "will have" }
    ],
    "correct_answer": "C",
    "hint": "Mệnh đề chính dùng 'would add' cho thấy đây là câu điều kiện loại 2 (trái với thực tế hiện tại). Mệnh đề If phải dùng thì Quá khứ đơn.",
    "explanation": "Chính xác. Động từ trong mệnh đề If của câu điều kiện loại 2 được chia ở thì Quá khứ đơn 'had'.",
    "translation": "Nếu nhóm của chúng tôi có nhiều thời gian hơn, chúng tôi sẽ thêm một vài bài thi thử JLPT nữa vào bản cập nhật sắp tới."
  },
  {
    "id": "q_tense_conjugation_096",
    "part": 5,
    "grammar_topic": "Present Perfect",
    "difficulty_level": "Easy",
    "question_text": "The new English learning app _____ already _____ over 10,000 active users since its official launch last week.",
    "options": [
      { "key": "A", "text": "has / gained" },
      { "key": "B", "text": "have / gained" },
      { "key": "C", "text": "is / gaining" },
      { "key": "D", "text": "was / gaining" }
    ],
    "correct_answer": "A",
    "hint": "Cấu trúc 'since + mốc thời gian quá khứ' và trạng từ 'already' (đã... rồi) bắt buộc phải dùng thì Hiện tại hoàn thành.",
    "explanation": "Chính xác. Thì Hiện tại hoàn thành 'has gained' (với chủ ngữ số ít 'app') diễn tả một thành tựu đã đạt được kéo dài tới hiện tại.",
    "translation": "Ứng dụng học tiếng Anh mới đã thu hút được hơn 10.000 người dùng hoạt động kể từ khi ra mắt chính thức vào tuần trước."
  },
  {
    "id": "q_tense_conjugation_097",
    "part": 5,
    "grammar_topic": "Past Perfect",
    "difficulty_level": "Medium",
    "question_text": "The developers noticed that the main server _____ before they could safely back up the employee attendance data.",
    "options": [
      { "key": "A", "text": "crashes" },
      { "key": "B", "text": "has crashed" },
      { "key": "C", "text": "had crashed" },
      { "key": "D", "text": "is crashing" }
    ],
    "correct_answer": "C",
    "hint": "Việc máy chủ bị sập (crash) đã xảy ra TRƯỚC một thời điểm khác trong quá khứ là 'noticed' (nhận ra) và 'could safely back up'.",
    "explanation": "Chính xác. Thì Quá khứ hoàn thành 'had crashed' miêu tả một sự việc đã xảy ra và hoàn tất trước một sự kiện khác trong quá khứ.",
    "translation": "Các lập trình viên nhận thấy rằng máy chủ chính đã bị sập trước khi họ có thể sao lưu dữ liệu điểm danh của nhân viên một cách an toàn."
  },
  {
    "id": "q_tense_conjugation_098",
    "part": 5,
    "grammar_topic": "Passive Voice (Present Continuous)",
    "difficulty_level": "Medium",
    "question_text": "The new React-based HR portal is currently _____ by a group of beta users to identify any potential bugs.",
    "options": [
      { "key": "A", "text": "testing" },
      { "key": "B", "text": "tests" },
      { "key": "C", "text": "being tested" },
      { "key": "D", "text": "tested" }
    ],
    "correct_answer": "C",
    "hint": "Có to be 'is', có trạng từ 'currently' -> Hiện tại tiếp diễn. Cổng thông tin 'portal' phải 'được kiểm tra' (bị động).",
    "explanation": "Chính xác. Câu này yêu cầu thể bị động của thì Hiện tại tiếp diễn 'is currently being tested' (hiện đang được kiểm tra).",
    "translation": "Cổng thông tin nhân sự dựa trên React mới hiện đang được một nhóm người dùng thử nghiệm kiểm tra để xác định bất kỳ lỗi tiềm ẩn nào."
  },
  {
    "id": "q_tense_conjugation_099",
    "part": 5,
    "grammar_topic": "Future Continuous",
    "difficulty_level": "Medium",
    "question_text": "At this exact time next week, the entire team _____ the successful launch of the EduKit application at the company headquarters.",
    "options": [
      { "key": "A", "text": "celebrates" },
      { "key": "B", "text": "will be celebrating" },
      { "key": "C", "text": "celebrated" },
      { "key": "D", "text": "has celebrated" }
    ],
    "correct_answer": "B",
    "hint": "Dấu hiệu 'At this exact time next week' chỉ một hành động sẽ ĐANG DIỄN RA tại một thời điểm rất cụ thể ở tương lai.",
    "explanation": "Chính xác. Thì Tương lai tiếp diễn 'will be celebrating' được dùng để phác họa khung cảnh ăn mừng đang diễn ra vào tuần tới.",
    "translation": "Vào đúng thời điểm này tuần tới, toàn bộ nhóm sẽ đang ăn mừng sự ra mắt thành công của ứng dụng EduKit tại trụ sở công ty."
  },
  {
    "id": "q_tense_conjugation_100",
    "part": 5,
    "grammar_topic": "Present Simple",
    "difficulty_level": "Easy",
    "question_text": "Each custom Happy Box _____ completely eco-friendly packaging materials to align with the company's sustainability goals.",
    "options": [
      { "key": "A", "text": "contain" },
      { "key": "B", "text": "is contained" },
      { "key": "C", "text": "contains" },
      { "key": "D", "text": "containing" }
    ],
    "correct_answer": "C",
    "hint": "Để diễn tả một sự thật hiển nhiên, đặc điểm cấu tạo của sản phẩm, ta dùng Hiện tại đơn chủ động.",
    "explanation": "Chính xác. Chủ ngữ 'Each custom Happy Box' (Mỗi hộp...) là số ít, do đó động từ chủ động 'contain' (chứa đựng) phải thêm 's'.",
    "translation": "Mỗi hộp Happy Box tùy chỉnh đều chứa các vật liệu đóng gói hoàn toàn thân thiện với môi trường để phù hợp với các mục tiêu phát triển bền vững của công ty."
  }
];

export const TENSES = {
  easy: TENSES_EASY,
  medium: [],
  hard: []
};

// MAPPING THE NEW ROADMAP IDS DIRECTLY TO EXERCISES
export const QUIZ_TASKS = {
  "w1-d6-t1": {
    total: 10,
    questions: TENSES
  },
  "w1-d5-t1": {
    total: 10,
    questions: PARTS_OF_SPEECH
  },
  "w1-d4-t3": {
    total: 10,
    questions: SV_AGREEMENT
  },
  "w1-d3-t3": {
    description: "Giải Part 5 & 6 Tính từ & Trạng từ",
    total: 10,
    questions: {
      easy: [
        {
          "id": "q_adj_adv_001",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "The new user interface for the EduKit application seems _____ for primary school students to navigate.",
          "options": [
            { "key": "A", "text": "intuitive" },
            { "key": "B", "text": "intuitively" },
            { "key": "C", "text": "intuition" },
            { "key": "D", "text": "intuitiveness" }
          ],
          "correct_answer": "A",
          "hint": "Đứng sau các động từ liên kết (linking verbs) như 'seem, look, appear, feel, become', chúng ta luôn cần một tính từ để miêu tả chủ ngữ.",
          "explanation": "Chính xác. Động từ 'seems' (dường như/có vẻ) yêu cầu một tính từ theo sau. 'Intuitive' (dễ hiểu, trực quan) miêu tả giao diện người dùng mới.",
          "translation": "Giao diện người dùng mới của ứng dụng EduKit có vẻ trực quan để học sinh tiểu học có thể điều hướng."
        },
        {
          "id": "q_adj_adv_002",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The mobile timekeeping application _____ syncs employee data to the cloud server every five minutes.",
          "options": [
            { "key": "A", "text": "automatic" },
            { "key": "B", "text": "automate" },
            { "key": "C", "text": "automatically" },
            { "key": "D", "text": "automation" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống nằm giữa chủ ngữ (application) và động từ chính (syncs), cần một từ loại để bổ nghĩa cho động từ đó.",
          "explanation": "Chính xác. Trạng từ 'automatically' (một cách tự động) bổ nghĩa cho động từ thường 'syncs' (đồng bộ).",
          "translation": "Ứng dụng chấm công trên thiết bị di động tự động đồng bộ hóa dữ liệu nhân viên lên máy chủ đám mây mỗi năm phút một lần."
        },
        {
          "id": "q_adj_adv_003",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Happy Box’s premium corporate gifts have become _____ popular among international clients this year.",
          "options": [
            { "key": "A", "text": "extreme" },
            { "key": "B", "text": "extremely" },
            { "key": "C", "text": "extremity" },
            { "key": "D", "text": "extremes" }
          ],
          "correct_answer": "B",
          "hint": "Trước một tính từ ('popular') chúng ta cần một trạng từ chỉ mức độ để bổ nghĩa cho tính từ đó.",
          "explanation": "Chính xác. Trạng từ 'extremely' (cực kỳ) đứng trước tính từ 'popular' để tăng cường mức độ cho tính từ này.",
          "translation": "Các món quà tặng doanh nghiệp cao cấp của Happy Box đã trở nên cực kỳ phổ biến đối với các khách hàng quốc tế trong năm nay."
        },
        {
          "id": "q_adj_adv_004",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The PrepMaster platform offers a _____ review of all grammar points required for the TOEIC exam.",
          "options": [
            { "key": "A", "text": "comprehension" },
            { "key": "B", "text": "comprehend" },
            { "key": "C", "text": "comprehensively" },
            { "key": "D", "text": "comprehensive" }
          ],
          "correct_answer": "D",
          "hint": "Nằm giữa mạo từ 'a' và danh từ 'review', chỗ trống chắc chắn phải là một tính từ.",
          "explanation": "Chính xác. Tính từ 'comprehensive' (toàn diện/đầy đủ) đứng trước danh từ 'review' để tạo thành cụm danh từ 'một bài ôn tập toàn diện'.",
          "translation": "Nền tảng PrepMaster cung cấp một bài ôn tập toàn diện về tất cả các điểm ngữ pháp cần thiết cho kỳ thi TOEIC."
        },
        {
          "id": "q_adj_adv_005",
          "part": 5,
          "grammar_topic": "Adjective (Comparative)",
          "difficulty_level": "Easy",
          "question_text": "Following the latest update, the HR management website loads much _____ than the previous version.",
          "options": [
            { "key": "A", "text": "fast" },
            { "key": "B", "text": "faster" },
            { "key": "C", "text": "fastest" },
            { "key": "D", "text": "fastly" }
          ],
          "correct_answer": "B",
          "hint": "Từ 'than' là dấu hiệu của cấu trúc so sánh hơn. Lưu ý: 'fast' vừa là tính từ vừa là trạng từ, không có từ 'fastly'.",
          "explanation": "Chính xác. Trạng từ so sánh hơn 'faster' (nhanh hơn) đi với 'than'. Cụm 'much faster' dùng để nhấn mạnh mức độ nhanh hơn rất nhiều.",
          "translation": "Sau bản cập nhật mới nhất, trang web quản lý nhân sự tải nhanh hơn nhiều so với phiên bản trước."
        },
        {
          "id": "q_verb_tense_006",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "_____, the IT team managed to restore the server before the start of the workday, preventing any data loss.",
          "options": [
            { "key": "A", "text": "Fortunate" },
            { "key": "B", "text": "Fortunately" },
            { "key": "C", "text": "Fortune" },
            { "key": "D", "text": "Fortunateness" }
          ],
          "correct_answer": "B",
          "hint": "Đứng ở đầu câu, ngăn cách với mệnh đề chính bằng dấu phẩy, ta cần một trạng từ để bổ nghĩa cho toàn bộ câu.",
          "explanation": "Chính xác. Trạng từ 'Fortunately' (Thật may mắn) bổ nghĩa cho cả sự việc nhóm IT đã khôi phục được máy chủ.",
          "translation": "Thật may mắn, đội ngũ CNTT đã xoay sở để khôi phục máy chủ trước khi ngày làm việc bắt đầu, ngăn chặn mọi sự cố mất dữ liệu."
        },
        {
          "id": "q_adj_adv_007",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "Users find the daily English speaking videos on Ms. Lin's TikTok channel highly _____.",
          "options": [
            { "key": "A", "text": "engage" },
            { "key": "B", "text": "engagingly" },
            { "key": "C", "text": "engaging" },
            { "key": "D", "text": "engagement" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc: Find + something (tân ngữ) + [Tính từ] (Cảm thấy cái gì đó như thế nào). 'Highly' là trạng từ bổ nghĩa cho tính từ cần điền.",
          "explanation": "Chính xác. Tính từ 'engaging' (thu hút/hấp dẫn) đứng sau tân ngữ 'videos' để miêu tả tính chất của những video này.",
          "translation": "Người dùng cảm thấy các video nói tiếng Anh hàng ngày trên kênh TikTok của cô Lin cực kỳ thu hút."
        },
        {
          "id": "q_adj_adv_008",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Each custom Happy Box is _____ inspected by the quality control team to ensure the highest standards.",
          "options": [
            { "key": "A", "text": "careful" },
            { "key": "B", "text": "carefully" },
            { "key": "C", "text": "care" },
            { "key": "D", "text": "cares" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống nằm giữa to be 'is' và động từ phân từ 2 'inspected'. Cần một trạng từ để bổ nghĩa cho động từ bị động này.",
          "explanation": "Chính xác. Trạng từ 'carefully' (một cách cẩn thận) bổ nghĩa cho hành động 'inspected' (được kiểm tra).",
          "translation": "Mỗi chiếc Happy Box tùy chỉnh đều được kiểm tra cẩn thận bởi đội kiểm soát chất lượng để đảm bảo các tiêu chuẩn cao nhất."
        },
        {
          "id": "q_adj_adv_009",
          "part": 5,
          "grammar_topic": "Adverb vs Adjective",
          "difficulty_level": "Hard",
          "question_text": "The development team worked _____ all night to fix the critical bugs before the EduKit app launch.",
          "options": [
            { "key": "A", "text": "hard" },
            { "key": "B", "text": "hardly" },
            { "key": "C", "text": "hardness" },
            { "key": "D", "text": "harden" }
          ],
          "correct_answer": "A",
          "hint": "Cần trạng từ bổ nghĩa cho 'worked'. Chú ý: 'hard' vừa là tính từ vừa là trạng từ (chăm chỉ/vất vả). 'Hardly' mang nghĩa hoàn toàn khác (hiếm khi/hầu như không).",
          "explanation": "Chính xác. Trạng từ 'hard' bổ nghĩa cho 'worked' mang nghĩa làm việc chăm chỉ/vất vả. Nếu chọn 'hardly', câu sẽ mang nghĩa 'hầu như không làm việc', sai logic.",
          "translation": "Nhóm phát triển đã làm việc chăm chỉ suốt đêm để sửa các lỗi nghiêm trọng trước khi ra mắt ứng dụng EduKit."
        },
        {
          "id": "q_adj_adv_010",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "To maintain high user engagement, the timekeeping app _____ sends push notifications reminding staff to log their hours.",
          "options": [
            { "key": "A", "text": "regular" },
            { "key": "B", "text": "regularly" },
            { "key": "C", "text": "regularity" },
            { "key": "D", "text": "regularize" }
          ],
          "correct_answer": "B",
          "hint": "Cần một trạng từ đứng trước động từ chính 'sends' để bổ nghĩa cho hành động gửi thông báo.",
          "explanation": "Chính xác. Trạng từ 'regularly' (một cách thường xuyên/đều đặn) bổ nghĩa cho động từ 'sends'.",
          "translation": "Để duy trì sự tương tác cao của người dùng, ứng dụng chấm công thường xuyên gửi thông báo đẩy nhắc nhở nhân viên ghi lại giờ làm việc của họ."
        },
        {
          "id": "q_adj_adv_011",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "A _____ analysis of the timekeeping data revealed several inefficiencies in the company's workflow.",
          "options": [
            { "key": "A", "text": "detail" },
            { "key": "B", "text": "detailed" },
            { "key": "C", "text": "detailing" },
            { "key": "D", "text": "details" }
          ],
          "correct_answer": "B",
          "hint": "Cần một tính từ đứng trước danh từ 'analysis' để bổ nghĩa cho nó. Tính từ dạng V-ed/V-ing thường được sử dụng.",
          "explanation": "Chính xác. Tính từ 'detailed' (chi tiết/được trình bày cặn kẽ) đứng trước danh từ 'analysis' tạo thành cụm 'a detailed analysis' (một phân tích chi tiết).",
          "translation": "Một phân tích chi tiết về dữ liệu chấm công đã tiết lộ một số điểm kém hiệu quả trong quy trình làm việc của công ty."
        },
        {
          "id": "q_adj_adv_012",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The grammar explanations in the new JLPT N3 mock test are _____ clear and easy to understand.",
          "options": [
            { "key": "A", "text": "perfect" },
            { "key": "B", "text": "perfectly" },
            { "key": "C", "text": "perfection" },
            { "key": "D", "text": "perfects" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống đứng trước tính từ 'clear', do đó ta cần một trạng từ để bổ nghĩa về mặt mức độ cho tính từ này.",
          "explanation": "Chính xác. Trạng từ 'perfectly' (một cách hoàn hảo/hoàn toàn) bổ nghĩa cho tính từ 'clear' (rõ ràng).",
          "translation": "Các phần giải thích ngữ pháp trong bài thi thử JLPT N3 mới hoàn toàn rõ ràng và dễ hiểu."
        },
        {
          "id": "q_adj_adv_013",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Due to _____ weather conditions, the delivery of the corporate gift boxes was delayed by two days.",
          "options": [
            { "key": "A", "text": "severely" },
            { "key": "B", "text": "severe" },
            { "key": "C", "text": "severity" },
            { "key": "D", "text": "severest" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước danh từ ghép 'weather conditions' (điều kiện thời tiết), ta cần một tính từ để miêu tả tính chất.",
          "explanation": "Chính xác. Tính từ 'severe' (khắc nghiệt/nghiêm trọng) bổ nghĩa cho danh từ phía sau.",
          "translation": "Do điều kiện thời tiết khắc nghiệt, việc giao các hộp quà tặng doanh nghiệp đã bị hoãn lại hai ngày."
        },
        {
          "id": "q_adj_adv_014",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The creator speaks English _____ and naturally in all her educational TikTok videos.",
          "options": [
            { "key": "A", "text": "fluent" },
            { "key": "B", "text": "fluency" },
            { "key": "C", "text": "fluently" },
            { "key": "D", "text": "fluents" }
          ],
          "correct_answer": "C",
          "hint": "Cần một trạng từ bổ nghĩa cho động từ 'speaks'. Lưu ý liên từ 'and' nối hai từ cùng từ loại (naturally là trạng từ).",
          "explanation": "Chính xác. Trạng từ 'fluently' (trôi chảy) đứng sau tân ngữ 'English' để bổ nghĩa cho động từ 'speaks'. Cấu trúc song song: fluently and naturally.",
          "translation": "Nhà sáng tạo nói tiếng Anh một cách trôi chảy và tự nhiên trong tất cả các video TikTok giáo dục của cô ấy."
        },
        {
          "id": "q_adj_adv_015",
          "part": 5,
          "grammar_topic": "Adverb (Comparative)",
          "difficulty_level": "Hard",
          "question_text": "The new server infrastructure processes concurrent user requests _____ than the previous setup did.",
          "options": [
            { "key": "A", "text": "efficient" },
            { "key": "B", "text": "efficiently" },
            { "key": "C", "text": "more efficiently" },
            { "key": "D", "text": "most efficiently" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'processes' cần một trạng từ bổ nghĩa. Từ 'than' báo hiệu cấu trúc so sánh hơn của trạng từ dài.",
          "explanation": "Chính xác. Dạng so sánh hơn của trạng từ 'efficiently' là 'more efficiently' (hiệu quả hơn).",
          "translation": "Cơ sở hạ tầng máy chủ mới xử lý các yêu cầu đồng thời của người dùng hiệu quả hơn so với thiết lập trước đó."
        },
        {
          "id": "q_adj_adv_016",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The eco-friendly packaging for the new Happy Box line looks incredibly _____ to potential buyers.",
          "options": [
            { "key": "A", "text": "attract" },
            { "key": "B", "text": "attraction" },
            { "key": "C", "text": "attractively" },
            { "key": "D", "text": "attractive" }
          ],
          "correct_answer": "D",
          "hint": "Động từ giác quan 'looks' (trông có vẻ) yêu cầu một tính từ theo sau, bất chấp việc có trạng từ 'incredibly' xen giữa.",
          "explanation": "Chính xác. Tính từ 'attractive' (thu hút/hấp dẫn) đứng sau động từ liên kết 'looks' để miêu tả vẻ ngoài của bao bì. Trạng từ 'incredibly' chỉ bổ nghĩa mức độ cho tính từ này.",
          "translation": "Bao bì thân thiện với môi trường cho dòng sản phẩm Happy Box mới trông cực kỳ hấp dẫn đối với những người mua tiềm năng."
        },
        {
          "id": "q_adj_adv_017",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "Any technical issues with the PrepMaster platform are _____ resolved by our 24/7 support team.",
          "options": [
            { "key": "A", "text": "prompt" },
            { "key": "B", "text": "promptly" },
            { "key": "C", "text": "promptness" },
            { "key": "D", "text": "prompting" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống nằm giữa trợ động từ to be (are) và động từ phân từ 2 (resolved), ta cần trạng từ để bổ nghĩa cho động từ.",
          "explanation": "Chính xác. Trạng từ 'promptly' (một cách nhanh chóng/kịp thời) bổ nghĩa cho hành động 'được giải quyết' (are resolved).",
          "translation": "Mọi sự cố kỹ thuật với nền tảng PrepMaster đều được đội ngũ hỗ trợ 24/7 của chúng tôi giải quyết một cách nhanh chóng."
        },
        {
          "id": "q_adj_adv_018",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Hard",
          "question_text": "Several employees submitted their monthly attendance records _____ because they forgot their login passwords.",
          "options": [
            { "key": "A", "text": "late" },
            { "key": "B", "text": "lately" },
            { "key": "C", "text": "lateness" },
            { "key": "D", "text": "latest" }
          ],
          "correct_answer": "A",
          "hint": "'Late' vừa là tính từ vừa là trạng từ mang nghĩa 'trễ/muộn'. Trong khi đó, 'Lately' mang một nghĩa hoàn toàn khác là 'gần đây' (đồng nghĩa với recently).",
          "explanation": "Chính xác. Trạng từ 'late' bổ nghĩa cho động từ 'submitted', diễn tả hành động nộp muộn. Nếu dùng 'lately' thì câu sẽ có nghĩa là 'nộp gần đây', không phù hợp với ngữ cảnh 'vì quên mật khẩu'.",
          "translation": "Một vài nhân viên đã nộp hồ sơ điểm danh hàng tháng muộn bởi vì họ quên mật khẩu đăng nhập."
        },
        {
          "id": "q_adj_adv_019",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "We need to develop a more _____ approach to market the English learning app to university students.",
          "options": [
            { "key": "A", "text": "create" },
            { "key": "B", "text": "creation" },
            { "key": "C", "text": "creatively" },
            { "key": "D", "text": "creative" }
          ],
          "correct_answer": "D",
          "hint": "Giữa mạo từ 'a' (kèm trạng từ so sánh 'more') và danh từ 'approach', chúng ta cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'creative' (sáng tạo) kết hợp với danh từ 'approach' tạo thành cụm từ 'một cách tiếp cận sáng tạo hơn'.",
          "translation": "Chúng ta cần phát triển một cách tiếp cận sáng tạo hơn để tiếp thị ứng dụng học tiếng Anh tới sinh viên đại học."
        },
        {
          "id": "q_adj_adv_020",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The board of directors _____ approved the budget for the upcoming HR software upgrade.",
          "options": [
            { "key": "A", "text": "unanimous" },
            { "key": "B", "text": "unanimously" },
            { "key": "C", "text": "unanimity" },
            { "key": "D", "text": "unanimousness" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống nằm ngay trước động từ chính 'approved', cần một trạng từ để bổ nghĩa cho cách thức của hành động đó.",
          "explanation": "Chính xác. Trạng từ 'unanimously' (nhất trí/đồng lòng) miêu tả cách hội đồng quản trị phê duyệt ngân sách.",
          "translation": "Hội đồng quản trị đã nhất trí phê duyệt ngân sách cho đợt nâng cấp phần mềm nhân sự sắp tới."
        },
        {
          "id": "q_adj_adv_021",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The EduKit app is _____ updated to ensure all TOEIC practice materials reflect the latest test format.",
          "options": [
            { "key": "A", "text": "frequent" },
            { "key": "B", "text": "frequency" },
            { "key": "C", "text": "frequently" },
            { "key": "D", "text": "frequents" }
          ],
          "correct_answer": "C",
          "hint": "Cần một trạng từ đứng giữa to be (is) và động từ phân từ hai (updated) để bổ nghĩa cho tần suất của hành động cập nhật.",
          "explanation": "Chính xác. Trạng từ 'frequently' (một cách thường xuyên) bổ nghĩa cho động từ bị động 'updated'.",
          "translation": "Ứng dụng EduKit được cập nhật thường xuyên để đảm bảo tất cả các tài liệu luyện thi TOEIC phản ánh định dạng bài thi mới nhất."
        },
        {
          "id": "q_adj_adv_022",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "To keep the gift items _____ during transit, we use specially designed shock-absorbing packaging.",
          "options": [
            { "key": "A", "text": "safe" },
            { "key": "B", "text": "safely" },
            { "key": "C", "text": "safety" },
            { "key": "D", "text": "safeness" }
          ],
          "correct_answer": "A",
          "hint": "Cấu trúc: keep + tân ngữ (the gift items) + Tính từ (giữ cho cái gì đó ở trạng thái như thế nào).",
          "explanation": "Chính xác. Tính từ 'safe' (an toàn) đứng sau tân ngữ để miêu tả trạng thái của các món quà.",
          "translation": "Để giữ cho các món quà được an toàn trong quá trình vận chuyển, chúng tôi sử dụng bao bì chống sốc được thiết kế đặc biệt."
        },
        {
          "id": "q_adj_adv_023",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The new biometric login feature is _____ convenient for employees who often forget their ID cards.",
          "options": [
            { "key": "A", "text": "incredible" },
            { "key": "B", "text": "incredibly" },
            { "key": "C", "text": "incredulity" },
            { "key": "D", "text": "incredulous" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước tính từ 'convenient' (tiện lợi), ta cần một trạng từ để nhấn mạnh mức độ của sự tiện lợi đó.",
          "explanation": "Chính xác. Trạng từ 'incredibly' (cực kỳ/đáng kinh ngạc) bổ nghĩa cho tính từ 'convenient'.",
          "translation": "Tính năng đăng nhập sinh trắc học mới cực kỳ tiện lợi cho những nhân viên thường xuyên quên thẻ ID."
        },
        {
          "id": "q_adj_adv_024",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Providing _____ examples is the best way to help students remember complex English vocabulary.",
          "options": [
            { "key": "A", "text": "specify" },
            { "key": "B", "text": "specifically" },
            { "key": "C", "text": "specification" },
            { "key": "D", "text": "specific" }
          ],
          "correct_answer": "D",
          "hint": "Từ cần điền đứng ngay trước danh từ 'examples' (các ví dụ), do đó nó phải là một tính từ.",
          "explanation": "Chính xác. Tính từ 'specific' (cụ thể) đứng trước bổ nghĩa cho danh từ 'examples' tạo thành cụm 'những ví dụ cụ thể'.",
          "translation": "Việc cung cấp các ví dụ cụ thể là cách tốt nhất để giúp học sinh ghi nhớ từ vựng tiếng Anh phức tạp."
        },
        {
          "id": "q_adj_adv_025",
          "part": 5,
          "grammar_topic": "Adjective (Comparative)",
          "difficulty_level": "Medium",
          "question_text": "The recently launched version of the HR software is significantly _____ than the beta release.",
          "options": [
            { "key": "A", "text": "reliable" },
            { "key": "B", "text": "reliably" },
            { "key": "C", "text": "more reliable" },
            { "key": "D", "text": "most reliable" }
          ],
          "correct_answer": "C",
          "hint": "Từ 'than' là dấu hiệu của so sánh hơn. 'Reliable' là tính từ dài nên phải dùng 'more'. Từ 'significantly' chỉ dùng để nhấn mạnh mức độ so sánh.",
          "explanation": "Chính xác. Cấu trúc so sánh hơn của tính từ dài: more + adj + than. 'More reliable' mang nghĩa đáng tin cậy hơn.",
          "translation": "Phiên bản phần mềm nhân sự mới ra mắt gần đây đáng tin cậy hơn đáng kể so với bản phát hành thử nghiệm."
        },
        {
          "id": "q_adj_adv_026",
          "part": 5,
          "grammar_topic": "Adverb vs Adjective",
          "difficulty_level": "Medium",
          "question_text": "The students performed exceptionally _____ on their JLPT N3 mock exams after using the PrepMaster app for a month.",
          "options": [
            { "key": "A", "text": "good" },
            { "key": "B", "text": "well" },
            { "key": "C", "text": "better" },
            { "key": "D", "text": "best" }
          ],
          "correct_answer": "B",
          "hint": "Cần một trạng từ để bổ nghĩa cho động từ thường 'performed' (thể hiện/làm bài). Trạng từ của 'good' là gì?",
          "explanation": "Chính xác. Trạng từ 'well' (tốt) bổ nghĩa cho động từ 'performed'. 'Good' là tính từ, không thể bổ nghĩa cho động từ thường.",
          "translation": "Các học sinh đã làm bài thi thử JLPT N3 đặc biệt tốt sau khi sử dụng ứng dụng PrepMaster trong một tháng."
        },
        {
          "id": "q_adj_adv_027",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The customized corporate gift boxes looked so _____ that the client immediately ordered 500 more units.",
          "options": [
            { "key": "A", "text": "impress" },
            { "key": "B", "text": "impression" },
            { "key": "C", "text": "impressive" },
            { "key": "D", "text": "impressively" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'looked' (trông có vẻ) là một linking verb. Sau linking verb luôn là một tính từ miêu tả chủ ngữ.",
          "explanation": "Chính xác. Tính từ 'impressive' (ấn tượng) đứng sau 'looked so' để miêu tả vẻ ngoài của những hộp quà.",
          "translation": "Các hộp quà tặng doanh nghiệp tùy chỉnh trông ấn tượng đến mức khách hàng ngay lập tức đặt thêm 500 hộp nữa."
        },
        {
          "id": "q_adj_adv_028",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "Employees must _____ review their timesheets before the end of the month to ensure accurate payroll processing.",
          "options": [
            { "key": "A", "text": "care" },
            { "key": "B", "text": "careful" },
            { "key": "C", "text": "carefully" },
            { "key": "D", "text": "carefulness" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền bổ nghĩa cho hành động 'review' (xem xét). Bạn cần một trạng từ chỉ thể cách (how).",
          "explanation": "Chính xác. Trạng từ 'carefully' (một cách cẩn thận) miêu tả cách thức nhân viên phải xem xét bảng chấm công của họ.",
          "translation": "Nhân viên phải xem xét cẩn thận bảng chấm công của họ trước cuối tháng để đảm bảo việc xử lý bảng lương chính xác."
        },
        {
          "id": "q_adj_adv_029",
          "part": 5,
          "grammar_topic": "Adjective (-ing vs -ed)",
          "difficulty_level": "Hard",
          "question_text": "The daily short videos are very _____, keeping learners motivated to practice speaking English every day.",
          "options": [
            { "key": "A", "text": "entertain" },
            { "key": "B", "text": "entertained" },
            { "key": "C", "text": "entertaining" },
            { "key": "D", "text": "entertainment" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ đuôi '-ing' dùng để miêu tả bản chất/đặc điểm của sự vật (video mang tính giải trí). Tính từ đuôi '-ed' dùng để miêu tả cảm xúc của con người (bị/được giải trí).",
          "explanation": "Chính xác. Tính từ 'entertaining' (mang tính giải trí/thú vị) miêu tả bản chất của các video ngắn này.",
          "translation": "Các video ngắn hàng ngày rất thú vị, giúp người học duy trì động lực để thực hành nói tiếng Anh mỗi ngày."
        },
        {
          "id": "q_adj_adv_030",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The user manual for the new human resources portal is _____ written, making it easy for beginners to follow.",
          "options": [
            { "key": "A", "text": "clear" },
            { "key": "B", "text": "clearly" },
            { "key": "C", "text": "clearness" },
            { "key": "D", "text": "clearing" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước động từ phân từ hai 'written' (được viết) cần một trạng từ để miêu tả cách thức bài viết đó được trình bày.",
          "explanation": "Chính xác. Trạng từ 'clearly' (một cách rõ ràng) bổ nghĩa cho 'written' tạo thành cụm 'được viết một cách rõ ràng'.",
          "translation": "Hướng dẫn sử dụng cho cổng thông tin nhân sự mới được viết rất rõ ràng, giúp người mới bắt đầu dễ dàng làm theo."
        },
        {
          "id": "q_adj_adv_031",
          "part": 5,
          "grammar_topic": "Adjective (Superlative)",
          "difficulty_level": "Medium",
          "question_text": "PrepMaster is currently the _____ educational app in the market for comprehensive TOEIC preparation.",
          "options": [
            { "key": "A", "text": "popular" },
            { "key": "B", "text": "more popular" },
            { "key": "C", "text": "most popular" },
            { "key": "D", "text": "popularly" }
          ],
          "correct_answer": "C",
          "hint": "Mạo từ 'the' đứng trước chỗ trống là dấu hiệu đặc trưng của cấu trúc so sánh nhất đối với tính từ dài.",
          "explanation": "Chính xác. 'Most popular' (phổ biến nhất) hoàn thiện cấu trúc so sánh nhất 'the most + adj' cho tính từ dài.",
          "translation": "PrepMaster hiện là ứng dụng giáo dục phổ biến nhất trên thị trường về luyện thi TOEIC toàn diện."
        },
        {
          "id": "q_adj_adv_032",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "A _____ connection to the internet is required for the timekeeping app to sync data in real-time.",
          "options": [
            { "key": "A", "text": "stable" },
            { "key": "B", "text": "stably" },
            { "key": "C", "text": "stabilize" },
            { "key": "D", "text": "stability" }
          ],
          "correct_answer": "A",
          "hint": "Chỗ trống nằm giữa mạo từ 'A' và danh từ 'connection', nên nó phải là một tính từ.",
          "explanation": "Chính xác. Tính từ 'stable' (ổn định) bổ nghĩa cho danh từ 'connection' tạo thành cụm 'một kết nối ổn định'.",
          "translation": "Cần có một kết nối internet ổn định để ứng dụng chấm công có thể đồng bộ hóa dữ liệu theo thời gian thực."
        },
        {
          "id": "q_adj_adv_033",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "To pass the JLPT N3, candidates must be able to read kanji characters _____ and accurately.",
          "options": [
            { "key": "A", "text": "quick" },
            { "key": "B", "text": "quickly" },
            { "key": "C", "text": "quickness" },
            { "key": "D", "text": "quicker" }
          ],
          "correct_answer": "B",
          "hint": "Liên từ 'and' nối hai từ cùng loại. Từ 'accurately' là trạng từ, nên từ cần điền cũng phải là trạng từ bổ nghĩa cho động từ 'read'.",
          "explanation": "Chính xác. Trạng từ 'quickly' (một cách nhanh chóng) kết hợp với 'accurately' để chỉ cách thức đọc chữ Hán.",
          "translation": "Để vượt qua kỳ thi JLPT N3, các thí sinh phải có khả năng đọc các chữ Hán một cách nhanh chóng và chính xác."
        },
        {
          "id": "q_adj_adv_034",
          "part": 5,
          "grammar_topic": "Adverb (Confusing Adverbs)",
          "difficulty_level": "Hard",
          "question_text": "Because of the heavy rain, the delivery truck could _____ see the road signs while transporting the Happy Box orders.",
          "options": [
            { "key": "A", "text": "hard" },
            { "key": "B", "text": "hardly" },
            { "key": "C", "text": "harder" },
            { "key": "D", "text": "hardest" }
          ],
          "correct_answer": "B",
          "hint": "Ngữ cảnh: Trời mưa rất to nên tài xế 'hầu như không thể' nhìn thấy biển báo. 'Hardly' mang nghĩa là 'hầu như không', còn 'hard' mang nghĩa 'chăm chỉ/khó khăn'.",
          "explanation": "Chính xác. Trạng từ 'hardly' (hầu như không) được dùng để mang ý nghĩa phủ định một phần do thời tiết xấu.",
          "translation": "Do trời mưa to, chiếc xe tải giao hàng hầu như không thể nhìn thấy các biển báo trên đường trong khi vận chuyển các đơn hàng Happy Box."
        },
        {
          "id": "q_adj_adv_035",
          "part": 5,
          "grammar_topic": "Adjective (Participle)",
          "difficulty_level": "Hard",
          "question_text": "We are seeking a highly _____ software engineer to lead the development of our new interactive learning platform.",
          "options": [
            { "key": "A", "text": "motivate" },
            { "key": "B", "text": "motivating" },
            { "key": "C", "text": "motivated" },
            { "key": "D", "text": "motivation" }
          ],
          "correct_answer": "C",
          "hint": "Cần một tính từ đứng trước danh từ chỉ người 'software engineer'. Cụm 'highly motivated' là một cụm từ cố định trong tuyển dụng, mang nghĩa 'có động lực cao/cầu tiến'.",
          "explanation": "Chính xác. Tính từ dạng V-ed 'motivated' (có động lực/nhiệt huyết) được dùng để miêu tả phẩm chất, thái độ của người kỹ sư.",
          "translation": "Chúng tôi đang tìm kiếm một kỹ sư phần mềm có động lực cao để dẫn dắt việc phát triển nền tảng học tập tương tác mới của chúng tôi."
        },
        {
          "id": "q_adj_adv_036",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The transition to the new personnel management system was _____ smooth, thanks to the IT department's preparation.",
          "options": [
            { "key": "A", "text": "surprise" },
            { "key": "B", "text": "surprising" },
            { "key": "C", "text": "surprisingly" },
            { "key": "D", "text": "surprised" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'smooth' (suôn sẻ) đã có mặt để bổ nghĩa cho chủ ngữ. Chúng ta cần một trạng từ đứng trước để nhấn mạnh mức độ của tính từ đó.",
          "explanation": "Chính xác. Trạng từ 'surprisingly' (đáng ngạc nhiên) bổ nghĩa cho tính từ 'smooth', tạo thành cụm 'suôn sẻ một cách đáng ngạc nhiên'.",
          "translation": "Việc chuyển đổi sang hệ thống quản lý nhân sự mới diễn ra suôn sẻ một cách đáng ngạc nhiên, nhờ vào sự chuẩn bị của bộ phận CNTT."
        },
        {
          "id": "q_adj_adv_037",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "It is _____ to practice speaking out loud if you want to improve your English pronunciation.",
          "options": [
            { "key": "A", "text": "essentials" },
            { "key": "B", "text": "essentially" },
            { "key": "C", "text": "essential" },
            { "key": "D", "text": "essence" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc chủ ngữ giả: 'It is + Tính từ + to do something' (Thật là... khi làm việc gì đó).",
          "explanation": "Chính xác. Tính từ 'essential' (cần thiết/thiết yếu) khớp với cấu trúc trên.",
          "translation": "Việc luyện nói thành tiếng là rất cần thiết nếu bạn muốn cải thiện cách phát âm tiếng Anh của mình."
        },
        {
          "id": "q_adj_adv_038",
          "part": 5,
          "grammar_topic": "Adverb (Confusing Adverbs)",
          "difficulty_level": "Hard",
          "question_text": "The adaptive roadmap feature on the PrepMaster app is _____ recommended by top language instructors.",
          "options": [
            { "key": "A", "text": "high" },
            { "key": "B", "text": "highly" },
            { "key": "C", "text": "highest" },
            { "key": "D", "text": "higher" }
          ],
          "correct_answer": "B",
          "hint": "'Highly recommended' là một cụm collocation cố định mang nghĩa 'được đánh giá cao/được khuyên dùng rất nhiều'. 'High' thường chỉ chiều cao vật lý.",
          "explanation": "Chính xác. Trạng từ 'highly' (rất/hết sức) bổ nghĩa cho động từ phân từ hai 'recommended'.",
          "translation": "Tính năng lộ trình thích ứng trên ứng dụng PrepMaster được các giáo viên ngôn ngữ hàng đầu đánh giá rất cao."
        },
        {
          "id": "q_adj_adv_039",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "We offer a _____ range of customization options for corporate clients ordering holiday gift boxes.",
          "options": [
            { "key": "A", "text": "broad" },
            { "key": "B", "text": "broadly" },
            { "key": "C", "text": "broaden" },
            { "key": "D", "text": "broadness" }
          ],
          "correct_answer": "A",
          "hint": "Đứng trước danh từ 'range', bạn cần một tính từ. Cụm 'a broad range of' là một cụm từ cố định mang nghĩa 'một loạt các/sự đa dạng lớn'.",
          "explanation": "Chính xác. Tính từ 'broad' (rộng/đa dạng) tạo thành cụm 'a broad range of' phổ biến trong tiếng Anh kinh doanh.",
          "translation": "Chúng tôi cung cấp một loạt các tùy chọn tùy chỉnh đa dạng cho khách hàng doanh nghiệp khi đặt mua các hộp quà tặng dịp lễ."
        },
        {
          "id": "q_adj_adv_040",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The HR manager _____ requested that all employees update their profile information by Friday.",
          "options": [
            { "key": "A", "text": "formal" },
            { "key": "B", "text": "formalize" },
            { "key": "C", "text": "formality" },
            { "key": "D", "text": "formally" }
          ],
          "correct_answer": "D",
          "hint": "Cần một trạng từ đứng trước động từ 'requested' để miêu tả cách thức đưa ra yêu cầu này.",
          "explanation": "Chính xác. Trạng từ 'formally' (một cách chính thức/trang trọng) bổ nghĩa cho động từ 'requested'.",
          "translation": "Người quản lý nhân sự đã chính thức yêu cầu tất cả nhân viên cập nhật thông tin hồ sơ của họ trước thứ Sáu."
        },
        {
          "id": "q_adj_adv_041",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Before the official release, the QA team tested the mobile timekeeping app _____ to ensure there were no bugs.",
          "options": [
            { "key": "A", "text": "thorough" },
            { "key": "B", "text": "thoroughly" },
            { "key": "C", "text": "thoroughness" },
            { "key": "D", "text": "thoroughly as" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống nằm sau tân ngữ của động từ 'tested', cần một từ để bổ nghĩa cho cách thức kiểm tra (kiểm tra như thế nào?).",
          "explanation": "Chính xác. Trạng từ 'thoroughly' (một cách kỹ lưỡng) bổ nghĩa cho động từ 'tested'.",
          "translation": "Trước khi phát hành chính thức, đội ngũ QA đã kiểm tra ứng dụng chấm công trên thiết bị di động một cách kỹ lưỡng để đảm bảo không có lỗi."
        },
        {
          "id": "q_adj_adv_042",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The new _____ roadmap feature in PrepMaster helps learners adjust their study plans based on their daily progress.",
          "options": [
            { "key": "A", "text": "adapt" },
            { "key": "B", "text": "adaptively" },
            { "key": "C", "text": "adaptation" },
            { "key": "D", "text": "adaptive" }
          ],
          "correct_answer": "D",
          "hint": "Cần một tính từ bổ nghĩa cho cụm danh từ 'roadmap feature' (tính năng lộ trình).",
          "explanation": "Chính xác. Tính từ 'adaptive' (có tính thích ứng) đứng trước danh từ để tạo thành cụm 'tính năng lộ trình thích ứng'.",
          "translation": "Tính năng lộ trình thích ứng mới trong PrepMaster giúp người học điều chỉnh kế hoạch học tập dựa trên tiến độ hàng ngày của họ."
        },
        {
          "id": "q_adj_adv_043",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Hard",
          "question_text": "Sales of the corporate Happy Box packages have been _____ strong this quarter despite the economic downturn.",
          "options": [
            { "key": "A", "text": "surprise" },
            { "key": "B", "text": "surprising" },
            { "key": "C", "text": "surprisingly" },
            { "key": "D", "text": "surprised" }
          ],
          "correct_answer": "C",
          "hint": "Trước tính từ 'strong' (mạnh mẽ), chúng ta cần một trạng từ chỉ mức độ để bổ nghĩa cho tính từ đó.",
          "explanation": "Chính xác. Trạng từ 'surprisingly' (đáng ngạc nhiên) bổ nghĩa cho tính từ 'strong', mang nghĩa 'tăng trưởng mạnh mẽ một cách đáng ngạc nhiên'.",
          "translation": "Doanh số của các gói quà tặng doanh nghiệp Happy Box đã tăng trưởng mạnh mẽ một cách đáng ngạc nhiên trong quý này bất chấp suy thoái kinh tế."
        },
        {
          "id": "q_adj_adv_044",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "To build an audience on TikTok, it is highly recommended to maintain a _____ posting schedule.",
          "options": [
            { "key": "A", "text": "consistently" },
            { "key": "B", "text": "consistency" },
            { "key": "C", "text": "consistent" },
            { "key": "D", "text": "consist" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống đứng giữa mạo từ 'a' và cụm danh từ 'posting schedule' (lịch đăng bài).",
          "explanation": "Chính xác. Tính từ 'consistent' (nhất quán/đều đặn) bổ nghĩa cho danh từ phía sau.",
          "translation": "Để xây dựng lượng khán giả trên TikTok, việc duy trì một lịch đăng bài đều đặn được khuyến khích rất nhiều."
        },
        {
          "id": "q_adj_adv_045",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Students preparing for the JLPT N3 must _____ review kanji characters to prevent forgetting them.",
          "options": [
            { "key": "A", "text": "constant" },
            { "key": "B", "text": "constantly" },
            { "key": "C", "text": "constancy" },
            { "key": "D", "text": "constants" }
          ],
          "correct_answer": "B",
          "hint": "Cần một trạng từ đứng trước động từ 'review' (ôn tập) để chỉ tần suất/cách thức của hành động.",
          "explanation": "Chính xác. Trạng từ 'constantly' (liên tục/không ngừng) bổ nghĩa cho động từ 'review'.",
          "translation": "Học sinh chuẩn bị cho kỳ thi JLPT N3 phải liên tục ôn tập các chữ Hán để tránh quên chúng."
        },
        {
          "id": "q_adj_adv_046",
          "part": 5,
          "grammar_topic": "Adjective (Comparative)",
          "difficulty_level": "Medium",
          "question_text": "The gamified learning features make the PrepMaster app much _____ than traditional textbooks.",
          "options": [
            { "key": "A", "text": "engaging" },
            { "key": "B", "text": "more engaging" },
            { "key": "C", "text": "most engaging" },
            { "key": "D", "text": "engagingly" }
          ],
          "correct_answer": "B",
          "hint": "Từ 'than' là tín hiệu của so sánh hơn. 'Engaging' là tính từ dài nên cần dùng cấu trúc phù hợp.",
          "explanation": "Chính xác. Dạng so sánh hơn của tính từ dài là 'more engaging' (thu hút hơn). Từ 'much' đứng trước để nhấn mạnh.",
          "translation": "Các tính năng học tập được game hóa làm cho ứng dụng PrepMaster thu hút hơn nhiều so với sách giáo khoa truyền thống."
        },
        {
          "id": "q_adj_adv_047",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Hard",
          "question_text": "_____, human resources managers had to process timesheets manually, but now the new mobile app automates this task.",
          "options": [
            { "key": "A", "text": "Tradition" },
            { "key": "B", "text": "Traditional" },
            { "key": "C", "text": "Traditionally" },
            { "key": "D", "text": "Traditionalist" }
          ],
          "correct_answer": "C",
          "hint": "Đứng ở đầu câu và được ngăn cách bởi dấu phẩy, từ cần điền phải là một trạng từ để bổ nghĩa cho toàn bộ mệnh đề phía sau.",
          "explanation": "Chính xác. Trạng từ 'Traditionally' (Theo truyền thống/Trước đây) bổ nghĩa cho cả câu, tạo sự đối lập với 'now' ở vế sau.",
          "translation": "Theo truyền thống, các nhà quản lý nhân sự phải xử lý bảng chấm công theo cách thủ công, nhưng giờ đây ứng dụng di động mới đã tự động hóa công việc này."
        },
        {
          "id": "q_adj_adv_048",
          "part": 5,
          "grammar_topic": "Adjective (-ed vs -ing)",
          "difficulty_level": "Medium",
          "question_text": "The candidate felt extremely _____ when the code test platform crashed during his Mobile Developer Intern interview.",
          "options": [
            { "key": "A", "text": "frustrate" },
            { "key": "B", "text": "frustrating" },
            { "key": "C", "text": "frustration" },
            { "key": "D", "text": "frustrated" }
          ],
          "correct_answer": "D",
          "hint": "Động từ 'felt' (cảm thấy) yêu cầu tính từ theo sau. Khi diễn tả cảm xúc của một người bị tác động bởi ngoại cảnh, ta dùng tính từ đuôi -ed.",
          "explanation": "Chính xác. Tính từ 'frustrated' (bực bội/tuyệt vọng) diễn tả cảm xúc của ứng viên khi nền tảng bị lỗi.",
          "translation": "Ứng viên cảm thấy vô cùng bực bội khi nền tảng kiểm tra mã nguồn bị sập trong cuộc phỏng vấn vị trí Thực tập sinh Mobile Developer."
        },
        {
          "id": "q_adj_adv_049",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "Any emails regarding custom Happy Box orders are answered _____ by our dedicated sales team.",
          "options": [
            { "key": "A", "text": "prompt" },
            { "key": "B", "text": "promptness" },
            { "key": "C", "text": "promptly" },
            { "key": "D", "text": "prompting" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền bổ nghĩa cho động từ bị động 'are answered', trả lời cho câu hỏi 'được trả lời như thế nào?'.",
          "explanation": "Chính xác. Trạng từ 'promptly' (một cách nhanh chóng/ngay lập tức) bổ nghĩa cho động từ 'answered'.",
          "translation": "Mọi email liên quan đến các đơn hàng Happy Box tùy chỉnh đều được đội ngũ bán hàng tận tâm của chúng tôi trả lời một cách nhanh chóng."
        },
        {
          "id": "q_adj_adv_050",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "Subscribers to the premium tier gain _____ access to advanced TOEIC practice tests and mock exams.",
          "options": [
            { "key": "A", "text": "exclude" },
            { "key": "B", "text": "excluding" },
            { "key": "C", "text": "exclusively" },
            { "key": "D", "text": "exclusive" }
          ],
          "correct_answer": "D",
          "hint": "Từ cần điền đứng trước danh từ 'access' (quyền truy cập) để bổ nghĩa cho nó.",
          "explanation": "Chính xác. Tính từ 'exclusive' (độc quyền) kết hợp với 'access' tạo thành cụm 'exclusive access' (quyền truy cập độc quyền) rất phổ biến trong giới công nghệ.",
          "translation": "Những người đăng ký gói cao cấp có quyền truy cập độc quyền vào các bài kiểm tra thực hành và thi thử TOEIC nâng cao."
        },
        {
          "id": "q_adj_adv_051",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The company policies _____ prohibit employees from using the timekeeping app on unregistered devices.",
          "options": [
            { "key": "A", "text": "strict" },
            { "key": "B", "text": "strictness" },
            { "key": "C", "text": "strictly" },
            { "key": "D", "text": "stricter" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống nằm trước động từ chính 'prohibit' (cấm), cần một trạng từ để bổ nghĩa cho hành động cấm đoán này.",
          "explanation": "Chính xác. Trạng từ 'strictly' (một cách nghiêm ngặt) bổ nghĩa cho 'prohibit', tạo thành cụm 'nghiêm cấm'.",
          "translation": "Các chính sách của công ty nghiêm cấm nhân viên sử dụng ứng dụng chấm công trên các thiết bị chưa được đăng ký."
        },
        {
          "id": "q_adj_adv_052",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Practicing daily with short videos can help you become more _____ in English conversation.",
          "options": [
            { "key": "A", "text": "fluently" },
            { "key": "B", "text": "fluency" },
            { "key": "C", "text": "fluent" },
            { "key": "D", "text": "fluents" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'become' là một linking verb (động từ liên kết), sau nó phải là một tính từ.",
          "explanation": "Chính xác. Tính từ 'fluent' (trôi chảy) đứng sau 'become' để miêu tả trạng thái của người nói.",
          "translation": "Việc luyện tập hàng ngày với các video ngắn có thể giúp bạn trở nên trôi chảy hơn trong giao tiếp tiếng Anh."
        },
        {
          "id": "q_adj_adv_053",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Hard",
          "question_text": "The new partnership between Happy Box and the logistics firm is _____ beneficial, reducing shipping costs for both parties.",
          "options": [
            { "key": "A", "text": "mutual" },
            { "key": "B", "text": "mutually" },
            { "key": "C", "text": "mutuals" },
            { "key": "D", "text": "mutuality" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước tính từ 'beneficial' (có lợi), bạn cần một trạng từ để bổ nghĩa cho nó.",
          "explanation": "Chính xác. Trạng từ 'mutually' (lẫn nhau) kết hợp với 'beneficial' tạo thành cụm 'mutually beneficial' (có lợi cho đôi bên).",
          "translation": "Mối quan hệ đối tác mới giữa Happy Box và công ty hậu cần mang lại lợi ích cho đôi bên, giảm thiểu chi phí vận chuyển cho cả hai phía."
        },
        {
          "id": "q_adj_adv_054",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The IT department guaranteed that the new servers would be highly _____ even during peak web traffic.",
          "options": [
            { "key": "A", "text": "rely" },
            { "key": "B", "text": "reliably" },
            { "key": "C", "text": "reliance" },
            { "key": "D", "text": "reliable" }
          ],
          "correct_answer": "D",
          "hint": "Sau động từ to be 'would be' và trạng từ chỉ mức độ 'highly', ta cần một tính từ miêu tả máy chủ (servers).",
          "explanation": "Chính xác. Tính từ 'reliable' (đáng tin cậy) bổ nghĩa cho danh từ 'servers'.",
          "translation": "Bộ phận CNTT đảm bảo rằng các máy chủ mới sẽ cực kỳ đáng tin cậy ngay cả trong những thời điểm lưu lượng truy cập web đạt đỉnh."
        },
        {
          "id": "q_adj_adv_055",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The PrepMaster application will be _____ unavailable on Sunday night due to scheduled database maintenance.",
          "options": [
            { "key": "A", "text": "temporary" },
            { "key": "B", "text": "temporarily" },
            { "key": "C", "text": "temporariness" },
            { "key": "D", "text": "temporaries" }
          ],
          "correct_answer": "B",
          "hint": "Cần một trạng từ đứng trước tính từ 'unavailable' (không khả dụng) để bổ nghĩa về mặt thời gian cho tính từ này.",
          "explanation": "Chính xác. Trạng từ 'temporarily' (một cách tạm thời) bổ nghĩa cho tính từ phía sau.",
          "translation": "Ứng dụng PrepMaster sẽ tạm thời không khả dụng vào tối Chủ nhật do bảo trì cơ sở dữ liệu theo lịch trình."
        },
        {
          "id": "q_adj_adv_056",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "Learning Japanese and English concurrently can be incredibly _____ if you use an organized tracking system.",
          "options": [
            { "key": "A", "text": "benefit" },
            { "key": "B", "text": "beneficially" },
            { "key": "C", "text": "beneficial" },
            { "key": "D", "text": "benefited" }
          ],
          "correct_answer": "C",
          "hint": "Đứng sau 'can be' và trạng từ 'incredibly', ta cần một tính từ để miêu tả việc học hai ngôn ngữ.",
          "explanation": "Chính xác. Tính từ 'beneficial' (có lợi/hữu ích) miêu tả chủ ngữ của câu.",
          "translation": "Việc học tiếng Nhật và tiếng Anh cùng lúc có thể cực kỳ hữu ích nếu bạn sử dụng một hệ thống theo dõi có tổ chức."
        },
        {
          "id": "q_adj_adv_057",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "Please handle the glass items in the corporate gift boxes _____ to avoid any breakages during delivery.",
          "options": [
            { "key": "A", "text": "care" },
            { "key": "B", "text": "careful" },
            { "key": "C", "text": "carefully" },
            { "key": "D", "text": "careless" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'handle' (xử lý/cầm nắm) cần một trạng từ để miêu tả cách thức.",
          "explanation": "Chính xác. Trạng từ 'carefully' (một cách cẩn thận) bổ nghĩa cho hành động 'handle'.",
          "translation": "Vui lòng xử lý các món đồ thủy tinh trong hộp quà tặng doanh nghiệp một cách cẩn thận để tránh vỡ trong quá trình giao hàng."
        },
        {
          "id": "q_adj_adv_058",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The lead developer proposed making the TOEIC grammar exercises more _____ by adding sound effects and timers.",
          "options": [
            { "key": "A", "text": "interact" },
            { "key": "B", "text": "interaction" },
            { "key": "C", "text": "interactively" },
            { "key": "D", "text": "interactive" }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc 'make + tân ngữ + tính từ' (làm cho cái gì đó trở nên thế nào).",
          "explanation": "Chính xác. Tính từ 'interactive' (có tính tương tác) đứng sau tân ngữ 'exercises' để miêu tả trạng thái mới của bài tập.",
          "translation": "Lập trình viên chính đề xuất làm cho các bài tập ngữ pháp TOEIC trở nên tương tác hơn bằng cách thêm hiệu ứng âm thanh và đồng hồ đếm ngược."
        },
        {
          "id": "q_adj_adv_059",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The student is _____ working on optimizing his CV to apply for a Mobile Developer Intern position.",
          "options": [
            { "key": "A", "text": "current" },
            { "key": "B", "text": "currently" },
            { "key": "C", "text": "currency" },
            { "key": "D", "text": "currents" }
          ],
          "correct_answer": "B",
          "hint": "Từ cần điền đứng giữa to be 'is' và động từ V-ing 'working', mang nghĩa 'hiện tại/ngay lúc này'.",
          "explanation": "Chính xác. Trạng từ 'currently' (hiện tại) là dấu hiệu nhận biết của thì hiện tại tiếp diễn.",
          "translation": "Sinh viên hiện đang nỗ lực tối ưu hóa CV của mình để ứng tuyển vào vị trí Thực tập sinh Mobile Developer."
        },
        {
          "id": "q_adj_adv_060",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "The HR software generates a _____ overview of all employee activities, including working hours and leave days.",
          "options": [
            { "key": "A", "text": "comprehend" },
            { "key": "B", "text": "comprehensible" },
            { "key": "C", "text": "comprehensive" },
            { "key": "D", "text": "comprehensively" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền là tính từ bổ nghĩa cho 'overview' (bản đánh giá tổng quan). Cẩn thận nhầm lẫn giữa 'có thể hiểu được' và 'toàn diện/đầy đủ'.",
          "explanation": "Chính xác. Tính từ 'comprehensive' mang nghĩa 'toàn diện, bao quát'. 'Comprehensible' lại mang nghĩa 'có thể hiểu được', không hợp logic câu.",
          "translation": "Phần mềm nhân sự tạo ra một bản đánh giá tổng quan toàn diện về tất cả các hoạt động của nhân viên, bao gồm giờ làm việc và những ngày nghỉ phép."
        },
        {
          "id": "q_adj_adv_061",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The automated HR system _____ updates the employee database at midnight to reflect any changes in leave balances.",
          "options": [
            { "key": "A", "text": "automatic" },
            { "key": "B", "text": "automate" },
            { "key": "C", "text": "automatically" },
            { "key": "D", "text": "automation" }
          ],
          "correct_answer": "C",
          "hint": "Cần một trạng từ đứng trước động từ chính 'updates' để miêu tả cách thức hệ thống thực hiện hành động này.",
          "explanation": "Chính xác. Trạng từ 'automatically' (một cách tự động) bổ nghĩa cho động từ 'updates'.",
          "translation": "Hệ thống nhân sự tự động hóa sẽ tự động cập nhật cơ sở dữ liệu nhân viên vào lúc nửa đêm để phản ánh bất kỳ thay đổi nào về số ngày nghỉ phép."
        },
        {
          "id": "q_adj_adv_062",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "To successfully apply for the Mobile Developer Intern position, it is _____ to showcase a strong portfolio of past projects.",
          "options": [
            { "key": "A", "text": "essence" },
            { "key": "B", "text": "essentially" },
            { "key": "C", "text": "essentials" },
            { "key": "D", "text": "essential" }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc chủ ngữ giả: 'It is + Tính từ + to do something' (Thật là... khi làm việc gì đó).",
          "explanation": "Chính xác. Tính từ 'essential' (cần thiết/thiết yếu) đứng sau 'is' để miêu tả tầm quan trọng của việc có một portfolio mạnh.",
          "translation": "Để ứng tuyển thành công vào vị trí Thực tập sinh Mobile Developer, việc thể hiện một danh mục các dự án quá khứ ấn tượng là rất cần thiết."
        },
        {
          "id": "q_adj_adv_063",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The new gamified features on the PrepMaster platform are _____ popular among high school students studying for the TOEIC.",
          "options": [
            { "key": "A", "text": "extreme" },
            { "key": "B", "text": "extremely" },
            { "key": "C", "text": "extremity" },
            { "key": "D", "text": "extremes" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước tính từ 'popular' (phổ biến), ta cần một trạng từ chỉ mức độ để nhấn mạnh.",
          "explanation": "Chính xác. Trạng từ 'extremely' (cực kỳ) bổ nghĩa cho tính từ 'popular'.",
          "translation": "Các tính năng trò chơi hóa mới trên nền tảng PrepMaster cực kỳ phổ biến đối với các học sinh trung học đang ôn thi TOEIC."
        },
        {
          "id": "q_adj_adv_064",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "Happy Box guarantees that all materials used for their corporate gifts are environmentally _____.",
          "options": [
            { "key": "A", "text": "sustainably" },
            { "key": "B", "text": "sustain" },
            { "key": "C", "text": "sustainable" },
            { "key": "D", "text": "sustainability" }
          ],
          "correct_answer": "C",
          "hint": "Đứng sau động từ to be 'are' và trạng từ 'environmentally', ta cần một tính từ miêu tả chủ ngữ 'all materials'.",
          "explanation": "Chính xác. Tính từ 'sustainable' (bền vững) kết hợp với trạng từ phía trước tạo thành cụm 'environmentally sustainable' (bền vững về mặt môi trường).",
          "translation": "Happy Box đảm bảo rằng tất cả các vật liệu được sử dụng cho quà tặng doanh nghiệp của họ đều bền vững về mặt môi trường."
        },
        {
          "id": "q_adj_adv_065",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "During the live stream, the TikTok creator answered her followers' questions about learning English _____ and clearly.",
          "options": [
            { "key": "A", "text": "patient" },
            { "key": "B", "text": "patience" },
            { "key": "C", "text": "patiently" },
            { "key": "D", "text": "patients" }
          ],
          "correct_answer": "C",
          "hint": "Liên từ 'and' nối hai từ cùng loại. 'Clearly' là trạng từ, nên chỗ trống cũng phải là trạng từ bổ nghĩa cho động từ 'answered'.",
          "explanation": "Chính xác. Trạng từ 'patiently' (một cách kiên nhẫn) song hành cùng 'clearly' để miêu tả cách thức trả lời câu hỏi.",
          "translation": "Trong suốt buổi phát trực tiếp, nhà sáng tạo trên TikTok đã trả lời các câu hỏi của người theo dõi về việc học tiếng Anh một cách kiên nhẫn và rõ ràng."
        },
        {
          "id": "q_adj_adv_066",
          "part": 5,
          "grammar_topic": "Adjective (Comparative)",
          "difficulty_level": "Medium",
          "question_text": "Using the new mobile timekeeping app is much _____ than signing paper attendance sheets every morning.",
          "options": [
            { "key": "A", "text": "easy" },
            { "key": "B", "text": "easily" },
            { "key": "C", "text": "easier" },
            { "key": "D", "text": "easiest" }
          ],
          "correct_answer": "C",
          "hint": "Từ 'than' là dấu hiệu của cấu trúc so sánh hơn. Tính từ kết thúc bằng 'y' đổi thành 'ier'.",
          "explanation": "Chính xác. Tính từ so sánh hơn 'easier' (dễ dàng hơn) phù hợp với cấu trúc câu. 'Much' dùng để nhấn mạnh mức độ so sánh.",
          "translation": "Sử dụng ứng dụng chấm công di động mới dễ dàng hơn nhiều so với việc ký tên vào các tờ điểm danh bằng giấy mỗi sáng."
        },
        {
          "id": "q_adj_adv_067",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The software engineers worked _____ to deploy the latest EduKit update before the deadline.",
          "options": [
            { "key": "A", "text": "diligent" },
            { "key": "B", "text": "diligence" },
            { "key": "C", "text": "diligently" },
            { "key": "D", "text": "diligents" }
          ],
          "correct_answer": "C",
          "hint": "Cần một trạng từ đứng sau động từ thường 'worked' để miêu tả thái độ làm việc của các kỹ sư.",
          "explanation": "Chính xác. Trạng từ 'diligently' (một cách chăm chỉ/cần mẫn) bổ nghĩa cho hành động 'worked'.",
          "translation": "Các kỹ sư phần mềm đã làm việc cần mẫn để triển khai bản cập nhật EduKit mới nhất trước hạn chót."
        },
        {
          "id": "q_adj_adv_068",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "The HR manager gave a _____ presentation on how to navigate the new personnel management portal.",
          "options": [
            { "key": "A", "text": "briefly" },
            { "key": "B", "text": "briefness" },
            { "key": "C", "text": "brief" },
            { "key": "D", "text": "briefing" }
          ],
          "correct_answer": "C",
          "hint": "Nằm giữa mạo từ 'a' và danh từ 'presentation', bạn cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'brief' (ngắn gọn) bổ nghĩa cho danh từ 'presentation' tạo thành cụm 'một bài thuyết trình ngắn gọn'.",
          "translation": "Người quản lý nhân sự đã có một bài thuyết trình ngắn gọn về cách điều hướng cổng thông tin quản lý nhân sự mới."
        },
        {
          "id": "q_adj_adv_069",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Students preparing for the JLPT N3 should study vocabulary _____, rather than cramming the night before the exam.",
          "options": [
            { "key": "A", "text": "consistent" },
            { "key": "B", "text": "consistently" },
            { "key": "C", "text": "consistency" },
            { "key": "D", "text": "consists" }
          ],
          "correct_answer": "B",
          "hint": "Từ cần điền bổ nghĩa cho hành động 'study vocabulary' (học từ vựng), diễn tả cách thức học tập.",
          "explanation": "Chính xác. Trạng từ 'consistently' (một cách đều đặn/kiên trì) bổ nghĩa cho động từ 'study'.",
          "translation": "Học sinh chuẩn bị cho kỳ thi JLPT N3 nên học từ vựng một cách đều đặn, thay vì nhồi nhét vào đêm trước kỳ thi."
        },
        {
          "id": "q_adj_adv_070",
          "part": 5,
          "grammar_topic": "Adjective (-ed vs -ing)",
          "difficulty_level": "Medium",
          "question_text": "The CEO was deeply _____ by the rapid growth of the PrepMaster user base in just two months.",
          "options": [
            { "key": "A", "text": "impress" },
            { "key": "B", "text": "impressing" },
            { "key": "C", "text": "impressed" },
            { "key": "D", "text": "impression" }
          ],
          "correct_answer": "C",
          "hint": "Khi diễn tả cảm xúc của một người (bị tác động bởi sự việc khác), ta dùng tính từ đuôi -ed.",
          "explanation": "Chính xác. Tính từ 'impressed' (bị ấn tượng) kết hợp với giới từ 'by' để miêu tả cảm giác của vị Giám đốc điều hành.",
          "translation": "Giám đốc điều hành đã bị ấn tượng sâu sắc bởi sự tăng trưởng nhanh chóng của lượng người dùng PrepMaster chỉ trong hai tháng."
        },
        {
          "id": "q_adj_adv_071",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "If the mobile application crashes _____, users are advised to reinstall it to clear the corrupted cache.",
          "options": [
            { "key": "A", "text": "repeated" },
            { "key": "B", "text": "repeat" },
            { "key": "C", "text": "repetition" },
            { "key": "D", "text": "repeatedly" }
          ],
          "correct_answer": "D",
          "hint": "Cần một trạng từ đứng sau động từ 'crashes' (bị sập) để bổ nghĩa cho tần suất xảy ra lỗi.",
          "explanation": "Chính xác. Trạng từ 'repeatedly' (nhiều lần/lặp đi lặp lại) bổ nghĩa cho động từ 'crashes'.",
          "translation": "Nếu ứng dụng di động liên tục bị sập, người dùng được khuyên nên cài đặt lại nó để xóa bộ nhớ đệm bị lỗi."
        },
        {
          "id": "q_adj_adv_072",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Creating a _____ TikTok video for language learners requires not only good content but also clear audio.",
          "options": [
            { "key": "A", "text": "success" },
            { "key": "B", "text": "successfully" },
            { "key": "C", "text": "succeed" },
            { "key": "D", "text": "successful" }
          ],
          "correct_answer": "D",
          "hint": "Đứng giữa mạo từ 'a' và cụm danh từ 'TikTok video', ta cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'successful' (thành công) bổ nghĩa cho danh từ 'video' tạo thành 'một video thành công'.",
          "translation": "Việc tạo ra một video TikTok thành công cho người học ngôn ngữ không chỉ đòi hỏi nội dung tốt mà còn cần âm thanh rõ ràng."
        },
        {
          "id": "q_adj_adv_073",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "_____, the server maintenance was completed ahead of schedule without disrupting the students' online learning sessions.",
          "options": [
            { "key": "A", "text": "Lucky" },
            { "key": "B", "text": "Luckily" },
            { "key": "C", "text": "Luck" },
            { "key": "D", "text": "Luckiness" }
          ],
          "correct_answer": "B",
          "hint": "Đứng ở đầu câu và có dấu phẩy ngăn cách, cần một trạng từ để bổ nghĩa cho toàn bộ sự việc ở mệnh đề sau.",
          "explanation": "Chính xác. Trạng từ 'Luckily' (Thật may mắn) bổ nghĩa cho toàn bộ câu.",
          "translation": "Thật may mắn, việc bảo trì máy chủ đã được hoàn thành trước thời hạn mà không làm gián đoạn các buổi học trực tuyến của sinh viên."
        },
        {
          "id": "q_adj_adv_074",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The newly customized Happy Box is the most _____ product in our entire holiday catalog this season.",
          "options": [
            { "key": "A", "text": "profit" },
            { "key": "B", "text": "profitably" },
            { "key": "C", "text": "profitable" },
            { "key": "D", "text": "profitability" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc so sánh nhất 'the most' luôn đi kèm với một tính từ dài (hoặc trạng từ dài). Sau nó là danh từ 'product', nên ta cần tính từ.",
          "explanation": "Chính xác. Tính từ 'profitable' (mang lại lợi nhuận) hoàn thiện cấu trúc so sánh nhất 'the most profitable product'.",
          "translation": "Hộp quà Happy Box mới được tùy chỉnh là sản phẩm mang lại lợi nhuận cao nhất trong toàn bộ danh mục sản phẩm dịp lễ của chúng tôi mùa này."
        },
        {
          "id": "q_adj_adv_075",
          "part": 5,
          "grammar_topic": "Adverb (Confusing Adverbs)",
          "difficulty_level": "Hard",
          "question_text": "The senior engineer spoke _____ of the new intern's contribution to the mobile development team.",
          "options": [
            { "key": "A", "text": "high" },
            { "key": "B", "text": "highest" },
            { "key": "C", "text": "higher" },
            { "key": "D", "text": "highly" }
          ],
          "correct_answer": "D",
          "hint": "Cụm 'speak highly of someone' là một thành ngữ mang nghĩa 'đánh giá cao ai đó / khen ngợi ai đó hết lời'.",
          "explanation": "Chính xác. Trạng từ 'highly' kết hợp với động từ 'spoke' tạo thành một cụm collocation cố định phổ biến trong công sở.",
          "translation": "Kỹ sư cấp cao đã đánh giá rất cao sự đóng góp của thực tập sinh mới cho nhóm phát triển thiết bị di động."
        },
        {
          "id": "q_adj_adv_076",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "A _____ internet connection is vital for the real-time data syncing feature of the timekeeping app.",
          "options": [
            { "key": "A", "text": "secure" },
            { "key": "B", "text": "securely" },
            { "key": "C", "text": "security" },
            { "key": "D", "text": "securing" }
          ],
          "correct_answer": "A",
          "hint": "Cần một tính từ đứng giữa mạo từ 'A' và danh từ ghép 'internet connection'.",
          "explanation": "Chính xác. Tính từ 'secure' (bảo mật / an toàn) bổ nghĩa cho danh từ kết nối internet.",
          "translation": "Một kết nối internet bảo mật là rất quan trọng đối với tính năng đồng bộ hóa dữ liệu theo thời gian thực của ứng dụng chấm công."
        },
        {
          "id": "q_adj_adv_077",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The TOEIC practice tests on the EduKit platform are _____ designed to mimic the exact difficulty of the real exam.",
          "options": [
            { "key": "A", "text": "specific" },
            { "key": "B", "text": "specifically" },
            { "key": "C", "text": "specify" },
            { "key": "D", "text": "specification" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống nằm giữa to be 'are' và động từ phân từ hai 'designed', ta cần trạng từ để bổ nghĩa cho cách thức thiết kế.",
          "explanation": "Chính xác. Trạng từ 'specifically' (một cách đặc biệt / dành riêng) bổ nghĩa cho hành động 'được thiết kế'.",
          "translation": "Các bài thi thử TOEIC trên nền tảng EduKit được thiết kế đặc biệt để mô phỏng chính xác độ khó của kỳ thi thực tế."
        },
        {
          "id": "q_adj_adv_078",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The _____ growth of Happy Box's online sales is attributed to its innovative social media marketing strategy.",
          "options": [
            { "key": "A", "text": "rapidly" },
            { "key": "B", "text": "rapidness" },
            { "key": "C", "text": "rapids" },
            { "key": "D", "text": "rapid" }
          ],
          "correct_answer": "D",
          "hint": "Nằm giữa mạo từ 'The' và danh từ 'growth' (sự tăng trưởng), ta cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'rapid' (nhanh chóng) đứng trước danh từ 'growth' để tạo thành cụm 'sự tăng trưởng nhanh chóng'.",
          "translation": "Sự tăng trưởng nhanh chóng doanh số bán hàng trực tuyến của Happy Box được cho là nhờ vào chiến lược tiếp thị truyền thông xã hội sáng tạo của hãng."
        },
        {
          "id": "q_adj_adv_079",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "Please review the mobile app's terms of service _____ before clicking the 'Accept' button.",
          "options": [
            { "key": "A", "text": "thoroughly" },
            { "key": "B", "text": "thorough" },
            { "key": "C", "text": "thoroughness" },
            { "key": "D", "text": "thoroughly as" }
          ],
          "correct_answer": "A",
          "hint": "Từ cần điền đứng sau tân ngữ 'terms of service', bổ nghĩa cho hành động 'review' (xem xét).",
          "explanation": "Chính xác. Trạng từ 'thoroughly' (một cách kỹ lưỡng) bổ nghĩa cho động từ 'review', chỉ cách thức đọc văn bản.",
          "translation": "Vui lòng xem xét kỹ lưỡng các điều khoản dịch vụ của ứng dụng di động trước khi nhấp vào nút 'Chấp nhận'."
        },
        {
          "id": "q_adj_adv_080",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "It is highly _____ that you complete all the beginner grammar modules before attempting the full TOEIC mock test.",
          "options": [
            { "key": "A", "text": "advise" },
            { "key": "B", "text": "adviser" },
            { "key": "C", "text": "advisable" },
            { "key": "D", "text": "advising" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'It is highly + Tính từ + that...' (Rất được khuyên rằng / Rất cần thiết rằng...). 'Advise' là động từ.",
          "explanation": "Chính xác. Tính từ 'advisable' (đáng được khuyên / nên làm) đứng sau to be và trạng từ 'highly' để miêu tả tầm quan trọng của sự việc ở mệnh đề 'that'.",
          "translation": "Bạn rất nên hoàn thành tất cả các mô-đun ngữ pháp cơ bản trước khi thử sức với bài thi thử TOEIC đầy đủ."
        },
        {
          "id": "q_adj_adv_081",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "The HR portal _____ generates a summary of all employee absences at the end of each month.",
          "options": [
            { "key": "A", "text": "automatic" },
            { "key": "B", "text": "automatically" },
            { "key": "C", "text": "automated" },
            { "key": "D", "text": "automates" }
          ],
          "correct_answer": "B",
          "hint": "Cần một trạng từ đứng trước động từ chính 'generates' để chỉ cách thức hệ thống tạo ra báo cáo.",
          "explanation": "Chính xác. Trạng từ 'automatically' (một cách tự động) bổ nghĩa cho động từ 'generates'.",
          "translation": "Cổng thông tin nhân sự tự động tạo ra một bản tóm tắt về tất cả các trường hợp vắng mặt của nhân viên vào cuối mỗi tháng."
        },
        {
          "id": "q_adj_adv_082",
          "part": 5,
          "grammar_topic": "Adjective (-ed vs -ing)",
          "difficulty_level": "Medium",
          "question_text": "The students were _____ by the creative methods the TikTok creator used to explain complex English grammar.",
          "options": [
            { "key": "A", "text": "fascinate" },
            { "key": "B", "text": "fascinating" },
            { "key": "C", "text": "fascinated" },
            { "key": "D", "text": "fascination" }
          ],
          "correct_answer": "C",
          "hint": "Khi miêu tả cảm xúc, trạng thái của con người bị tác động bởi một yếu tố khác, chúng ta dùng tính từ đuôi -ed.",
          "explanation": "Chính xác. Tính từ 'fascinated' (bị lôi cuốn/thích thú) miêu tả cảm xúc của các học sinh trước phương pháp dạy học sáng tạo.",
          "translation": "Các học sinh đã bị lôi cuốn bởi những phương pháp sáng tạo mà nhà sáng tạo TikTok sử dụng để giải thích ngữ pháp tiếng Anh phức tạp."
        },
        {
          "id": "q_adj_adv_083",
          "part": 5,
          "grammar_topic": "Adverb (Comparative)",
          "difficulty_level": "Medium",
          "question_text": "Users of the PrepMaster app tend to score significantly _____ on the JLPT N3 than those who only use traditional books.",
          "options": [
            { "key": "A", "text": "high" },
            { "key": "B", "text": "highly" },
            { "key": "C", "text": "highest" },
            { "key": "D", "text": "higher" }
          ],
          "correct_answer": "D",
          "hint": "Động từ 'score' (đạt điểm) cần một trạng từ bổ nghĩa. Cấu trúc có từ 'than' đòi hỏi dạng so sánh hơn.",
          "explanation": "Chính xác. Trạng từ so sánh hơn 'higher' (cao hơn) kết hợp với 'than' để so sánh điểm số giữa hai nhóm người dùng.",
          "translation": "Người dùng ứng dụng PrepMaster có xu hướng đạt điểm cao hơn đáng kể trong kỳ thi JLPT N3 so với những người chỉ sử dụng sách truyền thống."
        },
        {
          "id": "q_adj_adv_084",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "We are looking for a _____ supplier to provide eco-friendly packaging materials for our new gift boxes.",
          "options": [
            { "key": "A", "text": "rely" },
            { "key": "B", "text": "reliable" },
            { "key": "C", "text": "reliably" },
            { "key": "D", "text": "reliability" }
          ],
          "correct_answer": "B",
          "hint": "Nằm giữa mạo từ 'a' và danh từ 'supplier', bạn cần một tính từ để miêu tả đặc điểm của nhà cung cấp này.",
          "explanation": "Chính xác. Tính từ 'reliable' (đáng tin cậy) bổ nghĩa cho danh từ 'supplier' tạo thành cụm 'một nhà cung cấp đáng tin cậy'.",
          "translation": "Chúng tôi đang tìm kiếm một nhà cung cấp đáng tin cậy để cung cấp các vật liệu đóng gói thân thiện với môi trường cho các hộp quà mới của chúng tôi."
        },
        {
          "id": "q_adj_adv_085",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The codebase for the timekeeping app is _____ complex, requiring an experienced developer to maintain it.",
          "options": [
            { "key": "A", "text": "extreme" },
            { "key": "B", "text": "extremely" },
            { "key": "C", "text": "extremes" },
            { "key": "D", "text": "extremity" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước tính từ 'complex' (phức tạp), chúng ta cần một trạng từ chỉ mức độ để nhấn mạnh.",
          "explanation": "Chính xác. Trạng từ 'extremely' (cực kỳ) bổ nghĩa cho tính từ 'complex'.",
          "translation": "Mã nguồn của ứng dụng chấm công cực kỳ phức tạp, đòi hỏi một lập trình viên có kinh nghiệm để duy trì nó."
        },
        {
          "id": "q_adj_adv_086",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The _____ feedback from beta testers helped the engineering team fix the remaining bugs in the EduKit app.",
          "options": [
            { "key": "A", "text": "construct" },
            { "key": "B", "text": "constructively" },
            { "key": "C", "text": "constructive" },
            { "key": "D", "text": "construction" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống nằm giữa mạo từ 'The' và danh từ 'feedback', do đó bạn cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'constructive' (mang tính xây dựng) bổ nghĩa cho 'feedback' tạo thành một cụm từ rất phổ biến trong công sở (constructive feedback).",
          "translation": "Những phản hồi mang tính xây dựng từ những người thử nghiệm beta đã giúp đội ngũ kỹ thuật sửa các lỗi còn lại trong ứng dụng EduKit."
        },
        {
          "id": "q_adj_adv_087",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "All employees must log their hours _____ to avoid any discrepancies in their monthly paychecks.",
          "options": [
            { "key": "A", "text": "accurate" },
            { "key": "B", "text": "accuracy" },
            { "key": "C", "text": "accurately" },
            { "key": "D", "text": "accurateness" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền bổ nghĩa cho hành động 'log' (ghi nhận/nhập liệu), chỉ ra cách thức thực hiện hành động đó.",
          "explanation": "Chính xác. Trạng từ 'accurately' (một cách chính xác) bổ nghĩa cho động từ 'log'.",
          "translation": "Tất cả nhân viên phải ghi lại số giờ làm việc của mình một cách chính xác để tránh bất kỳ sự sai lệch nào trong phiếu lương hàng tháng."
        },
        {
          "id": "q_adj_adv_088",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Ms. Lin's short videos provide _____ tips for passing the TOEIC exam with a score of 800 or above.",
          "options": [
            { "key": "A", "text": "value" },
            { "key": "B", "text": "values" },
            { "key": "C", "text": "valuable" },
            { "key": "D", "text": "valuably" }
          ],
          "correct_answer": "C",
          "hint": "Đứng trước danh từ 'tips' (những mẹo/lời khuyên), ta cần một tính từ để miêu tả tính chất của những lời khuyên này.",
          "explanation": "Chính xác. Tính từ 'valuable' (có giá trị/hữu ích) bổ nghĩa cho danh từ 'tips'.",
          "translation": "Các video ngắn của cô Lin cung cấp những lời khuyên hữu ích để vượt qua kỳ thi TOEIC với số điểm 800 trở lên."
        },
        {
          "id": "q_adj_adv_089",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The marketing department _____ reviews the sales data of the corporate gift boxes to adjust their strategies.",
          "options": [
            { "key": "A", "text": "period" },
            { "key": "B", "text": "periodic" },
            { "key": "C", "text": "periodically" },
            { "key": "D", "text": "periodical" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền đứng trước động từ chính 'reviews', đóng vai trò là trạng từ chỉ tần suất của hành động.",
          "explanation": "Chính xác. Trạng từ 'periodically' (một cách định kỳ) bổ nghĩa cho động từ 'reviews'.",
          "translation": "Bộ phận tiếp thị xem xét dữ liệu bán hàng của các hộp quà tặng doanh nghiệp một cách định kỳ để điều chỉnh các chiến lược của họ."
        },
        {
          "id": "q_adj_adv_090",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "A _____ understanding of basic grammar is essential before moving on to the advanced TOEIC modules.",
          "options": [
            { "key": "A", "text": "solid" },
            { "key": "B", "text": "solidly" },
            { "key": "C", "text": "solidify" },
            { "key": "D", "text": "solidity" }
          ],
          "correct_answer": "A",
          "hint": "Nằm giữa mạo từ 'A' và danh từ 'understanding', bạn cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'solid' (vững chắc) kết hợp với 'understanding' tạo thành cụm 'một sự hiểu biết vững chắc'.",
          "translation": "Một sự hiểu biết vững chắc về ngữ pháp cơ bản là điều cần thiết trước khi chuyển sang các mô-đun TOEIC nâng cao."
        },
        {
          "id": "q_adj_adv_091",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Hard",
          "question_text": "The new biometric timekeeping system works _____ well, even in low-light environments.",
          "options": [
            { "key": "A", "text": "surprising" },
            { "key": "B", "text": "surprisingly" },
            { "key": "C", "text": "surprise" },
            { "key": "D", "text": "surprised" }
          ],
          "correct_answer": "B",
          "hint": "Đứng trước trạng từ 'well' (tốt), bạn cần một trạng từ chỉ mức độ để bổ nghĩa cho nó.",
          "explanation": "Chính xác. Trạng từ 'surprisingly' (đáng ngạc nhiên) bổ nghĩa cho trạng từ 'well', tạo thành cụm 'tốt một cách đáng ngạc nhiên'.",
          "translation": "Hệ thống chấm công sinh trắc học mới hoạt động tốt một cách đáng ngạc nhiên, ngay cả trong môi trường thiếu sáng."
        },
        {
          "id": "q_adj_adv_092",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Medium",
          "question_text": "The school administration found the EduKit dashboard _____ for tracking the collective study hours of their students.",
          "options": [
            { "key": "A", "text": "use" },
            { "key": "B", "text": "useful" },
            { "key": "C", "text": "usefully" },
            { "key": "D", "text": "usefulness" }
          ],
          "correct_answer": "B",
          "hint": "Cấu trúc 'find + something (EduKit dashboard) + Tính từ' (cảm thấy/thấy cái gì đó như thế nào).",
          "explanation": "Chính xác. Tính từ 'useful' (hữu ích) miêu tả đánh giá của ban giám hiệu nhà trường đối với bảng điều khiển EduKit.",
          "translation": "Ban giám hiệu nhà trường nhận thấy bảng điều khiển EduKit rất hữu ích trong việc theo dõi tổng số giờ học tập thể của học sinh."
        },
        {
          "id": "q_adj_adv_093",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Easy",
          "question_text": "Because the holiday season is approaching, the warehouse staff must pack the gift boxes _____.",
          "options": [
            { "key": "A", "text": "swift" },
            { "key": "B", "text": "swiftness" },
            { "key": "C", "text": "swiftly" },
            { "key": "D", "text": "swifter" }
          ],
          "correct_answer": "C",
          "hint": "Đứng ở cuối câu, từ cần điền phải bổ nghĩa cho động từ 'pack' (đóng gói) để chỉ cách thức của hành động.",
          "explanation": "Chính xác. Trạng từ 'swiftly' (một cách nhanh chóng) bổ nghĩa cho động từ 'pack'.",
          "translation": "Vì mùa lễ hội đang đến gần, nhân viên kho phải đóng gói các hộp quà một cách nhanh chóng."
        },
        {
          "id": "q_adj_adv_094",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "It is _____ to take at least two full mock exams before the actual JLPT N3 test date.",
          "options": [
            { "key": "A", "text": "advise" },
            { "key": "B", "text": "advising" },
            { "key": "C", "text": "advisable" },
            { "key": "D", "text": "advisably" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'It is + Tính từ + to do something'. Từ cần điền là một tính từ mang nghĩa 'nên làm/đáng được khuyên'.",
          "explanation": "Chính xác. Tính từ 'advisable' (thích hợp/nên làm) kết hợp với cấu trúc chủ ngữ giả để đưa ra một lời khuyên mạnh mẽ.",
          "translation": "Bạn rất nên làm ít nhất hai bài thi thử đầy đủ trước ngày thi JLPT N3 thực tế."
        },
        {
          "id": "q_adj_adv_095",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The mobile app developer _____ resolved the server issue, preventing the timekeeping system from crashing.",
          "options": [
            { "key": "A", "text": "quick" },
            { "key": "B", "text": "quickly" },
            { "key": "C", "text": "quickness" },
            { "key": "D", "text": "quicker" }
          ],
          "correct_answer": "B",
          "hint": "Từ cần điền nằm giữa chủ ngữ và động từ chính 'resolved', đóng vai trò là trạng từ bổ nghĩa cho hành động.",
          "explanation": "Chính xác. Trạng từ 'quickly' (một cách nhanh chóng) miêu tả tốc độ giải quyết vấn đề của lập trình viên.",
          "translation": "Nhà phát triển ứng dụng di động đã nhanh chóng giải quyết sự cố máy chủ, ngăn hệ thống chấm công bị sập."
        },
        {
          "id": "q_adj_adv_096",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "Creating a _____ posting schedule on TikTok is crucial for gaining a larger audience of English learners.",
          "options": [
            { "key": "A", "text": "consistency" },
            { "key": "B", "text": "consistently" },
            { "key": "C", "text": "consist" },
            { "key": "D", "text": "consistent" }
          ],
          "correct_answer": "D",
          "hint": "Chỗ trống đứng giữa mạo từ 'a' và danh từ ghép 'posting schedule' (lịch đăng bài).",
          "explanation": "Chính xác. Tính từ 'consistent' (nhất quán/đều đặn) bổ nghĩa cho danh từ phía sau.",
          "translation": "Việc tạo ra một lịch đăng bài đều đặn trên TikTok là rất quan trọng để thu hút được lượng khán giả học tiếng Anh lớn hơn."
        },
        {
          "id": "q_adj_adv_097",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The custom gift boxes were _____ designed to reflect the corporate identity of our biggest client.",
          "options": [
            { "key": "A", "text": "specific" },
            { "key": "B", "text": "specifically" },
            { "key": "C", "text": "specify" },
            { "key": "D", "text": "specification" }
          ],
          "correct_answer": "B",
          "hint": "Nằm giữa trợ động từ 'were' và động từ phân từ hai 'designed', ta cần trạng từ để bổ nghĩa cho động từ bị động này.",
          "explanation": "Chính xác. Trạng từ 'specifically' (một cách đặc biệt/dành riêng) bổ nghĩa cho hành động 'được thiết kế'.",
          "translation": "Các hộp quà tặng tùy chỉnh được thiết kế đặc biệt để phản ánh bộ nhận diện thương hiệu của khách hàng lớn nhất của chúng tôi."
        },
        {
          "id": "q_adj_adv_098",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Hard",
          "question_text": "The new language learning features are only _____ to users who have upgraded to the premium EduKit account.",
          "options": [
            { "key": "A", "text": "access" },
            { "key": "B", "text": "accessible" },
            { "key": "C", "text": "accessibility" },
            { "key": "D", "text": "accessibly" }
          ],
          "correct_answer": "B",
          "hint": "Sau động từ to be 'are' và trạng từ 'only', ta cần một tính từ. Cụm 'accessible to someone' nghĩa là 'ai đó có thể truy cập được'.",
          "explanation": "Chính xác. Tính từ 'accessible' (có thể tiếp cận/truy cập) bổ nghĩa cho chủ ngữ 'features'.",
          "translation": "Các tính năng học ngôn ngữ mới chỉ có thể truy cập được đối với những người dùng đã nâng cấp lên tài khoản EduKit cao cấp."
        },
        {
          "id": "q_adj_adv_099",
          "part": 5,
          "grammar_topic": "Adverb",
          "difficulty_level": "Medium",
          "question_text": "The company requires that all time-off requests be submitted _____ through the new HR portal.",
          "options": [
            { "key": "A", "text": "direct" },
            { "key": "B", "text": "directly" },
            { "key": "C", "text": "direction" },
            { "key": "D", "text": "directs" }
          ],
          "correct_answer": "B",
          "hint": "Từ cần điền bổ nghĩa cho động từ bị động 'be submitted', chỉ cách thức nộp đơn.",
          "explanation": "Chính xác. Trạng từ 'directly' (một cách trực tiếp) bổ nghĩa cho động từ 'submitted'.",
          "translation": "Công ty yêu cầu tất cả các yêu cầu nghỉ phép phải được nộp trực tiếp thông qua cổng thông tin nhân sự mới."
        },
        {
          "id": "q_adj_adv_100",
          "part": 5,
          "grammar_topic": "Adjective",
          "difficulty_level": "Easy",
          "question_text": "The PrepMaster app provides a _____ analysis of your test results, highlighting areas where you need more practice.",
          "options": [
            { "key": "A", "text": "detail" },
            { "key": "B", "text": "detailed" },
            { "key": "C", "text": "detailing" },
            { "key": "D", "text": "details" }
          ],
          "correct_answer": "B",
          "hint": "Nằm giữa mạo từ 'a' và danh từ 'analysis', bạn cần một tính từ.",
          "explanation": "Chính xác. Tính từ 'detailed' (chi tiết) bổ nghĩa cho danh từ 'analysis', tạo thành cụm 'một bản phân tích chi tiết'.",
          "translation": "Ứng dụng PrepMaster cung cấp một bản phân tích chi tiết về kết quả bài kiểm tra của bạn, làm nổi bật những lĩnh vực bạn cần thực hành thêm."
        }
      ]
    },
    hard: []
  },
  "w1-d1-t3": {
    description: "Giải Part 5 Mẫu",
    total: 10,
    questions: {
      easy: [
        {
          "id": "q_noun_pronoun_001",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "The new _____ of the marketing department will start next Monday.",
          "options": [
            {
              "key": "A",
              "text": "director"
            },
            {
              "key": "B",
              "text": "directs"
            },
            {
              "key": "C",
              "text": "directed"
            },
            {
              "key": "D",
              "text": "directing"
            }
          ],
          "correct_answer": "A",
          "hint": "Cần một từ chỉ người lãnh đạo phòng marketing để thực hiện hành động 'will start'.",
          "explanation": "Chính xác. Danh từ chỉ người (giám đốc) có thể đứng sau tính từ 'new' để đóng vai trò làm chủ ngữ chính trong câu.",
          "translation": "Giám đốc mới của bộ phận tiếp thị sẽ bắt đầu làm việc vào thứ Hai tới."
        },
        {
          "id": "q_noun_pronoun_002",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Mr. Smith completed the quarterly financial report by _____.",
          "options": [
            {
              "key": "A",
              "text": "he"
            },
            {
              "key": "B",
              "text": "him"
            },
            {
              "key": "C",
              "text": "his"
            },
            {
              "key": "D",
              "text": "himself"
            }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc 'by + [đại từ phản thân]' được dùng để nhấn mạnh chủ thể tự thực hiện hành động mà không cần ai giúp đỡ.",
          "explanation": "Chính xác. Đại từ phản thân 'himself' kết hợp với 'by' tạo thành cụm 'by himself' mang ý nghĩa tự mình làm việc gì đó.",
          "translation": "Ông Smith đã tự mình hoàn thành báo cáo tài chính hàng quý."
        },
        {
          "id": "q_noun_pronoun_003",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "_____ regarding the updated company policy should be directed to the HR department.",
          "options": [
            {
              "key": "A",
              "text": "Inquire"
            },
            {
              "key": "B",
              "text": "Inquiries"
            },
            {
              "key": "C",
              "text": "Inquiring"
            },
            {
              "key": "D",
              "text": "Inquired"
            }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống đóng vai trò làm chủ ngữ, cần một từ mang nghĩa 'những câu hỏi' hoặc 'những thắc mắc'.",
          "explanation": "Chính xác. Danh từ số nhiều 'Inquiries' mang nghĩa 'những thắc mắc', đóng vai trò chủ ngữ hợp lý cho động từ 'should be directed'.",
          "translation": "Những thắc mắc liên quan đến chính sách công ty mới cập nhật nên được gửi đến bộ phận nhân sự."
        },
        {
          "id": "q_noun_pronoun_004",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "All employees must wear _____ identification badges at all times inside the building.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "them"
            },
            {
              "key": "C",
              "text": "their"
            },
            {
              "key": "D",
              "text": "theirs"
            }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền phải thể hiện sự sở hữu đối với cụm danh từ 'identification badges' của các nhân viên.",
          "explanation": "Chính xác. Tính từ sở hữu 'their' dùng để chỉ sự sở hữu của chủ ngữ số nhiều 'All employees' đối với thẻ tên của họ.",
          "translation": "Tất cả nhân viên phải đeo thẻ tên của họ mọi lúc khi ở trong tòa nhà."
        },
        {
          "id": "q_noun_pronoun_005",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The manager expressed her appreciation for the team's _____ to the project.",
          "options": [
            {
              "key": "A",
              "text": "dedicate"
            },
            {
              "key": "B",
              "text": "dedicated"
            },
            {
              "key": "C",
              "text": "dedication"
            },
            {
              "key": "D",
              "text": "dedicating"
            }
          ],
          "correct_answer": "C",
          "hint": "Sở hữu cách ('s) luôn yêu cầu một danh từ hoặc cụm danh từ theo ngay sau nó.",
          "explanation": "Chính xác. Danh từ 'dedication' mang nghĩa 'sự cống hiến' đứng sau sở hữu cách 'team's' để hoàn thành cụm danh từ.",
          "translation": "Người quản lý bày tỏ sự cảm kích đối với sự cống hiến của nhóm cho dự án."
        },
        {
          "id": "q_noun_pronoun_006",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The CEO has requested that _____ who plans to attend the conference register by Friday.",
          "options": [
            {
              "key": "A",
              "text": "anyone"
            },
            {
              "key": "B",
              "text": "those"
            },
            {
              "key": "C",
              "text": "who"
            },
            {
              "key": "D",
              "text": "some"
            }
          ],
          "correct_answer": "A",
          "hint": "Hãy để ý kỹ đuôi 's' của động từ 'plans' ngay phía sau chỗ trống để xác định đại từ cần điền là số ít hay số nhiều.",
          "explanation": "Chính xác. Đại từ bất định số ít 'anyone' phù hợp với mệnh đề quan hệ 'who plans' (động từ plan được chia số ít).",
          "translation": "Giám đốc điều hành đã yêu cầu bất kỳ ai có dự định tham dự hội nghị phải đăng ký trước thứ Sáu."
        },
        {
          "id": "q_noun_pronoun_007",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "Please ensure that the customer service _____ is available 24/7 to handle complaints.",
          "options": [
            {
              "key": "A",
              "text": "represent"
            },
            {
              "key": "B",
              "text": "representative"
            },
            {
              "key": "C",
              "text": "representation"
            },
            {
              "key": "D",
              "text": "representatives"
            }
          ],
          "correct_answer": "B",
          "hint": "Cần một danh từ chỉ người trực dịch vụ khách hàng và phải tương thích với động từ to be 'is' (số ít).",
          "explanation": "Chính xác. Danh từ chỉ người 'representative' kết hợp tạo thành cụm chủ ngữ số ít đi hợp với động từ to be 'is' phía sau.",
          "translation": "Vui lòng đảm bảo rằng người đại diện dịch vụ khách hàng có mặt 24/7 để xử lý các khiếu nại."
        },
        {
          "id": "q_noun_pronoun_008",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Although Ms. Garcia was busy, _____ took the time to review the contract thoroughly.",
          "options": [
            {
              "key": "A",
              "text": "she"
            },
            {
              "key": "B",
              "text": "her"
            },
            {
              "key": "C",
              "text": "hers"
            },
            {
              "key": "D",
              "text": "herself"
            }
          ],
          "correct_answer": "A",
          "hint": "Mệnh đề thứ hai đang thiếu một chủ ngữ để thực hiện hành động 'took'.",
          "explanation": "Chính xác. Đại từ nhân xưng chủ ngữ 'she' thay thế cho 'Ms. Garcia' để thực hiện hành động 'took'.",
          "translation": "Mặc dù cô Garcia rất bận, cô ấy vẫn dành thời gian để xem xét kỹ lưỡng bản hợp đồng."
        },
        {
          "id": "q_noun_pronoun_009",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The company experienced a significant increase in _____ during the holiday season.",
          "options": [
            {
              "key": "A",
              "text": "sale"
            },
            {
              "key": "B",
              "text": "sales"
            },
            {
              "key": "C",
              "text": "sells"
            },
            {
              "key": "D",
              "text": "selling"
            }
          ],
          "correct_answer": "B",
          "hint": "Khi nói về doanh thu hay số lượng hàng bán ra trong kinh doanh, từ này luôn được dùng ở dạng số nhiều.",
          "explanation": "Chính xác. Danh từ số nhiều 'sales' mang nghĩa 'doanh số', tạo thành cụm từ cố định 'increase in sales' (tăng trưởng doanh số).",
          "translation": "Công ty đã trải qua một sự gia tăng đáng kể về doanh số bán hàng trong suốt mùa lễ hội."
        },
        {
          "id": "q_noun_pronoun_010",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The proposed budget is not mine; it is _____.",
          "options": [
            {
              "key": "A",
              "text": "her"
            },
            {
              "key": "B",
              "text": "hers"
            },
            {
              "key": "C",
              "text": "she"
            },
            {
              "key": "D",
              "text": "herself"
            }
          ],
          "correct_answer": "B",
          "hint": "Cần một từ có thể thay thế cho cả cụm 'tính từ sở hữu + danh từ' (ví dụ: her budget) để tránh lặp từ.",
          "explanation": "Chính xác. Đại từ sở hữu 'hers' dùng để thay thế cho cụm 'her budget', giúp tránh lặp lại từ 'budget' đã xuất hiện ở vế trước.",
          "translation": "Ngân sách được đề xuất không phải của tôi; nó là của cô ấy."
        },
        {
          "id": "q_noun_pronoun_011",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The lead developer emphasized that regular system updates are essential for the educational software's _____.",
          "options": [
            {
              "key": "A",
              "text": "reliable"
            },
            {
              "key": "B",
              "text": "reliably"
            },
            {
              "key": "C",
              "text": "reliability"
            },
            {
              "key": "D",
              "text": "relies"
            }
          ],
          "correct_answer": "C",
          "hint": "Phía sau sở hữu cách ('s) của cụm danh từ 'educational software' luôn cần một danh từ để hoàn thiện ý nghĩa.",
          "explanation": "Chính xác. Từ cần điền là một danh từ đứng sau sở hữu cách. 'Reliability' (sự đáng tin cậy/độ tin cậy) là danh từ phù hợp nhất về mặt ngữ pháp và ngữ nghĩa.",
          "translation": "Lập trình viên chính nhấn mạnh rằng việc cập nhật hệ thống thường xuyên là rất cần thiết cho độ tin cậy của phần mềm giáo dục."
        },
        {
          "id": "q_noun_pronoun_012",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Employees must log into the mobile timekeeping application using _____ unique credentials before starting their shifts.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "them"
            },
            {
              "key": "C",
              "text": "their"
            },
            {
              "key": "D",
              "text": "theirs"
            }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống cần một từ để thể hiện sự sở hữu đối với cụm danh từ 'unique credentials' (thông tin đăng nhập duy nhất).",
          "explanation": "Chính xác. Tính từ sở hữu 'their' đứng trước cụm danh từ 'unique credentials' để chỉ thông tin đăng nhập thuộc về các nhân viên (employees).",
          "translation": "Nhân viên phải đăng nhập vào ứng dụng chấm công trên thiết bị di động bằng thông tin đăng nhập duy nhất của họ trước khi bắt đầu ca làm việc."
        },
        {
          "id": "q_noun_pronoun_013",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "The marketing team noted a sudden surge in _____ after the promotional video for the new gift box campaign went viral.",
          "options": [
            {
              "key": "A",
              "text": "order"
            },
            {
              "key": "B",
              "text": "ordered"
            },
            {
              "key": "C",
              "text": "ordering"
            },
            {
              "key": "D",
              "text": "orders"
            }
          ],
          "correct_answer": "D",
          "hint": "Sau giới từ 'in', chúng ta cần một danh từ. Khi nói về số lượng đơn hàng trong kinh doanh, ta thường dùng danh từ đếm được ở dạng số nhiều.",
          "explanation": "Chính xác. Danh từ số nhiều 'orders' (các đơn hàng) là lựa chọn chính xác nhất để đi cùng với cụm 'a sudden surge in' (một sự tăng vọt đột ngột về...).",
          "translation": "Nhóm tiếp thị ghi nhận sự tăng vọt đột ngột về các đơn đặt hàng sau khi video quảng cáo cho chiến dịch hộp quà tặng mới lan truyền rộng rãi."
        },
        {
          "id": "q_noun_pronoun_014",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Ms. Tanaka writes the scripts and edits the daily English practice videos entirely by _____.",
          "options": [
            {
              "key": "A",
              "text": "her"
            },
            {
              "key": "B",
              "text": "she"
            },
            {
              "key": "C",
              "text": "hers"
            },
            {
              "key": "D",
              "text": "herself"
            }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc 'by + đại từ phản thân' mang nghĩa tự mình làm việc gì đó, nhấn mạnh sự tự lập của chủ thể.",
          "explanation": "Chính xác. Đại từ phản thân 'herself' đi cùng giới từ 'by' chỉ việc cô Tanaka tự mình thực hiện các công việc mà không có sự trợ giúp.",
          "translation": "Cô Tanaka hoàn toàn tự mình viết kịch bản và chỉnh sửa các video luyện tập tiếng Anh hàng ngày."
        },
        {
          "id": "q_noun_pronoun_015",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "To improve workflow, the HR department has implemented a new _____ for processing employee leave requests.",
          "options": [
            {
              "key": "A",
              "text": "procedure"
            },
            {
              "key": "B",
              "text": "procedural"
            },
            {
              "key": "C",
              "text": "proceed"
            },
            {
              "key": "D",
              "text": "proceeds"
            }
          ],
          "correct_answer": "A",
          "hint": "Cần một danh từ số ít đứng sau mạo từ 'a' và tính từ 'new' để làm tân ngữ cho động từ 'implemented'.",
          "explanation": "Chính xác. Danh từ 'procedure' (quy trình/thủ tục) điền vào chỗ trống tạo thành cụm 'a new procedure' hợp lý về cả ngữ pháp lẫn ngữ nghĩa.",
          "translation": "Để cải thiện quy trình làm việc, bộ phận nhân sự đã áp dụng một quy trình mới để xử lý các yêu cầu nghỉ phép của nhân viên."
        },
        {
          "id": "q_noun_pronoun_016",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The new gift boxes are highly anticipated; many corporate clients have already pre-ordered _____ for the upcoming holiday.",
          "options": [
            {
              "key": "A",
              "text": "it"
            },
            {
              "key": "B",
              "text": "them"
            },
            {
              "key": "C",
              "text": "their"
            },
            {
              "key": "D",
              "text": "themselves"
            }
          ],
          "correct_answer": "B",
          "hint": "Đại từ cần điền đóng vai trò tân ngữ thay thế cho cụm danh từ số nhiều 'the new gift boxes' ở mệnh đề phía trước.",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' được dùng để thay thế cho danh từ số nhiều 'gift boxes' để tránh lặp từ, đồng thời làm tân ngữ cho động từ 'pre-ordered'.",
          "translation": "Những hộp quà tặng mới rất được mong đợi; nhiều khách hàng doanh nghiệp đã đặt trước chúng cho kỳ nghỉ sắp tới."
        },
        {
          "id": "q_noun_pronoun_017",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "Consistent daily _____ is the most effective method for mastering a foreign language in a short amount of time.",
          "options": [
            {
              "key": "A",
              "text": "practice"
            },
            {
              "key": "B",
              "text": "practices"
            },
            {
              "key": "C",
              "text": "practiced"
            },
            {
              "key": "D",
              "text": "practicing"
            }
          ],
          "correct_answer": "A",
          "hint": "Cần một danh từ không đếm được đóng vai trò chủ ngữ đi với động từ to be 'is'.",
          "explanation": "Chính xác. Danh từ 'practice' (sự thực hành/luyện tập) đứng sau tính từ 'daily' tạo thành cụm chủ ngữ số ít phù hợp với động từ 'is'.",
          "translation": "Việc thực hành đều đặn hàng ngày là phương pháp hiệu quả nhất để làm chủ một ngoại ngữ trong một khoảng thời gian ngắn."
        },
        {
          "id": "q_noun_pronoun_018",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The software engineers are proud of the new timekeeping feature because they designed it _____.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "their"
            },
            {
              "key": "C",
              "text": "themselves"
            },
            {
              "key": "D",
              "text": "them"
            }
          ],
          "correct_answer": "C",
          "hint": "Để nhấn mạnh việc chính chủ ngữ thực hiện hành động (không nhờ ai khác), ta đặt đại từ phản thân ở cuối mệnh đề.",
          "explanation": "Chính xác. Đại từ phản thân 'themselves' dùng để nhấn mạnh rằng chính các kỹ sư phần mềm ('they') đã tự tay thiết kế tính năng này.",
          "translation": "Các kỹ sư phần mềm rất tự hào về tính năng chấm công mới bởi vì chính họ đã tự thiết kế nó."
        },
        {
          "id": "q_noun_pronoun_019",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "A clear _____ of the target audience is crucial when launching a specialized product on the website.",
          "options": [
            {
              "key": "A",
              "text": "understand"
            },
            {
              "key": "B",
              "text": "understandable"
            },
            {
              "key": "C",
              "text": "understanding"
            },
            {
              "key": "D",
              "text": "understands"
            }
          ],
          "correct_answer": "C",
          "hint": "Mạo từ 'A' và tính từ 'clear' đòi hỏi một danh từ theo sau để hoàn thành cụm danh từ làm chủ ngữ.",
          "explanation": "Chính xác. Danh động từ/Danh từ 'understanding' (sự thấu hiểu) đi kèm giới từ 'of' tạo thành cụm danh từ mang nghĩa 'sự hiểu biết rõ ràng về...'.",
          "translation": "Sự thấu hiểu rõ ràng về đối tượng khách hàng mục tiêu là rất quan trọng khi ra mắt một sản phẩm chuyên biệt trên trang web."
        },
        {
          "id": "q_noun_pronoun_020",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The project director awarded the top developer a bonus because of _____ outstanding performance this quarter.",
          "options": [
            {
              "key": "A",
              "text": "he"
            },
            {
              "key": "B",
              "text": "him"
            },
            {
              "key": "C",
              "text": "his"
            },
            {
              "key": "D",
              "text": "himself"
            }
          ],
          "correct_answer": "C",
          "hint": "Cần một từ thể hiện sự sở hữu đứng trước cụm danh từ 'outstanding performance' (hiệu suất xuất sắc).",
          "explanation": "Chính xác. Tính từ sở hữu 'his' đứng trước danh từ để bổ nghĩa, chỉ hiệu suất xuất sắc thuộc về lập trình viên xuất sắc nhất ('the top developer').",
          "translation": "Giám đốc dự án đã thưởng cho lập trình viên xuất sắc nhất một khoản tiền thưởng vì hiệu suất xuất sắc của anh ấy trong quý này."
        },
        {
          "id": "q_noun_pronoun_021",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The building manager announced that routine _____ of the air conditioning system will begin next week.",
          "options": [
            {
              "key": "A",
              "text": "maintain"
            },
            {
              "key": "B",
              "text": "maintaining"
            },
            {
              "key": "C",
              "text": "maintenance"
            },
            {
              "key": "D",
              "text": "maintained"
            }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'routine' (định kỳ, thường xuyên) cần một danh từ theo sau để tạo thành cụm danh từ đóng vai trò chủ ngữ cho mệnh đề 'that...'.",
          "explanation": "Chính xác. Từ cần điền là danh từ 'maintenance' (sự bảo trì). Cụm 'routine maintenance' mang nghĩa là 'sự bảo trì định kỳ'.",
          "translation": "Quản lý tòa nhà thông báo rằng việc bảo trì định kỳ hệ thống điều hòa không khí sẽ bắt đầu vào tuần tới."
        },
        {
          "id": "q_noun_pronoun_022",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "The instructions were so complicated that the new employees could not figure them out by _____.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "their"
            },
            {
              "key": "C",
              "text": "them"
            },
            {
              "key": "D",
              "text": "themselves"
            }
          ],
          "correct_answer": "D",
          "hint": "Giới từ 'by' đi kèm với một đại từ phản thân mang ý nghĩa tự mình làm gì đó mà không cần sự trợ giúp.",
          "explanation": "Chính xác. Đại từ phản thân 'themselves' tương ứng với chủ ngữ số nhiều 'the new employees', tạo thành cụm 'by themselves' (tự họ).",
          "translation": "Các hướng dẫn quá phức tạp đến nỗi những nhân viên mới không thể tự mình hiểu được chúng."
        },
        {
          "id": "q_noun_pronoun_023",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "All applicants must submit their letters of _____ to the human resources department before the deadline.",
          "options": [
            {
              "key": "A",
              "text": "recommend"
            },
            {
              "key": "B",
              "text": "recommending"
            },
            {
              "key": "C",
              "text": "recommendation"
            },
            {
              "key": "D",
              "text": "recommended"
            }
          ],
          "correct_answer": "C",
          "hint": "Giới từ 'of' luôn yêu cầu một danh từ hoặc danh động từ (V-ing) theo sau. Trong trường hợp này, ta có một cụm danh từ ghép cố định.",
          "explanation": "Chính xác. Danh từ 'recommendation' kết hợp với 'letters of' tạo thành cụm từ cố định 'letters of recommendation' mang nghĩa là thư giới thiệu.",
          "translation": "Tất cả các ứng viên phải nộp thư giới thiệu của họ cho bộ phận nhân sự trước hạn chót."
        },
        {
          "id": "q_noun_pronoun_024",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The supervisor needs to know _____ left the confidential documents on the conference table.",
          "options": [
            {
              "key": "A",
              "text": "who"
            },
            {
              "key": "B",
              "text": "whom"
            },
            {
              "key": "C",
              "text": "whose"
            },
            {
              "key": "D",
              "text": "whichever"
            }
          ],
          "correct_answer": "A",
          "hint": "Chỗ trống cần một đại từ nghi vấn đóng vai trò làm chủ ngữ cho động từ 'left' ở mệnh đề phía sau.",
          "explanation": "Chính xác. Đại từ 'who' đóng vai trò chủ ngữ cho động từ 'left'. 'Whom' chỉ làm tân ngữ, còn 'whose' chỉ sự sở hữu.",
          "translation": "Người giám sát cần biết ai đã để lại các tài liệu mật trên bàn hội nghị."
        },
        {
          "id": "q_noun_pronoun_025",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Due to the severe weather conditions, the airline offered financial _____ to all affected passengers.",
          "options": [
            {
              "key": "A",
              "text": "compensate"
            },
            {
              "key": "B",
              "text": "compensated"
            },
            {
              "key": "C",
              "text": "compensation"
            },
            {
              "key": "D",
              "text": "compensating"
            }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'financial' (thuộc về tài chính) cần một danh từ đi liền phía sau để bổ nghĩa.",
          "explanation": "Chính xác. Danh từ 'compensation' (sự bồi thường) kết hợp với 'financial' tạo thành cụm 'financial compensation' (khoản bồi thường tài chính).",
          "translation": "Do điều kiện thời tiết khắc nghiệt, hãng hàng không đã đề nghị một khoản bồi thường tài chính cho tất cả các hành khách bị ảnh hưởng."
        },
        {
          "id": "q_noun_pronoun_026",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "Our marketing strategy focuses on digital advertising, whereas _____ relies heavily on print media.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "their"
            },
            {
              "key": "C",
              "text": "them"
            },
            {
              "key": "D",
              "text": "theirs"
            }
          ],
          "correct_answer": "D",
          "hint": "Cần một đại từ để thay thế cho cụm 'their marketing strategy' nhằm tránh lặp lại từ 'strategy' đã dùng ở vế trước.",
          "explanation": "Chính xác. Đại từ sở hữu 'theirs' đóng vai trò làm chủ ngữ cho vế sau, mang ý nghĩa thay thế cho 'their strategy' (chiến lược của họ).",
          "translation": "Chiến lược tiếp thị của chúng tôi tập trung vào quảng cáo kỹ thuật số, trong khi chiến lược của họ phụ thuộc nhiều vào phương tiện truyền thông in ấn."
        },
        {
          "id": "q_noun_pronoun_027",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "_____ at the annual tech convention is strictly limited to registered members and invited guests.",
          "options": [
            {
              "key": "A",
              "text": "Attend"
            },
            {
              "key": "B",
              "text": "Attendant"
            },
            {
              "key": "C",
              "text": "Attendance"
            },
            {
              "key": "D",
              "text": "Attended"
            }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống nằm ở đầu câu, đóng vai trò làm chủ ngữ cho động từ 'is'. Ta cần một danh từ trừu tượng chỉ việc tham dự.",
          "explanation": "Chính xác. Danh từ 'Attendance' (sự tham dự) làm chủ ngữ cho câu. 'Attendant' là danh từ chỉ người (người phục vụ/người tham dự) nhưng nếu dùng đếm được thì phải có mạo từ hoặc dạng số nhiều.",
          "translation": "Sự tham dự tại hội nghị công nghệ thường niên bị giới hạn nghiêm ngặt cho các thành viên đã đăng ký và khách mời."
        },
        {
          "id": "q_noun_pronoun_028",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "The board of directors invited the lead investor to join _____ for a celebratory dinner after the meeting.",
          "options": [
            {
              "key": "A",
              "text": "they"
            },
            {
              "key": "B",
              "text": "their"
            },
            {
              "key": "C",
              "text": "them"
            },
            {
              "key": "D",
              "text": "themselves"
            }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'join' (tham gia cùng) cần một tân ngữ đứng phía sau. Ở đây chỉ hội đồng quản trị (số nhiều).",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' thay thế cho cụm danh từ 'The board of directors' ở phía trước.",
          "translation": "Hội đồng quản trị đã mời nhà đầu tư chính tham gia cùng họ trong bữa tối kỷ niệm sau cuộc họp."
        },
        {
          "id": "q_noun_pronoun_029",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Before signing the lease agreement, please read the terms and conditions with extreme _____.",
          "options": [
            {
              "key": "A",
              "text": "caution"
            },
            {
              "key": "B",
              "text": "cautious"
            },
            {
              "key": "C",
              "text": "cautiously"
            },
            {
              "key": "D",
              "text": "cautioned"
            }
          ],
          "correct_answer": "A",
          "hint": "Sau giới từ 'with' và tính từ 'extreme', chúng ta bắt buộc phải sử dụng một danh từ.",
          "explanation": "Chính xác. Danh từ 'caution' (sự cẩn trọng) đi cùng tính từ 'extreme' tạo thành cụm 'with extreme caution' (với sự cẩn trọng tột độ).",
          "translation": "Trước khi ký thỏa thuận thuê mướn, vui lòng đọc các điều khoản và điều kiện với sự cẩn trọng tột độ."
        },
        {
          "id": "q_noun_pronoun_030",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The new software update fixed several bugs, specifically _____ that caused the system to crash unexpectedly.",
          "options": [
            {
              "key": "A",
              "text": "this"
            },
            {
              "key": "B",
              "text": "that"
            },
            {
              "key": "C",
              "text": "these"
            },
            {
              "key": "D",
              "text": "those"
            }
          ],
          "correct_answer": "D",
          "hint": "Cần một đại từ chỉ định số nhiều để thay thế cho danh từ 'bugs' (lỗi phần mềm) vừa được nhắc đến trước đó.",
          "explanation": "Chính xác. Đại từ 'those' thay thế cho 'bugs' (số nhiều). Cấu trúc 'those that/who...' thường được dùng để thay thế cho danh từ số nhiều đã nhắc đến, nhằm chuẩn bị cho một mệnh đề quan hệ theo sau.",
          "translation": "Bản cập nhật phần mềm mới đã sửa một số lỗi, cụ thể là những lỗi đã khiến hệ thống bị sập bất ngờ."
        },
        {
          "id": "q_noun_pronoun_031",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The seamless _____ of the mobile timekeeping app with the HR portal will save the company hours of administrative work.",
          "options": [
            { "key": "A", "text": "integrate" },
            { "key": "B", "text": "integrating" },
            { "key": "C", "text": "integration" },
            { "key": "D", "text": "integrators" }
          ],
          "correct_answer": "C",
          "hint": "Cần một danh từ trừu tượng đứng sau tính từ 'seamless' (liền mạch) để làm chủ ngữ cho câu.",
          "explanation": "Chính xác. Danh từ 'integration' (sự tích hợp) là lựa chọn phù hợp nhất để đi cùng giới từ 'of' và 'with', mang nghĩa 'sự tích hợp liền mạch của ứng dụng... với cổng thông tin...'.",
          "translation": "Sự tích hợp liền mạch của ứng dụng chấm công di động với cổng thông tin nhân sự sẽ giúp công ty tiết kiệm hàng giờ làm công việc hành chính."
        },
        {
          "id": "q_noun_pronoun_032",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "The Happy Box company guarantees that all of _____ gift boxes are packed with eco-friendly materials.",
          "options": [
            { "key": "A", "text": "it" },
            { "key": "B", "text": "its" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "B",
          "hint": "Chú ý chủ ngữ 'The Happy Box company' là một danh từ số ít, chỉ một tổ chức/công ty.",
          "explanation": "Chính xác. Tính từ sở hữu 'its' (của nó) đứng trước cụm danh từ 'gift boxes' để chỉ sự sở hữu của công ty (danh từ số ít).",
          "translation": "Công ty Happy Box đảm bảo rằng tất cả các hộp quà tặng của họ đều được đóng gói bằng vật liệu thân thiện với môi trường."
        },
        {
          "id": "q_noun_pronoun_033",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Establishing a daily _____ of speaking English on camera will significantly improve your fluency over time.",
          "options": [
            { "key": "A", "text": "routine" },
            { "key": "B", "text": "routinely" },
            { "key": "C", "text": "routines" },
            { "key": "D", "text": "routinize" }
          ],
          "correct_answer": "A",
          "hint": "Mạo từ 'a' và tính từ 'daily' yêu cầu một danh từ đếm được ở dạng số ít theo sau.",
          "explanation": "Chính xác. Danh từ số ít 'routine' (thói quen, nề nếp) đứng sau 'a daily' tạo thành cụm từ 'một thói quen hàng ngày'.",
          "translation": "Việc thiết lập một thói quen nói tiếng Anh trước ống kính hàng ngày sẽ cải thiện đáng kể sự trôi chảy của bạn theo thời gian."
        },
        {
          "id": "q_noun_pronoun_034",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "Students learning two foreign languages simultaneously should not compare _____ to those learning only one.",
          "options": [
            { "key": "A", "text": "them" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "themselves" },
            { "key": "D", "text": "they" }
          ],
          "correct_answer": "C",
          "hint": "Khi chủ ngữ (Students) và tân ngữ của hành động (compare) cùng chỉ một đối tượng, ta phải dùng loại đại từ nào?",
          "explanation": "Chính xác. Đại từ phản thân 'themselves' được dùng vì những học sinh này đang tự so sánh chính bản thân họ với những người khác.",
          "translation": "Những học sinh học hai ngoại ngữ cùng lúc không nên tự so sánh bản thân họ với những người chỉ học một ngôn ngữ."
        },
        {
          "id": "q_noun_pronoun_035",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "The launch of the new educational _____ was temporarily delayed due to some unexpected technical bugs.",
          "options": [
            { "key": "A", "text": "software" },
            { "key": "B", "text": "soft" },
            { "key": "C", "text": "soften" },
            { "key": "D", "text": "softly" }
          ],
          "correct_answer": "A",
          "hint": "Chỗ trống cần một danh từ để kết hợp với tính từ 'educational' tạo thành cụm danh từ đóng vai trò bổ ngữ cho 'The launch of'.",
          "explanation": "Chính xác. Danh từ 'software' (phần mềm) đi với 'educational' tạo thành cụm 'educational software' (phần mềm giáo dục).",
          "translation": "Việc ra mắt phần mềm giáo dục mới đã bị trì hoãn tạm thời do một số lỗi kỹ thuật không mong muốn."
        },
        {
          "id": "q_noun_pronoun_036",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Several employees forgot to log their work hours, so the HR manager had to remind _____ via email.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "themselves" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'remind' (nhắc nhở) cần một tân ngữ theo sau để chỉ đối tượng nhận hành động.",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' thay thế cho 'Several employees' để làm tân ngữ nhận hành động nhắc nhở từ quản lý nhân sự.",
          "translation": "Vài nhân viên đã quên ghi lại giờ làm việc của họ, vì vậy người quản lý nhân sự đã phải nhắc nhở họ qua email."
        },
        {
          "id": "q_noun_pronoun_037",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The sudden increase in sales _____ for the custom gift boxes surprised the entire marketing team.",
          "options": [
            { "key": "A", "text": "volume" },
            { "key": "B", "text": "volumes" },
            { "key": "C", "text": "voluminous" },
            { "key": "D", "text": "voluminously" }
          ],
          "correct_answer": "A",
          "hint": "Cụm danh từ ghép 'sales volume' mang nghĩa là doanh số/khối lượng bán hàng. Đây là một thuật ngữ kinh doanh rất phổ biến.",
          "explanation": "Chính xác. Danh từ 'volume' ghép với 'sales' tạo thành cụm 'sales volume' (khối lượng bán ra/sản lượng tiêu thụ). Cụm này thường được dùng ở dạng số ít để chỉ tổng lượng.",
          "translation": "Sự gia tăng đột ngột về khối lượng bán hàng của các hộp quà tặng tùy chỉnh đã làm ngạc nhiên toàn bộ đội ngũ tiếp thị."
        },
        {
          "id": "q_noun_pronoun_038",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The lead developer, Mr. Chen, designed the complex database architecture all by _____.",
          "options": [
            { "key": "A", "text": "him" },
            { "key": "B", "text": "his" },
            { "key": "C", "text": "he" },
            { "key": "D", "text": "himself" }
          ],
          "correct_answer": "D",
          "hint": "Cụm 'all by + [đại từ phản thân]' được dùng để nhấn mạnh ai đó tự mình làm toàn bộ một việc mà không ai giúp sức.",
          "explanation": "Chính xác. Đại từ phản thân 'himself' được dùng với cụm 'all by' để chỉ việc ông Chen đã tự tay thiết kế kiến trúc cơ sở dữ liệu.",
          "translation": "Lập trình viên chính, ông Chen, đã hoàn toàn tự mình thiết kế kiến trúc cơ sở dữ liệu phức tạp này."
        },
        {
          "id": "q_noun_pronoun_039",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Achieving a high _____ on international language exams requires a well-structured and disciplined study plan.",
          "options": [
            { "key": "A", "text": "score" },
            { "key": "B", "text": "scores" },
            { "key": "C", "text": "scored" },
            { "key": "D", "text": "scoring" }
          ],
          "correct_answer": "A",
          "hint": "Mạo từ 'a' và tính từ 'high' yêu cầu một danh từ số ít theo sau.",
          "explanation": "Chính xác. Danh từ số ít 'score' (điểm số) đứng sau cụm 'a high' tạo thành tân ngữ cho danh động từ 'Achieving'.",
          "translation": "Việc đạt được điểm số cao trong các kỳ thi ngôn ngữ quốc tế đòi hỏi một kế hoạch học tập có cấu trúc tốt và kỷ luật."
        },
        {
          "id": "q_noun_pronoun_040",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Please notify the director immediately if you have any questions regarding _____ upcoming business trip to Tokyo.",
          "options": [
            { "key": "A", "text": "her" },
            { "key": "B", "text": "hers" },
            { "key": "C", "text": "she" },
            { "key": "D", "text": "herself" }
          ],
          "correct_answer": "A",
          "hint": "Chỗ trống đứng trước cụm danh từ 'upcoming business trip', cần một từ đóng vai trò như một tính từ để thể hiện sự sở hữu.",
          "explanation": "Chính xác. Tính từ sở hữu 'her' đứng trước cụm danh từ để bổ nghĩa, chỉ chuyến công tác sắp tới của giám đốc (nữ).",
          "translation": "Vui lòng thông báo cho giám đốc ngay lập tức nếu bạn có bất kỳ câu hỏi nào liên quan đến chuyến công tác sắp tới của cô ấy tới Tokyo."
        },
        {
          "id": "q_noun_pronoun_041",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The board members finally reached an _____ after discussing the proposed annual budget for over three hours.",
          "options": [
            { "key": "A", "text": "agree" },
            { "key": "B", "text": "agreed" },
            { "key": "C", "text": "agreement" },
            { "key": "D", "text": "agreeable" }
          ],
          "correct_answer": "C",
          "hint": "Sau mạo từ 'an', chúng ta cần một danh từ số ít bắt đầu bằng một nguyên âm.",
          "explanation": "Chính xác. Danh từ 'agreement' (sự thỏa thuận/sự đồng tình). Cụm 'reach an agreement' là một cụm từ cố định mang nghĩa 'đạt được thỏa thuận'.",
          "translation": "Các thành viên hội đồng quản trị cuối cùng đã đạt được thỏa thuận sau khi thảo luận về ngân sách hàng năm được đề xuất trong hơn ba giờ."
        },
        {
          "id": "q_noun_pronoun_042",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "_____ who wish to participate in the 30-day English speaking challenge must sign up online by midnight.",
          "options": [
            { "key": "A", "text": "They" },
            { "key": "B", "text": "Them" },
            { "key": "C", "text": "Those" },
            { "key": "D", "text": "These" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc '[Đại từ] + who' dùng để thay thế cho cụm 'The people who' (Những người mà...). Động từ 'wish' số nhiều nên cần đại từ chỉ định số nhiều.",
          "explanation": "Chính xác. Đại từ chỉ định 'Those' kết hợp với mệnh đề quan hệ 'who' tạo thành cấu trúc 'Those who' (Những người mà). 'They' không đi trực tiếp với mệnh đề quan hệ 'who'.",
          "translation": "Những người muốn tham gia thử thách nói tiếng Anh trong 30 ngày phải đăng ký trực tuyến trước nửa đêm."
        },
        {
          "id": "q_noun_pronoun_043",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "All candidates applying for the senior role must have at least five years of _____ in human resources management.",
          "options": [
            { "key": "A", "text": "experience" },
            { "key": "B", "text": "experiences" },
            { "key": "C", "text": "experienced" },
            { "key": "D", "text": "experiencing" }
          ],
          "correct_answer": "A",
          "hint": "Khi mang nghĩa 'kinh nghiệm làm việc', từ này là một danh từ không đếm được.",
          "explanation": "Chính xác. Danh từ 'experience' (kinh nghiệm) ở dạng không đếm được đi sau giới từ 'of'. Nếu dùng 'experiences' (đếm được), nó mang nghĩa là 'những trải nghiệm' chứ không phải kinh nghiệm làm việc.",
          "translation": "Tất cả ứng viên ứng tuyển vào vai trò quản lý cấp cao phải có ít nhất năm năm kinh nghiệm trong lĩnh vực quản lý nhân sự."
        },
        {
          "id": "q_noun_pronoun_044",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The marketing team has submitted their progress report, but the finance department has not finished _____ yet.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "theirs" },
            { "key": "D", "text": "them" }
          ],
          "correct_answer": "C",
          "hint": "Cần một đại từ sở hữu đứng độc lập để thay thế cho cụm 'their progress report' nhằm tránh sự lặp từ trong câu.",
          "explanation": "Chính xác. Đại từ sở hữu 'theirs' thay thế cho cụm 'their report' (báo cáo của họ). Không dùng 'their' vì theo sau không có danh từ.",
          "translation": "Nhóm tiếp thị đã nộp báo cáo tiến độ của họ, nhưng bộ phận tài chính thì vẫn chưa hoàn thành bản báo cáo của họ."
        },
        {
          "id": "q_noun_pronoun_045",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "At Happy Box, ensuring absolute customer _____ is our top priority above everything else.",
          "options": [
            { "key": "A", "text": "satisfy" },
            { "key": "B", "text": "satisfying" },
            { "key": "C", "text": "satisfaction" },
            { "key": "D", "text": "satisfied" }
          ],
          "correct_answer": "C",
          "hint": "Cần một danh từ đứng sau 'customer' tạo thành cụm danh từ làm tân ngữ cho danh động từ 'ensuring'.",
          "explanation": "Chính xác. Danh từ 'satisfaction' kết hợp tạo thành cụm từ vô cùng phổ biến trong kinh doanh: 'customer satisfaction' (sự hài lòng của khách hàng).",
          "translation": "Tại Happy Box, việc đảm bảo sự hài lòng tuyệt đối của khách hàng là ưu tiên hàng đầu của chúng tôi trên hết mọi thứ."
        },
        {
          "id": "q_noun_pronoun_046",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The new ergonomic office chairs are much more comfortable than the previous _____ we used to have.",
          "options": [
            { "key": "A", "text": "one" },
            { "key": "B", "text": "ones" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "their" }
          ],
          "correct_answer": "B",
          "hint": "Cần một đại từ thay thế cho danh từ số nhiều 'chairs' ở vế trước để tránh lặp từ.",
          "explanation": "Chính xác. Đại từ thay thế 'ones' được dùng ở số nhiều để thay cho từ 'chairs'. Cụm 'the previous ones' nghĩa là 'những chiếc ghế trước đó'.",
          "translation": "Những chiếc ghế văn phòng công thái học mới thì thoải mái hơn nhiều so với những chiếc trước đây mà chúng ta từng có."
        },
        {
          "id": "q_noun_pronoun_047",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "The CEO's sudden _____ from the software company caused the stock prices to drop significantly.",
          "options": [
            { "key": "A", "text": "depart" },
            { "key": "B", "text": "departs" },
            { "key": "C", "text": "departure" },
            { "key": "D", "text": "departed" }
          ],
          "correct_answer": "C",
          "hint": "Đứng sau sở hữu cách ('s) và tính từ (sudden), chúng ta bắt buộc phải điền một danh từ.",
          "explanation": "Chính xác. Danh từ 'departure' (sự rời đi / sự khởi hành) đóng vai trò là danh từ chính của cụm chủ ngữ 'The CEO's sudden departure'.",
          "translation": "Sự rời đi đột ngột của Giám đốc điều hành khỏi công ty phần mềm đã khiến giá cổ phiếu sụt giảm đáng kể."
        },
        {
          "id": "q_noun_pronoun_048",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "If the application crashes again during testing, users should report the issue so the tech team can fix _____ promptly.",
          "options": [
            { "key": "A", "text": "its" },
            { "key": "B", "text": "it" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "themselves" }
          ],
          "correct_answer": "B",
          "hint": "Động từ 'fix' cần một tân ngữ theo sau. Tân ngữ này thay thế cho 'the issue' (số ít) được nhắc đến ở vế trước.",
          "explanation": "Chính xác. Đại từ tân ngữ 'it' được dùng để thay thế cho danh từ số ít 'the issue' (vấn đề) nhằm tránh lặp từ.",
          "translation": "Nếu ứng dụng lại bị sập trong quá trình thử nghiệm, người dùng nên báo cáo sự cố để nhóm kỹ thuật có thể khắc phục nó ngay lập tức."
        },
        {
          "id": "q_noun_pronoun_049",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "In order to secure funding, the startup team must present a compelling _____ to the investors by Friday.",
          "options": [
            { "key": "A", "text": "propose" },
            { "key": "B", "text": "proposed" },
            { "key": "C", "text": "proposal" },
            { "key": "D", "text": "proposing" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'compelling' (hấp dẫn, thuyết phục) cần một danh từ theo sau làm tân ngữ cho động từ 'present'.",
          "explanation": "Chính xác. Danh từ 'proposal' (bản đề xuất/kế hoạch đề xuất) đứng sau 'a compelling' tạo thành cụm 'một bản đề xuất đầy sức thuyết phục'.",
          "translation": "Để đảm bảo được nguồn vốn, nhóm khởi nghiệp phải trình bày một bản đề xuất đầy sức thuyết phục cho các nhà đầu tư trước thứ Sáu."
        },
        {
          "id": "q_noun_pronoun_050",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "Although the project idea was excellent, the investment committee ultimately decided not to fund _____.",
          "options": [
            { "key": "A", "text": "itself" },
            { "key": "B", "text": "its" },
            { "key": "C", "text": "it" },
            { "key": "D", "text": "them" }
          ],
          "correct_answer": "C",
          "hint": "Động từ 'fund' (tài trợ) đang thiếu một tân ngữ. Tân ngữ này phải thay thế cho 'the project idea' (ý tưởng dự án - số ít).",
          "explanation": "Chính xác. Đại từ 'it' làm tân ngữ thay thế cho cụm danh từ số ít 'the project idea'.",
          "translation": "Mặc dù ý tưởng dự án rất xuất sắc, ủy ban đầu tư cuối cùng đã quyết định không tài trợ cho nó."
        },
        {
          "id": "q_noun_pronoun_061",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The HR department requires a formal _____ of absence from any employee taking more than three consecutive sick days.",
          "options": [
            { "key": "A", "text": "notice" },
            { "key": "B", "text": "noticed" },
            { "key": "C", "text": "notices" },
            { "key": "D", "text": "noticing" }
          ],
          "correct_answer": "A",
          "hint": "Cần một danh từ số ít đứng sau mạo từ 'a' và tính từ 'formal' để tạo thành cụm danh từ làm tân ngữ cho động từ 'requires'.",
          "explanation": "Chính xác. Danh từ 'notice' (thông báo) đứng sau tính từ 'formal' tạo thành cụm 'a formal notice' (một thông báo chính thức). Dạng số nhiều 'notices' bị loại vì có mạo từ 'a' phía trước.",
          "translation": "Bộ phận nhân sự yêu cầu một thông báo nghỉ phép chính thức từ bất kỳ nhân viên nào nghỉ ốm quá 3 ngày liên tiếp."
        },
        {
          "id": "q_noun_pronoun_062",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Ms. Lin creates engaging TikTok videos to help students improve _____ English speaking skills.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống cần một từ thể hiện sự sở hữu đối với cụm danh từ 'English speaking skills' của những học sinh (students).",
          "explanation": "Chính xác. Tính từ sở hữu 'their' bổ nghĩa cho cụm danh từ phía sau, chỉ 'các kỹ năng nói tiếng Anh của họ (của học sinh)'.",
          "translation": "Cô Lin tạo ra các video TikTok hấp dẫn để giúp học sinh cải thiện kỹ năng nói tiếng Anh của họ."
        },
        {
          "id": "q_noun_pronoun_063",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "User _____ is a critical factor when designing the interface for the new EduKit learning platform.",
          "options": [
            { "key": "A", "text": "engage" },
            { "key": "B", "text": "engagement" },
            { "key": "C", "text": "engaged" },
            { "key": "D", "text": "engagingly" }
          ],
          "correct_answer": "B",
          "hint": "Từ 'User' ở đây đóng vai trò bổ nghĩa cho một danh từ đứng ngay sau nó để tạo thành cụm danh từ ghép làm chủ ngữ.",
          "explanation": "Chính xác. Danh từ 'engagement' kết hợp với 'User' tạo thành cụm danh từ phổ biến trong công nghệ: 'User engagement' (sự tương tác/sự gắn kết của người dùng).",
          "translation": "Sự tương tác của người dùng là một yếu tố then chốt khi thiết kế giao diện cho nền tảng học tập EduKit mới."
        },
        {
          "id": "q_noun_pronoun_064",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The Happy Box team takes pride in curating unique gift boxes that speak for _____.",
          "options": [
            { "key": "A", "text": "them" },
            { "key": "B", "text": "they" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "themselves" }
          ],
          "correct_answer": "D",
          "hint": "Cụm thành ngữ 'speak for + [đại từ phản thân]' có nghĩa là 'tự nói lên tất cả / tự chứng minh giá trị của mình'. Nó đang bổ nghĩa cho danh từ số nhiều 'gift boxes'.",
          "explanation": "Chính xác. Đại từ phản thân 'themselves' đóng vai trò tân ngữ của giới từ 'for', ý nói những hộp quà này tự chứng minh được sự độc đáo và giá trị của chính chúng.",
          "translation": "Đội ngũ Happy Box tự hào trong việc tuyển chọn những hộp quà độc đáo tự nói lên giá trị của chính chúng."
        },
        {
          "id": "q_noun_pronoun_065",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "We need to increase our advertising budget to boost the overall _____ of the new product line.",
          "options": [
            { "key": "A", "text": "visible" },
            { "key": "B", "text": "visually" },
            { "key": "C", "text": "visibility" },
            { "key": "D", "text": "vision" }
          ],
          "correct_answer": "C",
          "hint": "Sau mạo từ 'the' và tính từ 'overall' (toàn diện/tổng thể), chúng ta cần một danh từ.",
          "explanation": "Chính xác. Danh từ 'visibility' (sự hiển thị / mức độ nhận diện) là từ phù hợp nhất về mặt ngữ nghĩa trong lĩnh vực marketing (brand visibility).",
          "translation": "Chúng ta cần tăng ngân sách quảng cáo để thúc đẩy mức độ nhận diện tổng thể của dòng sản phẩm mới."
        },
        {
          "id": "q_noun_pronoun_066",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Students studying for the JLPT N3 exam should familiarize _____ with the test format and time limits.",
          "options": [
            { "key": "A", "text": "them" },
            { "key": "B", "text": "they" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "themselves" }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc 'familiarize oneself with something' nghĩa là tự làm cho bản thân mình quen với điều gì đó.",
          "explanation": "Chính xác. Đại từ phản thân 'themselves' tương ứng với chủ ngữ số nhiều 'Students' ở đầu câu.",
          "translation": "Học sinh đang ôn tập cho kỳ thi JLPT N3 nên tự làm quen với định dạng bài thi và giới hạn thời gian."
        },
        {
          "id": "q_noun_pronoun_067",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Please accept our sincere _____ for the temporary interruption of the mobile timekeeping service yesterday.",
          "options": [
            { "key": "A", "text": "apologize" },
            { "key": "B", "text": "apologized" },
            { "key": "C", "text": "apologetic" },
            { "key": "D", "text": "apologies" }
          ],
          "correct_answer": "D",
          "hint": "Tính từ sở hữu 'our' và tính từ 'sincere' (chân thành) đòi hỏi một danh từ theo sau làm tân ngữ cho động từ 'accept'.",
          "explanation": "Chính xác. Danh từ 'apologies' (những lời xin lỗi) tạo thành cụm từ lịch sự rất phổ biến trong email công việc: 'accept our sincere apologies'.",
          "translation": "Vui lòng chấp nhận lời xin lỗi chân thành của chúng tôi vì sự gián đoạn tạm thời của dịch vụ chấm công trên di động vào ngày hôm qua."
        },
        {
          "id": "q_noun_pronoun_068",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "The development team fixed the bugs in the application, making _____ much faster and more reliable.",
          "options": [
            { "key": "A", "text": "it" },
            { "key": "B", "text": "its" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "they" }
          ],
          "correct_answer": "A",
          "hint": "Cấu trúc 'make + tân ngữ + tính từ' (làm cho cái gì đó trở nên...). Tân ngữ này cần thay thế cho danh từ số ít 'the application'.",
          "explanation": "Chính xác. Đại từ tân ngữ 'it' thay thế cho danh từ số ít 'the application' (ứng dụng). Nếu chọn 'them' thì nó sẽ thay thế cho 'bugs', sai về mặt logic (lỗi không thể nhanh và đáng tin cậy hơn).",
          "translation": "Nhóm phát triển đã sửa các lỗi trong ứng dụng, làm cho nó nhanh hơn và đáng tin cậy hơn nhiều."
        },
        {
          "id": "q_noun_pronoun_069",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "Achieving native-like _____ in a foreign language requires years of dedicated practice and cultural immersion.",
          "options": [
            { "key": "A", "text": "fluent" },
            { "key": "B", "text": "fluently" },
            { "key": "C", "text": "fluency" },
            { "key": "D", "text": "fluencies" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ ghép 'native-like' (giống như người bản xứ) cần một danh từ không đếm được bổ nghĩa cho nó.",
          "explanation": "Chính xác. Danh từ 'fluency' (sự trôi chảy/lưu loát) điền vào chỗ trống tạo thành cụm danh từ làm tân ngữ cho động từ 'Achieving'.",
          "translation": "Việc đạt được sự trôi chảy như người bản xứ trong một ngoại ngữ đòi hỏi nhiều năm luyện tập tận tâm và hòa mình vào văn hóa."
        },
        {
          "id": "q_noun_pronoun_070",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The director requested that all department heads submit _____ quarterly reports by the end of the week.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống đứng trước cụm danh từ 'quarterly reports' (các báo cáo hàng quý), cần một từ chỉ sự sở hữu.",
          "explanation": "Chính xác. Tính từ sở hữu 'their' thay thế cho cụm danh từ số nhiều 'all department heads' (tất cả các trưởng phòng) để chỉ báo cáo của họ.",
          "translation": "Giám đốc yêu cầu tất cả trưởng phòng nộp báo cáo hàng quý của họ trước cuối tuần."
        },
        {
          "id": "q_noun_pronoun_071",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The new mobile timekeeping app has a built-in feature that automatically tracks employee _____.",
          "options": [
            { "key": "A", "text": "attend" },
            { "key": "B", "text": "attends" },
            { "key": "C", "text": "attendance" },
            { "key": "D", "text": "attending" }
          ],
          "correct_answer": "C",
          "hint": "Cần một danh từ đứng sau 'employee' để tạo thành cụm danh từ ghép đóng vai trò tân ngữ cho động từ 'tracks'.",
          "explanation": "Chính xác. Danh từ 'attendance' kết hợp với 'employee' tạo thành cụm từ phổ biến trong nhân sự: 'employee attendance' (sự chuyên cần/điểm danh của nhân viên).",
          "translation": "Ứng dụng chấm công trên thiết bị di động mới có một tính năng tích hợp tự động theo dõi sự chuyên cần của nhân viên."
        },
        {
          "id": "q_noun_pronoun_072",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Viewers of the daily English practice TikTok series frequently leave _____ constructive feedback in the comments section.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "B",
          "hint": "Chỗ trống đứng trước cụm danh từ 'constructive feedback', cần một từ đóng vai trò tính từ sở hữu.",
          "explanation": "Chính xác. Tính từ sở hữu 'their' chỉ sự sở hữu của 'Viewers' (những người xem) đối với những phản hồi mang tính xây dựng mà họ để lại.",
          "translation": "Những người xem loạt video TikTok luyện tập tiếng Anh hàng ngày thường xuyên để lại những phản hồi mang tính xây dựng của họ trong phần bình luận."
        },
        {
          "id": "q_noun_pronoun_073",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "The management team evaluated the _____ of the new gift box campaign by comparing this month's sales to last month's.",
          "options": [
            { "key": "A", "text": "effective" },
            { "key": "B", "text": "effectively" },
            { "key": "C", "text": "effectiveness" },
            { "key": "D", "text": "effect" }
          ],
          "correct_answer": "C",
          "hint": "Mạo từ 'the' đòi hỏi một danh từ theo sau làm tân ngữ cho động từ 'evaluated'.",
          "explanation": "Chính xác. Danh từ 'effectiveness' (tính hiệu quả) là từ vựng quen thuộc trong các báo cáo kinh doanh, chỉ mức độ thành công của một chiến dịch.",
          "translation": "Đội ngũ quản lý đã đánh giá tính hiệu quả của chiến dịch hộp quà tặng mới bằng cách so sánh doanh số tháng này với tháng trước."
        },
        {
          "id": "q_noun_pronoun_074",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "The developers stress-tested the EduKit platform thoroughly to ensure that _____ could handle thousands of concurrent users.",
          "options": [
            { "key": "A", "text": "its" },
            { "key": "B", "text": "itself" },
            { "key": "C", "text": "they" },
            { "key": "D", "text": "it" }
          ],
          "correct_answer": "D",
          "hint": "Mệnh đề sau 'that' cần một chủ ngữ số ít để thay thế cho nền tảng 'the EduKit platform'.",
          "explanation": "Chính xác. Đại từ nhân xưng 'it' đóng vai trò chủ ngữ thay thế cho danh từ số ít chỉ vật ở vế trước nhằm tránh lặp từ.",
          "translation": "Các lập trình viên đã kiểm tra khả năng chịu tải của nền tảng EduKit một cách kỹ lưỡng để đảm bảo rằng nó có thể xử lý hàng nghìn người dùng truy cập cùng lúc."
        },
        {
          "id": "q_noun_pronoun_075",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Successful _____ for both the TOEIC and JLPT N3 exams simultaneously requires a strict study schedule.",
          "options": [
            { "key": "A", "text": "prepare" },
            { "key": "B", "text": "prepares" },
            { "key": "C", "text": "preparation" },
            { "key": "D", "text": "preparatory" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'Successful' đứng đầu câu cần một danh từ theo sau để tạo thành cụm chủ ngữ hoàn chỉnh.",
          "explanation": "Chính xác. Danh từ 'preparation' (sự chuẩn bị) đi với giới từ 'for' tạo thành cụm ý nghĩa 'sự chuẩn bị cho kỳ thi...'.",
          "translation": "Sự chuẩn bị thành công cho cả hai kỳ thi TOEIC và JLPT N3 cùng lúc đòi hỏi một lịch trình học tập nghiêm ngặt."
        },
        {
          "id": "q_noun_pronoun_076",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The project manager reminded the developers that the responsibility for fixing the critical bugs before launch was entirely _____.",
          "options": [
            { "key": "A", "text": "their" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "theirs" },
            { "key": "D", "text": "they" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống đứng cuối câu và đóng vai trò làm bổ ngữ cho động từ to be 'was'. Ta cần một đại từ sở hữu đứng độc lập.",
          "explanation": "Chính xác. Đại từ sở hữu 'theirs' thay thế cho cụm 'their responsibility' (trách nhiệm của họ) để nhấn mạnh rằng trách nhiệm đó thuộc về các lập trình viên.",
          "translation": "Quản lý dự án đã nhắc nhở các lập trình viên rằng trách nhiệm sửa các lỗi nghiêm trọng trước khi ra mắt hoàn toàn là của họ."
        },
        {
          "id": "q_noun_pronoun_077",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The successful _____ of the new HR portal has significantly reduced the administrative burden on the staff.",
          "options": [
            { "key": "A", "text": "implement" },
            { "key": "B", "text": "implemented" },
            { "key": "C", "text": "implementing" },
            { "key": "D", "text": "implementation" }
          ],
          "correct_answer": "D",
          "hint": "Cần một danh từ đứng sau mạo từ 'The' và tính từ 'successful' làm chủ ngữ chính của câu.",
          "explanation": "Chính xác. Danh từ 'implementation' (sự triển khai/sự áp dụng) tạo thành cụm chủ ngữ 'Sự triển khai thành công cổng thông tin nhân sự mới...'.",
          "translation": "Sự triển khai thành công cổng thông tin nhân sự mới đã làm giảm đáng kể gánh nặng hành chính cho nhân viên."
        },
        {
          "id": "q_noun_pronoun_078",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "If corporate clients wish to customize the Happy Box orders, we encourage _____ to contact our sales team directly.",
          "options": [
            { "key": "A", "text": "them" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "they" },
            { "key": "D", "text": "themselves" }
          ],
          "correct_answer": "A",
          "hint": "Động từ 'encourage' (khuyến khích) cần một tân ngữ chỉ người nhận hành động này.",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' được dùng để thay thế cho cụm 'corporate clients' (khách hàng doanh nghiệp), theo cấu trúc encourage somebody to do something.",
          "translation": "Nếu các khách hàng doanh nghiệp muốn tùy chỉnh các đơn hàng Happy Box, chúng tôi khuyến khích họ liên hệ trực tiếp với đội ngũ bán hàng của chúng tôi."
        },
        {
          "id": "q_noun_pronoun_079",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Before the software release, the QA team will conduct a final _____ to ensure all timekeeping functions work perfectly.",
          "options": [
            { "key": "A", "text": "inspect" },
            { "key": "B", "text": "inspection" },
            { "key": "C", "text": "inspecting" },
            { "key": "D", "text": "inspected" }
          ],
          "correct_answer": "B",
          "hint": "Tính từ 'final' đòi hỏi một danh từ theo sau làm tân ngữ cho động từ 'conduct'.",
          "explanation": "Chính xác. Danh từ 'inspection' (sự kiểm tra/thanh tra) đi với 'conduct a final' mang ý nghĩa 'thực hiện một đợt kiểm tra cuối cùng'.",
          "translation": "Trước khi phát hành phần mềm, nhóm đảm bảo chất lượng (QA) sẽ tiến hành một đợt kiểm tra cuối cùng để đảm bảo tất cả các chức năng chấm công hoạt động hoàn hảo."
        },
        {
          "id": "q_noun_pronoun_080",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "The founder of the startup usually reviews all major financial documents by _____ before approving them.",
          "options": [
            { "key": "A", "text": "him" },
            { "key": "B", "text": "his" },
            { "key": "C", "text": "he" },
            { "key": "D", "text": "himself" }
          ],
          "correct_answer": "D",
          "hint": "Giới từ 'by' kết hợp với một đại từ phản thân để diễn tả việc ai đó tự mình làm một việc gì.",
          "explanation": "Chính xác. Đại từ phản thân 'himself' đi sau 'by' tạo thành cụm 'by himself', chỉ việc nhà sáng lập tự tay xem xét lại các tài liệu mà không giao cho người khác.",
          "translation": "Nhà sáng lập của công ty khởi nghiệp thường tự mình xem xét lại tất cả các tài liệu tài chính quan trọng trước khi phê duyệt chúng."
        },
        {
          "id": "q_noun_pronoun_081",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The HR director noted that the new mobile timekeeping app has improved overall employee _____.",
          "options": [
            { "key": "A", "text": "product" },
            { "key": "B", "text": "productive" },
            { "key": "C", "text": "productivity" },
            { "key": "D", "text": "productively" }
          ],
          "correct_answer": "C",
          "hint": "Cần một danh từ đứng sau 'employee' để tạo thành cụm danh từ mang nghĩa 'năng suất của nhân viên'.",
          "explanation": "Chính xác. Danh từ 'productivity' (năng suất) kết hợp với 'employee' tạo thành cụm 'employee productivity'. 'Product' (sản phẩm) không phù hợp về mặt ngữ nghĩa trong ngữ cảnh này.",
          "translation": "Giám đốc nhân sự lưu ý rằng ứng dụng chấm công di động mới đã cải thiện năng suất tổng thể của nhân viên."
        },
        {
          "id": "q_noun_pronoun_082",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Viewers love the new TikTok series because _____ provides practical tips for daily English conversations.",
          "options": [
            { "key": "A", "text": "it" },
            { "key": "B", "text": "they" },
            { "key": "C", "text": "its" },
            { "key": "D", "text": "them" }
          ],
          "correct_answer": "A",
          "hint": "Mệnh đề sau 'because' đang thiếu một chủ ngữ số ít thay thế cho 'the new TikTok series'.",
          "explanation": "Chính xác. Đại từ nhân xưng 'it' làm chủ ngữ, thay thế cho danh từ số ít chỉ vật 'the new TikTok series' ở vế trước.",
          "translation": "Người xem yêu thích loạt video TikTok mới vì nó cung cấp các mẹo thực tế cho các cuộc hội thoại tiếng Anh hàng ngày."
        },
        {
          "id": "q_noun_pronoun_083",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "The development team for EduKit is seeking a software engineer with a strong _____ in mobile application design.",
          "options": [
            { "key": "A", "text": "back" },
            { "key": "B", "text": "backing" },
            { "key": "C", "text": "background" },
            { "key": "D", "text": "backwards" }
          ],
          "correct_answer": "C",
          "hint": "Mạo từ 'a' và tính từ 'strong' yêu cầu một danh từ chỉ nền tảng, kinh nghiệm hoặc kiến thức chuyên môn.",
          "explanation": "Chính xác. Danh từ 'background' (nền tảng kiến thức/kinh nghiệm) thường đi với 'strong' tạo thành cụm từ quen thuộc trong tuyển dụng: 'a strong background in...' (có nền tảng vững chắc về...).",
          "translation": "Đội ngũ phát triển EduKit đang tìm kiếm một kỹ sư phần mềm có nền tảng vững chắc trong thiết kế ứng dụng di động."
        },
        {
          "id": "q_noun_pronoun_084",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Our premium Happy Box sets are highly rated because each of _____ is carefully packed by hand.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "them" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Sau giới từ 'of', bạn luôn cần một đại từ đóng vai trò làm tân ngữ.",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' đứng sau giới từ 'of' thay thế cho 'premium Happy Box sets' (số nhiều). Cấu trúc: Each of + đại từ tân ngữ/danh từ số nhiều.",
          "translation": "Các bộ Happy Box cao cấp của chúng tôi được đánh giá cao vì mỗi hộp trong số chúng đều được đóng gói thủ công cẩn thận."
        },
        {
          "id": "q_noun_pronoun_085",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "Registration for the upcoming JLPT N3 exam requires a valid form of _____, such as a passport or an ID card.",
          "options": [
            { "key": "A", "text": "identify" },
            { "key": "B", "text": "identifying" },
            { "key": "C", "text": "identification" },
            { "key": "D", "text": "identifiable" }
          ],
          "correct_answer": "C",
          "hint": "Giới từ 'of' đòi hỏi một danh từ theo sau. Cụm từ mang ý nghĩa 'giấy tờ tùy thân'.",
          "explanation": "Chính xác. Danh từ 'identification' kết hợp với 'a valid form of' tạo thành cụm từ hành chính cố định: 'a form of identification' (giấy tờ tùy thân).",
          "translation": "Việc đăng ký kỳ thi JLPT N3 sắp tới yêu cầu một loại giấy tờ tùy thân hợp lệ, chẳng hạn như hộ chiếu hoặc thẻ căn cước."
        },
        {
          "id": "q_noun_pronoun_086",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The manager asked the team members to send _____ weekly reports to the central server before 5 PM on Friday.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Từ cần điền đứng trước cụm danh từ 'weekly reports' và chỉ sự sở hữu thuộc về 'the team members'.",
          "explanation": "Chính xác. Tính từ sở hữu 'their' dùng để chỉ các báo cáo hàng tuần là của các thành viên trong nhóm.",
          "translation": "Người quản lý yêu cầu các thành viên trong nhóm gửi báo cáo hàng tuần của họ đến máy chủ trung tâm trước 5 giờ chiều Thứ Sáu."
        },
        {
          "id": "q_noun_pronoun_087",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The marketing department is conducting a survey to measure customer _____ with the new gift box packaging.",
          "options": [
            { "key": "A", "text": "satisfy" },
            { "key": "B", "text": "satisfactory" },
            { "key": "C", "text": "satisfying" },
            { "key": "D", "text": "satisfaction" }
          ],
          "correct_answer": "D",
          "hint": "Cần một danh từ đứng sau 'customer' tạo thành cụm danh từ ghép làm tân ngữ cho động từ 'measure'.",
          "explanation": "Chính xác. Danh từ 'satisfaction' (sự hài lòng) đi kèm với 'customer' tạo thành cụm cố định 'customer satisfaction' (sự hài lòng của khách hàng).",
          "translation": "Bộ phận tiếp thị đang tiến hành một cuộc khảo sát để đo lường sự hài lòng của khách hàng với bao bì hộp quà tặng mới."
        },
        {
          "id": "q_noun_pronoun_088",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "If users encounter any technical issues with the EduKit platform, they can contact the support team to get _____ resolved quickly.",
          "options": [
            { "key": "A", "text": "it" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "they" },
            { "key": "D", "text": "their" }
          ],
          "correct_answer": "B",
          "hint": "Cấu trúc 'get something done' (nhờ/để ai đó làm gì). Tân ngữ này cần thay thế cho danh từ số nhiều 'technical issues'.",
          "explanation": "Chính xác. Đại từ tân ngữ 'them' được sử dụng để thay thế cho danh từ số nhiều 'technical issues' (các sự cố kỹ thuật) ở vế trước.",
          "translation": "Nếu người dùng gặp bất kỳ sự cố kỹ thuật nào với nền tảng EduKit, họ có thể liên hệ với nhóm hỗ trợ để chúng được giải quyết nhanh chóng."
        },
        {
          "id": "q_noun_pronoun_089",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "Strict _____ with the company's new attendance policy is expected from all staff members using the mobile app.",
          "options": [
            { "key": "A", "text": "comply" },
            { "key": "B", "text": "compliance" },
            { "key": "C", "text": "compliant" },
            { "key": "D", "text": "compliantly" }
          ],
          "correct_answer": "B",
          "hint": "Tính từ 'Strict' (nghiêm ngặt) đứng ở đầu câu, yêu cầu một danh từ theo sau để làm chủ ngữ cho động từ 'is expected'.",
          "explanation": "Chính xác. Danh từ 'compliance' (sự tuân thủ) thường đi với giới từ 'with' tạo thành cấu trúc 'compliance with' (tuân thủ điều gì đó).",
          "translation": "Sự tuân thủ nghiêm ngặt chính sách điểm danh mới của công ty được mong đợi từ tất cả các nhân viên sử dụng ứng dụng di động."
        },
        {
          "id": "q_noun_pronoun_090",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "To ensure authenticity, the creator records and edits all the English practice videos _____ using just a smartphone.",
          "options": [
            { "key": "A", "text": "her" },
            { "key": "B", "text": "she" },
            { "key": "C", "text": "herself" },
            { "key": "D", "text": "hers" }
          ],
          "correct_answer": "C",
          "hint": "Đại từ phản thân có thể đứng ở cuối mệnh đề để nhấn mạnh rằng chủ thể đã tự mình thực hiện hành động đó.",
          "explanation": "Chính xác. Đại từ phản thân 'herself' bổ nghĩa cho chủ ngữ 'the creator' (nhà sáng tạo nữ) để nhấn mạnh việc cô ấy tự mình quay và dựng video.",
          "translation": "Để đảm bảo tính chân thực, nhà sáng tạo tự mình quay và chỉnh sửa tất cả các video thực hành tiếng Anh chỉ bằng một chiếc điện thoại thông minh."
        },
        {
          "id": "q_noun_pronoun_091",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The lead programmer announced that the final _____ of the human resources website will be launched next Monday.",
          "options": [
            { "key": "A", "text": "version" },
            { "key": "B", "text": "verse" },
            { "key": "C", "text": "versatile" },
            { "key": "D", "text": "versions" }
          ],
          "correct_answer": "A",
          "hint": "Tính từ 'final' và mạo từ 'the' yêu cầu một danh từ. Ngữ cảnh phát triển phần mềm cần một từ mang nghĩa 'phiên bản'.",
          "explanation": "Chính xác. Danh từ số ít 'version' (phiên bản) phù hợp nhất với ngữ cảnh ra mắt một trang web. Dạng số nhiều 'versions' không hợp lý vì chỉ ra mắt 1 bản chính thức 'final'.",
          "translation": "Lập trình viên chính thông báo rằng phiên bản cuối cùng của trang web nhân sự sẽ được ra mắt vào thứ Hai tới."
        },
        {
          "id": "q_noun_pronoun_092",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The CEO praised the marketing team for _____ innovative approach to promoting the new gift box collection.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Cần một từ thể hiện tính sở hữu đứng trước cụm danh từ 'innovative approach' (phương pháp tiếp cận đổi mới).",
          "explanation": "Chính xác. Tính từ sở hữu 'their' dùng để chỉ phương pháp đổi mới đó thuộc về 'the marketing team' (tập thể nhóm - số nhiều).",
          "translation": "Giám đốc điều hành đã khen ngợi nhóm tiếp thị vì phương pháp tiếp cận đổi mới của họ trong việc quảng bá bộ sưu tập hộp quà tặng mới."
        },
        {
          "id": "q_noun_pronoun_093",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Easy",
          "question_text": "Consistent daily listening practice is a great way to improve your _____ of spoken English.",
          "options": [
            { "key": "A", "text": "comprehend" },
            { "key": "B", "text": "comprehension" },
            { "key": "C", "text": "comprehensive" },
            { "key": "D", "text": "comprehensively" }
          ],
          "correct_answer": "B",
          "hint": "Tính từ sở hữu 'your' đòi hỏi một danh từ theo sau làm tân ngữ cho động từ 'improve'.",
          "explanation": "Chính xác. Danh từ 'comprehension' (sự hiểu biết/kỹ năng đọc hiểu, nghe hiểu) là từ vựng quen thuộc trong việc học ngoại ngữ (Listening comprehension).",
          "translation": "Thực hành nghe đều đặn hàng ngày là một cách tuyệt vời để cải thiện khả năng nghe hiểu tiếng Anh nói của bạn."
        },
        {
          "id": "q_noun_pronoun_094",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Medium",
          "question_text": "Employees who forget their passwords must request a reset link to regain access to _____ accounts.",
          "options": [
            { "key": "A", "text": "them" },
            { "key": "B", "text": "their" },
            { "key": "C", "text": "they" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "B",
          "hint": "Cần một tính từ sở hữu đứng trước danh từ 'accounts' (tài khoản) để chỉ các tài khoản đó là của nhân viên.",
          "explanation": "Chính xác. Tính từ sở hữu 'their' chỉ sự sở hữu của 'Employees' đối với tài khoản cá nhân của họ.",
          "translation": "Những nhân viên quên mật khẩu phải yêu cầu liên kết đặt lại mật khẩu để lấy lại quyền truy cập vào tài khoản của họ."
        },
        {
          "id": "q_noun_pronoun_095",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "The startup founders are actively looking for financial _____ to expand the EduKit platform to international markets.",
          "options": [
            { "key": "A", "text": "back" },
            { "key": "B", "text": "backers" },
            { "key": "C", "text": "backing" },
            { "key": "D", "text": "backed" }
          ],
          "correct_answer": "C",
          "hint": "Tính từ 'financial' cần một danh từ không đếm được theo sau mang ý nghĩa 'sự hỗ trợ/nguồn vốn tài trợ'.",
          "explanation": "Chính xác. Danh từ 'backing' (sự hỗ trợ tài chính / nguồn vốn) đi cùng 'financial' tạo thành cụm 'financial backing'. Nếu dùng 'backers' (nhà tài trợ) thì câu sẽ mang nghĩa tìm người tài trợ, nhưng 'financial' bổ nghĩa cho 'backing' phổ biến hơn.",
          "translation": "Các nhà sáng lập công ty khởi nghiệp đang tích cực tìm kiếm sự hỗ trợ tài chính để mở rộng nền tảng EduKit ra thị trường quốc tế."
        },
        {
          "id": "q_noun_pronoun_096",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The content creator bought a new high-end microphone, but _____ turned out to be incompatible with her camera.",
          "options": [
            { "key": "A", "text": "it" },
            { "key": "B", "text": "its" },
            { "key": "C", "text": "itself" },
            { "key": "D", "text": "they" }
          ],
          "correct_answer": "A",
          "hint": "Mệnh đề sau từ 'but' thiếu một chủ ngữ chỉ vật số ít, thay thế cho 'a new high-end microphone'.",
          "explanation": "Chính xác. Đại từ nhân xưng 'it' làm chủ ngữ thay thế cho chiếc micro mới được nhắc đến ở vế trước.",
          "translation": "Nhà sáng tạo nội dung đã mua một chiếc micro cao cấp mới, nhưng hóa ra nó lại không tương thích với máy ảnh của cô ấy."
        },
        {
          "id": "q_noun_pronoun_097",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Medium",
          "question_text": "To handle the high volume of holiday orders, the Happy Box warehouse manager requested additional _____ immediately.",
          "options": [
            { "key": "A", "text": "person" },
            { "key": "B", "text": "personally" },
            { "key": "C", "text": "personality" },
            { "key": "D", "text": "personnel" }
          ],
          "correct_answer": "D",
          "hint": "Cần một danh từ mang nghĩa 'nhân sự / nhân viên' đóng vai trò tân ngữ cho động từ 'requested'.",
          "explanation": "Chính xác. Danh từ 'personnel' (nhân sự/nhân viên) là một danh từ tập hợp, kết hợp với tính từ 'additional' tạo thành cụm 'thêm nhân sự'.",
          "translation": "Để xử lý khối lượng lớn các đơn đặt hàng trong dịp lễ, quản lý kho của Happy Box đã yêu cầu thêm nhân sự ngay lập tức."
        },
        {
          "id": "q_noun_pronoun_098",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Easy",
          "question_text": "Students preparing for both the TOEIC and JLPT N3 exams simultaneously must organize _____ study schedules carefully.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "C",
          "hint": "Chỗ trống cần một tính từ sở hữu đứng trước cụm danh từ 'study schedules' (lịch học).",
          "explanation": "Chính xác. Tính từ sở hữu 'their' chỉ sự sở hữu của 'Students' (Học sinh) đối với lịch học của chính họ.",
          "translation": "Những học sinh chuẩn bị cho cả hai kỳ thi TOEIC và JLPT N3 cùng một lúc phải sắp xếp lịch học của họ một cách cẩn thận."
        },
        {
          "id": "q_noun_pronoun_099",
          "part": 5,
          "grammar_topic": "Noun",
          "difficulty_level": "Hard",
          "question_text": "The seamless integration of the timekeeping app with the HR website ensures the complete _____ of sensitive employee data.",
          "options": [
            { "key": "A", "text": "secure" },
            { "key": "B", "text": "securely" },
            { "key": "C", "text": "security" },
            { "key": "D", "text": "secures" }
          ],
          "correct_answer": "C",
          "hint": "Mạo từ 'the' và tính từ 'complete' đòi hỏi một danh từ làm tân ngữ chính cho động từ 'ensures'.",
          "explanation": "Chính xác. Danh từ 'security' (sự bảo mật) ghép với 'data' tạo thành khái niệm 'data security' (bảo mật dữ liệu) rất quen thuộc trong ngành IT.",
          "translation": "Việc tích hợp liền mạch ứng dụng chấm công với trang web nhân sự đảm bảo sự bảo mật tuyệt đối dữ liệu nhạy cảm của nhân viên."
        },
        {
          "id": "q_noun_pronoun_100",
          "part": 5,
          "grammar_topic": "Pronoun",
          "difficulty_level": "Hard",
          "question_text": "The competitors tried to copy our gift box designs, but _____ lacked the premium quality of our original products.",
          "options": [
            { "key": "A", "text": "they" },
            { "key": "B", "text": "them" },
            { "key": "C", "text": "their" },
            { "key": "D", "text": "theirs" }
          ],
          "correct_answer": "D",
          "hint": "Cần một đại từ sở hữu đứng độc lập để thay thế cho cụm từ 'their designs' (những thiết kế của họ) làm chủ ngữ cho vế sau.",
          "explanation": "Chính xác. Đại từ sở hữu 'theirs' đóng vai trò chủ ngữ của mệnh đề thứ hai, thay thế cho 'their designs' để đối chiếu với 'our gift box designs'.",
          "translation": "Các đối thủ cạnh tranh đã cố gắng sao chép các thiết kế hộp quà tặng của chúng tôi, nhưng các thiết kế của họ thiếu đi chất lượng cao cấp như các sản phẩm gốc của chúng tôi."
        }
      ],
      hard: []
    }
  },
  "w1-d2-t3": {
    description: "Giải 20-30 câu Part 5 & 6",
    total: 10,
    questions: {
      easy: [
        {
          "id": "q_verb_tense_021",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Medium",
          "question_text": "While the QA team _____ the new timekeeping app, they discovered a critical security flaw.",
          "options": [
            { "key": "A", "text": "tests" },
            { "key": "B", "text": "is testing" },
            { "key": "C", "text": "was testing" },
            { "key": "D", "text": "tested" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'While' (trong khi) diễn tả một hành động đang diễn ra trong quá khứ thì có một hành động khác (discovered) xen vào.",
          "explanation": "Chính xác. Thì quá khứ tiếp diễn 'was testing' được sử dụng để chỉ hành động đang kéo dài trong quá khứ (đang kiểm thử) thì hành động khác cắt ngang (phát hiện ra lỗi).",
          "translation": "Trong khi nhóm QA đang kiểm thử ứng dụng chấm công mới, họ đã phát hiện ra một lỗ hổng bảo mật nghiêm trọng."
        },
        {
          "id": "q_verb_tense_022",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time the manager arrived at the office, the IT department _____ the server issue.",
          "options": [
            { "key": "A", "text": "has resolved" },
            { "key": "B", "text": "had resolved" },
            { "key": "C", "text": "resolves" },
            { "key": "D", "text": "will resolve" }
          ],
          "correct_answer": "B",
          "hint": "Cấu trúc 'By the time + S + V (quá khứ đơn)' yêu cầu mệnh đề chính phải lùi về một thì xảy ra trước cả quá khứ.",
          "explanation": "Chính xác. Thì quá khứ hoàn thành 'had resolved' diễn tả một hành động đã hoàn tất trước một thời điểm hoặc một hành động khác trong quá khứ (trước lúc người quản lý đến).",
          "translation": "Vào lúc người quản lý đến văn phòng, bộ phận CNTT đã giải quyết xong sự cố máy chủ."
        },
        {
          "id": "q_verb_tense_023",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect Continuous)",
          "difficulty_level": "Hard",
          "question_text": "The marketing team _____ on the new Happy Box promotional campaign for three straight weeks.",
          "options": [
            { "key": "A", "text": "is working" },
            { "key": "B", "text": "works" },
            { "key": "C", "text": "has been working" },
            { "key": "D", "text": "worked" }
          ],
          "correct_answer": "C",
          "hint": "Giới từ 'for' + khoảng thời gian (three straight weeks) nhấn mạnh tính liên tục không ngừng nghỉ của hành động từ quá khứ đến hiện tại.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành tiếp diễn 'has been working' được dùng để nhấn mạnh quá trình làm việc liên tục, không ngắt quãng trong suốt 3 tuần qua.",
          "translation": "Nhóm tiếp thị đã và đang làm việc liên tục cho chiến dịch quảng cáo Happy Box mới trong suốt ba tuần liền."
        },
        {
          "id": "q_verb_tense_024",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Medium",
          "question_text": "At this time tomorrow, the CEO _____ the quarterly financial results to the board of directors.",
          "options": [
            { "key": "A", "text": "will present" },
            { "key": "B", "text": "is presenting" },
            { "key": "C", "text": "will be presenting" },
            { "key": "D", "text": "presents" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'At this time tomorrow' (vào giờ này ngày mai) xác định một thời điểm cực kỳ cụ thể đang diễn ra trong tương lai.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be presenting' dùng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm xác định trong tương lai.",
          "translation": "Vào giờ này ngày mai, Giám đốc điều hành sẽ đang trình bày kết quả tài chính hàng quý cho hội đồng quản trị."
        },
        {
          "id": "q_verb_tense_025",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Simple)",
          "difficulty_level": "Medium",
          "question_text": "In our company, employee attendance _____ automatically by the new mobile application every day.",
          "options": [
            { "key": "A", "text": "tracks" },
            { "key": "B", "text": "is tracking" },
            { "key": "C", "text": "is tracked" },
            { "key": "D", "text": "tracked" }
          ],
          "correct_answer": "C",
          "hint": "Chủ ngữ là 'employee attendance' (sự điểm danh) là vật/sự việc, không thể tự thực hiện hành động 'track' (theo dõi) mà phải bị tác động bởi ứng dụng.",
          "explanation": "Chính xác. Câu cần chia ở thể bị động của thì hiện tại đơn (is + V3/ed) vì hành động này lặp đi lặp lại hàng ngày (every day) và chủ ngữ là vật bị tác động.",
          "translation": "Trong công ty chúng tôi, việc điểm danh của nhân viên được theo dõi tự động bởi ứng dụng di động mới mỗi ngày."
        },
        {
          "id": "q_verb_tense_026",
          "part": 5,
          "grammar_topic": "Passive Voice (Future Simple)",
          "difficulty_level": "Medium",
          "question_text": "The new series of English pronunciation videos _____ on TikTok next Monday.",
          "options": [
            { "key": "A", "text": "will release" },
            { "key": "B", "text": "will be released" },
            { "key": "C", "text": "releases" },
            { "key": "D", "text": "are releasing" }
          ],
          "correct_answer": "B",
          "hint": "Chủ ngữ là 'The new series of videos' (vật). Các video không thể tự phát hành mà phải 'được phát hành' vào tuần tới.",
          "explanation": "Chính xác. Thể bị động của thì tương lai đơn có cấu trúc 'will be + V3/ed'. Câu mang nghĩa bị động vì video là đối tượng được phát hành.",
          "translation": "Loạt video phát âm tiếng Anh mới sẽ được phát hành trên TikTok vào thứ Hai tuần tới."
        },
        {
          "id": "q_verb_tense_027",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Perfect)",
          "difficulty_level": "Hard",
          "question_text": "Several interactive features _____ to the EduKit platform since the beta version was launched.",
          "options": [
            { "key": "A", "text": "have added" },
            { "key": "B", "text": "have been added" },
            { "key": "C", "text": "were adding" },
            { "key": "D", "text": "added" }
          ],
          "correct_answer": "B",
          "hint": "Dấu hiệu 'since' yêu cầu thì hiện tại hoàn thành. Chủ ngữ 'features' (các tính năng) là vật, nên động từ phải ở thể bị động.",
          "explanation": "Chính xác. Thể bị động của thì hiện tại hoàn thành có cấu trúc 'have/has + been + V3/ed'. Các tính năng 'đã được thêm vào' nền tảng.",
          "translation": "Một vài tính năng tương tác đã được thêm vào nền tảng EduKit kể từ khi phiên bản thử nghiệm được ra mắt."
        },
        {
          "id": "q_verb_tense_028",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous vs Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "The power went out while Ms. Lin _____ her daily English speaking video.",
          "options": [
            { "key": "A", "text": "records" },
            { "key": "B", "text": "has recorded" },
            { "key": "C", "text": "was recording" },
            { "key": "D", "text": "is recording" }
          ],
          "correct_answer": "C",
          "hint": "Sự việc mất điện (went out) xảy ra cắt ngang một hành động khác đang diễn ra. Hành động đang diễn ra đó phải dùng thì quá khứ tiếp diễn.",
          "explanation": "Chính xác. Thì quá khứ tiếp diễn 'was recording' chỉ một hành động đang được thực hiện (đang quay video) thì một hành động ngắn khác xen vào trong quá khứ.",
          "translation": "Mất điện trong khi cô Lin đang quay video nói tiếng Anh hàng ngày của mình."
        },
        {
          "id": "q_verb_tense_029",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the end of this year, the Happy Box company _____ its operations to five new countries.",
          "options": [
            { "key": "A", "text": "will expand" },
            { "key": "B", "text": "expands" },
            { "key": "C", "text": "will have expanded" },
            { "key": "D", "text": "is expanding" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'By + mốc thời gian trong tương lai' (Trước thời điểm... trong tương lai) là dấu hiệu kinh điển của thì Tương lai hoàn thành.",
          "explanation": "Chính xác. Thì tương lai hoàn thành 'will have expanded' diễn đạt một hành động sẽ hoàn tất tính đến một thời điểm xác định trong tương lai.",
          "translation": "Tính đến cuối năm nay, công ty Happy Box sẽ mở rộng (hoàn tất việc mở rộng) hoạt động sang năm quốc gia mới."
        },
        {
          "id": "q_verb_tense_030",
          "part": 5,
          "grammar_topic": "Passive Voice (Past Simple)",
          "difficulty_level": "Medium",
          "question_text": "The erroneous data in the HR system _____ by the database administrator last night.",
          "options": [
            { "key": "A", "text": "corrected" },
            { "key": "B", "text": "corrects" },
            { "key": "C", "text": "was corrected" },
            { "key": "D", "text": "is corrected" }
          ],
          "correct_answer": "C",
          "hint": "Thời gian 'last night' (tối qua) yêu cầu thì quá khứ đơn. Chủ ngữ 'data' (dữ liệu) bị tác động bởi cụm 'by the administrator', nên phải dùng thể bị động.",
          "explanation": "Chính xác. Thể bị động của thì quá khứ đơn là 'was/were + V3/ed'. Dữ liệu bị lỗi 'đã được sửa' bởi người quản trị.",
          "translation": "Dữ liệu bị lỗi trong hệ thống nhân sự đã được người quản trị cơ sở dữ liệu sửa vào tối qua."
        },
        {
          "id": "q_verb_tense_031",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Since its founding, the Happy Box company _____ its product line to include customized corporate gifts.",
          "options": [
            { "key": "A", "text": "expand" },
            { "key": "B", "text": "expanded" },
            { "key": "C", "text": "has expanded" },
            { "key": "D", "text": "is expanding" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'Since its founding' (Kể từ khi thành lập) là dấu hiệu kinh điển cho thấy một quá trình bắt đầu từ quá khứ và kéo dài đến hiện tại.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành 'has expanded' được dùng để diễn tả sự mở rộng kinh doanh diễn ra từ lúc thành lập cho đến tận bây giờ.",
          "translation": "Kể từ khi thành lập, công ty Happy Box đã mở rộng dòng sản phẩm của mình để bao gồm cả các món quà tặng doanh nghiệp tùy chỉnh."
        },
        {
          "id": "q_verb_tense_032",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "The lead developer _____ the new timekeeping module to the main server late last night.",
          "options": [
            { "key": "A", "text": "uploads" },
            { "key": "B", "text": "uploaded" },
            { "key": "C", "text": "has uploaded" },
            { "key": "D", "text": "will upload" }
          ],
          "correct_answer": "B",
          "hint": "Cụm 'late last night' (tối muộn hôm qua) chỉ một thời điểm đã kết thúc hoàn toàn trong quá khứ.",
          "explanation": "Chính xác. Động từ 'uploaded' chia ở thì quá khứ đơn phù hợp với hành động đã xảy ra và kết thúc vào đêm qua.",
          "translation": "Lập trình viên chính đã tải lên mô-đun chấm công mới lên máy chủ chính vào đêm muộn hôm qua."
        },
        {
          "id": "q_verb_tense_033",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Medium",
          "question_text": "At 8 PM tonight, the creator _____ a live session to practice daily English speaking on TikTok.",
          "options": [
            { "key": "A", "text": "hosts" },
            { "key": "B", "text": "hosted" },
            { "key": "C", "text": "has hosted" },
            { "key": "D", "text": "will be hosting" }
          ],
          "correct_answer": "D",
          "hint": "Mốc thời gian 'At 8 PM tonight' chỉ một thời điểm rất cụ thể sẽ diễn ra trong tương lai.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be hosting' dùng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm xác định trong tương lai.",
          "translation": "Vào lúc 8 giờ tối nay, nhà sáng tạo nội dung sẽ đang tổ chức một buổi phát trực tiếp để luyện nói tiếng Anh hàng ngày trên TikTok."
        },
        {
          "id": "q_verb_tense_034",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Simple)",
          "difficulty_level": "Medium",
          "question_text": "All employee attendance records _____ securely in the cloud server to prevent data loss.",
          "options": [
            { "key": "A", "text": "store" },
            { "key": "B", "text": "are storing" },
            { "key": "C", "text": "are stored" },
            { "key": "D", "text": "stored" }
          ],
          "correct_answer": "C",
          "hint": "Chủ ngữ 'records' (bản ghi) là vật, không thể tự thực hiện hành động cất giữ (store). Việc lưu trữ diễn ra thường xuyên như một quy trình.",
          "explanation": "Chính xác. Thể bị động của hiện tại đơn 'are stored' được sử dụng vì các bản ghi điểm danh 'được lưu trữ' một cách tự động và thường xuyên.",
          "translation": "Tất cả các bản ghi điểm danh của nhân viên được lưu trữ an toàn trong máy chủ đám mây để ngăn ngừa mất dữ liệu."
        },
        {
          "id": "q_verb_tense_035",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Continuous)",
          "difficulty_level": "Easy",
          "question_text": "Currently, our engineering team _____ PrepMaster, an educational application designed for TOEIC and JLPT preparation.",
          "options": [
            { "key": "A", "text": "builds" },
            { "key": "B", "text": "built" },
            { "key": "C", "text": "is building" },
            { "key": "D", "text": "has built" }
          ],
          "correct_answer": "C",
          "hint": "Trạng từ 'Currently' (hiện tại) nhấn mạnh vào một dự án đang được tiến hành ở thời điểm nói.",
          "explanation": "Chính xác. Thì hiện tại tiếp diễn 'is building' dùng để diễn tả một hành động, dự án đang diễn ra lúc này.",
          "translation": "Hiện tại, nhóm kỹ thuật của chúng tôi đang xây dựng PrepMaster, một ứng dụng giáo dục được thiết kế để luyện thi TOEIC và JLPT."
        },
        {
          "id": "q_verb_tense_036",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time the marketing team arrived at the office, the first batch of holiday gift boxes _____ completely.",
          "options": [
            { "key": "A", "text": "sells out" },
            { "key": "B", "text": "sold out" },
            { "key": "C", "text": "had sold out" },
            { "key": "D", "text": "has sold out" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'By the time + mệnh đề quá khứ (arrived)' chỉ ra rằng hành động ở mệnh đề chính phải xảy ra và hoàn tất trước hành động quá khứ đó.",
          "explanation": "Chính xác. Thì quá khứ hoàn thành 'had sold out' diễn tả hành động bán hết đã hoàn tất trước khi nhóm tiếp thị đến văn phòng.",
          "translation": "Vào lúc nhóm tiếp thị đến văn phòng, lô hộp quà tặng dịp lễ đầu tiên đã được bán hết sạch."
        },
        {
          "id": "q_verb_tense_037",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Easy",
          "question_text": "The mobile application automatically _____ notifications to employees if they forget to log their work hours.",
          "options": [
            { "key": "A", "text": "send" },
            { "key": "B", "text": "sends" },
            { "key": "C", "text": "is sending" },
            { "key": "D", "text": "sent" }
          ],
          "correct_answer": "B",
          "hint": "Trạng từ 'automatically' (tự động) và liên từ 'if' (điều kiện loại 0) chỉ một tính năng hoạt động theo quy luật hiển nhiên.",
          "explanation": "Chính xác. Thì hiện tại đơn được sử dụng cho sự thật hiển nhiên. Động từ 'sends' thêm 's' vì chủ ngữ 'The mobile application' là số ít.",
          "translation": "Ứng dụng di động tự động gửi thông báo cho nhân viên nếu họ quên ghi lại giờ làm việc của mình."
        },
        {
          "id": "q_verb_tense_038",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the end of this month, the students _____ all the grammar topics required for the JLPT N3 exam.",
          "options": [
            { "key": "A", "text": "master" },
            { "key": "B", "text": "will master" },
            { "key": "C", "text": "mastered" },
            { "key": "D", "text": "will have mastered" }
          ],
          "correct_answer": "D",
          "hint": "Dấu hiệu 'By the end of this month' (Tính đến cuối tháng này) yêu cầu một thì chỉ sự hoàn tất trong tương lai.",
          "explanation": "Chính xác. Thì tương lai hoàn thành 'will have mastered' dùng để chỉ một hành động sẽ được hoàn tất tính đến một thời điểm trong tương lai.",
          "translation": "Tính đến cuối tháng này, các học sinh sẽ nắm vững toàn bộ các chủ điểm ngữ pháp bắt buộc cho kỳ thi JLPT N3."
        },
        {
          "id": "q_verb_tense_039",
          "part": 5,
          "grammar_topic": "Passive Voice (Past Simple)",
          "difficulty_level": "Medium",
          "question_text": "The final version of the personnel management software _____ by the quality assurance team before it went live.",
          "options": [
            { "key": "A", "text": "approved" },
            { "key": "B", "text": "was approved" },
            { "key": "C", "text": "approves" },
            { "key": "D", "text": "is approved" }
          ],
          "correct_answer": "B",
          "hint": "Câu có cụm 'went live' (đã ra mắt) ở quá khứ. Phần mềm là vật nên phải 'được phê duyệt' bởi nhóm QA.",
          "explanation": "Chính xác. Thể bị động quá khứ đơn 'was approved' diễn tả hành động phần mềm được phê duyệt, xảy ra trước khi nó được đưa vào sử dụng.",
          "translation": "Phiên bản cuối cùng của phần mềm quản lý nhân sự đã được phê duyệt bởi nhóm đảm bảo chất lượng trước khi nó chính thức ra mắt."
        },
        {
          "id": "q_verb_tense_040",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Medium",
          "question_text": "While the high school students _____ online together, the app updated the leaderboard of total study hours.",
          "options": [
            { "key": "A", "text": "study" },
            { "key": "B", "text": "studied" },
            { "key": "C", "text": "are studying" },
            { "key": "D", "text": "were studying" }
          ],
          "correct_answer": "D",
          "hint": "Cấu trúc 'While' diễn tả một hành động đang kéo dài trong quá khứ thì một hành động ngắn khác (updated) xen vào.",
          "explanation": "Chính xác. Thì quá khứ tiếp diễn 'were studying' chỉ quá trình đang học kéo dài của các học sinh trong quá khứ.",
          "translation": "Trong khi các học sinh trung học đang học trực tuyến cùng nhau, ứng dụng đã cập nhật bảng xếp hạng tổng số giờ học."
        },
        {
          "id": "q_verb_tense_041",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect Continuous)",
          "difficulty_level": "Hard",
          "question_text": "The HR department _____ new candidates for the senior developer position all morning.",
          "options": [
            { "key": "A", "text": "interviews" },
            { "key": "B", "text": "is interviewing" },
            { "key": "C", "text": "has been interviewing" },
            { "key": "D", "text": "interviewed" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'all morning' (cả buổi sáng) nhấn mạnh tính liên tục của một hành động bắt đầu từ sáng và vẫn đang tiếp diễn ở hiện tại.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành tiếp diễn 'has been interviewing' nhấn mạnh quá trình phỏng vấn diễn ra liên tục, không ngừng nghỉ.",
          "translation": "Bộ phận nhân sự đã và đang phỏng vấn các ứng viên mới cho vị trí lập trình viên cấp cao suốt cả buổi sáng."
        },
        {
          "id": "q_verb_tense_042",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Simple in Conditionals)",
          "difficulty_level": "Easy",
          "question_text": "If the current server capacity is exceeded, the timekeeping system _____ automatically to prevent a crash.",
          "options": [
            { "key": "A", "text": "restarts" },
            { "key": "B", "text": "restarted" },
            { "key": "C", "text": "will restart" },
            { "key": "D", "text": "has restarted" }
          ],
          "correct_answer": "C",
          "hint": "Câu điều kiện loại 1 diễn tả một khả năng ở tương lai: If + Hiện tại đơn, Tương lai đơn.",
          "explanation": "Chính xác. Ở mệnh đề chính của câu điều kiện loại 1, chúng ta sử dụng thì tương lai đơn 'will restart'.",
          "translation": "Nếu vượt quá dung lượng máy chủ hiện tại, hệ thống chấm công sẽ tự động khởi động lại để tránh bị sập."
        },
        {
          "id": "q_verb_tense_043",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Perfect)",
          "difficulty_level": "Hard",
          "question_text": "A series of new interactive TOEIC reading lessons _____ to the PrepMaster application just recently.",
          "options": [
            { "key": "A", "text": "have added" },
            { "key": "B", "text": "has been added" },
            { "key": "C", "text": "has added" },
            { "key": "D", "text": "were added" }
          ],
          "correct_answer": "B",
          "hint": "Trạng từ 'recently' yêu cầu thì Hiện tại hoàn thành. Chủ ngữ 'A series' (Một chuỗi/loạt) là số ít và mang nghĩa bị động (được thêm vào).",
          "explanation": "Chính xác. Cấu trúc bị động của hiện tại hoàn thành là 'has been + V3/ed'. 'A series' được chia ở số ít nên dùng 'has'.",
          "translation": "Một loạt các bài học đọc hiểu TOEIC tương tác mới vừa được thêm vào ứng dụng PrepMaster gần đây."
        },
        {
          "id": "q_verb_tense_044",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Medium",
          "question_text": "High school students often _____ less isolated when they can see their peers studying online together on the app.",
          "options": [
            { "key": "A", "text": "feel" },
            { "key": "B", "text": "feels" },
            { "key": "C", "text": "are feeling" },
            { "key": "D", "text": "felt" }
          ],
          "correct_answer": "A",
          "hint": "Trạng từ 'often' (thường xuyên) chỉ một thói quen hoặc một trạng thái cảm xúc chung.",
          "explanation": "Chính xác. Thì hiện tại đơn được dùng. Chủ ngữ 'students' là số nhiều nên động từ 'feel' giữ nguyên ở dạng nguyên mẫu.",
          "translation": "Học sinh trung học thường cảm thấy bớt cô đơn hơn khi họ có thể thấy bạn bè đồng trang lứa cùng học trực tuyến trên ứng dụng."
        },
        {
          "id": "q_verb_tense_045",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "Last year, the founders _____ to create an educational app featuring a competitive leaderboard for schools.",
          "options": [
            { "key": "A", "text": "decide" },
            { "key": "B", "text": "decides" },
            { "key": "C", "text": "are deciding" },
            { "key": "D", "text": "decided" }
          ],
          "correct_answer": "D",
          "hint": "Cụm 'Last year' (năm ngoái) là dấu hiệu rõ ràng của một hành động đã xảy ra và chấm dứt trong quá khứ.",
          "explanation": "Chính xác. Động từ 'decided' (quyết định) chia ở thì quá khứ đơn.",
          "translation": "Năm ngoái, các nhà sáng lập đã quyết định tạo ra một ứng dụng giáo dục có tính năng bảng xếp hạng cạnh tranh giữa các trường học."
        },
        {
          "id": "q_verb_tense_046",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Hard",
          "question_text": "This time next year, the logistics team _____ its 100,000th custom Happy Box to a loyal customer.",
          "options": [
            { "key": "A", "text": "delivers" },
            { "key": "B", "text": "delivered" },
            { "key": "C", "text": "will be delivering" },
            { "key": "D", "text": "has delivered" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'This time next year' (Giờ này năm sau) xác định một thời điểm cực kỳ cụ thể đang diễn ra ở tương lai.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be delivering' mô tả một hành động đang xảy ra tại một thời điểm chính xác trong tương lai.",
          "translation": "Vào thời điểm này năm sau, đội ngũ hậu cần sẽ đang giao chiếc Happy Box tùy chỉnh thứ 100.000 cho một khách hàng trung thành."
        },
        {
          "id": "q_verb_tense_047",
          "part": 5,
          "grammar_topic": "Passive Voice (Future Simple)",
          "difficulty_level": "Medium",
          "question_text": "Detailed analytics regarding collective study times _____ on the platform's dashboard next week.",
          "options": [
            { "key": "A", "text": "will display" },
            { "key": "B", "text": "will be displayed" },
            { "key": "C", "text": "display" },
            { "key": "D", "text": "are displaying" }
          ],
          "correct_answer": "B",
          "hint": "Chủ ngữ là 'Detailed analytics' (Các số liệu phân tích) là vật, nên phải 'được hiển thị'. Dấu hiệu 'next week' yêu cầu thì tương lai.",
          "explanation": "Chính xác. Thể bị động của thì tương lai đơn 'will be displayed' diễn tả việc các số liệu sẽ được hệ thống cho hiển thị vào tuần sau.",
          "translation": "Các phân tích chi tiết liên quan đến tổng thời gian học tập sẽ được hiển thị trên bảng điều khiển của nền tảng vào tuần tới."
        },
        {
          "id": "q_verb_tense_048",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Before the investor meeting started, the project manager _____ a comprehensive business plan for the new app.",
          "options": [
            { "key": "A", "text": "prepares" },
            { "key": "B", "text": "is preparing" },
            { "key": "C", "text": "had prepared" },
            { "key": "D", "text": "will prepare" }
          ],
          "correct_answer": "C",
          "hint": "Hành động chuẩn bị diễn ra và hoàn thành TRƯỚC một hành động khác trong quá khứ (cuộc họp bắt đầu - started).",
          "explanation": "Chính xác. Thì quá khứ hoàn thành 'had prepared' được sử dụng để nhấn mạnh tính hoàn tất của hành động trước một cột mốc quá khứ.",
          "translation": "Trước khi cuộc họp nhà đầu tư bắt đầu, quản lý dự án đã chuẩn bị xong một kế hoạch kinh doanh toàn diện cho ứng dụng mới."
        },
        {
          "id": "q_verb_tense_049",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Continuous)",
          "difficulty_level": "Easy",
          "question_text": "Due to the unexpected surge in website traffic, the IT team _____ the server infrastructure right now.",
          "options": [
            { "key": "A", "text": "upgrades" },
            { "key": "B", "text": "upgraded" },
            { "key": "C", "text": "is upgrading" },
            { "key": "D", "text": "has upgraded" }
          ],
          "correct_answer": "C",
          "hint": "Trạng từ 'right now' (ngay lúc này) bắt buộc phải sử dụng thì hiện tại tiếp diễn.",
          "explanation": "Chính xác. Thì hiện tại tiếp diễn 'is upgrading' diễn tả một hành động khẩn cấp đang diễn ra ngay tại thời điểm nói.",
          "translation": "Do sự gia tăng đột biến về lưu lượng truy cập trang web, đội ngũ CNTT đang nâng cấp cơ sở hạ tầng máy chủ ngay lúc này."
        },
        {
          "id": "q_verb_tense_050",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Many users _____ that the daily English speaking videos on TikTok help them maintain their learning habit.",
          "options": [
            { "key": "A", "text": "report" },
            { "key": "B", "text": "are reporting" },
            { "key": "C", "text": "have reported" },
            { "key": "D", "text": "will report" }
          ],
          "correct_answer": "C",
          "hint": "Mặc dù không có trạng từ thời gian rõ ràng, nhưng việc báo cáo phản hồi là một hành động bắt đầu trong quá khứ và những báo cáo đó vẫn còn giá trị đến hiện tại.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành 'have reported' nhấn mạnh vào kết quả, thành tựu hoặc trải nghiệm thu thập được cho tới thời điểm hiện tại.",
          "translation": "Nhiều người dùng đã báo cáo rằng các video nói tiếng Anh hàng ngày trên TikTok giúp họ duy trì thói quen học tập."
        },
        {
          "id": "q_verb_tense_051",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time the national exam begins, high school students using EduKit _____ over 500 hours of collective study time.",
          "options": [
            { "key": "A", "text": "log" },
            { "key": "B", "text": "logged" },
            { "key": "C", "text": "will have logged" },
            { "key": "D", "text": "are logging" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'By the time + hiện tại đơn' (Tính đến lúc...) yêu cầu mệnh đề chính dùng thì tương lai hoàn thành.",
          "explanation": "Chính xác. Thì tương lai hoàn thành 'will have logged' diễn tả việc tích lũy đủ 500 giờ học sẽ hoàn tất tính đến thời điểm kỳ thi bắt đầu trong tương lai.",
          "translation": "Tính đến lúc kỳ thi quốc gia bắt đầu, các học sinh trung học sử dụng EduKit sẽ ghi nhận được hơn 500 giờ học tập tập thể."
        },
        {
          "id": "q_verb_tense_052",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Simple)",
          "difficulty_level": "Medium",
          "question_text": "Currently, all premium Happy Box orders _____ within 24 hours of payment confirmation.",
          "options": [
            { "key": "A", "text": "process" },
            { "key": "B", "text": "are processing" },
            { "key": "C", "text": "are processed" },
            { "key": "D", "text": "processed" }
          ],
          "correct_answer": "C",
          "hint": "Chủ ngữ 'orders' (đơn hàng) là vật, không thể tự xử lý. Việc xử lý là một quy trình thường xuyên.",
          "explanation": "Chính xác. Thể bị động của thì hiện tại đơn 'are processed' được dùng để chỉ quy trình xử lý đơn hàng diễn ra thường xuyên như một quy định của công ty.",
          "translation": "Hiện tại, tất cả các đơn hàng Happy Box cao cấp được xử lý trong vòng 24 giờ sau khi xác nhận thanh toán."
        },
        {
          "id": "q_verb_tense_053",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Easy",
          "question_text": "The creator _____ her daily English speaking video when her phone ran out of battery.",
          "options": [
            { "key": "A", "text": "records" },
            { "key": "B", "text": "was recording" },
            { "key": "C", "text": "has recorded" },
            { "key": "D", "text": "is recording" }
          ],
          "correct_answer": "B",
          "hint": "Hành động đang diễn ra trong quá khứ (đang quay) thì bị một hành động khác cắt ngang (hết pin - ran out).",
          "explanation": "Chính xác. Thì quá khứ tiếp diễn 'was recording' diễn tả một hành động đang dang dở tại một thời điểm trong quá khứ.",
          "translation": "Nhà sáng tạo đang quay video nói tiếng Anh hàng ngày thì điện thoại của cô ấy hết pin."
        },
        {
          "id": "q_verb_tense_054",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Since January, the development team _____ three major updates to the mobile timekeeping application.",
          "options": [
            { "key": "A", "text": "releases" },
            { "key": "B", "text": "released" },
            { "key": "C", "text": "will release" },
            { "key": "D", "text": "has released" }
          ],
          "correct_answer": "D",
          "hint": "Giới từ 'Since' + mốc thời gian trong quá khứ là dấu hiệu của một hành động đã diễn ra và có thể tiếp tục lặp lại đến hiện tại.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành 'has released' (đã phát hành) nhấn mạnh vào số lượng thành tựu (ba bản cập nhật) đạt được tính đến hiện tại.",
          "translation": "Kể từ tháng Một, nhóm phát triển đã phát hành ba bản cập nhật lớn cho ứng dụng chấm công di động."
        },
        {
          "id": "q_verb_tense_055",
          "part": 5,
          "grammar_topic": "Passive Voice (Past Simple)",
          "difficulty_level": "Medium",
          "question_text": "The school leaderboard on the EduKit app _____ unexpectedly last night due to a server maintenance issue.",
          "options": [
            { "key": "A", "text": "reset" },
            { "key": "B", "text": "was reset" },
            { "key": "C", "text": "has reset" },
            { "key": "D", "text": "resets" }
          ],
          "correct_answer": "B",
          "hint": "Chủ ngữ 'leaderboard' (bảng xếp hạng) bị tác động bởi sự cố máy chủ. Thời gian là 'last night'. Chú ý động từ bất quy tắc: reset - reset - reset.",
          "explanation": "Chính xác. Thể bị động của thì quá khứ đơn 'was reset' được dùng vì bảng xếp hạng bị làm cho khởi động lại vào tối hôm qua.",
          "translation": "Bảng xếp hạng trường học trên ứng dụng EduKit đã bị thiết lập lại một cách bất ngờ vào tối qua do sự cố bảo trì máy chủ."
        },
        {
          "id": "q_verb_tense_056",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Medium",
          "question_text": "This time next week, the warehouse staff _____ hundreds of customized gift boxes for the upcoming corporate event.",
          "options": [
            { "key": "A", "text": "will be packing" },
            { "key": "B", "text": "pack" },
            { "key": "C", "text": "packed" },
            { "key": "D", "text": "have packed" }
          ],
          "correct_answer": "A",
          "hint": "Cụm 'This time next week' (giờ này tuần sau) chỉ ra một hành động đang tiếp diễn tại một thời điểm chính xác trong tương lai.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be packing' được sử dụng để diễn tả việc đang đóng gói hàng hóa sẽ xảy ra vào thời điểm đó.",
          "translation": "Giờ này tuần sau, nhân viên kho sẽ đang đóng gói hàng trăm hộp quà tặng tùy chỉnh cho sự kiện doanh nghiệp sắp tới."
        },
        {
          "id": "q_verb_tense_057",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Continuous)",
          "difficulty_level": "Easy",
          "question_text": "The company _____ its market reach by offering the PrepMaster app to language schools across the country.",
          "options": [
            { "key": "A", "text": "expand" },
            { "key": "B", "text": "is expanding" },
            { "key": "C", "text": "expanded" },
            { "key": "D", "text": "have expanded" }
          ],
          "correct_answer": "B",
          "hint": "Khi diễn tả một quá trình thay đổi hoặc một dự án đang triển khai ở giai đoạn hiện tại, ta dùng hiện tại tiếp diễn.",
          "explanation": "Chính xác. Thì hiện tại tiếp diễn 'is expanding' diễn tả một chiến lược mở rộng đang được công ty thực hiện ở thời điểm hiện tại.",
          "translation": "Công ty đang mở rộng phạm vi tiếp cận thị trường bằng cách cung cấp ứng dụng PrepMaster cho các trường ngoại ngữ trên toàn quốc."
        },
        {
          "id": "q_verb_tense_058",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Hard",
          "question_text": "Before taking the official TOEIC test, the candidate _____ all the practice exams available on the PrepMaster platform.",
          "options": [
            { "key": "A", "text": "completes" },
            { "key": "B", "text": "has completed" },
            { "key": "C", "text": "had completed" },
            { "key": "D", "text": "is completing" }
          ],
          "correct_answer": "C",
          "hint": "Liên từ 'Before' chỉ ra hành động học/hoàn thành diễn ra trước một hành động quá khứ khác (việc đi thi - taking).",
          "explanation": "Chính xác. Thì quá khứ hoàn thành 'had completed' diễn tả hành động đã hoàn tất trọn vẹn trước một sự kiện trong quá khứ.",
          "translation": "Trước khi làm bài thi TOEIC chính thức, ứng viên đã hoàn thành tất cả các bài thi thử có sẵn trên nền tảng PrepMaster."
        },
        {
          "id": "q_verb_tense_059",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Easy",
          "question_text": "The personnel management website _____ HR managers to generate comprehensive attendance reports with just one click.",
          "options": [
            { "key": "A", "text": "allow" },
            { "key": "B", "text": "allowing" },
            { "key": "C", "text": "allows" },
            { "key": "D", "text": "allowed" }
          ],
          "correct_answer": "C",
          "hint": "Nói về chức năng cốt lõi của một trang web hoặc ứng dụng, ta dùng thì hiện tại đơn.",
          "explanation": "Chính xác. Chủ ngữ 'website' là số ít nên động từ thêm 's' thành 'allows' (cho phép).",
          "translation": "Trang web quản lý nhân sự cho phép các nhà quản lý nhân sự tạo các báo cáo điểm danh toàn diện chỉ bằng một cú nhấp chuột."
        },
        {
          "id": "q_verb_tense_060",
          "part": 5,
          "grammar_topic": "Passive Voice (Future Simple)",
          "difficulty_level": "Medium",
          "question_text": "The final results of the daily English speaking challenge _____ on the official TikTok page next Friday.",
          "options": [
            { "key": "A", "text": "will announce" },
            { "key": "B", "text": "announced" },
            { "key": "C", "text": "will be announced" },
            { "key": "D", "text": "have announced" }
          ],
          "correct_answer": "C",
          "hint": "Chủ ngữ 'results' (kết quả) không tự công bố được. Dấu hiệu 'next Friday' yêu cầu thì tương lai.",
          "explanation": "Chính xác. Thể bị động của thì tương lai đơn 'will be announced' chỉ việc kết quả 'sẽ được công bố' vào thời gian tới.",
          "translation": "Kết quả cuối cùng của thử thách nói tiếng Anh hàng ngày sẽ được công bố trên trang TikTok chính thức vào thứ Sáu tới."
        },
        {
          "id": "q_verb_tense_061",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect Continuous)",
          "difficulty_level": "Hard",
          "question_text": "The design team _____ on the new user interface for the Happy Box website since early morning.",
          "options": [
            { "key": "A", "text": "is working" },
            { "key": "B", "text": "works" },
            { "key": "C", "text": "worked" },
            { "key": "D", "text": "has been working" }
          ],
          "correct_answer": "D",
          "hint": "Giới từ 'since' + mốc thời gian, kết hợp với một hành động đòi hỏi quá trình liên tục (làm việc) thường dùng thì hiện tại hoàn thành tiếp diễn.",
          "explanation": "Chính xác. 'Has been working' nhấn mạnh quá trình làm việc liên tục không ngừng nghỉ của nhóm thiết kế từ sáng sớm đến tận bây giờ.",
          "translation": "Nhóm thiết kế đã và đang làm việc liên tục trên giao diện người dùng mới cho trang web Happy Box kể từ sáng sớm."
        },
        {
          "id": "q_verb_tense_062",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Medium",
          "question_text": "When the JLPT N3 examination started, the invigilator _____ all candidates to turn off their mobile phones.",
          "options": [
            { "key": "A", "text": "instructs" },
            { "key": "B", "text": "instructed" },
            { "key": "C", "text": "is instructing" },
            { "key": "D", "text": "will instruct" }
          ],
          "correct_answer": "B",
          "hint": "Sự việc xảy ra trong quá khứ (khi kỳ thi bắt đầu - started). Các chuỗi hành động xảy ra liên tiếp trong quá khứ đều dùng thì quá khứ đơn.",
          "explanation": "Chính xác. Động từ 'instructed' (đã hướng dẫn/yêu cầu) hòa hợp với thì quá khứ đơn của động từ 'started' ở mệnh đề trạng ngữ.",
          "translation": "Khi kỳ thi JLPT N3 bắt đầu, giám thị đã yêu cầu tất cả các thí sinh tắt điện thoại di động của họ."
        },
        {
          "id": "q_verb_tense_063",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Continuous)",
          "difficulty_level": "Hard",
          "question_text": "A new feature that ranks schools by total study hours _____ by the EduKit engineering team right now.",
          "options": [
            { "key": "A", "text": "is developing" },
            { "key": "B", "text": "is being developed" },
            { "key": "C", "text": "develops" },
            { "key": "D", "text": "has developed" }
          ],
          "correct_answer": "B",
          "hint": "Chủ ngữ là 'A new feature' (tính năng mới) bị tác động bởi nhóm kỹ thuật. Trạng từ 'right now' yêu cầu thì tiếp diễn.",
          "explanation": "Chính xác. Thể bị động của thì hiện tại tiếp diễn là 'is/are + being + V3/ed'. Tính năng này 'đang được phát triển' ngay lúc này.",
          "translation": "Một tính năng mới xếp hạng các trường học theo tổng số giờ học đang được nhóm kỹ thuật EduKit phát triển ngay lúc này."
        },
        {
          "id": "q_verb_tense_064",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple vs Present Continuous)",
          "difficulty_level": "Medium",
          "question_text": "Usually, the timekeeping app logs data instantly, but today it _____ a bit slower due to server upgrades.",
          "options": [
            { "key": "A", "text": "run" },
            { "key": "B", "text": "runs" },
            { "key": "C", "text": "ran" },
            { "key": "D", "text": "is running" }
          ],
          "correct_answer": "D",
          "hint": "Mặc dù có thói quen ở hiện tại đơn (Usually), nhưng sự việc 'today' mang tính tạm thời khác với bình thường nên dùng hiện tại tiếp diễn.",
          "explanation": "Chính xác. Thì hiện tại tiếp diễn 'is running' diễn tả một tình trạng tạm thời (chạy chậm hơn) chỉ xảy ra trong ngày hôm nay.",
          "translation": "Thông thường, ứng dụng chấm công ghi nhận dữ liệu ngay lập tức, nhưng hôm nay nó đang chạy chậm hơn một chút do việc nâng cấp máy chủ."
        },
        {
          "id": "q_verb_tense_065",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Simple)",
          "difficulty_level": "Easy",
          "question_text": "If you consistently practice English speaking every day, you _____ a significant improvement in your fluency.",
          "options": [
            { "key": "A", "text": "see" },
            { "key": "B", "text": "saw" },
            { "key": "C", "text": "have seen" },
            { "key": "D", "text": "will see" }
          ],
          "correct_answer": "D",
          "hint": "Câu điều kiện loại 1 (If + Hiện tại đơn) diễn tả sự việc có thật/khả năng xảy ra trong tương lai.",
          "explanation": "Chính xác. Mệnh đề chính của câu điều kiện loại 1 dùng thì tương lai đơn 'will see'.",
          "translation": "Nếu bạn kiên trì thực hành nói tiếng Anh mỗi ngày, bạn sẽ thấy sự cải thiện đáng kể về sự trôi chảy của mình."
        },
        {
          "id": "q_verb_tense_066",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "So far, over 10,000 corporate clients _____ our personnel management system to streamline their operations.",
          "options": [
            { "key": "A", "text": "adopted" },
            { "key": "B", "text": "have adopted" },
            { "key": "C", "text": "are adopting" },
            { "key": "D", "text": "will adopt" }
          ],
          "correct_answer": "B",
          "hint": "Cụm từ 'So far' (Cho đến nay) là dấu hiệu nhận biết cực kỳ phổ biến của thì hiện tại hoàn thành.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành 'have adopted' chỉ kết quả tính từ quá khứ kéo dài đến hiện tại (cho đến nay đã có hơn 10.000 khách hàng).",
          "translation": "Cho đến nay, hơn 10.000 khách hàng doanh nghiệp đã áp dụng hệ thống quản lý nhân sự của chúng tôi để hợp lý hóa hoạt động của họ."
        },
        {
          "id": "q_verb_tense_067",
          "part": 5,
          "grammar_topic": "Passive Voice (Past Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time the new feature was announced, all the underlying software bugs _____ by the developers.",
          "options": [
            { "key": "A", "text": "had fixed" },
            { "key": "B", "text": "were fixing" },
            { "key": "C", "text": "have been fixed" },
            { "key": "D", "text": "had been fixed" }
          ],
          "correct_answer": "D",
          "hint": "Việc sửa lỗi (fix bugs) diễn ra và hoàn thành TRƯỚC khi tính năng được công bố (was announced). 'Bugs' không tự sửa nên phải dùng bị động.",
          "explanation": "Chính xác. Thể bị động của thì quá khứ hoàn thành 'had been fixed' (đã được sửa xong) mô tả hành động bị động hoàn tất trước một mốc quá khứ khác.",
          "translation": "Vào lúc tính năng mới được công bố, tất cả các lỗi phần mềm tiềm ẩn đã được các lập trình viên sửa xong."
        },
        {
          "id": "q_verb_tense_068",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "Last Friday, the Happy Box team _____ a specialized workshop on eco-friendly packaging materials.",
          "options": [
            { "key": "A", "text": "attended" },
            { "key": "B", "text": "attends" },
            { "key": "C", "text": "has attended" },
            { "key": "D", "text": "is attending" }
          ],
          "correct_answer": "A",
          "hint": "Mốc thời gian 'Last Friday' đòi hỏi thì quá khứ đơn.",
          "explanation": "Chính xác. Động từ 'attended' (đã tham dự) được chia ở quá khứ đơn phù hợp với thời gian đã kết thúc.",
          "translation": "Thứ Sáu tuần trước, đội ngũ Happy Box đã tham dự một hội thảo chuyên đề về vật liệu đóng gói thân thiện với môi trường."
        },
        {
          "id": "q_verb_tense_069",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time you finish the two-month TOEIC sprint, you _____ a solid foundation in essential grammar and vocabulary.",
          "options": [
            { "key": "A", "text": "build" },
            { "key": "B", "text": "built" },
            { "key": "C", "text": "will have built" },
            { "key": "D", "text": "are building" }
          ],
          "correct_answer": "C",
          "hint": "Cấu trúc 'By the time + S + V(hiện tại)' ở mệnh đề phụ đòi hỏi mệnh đề chính sử dụng thì tương lai hoàn thành.",
          "explanation": "Chính xác. Thì tương lai hoàn thành 'will have built' diễn tả việc bạn sẽ hoàn tất quá trình xây dựng nền tảng ngữ pháp/từ vựng tính đến lúc đợt chạy nước rút 2 tháng kết thúc.",
          "translation": "Tính đến lúc bạn hoàn thành đợt chạy nước rút TOEIC 2 tháng, bạn sẽ (đã) xây dựng được một nền tảng vững chắc về ngữ pháp và từ vựng thiết yếu."
        },
        {
          "id": "q_verb_tense_070",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Several new short video segments about daily conversation _____ to the TikTok series recently.",
          "options": [
            { "key": "A", "text": "have added" },
            { "key": "B", "text": "have been added" },
            { "key": "C", "text": "added" },
            { "key": "D", "text": "was added" }
          ],
          "correct_answer": "B",
          "hint": "Trạng từ 'recently' yêu cầu hiện tại hoàn thành. Chủ ngữ 'segments' (các phân đoạn) là vật, chịu tác động của hành động thêm vào.",
          "explanation": "Chính xác. Thể bị động của thì hiện tại hoàn thành 'have been added' phù hợp với chủ ngữ số nhiều (segments).",
          "translation": "Gần đây, một số đoạn video ngắn mới về hội thoại hàng ngày đã được thêm vào loạt video trên TikTok."
        },
        {
          "id": "q_verb_tense_071",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Easy",
          "question_text": "Every morning, the automated system _____ a daily attendance report to all department heads.",
          "options": [
            { "key": "A", "text": "generate" },
            { "key": "B", "text": "generated" },
            { "key": "C", "text": "is generating" },
            { "key": "D", "text": "generates" }
          ],
          "correct_answer": "D",
          "hint": "Cụm 'Every morning' (mỗi sáng) chỉ một hành động diễn ra lặp đi lặp lại như một quy luật.",
          "explanation": "Chính xác. Thì hiện tại đơn được dùng. Chủ ngữ 'the automated system' là ngôi thứ ba số ít, nên động từ thêm 's' thành 'generates'.",
          "translation": "Mỗi buổi sáng, hệ thống tự động tạo một báo cáo điểm danh hàng ngày gửi cho tất cả các trưởng phòng."
        },
        {
          "id": "q_verb_tense_072",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Medium",
          "question_text": "The marketing team _____ the promotional plan for the gift boxes when the CEO unexpectedly walked in.",
          "options": [
            { "key": "A", "text": "discusses" },
            { "key": "B", "text": "discussed" },
            { "key": "C", "text": "were discussing" },
            { "key": "D", "text": "have discussed" }
          ],
          "correct_answer": "C",
          "hint": "Một hành động đang diễn ra trong quá khứ (were discussing) bị một hành động khác cắt ngang (walked in). Lớp nghĩa từ 'team' trong Anh-Mỹ có thể đi với động từ số nhiều hoặc số ít tùy ngữ cảnh.",
          "explanation": "Chính xác. Thì quá khứ tiếp diễn được dùng để mô tả cảnh tượng đang họp bàn khi giám đốc bước vào. Tập thể nhóm (team) ở đây hoạt động như các thành viên nên dùng 'were discussing'.",
          "translation": "Nhóm tiếp thị đang thảo luận về kế hoạch khuyến mãi cho các hộp quà tặng thì giám đốc điều hành bất ngờ bước vào."
        },
        {
          "id": "q_verb_tense_073",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Hard",
          "question_text": "Please do not call the developer at 9 AM tomorrow; he _____ an important code review meeting.",
          "options": [
            { "key": "A", "text": "will attend" },
            { "key": "B", "text": "will be attending" },
            { "key": "C", "text": "attends" },
            { "key": "D", "text": "has attended" }
          ],
          "correct_answer": "B",
          "hint": "Thời điểm '9 AM tomorrow' là một lúc xác định trong tương lai, báo hiệu một hành động sẽ đang dở dang tại lúc đó.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be attending' diễn tả việc người lập trình viên sẽ đang bận tham gia cuộc họp vào đúng 9 giờ sáng mai.",
          "translation": "Vui lòng không gọi cho lập trình viên vào lúc 9 giờ sáng ngày mai; anh ấy sẽ đang tham dự một cuộc họp đánh giá mã nguồn quan trọng."
        },
        {
          "id": "q_verb_tense_074",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Continuous)",
          "difficulty_level": "Medium",
          "question_text": "The bugs reported in the PrepMaster application _____ by our technical support team as we speak.",
          "options": [
            { "key": "A", "text": "investigate" },
            { "key": "B", "text": "are investigating" },
            { "key": "C", "text": "are being investigated" },
            { "key": "D", "text": "investigated" }
          ],
          "correct_answer": "C",
          "hint": "Cụm 'as we speak' mang nghĩa là 'ngay lúc chúng ta đang nói' = 'right now'. Các lỗi (bugs) phải 'được điều tra'.",
          "explanation": "Chính xác. Thể bị động hiện tại tiếp diễn 'are being investigated' được dùng để chỉ quá trình điều tra đang diễn ra ngay lúc này bởi bộ phận kỹ thuật.",
          "translation": "Các lỗi được báo cáo trong ứng dụng PrepMaster đang được nhóm hỗ trợ kỹ thuật của chúng tôi điều tra ngay lúc này."
        },
        {
          "id": "q_verb_tense_075",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect vs Past Simple)",
          "difficulty_level": "Hard",
          "question_text": "She _____ for the TOEIC exam for three months before she finally achieved her target score of 800.",
          "options": [
            { "key": "A", "text": "studies" },
            { "key": "B", "text": "is studying" },
            { "key": "C", "text": "has studied" },
            { "key": "D", "text": "had studied" }
          ],
          "correct_answer": "D",
          "hint": "Quá trình ôn tập (study) kéo dài 3 tháng và ĐÃ KẾT THÚC trước khi cô ấy đạt được điểm số ở quá khứ (achieved).",
          "explanation": "Chính xác. Thì quá khứ hoàn thành 'had studied' nhấn mạnh quá trình 3 tháng học tập đã hoàn tất trọn vẹn trước khi có kết quả điểm số trong quá khứ.",
          "translation": "Cô ấy đã ôn thi TOEIC được ba tháng trước khi cuối cùng đạt được số điểm mục tiêu là 800."
        },
        {
          "id": "q_verb_tense_076",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Continuous)",
          "difficulty_level": "Medium",
          "question_text": "Every day she posts a short video, but today the creator _____ a special one-hour live session on TikTok.",
          "options": [
            { "key": "A", "text": "host" },
            { "key": "B", "text": "hosted" },
            { "key": "C", "text": "is hosting" },
            { "key": "D", "text": "hosts" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Cấu trúc đối lập 'Every day... but today...' báo hiệu sự thay đổi từ thói quen (hiện tại đơn) sang một hành động mang tính tạm thời ngay lúc này (hiện tại tiếp diễn).",
          "explanation": "Chính xác. Thì hiện tại tiếp diễn 'is hosting' mô tả một hành động tạm thời, khác biệt với thói quen hàng ngày.",
          "translation": "Mỗi ngày cô ấy đăng một video ngắn, nhưng hôm nay nhà sáng tạo đang tổ chức một phiên phát trực tiếp đặc biệt dài một giờ trên TikTok."
        },
        {
          "id": "q_verb_tense_077",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "Last year, the Happy Box company _____ a new line of premium corporate gifts.",
          "options": [
            { "key": "A", "text": "launches" },
            { "key": "B", "text": "launched" },
            { "key": "C", "text": "has launched" },
            { "key": "D", "text": "is launching" }
          ],
          "correct_answer": "B",
          "hint": "Mẹo thời gian: 'Last year' (Năm ngoái) là dấu hiệu chốt hạ của thì Quá khứ đơn. Không dùng thì Hoàn thành với thời điểm xác định trong quá khứ.",
          "explanation": "Chính xác. Động từ 'launched' (đã ra mắt) được chia ở quá khứ đơn phù hợp với thời điểm đã kết thúc 'last year'.",
          "translation": "Năm ngoái, công ty Happy Box đã ra mắt một dòng quà tặng doanh nghiệp cao cấp mới."
        },
        {
          "id": "q_verb_tense_078",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time the test date arrives, users of the PrepMaster app _____ all the mock exams.",
          "options": [
            { "key": "A", "text": "complete" },
            { "key": "B", "text": "completed" },
            { "key": "C", "text": "will have completed" },
            { "key": "D", "text": "have completed" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: 'By the time + hiện tại đơn' luôn đi kèm với thì Tương lai hoàn thành ở mệnh đề chính.",
          "explanation": "Chính xác. 'Will have completed' diễn tả việc hoàn thành tất cả bài thi thử sẽ xong xuôi trước khi ngày thi chính thức đến.",
          "translation": "Tính đến lúc ngày thi đến, người dùng ứng dụng PrepMaster sẽ hoàn thành tất cả các bài thi thử."
        },
        {
          "id": "q_verb_tense_079",
          "part": 5,
          "grammar_topic": "Passive Voice (Future Simple)",
          "difficulty_level": "Medium",
          "question_text": "The updated timekeeping policies _____ to all departments starting next Monday.",
          "options": [
            { "key": "A", "text": "will implement" },
            { "key": "B", "text": "are implementing" },
            { "key": "C", "text": "implemented" },
            { "key": "D", "text": "will be implemented" }
          ],
          "correct_answer": "D",
          "hint": "Mẹo nhận diện: 'policies' (chính sách) là vật -> bị động. 'Next Monday' -> tương lai. Chọn Bị động Tương lai đơn.",
          "explanation": "Chính xác. Thể bị động của tương lai đơn 'will be implemented' mang nghĩa 'sẽ được triển khai/áp dụng'.",
          "translation": "Các chính sách chấm công cập nhật sẽ được triển khai cho tất cả các phòng ban bắt đầu từ thứ Hai tuần tới."
        },
        {
          "id": "q_verb_tense_080",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect Continuous)",
          "difficulty_level": "Hard",
          "question_text": "The technical team _____ bugs in the EduKit system all morning to ensure a smooth user experience.",
          "options": [
            { "key": "A", "text": "fixes" },
            { "key": "B", "text": "is fixing" },
            { "key": "C", "text": "has been fixing" },
            { "key": "D", "text": "fixed" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Cụm 'all morning' / 'all day' nhấn mạnh sự miệt mài, liên tục từ quá khứ đến hiện tại -> Dùng Hiện tại hoàn thành tiếp diễn.",
          "explanation": "Chính xác. 'Has been fixing' nhấn mạnh quá trình sửa lỗi diễn ra liên tục cả buổi sáng và vẫn đang tiếp diễn.",
          "translation": "Nhóm kỹ thuật đã và đang sửa lỗi trong hệ thống EduKit cả buổi sáng để đảm bảo trải nghiệm người dùng mượt mà."
        },
        {
          "id": "q_verb_tense_081",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Medium",
          "question_text": "The marketing team _____ the promotional campaign when the internet connection suddenly dropped.",
          "options": [
            { "key": "A", "text": "discusses" },
            { "key": "B", "text": "has discussed" },
            { "key": "C", "text": "was discussing" },
            { "key": "D", "text": "discussed" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Cấu trúc 'when + Quá khứ đơn (dropped)' cắt ngang một hành động đang dang dở. Hành động đang dang dở dùng Quá khứ tiếp diễn.",
          "explanation": "Chính xác. 'Was discussing' chỉ hành động đang diễn ra (đang thảo luận) thì bị sự cố mất mạng cắt ngang.",
          "translation": "Nhóm tiếp thị đang thảo luận về chiến dịch khuyến mãi thì kết nối internet đột nhiên bị ngắt."
        },
        {
          "id": "q_verb_tense_082",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Medium",
          "question_text": "At this time tomorrow, the high school students _____ the national mock exam on the EduKit platform.",
          "options": [
            { "key": "A", "text": "will be taking" },
            { "key": "B", "text": "will take" },
            { "key": "C", "text": "take" },
            { "key": "D", "text": "are taking" }
          ],
          "correct_answer": "A",
          "hint": "Mẹo thời gian: 'At this time tomorrow' (Giờ này ngày mai) khoanh vùng một mốc chính xác ở tương lai -> Tương lai tiếp diễn.",
          "explanation": "Chính xác. Thì tương lai tiếp diễn 'will be taking' mô tả trạng thái đang làm bài thi tại một thời điểm xác định ở ngày mai.",
          "translation": "Vào giờ này ngày mai, các học sinh trung học sẽ đang làm bài thi thử quốc gia trên nền tảng EduKit."
        },
        {
          "id": "q_verb_tense_083",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Perfect)",
          "difficulty_level": "Hard",
          "question_text": "Several new features, including a study leaderboard, _____ to the application recently.",
          "options": [
            { "key": "A", "text": "have added" },
            { "key": "B", "text": "are adding" },
            { "key": "C", "text": "added" },
            { "key": "D", "text": "have been added" }
          ],
          "correct_answer": "D",
          "hint": "Mẹo nhận diện: 'recently' (gần đây) = Hiện tại hoàn thành. 'Features' là vật = Bị động -> Bị động Hiện tại hoàn thành.",
          "explanation": "Chính xác. Thể bị động của hiện tại hoàn thành 'have been added' (đã được thêm vào) hoàn toàn phù hợp với chủ ngữ số nhiều.",
          "translation": "Gần đây, một số tính năng mới, bao gồm bảng xếp hạng học tập, đã được thêm vào ứng dụng."
        },
        {
          "id": "q_verb_tense_084",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Easy",
          "question_text": "The weekly English speaking live stream _____ exactly at 8 PM on Fridays.",
          "options": [
            { "key": "A", "text": "start" },
            { "key": "B", "text": "starts" },
            { "key": "C", "text": "is starting" },
            { "key": "D", "text": "started" }
          ],
          "correct_answer": "B",
          "hint": "Mẹo thời gian: Các từ như 'weekly' (hàng tuần) và 'on Fridays' (vào các ngày thứ Sáu) chỉ một lịch trình cố định như lịch tàu xe -> Hiện tại đơn.",
          "explanation": "Chính xác. Chủ ngữ số ít 'live stream' đi kèm động từ hiện tại đơn thêm 's' thành 'starts'.",
          "translation": "Chương trình phát trực tiếp nói tiếng Anh hàng tuần bắt đầu chính xác vào lúc 8 giờ tối các ngày thứ Sáu."
        },
        {
          "id": "q_verb_tense_085",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Medium",
          "question_text": "The timekeeping system _____ before the IT team could intervene to save the data.",
          "options": [
            { "key": "A", "text": "has crashed" },
            { "key": "B", "text": "crashes" },
            { "key": "C", "text": "had crashed" },
            { "key": "D", "text": "was crashing" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: 'before + Quá khứ đơn (could intervene)' chỉ ra rằng sự việc sập hệ thống xảy ra TRƯỚC một hành động quá khứ -> Quá khứ hoàn thành.",
          "explanation": "Chính xác. Quá khứ hoàn thành 'had crashed' mô tả hành động sập hệ thống đã hoàn tất trước khi đội IT kịp can thiệp.",
          "translation": "Hệ thống chấm công đã bị sập trước khi đội IT có thể can thiệp để lưu lại dữ liệu."
        },
        {
          "id": "q_verb_tense_086",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "Many students _____ their kanji reading skills significantly since they started using PrepMaster.",
          "options": [
            { "key": "A", "text": "improve" },
            { "key": "B", "text": "improved" },
            { "key": "C", "text": "have improved" },
            { "key": "D", "text": "will improve" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: 'since + mệnh đề quá khứ' là công thức vàng của thì Hiện tại hoàn thành ở mệnh đề chính.",
          "explanation": "Chính xác. Thì hiện tại hoàn thành 'have improved' miêu tả quá trình tiến bộ diễn ra từ lúc bắt đầu dùng app cho đến nay.",
          "translation": "Nhiều học sinh đã cải thiện kỹ năng đọc chữ Hán của họ một cách đáng kể kể từ khi họ bắt đầu sử dụng PrepMaster."
        },
        {
          "id": "q_verb_tense_087",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Simple)",
          "difficulty_level": "Easy",
          "question_text": "If the demand for the new gift boxes increases, we _____ our packaging facility next quarter.",
          "options": [
            { "key": "A", "text": "expand" },
            { "key": "B", "text": "expanded" },
            { "key": "C", "text": "have expanded" },
            { "key": "D", "text": "will expand" }
          ],
          "correct_answer": "D",
          "hint": "Mẹo nhận diện: Câu điều kiện loại 1 'If + Hiện tại đơn (increases)'. Mệnh đề chính phải dùng Tương lai đơn.",
          "explanation": "Chính xác. 'Will expand' (sẽ mở rộng) hoàn thiện cấu trúc câu điều kiện diễn tả khả năng ở tương lai.",
          "translation": "Nếu nhu cầu về các hộp quà tặng mới tăng lên, chúng tôi sẽ mở rộng cơ sở đóng gói của mình vào quý tới."
        },
        {
          "id": "q_verb_tense_088",
          "part": 5,
          "grammar_topic": "Passive Voice (Past Simple)",
          "difficulty_level": "Medium",
          "question_text": "The new feature allowing students to study together online _____ last night.",
          "options": [
            { "key": "A", "text": "was launched" },
            { "key": "B", "text": "launched" },
            { "key": "C", "text": "has launched" },
            { "key": "D", "text": "is launched" }
          ],
          "correct_answer": "A",
          "hint": "Mẹo nhận diện: 'last night' -> Quá khứ đơn. 'feature' (tính năng) không tự ra mắt mà phải 'được ra mắt' -> Bị động Quá khứ đơn.",
          "explanation": "Chính xác. Thể bị động 'was launched' là cấu trúc duy nhất vừa mang nghĩa bị động vừa đúng thì quá khứ.",
          "translation": "Tính năng mới cho phép học sinh học trực tuyến cùng nhau đã được ra mắt vào tối qua."
        },
        {
          "id": "q_verb_tense_089",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Continuous)",
          "difficulty_level": "Easy",
          "question_text": "The HR manager is currently busy; she _____ the monthly attendance records of all employees.",
          "options": [
            { "key": "A", "text": "review" },
            { "key": "B", "text": "reviewed" },
            { "key": "C", "text": "is reviewing" },
            { "key": "D", "text": "has reviewed" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Từ 'currently' (hiện tại) và bối cảnh 'đang bận' (is busy) bắt buộc hành động theo sau phải dùng Hiện tại tiếp diễn.",
          "explanation": "Chính xác. 'Is reviewing' diễn tả hành động đang xảy ra ngay lúc nói, giải thích lý do tại sao người quản lý đang bận.",
          "translation": "Người quản lý nhân sự hiện đang bận; cô ấy đang xem xét các hồ sơ điểm danh hàng tháng của tất cả nhân viên."
        },
        {
          "id": "q_verb_tense_090",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the end of this month, the creator _____ 30 daily speaking videos to her TikTok channel.",
          "options": [
            { "key": "A", "text": "will upload" },
            { "key": "B", "text": "uploads" },
            { "key": "C", "text": "will have uploaded" },
            { "key": "D", "text": "uploaded" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Cấu trúc 'By the end of...' (Tính đến cuối...) luôn là dấu hiệu 'mời gọi' thì Tương lai hoàn thành.",
          "explanation": "Chính xác. Thì tương lai hoàn thành 'will have uploaded' diễn đạt việc hoàn tất chỉ tiêu 30 video khi đến mốc cuối tháng.",
          "translation": "Tính đến cuối tháng này, nhà sáng tạo sẽ hoàn tất việc tải lên 30 video luyện nói hàng ngày lên kênh TikTok của cô ấy."
        },
        {
          "id": "q_verb_tense_091",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Simple)",
          "difficulty_level": "Easy",
          "question_text": "Yesterday, the automated system _____ an exam reminder to all candidates registered for the JLPT N3.",
          "options": [
            { "key": "A", "text": "send" },
            { "key": "B", "text": "sending" },
            { "key": "C", "text": "has sent" },
            { "key": "D", "text": "sent" }
          ],
          "correct_answer": "D",
          "hint": "Mẹo thời gian: Từ 'Yesterday' (Hôm qua) nằm chễm chệ đầu câu, bạn chỉ việc chọn động từ dạng V2/ed.",
          "explanation": "Chính xác. 'Sent' là dạng quá khứ bất quy tắc của động từ 'send'.",
          "translation": "Hôm qua, hệ thống tự động đã gửi một lời nhắc nhở kỳ thi đến tất cả các thí sinh đăng ký thi JLPT N3."
        },
        {
          "id": "q_verb_tense_092",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect Continuous)",
          "difficulty_level": "Medium",
          "question_text": "We _____ eco-friendly materials for our Happy Box packaging lately to reduce our carbon footprint.",
          "options": [
            { "key": "A", "text": "have been sourcing" },
            { "key": "B", "text": "are sourcing" },
            { "key": "C", "text": "source" },
            { "key": "D", "text": "sourced" }
          ],
          "correct_answer": "A",
          "hint": "Mẹo thời gian: Trạng từ 'lately' (dạo gần đây) khi đi với một hành động mang tính quá trình (tìm nguồn cung) thường dùng Hiện tại hoàn thành tiếp diễn.",
          "explanation": "Chính xác. 'Have been sourcing' mô tả một nỗ lực tìm kiếm đang diễn ra liên tục dạo gần đây.",
          "translation": "Dạo gần đây, chúng tôi đã và đang tìm kiếm các vật liệu thân thiện với môi trường cho bao bì Happy Box để giảm lượng khí thải carbon."
        },
        {
          "id": "q_verb_tense_093",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Continuous)",
          "difficulty_level": "Hard",
          "question_text": "The TOEIC reading module in the PrepMaster app _____ by the content team right now.",
          "options": [
            { "key": "A", "text": "is updating" },
            { "key": "B", "text": "updates" },
            { "key": "C", "text": "is being updated" },
            { "key": "D", "text": "has updated" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo nhận diện: 'right now' -> Hiện tại tiếp diễn. 'module' là vật -> Bị động. Chọn công thức Bị động Hiện tại tiếp diễn (is/are + being + V3).",
          "explanation": "Chính xác. Thể bị động 'is being updated' chỉ hành động 'đang được cập nhật' ngay tại thời điểm nói.",
          "translation": "Mô-đun đọc hiểu TOEIC trong ứng dụng PrepMaster đang được đội ngũ nội dung cập nhật ngay lúc này."
        },
        {
          "id": "q_verb_tense_094",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Continuous)",
          "difficulty_level": "Medium",
          "question_text": "Next week, the developers _____ the new geolocation feature for the timekeeping app.",
          "options": [
            { "key": "A", "text": "tested" },
            { "key": "B", "text": "have tested" },
            { "key": "C", "text": "will be testing" },
            { "key": "D", "text": "test" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: 'Next week' (tuần tới) có thể dùng Tương lai đơn (will test), nhưng trong các lựa chọn chỉ có Tương lai tiếp diễn là hợp lý về thì (tense).",
          "explanation": "Chính xác. 'Will be testing' dự báo một sự việc sẽ đang diễn ra, nằm trong lịch trình công việc của tuần tới.",
          "translation": "Tuần tới, các lập trình viên sẽ tiến hành kiểm thử tính năng định vị vị trí mới cho ứng dụng chấm công."
        },
        {
          "id": "q_verb_tense_095",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Perfect)",
          "difficulty_level": "Medium",
          "question_text": "The EduKit server _____ its capacity long before we finally upgraded the hardware.",
          "options": [
            { "key": "A", "text": "reaches" },
            { "key": "B", "text": "had reached" },
            { "key": "C", "text": "has reached" },
            { "key": "D", "text": "will reach" }
          ],
          "correct_answer": "B",
          "hint": "Mẹo thời gian: 'before + Quá khứ đơn (upgraded)'. Hành động xảy ra trước quá khứ đơn luôn là Quá khứ hoàn thành.",
          "explanation": "Chính xác. 'Had reached' mô tả việc chạm ngưỡng dung lượng đã xảy ra từ rất lâu trước khi hành động nâng cấp diễn ra.",
          "translation": "Máy chủ EduKit đã đạt đến giới hạn dung lượng từ rất lâu trước khi chúng tôi chính thức nâng cấp phần cứng."
        },
        {
          "id": "q_verb_tense_096",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Simple)",
          "difficulty_level": "Easy",
          "question_text": "The app notification consistently _____ users to practice their English pronunciation every day.",
          "options": [
            { "key": "A", "text": "remind" },
            { "key": "B", "text": "reminding" },
            { "key": "C", "text": "reminded" },
            { "key": "D", "text": "reminds" }
          ],
          "correct_answer": "D",
          "hint": "Mẹo thời gian: 'consistently' (liên tục/đều đặn) và 'every day' (mỗi ngày) yêu cầu thì Hiện tại đơn cho một thói quen/lịch trình.",
          "explanation": "Chính xác. Chủ ngữ 'The app notification' là số ít nên động từ 'reminds' thêm 's'.",
          "translation": "Thông báo của ứng dụng liên tục nhắc nhở người dùng thực hành phát âm tiếng Anh của họ mỗi ngày."
        },
        {
          "id": "q_verb_tense_097",
          "part": 5,
          "grammar_topic": "Passive Voice (Present Simple)",
          "difficulty_level": "Medium",
          "question_text": "Each custom Happy Box _____ carefully by our quality assurance team before shipping.",
          "options": [
            { "key": "A", "text": "inspects" },
            { "key": "B", "text": "is inspected" },
            { "key": "C", "text": "inspecting" },
            { "key": "D", "text": "inspected" }
          ],
          "correct_answer": "B",
          "hint": "Mẹo nhận diện: 'Each custom Happy Box' là vật -> Bị động. Hành động này là một quy trình lặp đi lặp lại 'before shipping' -> Bị động Hiện tại đơn.",
          "explanation": "Chính xác. 'Is inspected' (được kiểm tra) mang nghĩa bị động, phù hợp với quy trình kiểm soát chất lượng thường xuyên.",
          "translation": "Mỗi chiếc hộp Happy Box tùy chỉnh đều được kiểm tra cẩn thận bởi đội ngũ đảm bảo chất lượng của chúng tôi trước khi giao hàng."
        },
        {
          "id": "q_verb_tense_098",
          "part": 5,
          "grammar_topic": "Verb Tenses (Present Perfect)",
          "difficulty_level": "Medium",
          "question_text": "The educational application _____ already _____ over 5,000 new users this week alone.",
          "options": [
            { "key": "A", "text": "has / gained" },
            { "key": "B", "text": "is / gaining" },
            { "key": "C", "text": "was / gaining" },
            { "key": "D", "text": "will / gain" }
          ],
          "correct_answer": "A",
          "hint": "Mẹo thời gian: Trạng từ 'already' (đã... rồi) kẹp giữa động từ là đặc điểm nổi bật nhất của thì Hiện tại hoàn thành.",
          "explanation": "Chính xác. Cấu trúc 'has already gained' chỉ một thành tựu đã đạt được sớm hơn dự kiến tính đến hiện tại.",
          "translation": "Chỉ riêng trong tuần này, ứng dụng giáo dục đã thu hút được hơn 5.000 người dùng mới."
        },
        {
          "id": "q_verb_tense_099",
          "part": 5,
          "grammar_topic": "Verb Tenses (Past Continuous)",
          "difficulty_level": "Easy",
          "question_text": "While I _____ to clock in using the mobile app yesterday morning, the screen suddenly froze.",
          "options": [
            { "key": "A", "text": "try" },
            { "key": "B", "text": "am trying" },
            { "key": "C", "text": "was trying" },
            { "key": "D", "text": "have tried" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: 'While' + Quá khứ tiếp diễn (was trying) phác họa phông nền cho một sự việc đột ngột khác xen vào (froze).",
          "explanation": "Chính xác. 'Was trying' chỉ hành động đang nỗ lực chấm công dở dang trong quá khứ.",
          "translation": "Trong khi tôi đang cố gắng chấm công vào bằng ứng dụng di động sáng hôm qua, màn hình đột nhiên bị treo."
        },
        {
          "id": "q_verb_tense_100",
          "part": 5,
          "grammar_topic": "Verb Tenses (Future Perfect)",
          "difficulty_level": "Hard",
          "question_text": "By the time your intensive course ends, you _____ all the essential grammar strategies required for the TOEIC exam.",
          "options": [
            { "key": "A", "text": "mastered" },
            { "key": "B", "text": "master" },
            { "key": "C", "text": "will have mastered" },
            { "key": "D", "text": "are mastering" }
          ],
          "correct_answer": "C",
          "hint": "Mẹo thời gian: Cấu trúc 'By the time + hiện tại đơn (ends)' đóng đinh kết quả ở mệnh đề chính phải là Tương lai hoàn thành.",
          "explanation": "Chính xác. 'Will have mastered' khép lại câu hỏi bằng việc khẳng định kết quả sẽ hoàn tất trọn vẹn trong tương lai.",
          "translation": "Tính đến lúc khóa học cấp tốc của bạn kết thúc, bạn sẽ nắm vững tất cả các chiến lược ngữ pháp thiết yếu cần thiết cho kỳ thi TOEIC."
        }
      ],
      hard: []
    }
  }
};
