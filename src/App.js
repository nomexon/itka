import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="content">
          <Route path={"/dialogs"} render={Dialogs} />
          <Route path={"/profile"} render={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
