import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM22 12v-2h-4c-1.103 0-2 .898-2 2v6h2v-3h3v-2h-3v-1h4zM13 18v-6h2v-2H9v2h2v6zM4 16h.517l1.167 2H8l-1.432-2.454A2.991 2.991 0 0 0 8 13c0-1.654-1.346-3-3-3H2v8h2v-2zm0-4h1a1.001 1.001 0 0 1 0 2H4v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
