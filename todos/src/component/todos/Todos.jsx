import styled from "styled-components";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

function Todos() {
  return (
    <Container>
      <TodoHeader />
      <TodoBody />
      <TodoInput />
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
