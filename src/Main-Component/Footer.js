import React from "react";
import "../Styles-css/Footer.css";

import gal1 from "../Image/property-1.jpg";
import gal2 from "../Image/property-2.jpg";
import gal3 from "../Image/property-3.jpg";
import gal4 from "../Image/property-4.jpg";
import gal5 from "../Image/property-5.jpg";
import gal6 from "../Image/property-6.jpg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get In Touch */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>📍 123 Street, New York, USA</p>
          <p>📞 +012 345 67890</p>
          <p>📧 info@example.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="footer-section">
          <h3>Photo Gallery</h3>
          <div className="gallery">
            <img src={gal1} alt="Gallery 1" />
            <img src={gal2} alt="Gallery 2" />
            <img src={gal3} alt="Gallery 3" />
            <img src={gal4} alt="Gallery 4" />
            <img src={gal5} alt="Gallery 5" />
            <img src={gal6} alt="Gallery 6" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>SignUp</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© <a href="#">Your Site Name</a>, All Rights Reserved. Designed by <a href="#">HTML Codex</a></p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Cookies</a>
          <a href="#">Help</a>
          <a href="#">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
