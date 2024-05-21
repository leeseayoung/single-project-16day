const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;
  //삭제
  const deleteTodo = function () {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  //완료
  const toggleTodo = function () {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todo-card">
      <h3 className="todo-title">{title}</h3>
      <p>{content}</p>

      <div>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
