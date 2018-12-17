import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 3h3V1h-5v5h2z" />
      <path d="M17.358 6.015H19v-2h-5v5h2V7.523a9.968 9.968 0 0 1 2 5.991 9.977 9.977 0 0 1-3.637 7.715l1.273 1.542A11.964 11.964 0 0 0 20 13.515c0-2.762-.948-5.39-2.642-7.5z" />
      <path d="M16 15v-3a1 1 0 0 0-1-1H9v-1a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 3 12v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L10.721 16H15a1 1 0 0 0 1-1zm-2-1h-4a1 1 0 0 0-.949.684L8.279 17H5v-4.381l2-1V12a1 1 0 0 0 1 1h6v1z" />
    </g>
  </svg>
);

export default SvgComponent;
