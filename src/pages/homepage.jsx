import React from "react";
import PostCard from "../components/PostCard";
import "./HomePage.css";

export default function HomePage({ posts }) {
  return (
    <section className="home-page">
      {/* Header section */}
      <header className="home-header">
        <h1 className="app-name">mimoda</h1>
        <span className="icon">🔖</span>{" "}
        {/* Replace with your preferred icon */}
      </header>

      {/* Container for all posts */}
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
