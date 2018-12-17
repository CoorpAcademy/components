import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 15h2v2H1zM1 12h2v2H1zM1 9h2v2H1zM1 6h2v2H1zM1 18h2v2H1zM1 21h2v2H1zM4 21h2v2H4zM7 21h2v2H7zM10 21h2v2h-2zM13 21h2v2h-2zM16 21h2v2h-2zM20 2H7c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h13c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM7 17V4h13l.001 13H7z" />
    </g>
  </svg>
);

export default SvgComponent;
