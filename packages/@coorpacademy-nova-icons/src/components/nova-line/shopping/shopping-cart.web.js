import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2c-.466 0-.869.322-.975.775L16.051 7H3a1.005 1.005 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775L18.795 4H22V2h-4zm-2.411 7l-.462 2H4.781l-.5-2h11.308zm-9.808 6l-.5-2h9.385l-.461 2H5.781z" />
      <circle cx={6} cy={20} r={2} />
      <circle cx={14} cy={20} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
