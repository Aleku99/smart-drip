import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <div classname="login">
      <div classname="login-logo">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <form>
        <div classname="input">
          <label for="fname"></label>
          <input type="text" id="username" name="username"></input>
        </div>
        <div classname="input">
          <label for="pass"></label>
          <input type="password" id="pass" name="pass"></input>
        </div>
        <div classname="input"></div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
export default LogIn;
