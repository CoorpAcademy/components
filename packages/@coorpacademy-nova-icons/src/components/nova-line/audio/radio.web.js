import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 8H6.922l7.557-4.122-.958-1.756-10.834 5.91A1.998 1.998 0 0 0 1 10v10c0 1.103.897 2 2 2h17c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2zM3 20V10h17l.001 10H3z" />
      <path d="M5 12h8v2H5zM5 16h6v2H5z" />
      <circle cx={16} cy={16} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
