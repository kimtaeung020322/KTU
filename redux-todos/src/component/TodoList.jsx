import { useDispatch, useSelector } from "react-redux";
import { todoReducerToggle } from "../reducer/todos";
import TodoItem from "./TodoItem";

function TodoList() {
  //  store 상태 값이 {counter, todos} => 이 중에서 todos만 가져온다
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
