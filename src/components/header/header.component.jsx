import React from "react";

import mainLogo from "./logo-white.png";
import CustomButton from '../button/CustomButton'

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={mainLogo} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <CustomButton text='Discover our tours'/>
      </div>
    </div>
  );
};

export default Header;
