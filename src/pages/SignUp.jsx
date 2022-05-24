import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { database, ref, set } from '../api/firebase'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs/dist/bcrypt'
import cities from 'cities.json'

function SignUp(props) {
  let navigate = useNavigate()

  async function handleSignUp(event) {
    event.preventDefault()
    let fname = event.target.elements.fname.value
    let lname = event.target.elements.lname.value
    let city = event.target.elements.city.value
    let address = event.target.elements.address.value
    let phonenumber = event.target.elements.phonenumber.value
    let email = event.target.elements.email.value
    let password = event.target.elements.pass.value

    bcrypt.hash(password, 0, async function (err, hash) {
      if (err) {
        alert('Signup unsuccessfull')
      }
      let entry = {
        fname: fname,
        lname: lname,
        city: city,
        address: address,
        phonenumber: phonenumber,
        email: email,
        password: hash,
      }
      await set(ref(database, `users/${uuidv4()}`), entry)
      props.handleSignUpData(entry)
      navigate('/welcomepage')
    })
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
        <form onSubmit={handleSignUp}>
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
            <input type="text" id="phonenumber" name="phonenumber"></input>
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
  )
}
export default SignUp
