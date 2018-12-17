import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 10.004h-2v5h-1v-3H8v3H7v-7H5v7H4v2h10v-2h-1z" />
      <path d="M18 4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18h10v4h4l.001 11.002H18V4.587zM17 19.002h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
