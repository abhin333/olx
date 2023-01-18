import React, { useState, useContext } from "react";
import Logo from "../../images/OLX-Logo.png";
import "./Signup.css";
import img from "../../images/olx.png";
import { FirebaseContext } from "../../Store/FirebaseContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const{firebase,auth}=useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        userCredential.user.updateProfile({displayname:username});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <img src={img} alt="img-logo" className="backgroundimg" />
      <div className="signupParentDiv">
        <img className="img" width="200px" height="200px" alt="img" src={Logo}></img>
        <div className="from">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="input"
              type="text"
              id="fname"
              name="name"
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input"
              type="email"
              id="fname"
              name="email"
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="input"
              type="number"
              id="lname"
              name="phone"
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input"
              type="password"
              id="lname"
              name="password"
            />
            <br />
            <br />
            <button className="btn">Signup</button>
          </form>
        </div>
        <a>Login</a>
      </div>
    </div>
  );
}
