import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import HolaMundo from "./componets/HolaMundo";
import Button from "./componets/Button";
// import comment from "./comment";
// import Comment from "./componets/Comment";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Button />
    {/* <Comment date={comment.date} text={comment.text} author={comment.author} /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
