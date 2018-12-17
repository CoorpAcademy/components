import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={6} cy={20} r={2} />
      <circle cx={14} cy={20} r={2} />
      <path d="M2.882 6h2.236l-.829-1.658 1.323-.882L6.882 6H11V4.999h2V6h2V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.764L6.894 1.552a1 1 0 0 0-1.449-.384l-3 2a1 1 0 0 0-.34 1.279L2.882 6z" />
      <path d="M18 2c-.466 0-.869.322-.975.775L16.051 7H3a1.005 1.005 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775L18.795 4H22V2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
