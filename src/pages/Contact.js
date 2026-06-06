import React from "react";
import Form from "../components/Form";
import Reveal from "../components/Reveal";

const contactDetails = [
  { label: "Office", value: "Unit 4, Industrial Park, London, UK" },
  { label: "Email", value: "oquadri381@gmail.com", href: "mailto:oquadri381@gmail.com" },
  { label: "Phone", value: "+91 6362946800", href: "tel:+916362946800" }
];

const benefits = [
  "15+ years of engineering excellence",
  "200+ successful projects delivered",
  "Multi-disciplinary expertise under one roof",
  "Free initial consultation for new clients"
];

export default function Contact() {
  return (
    <div>
      <section className="page-hero page-hero-dark page-hero-premium">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="page-hero-content">
            <span className="section-badge light">Get In Touch</span>
            <h1 className="page-title light">Book a Consultation</h1>
            <p className="page-description light">
              Tell us about your project and schedule a consultation with our expert team
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact-page">
        <div className="container contact-grid">
          <Reveal className="contact-left">
            <h3 className="contact-heading">Let's talk</h3>
            <p className="contact-intro">
              Whether you need programme management, engineering design, or HSE advisory —
              our team is ready to help scope your requirements.
            </p>
            <div className="contact-details">
              {contactDetails.map(d => (
                <div key={d.label} className="contact-detail-item">
                  <span className="contact-detail-label">{d.label}</span>
                  {d.href ? (
                    <a href={d.href} className="contact-detail-value">{d.value}</a>
                  ) : (
                    <span className="contact-detail-value">{d.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="contact-value-prop">
              <h4>Why work with us?</h4>
              <ul>
                {benefits.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="contact-right" delay={120}>
            <div className="contact-form-card">
              <h3>Request a consultation</h3>
              <p className="form-card-desc">Fill in your details and select a time that works for you.</p>
              <Form />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
