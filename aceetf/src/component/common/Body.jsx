import styled from "styled-components";

function body() {
  return (
    <Container>
      <Main
        src="https://www.aceetf.co.kr/_next/static/media/bg_main_header1.45005018.png"
        alt=""
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5000px;
`;

const Main = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  min-height: 62.6rem;
  padding-top: 17rem;
  width: 100%;
`;
export default body;
