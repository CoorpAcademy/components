import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.707 3.293L7.293 4.707 8.586 6H6v2h12V6h-6.586z" />
      <circle cx={17} cy={4} r={1} />
      <circle cx={14} cy={3} r={1} />
      <path d="M17.535 9H6.465C6.234 9.345 6 9.611 6 10v10c0 .266.106.52.293.706l1 1A.994.994 0 0 0 8 22h8c.266 0 .52-.105.707-.294l1-1A.992.992 0 0 0 18 20V10c0-.389-.234-.655-.465-1z" />
    </g>
  </svg>
);

export default SvgComponent;
