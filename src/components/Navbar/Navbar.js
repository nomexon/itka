import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={"/profile"}
      >
        Profile
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={"/dialogs"}
      >
        Dialogs
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={"/messages"}
      >
        Messages
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={"/news"}
      >
        News
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={"/settings"}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
