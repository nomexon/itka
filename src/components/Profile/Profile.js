import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import "./Profile.css";
const Profile = props => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts dataPost={props.posts} />
    </div>
  );
};

export default Profile;
