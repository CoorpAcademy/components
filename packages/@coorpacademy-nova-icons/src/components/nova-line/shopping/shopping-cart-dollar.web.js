import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 4c-.466 0-.869.322-.975.775L18.051 9H10v2h7.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775L20.795 6H24V4h-4zM5 12v-1c1.654 0 3-1.346 3-3S6.654 5 5 5H3a1.001 1.001 0 0 1 0-2h4V1H5V0H3v1C1.346 1 0 2.346 0 4s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2H1v2h2v1h2z" />
    </g>
  </svg>
);

export default SvgComponent;
