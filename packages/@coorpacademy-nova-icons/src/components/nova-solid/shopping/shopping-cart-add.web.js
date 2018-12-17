import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 4c-.466 0-.869.321-.975.775L18.051 9H7.314a5.955 5.955 0 0 1-3.289.998c0 .082-.016.163.005.244l2 8A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775L20.796 6H24V4h-4zM5 8V5h3V3H5V0H3v3H0v2h3v3z" />
    </g>
  </svg>
);

export default SvgComponent;
