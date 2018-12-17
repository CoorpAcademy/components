import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M13 18v-3h3v-2h-3v-3h-2v3H8v2h3v3z" />
      <path d="M20 3h-2v3h1v15H5V6h1V3H4c-1.103 0-2 .898-2 2v17c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2z" />
      <path d="M8 7h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1.172C14.416.836 13.304 0 12 0S9.584.836 9.172 2H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
