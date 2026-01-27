import React from 'react';
import { Button, Card, Tooltip, Typography } from 'antd';
import { RedoOutlined, CheckCircleOutlined, BulbOutlined } from '@ant-design/icons';
import { useHiraganaGame } from '../../../hook/useHiraganaGame';
import SetupCard from './SetupCard';
import CharacterBlock from './CharacterBlock';

const { Text } = Typography;

const HiraganaPractice = () => {
  const { 
    config, setConfig, 
    gameState, 
    inputRefs, 
    actions 
  } = useHiraganaGame();

  // Lấy thêm meaning từ gameState
  const { charData, meaning, userInputs, hintUsedIndices, isLoading, isStarted, isCompleted } = gameState;

  if (!isStarted && !isLoading) {
    return (
      <SetupCard 
        config={config} 
        setConfig={setConfig} 
        onStart={actions.startExercise} 
        isLoading={isLoading} 
      />
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Button icon={<RedoOutlined />} onClick={actions.startExercise}>
          Đổi bài khác
        </Button>
        
        <Tooltip title="Gợi ý đáp án">
          <Button 
            type="dashed" 
            icon={<BulbOutlined style={{ color: '#faad14' }} />} 
            onClick={actions.handleHint}
            disabled={isCompleted}
          >
            Gợi ý
          </Button>
        </Tooltip>
      </div>

      <Card loading={isLoading} style={{ minHeight: 300 }}>
        {/* GAME AREA */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 4px', alignItems: 'flex-end', lineHeight: 1.5 }}>
          {charData.map((item, index) => (
            <CharacterBlock
              key={index}
              index={index}
              item={item}
              userInput={userInputs[index]}
              isHinted={hintUsedIndices[index]}
              onInputChange={actions.handleInputChange}
              onKeyDown={actions.handleKeyDown}
              onFocus={actions.setFocusedIndex}
              inputRef={el => inputRefs.current[index] = el}
            />
          ))}
        </div>

        {/* --- KHU VỰC HIỂN THỊ NGHĨA (CHỈ HIỆN KHI HOÀN THÀNH) --- */}
        {isCompleted && meaning && (
          <div style={{ 
            marginTop: 40, 
            padding: '20px', 
            background: '#f6ffed', 
            border: '1px solid #b7eb8f', 
            borderRadius: '12px',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <Text type="secondary" style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Dịch nghĩa
            </Text>
            <div style={{ 
              fontSize: 20, 
              fontWeight: 600, 
              color: '#389e0d', 
              marginTop: 10,
              fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial' 
            }}>
              "{meaning}"
            </div>
          </div>
        )}
      </Card>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        {isCompleted ? (
          <Button type="primary" size="large" icon={<CheckCircleOutlined />} style={{ background: '#52c41a', height: 50, padding: '0 40px' }}>
            Làm tốt lắm!
          </Button>
        ) : (
          <Button type="primary" size="large" onClick={actions.checkAll} style={{ width: 200, height: 50 }}>
            Dịch nghĩa
          </Button>
        )}
      </div>
      
      {/* CSS Animation nhỏ cho phần hiện nghĩa */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HiraganaPractice;