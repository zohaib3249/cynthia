import * as React from "react";
import "./ImputText.css";
const ImputText = (props) => {
  
  return (
    <div className={`input-container ${props.error ? 'error' : ''}`}>
    <input type={props.type}
      className={`imput-text ${props.className || ""}`}
      placeholder={props.placeholder}
      onChange={e => props.onchange_fun(e.target.value)}
    />
    
    {props.error && (
      <div className="error-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
    )}
  </div>
  );
};
export default ImputText;
