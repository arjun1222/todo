import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import Filter from './Filter';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoList = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return todo.priority === filter;
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-bold text-center">Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      {todos.length > 0 && <Filter filter={filter} setFilter={setFilter} />}
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;