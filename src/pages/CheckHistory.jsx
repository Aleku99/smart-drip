import React from 'react'
import { useState, useEffect } from 'react'
import Charts from '../components/Charts'
import NavBar from '../components/NavBar'
import './CheckHistory.css'

function CheckHistory() {
  const [chartData, setChartData] = useState({humidity_data:[], temperature_data:[]})
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("http://localhost:3001/checkhistory");
      const data = await res.json();
      setChartData(data);
      console.log(1);
    };
    fetchPrices();
  }, []);

  return (
    <div className="check-history">
      <NavBar />
      <div className="check-history-content">
        <Charts data={chartData}/>
      </div>
    </div>
  )
}
export default CheckHistory
