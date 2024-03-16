import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../Features/Todo/todoSlice";
import { useEffect, useState } from "react";

const TodoItem = ({ value }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [values, setValue] = useState(value.text);
  useEffect(() => {
    dispatch(toggleTodo(value.id));
    setIsEditable(false);
  }, [checked]);

  const handleEditToggle = () => {
    dispatch(
      updateTodo({
        id: value.id,
        isEditable: !isEditable,
        task: values,
      })
    );
    setIsEditable(!isEditable);
  };

  return (
    <div className={`task ${checked ? "Complete" : "InComplete"}`}>
      <div className="taskValue">
        <input
          type="checkbox"
          readOnly={isEditable}
          value={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <input
          type="text"
          value={values}
          className={`${checked ? "Complete" : ""} ${
            checked ? "" : isEditable ? "border" : ""
          }`}
          readOnly={!isEditable}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="taskStatus">
        <div className="edit">
          <button onClick={handleEditToggle} disabled={checked}>
            {isEditable ? "📁" : "✏️"}
          </button>
        </div>
        <div className="cancel">
          <button onClick={() => dispatch(removeTodo(value.id))}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
