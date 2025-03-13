import React from "react";
import { FaSearch, FaPowerOff, FaCog, FaBell, FaEnvelope, FaCalendarAlt, FaExchangeAlt } from "react-icons/fa";
import { FaHome, FaUser, FaFacebookF, FaTwitter, FaInstagram, FaColumns, FaBuilding, FaUsers, FaClipboardCheck, FaTh, FaFolder } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";

import "../Styling-css/AdminLayout.css";
const AdminLayout = () => {
  

  return (
    <>
    <nav className="admin-nav">
      <div className="admin-nav-left">
        <div className="admin-logo">BuyRentGo</div>
        <FaExchangeAlt className="admin-icon" />
      </div>

      <div className="admin-nav-center">
        <FaCalendarAlt className="admin-icon" />
        <FaEnvelope className="admin-icon" />
        <FaUsers className="admin-icon" />
        <div className="admin-notification">
          <FaBell className="admin-icon" />
          <span className="admin-dot"></span>
        </div>
        <div className="admin-search-box">
          <input type="text" placeholder="Search..." />
          <FaSearch className="admin-search-icon" />
        </div>
      </div>

      <div className="admin-nav-right">
        <FaPowerOff className="admin-icon" />
        <FaCog className="admin-icon" />
      </div>
    </nav>

    <aside className="admin-sidebar">
      {/* Profile Section */}
      <div className="admin-profile">
        <div className="admin-brand">
          <button className="admin-home-btn">
            <FaHome />
            <span>Oreo</span>
          </button>
          <span className="admin-role">
            <FaUser /> Agent
          </span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="Profile"
          className="admin-avatar"
        />
        <h3>Michael</h3>
        <p className="admin-role-text">Agent</p>
        <div className="admin-social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="admin-menu">
        <h4 className="admin-menu-title">-- MAIN</h4>
        <ul>
          <li className="active">
            <FaColumns /> Dashboard
          </li>
          <li>
            <FaBuilding /> Property
          </li>
          <li>
            <FaBuilding /> Types
          </li>
          <li>
            <FaUsers /> Agents
          </li>
          <li>
            <FaClipboardCheck /> Contract
          </li>
          <li>
            <FaTh /> App
          </li>
          <li>
            <FaUsers /> Groups
          </li>
          <li>
            <FaFolder /> File Manager
          </li>
        </ul>
      </nav>
    </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
