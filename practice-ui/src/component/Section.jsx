import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Section() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleIndex = (e) => {
    e.preventDefault();
    // 스크롤 중이라면 함수 종료
    if (isScrolling.current) return;
    isScrolling.current = true; //스크롤 중임을 명시
    setTimeout(() => {
      isScrolling.current = false; //스크롤 끝날 쯤에 다시 스크롤 false로
    }, 500);
    //   e.deltaY : 휠 방향에 따라 양수 (내림)/ 음수(올림)
    if (e.deltaY > 0) {
      if (index < 2) setIndex(index + 1);
    } else {
      if (index > 0) setIndex(index - 1);
    }
  };

  useEffect(() => {
    //window.scrollTo() : 스크롤바를 움직이는 메서드
    // window.innerHeight; 뷰포트 높이

    window.addEventListener("wheel", handleIndex, { passive: false });

    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    //뒷정리 함수
    return () => {
      window.removeEventListener("wheel", handleIndex, { passive: false });
    };
  }, [index]);

  console.log(parseInt(index));

  return (
    <Container>
      <SectionItem index="0" bgColor="red">
        1
      </SectionItem>
      <SectionItem index="1" bgColor="blue">
        2
      </SectionItem>
      <SectionItem index="2" bgColor="yellow">
        3
      </SectionItem>
      <ButtonList>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
      </ButtonList>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(${({ index }) => parseInt(index) * 0}%);
  transition: transform 0.3s;

  font-size: 4rem;
  color: #fff;

  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  position: fixed;
  top: 50vh;
  right: 0vw;
`;

const ButtonItem = styled.li`
  border: 3px solid black;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #eee;
`;

export default Section;
