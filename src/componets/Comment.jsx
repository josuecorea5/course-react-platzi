import React from "react";
import UserInfo from "./UserInfo";

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formDate(props.date)}</div>
    </div>
  );
}

function formDate(date) {
  return date.toLocalDateString();
}

export default Comment;
