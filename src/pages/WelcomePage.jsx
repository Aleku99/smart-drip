import React from 'react'
import NavBar from '../components/NavBar'
import './WelcomePage.css'
import Time from '../components/Time.jsx'
import Weather from '../components/Weather.jsx'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  let navigate = useNavigate()
  const background = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url("welcome_page_background.jpg")`,
    backgroundSize: 'cover',
  }

  window.addEventListener('popstate', function (event) {
    event.preventDefault()
    navigate('/welcomepage')
  })

  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-page-content" style={background}>
        <h1>SMART-DRIP</h1>
        <Time />
        <Weather />
        <h1>
          Welcome to smart-drip{' '}
          {JSON.parse(sessionStorage.getItem('userData')).fname}
        </h1>
        <h2>- the future of irrigation -</h2>
      </div>
    </div>
  )
}
export default WelcomePage
