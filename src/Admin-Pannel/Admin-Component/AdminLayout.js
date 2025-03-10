import { useState } from "react";
import { FiBell, FiMail } from "react-icons/fi";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "./Auth";
import logo from "../../Image/home-logo.png";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`admin-dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Navbar */}
      <nav className="admin-navbar">
        <Link to="/admin">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>BuyRentGo</span>
          </div>
        </Link>

        <div className="top-icons">
          <FiBell />
          <FiMail />
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "←" : "→"}
        </button>

        <nav>
          <ul>
            <li><Link to="/admin" className="side-menu-li">Admin Dashboard</Link></li>
            <li><Link to="/admin/rent-listing" className="side-menu-li">Rent Listing</Link></li>
            <li><Link to="/admin/sale-listing" className="side-menu-li">Sale Listing</Link></li>
            <li><Link to="/admin/contact-info" className="side-menu-li">Contact Information</Link></li>

            {/* Agent Dropdown */}
            <div className="dropdown">
              <span className="dropdown-toggle">Agent ▼</span>
              <div className="dropdown-content">
                <Link to="/admin/add-agent">Add Agent</Link>
                <Link to="/admin/agent-profile">Agent Profile</Link>
                <Link to="/admin/all-agents">All Agents</Link>
              </div>
            </div>

            {/* Property Dropdown */}
            <div className="dropdown">
              <span className="dropdown-toggle">Property ▼</span>
              <div className="dropdown-content">
                <Link to="/admin/add-property">Add Property</Link>
                <Link to="/admin/property-list">Property List</Link>
                <Link to="/admin/property-details">Property Details</Link>
              </div>
            </div>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
