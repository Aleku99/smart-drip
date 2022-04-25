import React from 'react'
import './NavBar.css'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineHistory } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const icons_style = { color: '#f5eec2', margin: 'auto 0.3rem' }

  return (
    <div className="mynavbar">
      <div className="navbar_div">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <div className="navbar_div">
        <FiSettings style={icons_style} />
        <Link to="/changeconfig">
          <p>Change configuration</p>
        </Link>
      </div>
      <div className="navbar_div">
        <AiOutlineHistory style={icons_style} />
        <Link to="/checkhistory">
          <p>Check history</p>
        </Link>
      </div>
      <div className="navbar_div">
        <GoSignOut style={icons_style} />
        <Link
          to="/login"
          onClick={() => {
            sessionStorage.clear()
          }}
        >
          <p>Sign out</p>
        </Link>
      </div>
      <div className="navbar-grow"></div>
      <div className="navbar_div_copyright">
        <p className="navbar-copyright">Copyright 2021 &copy; Alex Loghin</p>
      </div>
    </div>
  )
}
