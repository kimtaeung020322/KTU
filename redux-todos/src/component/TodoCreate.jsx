import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoReducerCreate } from "../reducer/todos";

function TodoCreate() {
  const [text, setText] = useState("");
  const dipatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dipatch(todoReducerCreate(text));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
