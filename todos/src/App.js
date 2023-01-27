import "./index.css"; //webpack이 img, css 같은 정적 파일을 로딩할 수 있게 해준다.
import Container from "./component/Container";

function App() {
  return (
    <>
      <Container bgColor="red" />
      <Container bgColor="yellow" />
      <Container bgColor="blue" />
    </>
  );
}

export default App;
