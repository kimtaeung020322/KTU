import styled from "styled-components";
import TodtItem from "./TodtItem";

function TodoBody() {
  return (
    <Container>
      <ul>
        <TodtItem />
        <TodtItem />
        <TodtItem />
        <TodtItem />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export default TodoBody;
