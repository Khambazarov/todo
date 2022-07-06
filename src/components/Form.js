import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import MyContext from "./Context/MyContext";
import { Button, TextField } from "@mui/material";
import { AddTask, RestoreFromTrash } from "@mui/icons-material";

const ToDosContainer = () => {
  const {
    // addItem,
    toDos,
    toDones,
    restoreItem,
    showLengthToDoItems,
    showLengthtoDoneItems,
    handleSubmit,
    value,
    setValue,
    STYLES,
  } = useContext(MyContext);

  const toDoItems = toDos.map((elem) => {
    return <ToDoItem item={elem} key={elem.id}></ToDoItem>;
  });

  const toDoneItems = toDones.map((elem) => {
    return <ToDoItem item={elem} key={elem.id}></ToDoItem>;
  });

  return (
    <div className="Form">
      <form>
        <TextField
          variant="outlined"
          type="text"
          name="todo"
          value={value}
          id="fullWidth"
          className="TextField"
          label="Enter your task"
          fullWidth
          autoFocus
          required={true}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* CREATE FN TO AUTOFOCUS THE TEXTFIELD */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          startIcon={<AddTask />}
          style={{marginTop: "1rem"}}
        >
          add
        </Button>
        {toDos.length > 0 && (
          <h2 style={STYLES.todoText}>{showLengthToDoItems()}</h2>
        )}
        <div style={STYLES.todo}>{toDoItems}</div>

        {toDoneItems.length > 0 && (
          <Button
            onClick={restoreItem}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            startIcon={<RestoreFromTrash />}
            endIcon={<RestoreFromTrash />}
            style={{ margin: "0.5rem 0 0 0" }}
          >
            {showLengthtoDoneItems()}
          </Button>
        )}
        {toDoneItems.length > 0 && <div style={STYLES.done}>{toDoneItems}</div>}
      </form>
    </div>
  );
};

export default ToDosContainer;
