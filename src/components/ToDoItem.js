import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

function ToDoItem({ item }) {
  const { updateItem } = useContext(MyContext);
  return (
    <div className="todo-item">
      <p>{item.text}</p>
      <div className="actions">
        <button className="btn" onClick={() => updateItem(item.id)}>
          &#10004;
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
