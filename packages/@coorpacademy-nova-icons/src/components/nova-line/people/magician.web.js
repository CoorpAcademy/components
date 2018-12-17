import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 18v4.5l3-1.5 3 1.5V18l-3 1.5zM7 9c0 2.757 2.243 5 5 5s5-2.243 5-5V8h2V6h-2V0H7v6H5v2h2v1zm2-7h6v4H9V2zm6 6v1c0 1.654-1.346 3-3 3s-3-1.346-3-3V8h6z" />
      <path d="M12 15c-4.71 0-8 2.467-8 6v3h4v-2H6v-1c0-2.355 2.467-4 6-4s6 1.645 6 4v1h-2v2h4v-3c0-3.533-3.29-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
