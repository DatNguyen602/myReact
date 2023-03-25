import React from "react";
import "./cssHeader.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="slogo"></div>
        <div className="header__-gin">
          <div className="btn">Sign In</div>
        </div>
      </div>
      <div className="content">
        <img src="https://datnguyen602.github.io/Bai1/bg-hct.png" alt="Anh" className="content--img" />
        <h1 className="content--h1">Save your data storage here.</h1>
        <p className="content--p">
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <div className="btn">Learn More</div>
      </div>
    </div>
  );
};

export default Header;
