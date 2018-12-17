import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 17.999H4v-10h8v-2H4v-2h8v-2H4c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-13h-2v9zm-12 4v-2h12v2H4z" />
      <path d="M7 16.999h6c0-1.841-1.159-3-3-3s-3 1.159-3 3z" />
      <circle cx={10} cy={10.999} r={2} />
      <path d="M20 2.999v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1l3 1v-4l-3 1z" />
    </g>
  </svg>
);

export default SvgComponent;
