import React, { useState } from "react";
import type { Column as ColumnType } from "../features/board/types";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import AddTaskModal from "./AddTaskModal";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  column: ColumnType;
};

const Column: React.FC<Props> = ({ column }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  const handleAddClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      ref={setNodeRef}
      className={`rounded-lg min-h-7/12 shadow-md p-4 w-80 flex-shrink-1 transition-normal transition-colors ${
        isOver ? "bg-gray-100/75" : "bg-gray-100/50"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-center uppercase text-gray-700">
        {column.title}
      </h2>
      <div className="flex flex-col gap-3 mb-4 min-h-16">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} fromColumn={column.id} />
        ))}
      </div>
      {column.title === "To Do" && <AddTaskButton onClick={handleAddClick} />}
      {isModalOpen && (
        <AddTaskModal columnId="todo" onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Column;
