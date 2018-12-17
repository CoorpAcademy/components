import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 3.006h2v6h-2z" />
      <circle cx={18} cy={11.006} r={1} />
      <path d="M8 16.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.794 4 4 4zM8 17.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
