import styled from "styled-components";

function BodyBottom() {
  return (
    <>
      <Category>
        <CategoryList>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category1.89eed679.svg"
              alt="주식"
            />
            <hr color="black" />
          </CategoryItem>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category2.2ac9ada7.svg"
              alt="채권"
            />
            <hr color="black" />
          </CategoryItem>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category3.63081da5.svg"
              alt="국내"
            />
            <hr color="black" />
          </CategoryItem>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category4.bdd59d31.svg"
              alt="해외"
            />
            <hr color="black" />
          </CategoryItem>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category5.b4317c2f.svg"
              alt="리츠"
            />
            <hr color="black" />
          </CategoryItem>
          <CategoryItem>
            <Icon
              src="https://www.aceetf.co.kr/_next/static/media/icon_category6.fe0eb6ae.svg"
              alt="원자재"
            />
            <hr color="black" />
          </CategoryItem>
        </CategoryList>
      </Category>
      <Top3>
        <TopTitle>
          <Top3Text>유형별 수익률 TOP3</Top3Text>
          <Today>*{Date()}</Today>
        </TopTitle>
        <DateCategory>
          <DateList>
            <DateItem>
              <Button>최근 1개월</Button>
            </DateItem>
            <DateItem>
              <Button>최근 3개월</Button>
            </DateItem>

            <DateItem>
              <Button>최근 6개월</Button>
            </DateItem>

            <DateItem>
              <Button>최근 1년</Button>
            </DateItem>
          </DateList>
        </DateCategory>

        <hr color="black" />

        <Chart>
          <ChartList>
            <ChartItem>
              <ChartItemTitle>1. ACE KRX금현물</ChartItemTitle>
              <ChartItemNum>
                1개월 수익률 <span>16.49%</span>
              </ChartItemNum>
            </ChartItem>
            <ChartItem>
              <ChartItemTitle>2. ACE 골드선물 레버리지 (합성 H)</ChartItemTitle>
              <ChartItemNum>
                1개월 수익률 <span>15.75%</span>
              </ChartItemNum>
            </ChartItem>
            <ChartItem>
              <ChartItemTitle>3. ACE 미국S&P500채권혼합액티브</ChartItemTitle>
              <ChartItemNum>
                1개월 수익률 <span>14.27%</span>
              </ChartItemNum>
            </ChartItem>
          </ChartList>

          <Banner
            src="https://www.aceetf.co.kr/_next/image?url=https%3A%2F%2Fkiminveststorage.blob.core.windows.net%2Fkim-public%2Fv1%2F2023%2F01%2F1673421673209_1377e565-a16c-405d-a6f7-b1761d74e2be.png&w=1920&q=75"
            alt=""
          />
        </Chart>
      </Top3>
      <AceInsight>ACE 인사이트</AceInsight>

      <Vidio>
        <VidioMovi
          src="https://www.aceetf.co.kr/_next/image?url=https%3A%2F%2Fkiminveststorage.blob.core.windows.net%2Fkim-public%2Fv1%2F2023%2F02%2F1676426871610_b143ba8e-f190-4af3-a6f3-c9b125ed4675.jpg&w=1920&q=75"
          alt="배너"
        />
        <PlayButton
          src="https://www.aceetf.co.kr/_next/static/media/icon_play_wt.fa460d1b.svg"
          alt="재생버튼"
        />
      </Vidio>

      <NewsList>
        <NewsItem>
          <NewsInfo>ETF 뉴스</NewsInfo>
          <NewsTitle>
            금리 인하 시기 채권값 살펴보니...장기채 레버리지 담아볼까
          </NewsTitle>
          <NewsDate>매일경제 | 2023-02-09</NewsDate>
        </NewsItem>
        <NewsItem>
          <NewsInfo>ETF 뉴스</NewsInfo>
          <NewsTitle>
            한투운용 "메리츠證서 베트남 ETF 거래하고 여행 가자"
          </NewsTitle>
          <NewsDate>서울경제 | 2023-02-07</NewsDate>
        </NewsItem>
        <NewsItem>
          <NewsInfo>ETF 리서치</NewsInfo>
          <NewsTitle>[한국투자증권]해외채권Weekly</NewsTitle>
          <NewsDate>매일경제 | 2023-02-09</NewsDate>
        </NewsItem>
        <NewsItem></NewsItem>
      </NewsList>

      <ETFinfo>
        <ETFtitleBar>
          <ETFtitle>ETF 자료실</ETFtitle>
          <Details
            src="https://www.aceetf.co.kr/_next/static/media/icon_more_bk.f95fc64a.svg"
            alt="더보기"
          />
        </ETFtitleBar>

        <ETFlist>
          <ETFitem>ACE 종합채권(AA-이상)KIS액티브</ETFitem>
          <ETFitem>ACE 미국S&P500</ETFitem>
          <ETFitem>ACE 미국나스닥100</ETFitem>
        </ETFlist>
      </ETFinfo>

      <Question>
        <QuestionInfo>
          <ETFtitleBar>
            <ETFtitle>공지사항</ETFtitle>
            <Details
              src="https://www.aceetf.co.kr/_next/static/media/icon_more_bk.f95fc64a.svg"
              alt="더보기"
            />
          </ETFtitleBar>

          <ETFlist>
            <ETFitem>
              ACE ETF 홈페이지 OPEN <ETFdate>2023-01-16</ETFdate>
            </ETFitem>
            <ETFitem>
              신규상장기념 거래인증 인벤트 진행!(23.02.07 -23.02.20)
              <ETFdate>2023-02-06</ETFdate>
            </ETFitem>
            <ETFitem>
              ACE 미국나스닥100 <ETFdate>2023-01-27</ETFdate>
            </ETFitem>
          </ETFlist>
        </QuestionInfo>

        <QuestionInfo>
          <ETFtitleBar>
            <ETFtitle>FAQ</ETFtitle>
            <Details
              src="https://www.aceetf.co.kr/_next/static/media/icon_more_bk.f95fc64a.svg"
              alt="더보기"
            />
          </ETFtitleBar>

          <ETFlist>
            <ETFitem>
              (국가) 한국에 있는 ACE S&P 500 ETF와 미국에 있는 SPY ETF는 뭐가
              다른가요?
            </ETFitem>
            <ETFitem>(증권사)ETF는 어느 증권사에서 살 수 있나요?</ETFitem>
            <ETFitem>(세금) 국내 상장된 ETF 세금은 어떻게 되나요?</ETFitem>
          </ETFlist>
        </QuestionInfo>
      </Question>
    </>
  );
}

