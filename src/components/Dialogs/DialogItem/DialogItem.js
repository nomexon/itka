import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/";
  return (
    <NavLink
      className="dialog__item dialog__item--active"
      to={path + `${props.id}`}
    >
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
