import React from "react";
import "./NotFound.css";
function NotFound() {
  return (
    <div className="login">
      <div className="login-logo">
        <img
          className="navbar-logo"
          src="/smartdrip_logo.png"
          alt="smartdrip_logo"
        ></img>
      </div>
      <h1 className="not-found-text">
        Ooooops, page you're searching for is not found
      </h1>
    </div>
  );
}
export default NotFound;
