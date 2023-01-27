import styled from "styled-components";

function TodoInput() {
  return (
    <Container>
      <Input placeholder="할 일을 입력해주세요" />
      <Button>등록</Button>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid #bbb;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;

  border-bottom: 1px solid #bbb;
  font-size: 0.8rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 0;
  margin-top: 4px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: #fff;
  font-weight: 700;

  cursor: pointer;

  &:hover{
    background-color: @{({theme})=> theme.colors.hover_color};
  }

  &:active{
    background-color: @{({theme})=> theme.colors.active_color};
  }
`;

export default TodoInput;
