import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-left">
          <img src="/images/logo-light.png" alt="Logo" className="footer-logo" />
          <p>© {new Date().getFullYear()} Consultancy — All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Contact: oquadri381@gmail.com | +91 6362946800 </p>
          <p>Registered in UK. ISO compliant.</p>
        </div>
      </div>
    </footer>
  );
}
