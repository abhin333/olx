import React, { useContext } from "react";
import OlxLogo from "../../assets/Logo";
import Arrow from "../../assets/Arrow";
import Search from "../../assets/Search";
import "./Header.css";
import Sellbtn from "../../assets/Sellbtn";
import Plusbtn from "../../assets/Plusbtn";
import { AuthContext } from "../../Store/FirebaseContext";
import { getAuth, signOut } from "firebase/auth";
import {useNavigate } from "react-router-dom";
function Header() {
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  const Navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="headerchaild">
          <div className="logo">
            <OlxLogo />
          </div>
          <div className="searchicon">
            <Search />
            <input
              class="_1dasd"
              placeholder="Search city, area or locality"
              value="Delhi"
            ></input>
            <Arrow />
          </div>
          <div className="product">
            <input
              type="text"
              class="_1dasd"
              placeholder="Find Cars, Mobile Phones and more..."
            ></input>
            <div className="serach">
              <Search />
            </div>
          </div>

          <div className="language">
            <span class="_3G1kR">English</span>
            <Arrow />
          </div>

          <div className="loginPage">
            <span onClick={() => {
              Navigate('/login')
            }}>{user ? user.displayName : 'login'}</span>
            <hr />
          </div>
          {user && (
            <span
              className="logout"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    Navigate("/login");
                  })
                  .catch((error) => {
                    alert("there is an error");
                  });
              }}
            >
              LogOut
            </span>
          )}
          <div className="sellMenu">
            <Sellbtn />
            <div className="sellMenuContent">
              <Plusbtn />
              <span>SELL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
