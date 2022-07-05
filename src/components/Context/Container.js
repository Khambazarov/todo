import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "./MyContext";

const Container = (props) => {
  const tasks = [];

  const [items, setItems] = useState(tasks);
  const [value, setValue] = useState("");
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
    const newItem = {
      id: uuidv4(),
      text: value,
      done: false,
      favourite: false,
    };
    const updatedtasks = [...items, newItem];
    // console.log({ items });
    // console.log({ newItem });

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
        ? `restore ${toDones.length} task`
        : `restore ${toDones.length} tasks`;
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
      color: "#1565c0",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    done: {
      border: "1px solid #0ff",
      backgroundColor: "#0ff",
      color: "#1565c0",
    },
    todoText: {
      textAlign: "start",
      margin: "0 0 0 1rem",
      padding: "1rem 0 0 0",
      backgroundColor: "#0ff",
      color: "#1565c0",
      fontWeight: "bold",
      fontSize: "2rem",
    },
    doneText: {
      // textAlign: "center",
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
        // toggleFav,
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
