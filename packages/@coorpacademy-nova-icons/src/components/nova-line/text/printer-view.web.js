import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={4} cy={10} r={1} />
      <path d="M3 13v1H2V8h16v2h2V8c0-1.103-.896-2-2-2H2C.897 6 0 6.897 0 8v6c0 1.103.897 2 2 2h1v3a1 1 0 0 0 1 1h6v-2H5v-4h5v-2H4a1 1 0 0 0-1 1zM5 2h8.586L15 3.414V5h2V3a.997.997 0 0 0-.293-.707l-2-2A1 1 0 0 0 14 0H4a1 1 0 0 0-1 1v4h2V2z" />
      <path d="M23.414 22l-3.247-3.247A4.969 4.969 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22zM13 16c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
