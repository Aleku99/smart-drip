import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './ManualInterval.css'
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import { updateConfiguration } from '../api/firebase'
function ManualInterval(props) {
  const [date, setDate] = useState(undefined)
  const [daily, setDaily] = useState(false)

  const handleDailyCheckBox = (event) => {
    setDaily(event.target.checked)
    if (event.target.checked === true) {
      setDate('daily')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let mode = '1'
    let interval = event.target.elements.time_interval.value
    let duration = event.target.elements.duration.value
    let dates = date

    if (date === undefined && daily === false) {
      window.alert(
        'You have to either select daily or pick irrigation dates from calendar'
      )
    } else {
      await axios
        .post(
          'http://192.168.100.78:3001/change_config',
          {
            mode: mode,
            interval: interval,
            duration: duration,
            dates: dates,
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
        .finally(() => {
          let config = {
            mode: mode,
            interval: interval,
            duration: duration,
            dates: date,
          }
          updateConfiguration(config)
          props.updateEventList()
        })
    }
  }
  return (
    <>
      <div className="settings-div">
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="input">
            <label htmlFor="time_interval">Time interval (h)</label>
            <input
              type="number"
              id="time_interval"
              name="time_interval"
              min="1"
              max="24"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="duration">Duration (s)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              min="60"
              max="600"
              required
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
    </>
  )
}

export default ManualInterval
