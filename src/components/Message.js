import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ id, contents:{timestamp,photo,email,uid,message,displayName} }) {
  return (
    <div className="message">
    <Avatar src={photo}/>
      <p>{message} </p>
      <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
    </div>
  );
}

export default Message;
