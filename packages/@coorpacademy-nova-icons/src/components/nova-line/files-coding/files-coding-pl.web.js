import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.587zM5 21.003v-18h10v4h4l.001 14H5z" />
      <path d="M9 11.006H6v8h2v-2h1c1.654 0 3-1.345 3-3 0-1.654-1.346-3-3-3zm0 4H8v-2h1a1.001 1.001 0 0 1 0 2zM15 11.006h-2v8h5v-2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
