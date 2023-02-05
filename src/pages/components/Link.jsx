import * as React from "react";
// import "./Link.css";
const Link = (props,name) => {
  return (
    <div className={`link ${props.className || ""}`}>
      <span className="link-1">
        <a href={props.link}>{props.name}</a>
      </span>
    </div>
  );
};
export default Link;
