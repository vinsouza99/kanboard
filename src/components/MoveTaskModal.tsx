import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../features/board/boardSlice";
import type { AppDispatch } from "../app/store";
import type { Task } from "../features/board/types";
import { FaRightLeft } from "react-icons/fa6";

type Props = {
  columnId: "todo" | "inProgress" | "done";
  onClose: () => void;
  task: Task;
};

const MoveTaskModal: React.FC<Props> = ({ columnId, onClose, task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [to, setTo] = useState(columnId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`Moving task ${task.id} from ${columnId} to ${to}`);

    if (columnId !== to) {
      dispatch(
        moveTask({
          from: columnId,
          to: to, // Assuming we are moving to "todo" column, adjust as needed
          taskId: task.id,
        })
      );
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white/75 rounded-lg shadow-lg p-6 w-96 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Move Task
        </h2>
        <h3>{task.title}</h3>
        <div className="flex gap-5">
          <input
            type="text"
            id="from"
            value={
              columnId === "todo"
                ? "To Do"
                : columnId === "inProgress"
                ? "In Progress"
                : columnId === "done"
                ? "Done"
                : ""
            }
            className="bg-amber-50/100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            disabled
          />
          <div className="flex items-center justify-center">
            <FaRightLeft className="text-gray-500 text-md" />
          </div>
          <select
            id="lists"
            value={to}
            className="bg-amber-50/100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) =>
              setTo(e.target.value as "todo" | "inProgress" | "done")
            }
          >
            <option value={columnId}>Choose a list</option>
            {columnId !== "todo" && <option value="todo">To Do</option>}
            {columnId !== "inProgress" && (
              <option value="inProgress">In Progress</option>
            )}
            {columnId !== "done" && <option value="done">Done</option>}
          </select>
        </div>

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
            Move
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoveTaskModal;
