import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM19 16.003v-6h-2v8h5v-2zM16 18.003v-7a1.002 1.002 0 0 0-1.832-.555L13 12.201l-1.168-1.752a.999.999 0 0 0-1.832.554v7h2v-3.697l.168.251c.371.557 1.293.557 1.664 0l.168-.25v3.697h2zM4.333 18.003l1.233-2.055L6.8 18.003h2.333l-2.401-4 2.401-4H6.8l-1.234 2.056-1.233-2.056H2l2.4 4-2.4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
