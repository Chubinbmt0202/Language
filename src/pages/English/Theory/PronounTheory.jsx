import React, { useState } from 'react';
import { UserOutlined, SwapOutlined, TeamOutlined, EditOutlined, BookOutlined, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import PersonalNotes from '../../../components/PersonalNotes/PersonalNotes';

const PronounTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Bảng quy đổi Đại từ', icon: <UserOutlined /> },
        { id: '2', label: '2. S vs O', icon: <SwapOutlined /> },
        { id: '3', label: '3. Sở hữu', icon: <TeamOutlined /> },
        { id: '4', label: '4. Phản thân', icon: <TeamOutlined /> },
        { id: '5', label: '5. Bài tập vận dụng', icon: <BookOutlined /> },
    ];

    return (
        <div className="font-sans text-gray-800 w-full">
            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-600'
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
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Bảng quy đổi Đại từ</h1>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                                Hãy học thuộc bảng này trước khi bắt đầu! Đây là kiến thức xương sống để làm chính xác Part 5 TOEIC.
                            </p>

                            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
                                <table className="w-full text-left border-collapse text-sm whitespace-nowrap">
                                    <thead className="bg-[#f8faff] border-b border-gray-200">
                                        <tr>
                                            <th className="py-4 px-6 font-bold text-slate-800">Ngôi</th>
                                            <th className="py-4 px-6 font-bold text-blue-600">Chủ ngữ (S)</th>
                                            <th className="py-4 px-6 font-bold text-cyan-600">Tân ngữ (O)</th>
                                            <th className="py-4 px-6 font-bold text-green-600">Tính từ SH (Adj)</th>
                                            <th className="py-4 px-6 font-bold text-orange-600">Đại từ SH (Pro)</th>
                                            <th className="py-4 px-6 font-bold text-purple-600">Phản thân (Self)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 font-medium">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-6 text-gray-800">Tôi</td>
                                            <td className="py-3 px-6 font-bold">I</td>
                                            <td className="py-3 px-6 font-bold">Me</td>
                                            <td className="py-3 px-6 font-bold">My</td>
                                            <td className="py-3 px-6 font-bold">Mine</td>
                                            <td className="py-3 px-6 font-bold">Myself</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-6 text-gray-800">Bạn</td>
                                            <td className="py-3 px-6 font-bold">You</td>
                                            <td className="py-3 px-6 font-bold">You</td>
                                            <td className="py-3 px-6 font-bold">Your</td>
                                            <td className="py-3 px-6 font-bold">Yours</td>
                                            <td className="py-3 px-6 font-bold">Yourself / Yourselves</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors bg-blue-50/30">
                                            <td className="py-3 px-6 text-gray-800">Anh ấy</td>
                                            <td className="py-3 px-6 font-bold">He</td>
                                            <td className="py-3 px-6 font-bold">Him</td>
                                            <td className="py-3 px-6 font-bold">His</td>
                                            <td className="py-3 px-6 font-bold">His</td>
                                            <td className="py-3 px-6 font-bold">Himself</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors bg-pink-50/30">
                                            <td className="py-3 px-6 text-gray-800">Cô ấy</td>
                                            <td className="py-3 px-6 font-bold">She</td>
                                            <td className="py-3 px-6 font-bold">Her</td>
                                            <td className="py-3 px-6 font-bold">Her</td>
                                            <td className="py-3 px-6 font-bold">Hers</td>
                                            <td className="py-3 px-6 font-bold">Herself</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                            <td className="py-3 px-6 text-gray-800">Nó</td>
                                            <td className="py-3 px-6 font-bold">It</td>
                                            <td className="py-3 px-6 font-bold">It</td>
                                            <td className="py-3 px-6 font-bold">Its</td>
                                            <td className="py-3 px-6 text-gray-400">(none)</td>
                                            <td className="py-3 px-6 font-bold">Itself</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-6 text-gray-800">Chúng tôi</td>
                                            <td className="py-3 px-6 font-bold">We</td>
                                            <td className="py-3 px-6 font-bold">Us</td>
                                            <td className="py-3 px-6 font-bold">Our</td>
                                            <td className="py-3 px-6 font-bold">Ours</td>
                                            <td className="py-3 px-6 font-bold">Ourselves</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-6 text-gray-800">Họ</td>
                                            <td className="py-3 px-6 font-bold">They</td>
                                            <td className="py-3 px-6 font-bold">Them</td>
                                            <td className="py-3 px-6 font-bold">Their</td>
                                            <td className="py-3 px-6 font-bold">Theirs</td>
                                            <td className="py-3 px-6 font-bold">Themselves</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">2. Phân biệt S và O</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Sự khác biệt lớn nhất giữa Đại từ chủ ngữ (S) và Đại từ tân ngữ (O) nằm ở vị trí của chúng so với động từ chính trong câu.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Khối S */}
                                <div className="bg-white border-t-4 border-t-blue-500 border border-gray-100 rounded-b-2xl shadow-sm p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">S</div>
                                        <h3 className="text-xl font-bold text-slate-800">Chủ ngữ</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-4">Đứng <b>ĐẦU</b> câu (hoặc mệnh đề). Đóng vai trò là người/vật thực hiện hành động.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 <strong className="text-blue-600 text-lg">I</strong> love you.
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200 mt-3">
                                        👉 <strong className="text-blue-600 text-lg">They</strong> have successfully completed the project.
                                    </div>
                                </div>

                                {/* Khối O */}
                                <div className="bg-white border-t-4 border-t-cyan-500 border border-gray-100 rounded-b-2xl shadow-sm p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-black">O</div>
                                        <h3 className="text-xl font-bold text-slate-800">Tân ngữ</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-4">Đứng <b>SAU</b> động từ hoặc <b>SAU</b> giới từ. Chịu tác động của hành động.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 You love <strong className="text-cyan-600 text-lg">me</strong>.
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200 mt-3">
                                        👉 The manager sent the report to <strong className="text-cyan-600 text-lg">him</strong>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">3. Sở hữu (Possessive)</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Phân biệt giữa Tính từ sở hữu (My, Your, His..) và Đại từ sở hữu (Mine, Yours, His..) cực kỳ quan trọng trong đề thi.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Khối Tính từ */}
                                <div className="bg-white border-l-4 border-green-500 border border-gray-100 rounded-r-2xl shadow-sm p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-slate-800 text-green-700">Tính từ sở hữu (Adj)</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-4 italic">My, your, his, her, its, our, their</p>
                                    <div className="mb-4">
                                        <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 uppercase rounded tracking-widest">Luật</span>
                                        <p className="inline ml-2 text-slate-800 font-bold">LUÔN phải có 1 Danh từ (N) đứng phía sau.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 <strong className="text-green-600 text-lg">My</strong> car is blue.
                                    </div>
                                </div>

                                {/* Khối Đại từ */}
                                <div className="bg-white border-l-4 border-orange-500 border border-gray-100 rounded-r-2xl shadow-sm p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-slate-800 text-orange-600">Đại từ sở hữu (Pro)</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-4 italic">Mine, yours, his, hers, ours, theirs</p>
                                    <div className="mb-4">
                                        <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 uppercase rounded tracking-widest">Luật</span>
                                        <p className="inline ml-2 text-slate-800 font-bold">Đứng MỘT MÌNH. Đã bao gồm Noun bên trong.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 Your car is blue, but <strong className="text-orange-600 text-lg">mine</strong> is red. <br />
                                        <span className="text-xs text-gray-500">(mine = my car)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">4. Đại từ phản thân (-self/-selves)</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Đại từ phản thân (như myself, yourself, themselves,...) được dùng trong 2 trường hợp chính sau:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                                    <h3 className="font-bold text-purple-700 text-xl mb-2 flex items-center gap-2">
                                        <CheckCircleFilled />
                                        1. Chủ ngữ và Tân ngữ là một
                                    </h3>
                                    <p className="text-gray-600 font-medium mb-4">Khi người/vật thực hiện hành động lại tác động ngược lại chính người/vật đó.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 <strong className="text-purple-600">He</strong> cut <strong className="text-purple-600">himself</strong> while cooking.
                                        <br /><span className="text-sm text-gray-500 block mt-1">(Anh ấy tự cắt vào tay mình)</span>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                                    <h3 className="font-bold text-purple-700 text-xl mb-2 flex items-center gap-2">
                                        <CheckCircleFilled />
                                        2. Nhấn mạnh (By oneself = Alone)
                                    </h3>
                                    <p className="text-gray-600 font-medium mb-4">Khi muốn nhấn mạnh ai đó TỰ LÀM MỘT MÌNH việc gì đó (không ai giúp đỡ). Thường hay đi với giới từ <b>by</b>.</p>
                                    <div className="bg-gray-50 p-4 rounded-xl text-slate-700 font-medium border border-gray-200">
                                        👉 <strong className="text-purple-600">She</strong> completed the project <strong className="text-purple-600">by herself</strong>.
                                        <br /><span className="text-sm text-gray-500 block mt-1">(Cô ấy tự mình hoàn thành mà không có ai nhờ vả)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '5' && (
                        <div className="animate-fadeIn">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">5. Bài tập vận dụng</h2>
                                    <p className="text-gray-500 text-sm font-medium">Ôn tập lại các phần kiến thức đã học với Quiz nhanh</p>
                                </div>
                                <div className="bg-blue-50 text-blue-600 px-4 py-2 flex rounded-lg font-bold text-sm">
                                    10 câu hỏi
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <CheckCircleFilled className="text-blue-600 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Sẵn sàng để thử thách?</h3>
                                <p className="text-gray-600 mb-8 font-medium max-w-sm mx-auto">
                                    Hoàn thành chuỗi bài tập gồm 10 câu trắc nghiệm để củng cố kiến thức Đại từ.
                                    Làm bài cẩn thận tránh sập bẫy nhé!
                                </p>

                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-sm">
                                    Bắt đầu làm bài
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                    {/* Ghi chú cá nhân */}
                    <PersonalNotes theoryId="pronoun" />
                </div>
            </div>
        </div>
    );
};

export default PronounTheory;
