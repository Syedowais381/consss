import React from "react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { services } from "../data/portfolio";

export default function Services() {
  return (
    <div>
      <section className="page-hero page-hero-dark page-hero-premium">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="page-hero-content">
            <span className="section-badge">What We Do</span>
            <h1 className="page-title">Our Services</h1>
            <p className="page-description">
              Comprehensive engineering and consultancy solutions tailored to your project needs
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 50} soft>
              <Card title={s.name} image={s.iconUrl}>
                {s.description}
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
