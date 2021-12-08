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
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            props.handleLoginData(response.data);
            navigate("/welcomepage");
          } else if (response.status === 406) {
            alert("Username and password do not match");
          } else if (response.status === 404) {
            alert("User account doesn't exist");
          }
        },
        (error) => {
          console.log(error);
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
