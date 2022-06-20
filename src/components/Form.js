import React, { useState, useEffect } from "react";
import List from "./List";

// const LOCAL_STORAGE_KEY = "todoApp";

const Form = () => {
  const [task, setTask] = useState({ title: "", complete: false });
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    //setTodoList(() => [...todoList, task]);
    setTask(() => {return { title: "", complete: false }});
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

  const handleComplitedTasks = (e) => {
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
          value={task.title}
          onChange={(e) => setTask(() => (task.title = e.target.value))}
          type="text"
          name="form"
          placeholder="Enter a Task"
        />
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleComplitedTasks}>Clear</button>
      </form>
      <List todoList={todoList} />
    </>
  );
};

export default Form;
