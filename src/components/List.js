import React from "react";

const List = ({ todoList }) => {
  const listItem = todoList.map((todo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        checked={() => (todo.complete ? todo.complete : "")}
        onChange={() => {
          todo.complete = !todo.complete;
          console.log(todo);
        }}
      />
      {todo.title}
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default List;
