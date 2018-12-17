import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
      <path d="M8 8h8v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
