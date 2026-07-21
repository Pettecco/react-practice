export type TodoStatus = 'to-do' | 'in-progress' | 'done';

export interface Todo {
  id: number;
  text: string;
  status: TodoStatus;
}
