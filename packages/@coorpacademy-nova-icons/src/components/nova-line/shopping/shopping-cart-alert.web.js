import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H7v2h10.589l-1.384 6H7.781l-1.25-5H4.47l1.561 6.243c.111.445.51.757.969.757h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4zM2 1h2v6H2z" />
      <circle cx={3} cy={9} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
