import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17.294 11.707l-2.293-2.293V6h2v2.586l1.707 1.707z"
    />
    <path
      d="M16.001 16v-2c2.757 0 5-2.243 5-5s-2.243-5-5-5a4.998 4.998 0 0 0-3.292 1.236l-1.317-1.504A6.993 6.993 0 0 1 16.001 2c3.86 0 7 3.141 7 7 0 3.86-3.14 7-7 7zM7.001 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM9.001 22h-4a1 1 0 0 1-1-1v-4h-1a1 1 0 0 1-1-1v-3c0-2.757 2.243-5 5-5s5 2.243 5 5v3a1 1 0 0 1-1 1h-1v4a1 1 0 0 1-1 1zm-3-2h2v-4a1 1 0 0 1 1-1h1v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2h1a1 1 0 0 1 1 1v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
