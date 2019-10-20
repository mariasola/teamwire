import React from "react";
import Sleigh from "../images/sleigh.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header_image" src={Sleigh} alt="Santa's Wish List" />
      <h1 className="header_title">Santa's Wish List</h1>
    </div>
  );
};

export default Header;
