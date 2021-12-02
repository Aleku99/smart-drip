import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  return (
    <div className="login">
      <div className="login-logo">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <div className="form-div">
        <form>
          <div className="input">
            <label htmlFor="username">User (email)</label>
            <input type="text" id="username" name="username"></input>
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass"></input>
          </div>
          <input type="submit" value="Log In" />
        </form>
      </div>

      <div className="signup-redirect">
        <p>
          <Link to="/signup">
            Don't have an account? Sign up and order your smart-drip irrigation
            system here!
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LogIn;
