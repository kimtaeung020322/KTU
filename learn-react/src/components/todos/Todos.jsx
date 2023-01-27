import { useReducer } from "react";
import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";
import { todosReducer } from "../../state/todos";

const initiaState = [
  { id: 1, text: "컴포넌트 작성하기", done: true },
  { id: 2, text: "기능구현하기", done: false },
  { id: 3, text: "리팩토링하기", done: false },
];

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initiaState);
  return (
    <div>
      <TodosCreate dispatch={dispatch} />
      <TodosList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default Todos;
