import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.996 6.917A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h13v-2H2.087L2.92 8H4v3h2V8h6v3h2V8h1.08l.5 6h2.007l-.591-7.083zM6 6V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
