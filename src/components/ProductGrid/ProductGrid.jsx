// components/ProductGrid/ProductGrid.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductGrid.css";

export default function ProductGrid({ title, subtitle, emoji, products, viewAllLabel = "View All", showTag = false }) {
  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <h2>{emoji} {title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <a className="view-all" href="#">{viewAllLabel} →</a>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.05}s` }}>
              <ProductCard product={p} showTag={showTag} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
