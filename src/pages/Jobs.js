import React from "react";
import Card from "../components/Card";

export default function Jobs() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">Join Our Team</span>
            <h1 className="page-title">Careers</h1>
            <p className="page-description">
              We are always interested in talented people — check back for openings and career opportunities
            </p>
          </div>
        </div>
      </section>
      
      <section className="container page-content">
        <div className="jobs-content">
          <div className="jobs-message">
            <h3>Currently not hiring</h3>
            <p className="muted">We are always interested in talented people — check back for openings.</p>
          </div>
          <Card title="Currently not hiring" subtitle="Check later for opportunities" image="/images/jobs-coming.jpg">
            No active vacancies at the moment. Please check back soon for exciting career opportunities with our growing team.
          </Card>
        </div>
      </section>
    </div>
  );
}
