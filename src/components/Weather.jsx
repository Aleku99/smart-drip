import React from "react";
import axios from "axios";
async function fetchWeatherData() {
  try {
    let { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Timisoara&appid=a42ec7af1eab5c20c77c4053491f6a96&units=metric"
    );
    console.log(data);
    return {
      temp: data.main.temp,
      city: data.namel,
      condition: data.weather[0].main,
    };
  } catch (err) {
    console.log(err);
  }
}
//TODO: integrate onInit() hook; weatherData is empty
const weatherData = fetchWeatherData();

export default function Weather() {
  return <div>Asdf</div>;
}
