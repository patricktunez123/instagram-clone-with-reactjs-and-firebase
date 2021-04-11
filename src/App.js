import { useState, useEffect } from "react";
import Header from "./components/Header";
import { db } from "./config/fireBase";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snap) => {
      setPosts(
        snap.docs.map((doc) => {
          return { post: doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {posts.map(({ post, id }) => {
          return (
            <Post
              key={id}
              username={post.username}
              media={post.mediaUrl}
              caption={post.caption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
