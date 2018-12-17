import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 22c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM15 21h-2c0-5.516-4.486-10-10-10V9c6.617 0 12 5.383 12 12z"
      fill="currentColor"
    />
    <path
      d="M21 21h-2c0-8.822-7.178-16-16-16V3c9.926 0 18 8.075 18 18z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
