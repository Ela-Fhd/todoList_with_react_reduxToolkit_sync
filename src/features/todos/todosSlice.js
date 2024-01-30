import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("TODOS")) || [],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        data: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("TODOS", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
      localStorage.setItem("TODOS", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("TODOS", JSON.stringify(state.todos));
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
