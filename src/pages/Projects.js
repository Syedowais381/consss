import React from "react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <div>
      <section className="page-hero page-hero-dark page-hero-premium">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="page-hero-content">
            <span className="section-badge">Our Work</span>
            <h1 className="page-title">Our Projects</h1>
            <p className="page-description">
              Explore our portfolio of successful engineering and consultancy projects across
              energy and infrastructure sectors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 50} soft>
              <Card
                title={project.title}
                subtitle={project.clientName}
                image={project.imageUrl}
                tag={project.completionDate}
              >
                {project.description}
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
