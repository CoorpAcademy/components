import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <g fill="currentColor">
      <path d="M15 11H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.613l-1.562 4.684a.994.994 0 0 0 .139.9.995.995 0 0 0 .811.416h3a1 1 0 0 0 .949-.684l1.313-3.938 1.881 3.136 1.715-1.029L10.766 16H15a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM21 12h-2a1 1 0 0 0-1 1h-1v2h1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM6.001 10h5.001V2H6.001a4 4 0 1 0 0 8zM19 5h-2.142A3.988 3.988 0 0 0 13 2h-.999v8H13a3.99 3.99 0 0 0 3.858-3H19V5z" />
    </g>
  </svg>
);

export default SvgComponent;
