import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9.086V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h10v-5.997c0-3.525 2.609-6.434 6-6.921zm-6-8.082l5 5h-5v-5zm.632 10.262L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897z" />
      <path d="M23 15.008c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.101.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19.004} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
