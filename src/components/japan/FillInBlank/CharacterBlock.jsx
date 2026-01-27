import React from 'react';
import { Tooltip } from 'antd';

const CharacterBlock = ({ 
  item, 
  index, 
  userInput, 
  isHinted, 
  onInputChange, 
  onKeyDown, 
  onFocus, 
  inputRef 
}) => {
  // 1. Xử lý dấu câu
  if (item.type === 'punctuation') {
    return (
      <div style={{ fontSize: 32, fontWeight: 'bold', paddingBottom: 28, width: 20, textAlign: 'center' }}>
        {item.char}
      </div>
    );
  }

  // 2. Logic màu sắc
  const isCorrect = userInput === item.romaji;
  const isFilled = !!userInput;

  let borderColor = '#d9d9d9';
  let bgColor = '#fff';

  if (isFilled) {
    if (isHinted) {
      borderColor = '#faad14'; 
      bgColor = '#fffbe6';
    } else {
      borderColor = isCorrect ? '#52c41a' : '#ff4d4f';
      bgColor = isCorrect ? '#f6ffed' : '#fff1f0';
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40 }}>
      <Tooltip title={item.romaji} trigger="hover">
        <div style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 4, cursor: 'help' }}>
          {item.char}
        </div>
      </Tooltip>
      
      <input
        ref={inputRef}
        value={userInput || ''}
        onChange={(e) => onInputChange(index, e.target.value)}
        onKeyDown={(e) => onKeyDown(e, index)}
        onFocus={() => onFocus(index)}
        autoComplete="off"
        style={{
          width: '36px', height: '30px', textAlign: 'center',
          border: `2px solid ${borderColor}`,
          borderRadius: '4px',
          backgroundColor: bgColor,
          outline: 'none',
          fontWeight: '500', transition: 'all 0.2s'
        }}
      />
    </div>
  );
};

export default CharacterBlock;