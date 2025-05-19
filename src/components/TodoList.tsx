import React from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  if (todos.length === 0) {
    return <p className="empty-message">タスクがありません</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;