import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM4 18.003h2v-6h2v6h2v-6h2v6h2v-3.697l.168.251c.371.557 1.293.557 1.664 0l.168-.25v3.697h2v-7a1.002 1.002 0 0 0-1.832-.555L15 12.201l-1.168-1.752a.998.998 0 0 0-1.832.554v-1H4v3H2v-3H0v8h2v-3h2v3zM21 16.003v-6h-2v8h5v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
