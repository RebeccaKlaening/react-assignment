import React from "react";
import './Button.css';

const Button = (props) => {
  return (
  <div {...props} className="button-placement">
    <button className="button">GOT</button>
  </div>
  )
}

export default Button;
