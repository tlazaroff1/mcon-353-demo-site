import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todo.css";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: input, isComplete: false }]);
    setInput("");
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  const removeItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Typography className="title" variant="h4">
        Todo List:
      </Typography>

      <Box className="todoBox" maxHeight={1000}>
        <TextField
          className="contentBox"
          id="standard-basic"
          variant="standard"
          onInput={onInput}
          value={input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="#d5a0f3 " onClick={addTodo} size="large">
                  <AddIcon size="large" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <List
          className="content"
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo, index) => {
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onChange={() => toggleChecked(todo)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.isComplete}
                      //tabIndex={-1}
                      //disableRipple
                      //  inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText className="text">{todo.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};
