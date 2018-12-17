import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M6 4c0 1.103-.896 2-2 2H3v3h2V7.874A4.01 4.01 0 0 0 8 4c0-2.206-1.795-4-4-4S0 1.794 0 4h2c0-1.102.896-2 2-2s2 .898 2 2z" />
      <circle cx={4} cy={11} r={1} />
      <path d="M20 3.999c-.465 0-.869.321-.975.775L18.051 9H9v2h8.59l-1.385 6H7.781l-.75-3H4.97l1.061 4.243c.111.445.51.757.969.757h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
