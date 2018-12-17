import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM4 16h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H2v8h2v-2zm0-4h1a1.001 1.001 0 0 1 0 2H4v-2zM9 10v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H9zm4 3c0 .552-.449 1-1 1h-1v-2h1c.551 0 1 .448 1 1zM18.5 12H22v-2h-3.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H16v2h3.5c1.378 0 2.5-1.122 2.5-2.5S20.878 13 19.5 13h-1a.5.5 0 0 1 0-1z" />
    </g>
  </svg>
);

export default SvgComponent;
