import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-light.png" alt="Consultancy" className="footer-logo" />
          <p className="footer-tagline">
            Multi-disciplinary engineering consultancy for energy and infrastructure sectors worldwide.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/news">News</Link>
          <Link to="/jobs">Careers</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="mailto:oquadri381@gmail.com">oquadri381@gmail.com</a>
          <a href="tel:+916362946800">+91 6362946800</a>
          <p>Unit 4, Industrial Park, London, UK</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Consultancy — All rights reserved.</p>
          <p className="footer-meta">Registered in UK · ISO compliant</p>
        </div>
      </div>
    </footer>
  );
}
