import React from "react";
import Arrow from "../../assets/Arrow";
import "./Banner.css";
import banner from "../../../src/images/Banner.png"

function Banner() {
  return (
    <>
      <div className="parrentdiv">
        <div className="chailddiv">
          <div className="menubar">
            <div className="list">
              <div className="categeory">
                <span>ALL CATEGORIES</span>
                <span className="arrowbtn">
                  <Arrow />
                </span>
              </div>
              <div className="otherlist">
                <span>Cars</span>
                <span>Motorcycles</span>
                <span>Mobile Phones</span>
                <span>For Sale: Houses &amp; Apartments</span>
                <span> OLX Renew (Mobile) </span>
                <span>Scooters</span>
                <span>Commercial &amp; Other Vehicles</span>
                <span>For Rent: Houses &amp; Apartments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerimg">
        <img src={banner} alt="banner" />
      </div>
    </>
  );
}

export default Banner;
