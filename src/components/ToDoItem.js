import React, { useState, useContext } from "react";
import { MyContext } from "./Context/MyContext";
import { ButtonGroup, IconButton } from "@mui/material";
import {
  DoneAll,
  ModeEdit,
  RestoreFromTrash,
  Delete,
} from "@mui/icons-material";

export const ToDoItem = ({ item }) => {
  const { updateItem, handleEditItem, removeItem } = useContext(MyContext);
  const [edit, setEdit] = useState(false);

  return (
    <div className="ToDoItem">
      {!edit ? (
        <p className="ToDoItem-title">{item.text}</p>
      ) : (
        <input onChange={() => handleEditItem(item)} value={item.text} />
      )}
      <ButtonGroup>
        {!item.done && (
          <IconButton color="secondary" onClick={() => setEdit(!edit)}>
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
