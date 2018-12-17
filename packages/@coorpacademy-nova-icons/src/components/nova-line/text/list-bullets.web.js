import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 2C3.346 2 2 3.345 2 5s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1a1.001 1.001 0 0 1 0 2zM5 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1a1.001 1.001 0 0 1 0 2zM5 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1a1.001 1.001 0 0 1 0 2zM10 4h12v2H10zM10 11h12v2H10zM10 18h12v2H10z" />
    </g>
  </svg>
);

export default SvgComponent;
