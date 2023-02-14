import styled from "styled-components";

function body() {
  return (
    <Container>
      <Main>
        <Img
          src="https://www.aceetf.co.kr/_next/static/media/bg_main_header1.45005018.png"
          alt="Search"
        />
        <SearchMenu>
          <SearchList>
            <Input
              placeholder="ETF종목명 및 종목코드를 입력해주세요."
              type="text"
            />

            <Icon>
              <img
                src="https://www.aceetf.co.kr/_next/static/media/icon_search_wt.1083a8f1.svg"
                alt=""
              />
            </Icon>
            <Icon>
              <img
                src="https://www.aceetf.co.kr/_next/static/media/icon_filter_wt2.b9c8d503.svg"
                alt=""
              />
            </Icon>
          </SearchList>

          <ButtonList>
            <ButtonItem>
              <Button>베트남</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>대표지수</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>레버리지·인버스</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>액티브ETF</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>혼합형</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>섹터·테마</Button>
            </ButtonItem>

            <ButtonItem>
              <Button>금현물</Button>
            </ButtonItem>
          </ButtonList>
        </SearchMenu>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5000px;
`;

const Img = styled.img`
  width: 100%;
`;

const SearchMenu = styled.div`
  border: 1px solid black;
  min-width: 800px;
  position: absolute;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: none;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 5px;

  width: 100%;
  height: 100%;
`;

const ButtonList = styled.ul`
  display: flex;
  margin: 15px;

  justify-content: space-between;
  list-style: none;

  & :hover {
    background-color: #fff;

    color: navy;
  }
`;
const ButtonItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #999;
  height: 50px;
  width: 120px;

  margin: 10px;
`;

const SearchList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px 0;
  height: 80px;
  border: 2px solid #eee;

  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  color: #fff;
  height: 50px;
  flex: 1;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: none;
  padding: 5px;
  font-size: 0.8rem;
`;

export default body;
