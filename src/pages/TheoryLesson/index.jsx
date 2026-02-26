import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
    BulbOutlined,
    CheckCircleFilled,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ReadOutlined,
    NumberOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
import { getTheoryLesson } from "../English/Theory/TheoryTaskData";
import LearningTasks from "../English/Theory/LearningTasks";
import QuickNotes from "../English/Theory/QuickNotes";
import {
    suffixesThing,
    suffixesPerson,
    pronounData,
} from "../English/Theory/theoryLessonData.jsx";

const TheoryLesson = () => {
    const { taskId } = useParams();
    const lesson = useMemo(() => getTheoryLesson(taskId), [taskId]);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [activeTab, setActiveTab] = useState("nouns");

    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
    };

    const currentSelectionClass = (option) => {
        if (selectedAnswer === option) {
            if (option === "C") {
                return "border-green-500 bg-green-50 text-green-700 font-semibold";
            }
            return "border-red-500 bg-red-50 text-red-700 font-semibold";
        }
        return "border-gray-200 hover:bg-gray-50 text-gray-700";
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen font-sans text-gray-800">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column: Main Content */}
                <div className="flex-1 bg-white rounded-3xl p-6 lg:p-10 shadow-sm relative">
                    {/* Table of Contents / Stepper */}
                    {lesson.layout === "noun_pronoun" ? (
                        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4 mb-8 flex gap-3 overflow-x-auto border-b border-gray-100">
                            {(activeTab === "nouns" ? [
                                { id: "definition", num: "1", label: "Definition" },
                                { id: "classification", num: "2", label: "Classification" },
                                { id: "position", num: "3", label: "Position" },
                                { id: "suffixes", num: "4", label: "Suffixes" },
                            ] : [
                                { id: "pronoun-table", num: "1", label: "Table" },
                                { id: "s-vs-o", num: "2", label: "S vs O" },
                                { id: "possessive", num: "3", label: "Possessives" },
                            ]).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-colors whitespace-nowrap border border-slate-200"
                                >
                                    <span className={`w-5 h-5 rounded-full text-white flex items-center justify-center text-xs ${activeTab === 'nouns' ? 'bg-blue-600' : 'bg-teal-500'}`}>
                                        {item.num}
                                    </span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="mb-6">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                Lý thuyết chuẩn
                            </span>
                        </div>
                    )}

                    {/* Header */}
                    <div className="mb-10">
                        <div className="text-blue-600 font-bold text-xs tracking-wider uppercase mb-2">
                            {lesson.title.includes(":") ? lesson.title.split(":")[0] : "Lý thuyết"}
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            {lesson.title.includes(":") ? lesson.title.split(":")[1].trim() : lesson.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {lesson.layout === "noun_pronoun"
                                ? "Nắm vững lý thuyết về Danh từ (Nouns) và Đại từ (Pronouns) để làm nền tảng cho cấu trúc câu."
                                : "Nắm vững lý thuyết quan trọng để làm nền tảng cho các bài tập thực hành theo chuẩn TOEIC."}
                        </p>
                    </div>

                    {/* Switcher Tab for Nouns & Pronouns */}
                    {lesson.layout === "noun_pronoun" && (
                        <div className="flex bg-slate-100/80 p-1.5 rounded-2xl w-fit mb-10 shadow-inner border border-slate-200/60">
                            <button
                                onClick={() => setActiveTab('nouns')}
                                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'nouns' ? 'bg-white text-blue-600 shadow-sm scale-100' : 'text-slate-500 hover:text-slate-700 scale-95'}`}
                            >
                                Nouns (Danh từ)
                            </button>
                            <button
                                onClick={() => setActiveTab('pronouns')}
                                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'pronouns' ? 'bg-white text-teal-600 shadow-sm scale-100' : 'text-slate-500 hover:text-slate-700 scale-95'}`}
                            >
                                Pronouns (Đại từ)
                            </button>
                        </div>
                    )}

                    {/* Content Section based on layout */}
                    {lesson.layout === "noun_pronoun" ? (
                        <>
                            {activeTab === "nouns" && (
                                <div className="animate-fadeIn">
                                    {/* Section 1: Definition */}
                                    <section id="definition" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg">
                                                1
                                            </span>
                                            Definition (Định nghĩa)
                                        </h2>
                                        <p className="text-gray-700 mb-6 leading-relaxed">
                                            A <strong>Noun (Danh từ)</strong> is a word used to identify any of a
                                            class of people, places, or things common noun, or to name a particular
                                            one of these proper noun. In TOEIC, understanding nouns is crucial for
                                            solving Part 5 and Part 6 questions effectively.
                                        </p>

                                        {/* Core Concept Box */}
                                        <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-8">
                                            <div className="flex items-start gap-4">
                                                <div className="text-blue-500 text-xl font-bold mt-1">
                                                    <BulbOutlined />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-blue-700 font-bold mb-2">Core Concept</h3>
                                                    <p className="text-slate-600 text-sm mb-4">
                                                        Nouns function as the <span className="underline decoration-blue-300 decoration-2 underline-offset-4 font-medium text-slate-800">Subject (S)</span> or{" "}
                                                        <span className="underline decoration-blue-300 decoration-2 underline-offset-4 font-medium text-slate-800">Object (O)</span> in a sentence
                                                        structure.
                                                    </p>
                                                    <div className="bg-white rounded-xl py-3 px-6 text-center font-bold text-slate-700 border border-blue-50 shadow-sm w-fit min-w-[200px] tracking-widest">
                                                        S + V + O
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quick Check Box */}
                                        <div className="bg-green-50/50 border border-green-100 rounded-3xl p-6 relative">
                                            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                                                Basic
                                            </div>
                                            <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
                                                <ReadOutlined className="text-xl" />
                                                <span>Quick Check</span>
                                            </div>
                                            <p className="text-slate-600 mb-6 font-medium">
                                                Identify the noun functioning as the subject in the following
                                                sentence:
                                            </p>
                                            <div className="bg-white rounded-2xl p-5 text-center font-medium italic text-slate-700 shadow-sm border border-green-50 mb-6">
                                                "The <span className="font-bold underline decoration-green-400 decoration-2 underline-offset-4">manager</span> approved the proposal yesterday."
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {["A", "B", "C", "D"].map((opt) => {
                                                    const labels = {
                                                        A: "Approved",
                                                        B: "Proposal",
                                                        C: "Manager",
                                                        D: "Yesterday",
                                                    };
                                                    const isCorrect = opt === "C";
                                                    const isSelected = selectedAnswer === opt;

                                                    return (
                                                        <button
                                                            key={opt}
                                                            onClick={() => handleAnswerSelect(opt)}
                                                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${currentSelectionClass(
                                                                opt
                                                            )}`}
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                <span className="font-bold">{opt}.</span>
                                                                <span>{labels[opt]}</span>
                                                            </span>
                                                            {isSelected && isCorrect && (
                                                                <CheckCircleFilled className="text-green-500 text-xl" />
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </section>

                                    {/* Section 2: Classification */}
                                    <section id="classification" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg">
                                                2
                                            </span>
                                            Classification (Phân loại)
                                        </h2>
                                        <p className="text-gray-700 mb-8 leading-relaxed">
                                            Nouns are primarily classified into two main categories which affect
                                            which quantifiers (many, much, a few, a little) can be used with them.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Countable */}
                                            <div className="bg-orange-50/80 rounded-3xl p-6 border-transparent hover:shadow-md transition-shadow">
                                                <div className="flex items-center gap-2 text-orange-600 font-bold mb-4 text-lg">
                                                    <NumberOutlined />
                                                    <span>Countable Nouns</span>
                                                </div>
                                                <p className="text-slate-600 font-medium mb-4">
                                                    Things we can count using numbers.
                                                </p>
                                                <ul className="space-y-3 text-sm text-slate-600">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                                                        <span>Can be singular or plural.</span>
                                                    </li>
                                                    <li className="flex flex-wrap items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                                                        <span className="font-medium mr-1">Examples:</span>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 font-medium">apple</span>
                                                            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 font-medium">student</span>
                                                            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 font-medium">idea</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Uncountable */}
                                            <div className="bg-purple-50/80 rounded-3xl p-6 border-transparent hover:shadow-md transition-shadow">
                                                <div className="flex items-center gap-2 text-purple-600 font-bold mb-4 text-lg">
                                                    <ExclamationCircleOutlined />
                                                    <span>Uncountable Nouns</span>
                                                </div>
                                                <p className="text-slate-600 font-medium mb-4">
                                                    Things that cannot be counted individually.
                                                </p>
                                                <ul className="space-y-3 text-sm text-slate-600">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                                                        <span>Always singular verb form.</span>
                                                    </li>
                                                    <li className="flex flex-wrap items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                                                        <span className="font-medium mr-1">Examples:</span>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-medium whitespace-nowrap">water</span>
                                                            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-medium whitespace-nowrap">information</span>
                                                            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-medium whitespace-nowrap">advice</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Section 3: Position */}
                                    <section id="position" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg">
                                                3
                                            </span>
                                            Position (Vị trí)
                                        </h2>
                                        <p className="text-gray-700 mb-8 leading-relaxed">
                                            Recognizing where nouns appear helps you quickly identify the correct
                                            answer in incomplete sentence questions.
                                        </p>

                                        <ul className="space-y-8 pl-2">
                                            {/* Position 1 */}
                                            <li className="relative pl-6">
                                                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600"></div>
                                                <h3 className="font-bold text-slate-800 text-lg mb-2">
                                                    After Adjectives
                                                </h3>
                                                <p className="text-slate-600 mb-4 whitespace-nowrap">
                                                    Adjectives describe nouns and usually come immediately before them.
                                                </p>
                                                <div className="inline-block bg-blue-50 text-blue-600 font-bold border border-blue-100 rounded-lg px-4 py-2 text-sm tracking-wide">
                                                    Adj + <span className="font-extrabold text-blue-700">Noun</span>
                                                </div>
                                            </li>

                                            {/* Position 2 */}
                                            <li className="relative pl-6">
                                                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600"></div>
                                                <h3 className="font-bold text-slate-800 text-lg mb-2">
                                                    After Determiners
                                                </h3>
                                                <p className="text-slate-600 mb-4 whitespace-nowrap overflow-hidden text-clip">
                                                    Articles (a/an/the) and possessives (my/his/their) signal a noun is
                                                    coming.
                                                </p>
                                                <div className="inline-block bg-blue-50 text-blue-600 font-bold border border-blue-100 rounded-lg px-4 py-2 text-sm tracking-wide">
                                                    a/an/The + <span className="font-extrabold text-blue-700">Noun</span>
                                                </div>
                                            </li>

                                            {/* Position 3 */}
                                            <li className="relative pl-6">
                                                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600"></div>
                                                <h3 className="font-bold text-slate-800 text-lg mb-2">
                                                    After Prepositions
                                                </h3>
                                                <p className="text-slate-600 mb-4">
                                                    Prepositions connect nouns to other parts of the sentence.
                                                </p>
                                                <div className="inline-block bg-blue-50 text-blue-600 font-bold border border-blue-100 rounded-lg px-4 py-2 text-sm tracking-wide">
                                                    in/on/at/of + <span className="font-extrabold text-blue-700">Noun</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* Section 4: Suffixes */}
                                    <section id="suffixes" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg">
                                                4
                                            </span>
                                            Common Suffixes (Hậu tố từ)
                                        </h2>
                                        <p className="text-gray-700 mb-8 leading-relaxed">
                                            Dựa vào các hậu tố (đuôi từ) phổ biến này, bạn có thể dễ dàng nhận ra một từ là Danh từ trong các câu hỏi TOEIC bù lỗ (Part 5).
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                                <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-blue-400"></span> Chỉ Vật / Sự việc
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {suffixesThing.map((item, idx) => (
                                                        <div key={idx} className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm shadow-sm">
                                                            <span className="font-bold text-blue-600 mr-2">{item.suffix}</span>
                                                            <span className="text-slate-600">{item.word}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                                <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-pink-400"></span> Chỉ Người
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {suffixesPerson.map((item, idx) => (
                                                        <div key={idx} className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm shadow-sm">
                                                            <span className="font-bold text-pink-500 mr-2">{item.suffix}</span>
                                                            <span className="text-slate-600">{item.word}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}

                            {activeTab === "pronouns" && (
                                <div className="animate-fadeIn">
                                    {/* Section 1: Pronoun Table */}
                                    <section id="pronoun-table" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg">
                                                1
                                            </span>
                                            Pronoun Table (Bảng quy đổi Đại từ)
                                        </h2>
                                        <div className="bg-amber-50 text-amber-800 font-medium px-5 py-4 rounded-xl mb-6 flex gap-3 border border-amber-200">
                                            <BulbOutlined className="text-xl text-amber-600" />
                                            <div>Mẹo: Hãy học thuộc bảng này trước khi làm bài tập để tránh nhầm lẫn chức năng của các loại đại từ!</div>
                                        </div>

                                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                                            <table className="w-full text-left border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                                        <th className="p-4 border-b border-gray-200 bg-slate-100 sticky left-0 z-10 w-24 shadow-[1px_0_0_0_#e5e7eb]">Ngôi</th>
                                                        <th className="p-4 border-b border-gray-200">Chủ ngữ (S)</th>
                                                        <th className="p-4 border-b border-gray-200">Tân ngữ (O)</th>
                                                        <th className="p-4 border-b border-gray-200">Tính từ sở hữu</th>
                                                        <th className="p-4 border-b border-gray-200">Đại từ sở hữu</th>
                                                        <th className="p-4 border-b border-gray-200">Đại từ phản thân</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {pronounData.map((row) => (
                                                        <tr key={row.key} className="hover:bg-slate-50 transition-colors">
                                                            <td className="p-4 font-semibold text-slate-700 bg-white sticky left-0 shadow-[1px_0_0_0_#e5e7eb] z-10">{row.person}</td>
                                                            <td className="p-4 font-bold text-blue-600">{row.subject}</td>
                                                            <td className="p-4 font-bold text-cyan-600">{row.object}</td>
                                                            <td className="p-4 font-bold text-green-600">{row.poss_adj}</td>
                                                            <td className="p-4 font-bold text-orange-500">{row.poss_pro}</td>
                                                            <td className="p-4 font-bold text-purple-600">{row.reflexive}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* Section 2: Subject vs Object */}
                                    <section id="s-vs-o" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg">
                                                2
                                            </span>
                                            Subject vs Object
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-blue-50/70 rounded-3xl p-6 border border-blue-100 hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-blue-600 mb-2">Chủ ngữ (S)</h3>
                                                <p className="text-slate-600 font-medium mb-4">Đứng ĐẦU câu, chỉ người/vật gây ra hành động.</p>
                                                <div className="bg-white px-4 py-3 rounded-xl border border-blue-100 shadow-sm">
                                                    👉 <span className="font-extrabold text-blue-600">I</span> love you.
                                                </div>
                                            </div>
                                            <div className="bg-cyan-50/70 rounded-3xl p-6 border border-cyan-100 hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-cyan-600 mb-2">Tân ngữ (O)</h3>
                                                <p className="text-slate-600 font-medium mb-4">Đứng SAU động từ, chỉ người/vật nhận hành động.</p>
                                                <div className="bg-white px-4 py-3 rounded-xl border border-cyan-100 shadow-sm">
                                                    👉 You love <span className="font-extrabold text-cyan-600">me</span>.
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Section 3: Possessives */}
                                    <section id="possessive" className="mb-16">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-slate-800">
                                            <span className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg">
                                                3
                                            </span>
                                            Possessives (Sở hữu)
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-green-50/70 rounded-3xl p-6 border border-green-100 hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-green-600 mb-2">Tính từ sở hữu (My)</h3>
                                                <p className="text-slate-600 font-medium mb-4 flex items-center gap-2">LUÔN đi kèm với <span className="px-2 py-0.5 bg-slate-200 rounded font-bold">DANH TỪ</span></p>
                                                <div className="bg-white px-4 py-3 rounded-xl border border-green-100 shadow-sm">
                                                    👉 <span className="font-extrabold text-green-600">My</span> house is big.
                                                </div>
                                            </div>
                                            <div className="bg-orange-50/70 rounded-3xl p-6 border border-orange-100 hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-orange-500 mb-2">Đại từ sở hữu (Mine)</h3>
                                                <p className="text-slate-600 font-medium mb-4 flex items-center gap-2">Đứng <span className="px-2 py-0.5 bg-slate-200 text-sm rounded font-bold">MỘT MÌNH</span>, bao hàm danh từ.</p>
                                                <div className="bg-white px-4 py-3 rounded-xl border border-orange-100 shadow-sm">
                                                    👉 It is <span className="font-extrabold text-orange-500">mine</span>.
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </>
                    ) : (
                        /* GENERIC LAYOUT FOR OTHER CONTENT */
                        <div className="space-y-12">
                            {(lesson.sections || []).map((section, idx) => (
                                <section key={idx} className="relative">
                                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 text-slate-800">
                                        <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-lg shadow-sm">
                                            {idx + 1}
                                        </span>
                                        {section.heading}
                                    </h2>
                                    <div className="text-gray-700 leading-relaxed text-lg pl-11">
                                        {section.content}
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}

                    {/* Bottom Navigation */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-8 pb-4 mt-12">
                        <Link
                            to="#"
                            className="group flex flex-col items-start gap-1 transition-all hover:-translate-x-1"
                        >
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-5">
                                PREVIOUS LESSON
                            </span>
                            <div className="flex items-center gap-2 text-slate-700 font-bold group-hover:text-blue-600">
                                <ArrowLeftOutlined />
                                <span>Introduction</span>
                            </div>
                        </Link>
                        <Link
                            to="#"
                            className="group flex flex-col items-end gap-1 transition-all hover:translate-x-1"
                        >
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pr-5">
                                NEXT LESSON
                            </span>
                            <div className="flex items-center gap-2 text-slate-700 font-bold group-hover:text-blue-600">
                                <span>Common Suffixes</span>
                                <ArrowRightOutlined />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Sidebar (Learning Tasks & Notes) */}
                <div className="lg:w-80 shrink-0">
                    <div className="sticky top-6 flex flex-col gap-6">
                        <LearningTasks taskId={taskId} lesson={lesson} />
                        <QuickNotes taskId={taskId} seedNotes={lesson.seedNotes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheoryLesson;
