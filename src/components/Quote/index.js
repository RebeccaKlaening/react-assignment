import React from "react";

const Quote = props => {
  return (
    <div className="quote-placement">
      <h2>
        {props.children}
      </h2>
    </div>
  )
}


export default Quote;
