import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM16 9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v5.998c0-1.776.775-3.365 2-4.464V9zM20 11.998c-2.206 0-4 1.794-4 4h2c0-1.104.897-2 2-2s2 .896 2 2c0 1.102-.897 2-2 2h-1v3h2V19.87a4.004 4.004 0 0 0 3-3.872c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={22.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
