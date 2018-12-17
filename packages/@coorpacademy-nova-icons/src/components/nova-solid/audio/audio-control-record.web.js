import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <path d="M12 8.003a4 4 0 1 0 .002 8.002A4 4 0 0 0 12 8.003zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14.003z" />
    </g>
  </svg>
);

export default SvgComponent;
