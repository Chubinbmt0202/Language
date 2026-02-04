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

const ADJ_ADV_EASY = [
  { id: 201, sentence: "She sings very ____.", options: ["good", "well", "bad", "nice"], answer: "well", explanation: "Sau dong tu can trang tu.", topic: "Adverbs" },
  { id: 202, sentence: "This is a ____ car.", options: ["quick", "quickly", "speed", "fastness"], answer: "quick", explanation: "Truoc danh tu can tinh tu.", topic: "Adjectives" },
  { id: 203, sentence: "He is a ____ worker.", options: ["care", "careful", "carefully", "caringly"], answer: "careful", explanation: "Tinh tu mo ta danh tu.", topic: "Adjectives" },
  { id: 204, sentence: "Please speak ____.", options: ["clear", "clearly", "clarity", "clearest"], answer: "clearly", explanation: "Trang tu bo nghia cho dong tu.", topic: "Adverbs" },
  { id: 205, sentence: "They arrived ____.", options: ["late", "lately", "lateness", "latest"], answer: "late", explanation: "Late co the dung lam trang tu.", topic: "Adverbs" },
  { id: 206, sentence: "She wears a ____ dress.", options: ["beauty", "beautiful", "beautifully", "beautify"], answer: "beautiful", explanation: "Tinh tu dung truoc danh tu.", topic: "Adjectives" },
  { id: 207, sentence: "The manager spoke ____.", options: ["quiet", "quietly", "quietness", "quieter"], answer: "quietly", explanation: "Trang tu bo nghia cho spoke.", topic: "Adverbs" },
  { id: 208, sentence: "This is a ____ solution.", options: ["simple", "simply", "simplicity", "simpler"], answer: "simple", explanation: "Tinh tu mo ta danh tu.", topic: "Adjectives" },
  { id: 209, sentence: "He finished the task ____.", options: ["quick", "quickly", "quickness", "quicker"], answer: "quickly", explanation: "Trang tu bo nghia cho dong tu.", topic: "Adverbs" },
  { id: 210, sentence: "It was a ____ decision.", options: ["wisely", "wise", "wisdom", "wiser"], answer: "wise", explanation: "Tinh tu mo ta danh tu.", topic: "Adjectives" },
];

const ADJ_ADV_HARD = [
  { id: 211, sentence: "She is the ____ member of the team.", options: ["more experienced", "most experienced", "experience", "experiencing"], answer: "most experienced", explanation: "So sanh nhat voi 'the most'.", topic: "Adjectives" },
  { id: 212, sentence: "The test was ____ than expected.", options: ["difficult", "more difficult", "most difficult", "difficulty"], answer: "more difficult", explanation: "So sanh hon voi 'than'.", topic: "Adjectives" },
  { id: 213, sentence: "He answered the questions ____.", options: ["accurate", "accurately", "accuracy", "accuratest"], answer: "accurately", explanation: "Trang tu bo nghia cho answered.", topic: "Adverbs" },
  { id: 214, sentence: "This is the ____ solution available.", options: ["good", "better", "best", "well"], answer: "best", explanation: "So sanh nhat cua good la best.", topic: "Adjectives" },
  { id: 215, sentence: "The report was written very ____.", options: ["professional", "profession", "professionally", "professed"], answer: "professionally", explanation: "Trang tu bo nghia cho written.", topic: "Adverbs" },
  { id: 216, sentence: "The weather is getting ____.", options: ["cold", "colder", "coldest", "coldly"], answer: "colder", explanation: "So sanh hon.", topic: "Adjectives" },
  { id: 217, sentence: "He spoke too ____ to be heard.", options: ["soft", "softly", "softness", "softer"], answer: "softly", explanation: "Trang tu bo nghia cho spoke.", topic: "Adverbs" },
  { id: 218, sentence: "This route is ____ than the other one.", options: ["short", "shorter", "shortest", "shortly"], answer: "shorter", explanation: "So sanh hon voi 'than'.", topic: "Adjectives" },
  { id: 219, sentence: "She completed the work ____.", options: ["efficient", "efficiency", "efficiently", "efficients"], answer: "efficiently", explanation: "Trang tu bo nghia cho dong tu.", topic: "Adverbs" },
  { id: 220, sentence: "That is the ____ idea so far.", options: ["worse", "worst", "bad", "badly"], answer: "worst", explanation: "So sanh nhat cua bad la worst.", topic: "Adjectives" },
];

