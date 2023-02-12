import * as React from "react";
// import "./ButtonLarge2.css";
const ButtonLarge2 = (props) => {
  return (
    <a href={props.link}>
      <button className={`button-large-2 ${props.className || ""}`}>
      <div className="">
        <span className="new-feature">
          {props.newFeature || "Forgot you password ?"}
        </span>
      </div>
    </button>
    </a>
  );
};
export default ButtonLarge2;
