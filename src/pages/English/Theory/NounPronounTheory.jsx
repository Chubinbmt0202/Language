import React, { useState } from 'react';
import { CheckCircleFilled, BulbFilled, ArrowRightOutlined, EditOutlined, BookOutlined } from '@ant-design/icons';
import PersonalNotes from '../../../components/PersonalNotes/PersonalNotes';

const NounPronounTheory = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { id: '1', label: '1. Định nghĩa' },
        { id: '2', label: '2. Phân loại' },
        { id: '3', label: '3. Vị trí trong câu' },
        { id: '4', label: '4. Các lỗi thường gặp' },
        { id: '5', label: '5. Bài tập vận dụng' },
    ];

    return (
        <div className="font-sans text-gray-800 w-full">
            {/* Top Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto w-full">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 font-bold text-sm whitespace-nowrap transition-colors duration-200 ${activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex-1 lg:w-2/3">
                    {activeTab === '1' && (
                        <div className="animate-fadeIn">
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Danh từ (Nouns)</h1>
                            <p className="text-gray-700 text-lg mb-10 leading-relaxed font-medium">
                                Danh từ là những từ dùng để chỉ người, vật, sự vật, sự việc, hiện tượng, khái niệm,...
                                Trong tiếng Anh, danh từ đóng vai trò cực kỳ quan trọng trong việc cấu thành chủ ngữ
                                và tân ngữ của câu.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Định nghĩa chi tiết</h2>
                            <p className="text-gray-700 mb-6 text-base font-medium">
                                Danh từ có thể được hiểu là những "tên gọi" cho bất kỳ thực thể nào. Ví dụ:
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-4">
                                    <CheckCircleFilled className="text-blue-600 text-xl mt-0.5" />
                                    <span className="text-gray-700 font-medium">
                                        <strong className="text-slate-900">Chỉ người:</strong> teacher (giáo viên), doctor (bác sĩ), student (sinh viên).
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircleFilled className="text-blue-600 text-xl mt-0.5" />
                                    <span className="text-gray-700 font-medium">
                                        <strong className="text-slate-900">Chỉ vật:</strong> table (cái bàn), computer (máy tính), car (xe hơi).
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircleFilled className="text-blue-600 text-xl mt-0.5" />
                                    <span className="text-gray-700 font-medium">
                                        <strong className="text-slate-900">Chỉ khái niệm:</strong> happiness (hạnh phúc), freedom (tự do), knowledge (kiến thức).
                                    </span>
                                </li>
                            </ul>

                            {/* Expert Tip */}
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-12 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <BulbFilled className="text-blue-600 text-xl" />
                                    <span className="text-blue-800 font-extrabold text-sm tracking-wider uppercase">Expert tip for TOEIC</span>
                                </div>
                                <p className="text-slate-700 italic leading-relaxed font-medium">
                                    Trong bài thi TOEIC Part 5 & 6, danh từ thường xuất hiện sau tính từ hoặc các mạo từ
                                    (a, an, the). Hãy chú ý đến đuôi của từ để nhận biết danh từ nhanh chóng như:
                                    <strong className="text-slate-900 font-extrabold ml-1">-tion, -ment, -ness, -ity, -ship</strong>.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Ví dụ thực tế</h2>
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
                                <p className="text-slate-800 text-lg mb-2 font-medium">
                                    The <a href="#" className="text-blue-600 font-bold underline underline-offset-4 decoration-2">information</a> provided in the <a href="#" className="text-blue-600 font-bold underline underline-offset-4 decoration-2">manual</a> is very helpful.
                                </p>
                                <p className="text-gray-500 mb-8 font-medium">
                                    (Thông tin được cung cấp trong sách hướng dẫn rất hữu ích.)
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-xs font-semibold shadow-sm text-center">
                                        Information: Danh từ không đếm được
                                    </span>
                                    <span className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-xs font-semibold shadow-sm text-center">
                                        Manual: Danh từ đếm được
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '2' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">2. Phân loại Danh từ</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {/* Loại 1 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">C</div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Danh từ chung</h3>
                                            <p className="text-xs text-gray-500 font-medium">(Common Nouns)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm font-medium">Chỉ sự vật, sự việc, hiện tượng chung chung.</p>
                                    <div className="flex gap-2">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-bold">cat</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-bold">city</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-bold">student</span>
                                    </div>
                                </div>

                                {/* Loại 2 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg">P</div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Danh từ riêng</h3>
                                            <p className="text-xs text-gray-500 font-medium">(Proper Nouns)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm font-medium">Tên riêng của người, địa danh, tổ chức... Phải viết hoa.</p>
                                    <div className="flex gap-2">
                                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold">Hanoi</span>
                                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold">John</span>
                                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-bold">Google</span>
                                    </div>
                                </div>

                                {/* Loại 3 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-lg">C</div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Danh từ đếm được</h3>
                                            <p className="text-xs text-gray-500 font-medium">(Countable Nouns)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm font-medium">Có thể thêm số đếm (1, 2, 3...) trực tiếp ở phía trước.</p>
                                    <div className="flex gap-2">
                                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs font-bold">an apple</span>
                                        <span className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs font-bold">two books</span>
                                    </div>
                                </div>

                                {/* Loại 4 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-lg">U</div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Danh từ KHÔNG đếm được</h3>
                                            <p className="text-xs text-gray-500 font-medium">(Uncountable Nouns)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm font-medium">Không thể đếm trực tiếp. Luôn ở dạng số ít.</p>
                                    <div className="flex gap-2">
                                        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-md text-xs font-bold">water</span>
                                        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-md text-xs font-bold">money</span>
                                    </div>
                                </div>
                            </div>

                            {/* Expert Tip bổ sung */}
                            <div className="bg-[#f8faff] border border-blue-100 rounded-xl p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <BulbFilled className="text-blue-600 text-xl" />
                                    <span className="text-blue-800 font-extrabold text-sm tracking-widest uppercase">Lưu ý đếm số lượng</span>
                                </div>
                                <p className="text-slate-700 italic leading-relaxed font-medium">
                                    Muốn đếm các danh từ không đếm được, ta phải mượn một "đơn vị đo lường" phía trước. Ví dụ: <strong className="text-slate-900 font-bold">a piece of</strong> advice, <strong className="text-slate-900 font-bold">two bottles of</strong> water.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === '3' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">3. Vị trí trong câu</h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                                Trong một câu tiếng Anh, Danh từ có thể đóng nhiều vai trò khác nhau tùy thuộc vào vị trí của nó.
                                Dưới đây là 4 vị trí phổ biến nhất của danh từ.
                            </p>

                            <div className="space-y-4">
                                {/* Vị trí 1 */}
                                <div className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-blue-600 w-16 flex items-center justify-center text-white font-black pl-2 tracking-wider transform -rotate-90">SUBJECT</div>
                                    <div className="p-6 flex-1">
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Chủ ngữ (Subject)</h3>
                                        <p className="text-sm text-gray-500 mb-4 font-medium">Đứng đầu câu, đứng trước động từ chính.</p>
                                        <div className="bg-gray-50 rounded-lg p-3 font-medium">
                                            <strong className="text-blue-600 underline underline-offset-4 decoration-2">The cat</strong> is sleeping.
                                        </div>
                                    </div>
                                </div>

                                {/* Vị trí 2 */}
                                <div className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-500 w-16 flex items-center justify-center text-white font-black pl-2 tracking-wider transform -rotate-90">OBJECT</div>
                                    <div className="p-6 flex-1">
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Tân ngữ (Object)</h3>
                                        <p className="text-sm text-gray-500 mb-4 font-medium">Đứng ngay sau động từ (ngoại động từ), chịu tác động của hành động.</p>
                                        <div className="bg-gray-50 rounded-lg p-3 font-medium">
                                            I love <strong className="text-emerald-500 underline underline-offset-4 decoration-2">music</strong>.
                                        </div>
                                    </div>
                                </div>

                                {/* Vị trí 3 */}
                                <div className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-amber-500 w-16 flex items-center justify-center text-white font-black pl-2 tracking-wider transform -rotate-90">PREP.</div>
                                    <div className="p-6 flex-1">
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Sau giới từ (Preposition)</h3>
                                        <p className="text-sm text-gray-500 mb-4 font-medium">Đi sau các giới từ như <i>in, on, at, of, about...</i></p>
                                        <div className="bg-gray-50 rounded-lg p-3 font-medium">
                                            She is good at <strong className="text-amber-500 underline underline-offset-4 decoration-2">Math</strong>.
                                        </div>
                                    </div>
                                </div>

                                {/* Vị trí 4 */}
                                <div className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-purple-500 w-16 flex items-center justify-center text-white font-black pl-2 tracking-wider transform -rotate-90">ADJ.</div>
                                    <div className="p-6 flex-1">
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Sau Tính từ / Tính từ sở hữu</h3>
                                        <p className="text-sm text-gray-500 mb-4 font-medium">Đi sau các tính từ sở hữu (my, your, his...) hoặc tính từ chỉ định (this, that...).</p>
                                        <div className="bg-gray-50 rounded-lg p-3 font-medium">
                                            This is my <strong className="text-purple-500 underline underline-offset-4 decoration-2">house</strong>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === '4' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">4. Các lỗi thường gặp</h2>

                            <div className="space-y-6">
                                <div className="bg-white border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-sm">
                                    <h3 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm font-black">1</span>
                                        Dùng số đếm hoặc A/An với danh từ không đếm được
                                    </h3>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="bg-rose-50 text-rose-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Sai:</span> He gave me a good advice.
                                        </div>
                                        <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Đúng:</span> He gave me <strong className="underline underline-offset-2">some good advice</strong>. (hoặc a piece of good advice)
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-sm">
                                    <h3 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm font-black">2</span>
                                        Quên biến đổi danh từ số nhiều bất quy tắc
                                    </h3>
                                    <p className="text-sm text-gray-600 font-medium mb-4">Một số danh từ không thêm "-s/es" mà biến đổi hoàn toàn khi ở dạng số nhiều.</p>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="bg-rose-50 text-rose-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Sai:</span> There are 5 childs in the park.
                                        </div>
                                        <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Đúng:</span> There are 5 <strong className="underline underline-offset-2">children</strong> in the park.
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-sm">
                                    <h3 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm font-black">3</span>
                                        Nhầm lẫn đuôi của danh từ chỉ người và vật
                                    </h3>
                                    <p className="text-sm text-gray-600 font-medium mb-4">VD: -er, -or, -ist (thường chỉ người) so với -tion, -ment, -ness (chỉ vật/sự việc).</p>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="bg-rose-50 text-rose-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Sai:</span> He is a good cook<span className="underline decoration-2">er</span>. (Cooker là nồi cơm điện)
                                        </div>
                                        <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg font-medium flex items-center gap-2">
                                            <span className="font-bold">Đúng:</span> He is a good <strong className="underline underline-offset-2">cook</strong>. (Cook là đầu bếp)
                                        </div>
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
                                    Hoàn thành chuỗi bài tập gồm 10 câu trắc nghiệm để mở khóa bài học tiếp theo.
                                    Cố gắng đạt tỉ lệ trên 80% nhé!
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
                    <PersonalNotes theoryId="noun_pronoun" />

                    {/* Tiến độ bài học */}

                </div>
            </div>
        </div>
    );
};

export default NounPronounTheory;
