import React, { useState } from "react";
import { useTodo } from "./Contexts";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useTodo();
  function submitHandler(e) {
    e.preventDefault();
    if (value !== "") {
      addTodo({ value, completed: false });
      setValue("");
    } else {
      return;
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="todoForm">
        <input
          type="text"
          placeholder="Write Todo"
          value={value}
          onChange={(e) => {
            return setValue(e.target.value);
          }}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
