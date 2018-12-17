import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 13.005h-6v-1h5v-2H9v-3l-6 3v8h6l2-3h6z" />
      <path d="M21 2.005h-5v5l1.562-1.562A13.494 13.494 0 0 1 19 11.505c0 2.894-.901 5.65-2.606 7.976l1.612 1.182A15.375 15.375 0 0 0 21 11.505c0-2.644-.682-5.242-1.962-7.538L21 2.005z" />
    </g>
  </svg>
);

export default SvgComponent;
