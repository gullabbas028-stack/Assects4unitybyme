// components/CartModal/CartModal.jsx
import React from "react";
import { useApp } from "../../context/AppContext.jsx";
import "./CartModal.css";

export default function CartModal() {
  const { cart, cartOpen, setCartOpen, removeFromCart, cartTotal } = useApp();

  if (!cartOpen) return null;

  return (
    <>
      <div className="overlay" onClick={() => setCartOpen(false)} />
      <div className="cart-modal">
        <div className="cm-header">
          <h3>🛒 Your Cart ({cart.length})</h3>
          <button className="cm-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        <div className="cm-body">
          {cart.length === 0 ? (
            <div className="cm-empty">
              <span>🛒</span>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cm-item">
                <div className="cmi-thumb" style={{ background: item.gradient }}>
                  <span>{item.image}</span>
                </div>
                <div className="cmi-info">
                  <div className="cmi-title">{item.title}</div>
                  <div className="cmi-price">${item.price.toFixed(2)}</div>
                </div>
                <button className="cmi-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cm-footer">
            <div className="cm-total">
              <span>Total:</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <button className="cm-checkout">Proceed to Checkout →</button>
          </div>
        )}
      </div>
    </>
  );
}
