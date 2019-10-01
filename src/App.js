import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://bcassetcdn.com/asset/logo/4c8f8b36-51b9-4ebf-b20c-00e5c25719c3/logo?v=4&text=Logo+Text+Here"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            className="content__image"
            src="https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg"
            alt=""
          />
        </div>
        <div>ava+desc</div>
        <div>
          my posts
          <div>new post</div>
          <div>pos1</div>
          <div>pos2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
