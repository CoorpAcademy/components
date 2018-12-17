import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 13l4 10 1-5 5-1z" />
      <path d="M4 12c0-4.411 3.589-8 8-8s8 3.589 8 8h2c0-5.514-4.486-10-10-10S2 6.487 2 12s4.486 10 10 10v-2c-4.411 0-8-3.588-8-8z" />
      <path d="M12 8c2.205 0 4 1.794 4 4h2c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6v-2c-2.205 0-4-1.794-4-4s1.795-4 4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
