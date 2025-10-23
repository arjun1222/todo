import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const filters = [
    { value: 'all', color: 'bg-blue-500', borderColor: 'border-blue-500' },
    { value: 'low', color: 'bg-green-500', borderColor: 'border-green-500' },
    { value: 'medium', color: 'bg-yellow-500', borderColor: 'border-yellow-500' },
    { value: 'high', color: 'bg-red-500', borderColor: 'border-red-500' },
  ];

  return (
    <div className="flex justify-center my-4">
      {filters.map(({ value, color, borderColor }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-4 py-2 mx-2 rounded-md ${
            filter === value
              ? `${color} text-white`
              : `border ${borderColor} text-gray-700`
          }`}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;