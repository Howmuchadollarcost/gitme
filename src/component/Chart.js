import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

import { DataConsumer } from '../DataContext';

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

    <DataConsumer>
      {({langStats}) => (
        <ChartContainer>
        <h1>Languages Used</h1>
        <Doughnut data={langStats || {}} options={options} />
      </ChartContainer>
      )}      
    </DataConsumer>


  )
}

export default Chart;
