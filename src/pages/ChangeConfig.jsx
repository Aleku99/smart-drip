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

function ChangeConfig() {
  const [configOption, setConfigOption] = useState()
  const settingsArray = [<ManualFixed />, <ManualInterval />, <Automatic />]
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
      return <p>Select dates, interval time and duration of irrigation.</p>
    } else if (configOption === 2) {
      return <p>Automatic mode enabled. System will start automatically.</p>
    }
  }

  useEffect(() => {
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
  }, [USER_TOKEN, dispatch])

  return systemDetected ? (
    <div className="change-config">
      <NavBar />
      <div className="change-config-content">
        <h1 id="title">SMART-DRIP</h1>
        <SelectedModeForm handleSelection={selectionHandler} />
        {settingDescription()}
        {settingsArray[configOption]}
      </div>
    </div>
  ) : (
    <NotFound text="System not found on current network" />
  )
}
export default ChangeConfig
