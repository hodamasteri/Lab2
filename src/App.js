//Student: Hoda Masteri
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

function App() {
  const initialTodos = [
    {
      title: "Todo# 1",
      description: " First Description",
      author: "Hoda",
      dateCreated: Date(Date.now()).toString(),
      complete: false,
      dateCompleted: "",
      id: uuidv4(),
    },
    {
      title: "Todo# 2",
      description: " Second Description",
      author: "Hoda",
      dateCreated: Date(Date.now()).toString(),
      complete: false,
      dateCompleted: "",
      id: uuidv4(),
    },
  ];

  const [user, setUser] = useState("");
  const [todoitems, setTodo] = useState(initialTodos);

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <TodoList todoitems={todoitems} />
      {user && (
        <CreateTodo user={user} todoitems={todoitems} setTodo={setTodo} />
      )}
    </div>
  );
}

export default App;
