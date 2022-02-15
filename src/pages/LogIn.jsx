import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { ref, get, child } from "../api/firebase";
import bcrypt from "bcryptjs/dist/bcrypt";
import { getDatabase } from "firebase/database";

function LogIn(props) {
  let navigate = useNavigate();

  async function handleLogIn(event) {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let password = event.target.elements.pass.value;
    let userFound = false;

    const dbRef = ref(getDatabase());
    get(child(dbRef, "/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            if (child.val().email === username) {
              userFound = true;
              bcrypt.compare(
                password,
                child.val().password,
                function (err, result) {
                  if (result) {
                    props.handleLoginData(child.val());
                    navigate("/welcomepage");
                  } else {
                    alert("Password not correct");
                  }
                }
              );
            }
          });
          if (userFound === false) {
            alert("Username not found");
          }
        } else {
          console.log("No data available from database");
          alert("Sign-in not succesful");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