const Category = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-bottom: 1px solid #999;
`;

const CategoryList = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  list-style: none;
`;

const CategoryItem = styled.li`
  align-items: center;
  margin: 0 50px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Top3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Today = styled.span``;
const Top3Text = styled.h3``;

const TopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px;
`;

const DateList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  width: 100%;
`;
const DateItem = styled.li`
  margin: 0 5px;
  margin: 10px;
`;
const DateCategory = styled.div`
  width: 80%;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #999;
  width: 100px;
  height: 40px;
`;

const Chart = styled.div`
  width: 100%;

  border: 1px solid black;
`;

const ChartList = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 180px;

  list-style: none;
`;

const ChartItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  padding: 30px 0;

  border-left: 1px solid #999;
`;

const ChartItemTitle = styled.strong`
  font-weight: 800;
`;

const ChartItemNum = styled.div`
  font-weight: 800;

  span {
    font-weight: 700;

    color: red;
  }
`;

const Banner = styled.img`
  width: 100%;
`;

const AceInsight = styled.h2`
  padding: 80px;

  font-size: 3.5rem;
  font-weight: 100;
`;

const PlayButton = styled.img`
  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 50px;

  position: absolute;

  width: 5rem;
  height: 5rem;

  top: 45%;
  left: 45%;
`;

const Vidio = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const VidioMovi = styled.img`
  width: 100%;
`;

const NewsList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  flex-wrap: wrap;
`;

const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border: 1px solid #999;
  width: 50%;

  padding: 32px;
`;
const NewsInfo = styled.div`
  font-size: 0.8rem;
  color: navy;
  padding-bottom: 15px;
`;

const NewsDate = styled.div`
  font-size: 0.8rem;
`;
const NewsTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;

  padding-bottom: 15px;
`;

const ETFinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px 32px;
  border: 1px solid #999;
`;

const ETFtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
`;
const ETFlist = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 150px;
  padding-top: 40px;
  list-style: none;
`;
const ETFitem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const ETFdate = styled.div``;

const Details = styled.img`
  border: 2px solid #999;
  width: 20px;
  height: 20px;
`;

const ETFtitleBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Question = styled.div`
  display: flex;
  width: 100%;
`;

const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px 32px;

  border: 1px solid #999;
  width: 50%;
`;

export default BodyBottom;
