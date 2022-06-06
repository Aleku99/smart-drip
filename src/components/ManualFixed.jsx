import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './ManualFixed.css'
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
function ManualFixed() {
  const [date, setDate] = useState(null)
  const [daily, setDaily] = useState(false)

  const handleDailyCheckBox = (event) => {
    setDaily(event.target.checked)
    if (event.target.checked === true) {
      setDate(null)
    }
  }
  async function handleSubmit(event) {
    event.preventDefault()
    let mode = '0'
    let time = event.target.elements.time.value
    let hour = time.split(':')[0]
    let minutes = time.split(':')[1]
    let duration = event.target.elements.duration.value

    await axios
      .post(
        'http://192.168.100.78:3001/change_config',
        {
          mode: mode,
          hour: hour,
          minutes: minutes,
          duration: duration,
        },
        { 'Access-Control-Allow-Origin': '*' }
      )
      .then((response) => {
        if (response.status === 200) {
          window.alert('Configuration updated succesfully')
        } else {
          window.alert('Configuration not updated')
        }
        console.log(response)
      })
  }
  return (
    <div className="settings-div">
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div className="input">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time"></input>
        </div>
        <div className="input">
          <label htmlFor="duration">Duration (s)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            min="1"
            max="600"
          ></input>
        </div>
        <label>Dates</label>
        {daily ? <></> : <DtPicker onChange={setDate} type="multi" />}
        <div className="daily-input">
          <input
            type="checkbox"
            id="daily"
            name="daily"
            style={{ width: '10%', marginRight: '5%' }}
            onClick={handleDailyCheckBox}
          ></input>
          <label htmlFor="daily" style={{ margin: 'auto 0' }}>
            daily
          </label>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default ManualFixed
