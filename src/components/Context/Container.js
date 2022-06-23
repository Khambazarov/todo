import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

export default Container = (props) => {
  const tasks = [
    { id: 0, text: "Wash my face!", done: false },
    { id: 1, text: "Walk the dog", done: false },
    { id: 2, text: "Pay the rent", done: false },
    { id: 3, text: "Make so moneys", done: false },
    { id: 4, text: "Make a website", done: true },
  ];

  const [items, setItems] = useState(tasks);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("todos"));

    if (tasks) {
      setItems(tasks);
    }
  }, []);

  const updateItem = (id) => {
    // We need to toggle the status of the item with `id`.
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    setItems(updatedItems);
    localStorage.setItem("todos", JSON.stringify(updatedItems));
  };

  const addItem = (value) => {
    const newItem = { id: items.length, text: value, done: false };
    const updatedtasks = [newItem, ...items];
    setItems(updatedtasks);
    localStorage.setItem("todos", JSON.stringify(updatedtasks));
  };

  const toDos = items.filter((el) => !el.done);
  const toDones = items.filter((el) => el.done);

  return (
    <MyContext.Provider value={{ addItem, updateItem, toDos, toDones }}>
      {props.children}
    </MyContext.Provider>
  );
};
