import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import './ChangeConfig.css'
import SelectedModeForm from '../components/SelectedModeForm.jsx'
import ManualFixed from '../components/ManualFixed.jsx'
import ManualInterval from '../components/ManualInterval.jsx'
import Automatic from '../components/Automatic'
import { useDispatch, useSelector } from 'react-redux'
import { systemActions } from '../store'
import axios from 'axios'
import NotFound from './NotFound'
import { ref, get, child } from '../api/firebase'
import { getDatabase } from 'firebase/database'

function ChangeConfig() {
  const [configOption, setConfigOption] = useState()
  const [events, setEvents] = useState([])
  const settingsArray = [
    <ManualFixed updateEventList={getConfigData} />,
    <ManualInterval updateEventList={getConfigData} />,
    <Automatic updateEventList={getConfigData} />,
  ]
  const dispatch = useDispatch()
  const systemDetected = useSelector((state) => state.system.systemDetected)
  const USER_TOKEN = JSON.parse(sessionStorage.getItem('userData')).usertoken
  function selectionHandler(event) {
    setConfigOption(parseInt(event.target.value))
  }

  function settingDescription() {
    if (configOption === 0) {
      return <p>Select dates, time and duration of your irrigation.</p>
    } else if (configOption === 1) {
      return <p>Select dates, interval and duration of irrigation.</p>
    } else if (configOption === 2) {
      return (
        <p>
          Automatic mode enabled. System will start automatically depending on
          humidity and temperature sensor
        </p>
      )
    }
  }

  function checkConfigAndUpdateEvents(config) {
    if (config.mode === '0') {
      let hour = config.hour
      let minutes = config.minutes
      let duration = config.duration
      if (config.dates === 'daily') {
        setEvents([`everyday at ${hour}:${minutes} for ${duration}s`])
      } else {
        let events = []
        config.dates.forEach((date) => {
          events.push(
            `${date.day}/${date.month}/${date.year} at ${hour}:${minutes} for ${duration}s`
          )
        })
        setEvents(events)
      }
    } else if (config.mode === '1') {
      let interval = config.interval
      let duration = config.duration
      if (config.dates === 'daily') {
        setEvents([`everyday every ${interval} hour(s) for ${duration}s`])
      } else {
        let events = []
        config.dates.forEach((date) => {
          events.push(
            `${date.day}/${date.month}/${date.year}  every ${interval} hour(s) for ${duration}s`
          )
        })
        setEvents(events)
      }
    } else if (config.mode === '2') {
      setEvents([
        `automatic mode enabled. System will start depending based on temperature and humidity`,
      ])
    }
  }
  function getConfigData() {
    let email = JSON.parse(sessionStorage.getItem('userData')).email
    let password = JSON.parse(sessionStorage.getItem('userData')).password
    const dbRef = ref(getDatabase())
    get(child(dbRef, 'users/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            if (
              child.val().email === email &&
              child.val().password === password
            ) {
              checkConfigAndUpdateEvents(child.val().config)
            }
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  function checkSystem() {
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
  useEffect(() => {
    checkSystem()
    getConfigData()
  }, [USER_TOKEN, dispatch])

  return systemDetected ? (
    <div className="change-config">
      <NavBar />
      <div className="change-config-content">
        <div className="change-config-form">
          <h1 id="title">SMART-DRIP</h1>
          <SelectedModeForm handleSelection={selectionHandler} />
          {settingDescription()}
          {settingsArray[configOption]}
        </div>
        <div className="change-config-event-list">
          <h1>Future irrigation events</h1>
          {events.map((event) => (
            <li>{event}</li>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NotFound text="System not found on current network" />
  )
}
export default ChangeConfig
