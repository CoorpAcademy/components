import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.247 9h13.507l-1.334 6h2.049l1.334-6H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.724l3.145-5.504L7.132.504 3.42 7H0v2h1.198l1.826 8.217A1 1 0 0 0 4 18h9.001v-2H4.803L3.247 9zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.414L18 23.414l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
