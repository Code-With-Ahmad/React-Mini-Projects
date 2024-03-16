// TodoItem.jsx
import { useEffect, useState } from "react";
import { useTodo } from "./Contexts";

const TodoItem = ({ value }) => {
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const [editable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState(value.value);

  const toggleCompleted = () => {
    toggleComplete(value.id);
  };

  const editTodo = () => {
    updateTodo(value.id, { ...value, value: editValue });
  };

  useEffect(() => {
    if (value.completed) {
      setIsEditable(false);
    }
  }, [value.completed]);

  return (
    <div className={`task ${value.completed ? "Complete" : "InComplete"}`}>
      <div className="taskValue">
        <input
          type="checkbox"
          checked={value.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          readOnly={!editable}
          value={editValue}
          className={`${value.completed ? "Complete" : "InComplete"} ${
            value.completed ? "" : editable ? "editVal" : ""
          }`}
          onChange={(e) => {
            if (!value.completed) {
              setEditValue(e.target.value);
            }
          }}
        />
      </div>
      <div className="taskStatus">
        <div className="edit">
          <button
            disabled={value.completed}
            onClick={() => {
              setIsEditable(!editable);
              editTodo();
            }}
          >
            {editable ? "📁" : "✏️"}
          </button>
        </div>
        <div className="cancel">
          <button onClick={() => deleteTodo(value.id)}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
