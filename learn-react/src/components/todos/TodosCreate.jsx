import { useRef, useState } from "react";

function TodosCreate({ dispatch }) {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const inputRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault(); // 태그의 기본 기능 실행X
    if (text === "") {
      alert("할일을 입력해주세요");
      inputRef.current.focus();
      return;
    }
    dispatch({ type: "CREATE_TODO", text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input type="text" onChange={handleInput} ref={inputRef} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodosCreate;
