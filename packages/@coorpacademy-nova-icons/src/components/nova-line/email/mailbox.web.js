import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 10h6v2H9z" />
      <path d="M20 10V5.341l-8-3.429-8 3.429V10h2v10H4v2h16v-2h-2V10h2zM8 20V8H6V6.659l6-2.571 6 2.571V8h-2v12H8z" />
    </g>
  </svg>
);

export default SvgComponent;
