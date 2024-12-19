import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filterStatus: "All", 
  filterColors: [], 
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        color: "",
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    changeColor: (state, action) => {
      const { id, color } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.color = color;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    markAllCompleted: (state) => {
      state.todos.forEach((todo) => (todo.completed = true));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    toggleFilterColor: (state, action) => {
      const color = action.payload;
      if (state.filterColors.includes(color)) {
        state.filterColors = state.filterColors.filter((c) => c !== color);
      } else {
        state.filterColors.push(color);
      }
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  changeColor,
  deleteTodo,
  markAllCompleted,
  clearCompleted,
  setFilterStatus,
  toggleFilterColor,
} = todosSlice.actions;

export default todosSlice.reducer;
