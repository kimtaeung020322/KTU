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

export default BodyBottom;
