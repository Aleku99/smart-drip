import React from "react";
import "./SignUp.css";

function SignUp() {
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
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <div className="input">
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname"></input>
          </div>
          <div className="input">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city"></input>
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address"></input>
          </div>
          <div className="input">
            <label htmlFor="phonenumber">Phone number</label>
            <input type="email" id="phonenumber" name="emaphonenumberl"></input>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass"></input>
          </div>
          <input type="submit" value="Sign up and order smart-drip" />
        </form>
      </div>
    </div>
  );
}
export default SignUp;
