import React from "react";

const List = ({ todoList }) => {
  const listItem = todoList.map((todo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        onChange={(e) => (todo.complete = e.target.value)}
        // {todo.complete ? cheched : ""}
      />
      {todo}
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default List;
