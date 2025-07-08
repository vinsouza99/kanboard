import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/board/boardSlice";
import type { AppDispatch } from "../app/store";
import type { Task } from "../features/board/types";

type Props = {
  columnId: "todo" | "inProgress" | "done";
  onClose: () => void;
  task: Task;
};

const EditTaskModal: React.FC<Props> = ({ columnId, onClose, task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [taskId] = useState(task.id);
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [createdAt] = useState(task.createdAt || new Date().toISOString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(
      editTask({
        from: columnId,
        updatedTask: {
          id: taskId,
          title: title,
          description: description,
          createdAt: createdAt,
        },
      })
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white/75 rounded-lg shadow-lg p-6 w-96 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Edit Task
        </h2>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 hover:cursor-pointer"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;
