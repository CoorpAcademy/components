import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM4 16.003h2v2h2v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7h2v-2zm0-4h2v2H4v-2zM22 10.003h-2.442L18 12.223v-2.22h-2v8h2v-2.219l1.558 2.219H22l-2.807-4zM9 10.003v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H9zm4 3c0 .552-.449 1-1 1h-1v-2h1c.551 0 1 .45 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
