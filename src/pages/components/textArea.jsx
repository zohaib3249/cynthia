import * as React from "react";
import "./ImputText.css";
const TextArea = (props) => {
  
  return (
   
    <textarea className={`form-control ${props.className || ""}`} id="exampleFormControlTextarea1" rows="3" 
    onChange={e => props.onchange_fun(e.target.value)} placeholder={props.placeholder} value={props.value}></textarea>
    

  );
};
export default TextArea;
