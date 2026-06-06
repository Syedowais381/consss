import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link className={`nav-link ${active ? "active" : ""}`} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrolled(window.scrollY > 12);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${menuOpen ? "nav-menu-open" : ""}`}>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src="/images/logo.png" alt="Consultancy" className="logo" />
          </Link>
        </div>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-right ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/news" onClick={closeMenu}>News</NavLink>
          <NavLink to="/jobs" onClick={closeMenu}>Jobs</NavLink>
          <Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
