import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.077 11H8v2h1.077c.429 2.922 2.74 4 4.923 4v-2c-1.157 0-2.491-.386-2.879-2H14v-2h-2.879c.388-1.613 1.722-2 2.879-2V7c-2.183 0-4.494 1.078-4.923 4z" />
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 4.412-3.589 8-8 8z" />
    </g>
  </svg>
);

export default SvgComponent;
