import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 4c-.466 0-.869.321-.975.775L18.051 9h-3.897a6.989 6.989 0 0 1-8.558 2.405l-1.02 1.02 1.454 5.818A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775L20.795 6H24V4h-4z" />
      <path d="M8 10c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.018.309 1.963.833 2.753L.586 11 2 12.414l3.247-3.247C6.037 9.691 6.982 10 8 10zm0-8c1.654 0 3 1.346 3 3S9.654 8 8 8 5 6.654 5 5s1.346-3 3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
