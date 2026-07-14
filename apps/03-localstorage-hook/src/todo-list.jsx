import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './use-local-storage';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos, removeTodos] = useLocalStorage('todolist', []);

  const handleAddNewTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: uuidv4(), text: newTodo, done: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (todoToToggle) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === todoToToggle.id) {
          return {
            ...todoToToggle,
            done: !todoToToggle.done,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleTodo(todo)}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && <button onClick={removeTodos}>Clear All</button>}
    </div>
  );
};

export default TodoList;
