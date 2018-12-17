import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 4c-.466 0-.869.321-.975.775L18.051 9H6v1c0 .943-.663 1.734-1.545 1.942l1.575 6.3A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775L20.796 6H24V4h-4zM2 1h2v6H2z" />
      <circle cx={3} cy={9} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
