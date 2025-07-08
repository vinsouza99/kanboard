import React from "react";
import type { Task } from "../features/board/types";

type Props = {
  columnId: "todo" | "inProgress" | "done";
  onClose: () => void;
  task: Task;
};

const ViewTaskModal: React.FC<Props> = ({ onClose, task }) => {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white/75 rounded-lg shadow-lg p-6 w-96 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Task Details
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-700">{task.title}</h3>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <p className="text-gray-500 mt-2">
            <strong>Created At:</strong>
            {new Date(task.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;
