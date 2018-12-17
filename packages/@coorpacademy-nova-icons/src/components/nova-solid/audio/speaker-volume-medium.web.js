import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.383 4.081a1.002 1.002 0 0 0-1.09.217L8 9.005H5c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3l4.293 4.706A1.002 1.002 0 0 0 14 21.005v-16a.998.998 0 0 0-.617-.924zM16 10.005v2c.551 0 1 .449 1 1s-.449 1-1 1v2c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
