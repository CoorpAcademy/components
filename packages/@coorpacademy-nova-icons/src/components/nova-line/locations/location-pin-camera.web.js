import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M9 13h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-.02a.979.979 0 0 1-.98-.98V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.02a.98.98 0 0 1-.98.98H9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm3-5a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 8z" />
      <path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
    </g>
  </svg>
);

export default SvgComponent;
