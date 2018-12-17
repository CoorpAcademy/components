import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2H4c-1.103 0-2 .898-2 2v5c0 1.102.897 2 2 2h5c1.104 0 2-.898 2-2V4c0-1.102-.896-2-2-2zM9 13H4c-1.103 0-2 .898-2 2v5c0 1.103.897 2 2 2h5c1.104 0 2-.897 2-2v-5c0-1.102-.896-2-2-2zM12 4.001h10v2H12zM12 7.001h10v2H12zM12 15h10v2H12zM12 18h10v2H12z" />
    </g>
  </svg>
);

export default SvgComponent;
