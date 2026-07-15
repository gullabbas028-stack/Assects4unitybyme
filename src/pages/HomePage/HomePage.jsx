// pages/HomePage/HomePage.jsx
import React from "react";
import Hero             from "../../components/Hero/Hero.jsx";
import ProductGrid      from "../../components/ProductGrid/ProductGrid.jsx";
import MembershipBanner from "../../components/MembershipBanner/MembershipBanner.jsx";
import BlogCard         from "../../components/BlogCard/BlogCard.jsx";
import {
  FEATURED_PRODUCTS,
  LATEST_PRODUCTS,
  POPULAR_PRODUCTS,
  BLOG_POSTS,
} from "../../data/products";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Hero />

      {/* 📁 Featured Items */}
      <ProductGrid
        emoji="📁"
        title="Featured Items"
        subtitle="We hand-pick top Unity assets & games weekly."
        products={FEATURED_PRODUCTS}
        viewAllLabel="View All Featured Items"
        showTag
      />

      {/* ➕ Latest Items */}
      <ProductGrid
        emoji="➕"
        title="Latest Items"
        subtitle="Create magic with Unity's latest assets & source code for your game."
        products={LATEST_PRODUCTS}
        viewAllLabel="View All Latest Items"
      />

      {/* 🔥 Popular Items */}
      <ProductGrid
        emoji="🔥"
        title="Popular Items"
        subtitle="Build your own game with Unity's popular assets & game source code."
        products={POPULAR_PRODUCTS}
        viewAllLabel="View All Popular Items"
      />

      {/* Membership */}
      <MembershipBanner />

      {/* 📝 Blog */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <h2> From The Blog</h2>
              <p>Industry news, product updates, tutorials and more</p>
            </div>
            <a className="view-all" href="#">View All Posts →</a>
          </div>
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        className="whatsapp-float"
        href="https://wa.link/7khem6"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
