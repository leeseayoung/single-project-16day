import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일1",
      content: "할 일1 내용",
      isDone: "false",
    },
  ]);
  console.log(todos);
  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
