import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const ChartContainer = styled.div`
  height: 350px;
  width: 500px;
  margin: 25px 0;

  h1 {
    font-size: 1.5em;
    font-style: normal;
    font-weight: bolder;
    color: #1c132b;
    text-align: center;
  }
`;

const options = {
  maintainAspectRatio: false,
  legend: {
    position: "left",
    labels: {
      boxWidth: 10
    }
  }
};


function Chart(props){
  return(
    <ChartContainer>
      <h1>Languages Used</h1>
      <Doughnut data={props.langStats || {}} options={options} />
    </ChartContainer>
  )
}

// function Chart(props) {
//   const [stats, setStats] = useState({});

//   const fetchReposData = () => {
//     var me = new GhPolyglot("me");
//     const repoLabels = [];
//     const repoData = [];
//     const repoBackground = [];

//     let dataConfig = {};
//     me.userStats((err, stats) => {
//       if (err) {
//         console.log("Error:", err);
//       }

//       if (stats) {
//         stats.forEach(stat => {
//           repoLabels.push(stat.label);
//           repoData.push(stat.value);
//           repoBackground.push(stat.color);
//         });

//         dataConfig = {
//           labels: repoLabels,
//           datasets: [
//             {
//               data: repoData,
//               backgroundColor: repoBackground
//             }
//           ]
//         };
//       }

//       setStats(dataConfig);
//     });
//   };

//   useEffect(() => {
//     fetchReposData();
//   }, []);

//   return (
//     <ChartContainer>
//       <h1>Languages Used</h1>
//       <Doughnut data={stats || null} options={options} />
//     </ChartContainer>
//   );
// }



export default Chart;
