import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-overlay">
        <div className="hero-content container">
          <div className="hero-inner">
            <span className="hero-eyebrow">Engineering & Infrastructure Consultancy</span>
            <h1>
              Delivering <span className="hero-highlight">excellence</span> across energy and infrastructure
            </h1>
            <p>
              Project management, design engineering, and specialist technical services
              for clients who demand precision, safety, and on-time delivery.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                View Our Work
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to content">
          <span className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll</span>
        </a>
      </div>
    </section>
  );
}
