// components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          {/* Logo & about */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo">⚡ <span>Assets<b>4</b>Unity</span></div>
            <p className="footer-about">
              Assets4Unity is your trusted marketplace for Unity source codes, full projects, and templates at unbeatable prices. Collaborate with skilled developers and designers, and level up your creations.
            </p>
          </div>

          {/* Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">Information</h4>
            <ul className="footer-links">
              {["Privacy Policy","Refund Policy","Disclaimer","Cookie Policy"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links">
              <li>📞 +923170782366</li>
              <li>✉️ support@assets4unity.com</li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-socials">
              {[
                { label: "Facebook",  icon: "📘" },
                { label: "LinkedIn",  icon: "💼" },
                { label: "YouTube",   icon: "📺" },
                { label: "WhatsApp",  icon: "💬" },
              ].map(s => (
                <a key={s.label} href="#" className="social-btn">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Assets4Unity. All Rights Reserved.</span>
          <span>Made with ❤️ for Unity Developers</span>
        </div>
      </div>
    </footer>
  );
}
