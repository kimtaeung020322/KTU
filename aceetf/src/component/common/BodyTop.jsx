import styled from "styled-components";

function BodyTop() {
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

      <NoticeBar>
        <Notice>
          <NoticeInfo>공지사항</NoticeInfo>
          <NoticePost>
            신규 상장 거래 이벤트 진행! (23.02.07 ~ 23.02.20)
          </NoticePost>
        </Notice>

        <PlayButton
          src="https://www.aceetf.co.kr/_next/static/media/icon_play_wt.fa460d1b.svg"
          alt="재생버튼"
        />
      </NoticeBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const SearchMenu = styled.div`
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

    cursor: pointer;
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
  border: none;
  border-bottom: 1px solid #fff;
  margin: 0 10px;
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
  font-size: 0.8rem;
  margin: 0 10px;
  cursor: pointer;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayButton = styled.img`
  justify-content: flex-end;
`;

const NoticeInfo = styled.div``;

const NoticePost = styled.div`
  flex: 1;
  font-weight: 700;
  margin: 0 50px;
`;

const NoticeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 56px;
  border: 1px solid black;
  background-color: rgb(82, 120, 174);
`;

export default BodyTop;
