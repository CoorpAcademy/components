import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18v-7a2 2 0 0 1 2-2h8V5c0-1.102-.897-2-2-2h-2V0h-2v3H6V0H4v3H2C.897 3 0 3.898 0 5v13c0 1.102.897 2 2 2h8.365A5.823 5.823 0 0 1 10 18zM2 4.999h16v3H2v-3z" />
      <path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.04C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
