import React from "react";
import "./ManualInterval.css";
function ManualInterval() {
  function handleSubmit(event) {
    event.preventDefault();
    let mode = "1";
    let interval = event.target.elements.time_interval.value;
    let duration = event.target.elements.duration.value;
    console.log(mode, interval, duration);
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ManualInterval;
