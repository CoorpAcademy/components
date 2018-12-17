import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 20.003H4v-6H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-2v6zM20 2.003H4c-1.103 0-2 .897-2 2v6h2v-6h16v6h2v-6c0-1.104-.897-2-2-2z" />
      <path d="M14 8.003H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1l1.684.562a1.002 1.002 0 0 0 1.316-.95V10.39a1.001 1.001 0 0 0-1.316-.949L15 10.003v-1a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
