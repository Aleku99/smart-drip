import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Charts from '../components/Charts'
import NavBar from '../components/NavBar'
import './CheckHistory.css'
import { systemActions } from '../store'
import axios from 'axios'
import NotFound from './NotFound'

function CheckHistory() {
  const [chartData, setChartData] = useState({
    humidity_data: [],
    temperature_data: [],
  })
  const dispatch = useDispatch()
  const systemDetected = useSelector((state) => state.systemDetected)
  const USER_TOKEN = JSON.parse(sessionStorage.getItem('userData')).password
  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch('http://192.168.100.78:3001/check_history')
      const data = await res.json()
      setChartData(data)
    }
    async function checkSystem() {
      axios
        .post('http://192.168.100.78:3001/check_system', {
          userToken: USER_TOKEN,
        })
        .then(function (response) {
          dispatch(systemActions.setTrue())
        })
        .catch(function (error) {
          dispatch(systemActions.setFalse())
        })
    }
    checkSystem()
    fetchHistory()
  }, [])

  return systemDetected ? (
    <div className="check-history">
      <NavBar />
      <div className="check-history-content">
        <Charts data={chartData} />
      </div>
    </div>
  ) : (
    <NotFound text="System was not found on the current network" />
  )
}
export default CheckHistory
