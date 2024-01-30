import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todosSlice";
import themeSlice from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeSlice,
  },
});

export default store;
