import styled from "styled-components";
import TodtItem from "./TodtItem";

function TodoBody({ todos, dispatch }) {
  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodtItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export default TodoBody;
