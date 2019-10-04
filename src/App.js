import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App({ myState }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route
          path={"/dialogs"}
          render={() => (
            <Dialogs
              dialogs={myState.dialogsPage.dialogs}
              messages={myState.dialogsPage.messages}
            />
          )}
        />
        <Route
          path={"/profile"}
          render={() => <Profile posts={myState.profilePage.posts} />}
        />
      </div>
    </div>
  );
}

export default App;
