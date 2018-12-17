import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 4.412-3.589 8-8 8z" />
      <path d="M12 9c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3v1H8v2h1v2H8v2h7v-2h-4v-2h2v-2h-2v-1c0-.551.449-1 1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
