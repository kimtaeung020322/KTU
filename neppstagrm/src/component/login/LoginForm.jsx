import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signIn } from "../../api/auth";
import Button from "../common/Button";
import Input from "../common/Input";

// LoginForm.jsx
function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signIn(inputs);

    if (data.success) {
      navigate("/home");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          value={inputs.email}
          onChange={handleInputs}
          name="email"
          placeholder="이메일을 입력하세요."
        />
        <Input
          type="password"
          value={inputs.password}
          onChange={handleInputs}
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <BtnBox>
          <Button>Login</Button>
          <Button type="button" onClick={() => navigate("/signup")}>
            SingUp
          </Button>
        </BtnBox>
      </form>
    </Container>
  );
}

// 너비 500px, padding 20px, 흰색 배경
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: 50px 0;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const BtnBox = styled.div`
  margin-top: 10px;
`;

export default LoginForm;
