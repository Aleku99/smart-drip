import React from 'react'
import NavBar from '../components/NavBar'
import './WelcomePage.css'
import Time from '../components/Time.jsx'
import Weather from '../components/Weather.jsx'

function WelcomePage() {
  const background = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url("welcome_page_background.jpg")`,
    backgroundSize: 'cover',
  }

  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-page-content" style={background}>
        <Time />
        <Weather />
        <h1>Welcome {JSON.parse(sessionStorage.getItem('userData')).fname}</h1>
      </div>
    </div>
  )
}
export default WelcomePage
