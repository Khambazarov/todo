import React, { useState, useContext } from "react";
import List from "./List";

const Form = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const context = useContext(Store)

  // const LOCAL_STORAGE_KEY = "todoApp";

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  //   console.log(todoList);
  // }, [todoList]);

  // useEffect(() => {
  //   const storedTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   setTask(storedTask);
  //   // console.log(storedTask);
  // }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.length !== 0 && task !== " ") {
      setTodoList(() => [...todoList, { task, complete: false }]);
      setTask("");
      console.log(task);
    }
  };

  const handleComplitedTasks = (e) => {
    e.preventDefault();
    const newTask = todoList.filter((todo) => !todo.complete);
    setTodoList(newTask);
    console.log(newTask);
  };

  // const handleShowAllTasks = (e) => {
  //   e.preventDefault();
  //   const newTask = todoList.filter((todo) => todo.complete);
  //   setTodoList([...todoList,...newTask]);
  //   console.log(todoList, newTask);
  // };

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
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleComplitedTasks}>Clear</button>
        {/* <button onClick={handleShowAllTasks}>Show All</button> */}
      </form>
      <List
        todoList={todoList}
        // setTodoList={setTodoList}
      />
    </>
  );
};

export default Form;
