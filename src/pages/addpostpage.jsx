import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPostPage.css"; // CSS for styling

export default function AddPostPage({ addPost }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      username: "alma_sand",
      caption,
      image,
      createdAt: new Date().toISOString(),
    };

    addPost(newPost);
    setCaption("");
    setImage("");
    navigate("/");
  };

  return (
    <section className="add-post-page">
      <header className="header">
        <span className="logo">mimoda</span>
        <span className="settings-icon">⚙️</span>
      </header>

      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          className="caption-input"
        />
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Paste an image URL..."
          className="image-url-input"
        />

        {/* Action buttons placed above the image */}
        <div className="action-buttons">
          <button type="submit" className="add-post-btn">
            Add Post
          </button>
          <button type="button" className="add-to-closet-btn">
            Add to Closet
          </button>
        </div>
      </form>

      {/* Image preview section */}
      <div className="main-image">
        <img
          src={image || "https://placehold.co/600x400?text=Select+an+image"}
          alt="Main Post"
          className="main-image-preview"
        />
      </div>
    </section>
  );
}
