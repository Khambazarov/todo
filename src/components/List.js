import React, {useContext} from "react";

const List = ({ todoList }) => {
  const listItem = todoList.map((todo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        onChange={() => {
          todo.complete = !todo.complete;
        }}
      />
      {todo.task}
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default List;
