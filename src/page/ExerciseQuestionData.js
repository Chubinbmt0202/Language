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

export const EXERCISE_QUESTION_SETS = {
  // Week 1 - Tenses (co ban)
  "w1-d1-t1": {
    easy: [
      {
        id: 1,
        sentence: "She ____ to school every day. Test 1",
        options: ["go", "goes", "is going", "gone"],
        answer: "goes",
        explanation: "Hien tai don: chu ngu so it dung -s/-es.",
      },
      {
        id: 2,
        sentence: "They ____ TV right now. Test 1",
        options: ["watch", "are watching", "watched", "have watched"],
        answer: "are watching",
        explanation: "Hien tai tiep dien: right now.",
      },
      {
        id: 3,
        sentence: "I ____ this movie before. Test 1",
        options: ["see", "saw", "have seen", "am seeing"],
        answer: "have seen",
        explanation: "Hien tai hoan thanh: kinh nghiem.",
      },
      {
        id: 4,
        sentence: "He ____ coffee every morning. Test 1",
        options: ["drink", "drinks", "is drinking", "drank"],
        answer: "drinks",
        explanation: "Hien tai don: thoi quen.",
      },
      {
        id: 5,
        sentence: "Look! The bus ____.",
        options: ["come", "comes", "is coming", "came"],
        answer: "is coming",
        explanation: "Look! -> hien tai tiep dien. Test 1",
      },
    ],
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d1-t2": {
    easy: [
      {
        id: 1,
        sentence: "She ____ to school every day. Test 2",
        options: ["go", "goes", "is going", "gone"],
        answer: "goes",
        explanation: "Hien tai don: chu ngu so it dung -s/-es.",
      },
      {
        id: 2,
        sentence: "They ____ TV right now. Test 2",
        options: ["watch", "are watching", "watched", "have watched"],
        answer: "are watching",
        explanation: "Hien tai tiep dien: right now.",
      },
      {
        id: 3,
        sentence: "I ____ this movie before. Test 2",
        options: ["see", "saw", "have seen", "am seeing"],
        answer: "have seen",
        explanation: "Hien tai hoan thanh: kinh nghiem.",
      },
      {
        id: 4,
        sentence: "He ____ coffee every morning. Test 1",
        options: ["drink", "drinks", "is drinking", "drank"],
        answer: "drinks",
        explanation: "Hien tai don: thoi quen.",
      },
      {
        id: 5,
        sentence: "Look! The bus ____.",
        options: ["come", "comes", "is coming", "came"],
        answer: "is coming",
        explanation: "Look! -> hien tai tiep dien. Test 1",
      },
    ],
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d1-t4": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d1-t5": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },

  // Week 1 - Word Forms
  "w1-d2-t1": {
    easy: [
      {
        id: 1,
        sentence: "Her ____ helped the team finish early.",
        options: ["decide", "decision", "decisive", "decided"],
        answer: "decision",
        explanation: "Can danh tu sau so huu (Her).",
      },
      {
        id: 2,
        sentence: "He spoke very ____ during the meeting.",
        options: ["clear", "clearly", "clarity", "clarified"],
        answer: "clearly",
        explanation: "Can trang tu bo nghia cho dong tu spoke.",
      },
      {
        id: 3,
        sentence: "The ____ of the plan was impressive.",
        options: ["organize", "organization", "organized", "organizing"],
        answer: "organization",
        explanation: "Can danh tu sau 'The'.",
      },
      {
        id: 4,
        sentence: "We need a ____ solution.",
        options: ["create", "creation", "creative", "creativity"],
        answer: "creative",
        explanation: "Can tinh tu bo nghia cho danh tu solution.",
      },
      {
        id: 5,
        sentence: "The manager will ____ the report.",
        options: ["final", "finally", "finalize", "finalized"],
        answer: "finalize",
        explanation: "Can dong tu sau will.",
      },
    ],
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d2-t2": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d2-t3": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d2-t4": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d2-t5": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },

  // Week 1 - S-V Agreement
  "w1-d3-t1": {
    easy: [
      {
        id: 1,
        sentence: "Each student ____ a book.",
        options: ["have", "has", "are", "were"],
        answer: "has",
        explanation: "Each + N so it -> dong tu so it.",
      },
      {
        id: 2,
        sentence: "The list of items ____ on the table.",
        options: ["are", "is", "were", "have"],
        answer: "is",
        explanation: "Chu ngu chinh la 'The list'.",
      },
      {
        id: 3,
        sentence: "Either the teachers or the student ____ late.",
        options: ["is", "are", "were", "be"],
        answer: "is",
        explanation: "Either/or: dong tu theo danh tu gan nhat.",
      },
      {
        id: 4,
        sentence: "A number of employees ____ absent.",
        options: ["is", "are", "was", "be"],
        answer: "are",
        explanation: "A number of + N so nhieu -> dong tu so nhieu.",
      },
      {
        id: 5,
        sentence: "The news ____ surprising.",
        options: ["is", "are", "were", "be"],
        answer: "is",
        explanation: "News la danh tu so it.",
      },
    ],
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d3-t2": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d3-t3": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d3-t4": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },

  // Week 1 - Passive Voice
  "w1-d4-t1": {
    easy: [
      {
        id: 1,
        sentence: "The report ____ yesterday.",
        options: ["finish", "finished", "was finished", "has finish"],
        answer: "was finished",
        explanation: "Bi dong: be + V3.",
      },
      {
        id: 2,
        sentence: "The meeting ____ at 9 a.m.",
        options: ["holds", "is held", "held", "holding"],
        answer: "is held",
        explanation: "Bi dong hien tai don.",
      },
      {
        id: 3,
        sentence: "The emails ____ by the assistant.",
        options: ["send", "sent", "were sent", "are sending"],
        answer: "were sent",
        explanation: "Bi dong qua khu don.",
      },
      {
        id: 4,
        sentence: "The documents ____ tomorrow.",
        options: ["will submit", "will be submitted", "submit", "submitted"],
        answer: "will be submitted",
        explanation: "Bi dong tuong lai.",
      },
      {
        id: 5,
        sentence: "This rule ____ strictly.",
        options: ["enforces", "is enforced", "enforce", "enforced"],
        answer: "is enforced",
        explanation: "Bi dong hien tai don.",
      },
    ],
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d4-t2": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d4-t3": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d4-t4": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },
  "w1-d4-t5": {
    easy: DEFAULT_QUESTIONS,
    hard: DEFAULT_HARD_QUESTIONS,
  },

  // Week 1 - Review & Mini-test
  "w1-d5-t1": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d5-t2": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d5-t3": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d5-t4": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },

  // Week 1 - Review deep
  "w1-d6-t1": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d6-t2": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d6-t3": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d6-t4": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },

  // Week 1 - Full reading mini-test (placeholder quiz set)
  "w1-d7-t1": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d7-t2": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d7-t3": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
  "w1-d7-t4": { easy: DEFAULT_QUESTIONS, hard: DEFAULT_HARD_QUESTIONS },
};
