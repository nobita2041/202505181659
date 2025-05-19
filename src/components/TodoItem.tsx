import React from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button
        className="delete-button"
        onClick={() => removeTodo(todo.id)}
      >
        削除
      </button>
    </li>
  );
};

export default TodoItem;