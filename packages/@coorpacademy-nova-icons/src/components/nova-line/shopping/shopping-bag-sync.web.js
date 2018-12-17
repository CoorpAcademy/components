import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2.92 8H4v3h2V8h6v2h2V8h1.08l.166 2h2.008l-.258-3.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h9v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4c-1.039 0-2.014-.4-2.825-1.175L17 19h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
