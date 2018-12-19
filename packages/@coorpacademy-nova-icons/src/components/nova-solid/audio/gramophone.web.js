import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 15.003h10v2H5z" />
      <path d="M20.463 11.159l-5.926-9.312c-.296-.464-.778-.464-1.074 0l-5.926 9.312c-.296.463-.094.918.449 1.007l10.027 1.672c.544.09.987.615.987 1.165v3H3v4h2v-1h10v1h2v-2h3c.55 0 1-.45 1-1v-6c0-.55-.241-1.38-.537-1.844z" />
    </g>
  </svg>
);

export default SvgComponent;
