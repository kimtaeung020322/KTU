import { useSelector } from "react-redux";
import { getTotaCount } from "../reducer/todos";

function TodoHeader() {
  const todos = useSelector((state) => state.todos);

  const undoneCount = todos.filter((todo) => !todo.done).length;

  // const totalCount = useSelector((state) => getTotaCount());

  return (
    <div>
      <p>2023년 02월 08일</p>
      <span>
        해야할 일 : {undoneCount}/{todos.length}
      </span>
    </div>
  );
}

export default TodoHeader;
