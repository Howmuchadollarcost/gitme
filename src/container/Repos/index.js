import React from "react";
import styled from "styled-components";
import { MdLibraryBooks } from "react-icons/md";

const ReposList = styled.section`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Repo = styled.section`
  width: 250px;
  height: 65px;
  border-radius: 12px;

  background: ${props => (props.active ? "#181734" : "#4D4CAC")};
`;

const RepoName = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 4px 0 0 10px;

  .reponame {
    color: #fff;
    display: inline-block;
    font-size: 18px;
    margin: 0 0 0 5px;
  }
`;

const RepoDiscription = styled.div`
  color: #fff;
  margin: 0 0 0 32px;
  p {
    color: #fff;
    margin: 3px 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
  }
`;

const RepoSizeAndLanguage = styled.div`
  color: #fff;
  width: 190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  p {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
  }

  p:first-child::before {
    content: "";
    height: 5px;
    width: 5px;
    position: absolute;
    border-radius: 50%;
    background-color: #ed6975;
    left: -10px;
    top: 5px;
  }
`;

function index(props) {
  const getRepos = props.repoStats ? props.repoStats.slice(0, 4) : [];

  let repos;

  if (getRepos.length > 0) {
    repos = getRepos.map((repo, i) => {
      return (
        <Repo key={i} active={i === 0 ? true : false}>
          <RepoName>
            <MdLibraryBooks color={"#ED6975"} />
            <h1 className="reponame">{repo.name}</h1>
          </RepoName>
          <RepoDiscription>
            {repo.description ? <p>{repo.description} </p> : <p> - </p>}
          </RepoDiscription>
          <RepoSizeAndLanguage>
            {repo.language ? <p>{repo.language}</p> : <p> other </p>}
            <p> {repo.size} </p>
          </RepoSizeAndLanguage>
        </Repo>
      );
    });
  }

  return <ReposList>{repos}</ReposList>;
}

export default index;
