export type Task = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
};

export type ColumnType = "todo" | "inProgress" | "done";

export type Column = {
  id: ColumnType;
  title: string;
  tasks: Task[];
};

export type BoardState = {
  columns: Record<ColumnType, Column>;
};
