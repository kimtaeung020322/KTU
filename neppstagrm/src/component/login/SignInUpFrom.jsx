import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUpUser } from "../../api/auth";
import Button from "../common/Button";
import InputBox from "../common/InputBox";

function SignInUpFrom() {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate(0);

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signUpUser(inputs);

    if (data.success) {
      alert("회원가입에 성공했습니다.");

      navigate("/login");
    }
  };

  return (
    <Container>
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <InputBox hide={inputs.name !== ""} placeholder="이름을 입력해주세요.">
          <input name="name" type="name" onChange={handleinput} />
        </InputBox>

        <InputBox
          hide={inputs.email !== ""}
          placeholder="이메일을 입력해주세요."
        >
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
          <Button text="Cancel" bgColor="red" type="button" />
        </ButBox>
      </form>
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

export default SignInUpFrom;
