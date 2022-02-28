import React from 'react'
import { useState, useEffect } from 'react'
import Charts from '../components/Charts'
import NavBar from '../components/NavBar'
import './CheckHistory.css'

function CheckHistory() {
  const [chartData, setChartData] = useState({humidity_data:[], temperature_data:[]})
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("http://192.168.100.78:3001/check_history");
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
