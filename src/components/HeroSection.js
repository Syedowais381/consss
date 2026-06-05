import React from "react";

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="hero-overlay">
        <div className="hero-content container">
          <h1>Delivering engineering excellence across infrastructure and energy</h1>
          <p>
            We provide project management, design & engineering, and specialist technical services
            for energy and infrastructure clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
