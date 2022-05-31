import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { database, ref, set } from '../api/firebase'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs/dist/bcrypt'
import axios from 'axios'

const validateFormInputs = (fname, lname, city, phonenumber) => {
  let result = true
  result =
    checkFname(fname) &&
    checkLname(lname) &&
    checkCity(city) &&
    checkPhoneNumber(phonenumber)
  return result
}
const checkFname = (fname) => {
  for (let index = 0; index < fname.length; index++) {
    if (fname.charAt(index) >= '0' && fname.charAt(index) <= '9') {
      alert("First name can't contain numbers")
      return false
    }
  }
  return true
}
const checkLname = (lname) => {
  for (let index = 0; index < lname.length; index++) {
    if (lname.charAt(index) >= '0' && lname.charAt(index) <= '9') {
      alert("Last name can't contain numbers")
      return false
    }
  }
  return true
}
const checkCity = async (city) => {
  for (let index = 0; index < city.length; index++) {
    if (city.charAt(index) >= '0' && city.charAt(index) <= '9') {
      alert("City name can't contain numbers")
      return false
    }
  }
  return true
}
const checkPhoneNumber = (phonenumber) => {
  if (phonenumber.length !== 10) {
    alert('Phone number must have 10 digits')
    return false
  }
  return true
}

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

    if (validateFormInputs(fname, lname, city, phonenumber)) {
      bcrypt.hash(password, 0, function (err, hash) {
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
        set(ref(database, 'users/' + uuidv4()), entry)
        props.handleSignUpData(entry)
        navigate('/welcomepage')
      })
    }
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
            <input type="text" id="fname" name="fname" required></input>
          </div>
          <div className="input">
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" required></input>
          </div>
          <div className="input">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required></input>
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required></input>
          </div>
          <div className="input">
            <label htmlFor="phonenumber">Phone number</label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" required></input>
          </div>
          <input type="submit" value="Sign up and order smart-drip" />
        </form>
      </div>
    </div>
  )
}
export default SignUp
