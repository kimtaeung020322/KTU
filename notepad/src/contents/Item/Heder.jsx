import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import LoginFrom from "../form/LoginFrom";

function Heder() {
  const [time, setTime] = useState(new Date());
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 10000);
  }, []);

  const todayTime = () => {
    let FullYear = time.getFullYear();
    let Month = time.getMonth() + 1;
    let Date = time.getDate();
    let Day = week[time.getDay()];
    let Hours = time.getHours();
    let Minutes = time.getMinutes();

    return (
      FullYear +
      "년 " +
      Month +
      "월 " +
      Date +
      "일 " +
      Day +
      "요일 " +
      Hours +
      "시 " +
      Minutes +
      "분"
    );
  };

  const [modelIsOpen, setModelIsOpen] = useState(false);

  return (
    <Header>
      <Login onClick={() => setModelIsOpen(true)}>로그인</Login>
      <Modal isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)}>
        <LoginFrom />
      </Modal>
      <Title>제목</Title>
      <Time>{todayTime()}</Time>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  border: 1px solid black;
`;

const Login = styled.button``;

const Title = styled.h1``;

const Time = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default Heder;
