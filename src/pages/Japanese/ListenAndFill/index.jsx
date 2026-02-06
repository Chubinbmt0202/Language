import React, { useRef, useState, useEffect } from "react";
// Giả sử bạn import nhiều file âm thanh, ở đây mình dùng chung 1 file demo
import audioFile1 from "../../../assets/test.mp3"; 
import "./ListenAndFill.css"; 

// Icon SVG
const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const ListenAndFillJapanese = () => {
  // --- 1. Dữ liệu bài tập (Danh sách câu hỏi) ---
  const questions = [
    {
      id: 1,
      audioSrc: audioFile1, // File âm thanh tương ứng
      answer: "Good morning, Jack." 
    },
    {
      id: 2,
      audioSrc: audioFile1, // (Demo) Thay bằng file khác nếu có
      answer: "How are you today?"
    },
    {
      id: 3,
      audioSrc: audioFile1, 
      answer: "See you later."
    }
  ];

  // State quản lý
  const [currentIndex, setCurrentIndex] = useState(0); // Câu hỏi hiện tại
  const [values, setValues] = useState("");
  const [feedback, setFeedback] = useState(null); 
  const [detailedResult, setDetailedResult] = useState([]); 
  const [isFinished, setIsFinished] = useState(false); // Trạng thái hoàn thành toàn bộ bài

  const inputRef = useRef(null);
  const audioRef = useRef(null);

  // Lấy dữ liệu câu hiện tại
  const currentQuestion = questions[currentIndex];

  // Reset mỗi khi chuyển câu hỏi
//   useEffect(() => {
//     setValues("");
//     setFeedback(null);
//     setDetailedResult([]);
//     // Tự động focus vào ô nhập liệu khi qua câu mới
//     if (inputRef.current) inputRef.current.focus();
    
//     // Tự động phát audio khi qua câu mới (Optional - bật dòng dưới nếu muốn)
//     // playAudio(); 
//   }, [currentIndex]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === "Control") {
        playAudio();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues("");
    setFeedback(null);
    setDetailedResult([]);
    // Tự động focus vào ô nhập liệu khi qua câu mới
    if (inputRef.current) inputRef.current.focus();
  }, [currentIndex]);

  const handleChange = (e) => {
    setValues(e.target.value);
    if (feedback === 'error') {
      setFeedback(null);
    }
  };

  const removePunctuation = (text) => {
    if (!text) return "";
    return text.replace(/[.,!?;:。、？！]/g, "").toLowerCase();
  };

  // --- 2. Logic Chuyển câu hỏi tiếp theo ---
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1); // Tăng index để qua câu mới
    } else {
      setIsFinished(true); // Đã làm hết danh sách
    }
  };

  // --- 3. Logic Xử lý phím Enter ---
  const handleCheckAnswer = (e) => {
    if (e.key === "Enter") {
      // TRƯỜNG HỢP A: Nếu đã làm ĐÚNG -> Enter lần nữa để qua câu tiếp
      if (feedback === 'success') {
        handleNextQuestion();
        return;
      }
      
      // TRƯỜNG HỢP B: Đã hoàn thành hết bài -> Enter để reset làm lại từ đầu (Optional)
      if (isFinished) {
         window.location.reload(); // Hoặc logic reset state tùy bạn
         return;
      }

      // TRƯỜNG HỢP C: Đang làm bài -> Thực hiện kiểm tra
      const userValue = values.trim();
      const answerWords = currentQuestion.answer.split(" ");
      const userWords = userValue.split(" ").filter(Boolean);

      const resultMap = answerWords.map((ansWord, index) => {
        const userWord = userWords[index];
        if (!userWord) return { status: 'missing', text: '___' }; 

        const cleanUserWord = removePunctuation(userWord);
        const cleanAnsWord = removePunctuation(ansWord);

        if (cleanUserWord === cleanAnsWord) {
           return { status: 'correct', text: userWord }; 
        } 
        return { status: 'incorrect', text: userWord, correctText: ansWord }; 
      });

      if (userWords.length > answerWords.length) {
          for(let i = answerWords.length; i < userWords.length; i++) {
              resultMap.push({ status: 'incorrect', text: userWords[i], isExtra: true });
          }
      }

      setDetailedResult(resultMap);

      const cleanUserString = removePunctuation(userValue).replace(/\s+/g, '');
      const cleanAnswerString = removePunctuation(currentQuestion.answer).replace(/\s+/g, '');

      if (cleanUserString === cleanAnswerString) {
        setFeedback('success');
        // Có thể phát âm thanh "Ting" chúc mừng ở đây nếu muốn
      } else {
        setFeedback('error');
      }
    }
  };

  // --- Giao diện khi hoàn thành toàn bộ ---
  if (isFinished) {
    return (
      <div className="listen-container">
        <div className="listen-card">
           <div className="status-message status-success" style={{fontSize: '24px'}}>
             🎉 Chúc mừng! <br/> Bạn đã hoàn thành tất cả câu hỏi.
           </div>
           <button 
             className="audio-btn-large" 
             style={{borderRadius: '12px', width: 'auto', padding: '0 20px', marginTop: '20px'}}
             onClick={() => window.location.reload()}
           >
             Làm lại
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="listen-container">
      <div className="listen-card">
        {/* Hiển thị tiến độ câu hỏi (VD: Câu 1/3) */}
        <div style={{marginBottom: '10px', color: '#9ca3af', fontWeight: 'bold'}}>
           Câu {currentIndex + 1} / {questions.length}
        </div>

        {/* Audio Player động theo từng câu */}
        <audio ref={audioRef} className="hidden-audio" src={currentQuestion.audioSrc} style={{display: 'none'}} />

        <button className="audio-btn-large" onClick={playAudio} title="Nghe (Ctrl)">
          <PlayIcon />
        </button>
        
        <h3 style={{marginBottom: '20px', color: '#6b7280'}}>Nghe và điền vào chỗ trống</h3>

        <div className="input-group">
          <input
            value={values}
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={handleCheckAnswer}
            type="text"
            placeholder="Nhập câu trả lời..."
            className={`custom-input ${
              feedback === 'error' ? 'input-error' : 
              feedback === 'success' ? 'input-success' : ''
            }`}
            autoComplete="off" 
            // Vô hiệu hóa input khi đã làm đúng để tránh sửa lung tung
            readOnly={feedback === 'success'}
          />
        </div>

        {(feedback || detailedResult.length > 0) && (
          <div className="feedback-area">
             {/* Thông báo thay đổi dựa trên trạng thái */}
             {feedback === 'success' && (
                <div className="status-message status-success">
                  Chính xác! Bấm <b>Enter</b> để tiếp tục ➔
                </div>
             )}
             
             {feedback === 'error' && <div className="status-message status-error">Chưa đúng, hãy kiểm tra lại 👇</div>}
             
             <div style={{marginTop: '10px'}}>
                {detailedResult.map((item, index) => (
                    <span 
                        key={index} 
                        className={`feedback-word word-${item.status}`}
                        title={item.status === 'incorrect' && !item.isExtra ? `Đáp án đúng: ${item.correctText}` : ''}
                    >
                        {item.text}
                    </span>
                ))}
             </div>
          </div>
        )}

        <div className="shortcuts-hint">
            <span><span className="key-badge">Ctrl</span> Nghe lại</span>
            {/* Hướng dẫn phím Enter thay đổi theo ngữ cảnh */}
            <span>
              <span className="key-badge">Enter</span> {feedback === 'success' ? 'Tiếp tục' : 'Kiểm tra'}
            </span>
        </div>

      </div>
    </div>
  );
};

export default ListenAndFillJapanese;