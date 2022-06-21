import React, { useState, useEffect } from "react";
import List from "./List";

// const LOCAL_STORAGE_KEY = "todoApp";

const Form = () => {
  const [task, setTask] = useState("");
  const [bool, setBool] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { title: task, complete: false }]);
    setTask("");
    console.log(task);
  };

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  //   console.log(todoList);
  // }, [todoList]);

  // useEffect(() => {
  //   const storedTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   setTask(storedTask);
  //   // console.log(storedTask);
  // }, []);

  const handleCompletedTasks = (e) => {
    e.preventDefault();
    const newTask = todoList.filter((todo) => !todo.complete);
    setTodoList(newTask);
    console.log(newTask);
  };

  return (
    <>
      <form className="Form">
        <input
          autoFocus
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="form"
          placeholder="Enter a Task"
        />
        {/* <input
          type="checkbox"
          value={bool}
          checked={bool}
          onChange={() => setBool(!bool)}
        /> */}
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleCompletedTasks}>Clear</button>
      </form>
      <List todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default Form;
