import React, { useRef, useState } from 'react';
import { Button } from 'antd';
const SegmentedInput = () => {
    const front = "We have to find a place to stop soon since we're running ";
    const back = " of gas.";
    const text = "low"
  const [values, setValues] = useState(Array(text.length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!val) return;

    // 1. Cập nhật giá trị
    const newValues = [...values];
    newValues[index] = val.slice(-1); // Chỉ lấy ký tự cuối cùng vừa nhập
    setValues(newValues);

    // 2. Tự động focus sang ô tiếp theo
    if (index < text.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!values[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      } else {
        // Xóa giá trị ô hiện tại
        const newValues = [...values];
        newValues[index] = '';
        setValues(newValues);
      }
    }
  };

  const handleCheck = () => {
    console.log("Input values:", values.join(''));
    if (values.join('') === text) {
      alert("Correct!");
    } else {
      alert("Try again!");
      setValues(Array(text.length).fill(''));
        inputsRef.current[0].focus();
    }
  }
  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden w-fit">
        <span className="px-2 py-1 bg-gray-100 text-gray-600">{front}</span>
      {values.map((val, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          value={val}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          // Tailwind classes để style giống hình
          className={`w-5 h-10 text-center text-lg outline-none 
            ${index !== length - 1 ? 'border border-gray-600' : ''} 
            focus:bg-blue-50 transition-colors`}
        />
      ))}
      <span>{" "}</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600">{back}</span>
      <Button onClick={handleCheck}>Check</Button>
    </div>
  );
};

export default SegmentedInput;