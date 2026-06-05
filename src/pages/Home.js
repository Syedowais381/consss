import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const services = [
  {
    id: 1,
    title: "Project & Programme Management",
    subtitle: "Delivering on time and on budget",
    description: "End-to-end programme management, site supervision and QA/QC services for complex infrastructure projects.",
    backgroundImage: "/images/service1-bg.jpg"
  },
  {
    id: 2,
    title: "Design & Engineering",
    subtitle: "From feasibility to detailed design",
    description: "Feasibility studies, routeing, stress analysis and CAD production for energy and infrastructure sectors.",
    backgroundImage: "/images/service2-bg.jpg"
  },
  {
    id: 3,
    title: "Health, Safety & Environment",
    subtitle: "Safety-first approach",
    description: "HSE consultancy, CDM coordination, and environmental management ensuring compliance and safety.",
    backgroundImage: "/images/service3-bg.jpg"
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-header">
              <span className="intro-badge">About Us</span>
              <h2 className="intro-title">
                <span className="title-line">Who</span>
                <span className="title-line">we are</span>
              </h2>
            </div>
            <div className="intro-description">
              <p className="lead-text">
                We are a <span className="highlight">multi-disciplinary consultancy</span> providing 
                <span className="highlight"> project delivery</span>, 
                <span className="highlight"> engineering design</span>, and 
                <span className="highlight"> specialist technical services</span> to the energy and infrastructure sectors.
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Expert Engineers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-visual">
            <div className="floating-elements">
              <div className="floating-icon icon-1">⚙️</div>
              <div className="floating-icon icon-2">📊</div>
              <div className="floating-icon icon-3">🔧</div>
              <div className="floating-icon icon-4">🏗️</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-showcase">
        {services.map((service, index) => (
          <div key={service.id} className={`service-section ${index % 2 === 0 ? 'service-left' : 'service-right'}`}>
            <div 
              className="service-background" 
              style={{ backgroundImage: `url(${service.backgroundImage})` }}
            >
              <div className="service-overlay">
                <div className="container">
                  <div className={`service-content ${index % 2 === 0 ? 'content-left' : 'content-right'}`}>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <p className="service-description">{service.description}</p>
                    <Link to="/services" className="service-btn">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
