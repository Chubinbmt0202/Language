import React, { useState } from 'react';
import { WarningOutlined, LinkOutlined, TeamOutlined, CompassOutlined, SplitCellsOutlined, FormOutlined, ArrowRightOutlined, BookOutlined, EditOutlined, CheckCircleFilled } from '@ant-design/icons';

const SubjectVerbAgreementTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Sợi dây liên kết (S-V)', icon: <LinkOutlined /> },
        { id: '2', label: '2. Nhóm Đại từ Bất định', icon: <TeamOutlined /> },
        { id: '3', label: '3. Bẫy "Cụm Giới Từ"', icon: <WarningOutlined /> },
        { id: '4', label: '4. Cấu trúc Cặp (Either/Or..)', icon: <SplitCellsOutlined /> },
        { id: '5', label: '5. Bài tập vận dụng S-V', icon: <FormOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full animate-fadeIn">
            {/* Header / Intro */}
            <div className="mb-8 p-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl text-white shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <h1 className="text-3xl font-extrabold mb-2 relative z-10 flex items-center gap-3">
                    <CompassOutlined className="text-4xl animate-spin-slow" /> Sự hòa hợp S-V (S-V Agreement)
                </h1>
                <p className="text-orange-50 font-medium text-lg relative z-10 max-w-2xl">
                    Chủ ngữ đi đâu, Động từ theo đấy! Đây là "mỏ vàng" điểm số Part 5 nhưng cũng chứa đầy những cái bẫy tinh vi nhất của TOEIC.
                </p>
            </div>

            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-orange-600 border-b-2 border-orange-600'
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

                    {/* Tab 1: Nguyên tắc cơ bản */}
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Nguyên tắc Bất Di Bất Dịch</h2>

                            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                {/* Số ít */}
                                <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-50 rounded-full"></div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">👤 Chủ ngữ SỐ ÍT</h3>
                                    <p className="text-slate-600 font-medium mb-4 relative z-10">Bao gồm Danh từ số ít (He, She, It, A book) hoặc Da0nh từ KHÔNG đếm được (Water, Information).</p>
                                    <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex items-center justify-center font-bold text-blue-700 text-lg relative z-10">
                                        👉 Động từ SỐ ÍT (+s/es)
                                    </div>
                                    <p className="text-center font-medium mt-3 text-slate-700">Ex: The manager <b>works</b> late.</p>
                                </div>

                                {/* Số nhiều */}
                                <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-rose-50 rounded-full"></div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">👥 Chủ ngữ SỐ NHIỀU</h3>
                                    <p className="text-slate-600 font-medium mb-4 relative z-10">Bao gồm Danh từ số nhiều (They, We, Books, People).</p>
                                    <div className="bg-rose-50 border border-rose-100 p-3 rounded-xl flex items-center justify-center font-bold text-rose-700 text-lg relative z-10 mt-auto">
                                        👉 Động từ SỐ NHIỀU (V-giữ nguyên)
                                    </div>
                                    <p className="text-center font-medium mt-3 text-slate-700">Ex: The employees <b>work</b> late.</p>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><WarningOutlined /> Bẫy A number vs The number</h4>
                                <ul className="space-y-2 text-amber-950 font-medium ml-6 list-disc">
                                    <li><b>A number of</b> + N số nhiều $\rightarrow$ <b>V số nhiều</b> <span className="text-emerald-600 italic">(Nhiều người/vật...)</span></li>
                                    <li><b>The number of</b> + N số nhiều $\rightarrow$ <b>V số ít</b> <span className="text-rose-600 italic">(Do nhấn mạnh vào cụm "Con số / Số lượng của...")</span></li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Đại từ Bất định */}
                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Đại Từ Bất Định (Indefinite Pronouns)</h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                                "Mọi người", "Mọi thứ"... nghe có vẻ rất "Nhiều", nhưng trong Tiếng Anh, chúng được đối xử như một <b>thể thống nhất (Số Ít)</b>.
                            </p>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 mb-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                                    <TeamOutlined className="text-indigo-500" /> Nhóm đại từ này LUÔN + V (Số ít):
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl font-bold">Everyone</div>
                                    <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl font-bold">Someone</div>
                                    <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl font-bold">Anyone</div>
                                    <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl font-bold">No one</div>

                                    <div className="bg-fuchsia-50 text-fuchsia-700 p-3 rounded-xl font-bold">Everybody</div>
                                    <div className="bg-fuchsia-50 text-fuchsia-700 p-3 rounded-xl font-bold">Somebody</div>
                                    <div className="bg-fuchsia-50 text-fuchsia-700 p-3 rounded-xl font-bold">Anybody</div>
                                    <div className="bg-fuchsia-50 text-fuchsia-700 p-3 rounded-xl font-bold">Nobody</div>

                                    <div className="bg-teal-50 text-teal-700 p-3 rounded-xl font-bold">Everything</div>
                                    <div className="bg-teal-50 text-teal-700 p-3 rounded-xl font-bold">Something</div>
                                    <div className="bg-teal-50 text-teal-700 p-3 rounded-xl font-bold">Anything</div>
                                    <div className="bg-teal-50 text-teal-700 p-3 rounded-xl font-bold">Nothing</div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                <CheckCircleFilled className="absolute right-[-10%] top-[-10%] text-[150px] text-emerald-500 opacity-20" />
                                <h4 className="text-xl font-bold text-emerald-400 mb-3 relative z-10">Ví dụ minh họa</h4>
                                <p className="text-lg font-medium relative z-10">
                                    <span className="text-slate-400">Everyone in the meeting</span> <span className="bg-emerald-500 text-white px-2 py-1 rounded font-bold mx-1">has</span> <span className="text-slate-400">agreed to the proposal.</span>
                                </p>
                                <p className="text-slate-400 text-sm mt-3 italic relative z-10">"Everyone" đếm cả phòng 50 người nhưng Động từ vẫn phải chia "has" (số ít).</p>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Bẫy Cụm giới từ */}
                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Bẫy "Kẻ thứ 3" vĩ đại nhất TOEIC</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Đề thi sẽ cố tình chen một <b className="text-orange-600">Cụm giới từ</b> vào giữa (tách Chủ ngữ và Động từ ra xa nhau) để làm bạn hoa mắt và chia nhầm Động từ theo Danh từ đứng sát nó.
                            </p>

                            <div className="bg-orange-50/50 border border-orange-200 rounded-3xl p-8 mb-8 relative">
                                <div className="flex items-center justify-between text-2xl font-black text-center mb-8 relative z-10">
                                    <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-orange-100 z-10 h-32 flex flex-col justify-center">
                                        <div className="text-blue-600">S Chính (N1)</div>
                                        <div className="text-sm font-medium text-slate-500 mt-2">Ông Tơ</div>
                                    </div>
                                    <div className="flex-1 bg-orange-100 p-4 rounded-2xl border border-orange-300 text-orange-600 mx-4 z-10 h-32 flex flex-col justify-center translate-y-4">
                                        <div><span className="text-sm">Giới từ</span><br />+ N2</div>
                                        <div className="text-sm font-bold text-orange-500 mt-2">Kẻ chen ngang</div>
                                    </div>
                                    <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-orange-100 z-10 h-32 flex flex-col justify-center">
                                        <div className="text-rose-600">Động Từ (V)</div>
                                        <div className="text-sm font-medium text-slate-500 mt-2">Bà Nguyệt</div>
                                    </div>
                                </div>
                                {/* Đường tơ hồng */}
                                <svg className="absolute top-1/2 left-0 w-full h-12 -translate-y-6 z-0" preserveAspectRatio="none">
                                    <path d="M 100 24 Q 400 60, 700 24" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8 8" className="animate-pulse" />
                                </svg>

                                <div className="bg-white p-5 rounded-xl border border-gray-200 text-center relative z-10">
                                    <p className="font-bold text-slate-800 text-lg mb-2">Thần chú diệt bẫy:</p>
                                    <p className="text-rose-600 text-xl font-black">"THẤY GIỚI TỪ Ở ĐÂU, CHỦ NGỮ CHÍNH NẰM TRƯỚC NÓ"</p>
                                    <p className="text-slate-500 font-medium mt-2">- Luôn luôn chia V theo S Chính (N1). Bơ ngay thằng N2 đi!</p>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-gray-100 shadow-sm rounded-2xl p-6 text-white">
                                <p className="text-slate-300 font-bold mb-4">Áp dụng xử lý câu này:</p>
                                <p className="text-xl mb-4 text-center">
                                    <span className="underline decoration-blue-500 decoration-4 text-white font-bold">The list</span> <span className="text-orange-400 font-medium">of participants</span> ________ confirmed.
                                </p>
                                <p className="text-slate-400 font-medium text-center bg-white/10 p-3 rounded-lg">
                                    Có Giới từ <b>"of"</b>. S chính là <b>"The list"</b> (Danh từ số ít) $\rightarrow$ Động từ chia Số Ít là <b>"is"</b> (Bỏ qua N2 số nhiều participants).
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: Either / Or */}
                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Cấu trúc chia theo Chủ ngữ GẦN Động từ nhất</h2>

                            <div className="bg-white border-l-4 border-rose-500 rounded-lg shadow-sm p-6 mb-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Nhóm cấu trúc ghép đôi (Correlative Conjunctions)</h3>
                                <p className="text-slate-600 font-medium mb-4">Khi 2 Chủ ngữ được nối với nhau qua các cấu trúc đôi này, Động từ sẽ "ngoại tình" - Nó chỉ chia theo <b>Chủ ngữ nào đứng GẦN nó nhất (N2)</b>.</p>

                                <ul className="space-y-4 font-bold text-slate-700 bg-rose-50 p-4 rounded-xl border border-rose-100">
                                    <li className="flex items-center gap-2"><CheckCircleFilled className="text-rose-500" /> Either <span className="text-slate-400 italic">N1</span> <u>OR</u> <span className="text-rose-600 text-lg">N2</span> + <b className="text-rose-600">V(chia theo N2)</b></li>
                                    <li className="flex items-center gap-2"><CheckCircleFilled className="text-rose-500" /> Neither <span className="text-slate-400 italic">N1</span> <u>NOR</u> <span className="text-rose-600 text-lg">N2</span> + <b className="text-rose-600">V(chia theo N2)</b></li>
                                    <li className="flex items-center gap-2"><CheckCircleFilled className="text-rose-500" /> Not only <span className="text-slate-400 italic">N1</span> <u>but also</u> <span className="text-rose-600 text-lg">N2</span> + <b className="text-rose-600">V(chia theo N2)</b></li>
                                    <li className="flex items-center gap-2"><CheckCircleFilled className="text-rose-500" /> <span className="text-slate-400 italic">N1</span> <u>OR</u> <span className="text-rose-600 text-lg">N2</span> + <b className="text-rose-600">V(chia theo N2)</b></li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-6 text-center">
                                <p className="text-slate-600 font-bold mb-4 uppercase tracking-widest text-sm">Case Study</p>
                                <p className="text-xl text-slate-800 font-medium mb-2">
                                    Either the manager or <span className="text-rose-600 font-bold border-b-2 border-rose-600 pb-1">the employees</span> <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg font-bold ml-2 shadow-sm">are</span> coming.
                                </p>
                                <p className="text-sm text-slate-500 font-medium mt-4">V chia "are" vì Chủ ngữ áp sát nó là "the employees" (sỗ nhiều).</p>
                            </div>
                        </div>
                    )}

                    {activeTab === '5' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Bài tập Sự Hòa Hợp</h2>
                                    <p className="text-gray-500 text-sm font-medium">Xác định Chủ ngữ và đánh giá mức độ Số ít/Nhiều</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm text-center">
                                <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <SplitCellsOutlined className="text-orange-600 text-4xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Vững Cốt Lõi, Chắc Điểm Số</h3>
                                <p className="text-gray-600 mb-8 font-medium max-w-sm mx-auto">
                                    10 câu hỏi để test xem bạn đã né được rào cản của "Cụm Giới từ" hay chưa. Start nhé?
                                </p>
                                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-sm">
                                    Bắt đầu Thực hành
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                                <EditOutlined className="text-gray-500" />
                                Tóm tắt
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-amber-100 border-l-[3px] border-l-orange-500 rounded-r-xl rounded-l-sm bg-orange-50/50 shadow-sm p-4 text-center">
                                <p className="text-slate-800 text-sm font-bold tracking-wider mb-2 text-orange-700">
                                    Sính ngoại - Khắc cốt ghi tâm
                                </p>
                                <p className="text-slate-700 font-medium mb-2">
                                    A number of <b className="text-emerald-600">= Nhiều</b> (+ V nhiều)
                                </p>
                                <hr className="border-orange-200 my-2" />
                                <p className="text-slate-700 font-medium mt-2">
                                    The number of <b className="text-rose-600">= Con số / SL</b> (+ V ít)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectVerbAgreementTheory;
