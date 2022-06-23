import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

const ToDoItem = ({ item }) => {
  const { updateItem } = useContext(MyContext);
  return (
    <div>
      <p>{item.text}</p>
      <div>
        <button onClick={() => updateItem(item.id)}>&#10004;</button>
      </div>
    </div>
  );
};

export default ToDoItem;
