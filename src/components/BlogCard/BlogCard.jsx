// components/BlogCard/BlogCard.jsx
import React from "react";
import "./BlogCard.css";

function isImageUrl(value) {
  return typeof value === "string" && /^(https?:\/\/|\/)/.test(value);
}

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <div className="bc-thumb" style={{ background: post.gradient }}>
        {isImageUrl(post.image) ? (
          <img
            className="bc-image"
            src={post.image}
            alt={post.title}
            loading="lazy"
          />
        ) : (
          <span className="bc-emoji">{post.image}</span>
        )}
      </div>
      <div className="bc-body">
        <div className="bc-meta">
          <span className="bc-author">by <strong>{post.author}</strong></span>
          <span className="bc-sep">·</span>
          <span className="bc-cat">{post.category}</span>
        </div>
        <h3 className="bc-title">{post.title}</h3>
        <p className="bc-excerpt">{post.excerpt}</p>
        <a className="bc-read-more" href="#">Read More →</a>
      </div>
    </div>
  );
}
