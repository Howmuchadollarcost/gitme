import React, { useState, createContext } from "react";
import { useEffect } from "react";
import GhPolyglot from "gh-polyglot";

const DataContext = createContext();

const DataProvider = props => {
  //Set and submitted user name
  const [query, setQuery] = useState('');

  //Data from Github API
  const [userData, setUserData] = useState([]);
  const [repoStats, setRepoStats] = useState([]);
  const [langStats, setLangStats] = useState({});
  const [rateLimit, setRateLimit] = useState({});

  //Loading 
  const [loading, setLoading] = useState(false);

  //Error handling
  const [error, setError] = useState({active: false, type: 200});


  const handleChange = (e) => {
      setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    if(query !== ''){
      e.preventDefault();
      fetchUserData(query);
      fetchReposData(query);
      fetchLanguagesData(query);
      setQuery('');
    }
  }


  const fetchUserData = async (username) => {
    try {
      const userURL = `https://api.github.com/users/${username}`;
      const response = await fetch(userURL);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchReposData = (user) => {
    setLoading(true);
    var me = new GhPolyglot(`${user}`);
    me.getAllRepos((err, stats) => {
      if (err) {
        console.error("Repo Error: ", err);
        setLoading(false);
        //Do Error Handling
      }
      setLoading(false);
      setRepoStats(stats);
    });
  }


  const fetchLanguagesData = (user) => {
    setLoading(true);
    var me = new GhPolyglot(`${user}`);
    const repoLabels = [];
    const repoData = [];
    const repoBackground = [];
    me.userStats((err, stats) => {
      if (err) {
        console.error("Language Error: ", err);
        setError({active: true, type: 400})
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

        setLoading(false);
        setLangStats(dataConfig);
      }
    });
  }


  const getRateLimit = async () => {
    try {
      const rateLimitURL = `https://api.github.com/rate_limit`;
      const response = await fetch(rateLimitURL);
      const data = await response.json();
      setRateLimit(data.resources.core);
    } catch (error) {
      console.error("RateLimit Error: ", error);
    }
  };

  useEffect(() => {
    getRateLimit();
  }, []);

  return (
    <DataContext.Provider value={
      {
        query: query,
        userData: userData,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        rateLimit: rateLimit,
        loading: loading,
        repoStats: repoStats,
        langStats: langStats,
        error: error
      }}>
      {props.children}
    </DataContext.Provider>
  );
};


const DataConsumer = DataContext.Consumer;

export {DataProvider, DataConsumer};