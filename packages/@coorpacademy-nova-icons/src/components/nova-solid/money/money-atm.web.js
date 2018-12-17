import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M0 3v8h4V9H2V5h20v4h-2v2h4V3z" />
      <path d="M13 6l4 4v9h-5l-5-5V6H5v15h14V6z" />
      <circle cx={12} cy={12} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
