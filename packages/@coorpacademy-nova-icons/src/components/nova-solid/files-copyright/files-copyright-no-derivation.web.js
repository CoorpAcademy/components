import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.5 9c.169 0 .333.016.5.026v-4.44L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h8.299A8.45 8.45 0 0 1 9 17.5 8.5 8.5 0 0 1 17.5 9zM12 1l5 5h-5V1z" />
      <path d="M17.5 11a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm3.501 9H14v-2h7.001v2zm0-3H14v-2h7.001v2z" />
    </g>
  </svg>
);

export default SvgComponent;
