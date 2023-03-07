import React from "react";
import ledgetizelogo from "../assets/LEDGETIZE.svg";
const Navbar = () => {
  return (
    <nav>
      <img src={ledgetizelogo} alt="Ledgetize" width="60px" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
