import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 3h2v4h-2z" />
      <path d="M18 8h-1V3h-2v5H9V3H7v5H6a2 2 0 0 0-2 2v1c0 4.078 3.055 7.438 7 7.931V22h2v-3.069c3.945-.493 7-3.853 7-7.931v-1a2 2 0 0 0-2-2zm-6 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 15z" />
    </g>
  </svg>
);

export default SvgComponent;
