import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  markAllCompleted,
  clearCompleted,
} from "../slices/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const inputRef = useRef(null);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask) {
      dispatch(addTodo(newTask));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="p-6 bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto mt-10">
     

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          ref={inputRef}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => dispatch(markAllCompleted())}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Mark All Completed
        </button>
        <button
          onClick={() => dispatch(clearCompleted())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
