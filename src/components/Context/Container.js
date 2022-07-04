import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "./MyContext";

const Container = (props) => {
  const tasks = [];

  const [items, setItems] = useState(tasks);
  const [value, setValue] = useState("");

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

  const restoreItem = () => {
    // We need to toggle the status of the item with `done`.
    const restoreItems = items.map((item) => {
      if (item.done) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    setItems(restoreItems);
    localStorage.setItem("todos", JSON.stringify(restoreItems));
  };

  const removeItem = (id) => {
    const remove = items.filter((item) => item.id !== id);
    console.log(remove);
    if (remove) {
      localStorage.removeItem("todos");
    }
    setItems(remove);
    localStorage.setItem("todos", JSON.stringify(remove));
  };

  const addItem = (value) => {
    const newItem = { id: uuidv4(), text: value, done: false };
    const updatedtasks = [...items, newItem];

    setItems(updatedtasks);
    localStorage.setItem("todos", JSON.stringify(updatedtasks));
  };

  const toDos = items.filter((item) => !item.done);
  const toDones = items.filter((item) => item.done);

  const showLengthToDoItems = () => {
    const tasks =
      toDos.length === 1 ? `${toDos.length} task` : `${toDos.length} tasks`;
    return tasks;
  };

  const showLengthtoDoneItems = () => {
    const showDeletedTasks =
      toDones.length === 1
        ? `${toDones.length} task`
        : `${toDones.length} tasks`;
    return showDeletedTasks;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // value.trim() => prevent "spaced" Tasks
    if (value.trim()) addItem(value);
    setValue("");
  };

  const STYLES = {
    todo: {
      // margin: "1rem",
      // border: "1rem double #f00",
      // borderRadius: "2rem",
    },
    done: {
      border: "1px solid #0ff",
      backgroundColor: "#0ff",
    },
    todoText: {
      textAlign: "center",
      margin: "0",
      padding: "0 0 1rem 0",
      backgroundColor: "#0ff",
    },
    doneText: {
      textAlign: "center",
      padding: "0 0 1rem 0",
      borderTop: "1rem solid #0ff",
      backgroundColor: "#0ff",
    },
  };

  return (
    <MyContext.Provider
      value={{
        // addItem,
        updateItem,
        toDos,
        toDones,
        restoreItem,
        removeItem,
        showLengthToDoItems,
        showLengthtoDoneItems,
        handleSubmit,
        value,
        setValue,
        STYLES,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
