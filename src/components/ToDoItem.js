import React, { useContext } from "react";
import { MyContext } from "./Context/MyContext";
import { ButtonGroup, IconButton } from "@mui/material";
import {
  DoneAll,
  ModeEdit,
  RestoreFromTrash,
  Delete,
} from "@mui/icons-material";

export const ToDoItem = ({ item }) => {
  const { updateItem, removeItem } = useContext(MyContext);

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-title">{item.text}</p>
      <ButtonGroup>
        {!item.done && (
          <IconButton color="secondary">
            <ModeEdit fontSize="small" />
          </IconButton>
        )}
        {item.done ? (
          <IconButton color="secondary" onClick={() => updateItem(item.id)}>
            <RestoreFromTrash fontSize="small" />
          </IconButton>
        ) : (
          <IconButton color="success" onClick={() => updateItem(item.id)}>
            <DoneAll fontSize="small" />
          </IconButton>
        )}
        {item.done && (
          <IconButton color="error" onClick={() => removeItem(item.id)}>
            <Delete fontSize="small" />
          </IconButton>
        )}
      </ButtonGroup>
    </div>
  );
};