const SV_EASY = [
  { id: 301, sentence: "Each student ____ a book.", options: ["have", "has", "are", "were"], answer: "has", explanation: "Each + N so it.", topic: "S-V" },
  { id: 302, sentence: "The list of items ____ on the table.", options: ["are", "is", "were", "have"], answer: "is", explanation: "Chu ngu chinh la 'list'.", topic: "S-V" },
  { id: 303, sentence: "A number of employees ____ absent.", options: ["is", "are", "was", "be"], answer: "are", explanation: "A number of + N so nhieu.", topic: "S-V" },
  { id: 304, sentence: "The news ____ surprising.", options: ["is", "are", "were", "be"], answer: "is", explanation: "News la danh tu so it.", topic: "S-V" },
  { id: 305, sentence: "Neither the manager nor the assistants ____ here.", options: ["is", "are", "was", "be"], answer: "are", explanation: "Dong tu theo chu ngu gan nhat.", topic: "S-V" },
  { id: 306, sentence: "Either the teachers or the student ____ late.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Dong tu theo danh tu gan nhat.", topic: "S-V" },
  { id: 307, sentence: "Ten dollars ____ enough.", options: ["is", "are", "were", "be"], answer: "is", explanation: "So tien coi nhu so it.", topic: "S-V" },
  { id: 308, sentence: "The team ____ winning.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Danh tu tap the dung so it.", topic: "S-V" },
  { id: 309, sentence: "Many students ____ in the hall.", options: ["is", "are", "was", "be"], answer: "are", explanation: "Chu ngu so nhieu.", topic: "S-V" },
  { id: 310, sentence: "The number of errors ____ small.", options: ["are", "is", "were", "be"], answer: "is", explanation: "The number of + N -> so it.", topic: "S-V" },
];

const SV_HARD = [
  { id: 311, sentence: "The manager, along with his assistants, ____ arriving.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Chu ngu chinh la 'manager'.", topic: "S-V" },
  { id: 312, sentence: "Neither the sales team nor the director ____ available.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Danh tu gan nhat la director (so it).", topic: "S-V" },
  { id: 313, sentence: "A pair of scissors ____ on the desk.", options: ["is", "are", "were", "be"], answer: "is", explanation: "A pair of + N -> so it.", topic: "S-V" },
  { id: 314, sentence: "The data ____ confidential.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Data thuong dung so it.", topic: "S-V" },
  { id: 315, sentence: "The committee ____ decided to postpone.", options: ["has", "have", "are", "were"], answer: "has", explanation: "Danh tu tap the -> so it.", topic: "S-V" },
  { id: 316, sentence: "All the equipment ____ new.", options: ["is", "are", "were", "be"], answer: "is", explanation: "Equipment khong dem duoc -> so it.", topic: "S-V" },
  { id: 317, sentence: "The staff ____ a new policy.", options: ["supports", "support", "supporting", "supported"], answer: "support", explanation: "Staff co the dung so nhieu.", topic: "S-V" },
  { id: 318, sentence: "More than one employee ____ absent.", options: ["is", "are", "were", "be"], answer: "is", explanation: "More than one + N -> so it.", topic: "S-V" },
  { id: 319, sentence: "The police ____ investigating the case.", options: ["is", "are", "was", "be"], answer: "are", explanation: "Police la danh tu so nhieu.", topic: "S-V" },
  { id: 320, sentence: "The majority of the members ____ present.", options: ["is", "are", "was", "be"], answer: "are", explanation: "Majority of + N so nhieu.", topic: "S-V" },
];

const PASSIVE_EASY = [
  { id: 401, sentence: "The report ____ yesterday.", options: ["finish", "finished", "was finished", "has finish"], answer: "was finished", explanation: "Bi dong: be + V3.", topic: "Passive" },
  { id: 402, sentence: "The meeting ____ at 9 a.m.", options: ["holds", "is held", "held", "holding"], answer: "is held", explanation: "Bi dong hien tai don.", topic: "Passive" },
  { id: 403, sentence: "The emails ____ by the assistant.", options: ["send", "sent", "were sent", "are sending"], answer: "were sent", explanation: "Bi dong qua khu don.", topic: "Passive" },
  { id: 404, sentence: "The documents ____ tomorrow.", options: ["will submit", "will be submitted", "submit", "submitted"], answer: "will be submitted", explanation: "Bi dong tuong lai.", topic: "Passive" },
  { id: 405, sentence: "This rule ____ strictly.", options: ["enforces", "is enforced", "enforce", "enforced"], answer: "is enforced", explanation: "Bi dong hien tai don.", topic: "Passive" },
  { id: 406, sentence: "The order ____ already.", options: ["has shipped", "has been shipped", "is ship", "was shipping"], answer: "has been shipped", explanation: "Bi dong hien tai hoan thanh.", topic: "Passive" },
  { id: 407, sentence: "The product ____ in China.", options: ["makes", "is made", "made", "making"], answer: "is made", explanation: "Bi dong hien tai don.", topic: "Passive" },
  { id: 408, sentence: "The files ____ before noon.", options: ["must submit", "must be submitted", "submitted", "submit"], answer: "must be submitted", explanation: "Bi dong voi modal.", topic: "Passive" },
  { id: 409, sentence: "The package ____ last night.", options: ["delivered", "was delivered", "deliver", "delivering"], answer: "was delivered", explanation: "Bi dong qua khu don.", topic: "Passive" },
  { id: 410, sentence: "The policy ____ every year.", options: ["reviews", "is reviewed", "review", "reviewing"], answer: "is reviewed", explanation: "Bi dong hien tai don.", topic: "Passive" },
];

