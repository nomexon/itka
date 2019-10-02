import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message={"hi, how are you?"} />
        <Post message={"hi, how are you2222?"} />
        <Post message={"hi, how are you333?"} />
      </div>
    </div>
  );
};

export default MyPosts;
