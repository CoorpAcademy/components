import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M9.071 15.371c.02.049.052.09.079.135A.963.963 0 0 0 9 16a1 1 0 1 0 2 0h3a1 1 0 1 0 2 0 .99.99 0 0 0-.146-.49c.049-.083.092-.169.117-.267l1-4A1.001 1.001 0 0 0 16 10H9.077l-.148-.371A1.003 1.003 0 0 0 8 9H6v2h1.322l1.749 4.371zM14.719 12l-.5 2h-3.541l-.801-2h4.842z" />
    </g>
  </svg>
);

export default SvgComponent;
