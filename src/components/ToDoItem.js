import React, { useContext } from "react";
import MyContext from "./Context/MyContext";
import { Button, Stack } from "@mui/material";
import { Delete, DoneAll, RestoreFromTrash } from "@mui/icons-material";

const ToDoItem = ({ item }) => {
  // console.log("items", item.done);
  // console.log("item text", item.text);
  // console.log("item done", item.done);
  const { updateItem, removeItem } = useContext(MyContext);
  return (
    <div className="ToDoItem">
      <p>{item.text}</p>
      <Stack direction="row" spacing={1}>
        {item.done ? (
          <Button
            className="btn_done"
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<RestoreFromTrash />}
            onClick={() => updateItem(item.id)}
          >
            {item.done ? "Undo" : "Done"}
          </Button>
        ) : (
          <Button
            className="btn_done"
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<DoneAll />}
            onClick={() => updateItem(item.id)}
            style={{ padding: "0.5rem 2rem" }}
          >
            {item.done ? "Undo" : "Done"}
          </Button>
        )}
        {item.done && (
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<Delete />}
            onClick={() => removeItem(item.id)}
            style={{ padding: "0 2rem" }}
          >
            Delete
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default ToDoItem;
