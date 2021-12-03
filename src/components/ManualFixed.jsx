import React from "react";
import "./ManualFixed.css";
function ManualFixed() {
  function handleSubmit(event) {
    event.preventDefault();
    let mode = "0";
    let time = event.target.elements.time.value;
    let hour = time.split(":")[0];
    let minutes = time.split(":")[1];
    let duration = event.target.elements.duration.value;
    console.log(mode, hour, minutes, duration);
  }
  return (
    <div className="settings-div">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time"></input>
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

export default ManualFixed;
