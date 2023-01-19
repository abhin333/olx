import React, { useState } from 'react'
import './Login.css'
import Logo from "../../../images/OLX-Logo.png"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
  
  return (
        <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>


  )
}

export default Login
