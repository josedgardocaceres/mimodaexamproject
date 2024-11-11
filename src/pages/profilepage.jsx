import React from "react";
import "./ProfilePage.css";

export default function ProfilePage({ posts }) {
  const profileUsername = "alma_sand"; // The current profile's username

  // Filter posts to include only those that match the profile's username
  const userPosts = posts.filter((post) => post.username === profileUsername);

  return (
    <section className="profile-page">
      <header className="profile-header">
        <div className="profile-top">
          <span className="profile-logo">mimoda</span>
          <span className="profile-settings">⚙️</span>
        </div>
        <div className="profile-info">
          <img
            src="/images/almapfp.png"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-details">
            <h2>@{profileUsername}</h2>
            <div className="profile-stats">
              <div>
                <span className="profile-count">900</span>
                <span>followers</span>
              </div>
              <div>
                <span className="profile-count">60</span>
                <span>following</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-tabs">
          <button className="tab active">feed</button>
          <button className="tab">closet</button>
          <button className="tab">board</button>
        </div>
      </header>

      <div className="posts-grid">
        {userPosts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt="User Post"
            className="post-thumbnail"
          />
        ))}
      </div>
    </section>
  );
}
