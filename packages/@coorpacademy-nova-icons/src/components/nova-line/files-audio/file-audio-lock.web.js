import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.632.877.633-1.898L8 6.612v5.438z" />
      <path d="M2 2h10v4h4v3.005h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2z" />
      <path d="M23 15c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.104 0 2 .897 2 2h-4c0-1.103.896-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
