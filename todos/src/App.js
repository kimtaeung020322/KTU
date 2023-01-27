import "./index.css"; //webpack이 img, css 같은 정적 파일을 로딩할 수 있게 해준다.
import Container from "./component/Container";
import { ThemeProvider } from "styled-components";
import Button from "./component/Button";

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          main_color: "#4da24",
          active_color: "#4da24",
        },
      }}
    >
      <Button text="Login" bgColor="red" big="true" />
      <Button text="Sign Up" />
    </ThemeProvider>
  );
}

export default App;
