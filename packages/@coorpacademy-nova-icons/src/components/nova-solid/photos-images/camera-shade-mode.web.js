import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.1 16.1L14 19.195V22h1.586l3.707-3.706zM20.707 19.708L18.414 22H23zM8 7.001L0 15h4v7h3v-4h2v4h3v-7h4z" />
      <circle cx={19} cy={5} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
