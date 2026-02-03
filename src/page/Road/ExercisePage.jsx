import { Button, message } from "antd";

const ExercisePage = ({ task, updateTaskProgress }) => {
  const handleFinish = () => {
    if (task.progress < task.maxProgress) {
      updateTaskProgress(task.id, task.progress + 1);
      message.success("Hoàn thành bài! +1 level 🚀");
    }
  };

  return (
    <>
      {/* nội dung bài tập */}

      <Button
        type="primary"
        onClick={handleFinish}
        disabled={task.progress === task.maxProgress}
      >
        Hoàn thành bài
      </Button>
    </>
  );
};
