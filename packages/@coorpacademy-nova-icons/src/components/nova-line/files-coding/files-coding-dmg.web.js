import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM8 14.006c0-2.206-1.794-4-4-4H2v8h2c2.206 0 4-1.794 4-4zm-4-2c1.103 0 2 .897 2 2s-.897 2-2 2v-4zM22 12.006v-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-3h-3v2h1v1h-2v-4h4zM15 18.006v-7a1.002 1.002 0 0 0-1.832-.555L12 12.204l-1.168-1.752A1 1 0 0 0 9 11.006v7h2v-3.697l.168.251c.371.557 1.293.557 1.664 0l.168-.251v3.697h2z" />
    </g>
  </svg>
);

export default SvgComponent;
