import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <circle cx={8.999} cy={2.998} r={2} />
      <circle cx={14.999} cy={2.998} r={2} />
      <path d="M15.999 5.998h-2l-1.5 3h5zM10.249 8.998l.75-3h-4l.75 3zM20.566 17.064a3.982 3.982 0 0 1-2.567.934 3.99 3.99 0 0 1-3-1.356 3.99 3.99 0 0 1-3 1.356 3.99 3.99 0 0 1-3-1.356 3.99 3.99 0 0 1-3 1.356 3.98 3.98 0 0 1-2.567-.934c-.3.553-.754.934-1.433.934v2c0 1.655 1.346 3 3 3h14c1.654 0 3-1.345 3-3v-2c-.679 0-1.133-.381-1.433-.934zM20.999 9.998h-18a1 1 0 0 0-1 1v3a1 1 0 0 1 2-.027v.027c0 1.104.897 2 2 2s2-.896 2-2a1 1 0 1 1 2 0c0 1.104.897 2 2 2s2-.896 2-2a1 1 0 1 1 2 0c0 1.104.897 2 2 2s2-.896 2-2v-.005-.009-.013l.001-.013a1 1 0 0 1 1.999.04v-3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
