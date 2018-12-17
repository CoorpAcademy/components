import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.383 4.081a1.002 1.002 0 0 0-1.09.217L6 9.005H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3l4.293 4.706A1.002 1.002 0 0 0 12 21.005v-16a1 1 0 0 0-.617-.924zM14 12.005h8v2h-8z" />
    </g>
  </svg>
);

export default SvgComponent;
