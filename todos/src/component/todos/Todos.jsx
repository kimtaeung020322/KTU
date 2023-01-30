import { useReducer } from "react";
import styled from "styled-components";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return StaticRange;
  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: "투두리스트 스타일링", done: true },
    { id: 2, text: "투두리스트 기능구현하기", done: false },
    { id: 3, text: "리팩토링 하기", done: false },
  ]);
  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody todos={todos} dispatch={dispatch} />
      <TodoInput dispatch={dispatch} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;
  border: 1px solid #bbb;

  background-color: #fff;
`;

export default Todos;
