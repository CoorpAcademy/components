import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.001 10c.315 0 .625.023.93.059C17.973 9.71 18 9.358 18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9h.002a8 8 0 0 1 7.999-8zM8 9.535V4h2v4.465l2.555 1.703-1.109 1.663L8 9.535zM24.001 16.286h-4.286L18.001 12l-1.714 4.286h-4.285l3.708 3.13L13.715 24l4.286-2.834L22.287 24l-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
