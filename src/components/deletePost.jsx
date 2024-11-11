const ParentComponent = () => {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};
