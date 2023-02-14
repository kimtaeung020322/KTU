import Header from "../common/Header";
import Body from "../common/Body";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export default Home;
