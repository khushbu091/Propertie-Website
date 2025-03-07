import React, { useState } from "react";
import "../Styles-css/Login.css";
import { FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  // Function for phone number login
  const handlePhoneLogin = () => {
    setShowPhoneInput(true);
    setShowEmailInput(false);
  };

  // Function for Google login
  const handleGoogleLogin = () => {
    setShowEmailInput(true);
    setShowPhoneInput(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="close-btn">&times;</button>

        {/* Illustration */}
        <div className="image-container">
          <img src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png" alt="login-icon" />
        </div>

        <p className="login-message">
          Help us become one of the safest places to buy and sell
        </p>

        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Phone Login */}
        {!showPhoneInput && !showEmailInput && (
          <>
            <button className="login-btn phone" onClick={handlePhoneLogin}>
              <FaMobileAlt className="icon" /> Continue with phone
            </button>
            <button className="login-btn google" onClick={handleGoogleLogin}>
              <FcGoogle className="icon" /> Continue with Google
            </button>
          </>
        )}

        {/* Phone Number Input Field */}
        {showPhoneInput && (
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-field"
            />
            <button className="submit-btn">Submit</button>
          </div>
        )}

        {/* Google Email Input Field */}
        {showEmailInput && (
          <div className="input-section">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <button className="submit-btn">Submit</button>
          </div>
        )}

        {!showPhoneInput && !showEmailInput && (
          <>
            <p className="or-text">OR</p>
            <a href="#" className="login-email">Login with Email</a>
          </>
        )}

        <p className="privacy-text">
          All your personal details are safe with us.
        </p>
        <p className="terms">
          If you continue, you are accepting <a href="#">BuyRentGo Terms</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
