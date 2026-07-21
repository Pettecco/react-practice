import { createContext, useReducer } from 'react';
import { Todo, TodoStatus } from '../types/todo';

export interface KanbanContextType {
  state: KanbanState;
  dispatch: React.Dispatch<KanbanAction>;
}

interface KanbanProviderProps {
  children: React.ReactNode;
  initialTodos: Todo[];
}

interface KanbanState {
  todos: Todo[];
}

export type KanbanAction =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'MOVE_TODO'; payload: { todoId: number; newStatus: TodoStatus } }
  | { type: 'DELETE_TODO'; payload: number };

export function reducer(state: KanbanState, action: KanbanAction): KanbanState {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };

    case 'MOVE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, status: action.payload.newStatus }
            : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

export const KanbanContext = createContext<KanbanContextType | null>(null);

export function KanbanProvider({
  children,
  initialTodos,
}: KanbanProviderProps) {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos });

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
}
