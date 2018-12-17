import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 6h-2.149l2.774-2.219-1.25-1.563-5 4A1 1 0 1 0 11 8h5c2.205 0 4 1.795 4 4s-1.795 4-4 4v2c3.309 0 6-2.691 6-6s-2.691-6-6-6zM13 16H8c-2.205 0-4-1.795-4-4s1.795-4 4-4V6c-3.309 0-6 2.691-6 6s2.691 6 6 6h2.149l-2.774 2.219 1.25 1.563 5-4A1 1 0 1 0 13 16z" />
    </g>
  </svg>
);

export default SvgComponent;
