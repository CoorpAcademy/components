import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2.92 8H4v3h2V8h6v2h2V8h1.08l.166 2h2.008l-.258-3.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h9v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5z" />
      <path d="M24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
