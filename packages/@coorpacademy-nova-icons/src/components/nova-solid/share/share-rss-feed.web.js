import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={5} cy={19.001} r={3} />
      <path d="M3 9v2c5.514 0 10 4.484 10 10h2C15 14.383 9.617 9 3 9z" />
      <path d="M3 3v2c8.822 0 16 7.178 16 16h2c0-9.925-8.074-18-18-18z" />
    </g>
  </svg>
);

export default SvgComponent;
