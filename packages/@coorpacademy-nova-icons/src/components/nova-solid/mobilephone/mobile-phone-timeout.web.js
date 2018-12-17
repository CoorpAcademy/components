import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18c0-2.025.759-3.869 2-5.279V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c.087 0 .171-.015.256-.025A7.99 7.99 0 0 1 10 18zm-8-2V4h8v12H2zM18 12c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
