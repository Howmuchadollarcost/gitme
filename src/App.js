import React, { Component } from "react";
import styled from "styled-components";

import GhPolyglot from "gh-polyglot";
import Chart from "./component/Chart";
import Profile from "./container/Profile";
import Repos from "./container/Repos";
import Form from "./container/Form";
import RateLimit from "./container/RateLimit"
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
  state = {
    userData: [],
    repoStats: [],
    langStats: {},
    rateLimit: {},
    error: null,
    loading: false,
    query: ""
  };

  componentDidMount() {
    console.log(this.state.rateLimit)
  }

  fetchReposData(user) {
    var me = new GhPolyglot(`${user}`);
    me.getAllRepos((err, stats) => {
      if (err) {
        console.error("Repo Error: ", err);
        this.setState({
          err,
          loading: false
        });
      }

      this.setState({
        loading: false,
        repoStats: stats
      });
    });
  }

  fetchUserData(user) {
    const userURL = `http://api.github.com/users/${user}`;
    fetch(userURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          userData: data,
          loading: false
        });
      })
      .catch(error =>
        this.setState({
          error,
          loading: false
        })
      );
  }

  fetchLanguagesData(user) {
    var me = new GhPolyglot(`${user}`);
    const repoLabels = [];
    const repoData = [];
    const repoBackground = [];
    me.userStats((err, stats) => {
      if (err) {
        console.error("Language Error: ", err);
        this.setState({
          err
        });
      }

      if (stats) {
        stats.forEach(stat => {
          repoLabels.push(stat.label);
          repoData.push(stat.value);
          repoBackground.push(stat.color);
        });
        const dataConfig = {
          labels: repoLabels,
          datasets: [
            {
              data: repoData,
              backgroundColor: repoBackground
            }
          ]
        };
        this.setState({
          langStats: dataConfig
        });
      }
    });
  }

  getRateLimit(){
    const rateLimitURL = `https://api.github.com/rate_limit`
    fetch(rateLimitURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rateLimit: data.resources.core
        })
      })
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query.length > 0) {
      this.fetchReposData(this.state.query);
      this.fetchUserData(this.state.query);
      this.fetchLanguagesData(this.state.query);
      this.getRateLimit();
      this.setState({
        query: "",
        loading: true
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { userData, repoStats, langStats, loading, rateLimit } = this.state;
    return (
      <React.Fragment>
        <RateLimit rateLimit={rateLimit} />
        <Form handleSubmit={this.handleSubmit.bind(this)} query={this.state.query} handleChange={this.handleChange.bind(this)} />
        {loading ? (
          <MainContainer>
            <MoonLoader />
          </MainContainer>
        ) : (
          <React.Fragment>
            <MainContainer>
              <StatsContainer>
                <Profile userData={userData} />

                <RepoStats>
                  <TopRepos>
                    <h1>Top Repositories</h1>

                    <Repos repoStats={repoStats} />
                  </TopRepos>

                  <ChartContainer>
                    <Chart langStats={langStats} />
                  </ChartContainer>
                </RepoStats>
              </StatsContainer>
            </MainContainer>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
