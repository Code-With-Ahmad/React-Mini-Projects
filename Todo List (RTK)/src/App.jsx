import React from "react";
import TodoForm from "./Components/TodoForm";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container">
      <h1>Manage Your Todos</h1>
      <TodoForm />

      {todos.map((item, i) => (
        <div key={i}>
          <TodoItem value={item} />
        </div>
      ))}
    </div>
  );
};

export default App;
