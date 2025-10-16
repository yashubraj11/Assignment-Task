import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo jarurat.webp";
import "../CSS/Header.css";

const Header = () => {
  const handleDonateClick = () => {
    window.open("https://www.jarurat.care/donate", "_blank"); // opens in new tab
  };

  return (
    <header className="header">
      {/* Left: Logo + Brand */}
      <div className="logo-section">
        <img src={logo} alt="Jarurat Care Logo" className="logo" />
        <h1 className="brand-name">Jarurat Care</h1>
      </div>

      {/* Center: Navigation */}
      <nav className="nav-center">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/patients" className="nav-link">
          Patients
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </nav>

      {/* Right: Donate Button */}
      <button className="donate-btn" onClick={handleDonateClick}>
        Donate Now
      </button>
    </header>
  );
};

export default Header;
