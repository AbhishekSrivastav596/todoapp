import React from "react";

const TodoItem = ({ todo, toggleComplete, changeColor, deleteTodo }) => {
  return (
    <li className="flex items-center gap-3 mb-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        className="h-5 w-5"
      />
      <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>
      <select
        value={todo.color}
        onChange={(e) => changeColor(e.target.value)}
        className="border rounded px-2"
      >
        <option value="">Select Color</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Orange">Orange</option>
        <option value="Red">Red</option>
      </select>
      <button onClick={deleteTodo} className="text-red-500 hover:text-red-700">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
