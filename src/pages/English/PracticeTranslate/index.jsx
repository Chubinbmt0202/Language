/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "@/app/App.css";

const PracticeTranslate = () => {
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Dữ liệu câu đã được phân tích thành từng cụm từ (Tokenized)
  const sentenceParts = [
    { text: "Tôi", trans: "I" },
    { text: "đã học", trans: "have been learning" }, // Cụm từ đi chung
    { text: "tiếng Anh", trans: "English" },
    { text: "được", trans: "for" },
    { text: "3 năm", trans: "3 years" },
    { text: "rồi", trans: "already / (nhấn mạnh)" },
  ];

  const fullSentence = sentenceParts.map(p => p.text).join(" ");
  const englishCorrect = "I have been learning English for 3 years.";
  const hint = "Sử dụng thì Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous).";

  const handleReset = () => {
    setUserInput("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center py-12 px-4 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100 h-fit">

        <h2 className="text-2xl font-black text-slate-800 mb-8 text-center tracking-tight">
          LUYỆN DỊCH CÂU
        </h2>

        {/* Khu vực câu hỏi với tính năng HOVER */}
        <div className="mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-widest text-center">
            Di chuột vào từng cụm từ để xem gợi ý:
          </p>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
            {sentenceParts.map((part, index) => (
              <div
                key={index}
                className="relative group cursor-help border-b-2 border-dashed border-slate-300 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 transition-all rounded px-1"
              >
                {/* Từ tiếng Việt */}
                <span>{part.text}</span>

                {/* Tooltip (Gợi ý) - Chỉ hiện khi Hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 shadow-lg pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                  {part.trans}
                  {/* Mũi tên nhỏ của tooltip */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nhập liệu */}
        <div className="relative group">
          <textarea
            className="w-full p-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-300 resize-none"
            placeholder="Viết lại câu trên bằng tiếng Anh..."
            rows={3}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        {/* Nút điều hướng */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleReset}
            className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors"
          >
            Làm mới
          </button>
          <button
            onClick={() => setShowResult(true)}
            className="flex-1 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95 flex justify-center items-center gap-2"
          >
            <span>Kiểm tra kết quả</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Kết quả */}
        {showResult && (
          <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-emerald-200 rounded-full text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Đáp án đúng:</span>
                <p className="text-xl text-emerald-900 font-bold mt-1">
                  {englishCorrect}
                </p>
                <div className="mt-3 text-sm text-slate-600 bg-white/60 p-3 rounded-lg border border-emerald-100/50">
                  {hint}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeTranslate;