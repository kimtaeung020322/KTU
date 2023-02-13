import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

function Header() {
  return (
    <>
      <Popup>
        <Img
          src="https://www.aceetf.co.kr/_next/image?url=https%3A%2F%2Fkiminveststorage.blob.core.windows.net%2Fkim-public%2Fv1%2F2023%2F02%2F1675674505270_d2d14132-45ed-4e87-9eaa-afd2545f99c5.jpg&w=1920&q=75"
          alt="popup"
        />
        <Close type="button">
          <AiFillCloseCircle />
        </Close>
      </Popup>

      <Container className="menuBar">
        <Logo
          src="https://www.aceetf.co.kr/static/images/logo_ace_blue.svg"
          alt="logo"
        />

        <TopMenu>
          <TotalMenu>전체상품보기</TotalMenu>
          <TopMenuBar
            src="https://www.aceetf.co.kr/_next/static/media/icon_hamburger_bk.27ec778a.svg"
            alt="sideMenuBar"
          />
        </TopMenu>
      </Container>
      <Container bgColor={"rgb(17, 17, 17)"}>
        <Logo
          src="https://www.aceetf.co.kr/static/images/logo_ace_blue.svg"
          alt="logo"
        />

        <TopMenu color="white">
          <TotalMenu>전체상품보기</TotalMenu>
          <TopMenuBar
            src="https://www.aceetf.co.kr/_next/static/media/icon_hamburger_wt.c25e9719.svg"
            alt="sideMenuBar"
          />
        </TopMenu>
      </Container>
    </>
  );
}

const Popup = styled.div`
  width: 100vw;
  height: 80px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

const Close = styled.button`
  display: flex;
  position: absolute;
  top: 15px;
  right: 15px;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: ${({ bgColor }) => bgColor || "white"};
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || "black"}; ;
`;

const TotalMenu = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const TopMenuBar = styled.img`
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

export default Header;
