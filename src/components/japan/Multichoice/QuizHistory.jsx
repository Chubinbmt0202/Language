import React from "react";
import { Card, Button, List, Tag, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const QuizHistory = ({ historyList, onRetry, onClear }) => {
  return (
    <Card
      title={`Đã lưu ${historyList.length} đề thi`}
      extra={
        <Button
          icon={<DeleteOutlined />}
          danger
          size="small"
          onClick={onClear}
        >
          Xóa hết
        </Button>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={historyList}
        pagination={{ pageSize: 5 }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => onRetry(item)}>
                Làm lại
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Tag color="blue">{item.config.level}</Tag>}
              title={
                <span>
                  {item.config.topic}{" "}
                  <span style={{ color: "#999", fontSize: 12 }}>
                    ({item.questions.length} câu)
                  </span>
                </span>
              }
              description={item.date}
            />
          </List.Item>
        )}
        locale={{ emptyText: <Empty description="Chưa có dữ liệu" /> }}
      />
    </Card>
  );
};

export default QuizHistory;