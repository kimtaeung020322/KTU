import { useState } from "react";
import styled from "styled-components";

function Silder() {
  const [상태, 최신화] = useState(0);

  const 상태증가 = () => {
    if (상태 < 2) 최신화(상태 + 1);
  };
  const 상태감소 = () => {
    if (상태 > 0) 최신화(상태 - 1);
  };

  return (
    <>
      <Container>
        <SlideList index={상태}>
          <SlideItem bgColor="red">
            <img src={process.env.PUBLIC_URL + "/dog01.gif"} alt="" />
          </SlideItem>

          <SlideItem bgColor="yellow">
            <img src={process.env.PUBLIC_URL + "/dog02.gif"} alt="" />
          </SlideItem>

          <SlideItem bgColor="green">
            <img src={process.env.PUBLIC_URL + "/dog03.gif"} alt="" />
          </SlideItem>
        </SlideList>
        <button onClick={() => 상태감소(-1)}>이전</button>
        <button onClick={() => 상태증가(+1)}>다음</button>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #eee;
  overflow: hidden;
`;

const SlideList = styled.ul`
  display: flex;
  transform: translate(${({ index }) => index * -100}%);
  transition: transform 0.3s;
`;

const SlideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 300px;
  width: 100%;

  list-style: none;
  border: 2px solid black;
  flex-shrink: 0;
  background-color: ${({ bgColor }) => bgColor};
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Silder;
