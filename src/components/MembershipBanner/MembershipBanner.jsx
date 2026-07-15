// components/MembershipBanner/MembershipBanner.jsx
import React from "react";
import { MEMBERSHIP_PLANS } from "../../data/products.js";
import "./MembershipBanner.css";

export default function MembershipBanner() {
  return (
    <section className="membership-section">
      <div className="container">
        <div className="membership-header">
          <h2>🔑 Membership Plans</h2>
          <p>Get unlimited access to premium Unity assets and source codes.</p>
        </div>
        <div className="membership-grid">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.highlight ? "plan-highlight" : ""}`}>
              {plan.highlight && <div className="plan-badge">Most Popular</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                <span className="plan-currency">$</span>
                <span className="plan-num">{plan.price}</span>
                <span className="plan-period">/{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <button className={`plan-btn ${plan.highlight ? "plan-btn-primary" : "plan-btn-outline"}`}>
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
