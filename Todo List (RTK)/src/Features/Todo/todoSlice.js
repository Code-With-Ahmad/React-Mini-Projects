import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todoToToggle = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },

    updateTodo: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToUpdate) {
        todoToUpdate.isEditable = action.payload.isEditable;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
