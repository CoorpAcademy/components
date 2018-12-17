import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24h-24z" />
    <g fill="currentColor">
      <path d="M11.999 18.998h-8v-12h3v-4h-3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6l-2 2v2z" />
      <path d="M19.999.998h-10c-1.103 0-2 .897-2 2v6c0 1.104.897 2 2 2h1v3a1 1 0 0 0 1.707.708l3.707-3.708h3.586a2 2 0 0 0 2-2v-6c0-1.103-.896-2-2-2zm-5 8s-3-2-3-4c0-1 .672-2 1.5-2a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 1.5-1.5c.829 0 1.5 1 1.5 2 0 2-3 4-3 4z" />
    </g>
  </svg>
);

export default SvgComponent;
