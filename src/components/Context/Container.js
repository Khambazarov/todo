import React, { useState, useEffect, useId } from "react";
import { v4 as uuid } from "uuid";
import { MyContext } from "./MyContext";

export const Container = (props) => {
  const tasks = [];

  const [items, setItems] = useState(tasks);
  const [value, setValue] = useState("");
  const ID = useId();
  const UUID = uuid();

  // Uncaught TypeError: items.filter is not a function
  // at Container (Container.js:15:1)
  // at renderWithHooks (react-dom.development.js:16305:1)
  // at updateFunctionComponent (react-dom.development.js:19588:1)
  // at beginWork (react-dom.development.js:21601:1)
  // at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
  // at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
  // at invokeGuardedCallback (react-dom.development.js:4277:1)
  // at beginWork$1 (react-dom.development.js:27451:1)
  // at performUnitOfWork (react-dom.development.js:26557:1)
  // at workLoopSync (react-dom.development.js:26466:1)
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  const toDos = items.filter((item) => !item.done);
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  const toDones = items.filter((item) => item.done);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("todos"));

    if (tasks) {
      setItems(tasks);
    }
  }, []);

  const addItem = (value) => {
    const newItem = {
      id: `${ID}${UUID}`,
      text: value,
      done: false,
    };
    const updatedtasks = [...items, newItem];

    setItems(updatedtasks);
    localStorage.setItem("todos", JSON.stringify(updatedtasks));
  };

  const updateItem = (id) => {
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
    textField: {
      paddingLeft: "1rem",
    },
    todo: {
      color: "#1565c0",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    done: {
      backgroundColor: "#0ff",
      color: "#1565c0",
      fontSize: "0.8rem",
      textDecoration: "line-through solid red 10%",
    },
    todoText: {
      textAlign: "start",
      margin: "0 0 0 0.5rem",
      padding: "1rem 0 0 0",
      color: "#1565c0",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    doneText: {
      textAlign: "start",
      margin: "0 0 0 0.5rem",
      borderTop: "1rem solid #0ff",
      backgroundColor: "#0ff",
      color: "#1565c0",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    restoreFromTrashBtn: {
      margin: "0.5rem 0 0 0",
      letterSpacing: "0.3rem",
    },
  };

  return (
    <MyContext.Provider
      value={{
        addItem,
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
