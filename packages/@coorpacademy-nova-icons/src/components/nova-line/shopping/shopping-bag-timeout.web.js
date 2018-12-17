import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 11V8h11.087l-.09-1.083A1 1 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.998.998 0 0 0 1 20h7v-2H2.087L2.92 8H4v3h2zm0-6c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5z" />
      <path d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7c3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M18 13h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
