import React, { useState } from "react";
import "../Styles-css/Navbar.css";
import logo from "../Image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Makaan Logo" />
        <span>Makaan</span>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="home">HOME</a>
        <a href="about">ABOUT</a>
        <div className="dropdown">
          <a href="#">PROPERTY ▼</a>
          <div className="dropdown-content">
            <a href="buysale">Buy</a>
            <a href="buysale">Sale</a>
            <a href="buysale">Rent</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">PAGES ▼</a>
          <div className="dropdown-content">
            <a href="agent">Agent</a>
            <a href="listing">Listings</a>
          </div>
        </div>
        <a href="contact">CONTACT</a>
      </div>

      <button className="add-btn">Add Property</button>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
