// components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-particles">
          {["⚡","🎮","🕹️","🎯","🏆","🎲","💎","🔥"].map((e, i) => (
            <span key={i} className={`particle p${i}`}>{e}</span>
          ))}
        </div>
      </div>
      <div className="container hero-content">
        <div className="hero-logo-wrap">
          <span className="hero-logo-icon">⚡</span>
          <span className="hero-logo-text">Assets<span>4</span>Unity</span>
        </div>
        <h1 className="hero-tagline">
          We hand-pick top Unity assets<br />
          &amp; games <span className="hero-accent">weekly.</span>
        </h1>
        <p className="hero-sub">
          Your trusted marketplace for Unity source codes, full projects,<br />
          and templates at unbeatable prices.
        </p>
        <div className="hero-cta-row">
          <button className="hero-btn-primary">Browse All Assets</button>
          <button className="hero-btn-outline">View Membership</button>
        </div>
        <div className="hero-stats">
          <div className="hstat"><span className="hstat-num">500+</span><span className="hstat-lbl">Unity Assets</span></div>
          <div className="hstat-sep" />
          <div className="hstat"><span className="hstat-num">1,200+</span><span className="hstat-lbl">Happy Developers</span></div>
          <div className="hstat-sep" />
          <div className="hstat"><span className="hstat-num">Weekly</span><span className="hstat-lbl">New Additions</span></div>
        </div>
      </div>
    </div>
  );
}
