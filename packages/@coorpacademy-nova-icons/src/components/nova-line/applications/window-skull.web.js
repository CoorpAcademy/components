import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M12 9c-2.206 0-4 1.794-4 4 0 .967.36 1.903 1 2.63V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.37c.64-.728 1-1.664 1-2.63 0-2.206-1.794-4-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
