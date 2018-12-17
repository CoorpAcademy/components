import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16 9h-3V5h3V3H8v2h3v4H8c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2v1h2v-1h4v1h2v-1c1.103 0 2-.897 2-2v-9c0-1.104-.897-2-2-2zM8 20v-9h8l.001 9H8z" />
      <path d="M10 14h2v1h2v-3h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
