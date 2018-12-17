import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M18 9H6l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-4-7zM7 11h10l2 4H5l2-4zm2 8H4v-2h5v2zm11 0h-5v-2h5v2z" />
      <circle cx={12} cy={2} r={1} />
      <circle cx={10} cy={4.5} r={1} />
      <circle cx={14} cy={4.5} r={1} />
      <circle cx={12} cy={7} r={1} />
      <circle cx={8} cy={7} r={1} />
      <circle cx={16} cy={7} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
