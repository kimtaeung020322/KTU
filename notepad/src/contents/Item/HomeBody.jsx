import styled from "styled-components";

function HomeBody() {
  return (
    <Body>
      <List>
        <ListTitle>목록</ListTitle>
        <TextList>
          <TextItem>리액트</TextItem>
          <TextItem>jv</TextItem>

          <TextItem>css</TextItem>

          <TextItem>html</TextItem>
        </TextList>
      </List>

      <Mail>
        <MailTitle placeholder=" 제목"></MailTitle>
        <MailCantents type="text" />
      </Mail>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  height: 80vh;
  padding-right: 30px;
`;

const List = styled.div`
  width: 20%;
  border: 1px solid #999;
  border-collapse: collapse;
`;
const ListTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 10%;

  border: 2px solid #999;
`;
const TextList = styled.ul``;
const TextItem = styled.li``;

const Mail = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;

  border: 1px solid #999;
`;
const MailTitle = styled.input`
  height: 10%;
  border: 1px solid #999;
`;
const MailCantents = styled.textarea`
  height: 90%;
`;

export default HomeBody;
