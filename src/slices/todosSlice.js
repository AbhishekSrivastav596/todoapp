import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
  
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        color: '',
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    changeColor: (state, action) => {
      const { id, color } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.color = color;
    },
    markAllCompleted: (state) => {
      state.todos.forEach((todo) => (todo.completed = true));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  changeColor,
  markAllCompleted,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
