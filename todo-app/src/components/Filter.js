import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setFilter('all')}
        className="px-4 py-2 mx-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        All
      </button>
      <button
        onClick={() => setFilter('low')}
        className="px-4 py-2 mx-2 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Low
      </button>
      <button
        onClick={() => setFilter('medium')}
        className="px-4 py-2 mx-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
      >
        Medium
      </button>
      <button
        onClick={() => setFilter('high')}
        className="px-4 py-2 mx-2 text-white bg-red-500 rounded-md hover:bg-red-600"
      >
        High
      </button>
    </div>
  );
};

export default Filter;