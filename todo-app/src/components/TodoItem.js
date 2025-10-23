import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  const priorityColor = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500',
  };

  return (
    <div className={`p-4 my-2 rounded-lg shadow-md ${priorityColor[todo.priority]}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{todo.title}</h3>
          <p className="text-sm">{todo.description}</p>
        </div>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;