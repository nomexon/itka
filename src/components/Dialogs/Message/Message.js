import React from "react";

const Message = props => {
  return (
    <div className="dialogs__message">
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
