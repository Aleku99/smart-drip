import React from 'react'
import NavBar from '../components/NavBar'
import './WelcomePage.css'
import Time from '../components/Time.jsx'
import Weather from '../components/Weather.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

function WelcomePage() {
  let navigate = useNavigate()
  const auth = useSelector((state) => state.auth.authenticated)
  const handleBackPress = useCallback(
    (event) => {
      event.preventDefault()
      if (auth) {
        navigate('/welcomepage')
      }
      console.log(auth)
    },
    [auth, navigate]
  )
  useEffect(() => {
    window.addEventListener('popstate', handleBackPress)
    return () => {
      window.removeEventListener('popstate', handleBackPress)
    }
  }, [handleBackPress])

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
