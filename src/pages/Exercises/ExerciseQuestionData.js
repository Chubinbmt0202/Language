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

export const EXERCISE_DATA = {
  // --- DAY 1: NOUNS & PRONOUNS ---
  "w1-d1": {
    title: "Nouns & Pronouns",
    taskOrder: ["grammar-recognition", "grammar-practice", "vocab-practice", "reading-grammar", "part6-grammar"],
    tasks: {
      "grammar-recognition": { description: "Nhan biet danh tu, dai tu", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "grammar-practice": { description: "Luyen tap noun/pronoun", total: 10, questions: { easy: NOUN_PRON_EASY, hard: NOUN_PRON_HARD } },
      "part5_nous": { description: "Doc hieu + grammar", total: 10, questions: { easy: PART5_PRO_NOUNS, hard: MIXED_HARD } },
      // "part6-grammar": { description: "Part 6 co ban", total: 10, questions: { easy: PART5_PRO_NOUNS, hard: MIXED_HARD } },
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
