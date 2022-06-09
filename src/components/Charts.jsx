import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import './Charts.css'
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Humidity & temperature chart',
    },
  },
}

let labels_24hrs = Array.from(Array(24).keys()).reverse()
labels_24hrs = labels_24hrs.map((element) => chooseHour(element))
let labels_7days = Array.from(Array(7).keys()).reverse()
labels_7days = labels_7days.map((element) => chooseDay(element))
let labels_1month = Array.from(Array(31).keys()).reverse()
labels_1month = labels_1month.map((element) => chooseDay(element))

function chooseHour(hoursAgo) {
  let date = new Date()
  let returnedHour = date.getHours() - hoursAgo
  if (returnedHour >= 0) {
    return returnedHour + ':00'
  } else {
    return (24 + returnedHour).toString() + ':00'
  }
}
function chooseDay(daysAgo) {
  let date = new Date()
  let daysNumberInPastMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()
  let returnedDay = date.getDate() - daysAgo

  if (returnedDay >= 1) {
    return returnedDay.toString() + '/' + (date.getMonth() + 1).toString()
  } else {
    let monthBefore = date.getMonth() - 1
    if (date.getMonth() === 0) {
      monthBefore = 11
    }
    return (
      (daysNumberInPastMonth + returnedDay).toString() +
      '/' +
      (monthBefore + 1).toString()
    )
  }
}

function Charts(props) {
  const [label, setLabel] = useState('24hrs')
  let temperature_data = [] //use in chooseData function
  let humidity_data = [] //use in chooseData function
  let labels_custom_hrs = Array.from(
    Array(props.data.humidity_data.length).keys()
  ).reverse()
  labels_custom_hrs = labels_custom_hrs.map((element) => chooseHour(element))
  let labels_custom_days = Array.from(Array(1).keys()).reverse()
  labels_custom_days = labels_custom_days.map((element) => chooseDay(element))

  function switchlabels(event) {
    setLabel(event.target.value)
  }

  function chooseLabel(label) {
    if (props.data.humidity_data.length < 24) {
      if (label === '24hrs') {
        return labels_custom_hrs
      } else if (label === '7days') {
        return labels_custom_days
      } else {
        return labels_custom_days
      }
    } else {
      if (label === '24hrs') {
        return labels_24hrs
      } else if (label === '7days') {
        return labels_7days
      } else {
        return labels_1month
      }
    }
  }
  function chooseData(label, type) {
    switch (type) {
      case 'HUMIDITY':
        if (label === '24hrs') {
          props.data.humidity_data.reverse().forEach((element, index) => {
            if (index < 24) {
              humidity_data.push(element)
            }
          })
        } else if (label === '7days') {
          let average = 0
          let counter = 0
          props.data.humidity_data.reverse().forEach((element, index) => {
            if (counter < 7 && index % 24 === 0 && index !== 0) {
              average = average / 24
              humidity_data.push(average)
              average = element
              counter++
            } else {
              average = average + element
            }
          })
        } else {
          let average = 0
          let counter = 0
          props.data.humidity_data.reverse().forEach((element, index) => {
            if (counter < 32 && index % 24 === 0 && index !== 0) {
              average = average / 24
              humidity_data.push(average)
              average = element
              counter++
            } else {
              average = average + element
            }
          })
        }
        break
      case 'TEMPERATURE':
        if (label === '24hrs') {
          props.data.temperature_data.reverse().forEach((element, index) => {
            if (index < 24) {
              temperature_data.push(element)
            }
          })
        } else if (label === '7days') {
          let average = 0
          let counter = 0
          props.data.temperature_data.reverse().forEach((element, index) => {
            if (counter < 7 && index % 24 === 0 && index !== 0) {
              average = average / 24
              temperature_data.push(average)
              average = element
              counter++
            } else {
              average = average + element
            }
          })
        } else {
          let average = 0
          let counter = 0
          props.data.temperature_data.reverse().forEach((element, index) => {
            if (counter < 32 && index % 24 === 0 && index !== 0) {
              average = average / 24
              temperature_data.push(average)
              average = element
              counter++
            } else {
              average = average + element
            }
          })
        }
        break
      default: {
      }
    }

    if (type === 'HUMIDITY') {
      humidity_data = humidity_data.reverse()
      console.log('HUMIDITY ' + humidity_data)
      return humidity_data
    } else {
      temperature_data = temperature_data.reverse()
      console.log('TEMP ' + temperature_data)
      return temperature_data
    }
  }

  const data = {
    labels: chooseLabel(label),
    datasets: [
      {
        label: 'Humidity',
        data: chooseData(label, 'HUMIDITY').reverse(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        color: '#000000',
      },
      {
        label: 'Temperature',
        data: chooseData(label, 'TEMPERATURE').reverse(),
        borderColor: 'rgb(255, 165, 0)',
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        color: '#000000',
      },
    ],
  }

  return (
    <div className="charts">
      <Line options={options} data={data} />
      <div className="buttons">
        <button className="button3" onClick={switchlabels} value="24hrs">
          24 hours
        </button>
        <button className="button3" onClick={switchlabels} value="7days">
          1 week
        </button>
        <button className="button3" onClick={switchlabels} value="1month">
          1 Month
        </button>
      </div>
    </div>
  )
}

export default Charts
