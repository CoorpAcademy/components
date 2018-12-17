import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.5 15.002h-3.75a.748.748 0 0 1-.624-1.166l2.223-3.334H10v-1.5h3.75a.75.75 0 0 1 .624 1.166l-2.223 3.334H14.5v1.5z" />
      <path d="M16.318 5.274L15 .002H9L7.682 5.274a7.987 7.987 0 0 0 0 13.455L9 24.002h6l1.318-5.273a7.987 7.987 0 0 0 0-13.455zM12 18.002a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </g>
  </svg>
);

export default SvgComponent;
