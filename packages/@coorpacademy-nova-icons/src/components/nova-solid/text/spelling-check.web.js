import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4.61 10h4.78l1.154 3H9v2h5v-2h-1.313L7.934.641a1.001 1.001 0 0 0-1.868 0L1.313 13H0v2h5v-2H3.456l1.154-3zM7 3.786L8.621 8H5.379L7 3.786zM22 11.586l-9 9-3-3L8.586 19 13 23.414 23.414 13z" />
    </g>
  </svg>
);

export default SvgComponent;
