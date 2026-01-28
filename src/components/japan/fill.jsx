import React, { useState, useRef } from 'react';
import { Button, Card, Typography, Select, message, Tooltip, Badge } from 'antd';
import { RedoOutlined, CheckCircleOutlined, BulbOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { generateQuizFill } from '../geminiService';

const { Title, Text } = Typography;
const { Option } = Select;

const HiraganaPractice = () => {
  const [config, setConfig] = useState({ 
    type: 'hiragana-text', count: 1, level: 'N5', topic: 'Self Introduction' 
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [charData, setCharData] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  
  // State mới: Theo dõi ô đang được Focus để gợi ý đúng chỗ
  const [focusedIndex, setFocusedIndex] = useState(null);
  // State mới: Lưu danh sách các ô đã dùng quyền trợ giúp
  const [hintUsedIndices, setHintUsedIndices] = useState({}); 

  const inputRefs = useRef([]);

  const startExercise = async () => {
    setIsLoading(true);
    setIsCompleted(false);
    setUserInputs({});
    setHintUsedIndices({}); // Reset gợi ý
    setCharData([]);
    
    try {
      const data = await generateQuizFill();
      setCharData(data);
    } catch (error) {
      message.error({
        content: 'Lỗi khi tạo bài tập. Vui lòng thử lại sau.' + error.message,
        icon: <QuestionCircleOutlined style={{ color: 'red' }} />,
        duration: 4,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (index, value) => {
    setUserInputs(prev => ({ ...prev, [index]: value.toLowerCase() }));
  };

  // Hàm xử lý Gợi ý
  const handleHint = () => {
    // 1. Xác định ô cần gợi ý: Ô đang focus hoặc ô trống đầu tiên tìm thấy
    let targetIndex = focusedIndex;
    
    // Nếu không có ô nào đang focus, tìm ô trống đầu tiên
    if (targetIndex === null || charData[targetIndex]?.type === 'punctuation') {
      targetIndex = charData.findIndex((item, idx) => 
        item.type === 'input' && !userInputs[idx]
      );
    }

    // Nếu vẫn không tìm thấy (đã điền hết) hoặc index không hợp lệ
    if (targetIndex === -1 || targetIndex === undefined) {
      message.info("Bạn đã điền hết các ô rồi!");
      return;
    }

    // 2. Điền đáp án
    const correctAnswer = charData[targetIndex].romaji;
    handleInputChange(targetIndex, correctAnswer);

    // 3. Đánh dấu là "Đã dùng gợi ý" (để đổi màu nền)
    setHintUsedIndices(prev => ({ ...prev, [targetIndex]: true }));
    
    // 4. Focus sang ô tiếp theo cho tiện
    const nextIndex = targetIndex + 1;
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      let nextIndex = index + 1;
      while (nextIndex < charData.length && charData[nextIndex].type === 'punctuation') {
        nextIndex++;
      }
      inputRefs.current[nextIndex]?.focus();
    } else if (e.key === 'Backspace' && !userInputs[index]) {
      e.preventDefault();
      let prevIndex = index - 1;
      while (prevIndex >= 0 && charData[prevIndex].type === 'punctuation') {
        prevIndex--;
      }
      inputRefs.current[prevIndex]?.focus();
    }
  };

  const checkAll = () => {
    const totalInputItems = charData.filter(i => i.type === 'input').length;
    let correctCount = 0;
    charData.forEach((item, index) => {
      if (item.type === 'input' && userInputs[index] === item.romaji) correctCount++;
    });

    if (correctCount === totalInputItems) {
      setIsCompleted(true);
      message.success("Tuyệt vời! Hoàn thành xuất sắc.");
    } else {
      message.warning(`Bạn đúng ${correctCount}/${totalInputItems} ký tự.`);
    }
  };

  if (charData.length === 0 && !isLoading) {
    return (
      <Card style={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
        <Title level={3}>Luyện đọc Hiragana</Title>
        <div style={{ marginTop: 20, textAlign: 'left' }}>
           <Text strong>Chủ đề:</Text>
           <Select value={config.topic} style={{ width: '100%', marginBottom: 20 }} onChange={v => setConfig({...config, topic: v})}>
            <Option value="Self Introduction">Giới thiệu bản thân</Option>
            <Option value="Daily Routine">Thói quen hàng ngày</Option>
            <Option value="Travel in Japan">Du lịch Nhật Bản</Option>
          </Select>
          <Button type="primary" size="large" block onClick={startExercise} loading={isLoading}>
            Bắt đầu luyện tập
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      {/* HEADER CÔNG CỤ */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Button icon={<RedoOutlined />} onClick={startExercise}>Đổi bài khác</Button>
        
        {/* NÚT GỢI Ý MỚI */}
        <Tooltip title="Điền đáp án cho ô đang chọn (hoặc ô trống đầu tiên)">
          <Button 
            type="dashed" 
            icon={<BulbOutlined style={{ color: '#faad14' }} />} 
            onClick={handleHint}
            disabled={isCompleted}
          >
            Gợi ý 1 từ
          </Button>
        </Tooltip>
      </div>

      <Card loading={isLoading} style={{ minHeight: 300 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 4px', alignItems: 'flex-end', lineHeight: 1.5 }}>
          {charData.map((item, index) => {
            if (item.type === 'punctuation') {
              return (
                <div key={index} style={{ fontSize: 32, fontWeight: 'bold', paddingBottom: 28, width: 20, textAlign: 'center' }}>
                  {item.char}
                </div>
              );
            }

            // Logic màu sắc
            const isCorrect = userInputs[index] === item.romaji;
            const isFilled = !!userInputs[index];
            const isHinted = hintUsedIndices[index]; // Kiểm tra xem có dùng gợi ý không

            let borderColor = '#d9d9d9';
            let bgColor = '#fff';

            if (isFilled) {
              if (isHinted) {
                // Màu vàng nhạt cho ô dùng gợi ý
                borderColor = '#faad14'; 
                bgColor = '#fffbe6';
              } else {
                // Màu xanh/đỏ cho tự làm
                borderColor = isCorrect ? '#52c41a' : '#ff4d4f';
                bgColor = isCorrect ? '#f6ffed' : '#fff1f0';
              }
            }

            return (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40 }}>
                {/* Cho phép hover vào chữ để xem đáp án (Tooltip) */}
                <Tooltip title={item.romaji} trigger="hover">
                  <div style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 4, cursor: 'help' }}>
                    {item.char}
                  </div>
                </Tooltip>
                
                <input
                  ref={el => inputRefs.current[index] = el}
                  value={userInputs[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  // Cập nhật focusedIndex khi người dùng bấm vào ô
                  onFocus={() => setFocusedIndex(index)}
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
          })}
        </div>
      </Card>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
         {isCompleted ? (
           <Button type="primary" size="large" icon={<CheckCircleOutlined />} style={{ background: '#52c41a' }}>Hoàn thành</Button>
         ) : (
           <Button type="primary" size="large" onClick={checkAll} style={{ width: 200 }}>Kiểm tra kết quả</Button>
         )}
      </div>
    </div>
  );
};

export default HiraganaPractice;