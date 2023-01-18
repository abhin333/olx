import React from "react";
import OlxLogo from "../../assets/Logo";
import Arrow from "../../assets/Arrow";
import Search from "../../assets/Search";
import "./Header.css";
import Sellbtn from "../../assets/Sellbtn";
import Plusbtn from "../../assets/Plusbtn";

function Header() {
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
            <span>Login</span>
            <hr />
          </div>
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
