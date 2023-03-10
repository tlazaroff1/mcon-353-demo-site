import * as React from "react";
import "./App.css";
import { Home } from "./Components/home/home";
import { Todo } from "./Components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/header/header";
import { useReducer } from "react";
import { TodoContext } from "./state/todo/todo-context";
import { Chat } from "./Components/chat/chat";
import { todoReducer } from "./state/todo/todo-reducer";
function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [
      // {
      //   title: "first1",
      //   isComplete: false,
      // },
      // {
      //   title: "second2",
      //   isComplete: true,
      // },
    ],
  });
  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          {/* http://localhost:3000/#/ */}
          <Route path="/" element={<Home />} />
          {/* http://localhost:3000/#/todo */}
          <Route path="/todo" element={<Todo />} />
          {/* http://localhost:3000/#/chat */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}
export default App;
