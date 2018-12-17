import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 16a6 6 0 1 1 .002-12.002A6 6 0 0 1 12 18z" />
      <path d="M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
