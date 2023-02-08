import { useDispatch } from "react-redux";
import { todoReducerRemove, todoReducerToggle } from "../reducer/todos";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: done && "line-through" }}>
      <span onClick={() => dispatch(todoReducerToggle(id))}>{text}</span>
      <button onClick={() => dispatch(todoReducerRemove(id))}>삭제</button>
    </li>
  );
}

export default TodoItem;
