import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 11.998c1.654 0 3-1.345 3-3 0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .449 1 1 0 .551-.449 1-1 1s-1-.449-1-1c0-.551.449-1 1-1z" />
      <path d="M18 2.998H6c-1.103 0-2 .896-2 2v17h16v-17c0-1.104-.897-2-2-2zm0 17H6v-15h12v15z" />
      <circle cx={16} cy={6.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
