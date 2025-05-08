import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp, IoPowerOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import "../Styles-css/Navbar.css"; // External CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // <-- new

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`header-bottom ${scrolled ? "scrolled" : ""}`}>
        <h1 className="logo">
          Rental House <span className="highlight">^^</span>
        </h1>

        <div className={`menu-toggle`} onClick={toggleMenu}>
          &#9776;
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <a href="home" className="active">Home</a>
          <a href="about">About</a>

          {/* Real Estate with Submenu */}
          {/* <div
            className="nav-item has-submenu"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            <a href="#" className="submenu-toggle">Real Estate</a>
            {submenuOpen && (
              <div className="submenu">
                <a href="propertylisting">Property Listing</a>
                <a href="buysale">Rent Property</a>
                <a href="#">Commercial Spaces</a>
              </div>
            )}
          </div> */}

          <a href="service">Service</a>
          <a href="agent">Agent</a>
          <a href="contact">Contact Us</a>
          {/* Real Estate with Submenu */}
          <div
            className="nav-item has-submenu"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            <a href="#" className="submenu-toggle">More <span className="highlight">^</span></a>
            {submenuOpen && (
              <div className="submenu">
                <a href="terms">Terms and Conditions</a>
                <a href="policy">Privacy Policy</a>
                <a href="cancellationPolicy">Cancellation Policy</a>
              </div>
            )}
          </div>
          <button className="nav-login-btn"><a href="login">Call Now</a></button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
