import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = ({ dataPost }) => {
  let posts = dataPost.map(post => {
    return <Post key={post.id} message={post.text} likes={post.likesCount} />;
  });

  return (
    <div className="my__posts">
      <h3>my posts</h3>
      <div className="post__sendmessage">
        <textarea className="post__text"></textarea>
        <button className="post__send">Add post</button>
      </div>
      <div className="posts">{posts}</div>
    </div>
  );
};

export default MyPosts;
