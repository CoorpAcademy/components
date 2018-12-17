import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.997 6.917A1 1 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.998.998 0 0 0 1 20h13v-2H2.087L2.92 8H4v3h2V8h6v3h2V8h1.08l.167 2h2.007l-.257-3.083zM6 6V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6zM20 12c-2.205 0-4 1.794-4 4h2c0-1.102.897-2 2-2 1.104 0 2 .898 2 2 0 1.103-.896 2-2 2h-1v3h2v-1.126A4.006 4.006 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
