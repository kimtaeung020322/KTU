import styled from "styled-components";

function Footer() {
  return (
    <>
      <Info>
        <InfoTitle>
          <Logo
            src="https://www.aceetf.co.kr/static/images/logo_ace_blue.svg"
            alt=""
          />
          <Logo
            src="https://www.aceetf.co.kr/_next/image?url=%2Fstatic%2Fimages%2Flogo_korea_bk.png&w=1920&q=75"
            alt=""
          />
        </InfoTitle>

        <InfoList>
          <InfoItem>
            <ul>
              <li>
                <h4>투자정보</h4>
              </li>
              <li>ACE Tube</li>
              <li>ACE 리포트</li>
              <li>ACE 리서치</li>
              <li>ACE 뉴스</li>
              <li>ACE 세미나</li>
            </ul>
          </InfoItem>
          <InfoItem>
            <ul>
              <li>
                <h4>ETF연금투자</h4>
              </li>
              <li>연금투자 가이드</li>
              <li>개인/퇴직연금 안내</li>
              <li>ACE ETF 연금 상품</li>
            </ul>
          </InfoItem>
          <InfoItem>
            <ul>
              <li>
                <h4>고객서비스</h4>
              </li>
              <li>공지사항</li>
              <li>공시정보</li>
              <li>FAQ</li>
              <li>Contact Us</li>{" "}
            </ul>
          </InfoItem>
          <InfoItem>
            <ul>
              <li>
                <h4>About ACE ETF</h4>
              </li>
              <li>About ACE ETF</li>
            </ul>
          </InfoItem>
        </InfoList>
      </Info>
      <hr color="#999"></hr>

      <Address>
        <GpsContentSpecialGroup>
          <GPS>
            서울특별시 영등포구 여의대로 24 FKI TOWER 11~12층 <br />
            대표번호 : 02-2055-5555
          </GPS>
          <ContentList>
            <ContentItem>이용약관</ContentItem>
            <ContentItem>고객정보취급방침</ContentItem>
            <ContentItem>신용정보활용체제</ContentItem>
            <ContentItem>개인정보처리방침</ContentItem>
            <ContentItem>고객권리안내문</ContentItem>
            <ContentItem>영상정보처리기기 운영/관리방침</ContentItem>
            <ContentItem>사이트맵</ContentItem>
          </ContentList>
          <Special>
            COPYRIGHT(C) KOREA INVESTMENT MANAGEMENT CO., LTD. ALL RIGHTS
            RESERVED
          </Special>
        </GpsContentSpecialGroup>

        <SnsFamilySiteGroup>
          <SNS
            src="https://www.aceetf.co.kr/_next/static/media/icon_youtube_bk.3870b8f7.webp"
            alt="SNS"
          />
          <FamilySite>Family Site 바로가기</FamilySite>
        </SnsFamilySiteGroup>
      </Address>
    </>
  );
}

const Info = styled.div`
  margin: 50px;
`;

const InfoTitle = styled.div`
  display: flex;

  margin-bottom: 30px;

  img {
    margin: 0 15px;
  }
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;
`;
const InfoItem = styled.li`
  font-size: 0.8rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  ul li {
    font-size: 0.8rem;
    padding: 3px;
  }

  ul li h4 {
    font-weight: 700;

    margin-bottom: 30px;
  }
`;

const Logo = styled.img``;

const Address = styled.div`
  display: flex;
`;

const GpsContentSpecialGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #999;
  font-size: 0.8rem;
`;
const GPS = styled.div`
  margin-bottom: 80px;
  font-size: 0.8rem;
  padding: 10px;
`;
const ContentList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  margin-bottom: 30px;
  font-size: 0.8rem;
`;
const ContentItem = styled.li`
  padding: 5px;
  font-size: 0.8rem;
`;

const Special = styled.div`
  font-size: 0.8rem;
`;

const SnsFamilySiteGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 400px;

  border: 1px solid #999;
  padding: 10px;
`;

const SNS = styled.img`
  width: 40px;
  height: 40px;
`;
const FamilySite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30px;

  margin-top: 30px;
`;

export default Footer;
