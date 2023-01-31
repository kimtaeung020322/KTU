import styled from "styled-components";
import { useTodoState } from "../../context/todos";
import TodtItem from "./TodtItem";

function TodoBody() {
  const todos = useTodoState();

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodtItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export default TodoBody;
