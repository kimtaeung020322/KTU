import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import InputBox from "../common/InputBox";

function LoginForm() {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <h2>Login</h2>

      <InputBox hide={inputs.email !== ""} placeholder="이메일을 입력해주세요.">
        <input name="email" type="text" onChange={handleinput} />
      </InputBox>

      <InputBox
        hide={inputs.password !== ""}
        placeholder="비밀번호를 입력해주세요."
      >
        <input name="password" type="text" onChange={handleinput} />
      </InputBox>
      <ButBox>
        <Button text="Login" />
        <Button text="SignIn" />
      </ButBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 50px 20px;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const ButBox = styled.div`
  margin-top: 10px;
`;

export default LoginForm;
