import { useRef, useState } from "react";
import UserCreate from "./userCreate";

const initialState = [
  { id: 1, name: "hbs9312", email: "hbs9312@gmail.com" },
  { id: 2, name: "test02", email: "test02@gmail.com" },
  { id: 3, name: "test03", email: "test03@gmail.com" },
];

function UserList(name, email) {
  const [userList, setUserList] = useState(initialState);

  // 렌더링과 별개로 유지되는 변수
  const nexId = useRef(4);

  const handeleSubmit = (name, email) => {
    // 스프레드(펼침) 연산자를 이용한 방법
    // setUserList([
    //   ...userList,
    //   { id: 4, name: username, email: email },
    // ]);
    // Array.prototype.concat : 인자로 전달된 요소나 배열을 기존 배열에 합쳐서 새로운 배열을 반환
    setUserList(userList.concat({ id: nexId.current++, name, email })); // 후위연산자를 이용해서 값을 사용 후 증가
  };

  return (
    <div>
      <UserCreate onChange={handeleSubmit} />
      <ul>
        {/* 배열을 렌더링할 때 key값에 고유한 값을 전달해야 한다. */}
        {userList.map((user) => (
          <li key={user.id}>
            {user.name}({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
