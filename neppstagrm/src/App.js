import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { getCurrentUser } from "./api/auth";
import Header from "./component/common/Header";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  //  App이 마운트 되자마자 login 페이지 이동
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentUser().then(() => {
      navigate("/home");
    });
  }, [navigate]);

  const user = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
    </ThemeProvider>
  );
}

export default App;
