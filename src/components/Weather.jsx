import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Weather.css'
import { IoIosThunderstorm } from 'react-icons/io'
import {
  BsFillCloudDrizzleFill,
  BsFillCloudRainFill,
  BsFillCloudSnowFill,
  BsFillCloudFogFill,
  BsFillSunFill,
  BsCloudsFill,
  BsFillMoonFill,
} from 'react-icons/bs'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    temp: 'unknown',
    city: 'unknown',
    main: 'unknown',
  })

  const icon_style = {
    color: '#f5eec2',
    margin: 'auto 1rem',
    fontSize: '1.5rem',
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  }

  function chooseWeatherIcon(description) {
    switch (description.toLowerCase()) {
      case 'thunderstorm':
        return <IoIosThunderstorm style={icon_style} />
      case 'drizzle':
        return <BsFillCloudDrizzleFill style={icon_style} />
      case 'rain':
        return <BsFillCloudRainFill style={icon_style} />
      case 'snow':
        return <BsFillCloudSnowFill style={icon_style} />
      case 'atmosphere':
        return <BsFillCloudFogFill style={icon_style} />
      case 'clear':
        if (new Date().getHours() < 18)
          return <BsFillSunFill style={icon_style} />
        return <BsFillMoonFill style={icon_style} />
      case 'clouds':
        return <BsCloudsFill style={icon_style} />
      default:
        return <BsFillSunFill style={icon_style} />
    }
  }

  useEffect(function effectFunction() {
    async function fetchWeatherData() {
      try {
        let { data } = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Timisoara&appid=a42ec7af1eab5c20c77c4053491f6a96&units=metric'
        )

        setWeatherData({
          temp: Math.round(data.main.temp),
          city: data.name,
          main: chooseWeatherIcon(data.weather[0].main),
        })
      } catch (err) {
        console.log(err)
      }
    }
    fetchWeatherData()
  }, [])

  return (
    <div className="weather">
      {weatherData.main}
      <span>{weatherData.temp}°C</span>
      <h2>{weatherData.city}</h2>
    </div>
  )
}
