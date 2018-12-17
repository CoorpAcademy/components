import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 20.999v-17c0-1.102-.897-2-2-2H8c-1.103 0-2 .898-2 2v17H3v2h18v-2h-3zm-10 0v-17h8l.001 17H8z" />
      <path d="M13 9.999h2v4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
