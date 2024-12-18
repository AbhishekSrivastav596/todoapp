import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo, changeColor } from "../slices/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between gap-4 border-b py-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="h-5 w-5"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <select
          value={todo.color || ""}
          onChange={(e) =>
            dispatch(changeColor({ id: todo.id, color: e.target.value }))
          }
          className="p-1 border rounded"
        >
          <option value="">Color</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
        </select>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
