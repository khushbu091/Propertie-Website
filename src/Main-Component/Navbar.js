import { FaFacebookF, FaTimes, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp, IoPowerOutline } from "react-icons/io5";
import "../Styles-css/Navbar.css"; // Importing the external CSS file
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="header-top">
        <div className="left">
          <div>
            <IoLocationSharp className="icon" />
            <span>Battaglia Veneto, Italy</span>
          </div>
          <div>
            <IoMdCall className="icon" />
            <span>+00 123 456789</span>
          </div>
        </div>
        <div className="right">
          <div>
            <IoPowerOutline className="icon" />
            <span>Mon to Sat - 09:00 to 21:00</span>
          </div>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaTimes className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`header-bottom ${scrolled ? "scrolled" : ""}`}>
        <h1 className="logo">BuyRentGo <span className="highlight">^^</span></h1>
        <nav>
          <a href="home" className="active">Home</a>
          <a href="about">About</a>
          
          {/* Real Estate with Submenu */}
          <div 
            className="nav-item has-submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <a href="#" className="submenu-toggle">Real Estate</a>
            {submenuOpen && (
              <div className="submenu">
                <a href="propertylisting"> Property Listing</a>
                <a href="buysale">Rent Property</a>
                <a href="#">Commercial Spaces</a>
              </div>
            )}
          </div>

          <a href="#">News</a>
          <a href="contact">Contact Us</a>
        </nav>
        <button className="nav-login-btn">Login/Register</button>
      </div>
    </header>
  );
};

export default Navbar;
