// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
import { TodoProvider } from "./Components/Contexts";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previousValue) => {
      return [...previousValue, { id: Date.now(), ...todo }];
    });
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="container">
        <h1>Manage Your Todos</h1>
        <TodoForm />
        {todos.map((item) => (
          <TodoItem key={item.id} value={item} />
        ))}
      </div>
    </TodoProvider>
  );
};

export default App;
