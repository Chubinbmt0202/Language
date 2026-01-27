import React, { useRef, useState, useEffect } from "react";
import test from "../../assets/test.mp3";

const ListenAndFill = () => {
  const [values, setValues] = useState("");
  const inputRef = useRef(null);
  const audioRef = useRef(null);

  // 1. Giữ nguyên useEffect xử lý phím Ctrl để Replay (Global)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === "Control") {
        console.log("Replay Audio");
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // 2. Hàm này CHỈ ĐỂ cập nhật chữ khi gõ (Bắt buộc phải có)
  const handleChange = (e) => {
    setValues(e.target.value);
  };

  // 3. Hàm này mới chứa logic KIỂM TRA (Gắn vào sự kiện onKeyDown của Input)
  const handleCheckAnswer = (e) => {
    // Chỉ chạy khi nhấn Enter
    if (e.key === "Enter") {
      console.log("Đang kiểm tra kết quả...");
      
      const answer = "Good morning, Jack";
      // Lấy giá trị hiện tại từ state 'values' để kiểm tra
      const userValue = values.trim(); 
      const answerWords = answer.split(" ");
      const userWords = userValue.split(" ").filter(Boolean);

      if (userWords.length < answerWords.length) {
        console.log(
          "Thiếu:",
          answerWords.length - userWords.length,
          "từ"
        );
      } else if (userWords.length > answerWords.length) {
        console.log(
          "Thừa:",
          userWords.length - answerWords.length,
          "từ"
        );
      } else {
        console.log("Đủ số lượng từ!");
      }

      userWords.forEach((word, index) => {
        if (word === answerWords[index]) {
          console.log(`Từ ${index + 1} đúng: "${word}"`);
        } else {
          console.log(
            `Từ ${index + 1} sai: Bạn viết "${word}", Đáp án là "${answerWords[index]}"`
          );
        }
        });

        if (userValue === answer) {
          console.log("Chính xác toàn bộ câu!");
        }
    }
  };

  return (
    <div className="p-4 border rounded">
      <audio ref={audioRef} controls className="mb-4">
        <source src={test} type="audio/mpeg" />
      </audio>

      <br />

      <input
        value={values}
        ref={inputRef}
        onChange={handleChange}       // Gõ chữ là cập nhật state ngay
        onKeyDown={handleCheckAnswer} // Nhấn phím thì mới kiểm tra Enter
        type="text"
        placeholder="Type here (Enter to check, Ctrl to replay)"
        className="border border-gray-300 p-2 rounded w-full"
      />
    </div>
  );
};

export default ListenAndFill;
