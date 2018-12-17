import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 0h10v7H7zM5 8v2h2c0 2.757 2.243 5 5 5s5-2.243 5-5h2V8H5zm7 5c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm3 6.5L12 21l-3 1.5V18l3 1.5 3-1.5v4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
