import React, { Component } from "react";
import styled from "styled-components";

import { DataConsumer } from "./DataContext";

import Chart from "./component/Chart";
import Profile from "./container/Profile";
import Repos from "./container/Repos";
import Form from "./container/Form";
import RateLimit from "./container/RateLimit";
import MoonLoader from "react-spinners/MoonLoader";

const MainContainer = styled.div`
  position: relative;
  width: 99%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const StatsContainer = styled.div`
  position: relative;
  min-width: 1024px;
  height: 700px;
  background: #f6f4fc;
  border-radius: 25px;
`;

const RepoStats = styled.div`
  position: relative;
  width: 825px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 100px;
  left: 100px;
`;

const TopRepos = styled.section`
  width: 300px;
  height: 400px;
  background: #ffffff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5em;
    font-style: normal;
    font-weight: bolder;
    margin: 10px 0;
    color: #1c132b;
    //padding: 20px 0 ;
  }
`;

const ChartContainer = styled.section`
  width: 500px;
  height: 400px;
  background: #fff;
  border-radius: 25px;
`;

class App extends Component {
  render() {
    return (
      <DataConsumer>
        {({ loading }) => (
          <React.Fragment>
            <RateLimit />
            <Form />
            {loading ? (
              <MainContainer>
                <MoonLoader />
              </MainContainer>
            ) : (
              <React.Fragment>
                <MainContainer>
                  <StatsContainer>
                    <Profile />

                    <RepoStats>
                      <TopRepos>
                        <h1>Top Repositories</h1>

                        <Repos />
                      </TopRepos>

                      <ChartContainer>
                        <Chart />
                      </ChartContainer>
                    </RepoStats>
                  </StatsContainer>
                </MainContainer>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </DataConsumer>
    );
  }
}

export default App;
