import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM15 18.003v-8h-2v3h-2v-3H9v8h2v-3h2v3zM4 16.003h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H2v8h2v-2zm0-4h1a1 1 0 0 1 0 2H4v-2zM19 10.003h-3v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1v-2h1a1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
