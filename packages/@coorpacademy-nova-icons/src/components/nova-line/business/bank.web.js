import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 20h19v2H2zM21.533 8.154l-9.5-6a1 1 0 0 0-1.068 0l-9.5 6A1 1 0 1 0 2 10h19a1.001 1.001 0 0 0 .533-1.846zM5.455 8L11.5 4.183 17.543 8H5.455zM7 19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3zm-2-6h1v4H5v-4zM13 19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3zm-2-6h1v4h-1v-4zM19 19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3zm-2-6h1v4h-1v-4z" />
    </g>
  </svg>
);

export default SvgComponent;
