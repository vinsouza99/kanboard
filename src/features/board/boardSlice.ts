import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { BoardState, ColumnType, Task } from "./types";
import { nanoid } from "nanoid";

const initialState: BoardState = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "384y3984032",
          title: "Test",
          description: "Test task",
          createdAt: new Date().toISOString(),
        },
      ],
    },
    inProgress: { id: "inProgress", title: "In Progress", tasks: [] },
    done: { id: "done", title: "Done", tasks: [] },
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ columnId: ColumnType; task: Task }>
    ) => {
      const task: Task = {
        id: nanoid(),
        title: action.payload.task.title,
        description: action.payload.task.description || "",
        createdAt: new Date().toISOString(),
      };
      state.columns[action.payload.columnId].tasks.push(task);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        from: ColumnType;
        to: ColumnType;
        taskId: string;
      }>
    ) => {
      console.log(
        `Moving task ${action.payload.taskId} from ${action.payload.from} to ${action.payload.to}`
      );
      if (action.payload.from === action.payload.to) return;

      const fromTasks = state.columns[action.payload.from].tasks;
      const toTasks = state.columns[action.payload.to].tasks;
      console.log(
        `From tasks: ${JSON.stringify(fromTasks)}, To tasks: ${JSON.stringify(
          toTasks
        )}`
      );
      const taskIndex = fromTasks.findIndex(
        (t) => t.id === action.payload.taskId
      );
      console.log(`Task index: ${taskIndex}`);
      if (taskIndex === -1) return;

      const [task] = fromTasks.splice(taskIndex, 1);
      console.log(`Task moved: ${JSON.stringify(task)}`);
      toTasks.push(task);
      console.log(
        `Task added to ${action.payload.to}: ${JSON.stringify(toTasks)}`
      );
    },
    deleteTask: (
      state,
      action: PayloadAction<{
        from: ColumnType;
        taskId: string;
      }>
    ) => {
      const fromTasks = state.columns[action.payload.from].tasks;
      const taskIndex = fromTasks.findIndex(
        (t) => t.id === action.payload.taskId
      );
      const [task] = fromTasks.splice(taskIndex, 1);
      console.log(`Task '${task.title}' deleted from ${action.payload.from}`);
    },
    editTask: (
      state,
      action: PayloadAction<{
        from: ColumnType;
        updatedTask: Task;
      }>
    ) => {
      const columnTasks = state.columns[action.payload.from].tasks;
      const taskIndex = columnTasks.findIndex(
        (t) => t.id === action.payload.updatedTask.id
      );
      delete columnTasks[taskIndex];
      columnTasks[taskIndex] = {
        ...action.payload.updatedTask,
      };
      console.log(`Task '${action.payload.updatedTask.title}' updated`);
    },
  },
});

export const { addTask, moveTask, deleteTask, editTask } = boardSlice.actions;
export default boardSlice.reducer;
