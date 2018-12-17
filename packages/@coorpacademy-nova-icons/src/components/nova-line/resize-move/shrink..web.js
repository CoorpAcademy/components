import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .005h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 17.999h2.586L.293 22.292l1.414 1.414L6 19.413v2.586h2v-6H2zM18 4.585V1.999h-2v6h6v-2h-2.586l4.293-4.293L22.293.292zM22 17.999v-2h-6v6h2v-2.586l4.293 4.293 1.414-1.414-4.293-4.293zM2 5.999v2h6v-6H6v2.586L1.707.292.293 1.706l4.293 4.293zM16 9.999a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4zm-2.003 4H10v-4h4l-.003 4z" />
    </g>
  </svg>
);

export default SvgComponent;
