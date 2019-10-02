import React from "react";
import "./Post.css";
const Post = props => {
  return (
    <div className="post__item">
      <img
        className="post__img"
        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98381915/original/9a98da91fcc1709763e92016d13756af640abcb7/design-minimalist-flat-line-vector-avatar-of-you.jpg"
        alt=""
      />
      {props.message}
      <div className="post__likes">
        <p>
          like <span className="post__likes__count">0</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
