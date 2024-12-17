import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, changeColor, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          changeColor={changeColor}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
