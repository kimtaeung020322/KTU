import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser } from "../../api/auth";
import Redirect from "../common/Redirect";
import LoginForm from "../login/LoginForm";

// src/component/page/Login.jsx
function Login() {
  const [dispatch, setDis] = useState();

  useEffect(() => {
    getCurrentUser().then((data) => {
      setUser(data);
    });
  }, []);

  // 로딩 중일 때는 반환 X => 순간적인 깜빡임 방지
  if (user.isLoa) if (user.data) return <Navigate to="/home" />;

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

export default Login;
