import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={18} cy={20} r={2} />
      <circle cx={6} cy={20} r={2} />
      <path d="M11.556 15l-1.592-3.582L16.454 4H18v3h1c1.103 0 2 .897 2 2s-.897 2-2 2-2-.896-2-2h-2c0 2.205 1.794 4 4 4s4-1.795 4-4a4.008 4.008 0 0 0-3-3.873V4h2V2h-6.454L9.068 9.403 8 7H2a2 2 0 0 0-2 2v11h3a3.001 3.001 0 0 1 6 0h6a3.001 3.001 0 0 1 6 0h1a2 2 0 0 0 2-2v-3H11.556zM6 12H2V9h4v3z" />
    </g>
  </svg>
);

export default SvgComponent;
