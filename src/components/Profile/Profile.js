import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className="content__image"
          src="https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg"
          alt=""
        />
      </div>
      <div>ava+desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
