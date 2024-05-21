import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일1",
      content: "할 일1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일2",
      content: "할 일2 내용",
      isDone: true,
    },
  ]);
  //isDone의 값이 참,거짓 확인 한다!
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  console.log(todos);
  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
        <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoContainer;
