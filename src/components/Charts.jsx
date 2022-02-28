
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import "./Charts.css";
import {useState, useEffect} from "react";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Humidity & temperature chart',
    },
  },
};

const date = new Date();
let labels_24hrs = Array.from(Array(24).keys()).reverse();
labels_24hrs = labels_24hrs.map(element => chooseHour(element));
let labels_7days = Array.from(Array(7).keys()).reverse();
labels_7days = labels_7days.map(element => chooseDay(element));
let labels_1month = Array.from(Array(31).keys()).reverse();
labels_1month = labels_1month.map(element => chooseDay(element));

function chooseHour(hoursAgo){
  let date = new Date();
  let returnedHour = date.getHours() - hoursAgo;
  if(returnedHour >= 0){
    return (returnedHour+":00");
  }
  else{
    return (24 + returnedHour).toString() + ":00";
  }
}
function chooseDay(daysAgo){
  let date = new Date();
  let daysNumberInPastMonth =  new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  let returnedDay = date.getDate() - daysAgo;

  if(returnedDay >= 1){
    return (returnedDay.toString() + "/" + (date.getMonth() + 1).toString());
  }
  else{
    let monthBefore = date.getMonth() - 1;
    if(date.getMonth() === 0){
      monthBefore = 11;
    }
    return (daysNumberInPastMonth + returnedDay).toString() + "/" + (monthBefore + 1).toString();
  }
}


function Charts(props) {
  const [label, setLabel] = useState("24hrs");
  
  
  function switchlabels(event){
    setLabel(event.target.value);
  }

  function chooseLabel(label){
    if(label==="24hrs"){
      return labels_24hrs;
    }
    else if(label === "7days"){
      return labels_7days;
    }
    else{
      return labels_1month;
    }
  }

    const data = {
      labels: chooseLabel(label),
      datasets: [
        {
          label: 'Humidity',
          data: props.data.humidity_data,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          color: '#000000'
        },
        {
          label: 'Temperature',
          data: props.data.temperature_data,
          borderColor: 'rgb(255, 165, 0)',
          backgroundColor: 'rgba(255, 165, 0, 0.5)',
          color: '#000000'
        },
      ],
    };
  
  
  return (
    <div className="charts">
      <Line options={options} data={data} />
      <div className="buttons">
        <button className="button3" onClick={switchlabels} value="24hrs">24 hours</button>
        <button className="button3" onClick={switchlabels} value="7days">1 week</button>
        <button className="button3" onClick={switchlabels} value="1month">1 Month</button>
      </div>
      
    </div>
  );
}

export default Charts;
