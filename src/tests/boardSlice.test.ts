/*
import reducer, { addTask, moveTask } from "../features/board/boardSlice";

test("should add a task to the correct column", () => {
  const state = reducer(
    undefined,
    addTask({ columnId: "todo", title: "New Task" })
  );
  expect(state.columns.todo.tasks).toHaveLength(1);
  expect(state.columns.todo.tasks[0].title).toBe("New Task");
});

test("should move a task between columns", () => {
  let state = reducer(
    undefined,
    addTask({ columnId: "todo", title: "Task A" })
  );
  const taskId = state.columns.todo.tasks[0].id;

  state = reducer(state, moveTask({ from: "todo", to: "done", taskId }));

  expect(state.columns.todo.tasks).toHaveLength(0);
  expect(state.columns.done.tasks).toHaveLength(1);
  expect(state.columns.done.tasks[0].id).toBe(taskId);
});
*/