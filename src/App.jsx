import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavigation from "./components/bottomnavigation";
import HomePage from "./pages/homepage.jsx";
import AddPostPage from "./pages/addpostpage.jsx";
import LikePage from "./pages/likespage.jsx";
import ProfilePage from "./pages/profilepage.jsx";
import SearchPage from "./pages/searchpage.jsx";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from Firebase on initial load
  useEffect(() => {
    async function fetchPosts() {
      const url =
        "https://react-user-crud-app-3a943-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Convert object data to array format with an 'id' for each post
        const firebasePosts = Object.keys(data).map((postId) => ({
          id: postId,
          ...data[postId],
        }));

        setPosts(firebasePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  // Function to add a new post locally
  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add" element={<AddPostPage addPost={addPost} />} />
          <Route path="/likes" element={<LikePage />} />
          <Route path="/profile" element={<ProfilePage posts={posts} />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
