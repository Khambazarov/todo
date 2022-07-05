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
    // favourite,
    // noFavourite,
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

  // const favouriteItems = favourite.map((elem) => {
  //   return <ToDoItem item={elem} key={elem.id}></ToDoItem>;
  // });

  // const noFavouriteItems = noFavourite.map((elem) => {
  //   return <ToDoItem item={elem} key={elem.id}></ToDoItem>;
  // });

  return (
    <div className="Form">
      <form
      //  onSubmit={handleSubmit}
      >
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
          add
          {/* add task */}
          {/* {toDoItems.length > 0 && showLengthToDoItems()} */}
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
            style={{margin:"0.5rem 0 0 0"}}
          >
            {showLengthtoDoneItems()}
          </Button>
        )}
        {/* {toDoneItems.length > 0 && (
              <h2 style={STYLES.doneText}>
                {showLengthtoDoneItems()} allready done
              </h2>
            )} */}
        {toDoneItems.length > 0 && <div style={STYLES.done}>{toDoneItems}</div>}
      </form>
    </div>
  );
};

export default ToDosContainer;
