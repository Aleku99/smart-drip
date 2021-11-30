import React from "react";
import NavBar from "../components/NavBar";
import "./WelcomePage.css";
import { useState } from "react";
import axios from "axios";

export default function WelcomePage() {
  var date = new Date();
  const [state, setState] = useState({
    hour: (date.getHours() < 10 ? "0" : "") + date.getHours(),
    minutes: (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
    visible: true,
  });
  const background = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url("welcome_page_background.jpg")`,
    backgroundSize: "cover",
  };
  const showDots = { opacity: "1.0" };
  const hideDots = { opacity: "0.0" };

  function fetchWeatherData() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Timisoara&appid=a42ec7af1eab5c20c77c4053491f6a96"
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return -1;
      });
  }

  const weather = fetchWeatherData();
  console.log(weather);

  //   implement blinking dots
  //   add weather under welcome message

  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-page-content" style={background}>
        <h1>
          {state.hour}
          <span className={state.visible ? showDots : hideDots}>:</span>
          {state.minutes}
        </h1>
        <h1>Welcome Aleku</h1>
      </div>
    </div>
  );
}
