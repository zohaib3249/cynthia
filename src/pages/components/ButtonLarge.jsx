import * as React from "react";
// import "./ButtonLarge.css";
const ButtonLarge = (props) => {
  return (
    <button type={props.type} className={`button-large ${props.className || ""}`}>
      <div className="rectangle-2">{props.newFeature || "Validate"}</div>
    </button>
  );
};
export default ButtonLarge;
