import styled, { ThemeProvider } from "styled-components";
import "./index.css"; // webpack이 img, css 같은 정적 파일을 로딩할 수 있게 해준다.
import Todos from "./component/todos/Todos";
import { theme } from "./style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todos />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  height: 100vw;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center
  align-self: center;
`;

export default App;
