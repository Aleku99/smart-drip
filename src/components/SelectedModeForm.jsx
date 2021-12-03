import React from "react";
import "./SelectedModeForm.css";

function SelectedModeForm(props) {
  return (
    <div className="selected-mode-form">
      <h1>Select mode</h1>
      <div className="selected-mode-form-input">
        <input
          onClick={props.handleSelection}
          type="radio"
          id="manual_fixed"
          name="mode"
          value="manual_fixed"
        ></input>
        <label htmlFor="manual_fixed">manual (fixed time)</label>
      </div>
      <div className="selected-mode-form-input">
        <input
          onClick={props.handleSelection}
          type="radio"
          id="manual_interval"
          name="mode"
          value="manual_interval"
        ></input>
        <label htmlFor="manual_interval">manual (specified interval)</label>
      </div>
      <div className="selected-mode-form-input">
        <input
          onClick={props.handleSelection}
          type="radio"
          id="auto"
          name="mode"
          value="auto"
        ></input>
        <label htmlFor="auto">automatic (sensors dependent)</label>
      </div>
    </div>
  );
}

export default SelectedModeForm;
