import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.996 6.917A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h7.063v-2H2.087L2.92 8H4v3h2V8h6v3h2V8h1.08l.5 6h2.007l-.591-7.083zM12 6H6V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1z" />
      <path d="M10 16h2v8h-2zM13 16h2v5h-2zM13 22h2v2h-2zM16 16h2v8h-2zM19 16h2v5h-2zM22 16h2v8h-2zM19 22h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
