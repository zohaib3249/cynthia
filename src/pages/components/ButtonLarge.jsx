import * as React from "react";
// import "./ButtonLarge.css";
const ButtonLarge = (props) => {
  return (
    <button type={props.type} className={`btn btn-primary form-control`}>
      Validate
    </button>
  );
};
export default ButtonLarge;
