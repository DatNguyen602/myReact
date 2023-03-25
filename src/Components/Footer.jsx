import React from "react";
import "./cssFooter.scss";

const Footer = () => {
  return (
    <div>
      <div className="top">
        <div className="top__ct">
          <div className="slogo">
            <h1>DataWarehouse</h1>
          </div>
          <h2>Warehouse Society, 234 </h2>
          <h2>Bahagia Ave Street PRBW 29281</h2>
          <a href="#">info@warehouse.project </a>
          <br />
          <a href="#">1-232-3434 (Main)</a>
        </div>
        <div className="top__ct">
          <h1>About</h1>
          <h2>Profile</h2>
          <h2>Feature</h2>
          <h2>Careers</h2>
          <h2>DW News</h2>
        </div>
        <div className="top__ct">
          <h1>Help</h1>
          <h2>Support</h2>
          <h2>Sign up</h2>
          <h2>Guide</h2>
          <h2>Reports</h2>
          <h2>Q&A</h2>
        </div>
        <div className="top__ct">
          <h1>Social Media</h1>
          <div className="dsp_flex">
            <div className="cycle"></div>
            <div className="cycle"></div>
            <div className="cycle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
