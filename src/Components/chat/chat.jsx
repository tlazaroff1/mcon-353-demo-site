import React from "react";
import * as Reacht from "react";
import { Input } from "@mui/icons-material";
import { Box, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import { AppBar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ListItemText from "@mui/material/ListItemText";
import "./chat.css";
import ChatIcon from "@mui/icons-material/Chat";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [newChat, setNewChat] = useState("");
  const [userName, setUserName] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function addChat() {
    const chat = {
      name: newChat,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chat),
    });
    setNewChat("");
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }
  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: userName, // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    console.log(event);
    setInputMessage(event.target.value);
  }
  function onChatInput(event) {
    console.log(event);
    setNewChat(event.target.value);
  }
  function onUserInput(event) {
    console.log(event);
    setUserName(event.target.value);
  }
  const drawerWidth = 240;

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );
  return (
    <Box width="70%" id="chat">
      <Box className="chat" display={"flex"}>
        <CssBaseline />
        <Box width="30%" height="600px">
          <Drawer
            sx={{
              width: "100%",
              flexShrink: 1,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <InputAdornment position="start" fontSize="2rem">
                <ChatIcon />
              </InputAdornment>
              <Typography variant="h6" align="center" marginLeft="6px">
                Chats
              </Typography>
            </Toolbar>
            <Divider className="divider"></Divider>
            <List>
              <ListItem disablePadding>
                <TextField
                  className="contentBox"
                  id="standard-basic"
                  variant="standard"
                  placeholder="Enter New Chat"
                  onInput={onChatInput}
                  value={newChat}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          color="#d5a0f3 "
                          onClick={() => addChat()}
                          size="large"
                        >
                          <AddIcon size="large" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </ListItem>
            </List>
            <Divider />
            <List className="list">
              {chats.map((chat) => (
                <ListItem key={chat.id}>
                  <ListItemButton onClick={() => setChat(chat)}>
                    <ListItemText>{chat.name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
        <Box width="70%">
          <Box
            className="main"
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <AppBar
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                top: `150px`,
                left: `${drawerWidth}px`,
              }}
              height="100px"
              backgroundColor="#d5a0f3"
              className="appBar"
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  overflow="visible"
                >
                  {currentChat && currentChat.name} Messages{" "}
                </Typography>
                <TextField
                  className="contentBox2"
                  id="standard-basic"
                  variant="standard"
                  placeholder="Enter UserName"
                  onInput={onUserInput}
                  value={userName}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    ),
                  }}
                />
              </Toolbar>
            </AppBar>
            <Box
              className="main"
              height="450px"
              overflow="auto"
              display="flex"
              justify-content="flex-end"
            >
              <Stack
                direction="column-reverse"
                spacing={2}
                width="100%"
                overflow="auto"
              >
                {messages.map((message) => (
                  <Item>
                    <Typography key={message.id}>
                      {message.username}: {message.text}
                    </Typography>
                  </Item>
                ))}
              </Stack>
            </Box>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            flexDirection={"column"}
            className="textField"
            height="60px"
          >
            <TextField
              id="standard-basic"
              variant="standard"
              className="messages"
              placeholder="Enter Message"
              onInput={onMessageInput}
              value={inputMessage}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="#d5a0f3 "
                      onClick={() => postMessage()}
                      size="large"
                    >
                      <SendIcon size="large" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
