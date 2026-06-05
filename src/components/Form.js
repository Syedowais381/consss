import React, { useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";
import { serviceOptions } from "../data/portfolio";

const CALENDLY_URL = process.env.REACT_APP_CALENDLY_URL || "";
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceRequired: "",
  preferredDateTime: "",
  notes: ""
};

export default function Form() {
  const [form, setForm] = useState(INITIAL);
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...form,
            _subject: `Consultation request from ${form.name}`
          })
        });
        if (!res.ok) throw new Error("Failed to send consultation request");
      }
      setStep("booking");
    } catch {
      setError("Unable to submit your request. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const calendlyPrefill = {
    name: form.name,
    email: form.email,
    customAnswers: {
      a1: form.phone || "",
      a2: form.company || "",
      a3: form.serviceRequired || "",
      a4: form.preferredDateTime || "",
      a5: form.notes || ""
    }
  };

  if (step === "booking") {
    return (
      <div className="booking-step">
        <h3>Schedule Your Consultation</h3>
        <p className="booking-intro">
          Thank you, {form.name.split(" ")[0]}. Select a time slot below to confirm your consultation.
        </p>
        {CALENDLY_URL ? (
          <CalendlyEmbed url={CALENDLY_URL} prefill={calendlyPrefill} />
        ) : (
          <div className="booking-fallback">
            <p>
              Your consultation request has been received. Our team will contact you at{" "}
              <strong>{form.email}</strong> to confirm a suitable time.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setForm(INITIAL);
                setStep("form");
              }}
            >
              Submit Another Request
            </button>
          </div>
        )}
        {CALENDLY_URL && (
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setForm(INITIAL);
              setStep("form");
            }}
          >
            Back to Form
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Your name *"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Your email *"
        type="email"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="Phone number (optional)"
        type="tel"
      />
      <input
        name="company"
        value={form.company}
        onChange={onChange}
        placeholder="Company name (optional)"
      />
      <select
        name="serviceRequired"
        value={form.serviceRequired}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Service required *
        </option>
        {serviceOptions.map(s => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
        <option value="Other">Other / Not sure yet</option>
      </select>
      <input
        name="preferredDateTime"
        value={form.preferredDateTime}
        onChange={onChange}
        type="datetime-local"
        placeholder="Preferred date & time"
        required
      />
      <textarea
        name="notes"
        value={form.notes}
        onChange={onChange}
        rows="5"
        placeholder="Additional notes or requirements"
      />
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Submitting…" : "Continue to Booking"}
        </button>
        {error && <span className="error-note">{error}</span>}
      </div>
    </form>
  );
}
