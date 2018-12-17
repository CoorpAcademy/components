import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 3h18v2H4zM10 7h12v2H10zM10 11h12v2H10zM10 15h12v2H10zM4 19h18v2H4zM8 6l-6 6 6 6z" />
    </g>
  </svg>
);

export default SvgComponent;
