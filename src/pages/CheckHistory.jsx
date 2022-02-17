import React from 'react'
import { useState, useEffect } from 'react'
import Charts from '../components/Charts'
import NavBar from '../components/NavBar'
import './CheckHistory.css'

function CheckHistory() {
  // const [chartData, setChartData] = useState({})
  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
  //     const data = await res.json()
  //     setChartData({
  //       labels: data.data.map((crypto) => crypto.name),
  //       datasets: [
  //         {
  //           label: "Price in USD",
  //           data: data.data.map((crypto) => crypto.priceUsd),
  //           backgroundColor: [
  //             "#ffbb11",
  //             "#ecf0f1",
  //             "#50AF95",
  //             "#f3ba2f",
  //             "#2a71d0"
  //           ]
  //         }
  //       ]
  //     });
  //   };
  //   fetchPrices()
  // }, []);

  return (
    <div className="check-history">
      <NavBar />
      <div className="check-history-content">
        <Charts />
      </div>
    </div>
  )
}
export default CheckHistory
