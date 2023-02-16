import Header from "../common/Header";
import styled from "styled-components";
import BodyTop from "../common/BodyTop";
import BodyBottom from "../common/BodyBottom";
import Footer from "../common/Footer";

function Home() {
  return (
    <Container>
      <Header />
      <BodyTop />
      <BodyBottom />
      <Footer></Footer>
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
