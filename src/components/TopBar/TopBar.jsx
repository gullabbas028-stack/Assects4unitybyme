// components/TopBar/TopBar.jsx
import React, { useState } from "react";
import "./TopBar.css";

export default function TopBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span className="topbar-text">
          🎉 <strong>Ramadan Offer:</strong> Spend $100 and get <strong>26% off!</strong> Use coupon <span className="topbar-code">RAMADAN26</span> at checkout.
        </span>
        <button className="topbar-close" onClick={() => setVisible(false)}>✕</button>
      </div>
    </div>
  );
}
