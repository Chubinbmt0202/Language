import React, { useState } from 'react';
import { FieldTimeOutlined, ClockCircleOutlined, EditOutlined, BookOutlined, RightCircleFilled, CheckCircleFilled, FireFilled } from '@ant-design/icons';

const TensesTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Hiện tại đơn', icon: <ClockCircleOutlined /> },
        { id: '2', label: '2. Quá khứ đơn', icon: <ClockCircleOutlined /> },
        { id: '3', label: '3. Tương lai đơn', icon: <ClockCircleOutlined /> },
        { id: '4', label: '4. Hiện tại hoàn thành', icon: <ClockCircleOutlined /> },
        { id: '5', label: '5. Bài tập vận dụng', icon: <BookOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full animate-fadeIn">
            {/* Header / Intro */}
            <div className="mb-8 p-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl text-white shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <h1 className="text-3xl font-extrabold mb-2 relative z-10 flex items-center gap-3">
                    <FieldTimeOutlined className="text-4xl" /> 4 Thì "Đẻ Điểm" TOEIC
                </h1>
                <p className="text-teal-50 font-medium text-lg relative z-10 max-w-2xl">
                    Đừng học lan man cả 12 thì! Hãy tập trung vào 4 thì xuất hiện nhiều nhất trong Part 5 & 6. Nắm vững Dấu hiệu thời gian là chìa khóa!
                </p>
            </div>

            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-teal-600 border-b-2 border-teal-600'
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

                    {/* Tab 1: HTĐ */}
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 text-2xl font-black">1</div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-800">Hiện tại đơn (Present Simple)</h2>
                                    <p className="text-teal-600 font-bold">Thường diễn tả: Sự thật, lịch trình, thói quen định kỳ.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                                    <h3 className="font-bold text-slate-800 mb-4 border-b pb-2 border-gray-100">Dấu hiệu nhận biết:</h3>
                                    <ul className="space-y-3 font-medium text-slate-600">
                                        <li className="flex items-start gap-2"><CheckCircleFilled className="text-teal-500 mt-1" /> <b>usually, often, always, rarely</b></li>
                                        <li className="flex items-start gap-2"><CheckCircleFilled className="text-teal-500 mt-1" /> <b>currently</b> (Đang diễn ra)</li>
                                        <li className="flex items-start gap-2"><CheckCircleFilled className="text-teal-500 mt-1" /> <b>routinely, regularly, normally</b></li>
                                    </ul>
                                </div>
                                <div className="bg-teal-50/50 border border-teal-100 shadow-sm rounded-2xl p-6 relative">
                                    <FireFilled className="absolute top-4 right-4 text-teal-300 text-6xl opacity-20" />
                                    <h3 className="font-bold text-teal-800 mb-4 border-b border-teal-200 pb-2">TOEIC siêu hay thi:</h3>
                                    <p className="text-teal-900 font-medium leading-relaxed">
                                        <b>Lịch trình khởi hành (Flight, Train)</b>, lịch hội thảo cực kỳ hay dùng thì Hiện tại đơn dù nó mang ý tương lai.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-slate-700 text-sm tracking-widest uppercase mb-3 text-center">Ví dụ minh họa</h4>
                                <p className="text-center font-medium text-lg text-slate-800">The software update <span className="text-teal-600 font-bold underline decoration-2 underline-offset-4">occurs</span> <b className="text-rose-500">routinely</b> every Tuesday.</p>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: HTHT */}
                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 text-2xl font-black">4</div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-800">Hiện tại Hoàn thành (Present Perfect)</h2>
                                    <p className="text-rose-600 font-bold">Thường diễn tả: Hành động từ Quá khứ kéo dài đến Hiện tại.</p>
                                </div>
                            </div>

                            <p className="text-slate-700 font-medium text-lg mb-6 leading-relaxed bg-rose-50 p-4 rounded-xl border border-rose-100 border-l-4 border-l-rose-500">
                                Đây là cấu trúc chiếm tỉ trọng CỰC CAO trong TOEIC. Thuộc lòng 5 nhóm dấu hiệu dưới đây là ăn chắc điểm!
                            </p>

                            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 mb-8">
                                <h3 className="font-bold text-slate-800 mb-4 border-b pb-2 border-gray-100">Dấu hiệu ĐẶC TRƯNG TOEIC:</h3>
                                <ul className="space-y-4 font-medium text-slate-700">
                                    <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <div className="bg-rose-500 text-white font-bold px-2 py-1 rounded text-xs shrink-0">#1</div>
                                        <div><b className="text-rose-600 text-lg">over / for the past / last + thời gian:</b> <span className="text-gray-500 italic block mt-1">(Ex: over the last 5 years) =&gt; Dấu hiệu vàng.</span></div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3">
                                        <div className="bg-gray-300 text-white font-bold px-2 py-1 rounded text-xs shrink-0">#2</div>
                                        <div><b>since</b> (từ khi) + Mốc Quá khứ | <b>for</b> (trong suốt) + Khoảng tgian</div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                        <div className="bg-gray-300 text-white font-bold px-2 py-1 rounded text-xs shrink-0">#3</div>
                                        <div><b>recently, lately:</b> Gần đây</div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3">
                                        <div className="bg-gray-300 text-white font-bold px-2 py-1 rounded text-xs shrink-0">#4</div>
                                        <div><b>already, yet:</b> Dùng nhiều trong Part 6 và Email/Letter.</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                <p className="text-center font-medium text-lg text-slate-800">Sales <span className="text-rose-600 font-bold underline decoration-2 underline-offset-4">have increased</span> significantly <b className="text-rose-500">over the past three months</b>.</p>
                            </div>
                        </div>
                    )}

                    {/* For demo, Tab 2/3 similar structure, I will add placeholder quickly and focus more on layout completeness */}
                    {(activeTab === '2' || activeTab === '3') && (
                        <div className="animate-fadeIn text-center py-20 bg-white border border-gray-100 rounded-3xl">
                            <ClockCircleOutlined className="text-6xl text-gray-300 border-4 border-gray-100 rounded-full p-4 mb-4" />
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Thì {activeTab === '2' ? 'Quá khứ đơn' : 'Tương lai đơn'}</h3>
                            <p className="text-gray-500 font-medium">Bản cập nhật chi tiết cấu trúc này đang được biên soạn.<br />(Format tương tự Tab Hiện tại đơn).</p>
                        </div>
                    )}

                    {activeTab === '5' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">5. Bài tập vận dụng (Thì)</h2>
                                    <p className="text-gray-500 text-sm font-medium">Luyện tập quét dấu hiệu thời gian</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm text-center">
                                <div className="w-20 h-20 bg-teal-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <RightCircleFilled className="text-teal-600 text-4xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Vào thi thật thôi!</h3>
                                <p className="text-gray-600 mb-8 font-medium max-w-sm mx-auto">
                                    Chỉ có 15s cho 1 câu thì Động từ. Tìm dấu hiệu thời gian và chốt nhanh đáp án!
                                </p>
                                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-sm">
                                    Bắt đầu Làm bài
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
                                Tóm tắt
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-gray-100 border-l-[3px] border-l-teal-600 rounded-r-xl rounded-l-sm bg-white shadow-sm p-4">
                                <p className="text-slate-700 text-sm mb-3 font-medium">
                                    <b>HT Hoàn Thành</b> có keyword "over the last...". Đây là thứ bạn phải thuôc.
                                </p>
                                <p className="text-xs text-gray-400 font-medium italic">Gợi ý từ Thầy/Cô</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TensesTheory;
