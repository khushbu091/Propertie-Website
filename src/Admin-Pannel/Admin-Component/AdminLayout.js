import React from "react";
import { FaSearch, FaPowerOff, FaCog, FaBell, FaEnvelope, FaCalendarAlt, FaExchangeAlt } from "react-icons/fa";
import { FaHome, FaUser, FaFacebookF, FaTwitter, FaInstagram, FaColumns, FaBuilding, FaUsers, FaClipboardCheck, FaTh, FaFolder } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../Styling-css/AdminLayout.css";
const AdminLayout = () => {
  
  const [submenuOpen, setSubmenuOpen] = useState(false);

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
        <h4 className="admin-menu-title">-- MAIN</h4>
        <nav className="admin-menu">

          <a href="#"> <FaColumns /> Dashboard</a>
          {/* Real Estate with Submenu */}
          <div 
            className="nav-item has-submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <a href="#" className="submenu-toggle"><FaBuilding />Property</a>
            {submenuOpen && (
              <div className="submenu">
                <a href="/admin/addpropertyform">Add Property</a>
                <a href="buysale">Rent Property</a>
                <a href="#">Commercial Spaces</a>
              </div>
            )}
          </div>          
          <a href="#"><FaBuilding /> Types</a>
          <a href="#"><FaUsers /> Agents</a>
          <a href="#"><FaClipboardCheck /> Contract</a>
          <a href="#"><FaTh /> App</a>
          <a href="#"><FaUsers /> Groups</a>
          <a href="#"><FaFolder /> File Manager</a>        
      </nav>
    </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
