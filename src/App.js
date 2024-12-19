import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./Components/TodoList";
import Actions from "./Components/Actions";
import Filters from "./Components/Filters";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-3xl mx-auto mt-10 p-5 bg-gray-50 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-5">Todos</h1>

        <div className="flex mb-5 gap-3">
          <TodoList />
        </div>
        <Actions />
        <Filters />
      </div>
    </Provider>
  );
}

export default App;
