import React, { useState } from 'react';
import { UserOutlined, SwapOutlined, TeamOutlined, EditOutlined, BookOutlined, ArrowRightOutlined, CheckCircleFilled, FireOutlined, LinkOutlined, StarOutlined } from '@ant-design/icons';

const VerbTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. S-V-O & Tầm quan trọng', icon: <StarOutlined /> },
        { id: '2', label: '2. Phân loại Động từ', icon: <LinkOutlined /> },
        { id: '3', label: '3. Mẹo làm bài', icon: <FireOutlined /> },
        { id: '4', label: '4. Bài tập vận dụng', icon: <BookOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full animate-fadeIn">
            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-indigo-600 border-b-2 border-indigo-600'
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
                    {/* Tab 1 */}
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Đánh chặn Part 5: Tại sao Động từ quan trọng?</h1>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                                Câu hỏi về Động từ (Verb) chiếm ít nhất <b>30% đến 40%</b> số lượng câu hỏi ngữ pháp (Part 5 & 6). Nếu bạn mất gốc, hãy bắt đầu từ chính Động từ.
                            </p>

                            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow-sm mb-6">
                                <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                                    <CheckCircleFilled /> Công thức Siêu Khung Xương S-V-O
                                </h3>
                                <p className="text-indigo-900 font-medium mb-4">
                                    Cốt lõi của 1 câu Tiếng Anh luôn là cụm <b>[Chủ ngữ + Động từ chính]</b>. Nếu thiếu 1 trong 2, đó <b>không phải</b> là một câu hoàn chỉnh. Việc xác định đúng Động từ chính là kỹ năng sống còn.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-indigo-200 flex items-center justify-between text-center mt-4 shadow-sm">
                                    <div className="flex-1 border-r border-gray-100">
                                        <div className="font-black text-2xl text-blue-600">S</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Chủ ngữ</div>
                                        <div className="text-sm font-medium text-slate-700 mt-2">The company</div>
                                    </div>
                                    <div className="flex-1 border-r border-gray-100 relative">
                                        <div className="absolute top-1/2 -left-4 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-400 font-bold -translate-y-1/2">+</div>
                                        <div className="font-black text-2xl text-indigo-600">V</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Động từ</div>
                                        <div className="text-sm font-medium text-slate-700 mt-2 underline decoration-indigo-400 decoration-2">launched</div>
                                    </div>
                                    <div className="flex-1 relative">
                                        <div className="absolute top-1/2 -left-4 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-400 font-bold -translate-y-1/2">+</div>
                                        <div className="font-black text-2xl text-cyan-600">O</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Tân ngữ</div>
                                        <div className="text-sm font-medium text-slate-700 mt-2">a new product</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2 */}
                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Phân loại Động từ</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                TOEIC chủ yếu xoay quanh 3 nhóm động từ lớn. Đừng nhầm lẫn vai trò của chúng nhé!
                            </p>

                            <div className="space-y-6">
                                {/* Group 1 */}
                                <div className="bg-white border-l-4 border-rose-500 border border-t-gray-100 border-r-gray-100 border-b-gray-100 rounded-r-2xl shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 text-rose-50 opacity-50"><StarOutlined className="text-8xl" /></div>
                                    <h3 className="text-xl font-bold text-rose-700 mb-2">1. Động từ To-be</h3>
                                    <p className="text-rose-600/80 font-bold text-sm mb-4">is / are / am / was / were / be / been / being</p>
                                    <p className="text-slate-700 font-medium">Thường đứng BỔ TRỢ, phía sau nó sẽ là: <b>Tính từ (Adj)</b>, <b>Danh từ (N)</b>, hoặc phân từ <b>(V-ed/V-ing)</b> trong câu bị động/tiếp diễn.</p>
                                </div>

                                {/* Group 2 */}
                                <div className="bg-white border-l-4 border-emerald-500 border border-t-gray-100 border-r-gray-100 border-b-gray-100 rounded-r-2xl shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50"><TeamOutlined className="text-8xl" /></div>
                                    <h3 className="text-xl font-bold text-emerald-700 mb-2">2. Trợ động từ (Auxiliary verbs)</h3>
                                    <p className="text-emerald-600/80 font-bold text-sm mb-4">do / does / did / have / has / had</p>
                                    <p className="text-slate-700 font-medium">Được "mượn" để hình thành cấu trúc các Thì (Tenses) hoặc nhấn mạnh, tạo câu phủ định/nghi vấn. Không mang nghĩa hành động cụ thể.</p>
                                </div>

                                {/* Group 3 */}
                                <div className="bg-white border-l-4 border-amber-500 border border-t-gray-100 border-r-gray-100 border-b-gray-100 rounded-r-2xl shadow-sm p-6 relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 text-amber-50 opacity-50"><FireOutlined className="text-8xl" /></div>
                                    <h3 className="text-xl font-bold text-amber-600 mb-2">3. Động từ Khiếm khuyết (Modal verbs)</h3>
                                    <p className="text-amber-600/80 font-bold text-sm mb-4">can / could / will / would / should / may / might / must</p>

                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mt-4">
                                        <p className="font-bold text-amber-900 mb-2 flex items-center gap-2"><CheckCircleFilled className="text-amber-500" /> QUY TẮC SẮT ĐÁ</p>
                                        <p className="text-slate-700 font-medium mb-2">Phía sau Động từ khiếm khuyết LUÔN LUÔN CỘNG: <b>Động từ nguyên thể (V-bare)</b>.</p>
                                        <div className="text-sm font-medium opacity-90 text-amber-900 italic">👉 Ex: The manager <b>will approve</b> the budget.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3 */}
                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">3. Kỹ thuật loại trừ "Thần thánh"</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Quy trình 4 bước để xử lý mọi câu trắc nghiệm bắt chia Động từ (A. work / B. works / C. working / D. to work) trong vòng 5 giây.
                            </p>

                            <div className="bg-slate-900 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-black text-white shrink-0 shadow-sm mt-1">1</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-indigo-300 mb-1">KIỂM TRA V-CHÍNH</h4>
                                            <p className="text-slate-300 font-medium">Tìm xem câu <b className="text-white">ĐÃ CÓ ĐỘNG TỪ CHÍNH CHƯA?</b> Nếu chưa có V chính <span className="text-rose-400 font-bold">👉 LOẠI NGAY V-ing và To-V</span> (vì 2 ông này không phải V-chính).</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-black text-white shrink-0 shadow-sm mt-1">2</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-emerald-300 mb-1">XÉT CHỦ NGỮ (Số ít / Số nhiều)</h4>
                                            <p className="text-slate-300 font-medium">Nếu chỗ trống cần V chính, liếc ngay Chủ ngữ kế bên. <b className="text-white italic">"The company"</b> (số ít) hay <b className="text-white italic">"The employees"</b> (số nhiều)? 👉 Loại đáp án chia sai Chủ - Vị.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-black text-white shrink-0 shadow-sm mt-1">3</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-amber-300 mb-1">TÌM DẤU HIỆU THỜI GIAN</h4>
                                            <p className="text-slate-300 font-medium">Quét mắt về cuối câu (hoặc đầu câu) xem có <b className="text-white italic">yesterday, since, next, over the past...</b> không. 👉 Chốt thì (Tense).</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center font-black text-white shrink-0 shadow-sm mt-1">4</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-rose-300 mb-1">CHỦ ĐỘNG HAY BỊ ĐỘNG?</h4>
                                            <p className="text-slate-300 font-medium">Nhìn SAU chỗ trống có <b className="text-white">Tân ngữ (O)</b> không? Nếu có Giới từ <b className="text-white italic">(in/on/by/for)</b> đứng ngay sau chỗ trống 👉 thường báo hiệu <b className="text-rose-200">câu Bị động</b>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 4 */}
                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            {/* Tương tự logic tab bài tập của Noun pronoun */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">4. Bài tập vận dụng</h2>
                                    <p className="text-gray-500 text-sm font-medium">Thực hành nguyên tắc S-V-O và xét V chính</p>
                                </div>
                                <div className="bg-indigo-50 text-indigo-600 px-4 py-2 flex rounded-lg font-bold text-sm">
                                    15 câu hỏi
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm text-center">
                                <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <FormOutlined className="text-indigo-600 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Sẵn sàng để thử thách?</h3>
                                <p className="text-gray-600 mb-8 font-medium max-w-sm mx-auto">
                                    Xác định đúng Động từ là kỹ năng sống còn. Rèn luyện sự nhạy bén của bạn với 15 câu trắc nghiệm thực chiến!
                                </p>
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-sm">
                                    Bắt đầu làm bài
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                    {/* Ghi chú cá nhân */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                                <EditOutlined className="text-gray-500" />
                                Ghi chú cá nhân
                            </h3>
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-bold">Thêm mới</a>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-gray-100 border-l-[3px] border-l-indigo-600 rounded-r-xl rounded-l-sm bg-white shadow-sm p-4">
                                <p className="text-slate-700 text-sm mb-3 font-medium">
                                    TO-V VÀ V-ING KHÔNG BAO GIỜ LÀ ĐỘNG TỪ CHÍNH. LOẠI NGAY!
                                </p>
                                <p className="text-xs text-gray-400 font-medium italic">Đã cập nhật: 15 phút trước</p>
                            </div>
                        </div>
                    </div>

                    {/* Bài tập liên quan */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-6">
                            <BookOutlined className="text-gray-800" />
                            Bài tập liên quan
                        </h3>
                        <div className="space-y-5 mb-8">
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between mb-3 cursor-pointer group">
                                    <span className="text-slate-700 font-bold text-sm group-hover:text-indigo-600 transition-colors">Quiz: Hòa hợp S-V</span>
                                    <ArrowRightOutlined className="text-gray-400 text-xs group-hover:text-indigo-600 transition-colors" />
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5">
                                    <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm">
                            Xem lộ trình Part 5
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerbTheory;
