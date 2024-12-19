import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleComplete, changeColor, deleteTodo } from "../slices/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const filterColors = useSelector((state) => state.todos.filterColors);

  const inputRef = useRef(null);

  const handleAddTask = () => {
    const taskText = inputRef.current.value.trim();
    if (taskText) {
      dispatch(addTodo(taskText));
      inputRef.current.value = "";
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "Active" && todo.completed) return false;
    if (filterStatus === "Completed" && !todo.completed) return false;
    if (filterColors.length > 0 && !filterColors.includes(todo.color)) return false;
    return true;
  });



  return (
    <>
    <div>
      <div className="flex mb-5 gap-3 ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task..."
          className="flex-grow px-40 py-2 border rounded-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>
      
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => dispatch(toggleComplete(todo.id))}
            changeColor={(color) => dispatch(changeColor({ id: todo.id, color }))}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  </>
  );
};

export default TodoList;
