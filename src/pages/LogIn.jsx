import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";

function LogIn(props) {
  let navigate = useNavigate();

  async function handleLogIn(event) {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let password = event.target.elements.pass.value;
    await axios
      .post("http://192.168.100.78:3001/login", {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log(response.status);
          if (response.status === 200) {
            props.handleLoginData(response.data);
            navigate("/welcomepage");
          }
        },
        (error) => {
          console.log(error.response.status);
          if (error.response.status === 404) {
            alert("Username not found");
            console.log("Username not found");
          } else if (error.response.status === 401) {
            alert("Password doesn't match");
            console.log("Password doesn't match");
          }
        }
      );
  }

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
        <form onSubmit={handleLogIn}>
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
//"http://192.168.100.78:3001/login"
