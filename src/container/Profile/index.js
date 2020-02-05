import React from "react";
import styled from "styled-components";
import { FaCalendar } from "react-icons/fa";

import { DataConsumer } from "../../DataContext";

const UserContainer = styled.div`
  position: relative;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 25%;
  background-color: #f8e5e9;
  border-radius: 28px;
  display: flex;
`;

const UserProfile = styled.section`
  position: absolute;
  max-width: 250px;
  bottom: 25%;
  left: 50px;

  h1 {
    font-size: 1.4em;
    font-style: normal;
    font-weight: bolder;
    margin: 10px 0;
    color: #ed6975;
  }

  p {
    font-style: normal;
    font-weight: 100;
    color: #1c132b;
    margin: 10px 0;
  }

  span {
    font-size: 15px;
    font-style: normal;
    font-weight: 100;
    color: #1c132b;
    display: grid;
    grid-template-columns: 20px 1fr;
  }
`;

const UserPic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #191126;
  mix-blend-mode: darken;
  border: 5px solid #ed6975;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: -70px;
  right: 105px;
`;

const UserStats = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  right: 5px;
`;

const UserRepo = styled.section`
  width: 100px;
  height: 50px;
  background: #ffffff;
  border-radius: 12px;
  display: grid;
  align-content: center;
  justify-items: center;
  color: #1c132b;

  p:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
  }

  p:last-child {
    font-style: normal;
    font-weight: 200;
    font-size: 1em;
  }
`;

function Profile() {
  return (
    <DataConsumer>
      {({ userData }) => {
        const date = (userData.length !== 0) ? new Date(userData.created_at).toLocaleString() : null;
        return (
        <UserContainer>
          <UserProfile>
            {userData ? <h1>{userData.name}</h1> : <h1>Mhm</h1>}
            {userData ? <p>@{userData.login}</p> : <p>Mhm</p>}
            <span>
              <FaCalendar color={"#ED6975"} />
              Joined{" "}
              {date}
            </span>
          </UserProfile>
          <UserPic src={userData.avatar_url} />
          <UserStats>
            <UserRepo>
              <p>{userData.public_repos}</p>
              <p>Repos</p>
            </UserRepo>
            <UserRepo>
              <p>{userData.followers}</p>
              <p>Followers</p>
            </UserRepo>
            <UserRepo>
              <p>{userData.following}</p>
              <p>Following</p>
            </UserRepo>
          </UserStats>
        </UserContainer>
        )
      }}
    </DataConsumer>
  );
}

export default Profile;
