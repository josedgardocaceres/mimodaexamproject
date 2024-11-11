import React from "react";
import "./searchpage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      {/* Header Section */}
      <header className="search-header">
        <h1 className="app-name">mimoda</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search for users or explore!"
        />
      </header>

      {/* Featured Users Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Users</h2>
          <a href="#" className="see-more">
            ➔
          </a>
        </div>
        <p className="section-subtitle">
          Stand out from the crowd and land a coveted spot on the Featured Users
          page, where your unique style can inspire the mimoda community.
        </p>
        <div className="featured-users">
          <div className="user-card">
            <img src="/images/lokelund.png" alt="User 1" />
            <p className="username">@loke_lund</p>
            <button className="follow-btn">follow</button>
            <div className="tags">
              <span>#gorp</span>
              <span>#thrifted</span>
              <span>#salomon</span>
              <span>#casual</span>
              <span>#københavn</span>
            </div>
          </div>
          <div className="user-card">
            <img src="/images/josefine.png" alt="User 2" />
            <p className="username">@josefineO2</p>
            <button className="follow-btn">follow</button>
            <div className="tags">
              <span>#clean</span>
              <span>#vinted</span>
              <span>#GANNI</span>
              <span>#home</span>
              <span>#stockholm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Hashtags Section */}
      <section className="trending-section">
        <div className="section-header">
          <h2>Trending Hashtags</h2>
          <a href="#" className="see-more">
            ➔
          </a>
        </div>
        <p className="section-subtitle">
          Own your style. Discover fresh trends, share your looks, and connect
          with a community that gets it. Using hashtags can land you a spot on
          the Featured Users page! #mimodatrends
        </p>
        <div className="trending-hashtags">
          <div className="hashtag-card">
            <img src="/images/sportychic.png" alt="Sporty Chic" />
            <span>#sportychic</span>
          </div>
          <div className="hashtag-card">
            <img src="/images/kobenhavn.png" alt="København" />
            <span>#københavn</span>
          </div>
          <div className="hashtag-card">
            <img src="/images/stockholm.png" alt="Stockholm" />
            <span>#stockholm</span>
          </div>
          <div className="hashtag-card">
            <img src="/images/indie.png" alt="Indiesleaze" />
            <span>#indiesleaze</span>
          </div>
        </div>
        <a href="#" className="explore-link">
          explore all trending hashtags
        </a>
      </section>
    </div>
  );
};

export default SearchPage;
