import React, { useState } from "react";
import "../Styles-css/Navbar.css";
import logo from "../Image/home-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Makaan Logo" />
        <span>BuyRentGo</span>
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
        <a href="blog">BLOG</a>
        <a href="contact">CONTACT</a>
      </div>

     
      <button className="add-btn"><a href="login">Login</a></button>


      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
