import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import './ChangeConfig.css'
import SelectedModeForm from '../components/SelectedModeForm.jsx'
import ManualFixed from '../components/ManualFixed.jsx'
import ManualInterval from '../components/ManualInterval.jsx'
import Automatic from '../components/Automatic'

function ChangeConfig() {
  const [configOption, setConfigOption] = useState()
  const settingsArray = [<ManualFixed />, <ManualInterval />, <Automatic />]
  function selectionHandler(event) {
    if (event.target.value === 'manual_fixed') {
      setConfigOption(0)
    } else if (event.target.value === 'manual_interval') {
      setConfigOption(1)
    } else {
      setConfigOption(2)
    }
  }
  return (
    <div className="change-config">
      <NavBar />
      <div className="change-config-content">
        <SelectedModeForm handleSelection={selectionHandler} />
        {settingsArray[configOption]}
      </div>
    </div>
  )
}
export default ChangeConfig
