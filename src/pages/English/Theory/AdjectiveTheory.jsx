import React, { useState } from 'react';
import { CaretRightOutlined, StarOutlined, CheckCircleFilled, AppstoreOutlined, KeyOutlined, OrderedListOutlined, FormOutlined, ArrowRightOutlined, BookOutlined, EditOutlined, SlidersOutlined } from '@ant-design/icons';

const AdjectiveTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Định nghĩa & Đuôi nhận biết', icon: <StarOutlined /> },
        { id: '2', label: '2. Vị trí "Vàng"', icon: <KeyOutlined /> },
        { id: '3', label: '3. Trật tự OSASCOMP', icon: <SlidersOutlined /> },
        { id: '4', label: '4. Mẹo Part 5', icon: <AppstoreOutlined /> },
        { id: '5', label: '5. Bài tập vận dụng', icon: <FormOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full animate-fadeIn">
            {/* Header / Intro */}
            <div className="mb-8 p-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl text-white shadow-md relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
                <h1 className="text-3xl font-extrabold mb-2 relative z-10 flex items-center gap-3">
                    <StarOutlined className="text-4xl" /> Tính từ (Adjectives)
                </h1>
                <p className="text-rose-50 font-medium text-lg relative z-10 max-w-2xl">
                    Chuyên gia "làm đẹp" cho Danh từ. Nếu trong câu có chỗ trống đứng trước Danh từ, xác suất 90% đó là một Tính từ!
                </p>
            </div>

            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-rose-600 border-b-2 border-rose-600'
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

                    {/* Tab 1: Định nghĩa & Đuôi */}
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Định nghĩa & 6 Đuôi phổ biến nhất</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Tính từ dùng để mô tả đặc điểm, tính chất của người, vật, sự việc. Việc nhận diện được hình dáng của Tính từ sẽ giúp bạn làm bài Part 5 rất nhanh.
                            </p>

                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-gray-100 pb-3">Các đuôi (Suffixes) thường gặp:</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-rose-600 text-2xl mb-1">-ful</div>
                                        <div className="text-sm font-medium text-slate-700">useful, beautiful</div>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-orange-600 text-2xl mb-1">-less</div>
                                        <div className="text-sm font-medium text-slate-700">careless, hopeless</div>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-amber-600 text-2xl mb-1">-ive</div>
                                        <div className="text-sm font-medium text-slate-700">attractive, active</div>
                                    </div>
                                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-emerald-600 text-2xl mb-1">-al</div>
                                        <div className="text-sm font-medium text-slate-700">national, logical</div>
                                    </div>
                                    <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-cyan-600 text-2xl mb-1">-ous</div>
                                        <div className="text-sm font-medium text-slate-700">dangerous, serious</div>
                                    </div>
                                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl text-center">
                                        <div className="font-black text-indigo-600 text-2xl mb-1">-able/-ible</div>
                                        <div className="text-sm font-medium text-slate-700">readable, flexible</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Vị trí vàng */}
                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">3 Vị trí "Vàng" của Tính từ</h2>

                            <div className="space-y-6">
                                {/* Vị trí 1 */}
                                <div className="bg-white border-l-4 border-rose-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black text-sm">1</div>
                                        Đứng TRƯỚC Danh từ (N)
                                    </h3>
                                    <p className="text-slate-600 font-medium mb-3">Tính từ đóng vai trò bổ nghĩa, làm rõ nghĩa cho Danh từ đứng ngay sau nó.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 It is an <strong className="text-rose-600 underline">important</strong> meeting.
                                    </div>
                                </div>

                                {/* Vị trí 2 */}
                                <div className="bg-white border-l-4 border-emerald-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-sm">2</div>
                                        Đứng SAU Động từ To-be
                                    </h3>
                                    <p className="text-slate-600 font-medium mb-3">Dùng để miêu tả chủ ngữ. Cấu trúc: <b>S + be + Adj</b>.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 The new project is <strong className="text-emerald-600 underline">complicated</strong>.
                                    </div>
                                </div>

                                {/* Vị trí 3 */}
                                <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm">3</div>
                                        Đứng SAU Linking Verbs
                                    </h3>
                                    <p className="text-slate-600 font-medium mb-3">Các động từ chỉ tri giác/trạng thái: <b>feel, seem, look, smell, taste, become, get, remain...</b></p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-800 font-medium border border-gray-200">
                                        👉 The cake smells <strong className="text-blue-600 underline">delicious</strong>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: OSASCOMP */}
                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Trật tự OSASCOMP</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Đôi khi một Danh từ được bổ nghĩa bởi nhiều hơn một Tính từ. Vậy từ nào đứng trước, từ nào đứng sau? Công thức <b>OSASCOMP</b> ra đời để giải quyết vấn đề đó!
                            </p>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="py-3 px-4 text-rose-600 font-black">O</th>
                                            <th className="py-3 px-4 text-emerald-600 font-black">S</th>
                                            <th className="py-3 px-4 text-amber-600 font-black">A</th>
                                            <th className="py-3 px-4 text-blue-600 font-black">S</th>
                                            <th className="py-3 px-4 text-purple-600 font-black">C</th>
                                            <th className="py-3 px-4 text-pink-600 font-black">O</th>
                                            <th className="py-3 px-4 text-indigo-600 font-black">M</th>
                                            <th className="py-3 px-4 text-teal-600 font-black">P</th>
                                            <th className="py-3 px-4 text-slate-400 font-bold border-l-2 border-slate-200">Noun</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium text-slate-700">
                                        <tr className="border-b border-gray-50 bg-gray-50/50">
                                            <td className="py-3 px-4"><b>O</b>pinion<br /><span className="text-xs text-gray-500 font-normal">Quan điểm</span></td>
                                            <td className="py-3 px-4"><b>S</b>ize<br /><span className="text-xs text-gray-500 font-normal">Kích cỡ</span></td>
                                            <td className="py-3 px-4"><b>A</b>ge<br /><span className="text-xs text-gray-500 font-normal">Tuổi</span></td>
                                            <td className="py-3 px-4"><b>S</b>hape<br /><span className="text-xs text-gray-500 font-normal">Hình dáng</span></td>
                                            <td className="py-3 px-4"><b>C</b>olor<br /><span className="text-xs text-gray-500 font-normal">Màu sắc</span></td>
                                            <td className="py-3 px-4"><b>O</b>rigin<br /><span className="text-xs text-gray-500 font-normal">Nguồn gốc</span></td>
                                            <td className="py-3 px-4"><b>M</b>aterial<br /><span className="text-xs text-gray-500 font-normal">Chất liệu</span></td>
                                            <td className="py-3 px-4"><b>P</b>urpose<br /><span className="text-xs text-gray-500 font-normal">Mục đích</span></td>
                                            <td className="py-3 px-4 border-l-2 border-slate-200 text-slate-400">-</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 text-rose-600 font-bold italic">beautiful</td>
                                            <td className="py-4 px-4 text-emerald-600 font-bold italic">small</td>
                                            <td className="py-4 px-4 text-amber-600 font-bold italic">old</td>
                                            <td className="py-4 px-4 text-blue-600 font-bold italic">round</td>
                                            <td className="py-4 px-4 text-purple-600 font-bold italic">brown</td>
                                            <td className="py-4 px-4 text-pink-600 font-bold italic">French</td>
                                            <td className="py-4 px-4 text-indigo-600 font-bold italic">wooden</td>
                                            <td className="py-4 px-4 text-teal-600 font-bold italic">dining</td>
                                            <td className="py-4 px-4 border-l-2 border-slate-200 font-bold text-slate-800 underline decoration-2 underline-offset-4">table</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: Mẹo Điền Tính từ */}
                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Mẹo cực phẩm làm Part 5 (Adj)</h2>

                            <div className="bg-slate-900 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden mb-6">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>

                                <h3 className="text-2xl font-bold text-rose-400 mb-4 z-10 relative">💡 "Liếc phải rồi Liếc trái"</h3>
                                <div className="space-y-4 font-medium text-slate-300 relative z-10">
                                    <p>Khi đối mặt với 4 đáp án dạng từ loại: <b>A. product &nbsp; B. produce &nbsp; C. productive &nbsp; D. productively</b></p>

                                    <div className="bg-white/10 p-4 rounded-xl border border-white/20 mt-4">
                                        <p className="mb-2"><span className="bg-rose-500 text-white font-bold px-2 py-1 rounded text-xs mr-2">Bước 1</span> <b>Liếc sang PHẢI</b> xem có Danh từ (N) đứng cạnh chỗ trống không.</p>
                                        <p className="ml-8 text-sm text-rose-200 font-normal">$\rightarrow$ Nếu CÓ Danh từ ở bên phải $\rightarrow$ Điền <b>Tính từ</b> (Adj) vào kẹp giữa để bổ nghĩa cho N.</p>
                                    </div>

                                    <div className="bg-white/10 p-4 rounded-xl border border-white/20 mt-2">
                                        <p className="mb-2"><span className="bg-rose-500 text-white font-bold px-2 py-1 rounded text-xs mr-2">Bước 2</span> Nếu KHÔNG có Noun bên phải $\rightarrow$ <b>Liếc sang TRÁI</b>.</p>
                                        <p className="ml-8 text-sm text-rose-200 font-normal">$\rightarrow$ Liếc trái thấy Động từ To-be (am/is/are/was...) hoặc Linking verb (feel/look) $\rightarrow$ Điền <b>Tính từ</b> (Adj).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '5' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Bài tập vận dụng</h2>
                                    <p className="text-gray-500 text-sm font-medium">Luyện tập chọn đuôi Tính từ chuẩn xác.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm text-center">
                                <div className="w-20 h-20 bg-rose-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <CaretRightOutlined className="text-rose-600 text-4xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Tìm vị trí Tính từ!</h3>
                                <p className="text-gray-600 mb-8 font-medium max-w-sm mx-auto">
                                    Thực hành kỹ năng quét quanh chỗ trống để chốt đáp án trong 5 giây.
                                </p>
                                <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-sm">
                                    Bắt đầu Làm bài
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
                            <div className="border border-gray-100 border-l-[3px] border-l-rose-600 rounded-r-xl rounded-l-sm bg-white shadow-sm p-4">
                                <p className="text-slate-700 text-sm mb-3 font-medium">
                                    Thấy chỗ trống đứng TRƯỚC Danh từ $\rightarrow$ Quất ngay Tính Từ (ưu tiên đuôi <b>-able, -ive, -al</b>...)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdjectiveTheory;
