import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile__info">
      <div>
        <img
          className="profile__info__image"
          src="https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg"
          alt=""
        />
      </div>
      <div className="profile__description">ava+desc</div>
    </div>
  );
};

export default ProfileInfo;
