import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6H1v13c0 1.103.897 2 2 2h15v-2H3V6zM10 7v2.4h1.2V8.2h1.2v3.6h-1.2V13h3.6v-1.2h-1.2V8.2h1.2v1.2H16V7z" />
      <path d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zm1.587 12H7V5h11v3h3l.001 7z" />
    </g>
  </svg>
);

export default SvgComponent;
