import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import img1 from "./images/js.jpg";
import img2 from "./images/reactjs.jpg";
import img3 from "./images/firebase.png";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "patricktuneze2020",
      media: img1,
      caption: `“For those deniers, if they have no shame, why
          would I have fear?” President Kagame | 27th Commemoration of the
          Genocide Against the Tutsi #Kwibuka27.`,
    },
    {
      username: "kayisiree",
      media: img2,
      caption: `“For those deniers, if they have no shame, why
          would I have fear?” President Kagame | 27th Commemoration of the
          Genocide Against the Tutsi #Kwibuka27.`,
    },
    {
      username: "ayoba_messaging",
      media: img3,
      caption: `It's sunday, time for relaxation and some self-care. Check out our yoga poses right now to reduce your stress level and stay in shape.`,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {posts.map((post) => {
          return (
            <Post
              username={post.username}
              media={post.media}
              caption={post.caption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
