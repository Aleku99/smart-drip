import React from "react";
import "./NavBar.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

export default function NavBar() {
  const icons_style = { color: "#f5eec2", margin: "auto 0.3rem" };
  return (
    <div className="navbar">
      <div className="navbar_div">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <div className="navbar_div">
        <FiSettings style={icons_style} />
        <p>Change configuration</p>
      </div>
      <div className="navbar_div">
        <AiOutlineHistory style={icons_style} />
        <p>Check history</p>
      </div>
      <div className="navbar_div">
        <GoSignOut style={icons_style} />
        <p>Sign out</p>
      </div>
      <div className="navbar-grow"></div>
      <div className="navbar_div_copyright">
        <p className="navbar-copyright">Copyright 2021 &copy; Alex Loghin</p>
      </div>
    </div>
  );
}
