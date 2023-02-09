import styled from "styled-components";
import ProfileBox from "../profile/ProfileBox";

function Profile() {
  return (
    <Cotainer>
      <ProfileBox />
    </Cotainer>
  );
}

const Cotainer = styled.div`
  width: 100%;
`;

export default Profile;
