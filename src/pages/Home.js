import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import MarqueeStrip from "../components/MarqueeStrip";
import { projects } from "../data/portfolio";

const services = [
  {
    id: 1,
    title: "Project & Programme Management",
    subtitle: "Delivering on time and on budget",
    description:
      "End-to-end programme management, site supervision and QA/QC services for complex infrastructure projects.",
    backgroundImage: "/images/service1-bg.jpg"
  },
  {
    id: 2,
    title: "Design & Engineering",
    subtitle: "From feasibility to detailed design",
    description:
      "Feasibility studies, routeing, stress analysis and CAD production for energy and infrastructure sectors.",
    backgroundImage: "/images/service2-bg.jpg"
  },
  {
    id: 3,
    title: "Health, Safety & Environment",
    subtitle: "Safety-first approach",
    description:
      "HSE consultancy, CDM coordination, and environmental management ensuring compliance and safety.",
    backgroundImage: "/images/service3-bg.jpg"
  }
];

const values = [
  { title: "Technical Depth", text: "Senior engineers with sector-specific expertise across energy and infrastructure." },
  { title: "Delivery Focus", text: "Structured programme controls that keep complex projects on schedule and on budget." },
  { title: "Safety First", text: "HSE embedded in every stage — from feasibility through to commissioning." },
  { title: "Client Partnership", text: "Transparent communication and collaborative delivery at every milestone." }
];

const process = [
  { step: "01", title: "Consult", text: "Understand your scope, constraints, and objectives in a free initial session." },
  { step: "02", title: "Plan", text: "Define deliverables, timelines, and a tailored engineering approach." },
  { step: "03", title: "Deliver", text: "Execute with rigorous controls, transparent reporting, and expert oversight." }
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="home-page">
      <HeroSection />
      <MarqueeStrip />

      <section id="about" className="home-section intro-section">
        <div className="container home-split">
          <Reveal className="intro-content">
            <span className="section-badge">About Us</span>
            <h2 className="section-title">Who we are</h2>
            <p className="lead-text">
              We are a multi-disciplinary consultancy providing project delivery,
              engineering design, and specialist technical services to the energy
              and infrastructure sectors.
            </p>
            <div className="intro-stats">
              <div className="stat-item">
                <CountUp value="15+" />
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <CountUp value="200+" />
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <CountUp value="50+" />
                <span className="stat-label">Expert Engineers</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="intro-visual" delay={120}>
            <div className="intro-image-frame">
              <img src="/images/service1-bg.jpg" alt="Engineering consultancy" loading="lazy" />
              <div className="intro-image-badge">
                <strong>ISO</strong>
                <span>Compliant</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <Reveal className="quote-band-inner">
            <span className="quote-mark" aria-hidden="true">"</span>
            <blockquote>
              We don't just advise — we partner with clients to deliver complex engineering
              programmes safely, on time, and to the highest technical standards.
            </blockquote>
            <cite>— Consultancy Leadership Team</cite>
          </Reveal>
        </div>
      </section>

      <section className="home-section values-section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Built on expertise, driven by results</h2>
            <p className="section-desc">
              Deep technical knowledge and proven delivery frameworks for complex engineering challenges.
            </p>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value-card" delay={i * 60} soft>
                <span className="value-number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section process-section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-badge">How We Work</span>
            <h2 className="section-title">A clear path from idea to delivery</h2>
          </Reveal>
          <div className="process-grid">
            {process.map((step, i) => (
              <Reveal key={step.step} className="process-card" delay={i * 60} soft>
                <span className="process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {i < process.length - 1 && <span className="process-connector" aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-showcase">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">What we deliver</h2>
            <p className="section-desc">
              End-to-end consultancy across programme management, engineering design, and HSE advisory.
            </p>
          </Reveal>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-block ${index % 2 === 1 ? "service-block-reverse" : ""}`}
          >
            <div
              className="service-background"
              style={{ backgroundImage: `url(${service.backgroundImage})` }}
            >
              <div className="service-overlay">
                <div className="container service-block-inner">
                  <Reveal className="service-panel" delay={index * 80}>
                    <div className="service-panel-top">
                      <span className="service-index">0{index + 1}</span>
                      <div className="service-heading">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-subtitle">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="service-divider" />
                    <p className="service-description">{service.description}</p>
                    <Link to="/services" className="service-btn">
                      Explore Services
                      <span className="service-btn-arrow" aria-hidden="true">→</span>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="home-section featured-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title">Featured projects</h2>
            <p className="section-desc">
              Recent engagements across energy and infrastructure.
            </p>
          </Reveal>
          <div className="cards-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 60} soft>
                <Card
                  title={p.title}
                  subtitle={p.clientName}
                  image={p.imageUrl}
                  tag={p.completionDate}
                >
                  {p.description}
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta" delay={200}>
            <Link to="/projects" className="btn-primary">
              View All Projects
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Ready to start your next project?</h2>
              <p>Book a free initial consultation with our engineering team.</p>
            </div>
            <Link to="/contact" className="btn-gold">
              Get in Touch
              <span className="btn-arrow dark" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
