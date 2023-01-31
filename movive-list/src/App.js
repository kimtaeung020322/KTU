import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const fetchData = async () => {
    // async/await : async 함수 내부에서 Promise 앞에 await 붙이면
    // resolve될 때까지 다음 코드를 실행하지 않는다. => 동기적으로 처리
    try {
      let result = await axios.get("http://localhost:5000/todos");
      setTodos(result.data);
    } catch (e) {
      setTodos(null);
    }
  };

  useEffect(() => {
    //화면에 나타나자마 한번만 실행
    fetchData();
  }, []);

  const handleSubmit = async () => {
    let result = await axios.post("http://localhost:5000/todos", {
      text: text,
      done: false,
    });

    // 등록에 성송하면 데이터 다시 받아오기
    if (result.status === 201) alert("할일이 등록되었습니다.");
    fetchData();
  };

  const handleToggle = async (id, done) => {
    await axios.patch("http://localhost:5000/todos/" + id, {
      done,
    });
    fetchData();
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete("http://localhost:5000/todos/" + id);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  if (!todos) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <div>
        <input type="text" onChange={handleText} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => handleToggle(todo.id, !todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
