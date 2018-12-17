import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={20} cy={22.001} r={1} />
      <circle cx={4} cy={22.001} r={1} />
      <path d="M21 2.001a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h18v-9zM22.633 15.736l-1.288-3.734H2.655l-1.288 3.734c-.186.557-.109 1.129.208 1.57s.837.695 1.425.695h8v3H6v2h12v-2h-5v-3h8c.588 0 1.107-.254 1.425-.695s.393-1.014.208-1.57zM14 16.001h-4v-2h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
