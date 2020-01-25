import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
//import GhPolyglot from "gh-polyglot";
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
  console.log(props.langStats);

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

// class Chart extends Component {

// 	state={
//     repoStats: {}
// 	}

// 	componentDidMount(){
// 		this.fetchReposData();
// 	}

//   

//   render() {
//     return (
//       <div
//         style={{
//           maxWidth: '500px',
//           maxHeight: '500px'
//         }
//         }
//       >
//         <Doughnut data={this.state.repoStats || null} options={{ maintainAspectRatio: true }}  />
//       </div>
//     );
//   }
// }

export default Chart;