const PASSIVE_HARD = [
  { id: 411, sentence: "The proposal should ____ by the board.", options: ["approve", "be approved", "approved", "approving"], answer: "be approved", explanation: "Modal + be + V3.", topic: "Passive" },
  { id: 412, sentence: "The results are expected ____ tomorrow.", options: ["announce", "to be announced", "announced", "announcing"], answer: "to be announced", explanation: "Passive infinitive.", topic: "Passive" },
  { id: 413, sentence: "The contract ____ being reviewed.", options: ["is", "are", "was", "be"], answer: "is", explanation: "Passive continuous: is being + V3.", topic: "Passive" },
  { id: 414, sentence: "A decision ____ before Friday.", options: ["will make", "will be made", "made", "making"], answer: "will be made", explanation: "Future passive.", topic: "Passive" },
  { id: 415, sentence: "The room ____ cleaned when we arrived.", options: ["has", "had been", "is", "was"], answer: "had been", explanation: "Past perfect passive.", topic: "Passive" },
  { id: 416, sentence: "The report is said ____ by an expert.", options: ["to prepare", "to be prepared", "prepared", "preparing"], answer: "to be prepared", explanation: "It is said + to be + V3.", topic: "Passive" },
  { id: 417, sentence: "The files need ____ immediately.", options: ["to send", "to be sent", "sending", "sent"], answer: "to be sent", explanation: "Need to be + V3.", topic: "Passive" },
  { id: 418, sentence: "The meeting ____ postponed due to weather.", options: ["was", "were", "is", "be"], answer: "was", explanation: "Bi dong qua khu don.", topic: "Passive" },
  { id: 419, sentence: "The new system ____ installed next week.", options: ["is", "are", "was", "be"], answer: "is", explanation: "Be + V3 with future time.", topic: "Passive" },
  { id: 420, sentence: "The proposal ____ being discussed now.", options: ["is", "are", "was", "be"], answer: "is", explanation: "Passive continuous.", topic: "Passive" },
];

const MIXED_EASY = DEFAULT_QUESTIONS;
const MIXED_HARD = DEFAULT_HARD_QUESTIONS;

