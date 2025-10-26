import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          {/* Placeholder logo — replace with an image if you like */}
          <span className="logo-circle">🏠</span> Members Portal
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className="nav-item">
          Home
        </NavLink>
        <NavLink to="/member-registration" className="nav-item">
          Member Registration
        </NavLink>
        <NavLink to="/check-in-out" className="nav-item">
          Check In-Out
        </NavLink>
        <NavLink to="/admin-dashboard" className="nav-item">
          Admin Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
