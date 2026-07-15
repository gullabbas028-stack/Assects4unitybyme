// components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { NAV_CATEGORIES } from "../../data/products.js";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount, setCartOpen, setLoginOpen, loggedIn, username, logout, setPage } = useApp();
  const [openMenu, setOpenMenu]   = useState(null);
  const [mobileOpen, setMobile]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="nav-logo" onClick={() => setPage("home")}>
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Assets<span className="logo-4">4</span>Unity</span>
        </div>

        {/* Desktop nav */}
        <nav className="nav-menu">
          <button
            className={`nav-item ${openMenu === "home" ? "active" : ""}`}
            onClick={() => { setPage("home"); setOpenMenu(null); }}
          >Home</button>

          {NAV_CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className="nav-item-wrap"
              onMouseEnter={() => setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className={`nav-item ${openMenu === i ? "active" : ""}`}>
                {cat.label}
                {cat.sub && <span className="nav-chevron">▾</span>}
              </button>
              {cat.sub && openMenu === i && (
                <div className="nav-dropdown">
                  {cat.sub.map(s => (
                    <button key={s} className="dropdown-item">{s}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="nav-actions">
          {/* Cart */}
          <button className="nav-cart-btn" onClick={() => setCartOpen(true)}>
            <span className="cart-icon-wrap">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </span>
          </button>

          {/* Login / User */}
          {loggedIn ? (
            <div className="nav-user">
              <span className="user-name">👤 {username}</span>
              <button className="btn-outline" onClick={logout}>Logout</button>
            </div>
          ) : (
            <button className="btn-login" onClick={() => setLoginOpen(true)}>Login</button>
          )}

          {/* Mobile toggle */}
          <button className="mobile-toggle" onClick={() => setMobile(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container">
            <button className="mob-item" onClick={() => { setPage("home"); setMobile(false); }}>Home</button>
            {NAV_CATEGORIES.map(cat => (
              <div key={cat.label}>
                <button className="mob-item">{cat.label}</button>
                {cat.sub && cat.sub.map(s => (
                  <button key={s} className="mob-sub-item">— {s}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
