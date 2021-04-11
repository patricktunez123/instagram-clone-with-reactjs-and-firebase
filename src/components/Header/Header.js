import React from "react";
import logo from "../../images/ig-logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header">
      <img className="logo__img" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
