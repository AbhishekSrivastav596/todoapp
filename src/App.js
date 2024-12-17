import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import Actions from "./Components/Actions";
import Filters from "./Components/Filters";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterColors, setFilterColors] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: newTask,
        completed: false,
        color: "",
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeColor = (id, color) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, color } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "Active" && todo.completed) return false;
    if (filterStatus === "Completed" && !todo.completed) return false;
    if (filterColors.length > 0 && !filterColors.includes(todo.color))
      return false;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-gray-50 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-5">Todos</h1>

      <div className="flex mb-5 gap-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md"
        />
        <button
          onClick={addTask}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        changeColor={changeColor}
        deleteTodo={deleteTodo}
      />
      <Actions
        markAllCompleted={markAllCompleted}
        clearCompleted={clearCompleted}
      />
      <Filters
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterColors={filterColors}
        setFilterColors={setFilterColors}
      />
    </div>
  );
}

export default App;
