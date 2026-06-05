import React from "react";
import Card from "../components/Card";
import { services } from "../data/portfolio";

export default function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">What We Do</span>
            <h1 className="page-title">Our Services</h1>
            <p className="page-description">
              Comprehensive engineering and consultancy solutions tailored to your project needs
            </p>
          </div>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {services.map(s => (
            <Card key={s.id} title={s.name} image={s.iconUrl}>
              {s.description}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
