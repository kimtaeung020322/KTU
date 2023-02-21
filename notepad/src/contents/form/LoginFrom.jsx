import styled from "styled-components";

function LoginFrom() {
  return (
    <Form>
      <LoginScreen>
        <Title>Login</Title>
        <p>해당 이메일로 내용이 발송됩니다.</p>
        <Input type="email" />
        <Input type="password" />
        <LoginButton>Login</LoginButton>
      </LoginScreen>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #eee;

  border: 1px solid black;
  padding: 20px;

  width: 300px;

  height: 300px;
`;

const Title = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 25px;
  margin-bottom: 8px;
`;

const LoginButton = styled.button`
  height: 50px;
`;

export default LoginFrom;
