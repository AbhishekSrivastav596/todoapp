import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./Components/TodoList"

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-red-500 py-6">
          Todo App
        </h1>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
