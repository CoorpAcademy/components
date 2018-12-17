import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2c-2.205 0-4 1.794-4 4h5v3.858c1.721-.448 3-2 3-3.858 0-2.206-1.795-4-4-4zM5.586 6h2.828L5.707 3.293A1.002 1.002 0 0 0 5 3H2v2h2.586l1 1z" />
      <path d="M17 7H3a1 1 0 0 0-1 1c0 4.073 3.061 7.436 7 7.931V20H6v2h8v-2h-3v-4.069c3.939-.496 7-3.858 7-7.931a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
