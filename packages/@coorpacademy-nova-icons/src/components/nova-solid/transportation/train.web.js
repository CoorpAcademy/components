import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={16} cy={19} r={2} />
      <path d="M2 18a1 1 0 0 0 1 1h1c0-.771.3-1.469.779-2H3a1 1 0 0 0-1 1zM10 19h3c0-.771.3-1.469.779-2H9.221c.479.531.779 1.229.779 2zM21 17h-2.779c.479.531.779 1.229.779 2h2a1 1 0 1 0 0-2z" />
      <circle cx={7} cy={19} r={2} />
      <path d="M22 12a4 4 0 0 0-4-4h-4V6h-4v2H6a4 4 0 0 0 0 8h12a4 4 0 0 0 4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
