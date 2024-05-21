const TodoItem = ({ todo }) => {
  return (
    <div className="todo-card">
      <h3 className="todo-title">{todo.title}</h3>
      <p>{todo.content}</p>

      <div>
        <button>완료</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
