import React from "react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { news } from "../data/portfolio";

export default function News() {
  return (
    <div>
      <section className="page-hero page-hero-dark page-hero-premium">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="page-hero-content">
            <span className="section-badge">Latest Updates</span>
            <h1 className="page-title">News & Insights</h1>
            <p className="page-description">
              Stay informed with our latest company news, industry insights, and project updates
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {news.map((n, i) => (
            <Reveal key={n.id} delay={i * 50} soft>
              <Card title={n.title} subtitle={n.publishedDate} image={n.imageUrl}>
                {n.content}
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
