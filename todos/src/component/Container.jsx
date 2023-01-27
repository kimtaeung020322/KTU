import styled from "styled-components";

function Container({ bgColor }) {
  return (
    <>
      <Box bgColor={bgColor}></Box>;
      <Input type="password" />
    </>
  );
}

//  styled.태그명`` scss문법대로 작성
//  => Js 컴포넌트에 스타일도 함께 작성 가능해서 하나의 파일로 관리할 수 있다.
//  => 클래스 중복 신경쓰지 않아도된다.
//  => 동적으로 값 바꾸기가 용이하다.
//  => 태그명을 통해서 직관적으로 알기 쉽다.
const Box = styled.div`
  width: 500px;
  height: 300p;
  background-color: ${({ bgColor }) => bgColor};
`;

const Input = styled.input``;
export default Container;
