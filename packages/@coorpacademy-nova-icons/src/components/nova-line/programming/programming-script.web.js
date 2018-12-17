import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 6h6v2H9zM9 10h6v2H9z" />
      <path d="M19 2H9C7.346 2 6 3.346 6 5v9c-2.206 0-4 1.794-4 4s1.794 4 4 4h8c2.206 0 4-1.794 4-4V8h3a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3zm-8.463 18H6c-1.103 0-2-.897-2-2s.897-2 2-2h4.537A3.97 3.97 0 0 0 10 18c0 .728.195 1.411.537 2zM16 18c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2a1 1 0 0 0 0-2H8V5c0-.551.449-1 1-1h7.184A2.966 2.966 0 0 0 16 5v13zm4-12h-2V5c0-.551.449-1 1-1s1 .449 1 1v1z" />
    </g>
  </svg>
);

export default SvgComponent;
