import React from "react";
import "./PostCard.css";

const PostCard = ({ post, deletePost }) => {
  if (!post) return null;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id); // Calls delete function with post ID
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-options">•••</span>
        <button className="follow-btn">
          {post.following ? "following" : "follow"}
        </button>
        {/* Conditionally render delete button for posts by alma_sand */}
        {post.username === "alma_sand" && (
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
      <img
        src={post.image || "/images/default.jpg"}
        alt={post.username || "User"}
        className="post-image"
      />
      <div className="post-content">
        <div className="post-user-info">
          <p className="username">@{post.username || "unknown_user"}</p>
          <div className="post-stats">
            <span className="post-likes">
              ❤️ {post.likes?.toLocaleString() || 0}
            </span>
            <span className="post-comments">💬 {post.comments || 0}</span>
          </div>
        </div>
        <p className="post-caption">
          {post.caption || "No caption available"}{" "}
          {post.caption?.split(" ").map((word) =>
            word.startsWith("#") ? (
              <span key={word} className="hashtag">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </p>
        <span className="post-time">{post.time_ago || "Unknown time"}</span>
      </div>
    </div>
  );
};

export default PostCard;
