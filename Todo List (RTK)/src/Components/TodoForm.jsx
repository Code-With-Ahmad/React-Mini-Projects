import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";
const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    if (input) {
      dispatch(addTodo(input));
    }
    setInput("");
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="todoForm">
        <input
          type="text"
          placeholder="Write Todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
