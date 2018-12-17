import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.293 9.708L6.586 11H2v2h4.586l-1.293 1.294 1.414 1.414L10.414 12 6.707 8.294zM11 2h2v20h-2zM14 3h8v2h-8zM14 7h6v2h-6zM14 11h8v2h-8zM14 15h6v2h-6zM14 19h8v2h-8z" />
    </g>
  </svg>
);

export default SvgComponent;
