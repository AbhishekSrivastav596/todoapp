import React from "react";
import { useDispatch } from "react-redux";
import { markAllCompleted, clearCompleted } from "../slices/todosSlice";

const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 my-5">
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
      >
        Mark All Completed
      </button>
      <button
        onClick={() => dispatch(clearCompleted())}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Actions;
