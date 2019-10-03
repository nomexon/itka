import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = () => {
  let dataPost = [
    {
      id: 1,
      text: "hi how are you11111",
      likesCount: 0
    },
    {
      id: 2,
      text: "hi, how are you2222?",
      likesCount: 20
    },
    {
      id: 3,
      text: "hi, how are you33333?",
      likesCount: 10
    }
  ];
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
