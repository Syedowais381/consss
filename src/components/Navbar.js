import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link className={`nav-link ${active ? "active" : ""}`} to={to}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>

        <nav className="nav-right">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <Link to="/contact" className="nav-cta">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
