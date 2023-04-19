import React, { useState, useContext } from "react";
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
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo-reducer";
import "./todo.css";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const removeItem = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
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
                  <AddIcon
                    size="large"
                    sx={{
                      color: "#d5a0f3",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <List
          className="content"
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todoState.todos.map((todo, index) => {
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeItem(todo)}>
                    <DeleteIcon
                      sx={{
                        color: "#d5a0f3",
                      }}
                    />
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
                      sx={{
                        color: "#d5a0f3",
                      }}
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
