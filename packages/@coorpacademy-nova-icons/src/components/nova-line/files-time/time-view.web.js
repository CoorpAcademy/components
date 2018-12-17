import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 4v5.535l3.446 2.297 1.109-1.664L10 8.465V4z" />
      <path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7h2c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9v-2c-3.859 0-7-3.141-7-7z" />
      <path d="M20.167 18.753A4.966 4.966 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
