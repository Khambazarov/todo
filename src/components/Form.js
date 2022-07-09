import React, { useContext } from "react";
import { ToDoItem } from "./ToDoItem";
import { MyContext } from "./Context/MyContext";
import { IconButton, Divider, Paper, Button, InputBase } from "@mui/material";
import { AddTask, RestoreFromTrash } from "@mui/icons-material";

export const Form = () => {
  const {
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
        <Paper elevation={12}>
          <div className="paper_container">
            <div className="inputBase_container">
              <InputBase
                variant="outlined"
                type="text"
                name="todo"
                value={value}
                placeholder="Enter your task"
                autoFocus
                fullWidth
                required={true}
                onChange={(e) => setValue(e.target.value)}
                style={STYLES.textField}
              ></InputBase>
            </div>
            <div className="devider_addtask_container">
              <IconButton
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                <Divider
                  sx={{
                    height: 23,
                    mr: 3,
                    backgroundColor: "#1565c0",
                  }}
                  orientation="vertical"
                />
                <AddTask style={{ margin: "0 1rem 0 0" }} />
              </IconButton>
            </div>
          </div>
        </Paper>
        {/* CREATE FN TO AUTOFOCUS THE TEXTFIELD */}
        {toDos.length > 0 && (
          <h2 style={STYLES.todoText}>{showLengthToDoItems()}</h2>
        )}
        <div style={STYLES.todo}>{toDoItems}</div>

        {toDoneItems.length > 0 && (
          <Button
            onClick={restoreItem}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={STYLES.restoreFromTrashBtn}
          >
            <RestoreFromTrash style={{ margin: "0 0.3rem 0 0" }} />
            restore all tasks
            <RestoreFromTrash />
          </Button>
        )}
        {toDones.length > 0 && (
          <h2 style={STYLES.doneText}>{showLengthtoDoneItems()}</h2>
        )}
        {toDoneItems.length > 0 && <div style={STYLES.done}>{toDoneItems}</div>}
      </form>
    </div>
  );
};
