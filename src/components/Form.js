import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import MyContext from "./Context/MyContext";

const ToDosContainer = () => {
  const { toDos, addItem } = useContext(MyContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(value);
    setValue("");
  };

  const toDoItems = toDos.map((el) => {
    return <ToDoItem item={el} key={el.id}></ToDoItem>;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" value="ADD" />
      </form>
      <div>
        <h3>TO DO</h3>
        {toDos.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
