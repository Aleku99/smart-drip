import React from "react";
import "./SelectedModeForm.css";

function SelectedModeForm() {
  return (
    <div>
      <h1>Select mode</h1>
      <input
        type="radio"
        id="manual_fixed"
        name="manual_fixed"
        value="manual_fixed"
      ></input>
      <label for="manual_fixed">manual (fixed time)</label>
      <input
        type="radio"
        id="manual_interval"
        name="manual_interval"
        value="manual_interval"
      ></input>
      <label for="manual_interval">manual (specified interval)</label>
      <input type="radio" id="auto" name="auto" value="auto"></input>
      <label for="auto">automatic (sensors dependent)</label>
    </div>
  );
}

export default SelectedModeForm;
