import styled, { css } from "styled-components";

function TitleBox({ title, tabList }) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <TabList>
        {/* active가 true인 TabItem만 검은색 배경에 흰색 글씨 만들기 */}
        <TabItem active={true}>오늘</TabItem>
        <TabItem>이번주</TabItem>
      </TabList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
`;

const TabList = styled.ul`
  display: flex;
  margin-left: 20px;
  border: 1px solid black;
`;

const TabItem = styled.li`
  padding: 5px;
  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: white;
    `}
`;

export default TitleBox;
