import React from "react";
import { useSelector } from "react-redux";
import Column from "./Column";
import { useDispatch } from "react-redux";
import { moveTask } from "../features/board/boardSlice";
import type { RootState, AppDispatch } from "../app/store";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";

import type { ColumnType } from "../features/board/types";

const Board: React.FC = () => {
  const columns = useSelector((state: RootState) => state.board.columns);
  const dispatch = useDispatch<AppDispatch>();
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id.toString();
    const from = active.data?.current?.fromColumn as ColumnType;
    const to = over.id.toString() as ColumnType;

    if (from !== to) {
      dispatch(moveTask({ from, to, taskId }));
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-wrap gap-6 p-6 min-h-50 align-baseline items-baseline overflow-x-hidden">
        {Object.values(columns).map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;
