import React from "react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">Get In Touch</span>
            <h1 className="page-title">Book a Consultation</h1>
            <p className="page-description">
              Tell us about your project and schedule a consultation with our expert team
            </p>
          </div>
        </div>
      </section>

      <section className="container contact-page">
        <div className="contact-grid">
          <div className="contact-left">
            <h3>Office (UK)</h3>
            <p>Unit 4, Industrial Park, London, UK</p>
            <p>Email: oquadri381@gmail.com</p>
            <p>Phone: +91 6362946800</p>
            <div className="contact-value-prop">
              <h4>Why work with us?</h4>
              <ul>
                <li>15+ years of engineering excellence</li>
                <li>200+ successful projects delivered</li>
                <li>Multi-disciplinary expertise under one roof</li>
                <li>Free initial consultation for new clients</li>
              </ul>
            </div>
          </div>
          <div className="contact-right">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}
