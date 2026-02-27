import React, { useState } from 'react';
import { RocketOutlined, AimOutlined, ThunderboltOutlined, CheckCircleFilled, WarningOutlined, FormOutlined, ArrowRightOutlined, BookOutlined, EditOutlined } from '@ant-design/icons';

const AdverbTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Định vị Trạng từ (-ly)', icon: <RocketOutlined /> },
        { id: '2', label: '2. Các vị trí bay nhảy', icon: <AimOutlined /> },
        { id: '3', label: '3. Dễ nhầm lẫn', icon: <WarningOutlined /> },
        { id: '4', label: '4. Mẹo "Câu đủ - Nhét Trạng"', icon: <ThunderboltOutlined /> },
        { id: '5', label: '5. Bài tập vận dụng', icon: <FormOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full animate-fadeIn">
            {/* Header / Intro */}
            <div className="mb-8 p-6 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-3xl text-white shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <h1 className="text-3xl font-extrabold mb-2 relative z-10 flex items-center gap-3">
                    <RocketOutlined className="text-4xl" /> Trạng từ (Adverbs)
                </h1>
                <p className="text-violet-50 font-medium text-lg relative z-10 max-w-2xl">
                    Từ loại linh hoạt nhất Tiếng Anh! Trạng từ bổ nghĩa cho mọi thứ trên đời: Động từ, Tính từ, Trạng từ khác, thậm chí cả câu... CHỈ TRỪ Danh từ.
                </p>
            </div>

            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-violet-600 border-b-2 border-violet-600'
                            : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex-1 lg:w-2/3">

                    {/* Tab 1: Định nghĩa & Đuôi -Ly */}
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Trạng từ sinh ra từ đâu? Đuôi `-ly`</h2>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 mb-6 text-center text-lg font-medium text-slate-700">
                                Đa số trạng từ trong bài thi TOEIC được tạo thành bằng quy tắc vàng: <br />
                                <div className="inline-flex items-center gap-4 bg-violet-50 px-6 py-3 rounded-xl border border-violet-100 mt-4 font-black">
                                    <span className="text-rose-500">Tính từ (Adj)</span>
                                    <span className="text-gray-400">+</span>
                                    <span className="text-blue-500">-ly</span>
                                    <span className="text-gray-400">=</span>
                                    <span className="text-violet-600">Trạng từ (Adv)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                                    <div className="text-gray-500 font-bold mb-2">Tính từ</div>
                                    <div className="text-xl font-bold text-slate-800 mb-2">careful</div>
                                    <ArrowRightOutlined className="text-violet-300 opacity-50 block mx-auto mb-2" />
                                    <div className="text-gray-500 font-bold mb-2">Trạng từ</div>
                                    <div className="text-xl font-bold text-violet-600">carefully</div>
                                </div>
                                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                                    <div className="text-gray-500 font-bold mb-2">Tính từ</div>
                                    <div className="text-xl font-bold text-slate-800 mb-2">quick</div>
                                    <ArrowRightOutlined className="text-violet-300 opacity-50 block mx-auto mb-2" />
                                    <div className="text-gray-500 font-bold mb-2">Trạng từ</div>
                                    <div className="text-xl font-bold text-violet-600">quickly</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: Mẹo Câu đủ Điền Trạng */}
                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Mẹo "Câu đủ - Nhét Trạng từ"</h2>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden mb-6">
                                <ThunderboltOutlined className="absolute right-[-20%] bottom-[-20%] text-[200px] text-yellow-400 opacity-10 rotate-12" />
                                <h3 className="text-2xl font-bold text-yellow-400 mb-4 z-10 relative">💡 Nguyên lý cốt lõi</h3>
                                <p className="text-slate-300 text-lg font-medium leading-relaxed z-10 relative mb-6">
                                    Trạng từ (Adv) chỉ mang tính chất <b>BỔ NGHĨA THÊM</b> (làm rõ mức độ, thời gian, cách thức). <br />
                                    Nghĩa là: Nếu <b>BỎ Trạng từ đi</b>, thì câu cấu trúc câu đó <b>VẪN HOÀN CHỈNH VỀ MẶT NGỮ PHÁP</b>.
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 z-10 relative">
                                    <p className="font-bold text-yellow-300 mb-2">👉 Ứng dụng thi thực tế:</p>
                                    <p className="text-white font-medium italic">
                                        "Khi nhìn vào câu trắc nghiệm bắt chia loại từ (Adj/Adv/N/V). Nếu bạn che vùng bị đục lỗ (_____) lại, mà thấy câu ĐÃ ĐỦ THÀNH PHẦN (Chủ ngữ + Động từ + Tân ngữ) $\rightarrow$ Khả năng 99% chỗ trống đó cần một TRẠNG TỪ (Adv)."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                                <p className="text-slate-800 font-bold mb-2 text-lg">Ví dụ:</p>
                                <p className="bg-gray-50 p-4 border border-gray-200 rounded-xl font-medium text-slate-700 mb-4">
                                    The CEO reviewed the overall report ______.<br />
                                    <span className="text-sm font-normal text-gray-500 mt-2 block">(A. careful &nbsp;&nbsp; B. care &nbsp;&nbsp; C. carefully &nbsp;&nbsp; D. cares)</span>
                                </p>
                                <p className="text-slate-600 font-medium">
                                    <b>Phân tích:</b> Che chỗ _____ đi, ta còn: <i>"The CEO reviewed the overall report"</i>. Câu này đã đủ S (The CEO) + V (reviewed) + O (the report). <br />
                                    $\rightarrow$ Điền <b>C. carefully</b> bổ nghĩa cho động từ "reviewed" (xem xét một cách cẩn thận).
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Vị trí của Trạng từ */}
                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Các "Vị trí bay nhảy" của Trạng Từ</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Đúng với tính chất linh hoạt, Trạng từ có thể len lỏi vào gần như mọi ngóc ngách trong câu. Tuy nhiên, nó <b>không bao giờ</b> len vào giữa Động Từ và Tân Ngữ.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border-l-4 border-violet-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">1. Bổ nghĩa Động từ thường</h3>
                                    <p className="text-slate-600 font-medium mb-3">Đứng Trước hoặc Sau động từ.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 He <strong className="text-violet-600 underline">quickly</strong> answered the phone.
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-violet-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">2. Bổ nghĩa Tính từ</h3>
                                    <p className="text-slate-600 font-medium mb-3">Đứng ngay TRƯỚC tính từ.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 The test was <strong className="text-violet-600 underline">extremely</strong> difficult.
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-violet-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">3. Bổ nghĩa Trạng từ khác</h3>
                                    <p className="text-slate-600 font-medium mb-3">Đứng ngay TRƯỚC trạng từ cần được làm rõ mức độ.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 She speaks <strong className="text-violet-600 underline">incredibly</strong> fast.
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-violet-500 rounded-lg shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -bottom-4 text-violet-100 opacity-50"><CheckCircleFilled className="text-6xl" /></div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10">4. Đứng đầu mệnh đề / Đuôi câu</h3>
                                    <p className="text-slate-600 font-medium mb-3 relative z-10">Bổ nghĩa cho toàn bộ câu (thường có dấu phẩy đi kèm).</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200 relative z-10">
                                        👉 <strong className="text-violet-600 underline">Fortunately</strong>, it didn't rain.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Dễ nhầm lẫn */}
                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Cặp Bài Trùng dễ gây "Trầm cảm"</h2>

                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-8">
                                <h3 className="font-bold text-amber-800 text-lg mb-2">Thần chú:</h3>
                                <p className="text-amber-900 font-medium">Một số Tính từ ĐỒNG THỜI CŨNG LÀ Trạng từ (không thay đổi hình thức, không thêm -ly). Nếu bạn thấy chúng có đuôi -ly, NGHĨA SẼ THAY ĐỔI HOÀN TOÀN.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="w-1/3 bg-slate-50 p-4 border-r border-gray-100 flex flex-col justify-center">
                                        <div className="text-2xl font-black text-slate-800 mb-1">hard</div>
                                        <div className="text-sm font-bold text-gray-500">Chăm chỉ / Khó khăn</div>
                                    </div>
                                    <div className="w-2/3 p-4 flex flex-col justify-center relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 font-black text-4xl opacity-10">VS</div>
                                        <div className="text-2xl font-black text-rose-600 mb-1">hardly</div>
                                        <div className="text-sm font-bold text-slate-700">Hầu như không (Ngữ nghĩa mang tính phủ định)</div>
                                    </div>
                                </div>

                                <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="w-1/3 bg-slate-50 p-4 border-r border-gray-100 flex flex-col justify-center">
                                        <div className="text-2xl font-black text-slate-800 mb-1">late</div>
                                        <div className="text-sm font-bold text-gray-500">Trễ / Muộn (cả Adj & Adv)</div>
                                    </div>
                                    <div className="w-2/3 p-4 flex flex-col justify-center relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 font-black text-4xl opacity-10">VS</div>
                                        <div className="text-2xl font-black text-rose-600 mb-1">lately</div>
                                        <div className="text-sm font-bold text-slate-700">Gần đây (Đồng nghĩa với recently - Dùng cho thì Hiện Tại Hoàn Thành)</div>
                                    </div>
                                </div>

                                <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="w-1/3 bg-slate-50 p-4 border-r border-gray-100 flex flex-col justify-center">
                                        <div className="text-2xl font-black text-slate-800 mb-1">high</div>
                                        <div className="text-sm font-bold text-gray-500">Cao (Chiều cao sinh học / vật lý)</div>
                                    </div>
                                    <div className="w-2/3 p-4 flex flex-col justify-center relative">
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 font-black text-4xl opacity-10">VS</div>
                                        <div className="text-2xl font-black text-rose-600 mb-1">highly</div>
                                        <div className="text-sm font-bold text-slate-700">Rất / Cực kỳ (Nghĩa bóng) 👉 Ex: highly recommended</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '5' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Bài tập Trạng từ</h2>
                                    <p className="text-gray-500 text-sm font-medium">Luyện tuyệt chiêu "Câu đủ điền Trạng"</p>
                                </div>
                            </div>

                            {/* Render Mini Quiz */}
                            <div className="space-y-6">
                                {[
                                    {
                                        "id": "q_adv_001",
                                        "question_text": "The CEO reviewed the overall financial report ____ before presenting it to the board of directors.",
                                        "options": [
                                            { "key": "A", "text": "careful" },
                                            { "key": "B", "text": "care" },
                                            { "key": "C", "text": "carefully" },
                                            { "key": "D", "text": "cares" }
                                        ],
                                        "correct_answer": "C",
                                        "hint": "Cấu trúc câu đã có đủ Chủ ngữ (The CEO), Động từ (reviewed), và Tân ngữ (the report). Ta cần thêm từ loại gì để bổ nghĩa cho động từ 'reviewed'?",
                                        "explanation": "Câu đã đủ thành phần (S + V + O). Vị trí cuối câu chỉ có thể dùng Trạng từ (đuôi -ly) để bổ nghĩa cho động từ 'reviewed'.",
                                        "translation": "Giám đốc điều hành đã xem xét toàn bộ báo cáo tài chính một cách cẩn thận trước khi trình bày với hội đồng quản trị."
                                    },
                                    {
                                        "id": "q_adv_002",
                                        "question_text": "Sales figures for the new software have been ____ high since its launch last quarter.",
                                        "options": [
                                            { "key": "A", "text": "surprise" },
                                            { "key": "B", "text": "surprised" },
                                            { "key": "C", "text": "surprising" },
                                            { "key": "D", "text": "surprisingly" }
                                        ],
                                        "correct_answer": "D",
                                        "hint": "Phía sau chỗ trống là tính từ 'high'. Từ loại nào đứng trước Tính từ để bổ nghĩa mức độ cho nó?",
                                        "explanation": "Cần một Trạng từ đứng trước tính từ 'high' để bổ nghĩa cho tính từ này. 'Surprisingly high' = cao một cách đáng ngạc nhiên.",
                                        "translation": "Doanh số bán hàng của phần mềm mới đã cao một cách đáng ngạc nhiên kể từ khi ra mắt vào quý trước."
                                    },
                                    {
                                        "id": "q_adv_003",
                                        "question_text": "Ms. Jenkins could _____ hear the speaker at the conference because the microphone was not working properly.",
                                        "options": [
                                            { "key": "A", "text": "hard" },
                                            { "key": "B", "text": "hardly" },
                                            { "key": "C", "text": "hardship" },
                                            { "key": "D", "text": "harden" }
                                        ],
                                        "correct_answer": "B",
                                        "hint": "Dựa vào nghĩa của vế sau 'because the microphone was not working', ta cần một trạng từ mang nghĩa phủ định 'hầu như không'.",
                                        "explanation": "Cần điền trạng từ mang nghĩa phủ định. 'Hard' (chăm chỉ/khó khăn) và 'Hardly' (hầu như không). Dựa vào ngữ cảnh micro hỏng, đáp án 'Hardly' là chính xác.",
                                        "translation": "Cô Jenkins hầu như không thể nghe thấy diễn giả tại hội nghị vì micro không hoạt động bình thường."
                                    }
                                ].map((q, index) => {
                                    // Local state cho từng câu hỏi
                                    const [selected, setSelected] = React.useState(null);
                                    const [showResult, setShowResult] = React.useState(false);

                                    return (
                                        <div key={q.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 shrink-0">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-lg text-slate-800 font-medium mb-4">{q.question_text}</p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                                        {q.options.map(opt => {
                                                            let btnStyle = "bg-white border-gray-200 text-slate-700 hover:border-violet-300";

                                                            if (showResult) {
                                                                if (opt.key === q.correct_answer) btnStyle = "bg-green-50 border-green-500 text-green-700 font-bold";
                                                                else if (selected === opt.key && opt.key !== q.correct_answer) btnStyle = "bg-red-50 border-red-300 text-red-600";
                                                                else btnStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                                                            } else if (selected === opt.key) {
                                                                btnStyle = "bg-violet-50 border-violet-500 text-violet-700 font-bold shadow-sm";
                                                            }

                                                            return (
                                                                <button
                                                                    key={opt.key}
                                                                    onClick={() => !showResult && setSelected(opt.key)}
                                                                    disabled={showResult}
                                                                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${btnStyle}`}
                                                                >
                                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${showResult && opt.key === q.correct_answer ? 'bg-green-200 text-green-800' : 'bg-gray-100'}`}>
                                                                        {opt.key}
                                                                    </div>
                                                                    {opt.text}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>

                                                    {!showResult && selected && (
                                                        <div className="flex justify-end animate-fadeIn">
                                                            <button
                                                                onClick={() => setShowResult(true)}
                                                                className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-xl shadow-sm transition-colors"
                                                            >
                                                                Kiểm tra đáp án
                                                            </button>
                                                        </div>
                                                    )}

                                                    {showResult && (
                                                        <div className="mt-6 space-y-3 animate-fadeIn">
                                                            {selected === q.correct_answer ? (
                                                                <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3">
                                                                    <CheckCircleFilled className="text-green-500 text-xl mt-0.5" />
                                                                    <div>
                                                                        <p className="font-bold text-green-800 mb-1">Chính xác!</p>
                                                                        <p className="text-sm font-medium text-green-700 leading-relaxed mb-2">{q.explanation}</p>
                                                                        <p className="text-sm text-green-600 italic">"{q.translation}"</p>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3">
                                                                    <div className="text-red-500 text-xl mt-0.5 font-bold">❌</div>
                                                                    <div>
                                                                        <p className="font-bold text-red-800 mb-1">Sai rồi. Hãy xem gợi ý!</p>
                                                                        <p className="text-sm font-medium text-red-700 leading-relaxed mb-2"><b>Mẹo:</b> {q.hint}</p>
                                                                        <div className="bg-white/50 p-2 rounded border border-red-100">
                                                                            <p className="text-sm font-medium text-slate-700"><b>Explain:</b> {q.explanation}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                                <WarningOutlined className="text-orange-500" />
                                Chú ý cực ngắt!
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-red-100 border-l-[3px] border-l-red-500 rounded-r-xl rounded-l-sm bg-red-50/30 shadow-sm p-4 text-center">
                                <p className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-2 text-red-600">
                                    Luật cấm kỵ
                                </p>
                                <p className="text-slate-700 font-medium">
                                    KHÔNG BAO GIỜ đặt Trạng từ xen vào giữa Động Từ (V) và Tân Ngữ (O).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdverbTheory;