export const EXERCISE_DATA = {
  // --- DAY 1: NOUNS & PRONOUNS ---
  "w1-d1": {
    title: "Nouns & Pronouns",
    taskOrder: ["grammar-recognition", "grammar-practice", "vocab-practice", "reading-grammar", "part6-grammar"],
    tasks: {
      "grammar-recognition": { description: "Nhan biet danh tu, dai tu", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "grammar-practice": { description: "Luyen tap noun/pronoun", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "vocab-practice": {
        description: "Luyen tap 20 tu vung",
        total: 20,
        type: "flashcard",
        items: [
          { id: 1, word: "Employee", meaning: "Nhan vien", type: "Noun" },
          { id: 2, word: "Contract", meaning: "Hop dong", type: "Noun" },
          { id: 3, word: "Invoice", meaning: "Hoa don", type: "Noun" },
          { id: 4, word: "Department", meaning: "Phong ban", type: "Noun" },
          { id: 5, word: "Customer", meaning: "Khach hang", type: "Noun" },
          { id: 6, word: "Meeting", meaning: "Cuoc hop", type: "Noun" },
          { id: 7, word: "Schedule", meaning: "Lich trinh", type: "Noun" },
          { id: 8, word: "Budget", meaning: "Ngan sach", type: "Noun" },
          { id: 9, word: "Report", meaning: "Bao cao", type: "Noun" },
          { id: 10, word: "Deadline", meaning: "Han chot", type: "Noun" },
          { id: 11, word: "Policy", meaning: "Chinh sach", type: "Noun" },
          { id: 12, word: "Supplier", meaning: "Nha cung cap", type: "Noun" },
          { id: 13, word: "Shipment", meaning: "Lo hang", type: "Noun" },
          { id: 14, word: "Receipt", meaning: "Bien lai", type: "Noun" },
          { id: 15, word: "Inventory", meaning: "Ton kho", type: "Noun" },
          { id: 16, word: "Proposal", meaning: "De xuat", type: "Noun" },
          { id: 17, word: "Agreement", meaning: "Thoa thuan", type: "Noun" },
          { id: 18, word: "Promotion", meaning: "Khuyen mai", type: "Noun" },
          { id: 19, word: "Revenue", meaning: "Doanh thu", type: "Noun" },
          { id: 20, word: "Expense", meaning: "Chi phi", type: "Noun" },
        ],
      },
      "reading-grammar": { description: "Doc hieu + grammar", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "part6-grammar": { description: "Part 6 co ban", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
    },
  },

  // --- DAY 2: ADJECTIVES & ADVERBS ---
  "w1-d2": {
    title: "Adjectives & Adverbs",
    taskOrder: ["grammar-structure", "practice", "note-taking", "word-family", "skimming"],
    tasks: {
      "grammar-structure": { description: "Tinh tu va trang tu", total: 10, questions: { easy: ADJ_ADV_EASY, hard: ADJ_ADV_HARD } },
      "practice": { description: "Luyen tap tinh tu/trang tu", total: 10, questions: { easy: ADJ_ADV_EASY, hard: ADJ_ADV_HARD } },
      "note-taking": { description: "Ghi chep ngoai le", total: 10, questions: { easy: ADJ_ADV_EASY, hard: ADJ_ADV_HARD } },
      "word-family": { description: "Word family", total: 10, questions: { easy: ADJ_ADV_EASY, hard: ADJ_ADV_HARD } },
      "skimming": { description: "Skimming", total: 10, questions: { easy: ADJ_ADV_EASY, hard: ADJ_ADV_HARD } },
    },
  },

  // --- DAY 3: S-V AGREEMENT ---
  "w1-d3": {
    title: "Subject-Verb Agreement",
    taskOrder: ["sv-rules", "sv-practice", "syntax", "part6"],
    tasks: {
      "sv-rules": { description: "On quy tac hoa hop", total: 10, questions: { easy: SV_EASY, hard: SV_HARD } },
      "sv-practice": { description: "Luyen tap S-V", total: 10, questions: { easy: SV_EASY, hard: SV_HARD } },
      "syntax": { description: "Phan tich S-V-O", total: 10, questions: { easy: SV_EASY, hard: SV_HARD } },
      "part6": { description: "Part 6 ve S-V", total: 10, questions: { easy: SV_EASY, hard: SV_HARD } },
    },
  },

  // --- DAY 4: PASSIVE VOICE ---
  "w1-d4": {
    title: "Passive Voice",
    taskOrder: ["passive-rules", "tips", "practice", "reading", "synonyms"],
    tasks: {
      "passive-rules": { description: "On cong thuc bi dong", total: 10, questions: { easy: PASSIVE_EASY, hard: PASSIVE_HARD } },
      "tips": { description: "Meo nhan biet bi dong", total: 10, questions: { easy: PASSIVE_EASY, hard: PASSIVE_HARD } },
      "practice": { description: "Luyen tap bi dong", total: 10, questions: { easy: PASSIVE_EASY, hard: PASSIVE_HARD } },
      "reading": { description: "Doc thong bao", total: 10, questions: { easy: PASSIVE_EASY, hard: PASSIVE_HARD } },
      "synonyms": { description: "Tu dong nghia", total: 10, questions: { easy: PASSIVE_EASY, hard: PASSIVE_HARD } },
    },
  },

  // --- DAY 5: REVIEW & MINI TEST ---
  "w1-d5": {
    title: "Review Week 1",
    taskOrder: ["mini-test", "correction", "reading", "vocab-review"],
    tasks: {
      "mini-test": { description: "Mini test part 5", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "correction": { description: "Chua loi", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "reading": { description: "Part 7 short reading", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "vocab-review": { description: "Review tu vung", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
    },
  },

  // --- DAY 6: DEEP REVIEW ---
  "w1-d6": {
    title: "Deep Review",
    taskOrder: ["flashcards", "retry", "mindmap", "read-aloud"],
    tasks: {
      "flashcards": { description: "Flashcards", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "retry": { description: "Lam lai cau sai", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "mindmap": { description: "Tong hop ngu phap", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "read-aloud": { description: "Read aloud", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
    },
  },

  // --- DAY 7: FULL READING MINI-TEST ---
  "w1-d7": {
    title: "Reading Mini-Test",
    taskOrder: ["full-test", "time", "check", "translate"],
    tasks: {
      "full-test": { description: "De doc rut gon", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "time": { description: "Bam gio", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "check": { description: "Check dap an", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
      "translate": { description: "Dich bai doc", total: 10, questions: { easy: MIXED_EASY, hard: MIXED_HARD } },
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
