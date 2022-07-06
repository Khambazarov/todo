import React, { useState, useEffect, useId } from "react";
import { v4 as uuid } from "uuid";
import MyContext from "./MyContext";

const Container = (props) => {
  const tasks = [];

  const [items, setItems] = useState(tasks);
  const [value, setValue] = useState("");
  const ID = useId();
  const UUID = uuid();
  // const [favourite, setFavourite] = useState(false);

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
    const newItem = {
      // id: uuidv4(),
      id: `${ID}${UUID}`,
      text: value,
      done: false,
      favourite: false,
    };
    const updatedtasks = [...items, newItem];

    setItems(updatedtasks);
    localStorage.setItem("todos", JSON.stringify(updatedtasks));
  };

  const toDos = items.filter((item) => !item.done);
  const toDones = items.filter((item) => item.done);

  /*** ↓↓↓↓↓ TEST FIELD BELLOW ↓↓↓↓↓ TEST FIELD BELLOW ↓↓↓↓↓ ***/

  // const fav = items.filter((item) => !item.favourite);
  // const noFav = items.filter((item) => item.favourite);
  // console.log("fav", fav);
  // console.log("noFav", noFav);

  // const toggleFav = () => {
  //   setFavourite(!favourite);
  //   updateFavItem();
  // };

  // const updateFavItem = () => {
  //   const updatedFavItems = items.map((item) => {
  //     console.log("tnnn", item);
  //     if (item.favourite) {
  //       item.favourite = !item.favourite;
  //       return item;
  //     } else return item;
  //   });

  //   setItems(updatedFavItems);
  //   localStorage.setItem("todos", JSON.stringify(updatedFavItems));
  // };

  /*** ↑↑↑↑↑ TEST FIELD ABOVE ↑↑↑↑↑ TEST FIELD ABOVE ↑↑↑↑↑ ***/

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
    // HADI's FN
  };

  const STYLES = {
    todo: {
      color: "#1565c0",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    done: {
      border: "1px solid #0ff",
      backgroundColor: "#0ff",
      color: "#1565c0",
      textDecoration: "line-through solid red 20%",
    },
    todoText: {
      textAlign: "start",
      margin: "0 0 0 1rem",
      padding: "1rem 0 0 0",
      backgroundColor: "#0ff",
      color: "#1565c0",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    doneText: {
      textAlign: "start",
      margin: "0 0 0 1rem",
      // padding: "0 0 1rem 0",
      borderTop: "1rem solid #0ff",
      backgroundColor: "#0ff",
      color: "#1565c0",
      fontWeight: "bold",
      fontSize: "1.5rem",
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
