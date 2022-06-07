import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
function NotFound(props) {
  return (
    <div className="login">
      <div className="login-logo">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <h1 className="not-found-text">{props.text}</h1>
      <Link to="/">
        <h2 className="not-found-text">Back to home screen</h2>
      </Link>
    </div>
  )
}
export default NotFound
