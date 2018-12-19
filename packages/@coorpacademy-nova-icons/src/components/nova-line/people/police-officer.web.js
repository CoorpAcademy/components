import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 10c0 2.757 2.243 5 5 5s5-2.243 5-5v-.764l2.41-4.82L12 1.945 4.59 4.416 7 9.236V10zm5 3c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3zm0-8.945l4.59 1.529L15.382 8H8.618L7.41 5.584 12 4.055z" />
      <circle cx={12} cy={6} r={1} />
      <path d="M12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm-1 2.051V22H6c0-2.125 2.012-3.668 5-3.949zM13 22v-3.949c2.988.281 5 1.824 5 3.949h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
