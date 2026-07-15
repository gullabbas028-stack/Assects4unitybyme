// components/ProductCard/ProductCard.jsx
import React from "react";
import { useApp } from "../../context/AppContext.jsx";
import "./ProductCard.css";

function isImageUrl(value) {
  return typeof value === "string" && /^(https?:\/\/|\/)/.test(value);
}

export default function ProductCard({ product, showTag = false }) {
  const { addToCart } = useApp();

  return (
    <div className="product-card fade-up">
      {/* Thumbnail */}
      <div className="pc-thumb" style={{ background: product.gradient }}>
        {isImageUrl(product.image) ? (
          <img
            className="pc-image"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        ) : (
          <span className="pc-emoji">{product.image}</span>
        )}
        {showTag && product.tag && (
          <span className="pc-tag">{product.tag}</span>
        )}
        <div className="pc-overlay">
          <button className="pc-quick-add" onClick={() => addToCart(product)}>
            + Add to Cart
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="pc-body">
        <div className="pc-category">{product.category}</div>
        <h3 className="pc-title">{product.title}</h3>
        <div className="pc-footer">
          <div className="pc-meta">
            <span className="pc-author">by <strong>Assets4Unity</strong></span>
          </div>
          <div className="pc-price-row">
            <span className="pc-price">${product.price.toFixed(2)}</span>
            <button className="pc-cart-btn" onClick={() => addToCart(product)}>
              🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
