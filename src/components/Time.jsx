import React from "react";
import { useState } from "react";
import useInterval from "react-useinterval";
import "./Time.css";

export default function Time() {
  var date = new Date();
  const [state, setState] = useState({
    hour: (date.getHours() < 10 ? "0" : "") + date.getHours(),
    minutes: (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
    seconds: (date.getSeconds() < 10 ? "0" : "") + date.getSeconds(),
  });
  useInterval(function () {
    setState({
      hour: (date.getHours() < 10 ? "0" : "") + date.getHours(),
      minutes: (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
      seconds: (date.getSeconds() < 10 ? "0" : "") + date.getSeconds(),
    });
  }, 1000);
  return (
    <h1>
      {state.hour}
      <span id="blinking-dots">:</span>
      {state.minutes}
    </h1>
  );
}
