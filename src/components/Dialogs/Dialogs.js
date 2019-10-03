import React from "react";
import "./Dialogs.css";
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

const Message = props => {
  return (
    <div className="dialogs__message">
      <p>{props.message}</p>
    </div>
  );
};

const Dialogs = () => {
  let data = [
    { id: 1, name: 1111 },
    { id: 2, name: 2222 },
    { id: 3, name: 3333 },
    { id: 4, name: 4444 }
  ];
  let dataMessages = [
    {
      id: 1,
      text: "hi",
      from: ""
    },
    {
      id: 2,
      text: "hi 22222",
      from: ""
    },
    {
      id: 3,
      text: "hi 3333",
      from: ""
    }
  ];
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {data.map(item => {
          return <DialogItem key={item.id} name={item.name} id={item.id} />;
        })}
      </div>
      <div className="dialogs__messages">
        {dataMessages.map(message => {
          return <Message key={message.id} message={message.text} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
