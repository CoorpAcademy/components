import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 8.005l3-3-3-3v2c-3.86 0-7 3.14-7 7h2c0-2.757 2.243-5 5-5v2zM19 15.005c0 2.757-2.243 5-5 5v-2l-3 3 3 3v-2c3.86 0 7-3.14 7-7h-2z" />
      <path d="M17 17.005v-5a3 3 0 0 0-6 0 3 3 0 0 0-6 0v5h12zm-4-5a1 1 0 1 1 2 0v1h-2v-1zm-4 1H7v-1a1 1 0 1 1 2 0v1z" />
    </g>
  </svg>
);

export default SvgComponent;
