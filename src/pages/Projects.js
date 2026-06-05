import React from "react";
import Card from "../components/Card";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">Our Work</span>
            <h1 className="page-title">Our Projects</h1>
            <p className="page-description">
              Explore our portfolio of successful engineering and consultancy projects across
              energy and infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {projects.map(project => (
            <Card
              key={project.id}
              title={project.title}
              subtitle={project.clientName}
              image={project.imageUrl}
              tag={project.completionDate}
            >
              {project.description}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
