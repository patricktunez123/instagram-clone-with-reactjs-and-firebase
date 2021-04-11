import React from "react";
import * as icon from "@material-ui/core";
import "./post.css";

const Post = ({ username, media, caption }) => {
  return (
    <div className="post">
      <div className="post__header">
        <p>
          <icon.Avatar /> <span>{username}</span>
        </p>
      </div>
      <img className="post__media" alt="Media" src={media} />
      <div className="post__footer">
        <p>
          <span>{username}</span> {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
