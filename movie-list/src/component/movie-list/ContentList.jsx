import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { tmdbAxios } from "../../api/tmdbAxios";
import ContentItem from "./ContentItem";
import TitleBox from "./TitleBox";

function ContentList({ title, filter }) {
  const [state, setState] = useState(null);
  const fetchData = useCallback(async (url) => {
    let { data } = await tmdbAxios.get(url);
    setState(data.results);
  }, []);
  useEffect(() => {
    fetchData(filter[0].url);
  }, [filter, fetchData]);

  console.log(state);

  if (!state) return <div>로딩 중...</div>;

  return (
    <Containset>
      <TitleBox title={title} filter={filter} fetchData={fetchData} />
      <ItemList>
        {state.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ItemList>
    </Containset>
  );
}

const Containset = styled.div`
  padding: 10px 0;
`;

const ItemList = styled.ul`
  display: flex;
  margin-top: 20px;
  overflow-x: auto;
`;

export default ContentList;
