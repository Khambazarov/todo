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
      <form
      //  onSubmit={handleSubmit}
      >
        {toDos.length > 0 && (
          <h2 style={STYLES.todoText}>{showLengthToDoItems()} to do</h2>
        )}
        <TextField
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="todo"
          value={value}
          label="Enter your task"
          className="TextField"
          id="fullWidth"
          fullWidth
          autoFocus
        />
        {/* CREATE FN TO AUTOFOCUS THE TEXTFIELD */}
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          startIcon={<AddTask />}
        >
          add task
        </Button>
        <div style={STYLES.todo}>{toDoItems}</div>

        {toDoneItems.length > 0 && (
          <h2 style={STYLES.doneText}>
            {showLengthtoDoneItems()} allready done
          </h2>
        )}
        {toDoneItems.length > 0 && (
          <Button
            onClick={restoreItem}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            startIcon={<RestoreFromTrash />}
            className="restore_btn"
          >
            restore {showLengthtoDoneItems()}
          </Button>
        )}
        {toDoneItems.length > 0 && <div style={STYLES.done}>{toDoneItems}</div>}
      </form>
    </div>
  );
};

export default ToDosContainer;
