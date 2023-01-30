import styled from "styled-components";

function TodtItem() {
  return <Container>할 일 목록</Container>;
}

const Container = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;
export default TodtItem;
