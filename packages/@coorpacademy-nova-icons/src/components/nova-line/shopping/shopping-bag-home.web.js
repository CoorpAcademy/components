import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2.92 8H4v3h2V8h6v3h2V8h1.08l.25 3h2.007l-.34-4.083A1 1 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.998.998 0 0 0 1 20h8v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5zM19 21.984h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.277a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.398l5.293 5.293 1.414-1.414-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
