import styled from "styled-components";
import SignInUpFrom from "../login/SignInUpFrom";

function SignUp() {
  return (
    <Container>
      <SignInUpFrom />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default SignUp;
