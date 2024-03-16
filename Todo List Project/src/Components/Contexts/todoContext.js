// Importing CreateContext , useContext From React
import { createContext, useContext } from "react";

// Exporting Our Own Created Context
export const TodoContext = createContext({
  // Add New Todo Function (This func will take {todo}) :
  addTodo: (todo) => {},
  // Update Todo Function (This func will take {id , todo}) :
  updateTodo: (id, todo) => {},
  // Delete Todo Function (This func will take {id})
  deleteTodo: (id) => {},
  // toogle Complete Status (This func will take {id})
  toggleComplete: (id) => {},
});

// Exporting our Context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Exporting our Context Provider
export const TodoProvider = TodoContext.Provider;
