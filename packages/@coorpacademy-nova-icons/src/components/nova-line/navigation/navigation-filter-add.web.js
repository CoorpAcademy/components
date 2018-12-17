import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 6.001H2v15a1 1 0 0 0 1 1h15v-2H4v-14z" />
      <path d="M21 2.001H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1zm-1 14H8v-12h12v12z" />
      <path d="M13 14.001h2v-3h3v-2h-3v-3h-2v3h-3v2h3z" />
    </g>
  </svg>
);

export default SvgComponent;
