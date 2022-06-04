import React from 'react'
import axios from 'axios'
import './ManualInterval.css'
function ManualInterval() {
  async function handleSubmit(event) {
    event.preventDefault()
    let mode = '1'
    let interval = event.target.elements.time_interval.value
    let duration = event.target.elements.duration.value

    await axios
      .post(
        'http://192.168.100.78:3001/change_config',
        {
          mode: mode,
          interval: interval,
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
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="time_interval">Time interval (h)</label>
          <input
            type="number"
            id="time_interval"
            name="time_interval"
            min="1"
            max="24"
          ></input>
        </div>
        <div className="input">
          <label htmlFor="duration">Duration (seconds)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            min="1"
            max="600"
          ></input>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default ManualInterval
