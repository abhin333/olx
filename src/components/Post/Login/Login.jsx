import React, { useState, useContext } from 'react'
import { FirebaseContext } from "../../../Store/FirebaseContext";
import './Login.css'
import Logo from "../../../images/OLX-Logo.png"
import Logo1 from "../../../images/olx.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link } from 'react-router-dom';


function Login() {
  const auth = getAuth();
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const { firebase,db } = useContext(FirebaseContext)
  const handleClick = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log("sssssssss5", result.user);
      const user = result.user;
      alert("logedin", user);
      navigate('/')
    }).catch((error) => {
      alert(error)
    })
  }
  return (
    <div>
      <img src={Logo1} alt="" className="logo2" />
      <div className="loginParentDiv">
        <img className="lox" width="200px" height="200px" src={Logo} style={{borderRadius:100}}></img>
        <form onSubmit={handleClick}>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e)=>setEmail(e.target.value)} className="input" type="email" id="fname" name="email" value={email} />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e)=>setPassword(e.target.value)} className="input" type="password" id="lname" name="password"value={password} />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}>signup</Link>
      </div>
    </div>
  );
}

export default Login
