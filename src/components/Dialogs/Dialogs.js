import React from "react";
import "./Dialogs.css";

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({ dialogs, messages }) => {
  let messagesElements = messages.map(message => {
    return <Message key={message.id} message={message.text} />;
  });
  let dataElements = dialogs.map(item => {
    return <DialogItem key={item.id} name={item.name} id={item.id} />;
  });

  return (
    <div className="dialogs">
      <div className="dialogs__items">{dataElements}</div>
      <div className="dialogs__messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
