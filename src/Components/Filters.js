import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus, toggleFilterColor } from "../slices/todosSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filterColors = useSelector((state) => state.todos.filterColors);
  const todos = useSelector((state) => state.todos.todos);
  

  const toggleColor = (color) => {
    dispatch(toggleFilterColor(color));
  };
 const remainingTodos = todos.filter((todo) => !todo.completed).length;


  return (
    <>
    <div>
      <h3 className="font-semibold">Filter by Status</h3>
      <div className="flex gap-3 my-2">
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => dispatch(setFilterStatus(status))}
            className="text-blue-500"
          >
            {status}
          </button>
        ))}
      </div>

      <h3 className="font-semibold">Filter by Color</h3>
      <div className="flex gap-3">
        {["Green", "Blue", "Purple", "Orange", "Red"].map((color) => (
          <label key={color} className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => toggleColor(color)}
              checked={filterColors.includes(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
    <div className="text-lg font-semibold mt-5">
    {remainingTodos > 0
      ? `Remaining Todos: ${remainingTodos}`
      : "All todos are completed!"}
  </div>
  </>
  );
};

export default Filters;
