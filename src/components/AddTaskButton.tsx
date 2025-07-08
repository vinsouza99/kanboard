import React from "react";

type Props = {
  onClick: () => void;
};

const AddTaskButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="min-w-full bg-gray-50/50 border-2 hover:border-transparent border-dashed border-amber-500/50 text-black font-semibold rounded-lg px-4 py-2 hover:bg-gray-100 hover:shadow hover:cursor-pointer transition-colors duration-300"
    >
      + Add Task
    </button>
  );
};

export default AddTaskButton;
