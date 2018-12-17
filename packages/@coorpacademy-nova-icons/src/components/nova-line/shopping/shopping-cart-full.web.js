import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2c-.466 0-.869.322-.975.775L16.051 7H15V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.764L6.895 1.552a1.005 1.005 0 0 0-1.45-.385l-3 2a1 1 0 0 0-.34 1.279L3.382 7H3a1.005 1.005 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775L18.795 4H22V2h-4zm-5 3v2h-2V5h2zm-8.711-.658l1.323-.882L7.382 7H5.618L4.289 4.342zM14.205 15H5.781l-1.5-6h11.308l-1.384 6z" />
      <circle cx={6} cy={20} r={2} />
      <circle cx={14} cy={20} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
