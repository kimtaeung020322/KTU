import { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [input, setinput] = useState("");

  return (
    <Container>
      <Wrapper>
        <h1>Neppstagram</h1>
        <InputBox hide={input != ""}>
          <input type="text" onChange={(e) => setinput(e.target.value)} />
        </InputBox>

        <Gnb>
          <GnbList>
            <GnbItem>
              <Link to="home">
                <AiOutlineHome />
              </Link>
            </GnbItem>
            <GnbItem>
              <Link to="search">
                <AiOutlineSearch />
              </Link>
            </GnbItem>
            <GnbItem>
              <Link to="profile">
                <AiOutlineUser />
              </Link>
            </GnbItem>
          </GnbList>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
`;

const Gnb = styled.nav``;

const GnbList = styled.ul`
  display: flex;
  gap: 10px;
`;

const GnbItem = styled.li``;

export default Header;
