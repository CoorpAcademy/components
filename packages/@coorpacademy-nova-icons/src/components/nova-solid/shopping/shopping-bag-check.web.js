import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.584 14.175L17 6H1L0 20h13a5.997 5.997 0 0 1 4.584-5.825zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.413L18 23.414l5.707-5.708z" />
    </g>
  </svg>
);

export default SvgComponent;
