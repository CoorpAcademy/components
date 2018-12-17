import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 8H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h3V10h10v10h3c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2z" />
      <path d="M15 16h-2v4h-2l2 4h5v-4l-3-1zM12 6V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2V6h10z" />
    </g>
  </svg>
);

export default SvgComponent;
