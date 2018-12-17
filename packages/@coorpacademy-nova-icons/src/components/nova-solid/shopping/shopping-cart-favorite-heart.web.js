import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H5a1.004 1.004 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M8 2c0-1.105-.896-2-2-2S4 1 4 2c0-1-.895-2-2-2S0 .895 0 2c0 3 4 6 4 6s4-3 4-6z" />
    </g>
  </svg>
);

export default SvgComponent;
