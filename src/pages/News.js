import React from "react";
import Card from "../components/Card";
import { news } from "../data/portfolio";

export default function News() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">Latest Updates</span>
            <h1 className="page-title">News & Insights</h1>
            <p className="page-description">
              Stay informed with our latest company news, industry insights, and project updates
            </p>
          </div>
        </div>
      </section>

      <section className="container page-content">
        <div className="cards-grid">
          {news.map(n => (
            <Card key={n.id} title={n.title} subtitle={n.publishedDate} image={n.imageUrl}>
              {n.content}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
