import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 8h-.63l-6.72-5.759a1 1 0 0 0-1.301 0L4.63 8H4c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V10c0-1.102-.896-2-2-2zm-8-3.682L16.297 8H7.703L12 4.318zM20 20H4V10h16v10z" />
      <path d="M6 19h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
