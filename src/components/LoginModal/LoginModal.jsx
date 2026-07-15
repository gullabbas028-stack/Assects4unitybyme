// components/LoginModal/LoginModal.jsx
import React, { useState } from "react";
import { useApp } from "../../context/AppContext.jsx";
import "./LoginModal.css";

export default function LoginModal() {
  const { loginOpen, setLoginOpen, login } = useApp();
  const [tab, setTab]       = useState("login"); // login | register
  const [email, setEmail]   = useState("");
  const [pass, setPass]     = useState("");
  const [name, setName]     = useState("");

  if (!loginOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    login(email.split("@")[0] || "User");
  };

  return (
    <>
      <div className="overlay" onClick={() => setLoginOpen(false)} />
      <div className="login-modal">
        <button className="lm-close" onClick={() => setLoginOpen(false)}>✕</button>
        <div className="lm-logo">⚡ <span>Assets<b>4</b>Unity</span></div>

        <div className="lm-tabs">
          <button className={`lm-tab ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>Login</button>
          <button className={`lm-tab ${tab === "register" ? "active" : ""}`} onClick={() => setTab("register")}>Register</button>
        </div>

        {tab === "login" ? (
          <form className="lm-form" onSubmit={handleLogin}>
            <div className="lm-field">
              <label>Email / Username</label>
              <input required type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="lm-field">
              <label>Password</label>
              <input required type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" />
            </div>
            <button type="submit" className="lm-submit">Login</button>
            <a className="lm-forgot" href="#">Lost Password?</a>
          </form>
        ) : (
          <form className="lm-form" onSubmit={handleLogin}>
            <div className="lm-field">
              <label>Full Name</label>
              <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
            </div>
            <div className="lm-field">
              <label>Email</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="lm-field">
              <label>Password</label>
              <input required type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" />
            </div>
            <button type="submit" className="lm-submit">Create Account</button>
          </form>
        )}
      </div>
    </>
  );
}
