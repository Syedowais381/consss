import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Jobs() {
  return (
    <div>
      <section className="page-hero page-hero-dark page-hero-premium">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="page-hero-content">
            <span className="section-badge">Join Our Team</span>
            <h1 className="page-title">Careers</h1>
            <p className="page-description">
              We are always interested in talented people — check back for openings and career opportunities
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container page-content">
        <Reveal className="jobs-empty">
          <div className="jobs-empty-visual">
            <img src="/images/jobs-coming.jpg" alt="" loading="lazy" />
          </div>
          <div className="jobs-empty-content">
            <span className="section-badge">Current Status</span>
            <h2>No open positions right now</h2>
            <p>
              We are not actively hiring at the moment, but we welcome talented engineers
              and project professionals to reach out for future opportunities.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
