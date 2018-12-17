import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2c-.466 0-.869.321-.975.775L16.05 7H3a.999.999 0 0 0-.971 1.242l2 8c.112.446.512.758.971.758h10c.466 0 .869-.322.975-.775L18.795 4H22V2h-4z" />
      <circle cx={6} cy={20} r={2} />
      <circle cx={14} cy={20} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
