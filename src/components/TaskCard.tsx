import React, { useState, useRef, useEffect } from "react";
import type { ColumnType, Task } from "../features/board/types";
import {
  FaEllipsis,
  FaPencil,
  FaTrash,
  FaRightLeft,
  FaEye,
} from "react-icons/fa6";
import { useDraggable } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/board/boardSlice";
import EditTaskModal from "./EditTaskModal";
import MoveTaskModal from "./MoveTaskModal";
import ViewTaskModal from "./ViewTaskModal";

type Props = {
  task: Task;
  fromColumn: ColumnType;
};

const TaskCard: React.FC<Props> = ({ task, fromColumn }) => {
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: {
        fromColumn,
      },
    });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [moveModalOpen, setMoveModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    opacity: isDragging ? 0.7 : 1,
  };
  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleView = () => {
    setMenuOpen(false);
    setViewModalOpen(true);
  };

  const handleEdit = () => {
    setMenuOpen(false);
    setEditModalOpen(true);
  };

  const handleMove = () => {
    setMenuOpen(false);
    setMoveModalOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteTask({ from: fromColumn, taskId: task.id }));
    setMenuOpen(false);
    console.log(`Deleted task ${task.id}`);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white/75 rounded-lg shadow-md mb-3 cursor-grab flex"
    >
      <div
        {...listeners}
        {...attributes}
        className="taskCard flex flex-col flex-grow-2 p-4"
      >
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        {task.description && (
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        )}
      </div>
      <div className="flex flex-shrink-1">
        <div className="flex-shrink-0 relative" ref={menuRef}>
          <button
            className="task-menu-btn text-gray-500 p-2 hover:text-gray-800 focus:outline-none rounded-full hover:bg-gray-100 cursos-pointer"
            onClick={(e) => {
              e.stopPropagation(); // prevent click bubbling
              e.preventDefault();
              setMenuOpen((prev) => !prev);
            }}
          >
            <FaEllipsis />
          </button>

          {menuOpen && (
            <div className="absolute -right-25 top-8 w-32 bg-white shadow-lg rounded-md border-gray-50 z-50">
              <ul className="list-none m-0 p-0">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-600 cursor-pointer"
                    onClick={handleView}
                  >
                    <FaEye className="inline mr-2" />
                    View
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-600 cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaPencil className="inline mr-2" />
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-600 cursor-pointer"
                    onClick={handleMove}
                  >
                    <FaRightLeft className="inline mr-2" />
                    Move
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-sm text-gray-600 cursor-pointer"
                    onClick={handleDelete}
                  >
                    <FaTrash className="inline mr-2" />
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {editModalOpen && (
        <EditTaskModal
          columnId={fromColumn}
          onClose={() => setEditModalOpen(false)}
          task={task}
        />
      )}
      {moveModalOpen && (
        <MoveTaskModal
          columnId={fromColumn}
          onClose={() => setMoveModalOpen(false)}
          task={task}
        />
      )}
      {viewModalOpen && (
        <ViewTaskModal
          columnId={fromColumn}
          onClose={() => setViewModalOpen(false)}
          task={task}
        />
      )}
    </div>
  );
};

export default TaskCard;
