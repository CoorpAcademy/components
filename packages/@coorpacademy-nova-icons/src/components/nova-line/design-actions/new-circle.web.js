import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
      <path d="M12 4c4.411 0 8 3.59 8 8h2c0-5.514-4.486-10-10-10S2 6.486 2 12c0 5.515 4.486 10 10 10v-2c-4.411 0-8-3.589-8-8 0-4.41 3.589-8 8-8z" />
    </g>
  </svg>
);

export default SvgComponent;
