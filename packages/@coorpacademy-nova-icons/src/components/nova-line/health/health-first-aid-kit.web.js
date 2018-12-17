import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M20 7h-4V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H4c-1.104 0-2 .898-2 2v10c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V9c0-1.102-.896-2-2-2zM10 5h4v2h-4V5zm9.997 14H4V9h16l-.003 10z" />
      <path d="M13 11h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
