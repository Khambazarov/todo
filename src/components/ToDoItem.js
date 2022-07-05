import React, { useState, useContext } from "react";
import MyContext from "./Context/MyContext";
import { ButtonGroup, IconButton } from "@mui/material";
import {
  Delete,
  DoneAll,
  RestoreFromTrash,
  StarBorder,
  Star,
} from "@mui/icons-material";

const ToDoItem = ({ item }) => {
  const [favourite, setFavourite] = useState(false);
  const { updateItem, removeItem } = useContext(MyContext);
  console.log("favourite", item.favourite);

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-title">{item.text}</p>
      <ButtonGroup>
        <IconButton color="secondary" onClick={() => setFavourite(!favourite)}>
          {favourite ? (
            <Star fontSize="large" />
          ) : (
            <StarBorder fontSize="large" />
          )}
        </IconButton>
        {item.done ? (
          <IconButton color="secondary" onClick={() => updateItem(item.id)}>
            <RestoreFromTrash fontSize="large" />
          </IconButton>
        ) : (
          <IconButton color="success" onClick={() => updateItem(item.id)}>
            <DoneAll fontSize="large" />
          </IconButton>
        )}
        {item.done && (
          <IconButton color="error" onClick={() => removeItem(item.id)}>
            <Delete fontSize="large" />
          </IconButton>
        )}
      </ButtonGroup>
    </div>
  );
};

export default ToDoItem;
