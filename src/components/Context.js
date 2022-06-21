import React, { useState } from "react";

const Context = () => {
  const Store = React.createContext(null);
  const [todos, setTodos] = useState({});
  return (
    <Store.Provider value={(todos, setTodos)}>{props.children}</Store.Provider>
  );
};

export default Context;
