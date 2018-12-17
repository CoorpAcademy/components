import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.877 10.75h1.749v1.748H5.877z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.376 15.998h-1.75v-1.75H5.877v1.75h-1.75V9.875c0-.483.392-.875.875-.875h3.499c.483 0 .875.392.875.875v6.123zm4.391.002h-1.799L10.25 9.003H12l.861 3.412.837-3.412h1.801l-1.749 6.928.017.069zm6.106-5.247h-.875v3.499h.875V16h-3.499v-1.748h.875v-3.499h-.875v-1.75h3.499v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
