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
    if (event.target.value === 'manual_fixed') {
      setConfigOption(0)
    } else if (event.target.value === 'manual_interval') {
      setConfigOption(1)
    } else {
      setConfigOption(2)
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
  }, [])

  return systemDetected ? (
    <div className="change-config">
      <NavBar />
      <div className="change-config-content">
        <SelectedModeForm handleSelection={selectionHandler} />
        {settingsArray[configOption]}
      </div>
    </div>
  ) : (
    <NotFound text="System not found on current network" />
  )
}
export default ChangeConfig
