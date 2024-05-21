//제어/비제어 컴포넌트

const TodoForm = ({ setTodos }) => {
  //   const [title, setTitle] = useState();
  //   const [content, setContent] = useState();
  const onSubmit = function (e) {
    //넣은이유 기본동작 기능을 방지하다
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (title.trim() === "") {
      return alert("제목을 입력하세요!");
    }
    if (content.trim() === "") {
      return alert("내용을 입력하세요!");
    }

    // if (!title || !content) return alert("입력");

    const nextTodo = {
      id: crypto.randomUUID(), // 중복 X
      title,
      content,
      isDone: false,
    };

    //useState의비동기성 찾아보기 콜백 함수
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="제목" type="text" name="title" />
        <input placeholder="내용" type="text" name="content" />

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
