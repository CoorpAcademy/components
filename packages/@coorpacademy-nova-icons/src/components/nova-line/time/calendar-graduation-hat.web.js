import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 16.354l-3-1.5v2l1.658.829a3.003 3.003 0 0 0 2.684 0L15 16.854v-2l-3 1.5z" />
      <path d="M18 12.354l-6-3-6 3 6 3 4.25-2.125v4.125h1.5v-4.875z" />
      <path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M15 3H8V1H6v6h2V5h7z" />
    </g>
  </svg>
);

export default SvgComponent;
