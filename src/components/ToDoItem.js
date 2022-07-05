import React, { useState, useContext } from "react";
import MyContext from "./Context/MyContext";
import { Button, Stack } from "@mui/material";
import {
  Delete,
  DoneAll,
  RestoreFromTrash,
  StarBorder,
  Star,
} from "@mui/icons-material";

const ToDoItem = ({ item }) => {
  // console.log("items", item.done);
  // console.log("item text", item.text);
  const [favourite, setFavourite] = useState(false);
  const { updateItem, removeItem } = useContext(MyContext);
  console.log("favourite", item.favourite);

  return (
    <div className="ToDoItem">
      <p>{item.text}</p>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => setFavourite(!favourite)}>
          {favourite ? <Star /> : <StarBorder />}
        </Button>
        {item.done ? (
          <Button
            className="btn_done"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<RestoreFromTrash />}
            onClick={() => updateItem(item.id)}
            style={{ padding: "0.5rem 0 0.5rem 0.75rem" }}
            fullWidth
          ></Button>
        ) : (
          <Button
            className="btn_done"
            variant="contained"
            color="success"
            size="large"
            startIcon={<DoneAll />}
            onClick={() => updateItem(item.id)}
            style={{ padding: "0.5rem 0 0.5rem 0.75rem" }}
          ></Button>
        )}
        {item.done && (
          <Button
            variant="contained"
            color="error"
            size="large"
            startIcon={<Delete />}
            onClick={() => removeItem(item.id)}
            style={{ padding: "0.5rem 0 0.5rem 0.75rem" }}
          >
            {/* Delete */}
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default ToDoItem;
